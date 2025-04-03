import React from "react";

const Table1: React.FC = () => {
    return (
        <div className="table-container">
            <h3>Current PRs</h3>
            <table className="collapse">
                <thead>
                <tr>
                    <th>Exercise</th>
                    <th>PR Weight</th>
                    <th>Year</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>Deadlift</td><td>405 lbs</td><td>2025</td></tr>
                <tr><td>Back Squat</td><td>385 lbs</td><td>2024</td></tr>
                <tr><td>Bench Press</td><td>260 lbs</td><td>2024</td></tr>
                <tr><td>Overhead Press</td><td>155 lbs</td><td>2023</td></tr>
                <tr><td>Barbell Cleans</td><td>225 lbs</td><td>2024</td></tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table1;
