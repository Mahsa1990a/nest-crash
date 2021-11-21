import { ApiProperty } from "@nestjs/swagger";

export class User { //represent user object
  @ApiProperty()
  id: number;
  
  @ApiProperty()
  name: string;
}