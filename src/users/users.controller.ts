import { Controller, Get, Param, Post, Body, Query, NotFoundException, BadRequestException, InternalServerErrorException, HttpException, HttpStatus } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CraeteUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users') //will seperate users in swagger
@Controller('users')
export class UsersController {

  constructor(private usersSrvice: UsersService) {}
  @ApiOkResponse({type: User, isArray: true})
  @ApiQuery({name: 'name', required: false}) //beside ? you need to add ApiQuery to required: false
  @Get()
  getUsers(@Query('name') name?: string): User[] { //localhost:3000/users?name=Mahsa&age=30& ... need to add Query
    // return [{id: 0}] //update after adding methods in service:
    return this.usersSrvice.findAll(name);
  }

  @ApiOkResponse({type: User, description: "The user ..."})
  @ApiNotFoundResponse() //tells swagger it's possible to get 404 from this call
  @Get(':id') // : means it's a dynamic value
  //param decorator
  getUserById(@Param('id') id: string): User {

    // return {
      //   id: Number(id)
      // } //update after adding methods in service:
      // return this.usersSrvice.findById(Number(id));

    const user = this.usersSrvice.findById(Number(id));
    if (!user) { //if user didn't exist
      throw new NotFoundException(); //OR:
      // throw new BadRequestException();OR:
      // throw new InternalServerErrorException(); OR do the custome error handler:
      // throw new HttpException({
      //   status: HttpStatus.FORBIDDEN,
      //   error: "This is a custom msg",
      // }, HttpStatus.FORBIDDEN);
    }
    return user;
  }

  //decorator for schema of response:
  @ApiCreatedResponse({type: User})
  @Post()
  // @Body decorator like bodyParser
  createUser(@Body() body: CraeteUserDto): User { //body is gonna have name
    // return this.usersSrvice.createUser(body.name); OR update createUser in service and then:
    return this.usersSrvice.createUser(body);
  }
}
