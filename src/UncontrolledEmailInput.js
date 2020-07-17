import React, { Component } from "react";

// The component below shows a getDerivedStateFromProps anti-pattern.
// Don't copy this approach!

// This component attempts to mix "controlled" and "uncontroled" behavior,
// By initializing its "draft" state to the "committed" props value,
// And then updating it as a user makes edits.
export default class UncontrolledEmailInput extends Component {
  state = {
    email: this.props.email
  };

  componentWillReceiveProps(nextProps) {
    // This lifecycle resets the "draft" email value in state,
    // Whenever a new "commited" email value is passed in props.
    // The downside of this is that the parent component has
    // no way to reset state back to the original props value
    // (at least not without rendering multiple times).
    if (nextProps.email !== this.props.email) {
      this.setState({ email: nextProps.email });
    }
  }

  handleChange = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <label>
        Email: <input onChange={this.handleChange} value={this.state.email} />
      </label>
    );
  }
}
