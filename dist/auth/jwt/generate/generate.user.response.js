"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoResult = void 0;
const generate_token_1 = require("./generate.token");
const infoResult = (user) => {
    const token = (0, generate_token_1.generateToken)({ id: user.id });
    return {
        success: true,
        user: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            gender: user.gender,
            userId: user.userId,
            role: user.role,
        },
        token,
    };
};
exports.infoResult = infoResult;
//# sourceMappingURL=generate.user.response.js.map