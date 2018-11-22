import React, { Component } from 'react';


class Counter extends Component {
    state = {
        value: this.props.value,
        imageUrl: 'https://picsum.photos/200',
       /* tags: [] */
    };

   /* constructor() {
        super();
        this.handleIncrement = this.handleIncrement().bind(this);
    } */

    formatCount() {
        const { count } = this.state;
        return count ===0 ? <h1>'Zero'</h1> : count;
    }

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1});
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>No tags</p>;

        return <ul>{ this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>;
     }

     getBadgeClasses() {
         let classes = "badge m-2 badge-";
         classes += this.state.count === 0 ? 'warning' : 'primary';
         return classes;
     }

    render() {
        return  (
            <div>
                { /*{this.state.tags.length === 0 && 'Please create new tags'}
                {this.renderTags()} */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
}

export default Counter;

