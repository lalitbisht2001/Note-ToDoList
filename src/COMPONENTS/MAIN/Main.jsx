// import { useState } from "react";
import Merge from "../Components/Merge";
import Sidebar from "../SIDEBAR/Sidebar";
// import styles from "./Main.module.css";

const Main = ({ Open }) => {
    return (
        <div style={{ height: "87vh" }}>
            {
                Open ? <Sidebar Open={Open} /> : <Merge />
            }
        </div>
    )
}

export default Main
