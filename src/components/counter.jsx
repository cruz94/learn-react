import React, {Component} from "react";


class Counter extends Component {
    state = {
        value: this.props.value,
        tag: ['tag1', 'tag2', 'tag3']
    };

  /*  constructor() {
        super();
        console.log("const",this.state);
        this.handleClick = this.handleClick.bind(this);
    }*/

    handleClick = () => {
        this.setState({ value:this.state.value + 1});
        console.log("Event handled!",this.value);
    }

    render() {
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleClick} className="btn btn-secondary btn-sm ">Inc</button>
             {/*   <ul>
                    {this.state.tag.map(tag => <li key={tag}>{tag}</li>)}
                </ul>*/}
                <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">DELETE</button>
            </div>
        );
    }

    formatCount() {
        const {value} = this.state;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;