const React = require("react");
const Form = require("react-bootstrap").Form;

class Conversion extends React.Component {

    constructor(props) {
        super(props);
        this.state = { amount: 0 };
    }



    render() {
        return <div>
            <Form.Group className="row">
                <Form.Control type="number" value={this.state.amount}
                    onChange={e => {
                        this.setState({ amount: e.target.value });
                    }} >
                </Form.Control>
                <label>
                    &nbsp;{this.props.from}&nbsp;=
                    &nbsp;{this.state.amount * this.props.ratio}
                    &nbsp;{this.props.to}
                </label>
                
            </Form.Group>
        </div>
    }

}

module.exports = Conversion;