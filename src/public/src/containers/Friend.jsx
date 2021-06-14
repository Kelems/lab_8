import React, { Component } from "react";
import { connect } from "react-redux";
import BestFriendsList from "./BestFriendsList";
class Friend extends Component {
  render() {
    return (
      <div>
        <h2 class="top">Friend list:</h2>
        <BestFriendsList friends={this.props.friends} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

export default connect(mapStateToProps)(Friend);
