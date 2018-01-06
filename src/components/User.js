import { h } from 'hyperapp'; // eslint-disable-line
import { capitalize, getAge } from '../helpers/utilities';

const User = ({ user }) => {
  const firstname = capitalize(user.name.first);
  const lastname = capitalize(user.name.last);
  const name = `${firstname} ${lastname}`;
  const age = getAge(user.dob);
  return (
    <div class={`user`}>
      <div class="user-detail user-icon">
        <img src={user.picture.medium} alt={name.toLowerCase()} />
      </div>
      <div class="user-detail user-name">{name}</div>
      <div class={`user-detail user-gender ${user.gender}`}>{capitalize(user.gender)}</div>
      <div class="user-detail user-age">{age === 1 ? `${age} year old` : `${age} years old`}</div>
    </div>
  );
};

export default User;
