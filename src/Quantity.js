import React from 'react';

export default class Quantity extends React.Component {

  getDefaultProps() {
    return {
      quantity: 100
    }
  }

  render() {
    return (
      <div>
        <button>-</button>
        <span>
          {this.props.quantity}
        </span>
        <button>+</button>
      </div>
    )
  }
}