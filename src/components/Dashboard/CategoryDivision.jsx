import React from "react";
import Category from "./Category";

function CategoryDivision() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2vh",
                gap: '5vh',
            }}
        >
            <Category
                link="https://i.ibb.co/D4X1qk5/Food.png"
                name="Food"
                price="0"
            />
            <Category
                link="https://i.ibb.co/fdHsfGw/Essentials.png"
                name="Essentials"
                price="0"
            />
            <Category
                link="https://i.ibb.co/MSzLjr1/Entertainment.png"
                name="Entertainment"
                price="0"
            />
        </div>
    );
}

export default CategoryDivision;
