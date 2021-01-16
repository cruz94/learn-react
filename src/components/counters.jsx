import React, {Component} from "react";
import Counter from './counter';

class Counters extends Component {
    
    render() {
        return (<div>
            <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>RESET</button>
            {this.props.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.props.onDelete}
                        counter={counter}
                        onInc={this.props.onInc}>
                        <h3>Row:{counter.id}</h3>
                    </Counter>
                )}
        </div>);
    }
}

export default Counters;