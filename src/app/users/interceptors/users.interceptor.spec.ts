import { Test } from '@nestjs/testing';
import { CurrentUser } from './users.interceptor';
import { UsersService } from '../users.service';
import { User } from 'src/app/Repositories/users.entity';
let currentUser: CurrentUser;

describe('CurrentUser Interceptor', () => {
  beforeEach(async () => {
    const fakeUsersService: Partial<UsersService> = {
      findOne: () => Promise.resolve({} as User),
    };
    const module = await Test.createTestingModule({
      providers: [
        CurrentUser,
        {
          provide: UsersService,
          useValue: fakeUsersService,
        },
      ],
    }).compile();

    currentUser = module.get(CurrentUser);
  });

  it('should be defined', async () => {
    expect(currentUser).toBeDefined();
  });
});
