import React, {Component} from "react";


class Counter extends Component {
    state = {
        count: 0,
        tag: ['tag1', 'tag2', 'tag3']
    };

  /*  constructor() {
        super();
        console.log("const",this.state);
        this.handleClick = this.handleClick.bind(this);
    }*/

    handleClick = () => {
        this.setState({ count:this.state.count + 1});
        console.log("Event handled!",this.count);
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleClick} className="btn btn-secondary btn-sm ">Inc</button>
                <ul>
                    {this.state.tag.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </div>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}

export default Counter;