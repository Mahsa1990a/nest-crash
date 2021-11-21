import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

// dto: data tranfor object => schema representation of whatever object you wanna use as an inter media to transfer information
export class CraeteUserDto {

  @ApiProperty() //shows the schema
  @IsAlphanumeric() //coming from globall pipe validation
  @MaxLength(10) //coming from globall pipe validation
  name: string

  // @ApiProperty({required: false}) // ? & required: false => means age optional
  // age?: number
} 