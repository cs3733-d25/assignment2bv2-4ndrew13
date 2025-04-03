import React from "react";

const Form: React.FC = () => {
    return (
        <div className="form-container">
            <h3>What Are Your PRs?</h3>
            <form>
                <label>First Name</label>
                <input type="text" name="firstname" required />

                <label>Last Name</label>
                <input type="text" name="lastname" required />

                <label>Grad Year</label>
                <div className="checkboxgroup">
                    <input type="checkbox" /> <label>2025</label>
                    <input type="checkbox" /> <label>2026</label>
                    <input type="checkbox" /> <label>2027</label>
                    <input type="checkbox" /> <label>2028</label>
                </div>

                <label>Lift</label>
                <div className="radiogroup">
                    <input type="radio" name="lift" /> <label>Deadlift</label>
                    <input type="radio" name="lift" /> <label>Back Squat</label>
                    <input type="radio" name="lift" /> <label>Bench Press</label>
                    <input type="radio" name="lift" /> <label>Overhead Press</label>
                    <input type="radio" name="lift" /> <label>Barbell Cleans</label>
                </div>

                <label>PR Weight and Number of Reps</label>
                <textarea name="pr" rows={4} cols={30}></textarea>

                <label>How Recent?</label>
                <select name="recent">
                    <option value="pastyr">Past Year</option>
                    <option value="past5">Past 5 Years</option>
                    <option value="past10">Past 10 Years</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
