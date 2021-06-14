import React from "react";
import UserCard from "./UserCard";
class UsersList extends React.Component {
  render() {
    return (
      <div>
        {this.props.users.map((user, key) => (
          <UserCard user={user} key={key} />
        ))}
      </div>
    );
  }
}

export default UsersList;
