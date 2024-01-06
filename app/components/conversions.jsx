const React = require("react");
const Conversion = require("./conversion.jsx");
const conversionRatios = require("../conversions.json");


class Conversions extends React.Component {

    constructor(props) {
        super(props);    
    }

    render() {
        return conversionRatios.map((conversionRatio, index) => {
            return <Conversion key={index} from={conversionRatio.from} to={conversionRatio.to}
                ratio={conversionRatio.ratio} />;
        });
    }
}

module.exports = Conversions;
