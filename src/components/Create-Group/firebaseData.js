import { db } from "../../firebase";
import {
    addDoc,
    arrayUnion,
    collection,
    doc,
    getDoc,
    updateDoc,
} from "firebase/firestore";

export async function getUserData(user, setGroupMembers) {
    const userDocRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
        const userData = docSnap.data();
        setGroupMembers([{ id: user.uid, name: userData.fullName, type: "user" }]);
    }
}

export async function getAddUserData(userID, addGroupMember) {
    const userDocRef = doc(db, "users", userID);
    const docSnap = await getDoc(userDocRef);
    if (!docSnap.exists()) return false;
    else {
        const userName = docSnap.data().fullName;
        addGroupMember(userName, userID, "user");
        return true;
    }
}

export async function createGroup(groupName, groupMembers) {
    const groupsCollectionRef = collection(db, "groups");
    const groupDocRef = await addDoc(groupsCollectionRef, {
        groupTitle: groupName,
        groupMembers: groupMembers,
    });
    const users = groupMembers.filter((member) => member.type === "user");
    users.forEach(async (user) => {
        const userDocRef = doc(db, "users", user.id);
        await updateDoc(userDocRef, {
            groupIds: arrayUnion(groupDocRef.id),
        });
    });
}
