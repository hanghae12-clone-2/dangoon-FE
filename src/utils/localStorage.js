const Storage = {
  setUserName(name) {
    removeLocalStorage('userName');
    setlocalStorage('userName', name);
  },

  removeUserName() {
    removeLocalStorage('userName');
  },

  getUserName() {
    return window.localStorage.getItem('userName');
  },

  getLocalStorageJSON(key) {
    const parseToJSON = window.localStorage.getItem(key);
    return JSON.parse(parseToJSON);
  },
};

function setlocalStorage(key, value) {
  return window.localStorage.setItem(key, value);
}

function removeLocalStorage(key) {
  return window.localStorage.removeItem(key);
}

export default Storage;
