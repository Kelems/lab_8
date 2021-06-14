import React from "react";
import BestFriendCard from "./BestFriendCard";
class BestFriendsList extends React.Component {
  render() {
    return (
      <div>
        {this.props.friends.friends.map((user, key) => (
          <BestFriendCard friend={user} key={key} />
        ))}
      </div>
    );
  }
}

export default BestFriendsList;
