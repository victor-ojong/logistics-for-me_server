import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Injectable()
export class CurrentUser implements NestInterceptor {
  constructor(private usersService: UsersService) {}
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const userId = request.session.userId;

    if (!request.user) {
      const user = await this.usersService.findOne(parseInt(userId));

      user ? (request.user = user) : (request.user = null);
    }

    return next.handle();
  }
}
