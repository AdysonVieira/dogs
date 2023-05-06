const setLocalStorage = (store) => (next) => (action) => {
  const response = next(action)
  if (action.meta && action.meta.localStorage) {
    const { key, value } = action.meta.localStorage
    window.localStorage.setItem( key, JSON.stringify(value))
  }
  return response;
};

export default setLocalStorage;