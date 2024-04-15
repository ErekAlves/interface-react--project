export const isAuthenticated = () => {
    return Boolean(sessionStorage.getItem('user'));
  };
  