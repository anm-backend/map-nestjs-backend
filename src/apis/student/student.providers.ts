import { Connection, models } from 'mongoose';
import { dbConfigs, schemaConfigs } from 'src/config/configuration';
import { StudentSchema } from './schemas/student.schema';

export const studentProviders = [
  {
    provide: schemaConfigs.STUDENT_MODEL.toString(),
    useFactory(connection: Connection) {
      const m = connection.model('Student', StudentSchema);
      // model.validate().catch((error) => {
      //   // assert.ok(error);
      // });
      return m;
    },
    inject: [dbConfigs],
  },
];
