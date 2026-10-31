import { Module } from '@nestjs/common';
import { TodoResolver } from './todo.resolver.js';

@Module({
  providers: [TodoResolver]
})
export class TodoModule {}
