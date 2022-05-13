export const fetchTemplate = (path, onSuccess, onError, onFinally) => 
  fetch(
    path
  ).then((response) => response.json())
  .then(onSuccess)
  .catch(onError)
  .finally(onFinally);

export const fetchUsers = async (page) => {
  const response = await fetch(
    `https://randomuser.me/api/?results=10&seed=freshcode&page=${page}`,
  );
  const data = await response.json();

  return data;
}
