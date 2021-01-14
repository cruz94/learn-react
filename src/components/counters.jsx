import React, {Component} from "react";
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    handleInc = (counter) => {
        console.log("Inc "+counter.id);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters:counters});
    };

    handleDelete = (counterId) => {
        console.log("Deleted"+ counterId);
       const  counter = this.state.counters.filter(c => c.id != counterId);
        this.setState({counters: counter});
    };

    handleReset = () => {
       const counters = this.state.counters.map(c => {
         c.value = 0;
         return c;
        });
        this.setState({ counters });
    };

    render() {
        return (<div>
            <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>RESET</button>
            {this.state.counters.map(counter =>
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        counter={counter}
                        onInc={this.handleInc}>
                        <h3>Row:{counter.id}</h3>
                    </Counter>
                )}
        </div>);
    }
}

export default Counters;