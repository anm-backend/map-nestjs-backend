export default function () {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    nodeEnv: process.env.NODE_ENV || 'DEVELOPEMENT' || 'PRODUCTION',

    socketPort:
      parseInt(process.env.SOCKET_PORT, 10) ||
      parseInt(process.env.PORT, 10) ||
      3000,
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
    mongouri: process.env.MONGO_URI,
    graphql: {
      playground: process.env.GRAPHQL_PLAYGROUND === 'true',
      introspection: process.env.GRAPHQL_INTROSPECTION === 'true',
    },
    apis: {
      users: {
        host: process.env.USERS_API_HOST,
        port: parseInt(process.env.USERS_API_PORT, 10) || 3001,
      },
    },
  };
}

export enum schemaConfigs {
  STUDENT_MODEL,
  SCHOOL_MODEL,
  TEACHER_MODEL,
}

export const dbConfigs = 'DATABASE_CONNECTION';
