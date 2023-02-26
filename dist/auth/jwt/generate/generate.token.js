"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const configuration_1 = require("../../../config/configuration");
const generateToken = (data, config) => (0, jsonwebtoken_1.sign)(data, (0, configuration_1.default)().jwt.secret, config);
exports.generateToken = generateToken;
//# sourceMappingURL=generate.token.js.map