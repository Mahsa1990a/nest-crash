import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private usersSrvice: UsersService) {}

  @Get()
  getUsers(): any {
    // return [{id: 0}] //update after adding methods in service:
    return this.usersSrvice.findAll();
  }

  @Get(':id') // : means it's a dynamic value
  //param decorator
  getUserById(@Param('id') id: string): any {
    // return {
    //   id: Number(id)
    // } //update after adding methods in service:
    return this.usersSrvice.findById(Number(id));
  }
}
