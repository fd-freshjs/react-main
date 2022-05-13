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

  componentDidMount () {
    this.loadUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadUsers();
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.page === this.state.page && nextState.users === this.state.users) {
      return false;
    }

    return true;
  }

  loadUsers = async () => {
    const { page } = this.state;

    try {
      this.setState(state => ({ ...state, isLoading: true }));

      const { results: users } = await fetchUsers(page);
      this.setState(state => ({ ...state, users, error: null }));
    } catch (error) {
      this.setState(state => ({ ...state, error }));
    } finally {
      this.setState(state => ({ ...state, isLoading: false }));
    }
  };

  loadPage = e => {
    const maxPage = 5;

    this.setState(state => {
      const newPage = e.target.name === 'next'
        ? Math.min(state.page + 1, maxPage)
        : Math.max(state.page - 1, 1);

      return ({
        ...state,
        page: newPage,
      });
    });
  };

  render () {
    console.log('render');
    const { isLoading, error, users, page } = this.state;

    return (
      <div>
        {isLoading && <div>Загрузка...</div>}
        <button onClick={this.loadUsers}>Загрузить новых пользователей</button>

        <div>
          <button name='prev' onClick={this.loadPage}>
            {'<'}
          </button>
          {page}
          <button name='next' onClick={this.loadPage}>
            {'>'}
          </button>
        </div>
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
