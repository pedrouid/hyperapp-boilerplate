import { h } from 'hyperapp'; // eslint-disable-line
import { apiGetUsers } from '../helpers/api';
import User from '../components/User'; // eslint-disable-line
import Spinner from '../components/Spinner'; // eslint-disable-line
import '../styles/home.css';

const home = (state, actions) => {
  const { fetching, users } = state;
  const { API_USERS_REQUEST, API_USERS_SUCCESS, API_USERS_FAILURE } = actions;
  const fetchUsers = () => {
    API_USERS_REQUEST();
    apiGetUsers()
      .then(({ data }) => API_USERS_SUCCESS(data.results))
      .catch(error => API_USERS_FAILURE(error));
  };
  return (
    <div oncreate={fetchUsers} class="wrapper">
      <div class="content">
        <div class="header">
          <h1>Random User List</h1>
          <div class="icon-reload" onclick={fetchUsers} />
        </div>

        <div class="column">
          {fetching ? (
            <div class="spinner" />
          ) : (
            <div class="user-list">{users.map(user => <User key={user.email} user={user} />)}</div>
          )}
        </div>

        <div class="footer">
          <a href="https://github.com/pedrouid/hyperapp-boilerplate" target="_blank">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default home;
