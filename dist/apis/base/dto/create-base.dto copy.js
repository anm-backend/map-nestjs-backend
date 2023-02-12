"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBaseDto = exports.MinF = exports.IsNotEmptyF = void 0;
const class_validator_1 = require("class-validator");
function IsNotEmptyF(fieldName) {
    return (0, class_validator_1.IsNotEmpty)({ message: `${fieldName} không được bỏ trống` });
}
exports.IsNotEmptyF = IsNotEmptyF;
function MinF(len, fieldName) {
    return (0, class_validator_1.Min)(len, { message: `${fieldName} có ít nhất ${len} Ký tự` });
}
exports.MinF = MinF;
class CreateBaseDto {
}
exports.CreateBaseDto = CreateBaseDto;
//# sourceMappingURL=create-base.dto%20copy.js.map