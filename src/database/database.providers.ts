// https://www.youtube.com/watch?v=sNosL578ECo&list=PLlaDAvA2MhR2jb8zavu6I-w1BA878aHcB&index=2

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
