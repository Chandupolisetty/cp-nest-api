import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Chandrakanth Polisetty!';
  }
  getAbout(): string {
    return 'Chandrakanth Polisetty - Software developer.';
  }
}
