import { IsString } from 'class-validator';

export class AddRouteDto {
  @IsString()
  price: number;

  @IsString()
  description: string;

  @IsString()
  route: string;
}
