import React from "react";

const Hobby1: React.FC = () => {
    return (
        <div className="hobby">
            <h2 className="diffColor">My Hobby: Weightlifting</h2>
            <img src="public/lifting1b.png" alt="Weightlifting" className="hobbyphoto" />
            <p>My hobby is weightlifting. I have been lifting since my junior year of high school. I first got into weightlifting as
                a way to improve my appearance, however, I have since found it to be a great way to improve my mental health and release
                lots of built-up stress. I find being at the gym to be very therapeutic and I love seeing progress in my physique.
                I try to lift 6 out of the 7 days of the week and each one of my sessions is usually around an hour to an hour and a half.
                I have been into all different areas of weightlifting including bodybuilding, powerlifting, olympic weightlifting, etc.
                My all-time favorite has been powerlifting. I love seeing myself be able to lift heavier and heavier weights as each month
                of lifting goes by. I recently reached over a 1000lb total on my squat, bench, and deadlift PRs and that has motivated me to
                continue my powerlifting journey.</p>
        </div>
    );
};

export default Hobby1;
