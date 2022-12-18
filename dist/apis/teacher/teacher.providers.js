"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacherProviders = void 0;
const bcrypt = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
const crypto = require("crypto");
const configuration_1 = require("../../config/configuration");
const teacher_schema_1 = require("./schemas/teacher.schema");
exports.teacherProviders = [
    {
        provide: configuration_1.schemaConfigs.TEACHER_MODEL.toString(),
        useFactory(connection) {
            teacher_schema_1.TeacherSchema.pre('save', async function (next) {
                if (!this.isModified('password'))
                    next();
                this.password = await bcrypt.hash(this.password, 10);
            });
            teacher_schema_1.TeacherSchema.methods.getJWTToken = function () {
                return (0, jsonwebtoken_1.sign)({ id: this._id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRE,
                });
            };
            teacher_schema_1.TeacherSchema.methods.comparePassword = async function (enteredPassword) {
                return await bcrypt.compare(enteredPassword, this.password);
            };
            teacher_schema_1.TeacherSchema.methods.getResetPasswordToken = async function () {
                const resetToken = crypto.randomBytes(20).toString('hex');
                this.resetPasswordToken = crypto
                    .createHash('sha256')
                    .update(resetToken)
                    .digest('hex');
                this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
                return resetToken;
            };
            return connection.model('Teacher', teacher_schema_1.TeacherSchema);
        },
        inject: [configuration_1.dbConfigs],
    },
];
//# sourceMappingURL=teacher.providers.js.map