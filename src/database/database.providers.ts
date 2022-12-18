import * as mongoose from 'mongoose';
import configuration, { dbConfigs } from 'src/config/configuration';

export const databaseProviders = [
  {
    provide: dbConfigs,
    useFactory: (): Promise<typeof mongoose> => {
      mongoose.set('strictQuery', true);
      return mongoose.connect(configuration().mongouri);
    },
  },
];
