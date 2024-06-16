import React from "react";

function GreetingSection({ name }) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                width: "67vw",
                padding: "3vh 5vw",
                alignItems: "center",
            }}
        >
            <span>
                <h2
                    style={{
                        fontFamily: "Poppins",
                        fontSize: "4vh",
                        fontWeight: "500",
                        color: "#4D4D4D",
                    }}
                >
                    Welcome {name}!
                </h2>
                <h3
                    style={{
                        fontFamily: "Poppins",
                        fontSize: "3vh",
                        fontWeight: "300",
                        color: "#89939E",
                    }}
                >
                    Your monthly expenses
                </h3>
            </span>
            <span>
                <button
                    style={{
                        backgroundColor: "#05a18b",
                        border: "none",
                        color: "white",
                        fontFamily: "Poppins",
                        padding: "1.5vh 1vw",
                        fontSize: "3vh",
                        fontWeight: "300",
                        marginRight: "2vh",
                        boxShadow: '0vh 0.5vh 0.7vh 0px rgba(0,0,0,0.3)',
                    }}
                    className="greeting-hover-button"
                >
                    Settle Expenses
                </button>
                <button
                    style={{
                        backgroundColor: "#7159b6",
                        border: "none",
                        color: "white",
                        fontFamily: "Poppins",
                        padding: "1.5vh 1vw",
                        fontSize: "3vh",
                        fontWeight: "300",
                        boxShadow: '0vh 0.5vh 0.7vh 0px rgba(0,0,0,0.3)',
                    }}
                    className="greeting-hover-button"
                >
                    Add Expense
                </button>
            </span>
        </div>
    );
}

export default GreetingSection;
