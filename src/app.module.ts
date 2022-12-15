import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './schema/user.models';
// import { UsersModule } from './users/users.module';
// import { UsersController } from './users/users.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://deepak:deepak@clusterexpress.s8oopqo.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{name:'user',schema:UserSchema}]),
    // UsersModule
  ],
  controllers: [AppController, 
    // UsersController
  ],
  providers: [AppService],
})
export class AppModule {}
