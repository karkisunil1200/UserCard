import React from 'react';

class UserCard extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the single userCard</h1>
        <h5>Login information: {this.props.user.login}</h5>
      </div>
    );
  }
}

export default UserCard;
