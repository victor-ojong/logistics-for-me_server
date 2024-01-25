import { IsEmail, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  price: number;

  @IsEmail()
  email: string;

  @IsString()
  date: string;
}
