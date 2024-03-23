import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Context } from "../AuthContext";
import { db } from "../firebase";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

function FirstTimeChecker({ children }) {
    const { user } = useContext(Context);
    const navigate = useNavigate();
    const [loadingFirstUser, setLoadingFirstUser] = useState(true); // TODO: implement a loading screen

    useEffect(() => {
        async function checkUser() {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (!docSnap.exists()) {
                const usersRef = collection(db, "users");
                const data = { isNewUser: true };
                await setDoc(doc(usersRef, user.uid), data);
                navigate("/first-time");
            } else {
                const userData = docSnap.data();
                if (userData.isNewUser === true) navigate("/first-time");
                setLoadingFirstUser(false);
            }
        }
        checkUser();
    }, [user, navigate]);

    if (loadingFirstUser) {
        return <div>Loading...</div>; // Or your custom loading screen
    }

    return children;
}

export default FirstTimeChecker;
