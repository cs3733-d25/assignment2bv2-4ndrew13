import React from "react";

interface IntroProps {
    name: string;
}

const Intro: React.FC<IntroProps> = ({ name }) => {
    return (
        <div className="intro">
            <p>Hello! My name is {name}. I am 20 years old. I am a Computer Science and Data Science Sophomore at Worcester Polytechnic Institute.
                I am currently taking CS3733 in D term of 2025. I had a Software Engineering Internship at IDEMIA
                North America in the Summer of 2024. I am very interested in web development and I hope to learn a lot from
                this class. In terms of outside activities, I am on the WPI Rowing Team and I also love spending time with my friends
                and girlfriend.</p>
        </div>
    );
};

export default Intro;
