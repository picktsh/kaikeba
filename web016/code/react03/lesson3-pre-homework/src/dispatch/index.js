const mapDispatchToProps = {
  login: () => {
    return {type: "LOGIN"};
  },
  logout: () => {
    return {type: "LOGOUT"};
  }
};
export default mapDispatchToProps
