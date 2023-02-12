"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBaseDto = exports.MinF = exports.IsNotEmptyF = void 0;
const class_validator_1 = require("class-validator");
const IsNotEmptyF = (fieldName) => (0, class_validator_1.IsNotEmpty)({ message: `${fieldName} không được bỏ trống` });
exports.IsNotEmptyF = IsNotEmptyF;
const MinF = (len, fieldName) => (0, class_validator_1.Min)(len, { message: `${fieldName} có ít nhất ${len} Ký tự` });
exports.MinF = MinF;
class CreateBaseDto {
}
exports.CreateBaseDto = CreateBaseDto;
//# sourceMappingURL=create-base.dto.js.map