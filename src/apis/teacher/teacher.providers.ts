import { Connection } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import * as crypto from 'crypto';
import { dbConfigs, schemaConfigs } from 'src/config/configuration';
import { Teacher, TeacherSchema } from './schemas/teacher.schema';

export const teacherProviders = [
  {
    provide: schemaConfigs.TEACHER_MODEL.toString(),
    useFactory(connection: Connection) {
      TeacherSchema.pre<Teacher>('save', async function (next: Function) {
        if (!this.isModified('password')) next();

        this.password = await bcrypt.hash(this.password, 10);
      });

      TeacherSchema.methods.getJWTToken = function () {
        return sign({ id: this._id }, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE,
        });
      };

      TeacherSchema.methods.comparePassword = async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password);
      };

      TeacherSchema.methods.getResetPasswordToken = async function () {
        // generate token
        const resetToken = crypto.randomBytes(20).toString('hex');
        // generate hash token and add to db
        this.resetPasswordToken = crypto
          .createHash('sha256')
          .update(resetToken)
          .digest('hex');
        this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;
        return resetToken;
      };
      // return schema;

      return connection.model('Teacher', TeacherSchema);
    },
    inject: [dbConfigs],
  },
];
