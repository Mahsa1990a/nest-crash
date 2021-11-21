import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CraeteUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private usersSrvice: UsersService) {}

  @Get()
  getUsers(): User[] {
    // return [{id: 0}] //update after adding methods in service:
    return this.usersSrvice.findAll();
  }

  @Get(':id') // : means it's a dynamic value
  //param decorator
  getUserById(@Param('id') id: string): User {
    // return {
    //   id: Number(id)
    // } //update after adding methods in service:
    return this.usersSrvice.findById(Number(id));
  }

  @Post()
  // @Body decorator like bodyParser
  createUser(@Body() body: CraeteUserDto): User { //body is gonna have name
    // return this.usersSrvice.createUser(body.name); OR update createUser in service and then:
    return this.usersSrvice.createUser(body);
  }
}
