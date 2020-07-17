import React, { Component, Fragment } from "react";
import EditAccountForm from "./EditAccountForm";

export default class AccountsList extends Component {
  state = {
    selectedIndex: 0
  };

  render() {
    const { accounts } = this.props;
    const { selectedIndex } = this.state;
    return (
      <Fragment>
        <h1>This demo illustrates a derived state anti-pattern</h1>
        <blockquote>First, make an edit to the account "One" email.</blockquote>
        <EditAccountForm account={accounts[selectedIndex]} />
        <blockquote>Next, select account "Two" below.</blockquote>
        <p>
          Accounts:
          {this.props.accounts.map((account, index) => (
            <label key={account.id}>
              <input
                type="radio"
                name="account"
                checked={selectedIndex === index}
                onChange={() => this.setState({ selectedIndex: index })}
              />{" "}
              {account.name}
            </label>
          ))}
        </p>
        <p>
          The selected name has changed, but the email field still shows your
          edits. Read the inline comments in{" "}
          <code>UncontrolledEmailInput.js</code> to learn why.
        </p>
      </Fragment>
    );
  }
}
