import { Expose, Transform } from 'class-transformer';

export class BookingsDto {
  @Expose()
  description: string;

  @Expose()
  pickUpAddress: string;

  @Expose()
  dropOffAddress: string;

  @Expose()
  calculatedValue: number;

  @Expose()
  price: number;

  @Expose()
  date: string;

  @Expose()
  id: number;

  @Transform(({ obj }) => obj.users.id)
  @Expose()
  usersId: number;
}
