import { Injectable } from '@nestjs/common';
import { CraeteUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {id: 0, name: 'Mahsa'},
    {id: 1, name: 'A'},
    {id: 2, name: 'B'},
    {id: 3, name: 'C'},
  ];

  findAll(name?: string): User[] { //getUsers
    if (name) {
      return this.users.filter(user => user.name === name);
    }
    return this.users;
  }

  findById(userId: number): User { //getUserById
    return this.users.find(user => user.id === userId);
  }

  // createUser(name: string) { UPDATE:
  createUser(createUserDto: CraeteUserDto): User {
    // const newUser = {id: Date.now(), name: createUserDto.name};OR:
    const newUser = {id: Date.now(), ...createUserDto}; //because will add more fields into CraeteUserDto
    this.users.push(newUser);
    return newUser;
  }

}
