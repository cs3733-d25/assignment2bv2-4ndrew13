import React from "react";
import Title from "./components/title";
import Intro from "./components/intro";
import Hobby1 from "./components/hobby1";
import List1 from "./components/list1";
import Table1 from "./components/table1";
import Form from "./components/form";
import "./App.css";

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Title />
            <Intro name="Andrew Melton" />
            <Hobby1 />
            <List1 />
            <Table1 />
            <Form />
        </div>
    );
};

export default App;
