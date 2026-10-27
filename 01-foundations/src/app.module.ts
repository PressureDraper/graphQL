import { Module } from '@nestjs/common';
import { TodoModule } from './todo/todo.module.js';

@Module({
    imports: [TodoModule],
    controllers: [],
    providers: [],
})

export class AppModule { }
