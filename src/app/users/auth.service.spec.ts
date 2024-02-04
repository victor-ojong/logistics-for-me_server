import { Test } from '@nestjs/testing';
import { AuthService } from './authService';
import { UsersService } from './users.service';
import { User } from '../Repositories/users.entity';

let service: AuthService;
describe('AuthService', () => {
  beforeEach(async () => {
    // create a fake copy of the usersService with methods that are used
    // by the authService

    const fakeUsersService = {
      findByEmail: () => Promise.resolve({}),
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    service = module.get(AuthService);
  });

  it('can create an instance of the auth service', async () => {
    expect(service).toBeDefined();
  });
});
