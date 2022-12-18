"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToken = void 0;
const sendToken = (user) => {
    const token = user.getJWTToken();
    return {
        success: true,
        user,
        token,
    };
};
exports.sendToken = sendToken;
//# sourceMappingURL=sendToken.js.map