import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://deepak:deepak@clusterexpress.s8oopqo.mongodb.net/userDB?retryWrites=true&w=majority'),
        UsersModule,
  ],
})
export class AppModule {}
