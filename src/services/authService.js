export const saveToken = token => {
  localStorage.setItem('ishro_user_token', token);
};

export const getToken = () => {
  // console.log('Getting User Token From Local Storage');
  return localStorage.getItem('ishro_user_token');
};

export const removeToken = () => {
  localStorage.removeItem('ishro_user_token');
};

export const saveUserData = data => {
  localStorage.setItem('ishro_user_data', JSON.stringify(data));
};

export const getUserData = () => {
  return localStorage.getItem('ishro_user_data');
};

export const removeUserData = () => {
  localStorage.removeItem('ishro_user_token');
};

export const destroy = () => {
  localStorage.removeItem('ishro_user_token');
  localStorage.removeItem('ishro_user_data');
};
