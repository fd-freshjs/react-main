import axios from "axios";

export const fetchTemplate = (path, onSuccess, onError, onFinally) => 
  fetch(
    path
  ).then((response) => response.json())
  .then(onSuccess)
  .catch(onError)
  .finally(onFinally);

export const fetchUsers = async (page) => {
  const response = await axios.get(
    `https://randomuser.me/api/?results=10&seed=freshcode&page=${page}`,
  );

  return response.data;
}

export const register = async (payload) => {
  const response = await axios.post('http://localhost:5000/users', payload);

  console.log(response.data);
}

export const login = async (payload) => {
  const id = 1;
  const response = await axios.get('http://localhost:5000/users/' + id);

  // сравнить пароли
  // в будущем это будет делать сервер

  console.log(response.data);
}

export const loadProfile = async (userId) => {
  const response = await axios.get(`http://localhost:5000/profile`, {
    params: {
      userId
    },
  });

  return response.data;
};
