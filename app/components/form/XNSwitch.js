/**
 * Created by necklace on 2017/1/8.
 */
import React, {Component} from "react";

export default class XNSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value};
    }

    onSpanClick(e) {
        let value = !this.state.value;
        this.setState({value: value});
        this.props.onChange && this.props.onChange(value);
    }

    render() {
        let openClass = this.state.value ? "open" : "close";
        return (
            <div className="switch-input">
                <label>{this.props.label}</label>
                <span className={openClass} onClick={this.onSpanClick.bind(this)}></span>
            </div>
        );
    }
}

XNSwitch.propTypes = {
    label: React.PropTypes.string,
    value: React.PropTypes.bool,
    onChange: React.PropTypes.func
};
XNSwitch.defaultProps = {
    label: "显示名称",
    value: false,
    onChange: null
};