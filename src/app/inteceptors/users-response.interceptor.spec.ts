import { UserDto } from '../serializer-response-dtos/user.dto';
import { UsersResponseInterceptor } from './users-response.interceptor';
let dto: UserDto;

describe('UsersResponseInterceptor', () => {
  it('should be defined', () => {
    expect(new UsersResponseInterceptor(dto)).toBeDefined();
  });
});
