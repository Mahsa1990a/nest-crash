import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any = [
    {id: 0, name: 'Mahsa'}
  ];

  findAll() { //getUsers
    return this.users;
  }

  findById(userId: number) { //getUserById
    return this.users.find(user => user.id === userId);
  }

}
