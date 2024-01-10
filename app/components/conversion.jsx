const React = require("react");
const Form = require("react-bootstrap").Form;
const Button = require("react-bootstrap").Button;

class Conversion extends React.Component {

    constructor(props) {
        super(props);
        this.state = { amount: 0, metricalToImperial: true };
    }

    switch() {
        this.setState({
            metricalToImperial : !this.state.metricalToImperial
        })
    }

    labels(props) {
        let labels;
        if (props.metricalToImperial) {
            labels = <label>
                &nbsp;{props.from}&nbsp;=
                &nbsp;{props.amount * props.ratio}
                &nbsp;{props.to}
            </label>
        } else {
            labels = <label>
                &nbsp;{props.to}&nbsp;=
                &nbsp;{props.amount / props.ratio}
                &nbsp;{props.from}
            </label>
        }
        return labels;
    }

    render() {
        return <div><Form.Group className="row">
            <Button onClick={this.switch.bind(this)}></Button>
            <Form.Control type="number" value={this.state.amount}
                onChange={e => {
                    this.setState({ amount: e.target.value });
                }} >
            </Form.Control>
            <this.labels
                metricalToImperial={this.state.metricalToImperial}
                from={this.props.from}
                to={this.props.to}
                ratio={this.props.ratio}
                amount={this.state.amount}
            />
        </Form.Group></div>;
       
    }

}

module.exports = Conversion;
