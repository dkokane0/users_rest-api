import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
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
  
    @Get()
    readUser(){
      return this.usersService.readUser()
    }
  
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
