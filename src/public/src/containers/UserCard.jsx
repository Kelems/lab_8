import React from "react";
import UserAvatar from "./UserAvatar";
import Button from "./Button";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { toFriends } from "../actions/index";
import { isFriend } from "../actions/index";
class UserCard extends React.Component {
  switchStyle() {}
  render() {
    const { user } = this.props;
    return (
      <div className="card">
        <UserAvatar width="299px" height="299px" src={user.picture.large} />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {"\t name: " + user.name.title} {user.name.first} {user.name.last}
          </li>
          <li className="list-group-item">{"\t sex: " + user.gender}</li>
          <li className="list-group-item">
            {"\t location: " + user.location.country} {user.location.city}{" "}
            {user.location.street.name}
            {user.location.street.number}
          </li>
          <li className="list-group-item">{"\t email: " + user.email}</li>
          <li className="list-group-item">
            {"\t date: " +
              user.dob.date.slice(0, 10) +
              "\t age: " +
              user.dob.age}
          </li>
          <li className="list-group-item">{"\t phone: " + user.phone}</li>
          <li className="list-group-item">
            <Button
              label="Add to friends"
              handleClick={() => this.props.toFriends(user)}
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
  return bindActionCreators({ toFriends: toFriends }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserCard);
