import React from 'react';
import { loadProfile } from '../../api/users';
import { useFetch } from '../../hooks';

function ProfilePage (props) {
  const [user, isFetching, error] = useFetch(
    loadProfile(props.user.id),
    [props.user.id],
  );

  if (error) return <div>Error</div>;

  return (
    <div>
      ProfilePage
      <div>{isFetching ? 'Loading' : JSON.stringify(user)}</div>
    </div>
  );
}

export default ProfilePage;
