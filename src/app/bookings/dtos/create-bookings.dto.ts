import { IsNumber, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  description: string;

  @IsString()
  pickUpAddress: string;

  @IsString()
  dropOffAddress: string;

  @IsNumber()
  calculatedValue: number;

  @IsNumber()
  price: number;

  @IsString()
  date: string;
}
