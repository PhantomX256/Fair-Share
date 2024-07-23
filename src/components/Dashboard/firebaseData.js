import { db } from "../../firebase";
import {
    doc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    documentId,
    updateDoc,
} from "firebase/firestore";

export async function getUserData(
    user,
    setName,
    setNumberOfGroups,
    setGroups,
    setFriends
) {
    const userDocRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
        const userData = docSnap.data();
        setName(userData.fullName);
        setNumberOfGroups(userData.groupIds.length);
        setGroups(userData.groupIds || []);
        setFriends(userData.friendIds || []);
    }
}

export async function getGroupData(groups, setGroupDetails) {
    if (groups.length === 0) {
        return;
    }
    const groupCollectionRef = collection(db, "groups");
    const groupsQuery = query(
        groupCollectionRef,
        where(documentId(), "in", groups)
    );
    const querySnapshot = await getDocs(groupsQuery);
    const fetchedGroups = [];
    querySnapshot.forEach((doc) => {
        fetchedGroups.push(doc.data().groupTitle);
    });
    setGroupDetails(fetchedGroups);
}

// Function to fetch names of friends
export async function getFriends(friends, setFriendDetails) {
    // Return early if the friends list is empty
    if (friends.length === 0) return;

    // Reference to the users collection in Firestore
    const userCollectionRef = collection(db, "users");

    // Query to get documents where document ID is in the friends list
    const friendQuery = query(
        userCollectionRef,
        where(documentId(), "in", friends)
    );

    try {
        // Fetch the documents matching the query
        const querySnapshot = await getDocs(friendQuery);

        // Map through the query results to get the full names of the friends
        const fetchedFriends = querySnapshot.docs.map(
            (doc) => doc.data().fullName
        );

        // Set the friend details state with the fetched full names
        setFriendDetails(fetchedFriends);
    } catch (error) {
        // Log any errors that occur during the fetch
        console.error("Error fetching friend details:", error);
    }
}

// Function to add friends
export async function addFriends(
    friends,
    setFriends,
    newFriendId,
    userID,
    setFriendDetails,
    setError,
    setResult
) {
    try {
        // If the person is already a friend
        if (friends.includes(newFriendId)) {
            setError("Friend is already added");
            setResult(false);
            return;
        }

        // The user is adding themself
        if (newFriendId === userID) {
            setError("Cannot add yourself");
            setResult(false);
            return;
        }

        // Does the user exist
        const newFriendDocRef = doc(db, "users", newFriendId);
        const newFriendDoc = await getDoc(newFriendDocRef);

        if (!newFriendDoc.exists()) {
            setError("User does not exist");
            setResult(false);
            return;
        }

        const userDocRef = doc(db, "users", userID); // get userdoc from database

        // push the new friend onto the list
        const updatedFriends = [...friends, newFriendId];
        setFriends(updatedFriends); // set the friends state to new friend list

        await updateDoc(userDocRef, { friendIds: updatedFriends }); // update the friend doc

        await getFriends(updatedFriends, setFriendDetails); // calls the function to refresh the friend list
        setResult(true);
    } catch (error) {
        setError(error.message);
    }
}
