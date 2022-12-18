import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { ApisModule } from './apis/apis.module';
import { GraphqlsModule } from './graphqls/graphqls.module';
import { DatabaseModule } from './database/database.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { AuthModule } from './auth/auth.module';
import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    GraphqlsModule,
    ApisModule,
    DatabaseModule,
    CloudinaryModule,
    AuthModule,
    SocketModule,
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
