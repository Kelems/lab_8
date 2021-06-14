import React from "react";
import UsersList from "./UsersList";
import { connect } from "react-redux";
class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async handleClick() {
    let url = "https://randomuser.me/api/1.3/?results=10";
    let response = await fetch(url);
    let json = await response.json();
    let results = json.results;
    this.setState({ users: results });
  }

  componentDidMount() {
    this.handleClick();
  }

  render() {
    return (
      <div>
        <h2 class="top">User list:</h2>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state
  };
}

export default connect(mapStateToProps)(Users);
