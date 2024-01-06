const ReactDOM = require("react-dom/client");
const React = require("react");
const Conversions = require("./components/conversions.jsx");

ReactDOM.createRoot(
    document.getElementById("app")
)
    .render(
        <div>
            <Conversions/> 
        </div>
);

