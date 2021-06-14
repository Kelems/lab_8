import React from "react";
import Button from "./Button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { delFriend } from "../actions/index";
class BestFriendCard extends React.Component {
  render() {
    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div>{this.props.friend}</div>
          </li>
          <li className="list-group-item">
            <Button
              label="Remove from friends"
              handleClick={() => this.props.delFriend(this.props.friend)}
            />
          </li>
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state, friends) {
  return {
    friends: this.state
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ delFriend: delFriend }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(BestFriendCard);
