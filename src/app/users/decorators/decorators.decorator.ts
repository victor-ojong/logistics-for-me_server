import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const LoggedInUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    return request.user || {};
  },
);
