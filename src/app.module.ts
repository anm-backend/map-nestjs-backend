import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { ApisModule } from './apis/apis.module';
import { AuthModule } from './auth/auth.module';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { GraphqlsModule } from './graphqls/graphqls.module';
import { SocketModule } from './gateway/socket.module';
import { UploadsModule } from './uploads/uploads.module';
// import { APP_GUARD } from '@nestjs/core';
// import { JwtAuthGuard } from './auth/guard/jwt-auth.guard';

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
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {
  // @InjectConnection() private connection: Connection;

  onModuleInit() {
    // execute logic + access mongoDB via this.connection
    // console.log(`MongoDB connected ${this.connection.host}`);
  }
}
