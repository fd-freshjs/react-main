export const fetchTemplate = (path, onSuccess, onError, onFinally) => 
  fetch(
    path
  ).then((response) => response.json())
  .then(onSuccess)
  .catch(onError)
  .finally(onFinally);

export const fetchUsers = (page, onSuccess, onError, onFinally) =>
  fetchTemplate(
    `https://randomuser.me/api/?results=10&seed=freshcode&page=${page}`,
    onSuccess,
    onError,
    onFinally
  );
