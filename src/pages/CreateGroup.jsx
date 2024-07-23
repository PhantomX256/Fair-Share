import React, { useContext, useEffect, useState } from "react";
import { getUserData, createGroup } from "../components/Create-Group/firebaseData";
import "../CSS/create-group.css";
import Illustration from "../components/Illustration";
import Input from "../components/Login/Input";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../AuthContext";
import GroupMemberDisplay from "../components/Create-Group/GroupMemberDisplay";
import AddMemberPopup from "../components/Create-Group/AddMemberPopup";
import DeleteMember from "../components/Create-Group/DeleteMember";
import { useNavigate } from "react-router-dom";

function CreateGroup() {
    const { user } = useContext(Context); // Get the current user from context
    const [groupName, setGroupName] = useState(""); // State to store the group name
    const [groupMembers, setGroupMembers] = useState([]); // State to store the list of group members
    const [toggleAddMemberPopup, setToggleAddMemberPopup] = useState(false); // State to control the add member popup visibility
    const [toggleDeleteMemberPopup, setToggleDeleteMemberPopup] = useState({
        deleteID: "",
        popup: false,
    }); // State to control the delete member popup visibility and which member to delete
    const navigate = useNavigate(); // Navigation function from react-router-dom

    // Function to add a new member to the group
    const addGroupMember = (member, id, type) => {
        setGroupMembers((prevMembers) => [
            ...prevMembers,
            { id: id, name: member, type: type },
        ]); // Update the groupMembers state with the new member
    };

    // Function to remove a member from the group
    const removeGroupMember = (id) => {
        if (id === user.uid) {
            alert("You cannot remove yourself"); // Prevent the user from removing themselves
        } else {
            setGroupMembers((prevMembers) =>
                prevMembers.filter((member) => member.id !== id)
            ); // Filter out the member with the given id from the groupMembers state
        }
    };

    // Handle form submission to create the group
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (groupMembers.length === 1) {
            alert("You cannot make a group with just yourself!"); // Prevent creating a group with only one member
        } else if (groupName.trim() === "") {
            alert("Please enter a valid group name"); // Ensure the group name is not empty
        } else {
            await createGroup(groupName, groupMembers); // Call the createGroup function with the group name and members
            navigate("/dashboard"); // Navigate to the dashboard after creating the group
        }
    };

    // Add the current user to the group when the component mounts
    useEffect(() => {
        async function addCurrentUser() {
            await getUserData(user, setGroupMembers); // Fetch and set the current user's data
        }

        addCurrentUser();
    }, [user]);

    // Add a beforeunload event listener to warn the user about unsaved data
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = "";
            return "Are you sure you want to leave? Any unsaved data will be lost.";
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, []);

    return (
        <div className="create-group-main-container">
            {/* Render the delete member popup if toggled */}
            {toggleDeleteMemberPopup.popup && (
                <DeleteMember
                    removeGroupMember={() => {
                        removeGroupMember(toggleDeleteMemberPopup.deleteID);
                        setToggleDeleteMemberPopup({
                            deleteID: "",
                            popup: false,
                        });
                    }}
                    closePopup={() =>
                        setToggleDeleteMemberPopup({
                            deleteID: "",
                            popup: false,
                        })
                    }
                />
            )}
            {/* Render the add member popup if toggled */}
            {toggleAddMemberPopup && (
                <AddMemberPopup
                    groupMembers={groupMembers}
                    addGroupMember={addGroupMember}
                    closePopup={() => setToggleAddMemberPopup(false)}
                />
            )}
            <Illustration
                source="https://img.freepik.com/free-vector/conversation-concept-illustration_114360-1289.jpg?w=740&t=st=1712383049~exp=1712383649~hmac=0fdc7fe663c9b447a19df06bd926a1c2f115e0e86f2487ee677a10db53bff163"
                class="create-group-illustration"
            />
            <img
                src="https://i.ibb.co/dG2Fqmh/Logo2.png"
                style={{
                    position: "absolute",
                    top: "2vh",
                    left: "2vh",
                    width: "15vw",
                    zIndex: "0",
                }}
                alt="Fair Share"
            />
            <span style={{ marginTop: "10.5vh" }}>
                <h1
                    style={{
                        fontFamily: "Red Hat Display",
                        fontSize: "5vh",
                    }}
                >
                    Spread the joy, Split the cash
                </h1>
                <h2
                    style={{
                        fontFamily: "Red Hat Display",
                        fontSize: "4vh",
                        fontWeight: "500",
                        marginBottom: "2vh",
                    }}
                >
                    Your new group name will be
                </h2>
                {/* Form to create the group */}
                <form onSubmit={handleSubmit}>
                    <Input
                        width="25vw"
                        type="text"
                        class="create-group-name"
                        name="groupName"
                        placeholder="Group name"
                        icon={faPeopleGroup}
                        value={groupName}
                        onChange={(e) => {
                            setGroupName(e.target.value); // Update the group name state
                        }}
                    />
                    <span
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: "2vh",
                        }}
                    >
                        <h2
                            style={{
                                fontFamily: "Red Hat Display",
                                fontSize: "3.5vh",
                                fontWeight: "500",
                            }}
                        >
                            Group Members
                        </h2>
                        <span
                            className="group-create-add"
                            onClick={() => setToggleAddMemberPopup(true)} // Toggle the add member popup
                        >
                            + Add a person
                        </span>
                    </span>
                    {/* Display the list of group members */}
                    <div className="group-members-container">
                        {groupMembers.map((member) => (
                            <GroupMemberDisplay
                                key={member.id} // Key for each group member
                                name={member.name}
                                openPopup={() =>
                                    setToggleDeleteMemberPopup({
                                        deleteID: member.id,
                                        popup: true,
                                    })
                                } // Toggle the delete member popup with the selected member's id
                            />
                        ))}
                    </div>
                    <button className="create-group-submit" type="submit">
                        Create Group
                    </button>
                </form>
            </span>
        </div>
    );
}

export default CreateGroup;
