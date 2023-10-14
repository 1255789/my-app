import React, { useState, Component } from "react";
import Reciept from "./Reciept";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      amount: "",
      reciept: null,
    };
  }

  handleInput = (e) => {
    this.setState({ amount: e?.target?.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const reciept = {
      sender: '0x34F46F58c1006889a5e35daB22f70bfC4eEb814f',
      reciever: '0xEd06A8e12D64e3d978aEbebfa0FAbf63173A622B',
      amount: this.state.amount,
      transactionHash:
        "0xtlrRKy5TUpYcXGAZOvdSMFvfsmESeACqSvXYc81Cj3npJxoUgz55WPpfwP6zSJR2",
      blockHash:
        " 0xZ6KOBrwLgzqiXAPb63yjM7oNG9i9u5EVnsyZ9HY70Rkir7dMf8McqioBNu0q8u61",
      blockNumber: 10,
      gasUsed: 2100,
    };
    this.setState({ reciept: { ...reciept } });
  };
  render() {
    return (
      <div>
        <h1>Transfer</h1>
        <p>
        From:
          {`0x34F46F58c1006889a5e35daB22f70bfC4eEb814f`}
        </p>
        <p>
          To:
          {`0xEd06A8e12D64e3d978aEbebfa0FAbf63173A622B`}
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type='number'
            value={this.amount}
            onChange={this.handleInput}
            required
          />
          <button type='submit'>Send</button>
        </form>
        {this.state.reciept ? <Reciept reciept={this.state.reciept} /> : ""}
      </div>
    );
  }
}

export default Form;
