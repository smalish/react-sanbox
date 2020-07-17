import React, { Component, Fragment } from "react";
import UncontrolledEmailInput from "./UncontrolledEmailInput";

export default class EditAccountForm extends Component {
  state = {
    draftPassword: this.props.account.password
  };

  handlePasswordChange = event => {
    this.setState({ draftPassword: event.target.value });
  };

  resetForm = () => {
    this.setState({
      draftPassword: this.props.account.password
    });
  };

  render() {
    const { account } = this.props;
    return (
      <form>
        <h2>Account "{account.name}"</h2>
        <UncontrolledEmailInput email={account.email} />
      </form>
    );
  }
}
