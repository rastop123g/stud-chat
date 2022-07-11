import store from "./store";

export default (url, config) => {
  const user = store.getters["auth/user"];
  return fetch(url, {
    headers: {
      Authorization: "Basic " + btoa(`${user.username}:${user.password}`),
    },
    ...config,
  });
};
