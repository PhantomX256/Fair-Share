import React, { useState } from "react";
import GroupingSectionDivide from "./GroupingSectionDivide";
import ExpenseGroup from "./ExpenseGroup";
import FriendTile from "./FriendTile";
import FriendPopup from "./FriendPopup";
import { useNavigate } from "react-router-dom";

function DashboardGrouping({
    friendDetails,
    groupDetails,
    numberOfGroups,
    groups,
    userID,
    friends,
    setFriends,
    setFriendDetails
}) {
    const [toggleFriendPopup, setToggleFriendPopup] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="dashboard-grouping">
            <h2
                style={{
                    margin: "2vh 1.5vw",
                    fontFamily: "Poppins",
                    fontWeight: "400",
                    color: "white",
                    fontSize: "4vh",
                }}
            >
                Dashboard
            </h2>
            <h3
                style={{
                    margin: "2vh 1.5vw",
                    marginBottom: "4vh",
                    fontFamily: "Poppins",
                    fontWeight: "200",
                    color: "white",
                    fontSize: "3.5vh",
                }}
            >
                All Expenses
            </h3>
            <GroupingSectionDivide onClick={() => navigate('/create-group')} sectionTitle="Groups" />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2vh 2vw",
                    gap: "1vh",
                    marginBottom: "2vh",
                }}
            >
                {numberOfGroups === 0 ? (
                    <span
                        style={{
                            fontFamily: "Poppins",
                            fontSize: "3vh",
                            color: "white",
                            fontWeight: "300",
                        }}
                    >
                        No groups created
                    </span>
                ) : (
                    groupDetails.map((name) => (
                        <ExpenseGroup groupTitle={name} />
                    ))
                )}
            </div>
            <GroupingSectionDivide onClick={() => setToggleFriendPopup(true)} sectionTitle="Friends" />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "2vh 2vw",
                    gap: "1vh",
                }}
            >
                {friendDetails.length === 0 ? (
                    <span
                        style={{
                            fontFamily: "Poppins",
                            fontSize: "3vh",
                            color: "white",
                            fontWeight: "300",
                        }}
                    >
                        No friends found
                    </span>
                ) : (
                    friendDetails.map((name) => (
                        <FriendTile friendName={name} />
                    ))
                )}
            </div>
            {toggleFriendPopup && <FriendPopup setFriendDetails={setFriendDetails} setToggleFriendPopup={setToggleFriendPopup} friends={friends} setFriends={setFriends} userID={userID} />}
        </div>
    );
}

export default DashboardGrouping;
