import React, { Component } from 'react';
import { fetchUsers } from '../../api/users';

class UserLoader extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false,
      error: null,
      page: 1,
    };
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    const { page } = this.state;

    try {
      this.setState((state) => ({ ...state, isLoading: true }));
  
      const users = await fetchUsers(page);
      this.setState((state) => ({ ...state, users, error: null }));
    } catch (error) {
      this.setState((state) => ({ ...state, error }));
    } finally {
      this.setState((state) => ({ ...state, isLoading: false }));
    }
  }

  render () {
    const { isLoading, error, users } = this.state;

    if (isLoading) {
      return <div>Загрузка...</div>;
    }

    return (
      <div>
        <button onClick={this.loadUsers}>Загрузить новых пользователей</button>
        {error && <div>Error: {error.toString()}</div>}
        {users.map(u => {
          return (
            <div key={u.login.uuid}>
              {u.name.first}
              {u.name.last}
              {u.email}
            </div>
          );
        })}
      </div>
    );
  }
}

export default UserLoader;
