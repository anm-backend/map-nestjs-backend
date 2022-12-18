import { Connection } from 'mongoose';
import { dbConfigs, schemaConfigs } from 'src/config/configuration';
import { SchoolSchema } from './schemas/school.schema';

export const schoolProviders = [
  {
    provide: schemaConfigs.SCHOOL_MODEL.toString(),
    useFactory: (connection: Connection) =>
      connection.model('School', SchoolSchema),
    inject: [dbConfigs],
  },
];
