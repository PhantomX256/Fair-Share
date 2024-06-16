import { db } from "../../firebase";
import { doc, getDoc, getDocs, collection, query, where, documentId, updateDoc } from "firebase/firestore";

export async function getUserData(user, setName, setNumberOfGroups, setGroups, setFriends) {
    const userDocRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
        const userData = docSnap.data();
        setName(userData.fullName);
        setNumberOfGroups(userData.numberOfGroups);
        setGroups(userData.groupIds || []);
        setFriends(userData.friendIds || []);
    }
}

export async function getGroupData(groups, setGroupDetails) {
    if (groups.length === 0) {
        return;
    }
    const groupCollectionRef = collection(db, 'groups');
    const groupsQuery = query(groupCollectionRef, where(documentId(), 'in', groups));
    const querySnapshot = await getDocs(groupsQuery);
    const fetchedGroups = [];
    querySnapshot.forEach((doc) => {
        fetchedGroups.push(doc.data().groupTitle);
    });
    setGroupDetails(fetchedGroups);
}

export async function getFriends(friends, setFriendDetails) {
    if (friends.length === 0) return;
    const userCollectionRef = collection(db, 'users');
    const friendQuery = query(userCollectionRef, where(documentId(), 'in', friends));
    const querySnapshot = await getDocs(friendQuery);
    const fetchedFriends = [];
    querySnapshot.forEach((doc) => {
        fetchedFriends.push(doc.data().fullName);
    });
    setFriendDetails(fetchedFriends);
}

export async function addFriends(friends, setFriends, newFriendId, userID, setFriendDetails) {
    const userDocRef = doc(db, 'users', userID);
    const currentFriends = friends;
    if (!friends.includes(newFriendId)) currentFriends.push(newFriendId);
    setFriends(currentFriends);
    await updateDoc(userDocRef, { friendIds: friends });
    getFriends(friends, setFriendDetails)
}