import { ApiProperty } from "@nestjs/swagger";

// dto: data tranfor object => schema representation of whatever object you wanna use as an inter media to transfer information
export class CraeteUserDto {

  @ApiProperty() //shows the schema
  name: string

  @ApiProperty({required: false}) // ? & required: false => means age optional
  age?: number
} 