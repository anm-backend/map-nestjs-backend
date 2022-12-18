"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRealtimeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_realtime_dto_1 = require("./create-realtime.dto");
class UpdateRealtimeDto extends (0, mapped_types_1.PartialType)(create_realtime_dto_1.CreateRealtimeDto) {
}
exports.UpdateRealtimeDto = UpdateRealtimeDto;
//# sourceMappingURL=update-realtime.dto.js.map