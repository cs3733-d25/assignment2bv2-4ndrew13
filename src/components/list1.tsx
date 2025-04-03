import React from "react";
import "./list.css";

const List1: React.FC = () => {
    return (
        <div className="list-container">
            <h3>My Favorite Exercises</h3>
            <ul>
                <li className="first">Deadlift - Lifting weight off the ground</li>
                <li>Back Squat - Squatting with a barbell on your back</li>
                <li>Bench Press - Pressing weight up while laying flat</li>
                <li>Overhead Press - Pressing weight up while standing up</li>
                <li>Barbell Cleans - Lifting weight off ground and bringing to shoulders</li>
            </ul>
        </div>
    );
};

export default List1;
