import { db } from "../../firebase";
import {
    addDoc,
    arrayUnion,
    collection,
    doc,
    getDoc,
    writeBatch
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

// function to create group
export async function createGroup(groupName, groupMembers) {
    const groupsCollectionRef = collection(db, "groups");

    // Create the group doc
    const groupDocRef = await addDoc(groupsCollectionRef, {
        groupTitle: groupName,
        groupMembers: groupMembers,
    });

    // Filter the group members to get the users
    const users = groupMembers.filter((member) => member.type === "user");

    // Initialize a batch
    const batch = writeBatch(db);

    // Add users to the group in batch
    users.forEach(async (user) => {
        const userDocRef = doc(db, "users", user.id);
        batch.update(userDocRef, {
            groupIds: arrayUnion(groupDocRef.id),
        });
    });

    // Commit the batch
    await batch.commit();
}
