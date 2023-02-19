import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { ApisModule } from './apis/apis.module';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { GraphqlsModule } from './graphqls/graphqls.module';
import { SocketModule } from './socket/socket.module';
import { UploadsModule } from './uploads/uploads.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MulterModule.register({ dest: './uploads' }),
    GraphqlsModule,
    ApisModule,

    DatabaseModule,
    AuthModule,
    SocketModule,
    UploadsModule,
  ],
  providers: [],
})
export class AppModule {
  // @InjectConnection() private connection: Connection;

  onModuleInit() {
    // execute logic + access mongoDB via this.connection
    // console.log(`MongoDB connected ${this.connection.host}`);
  }
}
