import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto.js';
import { UpdateTodoDto } from './dto/update-todo.dto.js';
import { Todo } from './entities/todo.entity.js';

@Injectable()
export class TodoService {
    private todos: Todo[] = [
        { id: 1, description: 'Something', done: false },
        { id: 2, description: 'Something2', done: false },
        { id: 3, description: 'Something3', done: false }
    ];

    create(createTodoDto: CreateTodoDto) {
        return 'This action adds a new todo';
    }

    findAll(): Todo[] {
        return this.todos;
    }

    findOne(id: number): Todo {
        const item = this.todos.find(item => item.id === id);

        if (!item) throw new NotFoundException('Item not found');

        return item;
    }

    update(id: number, updateTodoDto: UpdateTodoDto) {
        return `This action updates a #${id} todo`;
    }

    remove(id: number) {
        return `This action removes a #${id} todo`;
    }
}
