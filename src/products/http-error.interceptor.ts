import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadGatewayException, Logger, HttpException } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements NestInterceptor {
  private readonly logger = new Logger(HttpErrorInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError(error => {
        // Log the error details
        this.logger.error(`Error occurred: ${error.message}`, error.stack, HttpErrorInterceptor.name);

        // You can handle different types of errors and customize the response accordingly
        // For example, you might check the type of error and return a specific exception
        if (error instanceof HttpException) {
          return throwError(error); // If it's an HttpException, return it directly
        }

        // If it's an unexpected error, throw a BadGatewayException
        return throwError(new BadGatewayException('Something went wrong'));
      }),
    );
  }
}

