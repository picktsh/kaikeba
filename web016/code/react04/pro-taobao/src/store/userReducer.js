const initalState = {
    isLogin: false,
    userInfo: {}
};

function userReducer(state = { ...initalState }, action) {
    switch (action.type) {
        case "loginSuccess":
            return {
                isLogin: true,
                userInfo: { name: "kkb" }
            };

        default:
            return { ...state };
    }
}

export default userReducer;
