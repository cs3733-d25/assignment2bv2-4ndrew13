import React from "react";

interface IntroProps {
    name: string;
}

const Intro: React.FC<IntroProps> = ({ name }) => {
    return (
        <div className="intro">
            <p>Hello! My name is {name}. I am a Computer Science and Data Science student at WPI. Welcome to my page about weightlifting!</p>
        </div>
    );
};

export default Intro;
