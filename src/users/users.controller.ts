import { Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../schema/user.models';
import { UserUpdateDto } from '../dto/userUpdate.dto';
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    async createUser(@Body() userDto: User){
      return this.usersService.createUser(userDto)
    }
  
    // @Get()
    // readUser(){
    //   return this.usersService.readUser()
    // }

    @Get()
    findAll(@Query() query: UserUpdateDto)
    {
      return `This action return all Users (limit: ${query.limit} items)`;
    }
// @Get()
// getAll(
//   @Query('search') search: string,
// @Query() query:any
// ){
//   console.log(query);
//   const metadata = {search};
//   return {
//     message: 'search for user',
//     data:[],
//     metadata,
//   };
// }


    @Put(':id')
    async updateUser(
      @Param('id') id:string ,@Body() updateData:UserUpdateDto
      ):Promise<User>{
      return this.usersService.updateUser(id,updateData)
    }
  
    @Delete(':id')
    async deleteUser(@Param('id') id:string){
      return this.usersService.deleteUser(id)
    }



}
