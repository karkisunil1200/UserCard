import React from 'react';
import axios from 'axios';

import UserCard from './UserCard';

class UserCardList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/karkisunil1200')
      .then(response => {
        // console.log(response.data);
        this.setState({users: response.data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log('rendered');
    console.log('this is the state: ', this.state.users);
    return (
      <div>
        <div className='userCard'>
          <UserCard user={this.state.users} />;
        </div>
      </div>
    );
  }
}

export default UserCardList;
