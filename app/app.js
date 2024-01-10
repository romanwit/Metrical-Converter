const ReactDOM = require("react-dom/client");
const React = require("react");
const Conversions = require("./components/conversions.jsx");
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(
    document.getElementById("app")
)
    .render(
        <div>
            <Conversions/> 
        </div>
);

