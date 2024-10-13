import React from "react";
import ReactDOM from "react-dom/client"

function App() {
    const num1 = 5;
    const num2 = 10;

    return (
        <div>
            <h1>ჯამი: {num1 + num2}</h1>
        </div>
    );
}


var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);