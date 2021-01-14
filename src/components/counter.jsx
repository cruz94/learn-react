import React, {Component} from "react";


class Counter extends Component {
/*    state = {
        value: this.props.counter.value,
        tag: ['tag1', 'tag2', 'tag3']
    };*/

  /*  constructor() {
        super();
        console.log("const",this.state);
        this.handleClick = this.handleClick.bind(this);
    }*/

/*
    handleClick = () => {
        this.setState({ value:this.props.value + 1});
        console.log("Event handled!",this.value);
    }
*/

    render() {
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onInc(this.props.counter)} className="btn btn-secondary btn-sm ">Inc</button>
             {/*   <ul>
                    {this.state.tag.map(tag => <li key={tag}>{tag}</li>)}
                </ul>*/}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">DELETE</button>
            </div>
        );
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;