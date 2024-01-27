import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  customerName: string;

  @IsEmail()
  email: string;

  @IsString()
  description: string;

  @IsString()
  pickUpAdress: string;

  @IsString()
  dropOffAdress: string;

  @IsNumber()
  calculatedValue: number;

  @IsString()
  price: number;

  @IsString()
  date: string;
}
