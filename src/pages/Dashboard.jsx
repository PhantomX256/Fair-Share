import React, { useState, useContext, useEffect } from "react";
import { Context } from "../AuthContext";
import {
    getUserData,
    getGroupData,
    getFriends,
} from "../components/Dashboard/firebaseData";
import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import DashboardGrouping from "../components/Dashboard/DashboardGrouping";
import GreetingSection from "../components/Dashboard/GreetingSection";
import CategoryDivision from "../components/Dashboard/CategoryDivision";

function Dashboard() {
    const { user } = useContext(Context);
    const [name, setName] = useState("");
    const [numberOfGroups, setNumberOfGroups] = useState(0);
    const [groups, setGroups] = useState([]);
    const [groupDetails, setGroupDetails] = useState([]);
    const [friends, setFriends] = useState([]);
    const [friendDetails, setFriendDetails] = useState([]);
    useEffect(() => {
        getUserData(user, setName, setNumberOfGroups, setGroups, setFriends);
    }, [user]);

    useEffect(() => {
        getGroupData(groups, setGroupDetails);
    }, [groups]);

    useEffect(() => {
        getFriends(friends, setFriendDetails);
    }, [friends]);

    return (
        <div>
            <DashboardNavbar name={name} />
            <div style={{ display: "flex" }}>
                <DashboardGrouping
                    friendDetails={friendDetails}
                    groupDetails={groupDetails}
                    numberOfGroups={numberOfGroups}
                />
                <div>
                    <GreetingSection name='Ved' />
                    <CategoryDivision />lun le le bhai
                </div>hehshas
            </div>hurrray!!!!!
        </div>
    );
}

export default Dashboard;
