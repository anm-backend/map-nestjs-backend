import { Connection } from 'mongoose';
import { dbConfigs, schemaConfigs } from 'src/config/configuration';
import { StudentSchema } from './schemas/student.schema';

export const studentProviders = [
  {
    provide: schemaConfigs.STUDENT_MODEL.toString(),
    useFactory(connection: Connection) {
      return connection.model('Student', StudentSchema);
    },
    inject: [dbConfigs],
  },
];
