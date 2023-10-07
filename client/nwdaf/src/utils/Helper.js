export const getLoggedInUserData = () =>
  JSON.parse(localStorage.getItem("userData") || null);
export const setLoggedInUserData = (userData) =>
  localStorage.setItem("userData", JSON.stringify(userData));

export const getLoggedInToken = () => localStorage.getItem("token");
export const setLoggedInToken = (token) => localStorage.setItem("token", token);

export const resetStorageData = () => {
  localStorage.removeItem("userData");
  localStorage.removeItem("token");
};

export const loggedInUserId = () => {
  const user = getLoggedInUserData();
  let userId = null;
  if (user != null) {
    return user.userid;
  }
  return userId;
};


export const loggedInRole = () => {
  const user = getLoggedInUserData();
  let role = null;
  if (user != null) {
    return user.role;
  }
  return role;
};
