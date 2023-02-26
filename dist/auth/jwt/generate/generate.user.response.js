"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infoResult = void 0;
const configuration_1 = require("../../../config/configuration");
const generate_token_1 = require("./generate.token");
const infoResult = (user) => {
    const accessToken = (0, generate_token_1.generateToken)({ id: user.id }, {
        expiresIn: (0, configuration_1.default)().jwt.expire.access,
    });
    const refreshToken = (0, generate_token_1.generateToken)({ id: user.id, token: accessToken }, {
        expiresIn: (0, configuration_1.default)().jwt.expire.refresh,
    });
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
        token: {
            access_token: accessToken,
            refresh_token: refreshToken,
        },
    };
};
exports.infoResult = infoResult;
//# sourceMappingURL=generate.user.response.js.map