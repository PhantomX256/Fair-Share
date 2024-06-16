import React, { useContext, useEffect, useState } from "react";
import { getUserData, createGroup } from "../components/Create-Group/firebaseData";
import "../CSS/create-group.css";
import Illustration from "../components/Illustration";
import Input from "../components/Login/Input";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../AuthContext";
import GroupMemberDisplay from "../components/Create-Group/GroupMemberDisplay";
import AddMemberPopup from "../components/Create-Group/AddMemberPopup";
import { useNavigate } from "react-router-dom";

function CreateGroup() {
    const { user } = useContext(Context);
    const [groupName, setGroupName] = useState("");
    const [groupMembers, setGroupMembers] = useState([]);
    const [toggleAddMemberPopup, setToggleAddMemberPopup] = useState(false);
    const navigate = useNavigate();

    const addGroupMember = (member, id, type) => {
        setGroupMembers([...groupMembers, { id: id, name: member, type: type }]);
    };

    const removeGroupMember = (id) => {
        if (id === user.uid) alert("You dumbass you cannot remove yourself");
        else setGroupMembers(groupMembers.filter((member) => member.id !== id));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (groupMembers.length === 1) alert("You cannot make a group with just yourself!");
        else {
            if (groupName.trim() === "") alert("Please enter a valid group name");
            else {
                await createGroup(groupName, groupMembers);
                navigate('/dashboard');
            }
        } 
    }

    useEffect(() => {
        getUserData(user, setGroupMembers);
    }, [user]);

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
                    zIndex: "2",
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
                <form onSubmit={handleSubmit}>
                    <Input
                        width="25vw"
                        type="text"
                        class="create-group-name"
                        name="groupName"
                        placeholder="Group name"
                        icon={faPeopleGroup}
                        value={groupName}
                        onChange={(e) => { setGroupName(e.target.value) }}
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
                            onClick={() => setToggleAddMemberPopup(true)}
                        >
                            + Add a person
                        </span>
                    </span>
                    <div className="group-members-container">
                        {groupMembers.map((member) => (
                            <GroupMemberDisplay
                                name={member.name}
                                id={member.id}
                                removeGroupMember={removeGroupMember}
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
