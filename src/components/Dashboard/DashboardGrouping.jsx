import React from "react";
import GroupingSectionDivide from "./GroupingSectionDivide";
import ExpenseGroup from "./ExpenseGroup";
import FriendTile from "./FriendTile";

function DashboardGrouping({
    friendDetails,
    groupDetails,
    numberOfGroups,
    groups,
}) {
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
            <GroupingSectionDivide sectionTitle="Groups" />
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
            <GroupingSectionDivide sectionTitle="Friends" />
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
        </div>
    );
}

export default DashboardGrouping;
