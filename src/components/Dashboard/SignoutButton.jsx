import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { database } from "../../firebase";

function SignoutButton() {
    const navigate = useNavigate();
    const handleClick = async () => {
        await signOut(database);
        navigate('/');
    }

    return (
        <button 
            style={{ 
                padding: '0.5vh 1vw',
                fontFamily: 'Poppins', 
                cursor: 'pointer', 
                backgroundColor: 'white', 
                border: 'none', 
                color: '#1cdbb9',
                transition: 'background-color 0.3s'
            }} 
            onClick={handleClick}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e6f7f8'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
        >
            Log Out
        </button>
    );
}

export default SignoutButton;
