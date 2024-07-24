import { useEffect, useState } from "react";


export default function LineNumbers({ }) {

    const [rows, setRows] = useState(10);

    useEffect(() => {
        // const element = document.getElementById("lines");
        // const linesObj = window.getComputedStyle(element);
        // let rowsRrid = linesObj.getPropertyValue("grid-template-rows").split(" ").length;

        // const rootElement = document.getElementById("root");
        // const rootStyles = window.getComputedStyle(rootElement);
        // // let pageRowsVar = rootStyles.getPropertyValue("--pageRows");
        // // console.log(pageRowsVar);

        // rootElement.style.setProperty('--pageRows', rowsRrid);

        // const rowsa = document.documentElement.getBoundingClientRect().height;
        const screenHeight = document.body.scrollHeight * 1.1;

        const lineHeight = 16*1.5;
        setRows(Math.floor(screenHeight/lineHeight));


    }, []);

    return (
        <div id="lines">
            {[...Array(rows)].map((row, index) => <p tabIndex="0" key={index} id="row"></p>)}
        </div>
    );
};


