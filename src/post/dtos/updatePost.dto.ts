import { IsNotEmpty, Length, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {
  @ApiProperty()
  @IsNotEmpty()
  @Length(4, 60)
  title: string;

  @ApiProperty()
  @MaxLength(160, {
    message: 'Description is too long !',
  })
  description: string;
}
