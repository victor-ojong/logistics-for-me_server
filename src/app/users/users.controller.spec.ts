import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { AuthService } from './authService';
import { User } from '../Repositories/users.entity';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  const FakeAuthService: Partial<AuthService> = {
    login: (email: string, password: string) =>
      Promise.resolve({ id: 1, email, password } as User),

    signup: (email: string, password: string, username: string) =>
      Promise.resolve({
        id: 1,
        email,
        password,
        username,
      }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        { provide: AuthService, useValue: FakeAuthService },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
