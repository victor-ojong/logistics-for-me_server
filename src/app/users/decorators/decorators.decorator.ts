import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const LoggedInUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    console.log('Hello from the custom Decorator', request.user);
    return request.user || {};
  },
);
