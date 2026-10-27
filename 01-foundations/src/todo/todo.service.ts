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
        const todo = new Todo();
        todo.id = Math.max(...this.todos.map(todo => todo.id), 0) + 1;
        todo.description = createTodoDto.description;
        this.todos.push(todo);

        return todo;
    }

    findAll(): Todo[] {
        return this.todos;
    }

    findOne(id: number): Todo {
        const item = this.todos.find(item => item.id === id);

        if (!item) throw new NotFoundException('Item not found');

        return item;
    }

    update(id: number, updateTodoDto: UpdateTodoDto): Todo {
        const { done, description } = updateTodoDto;
        const todo: Todo = this.findOne(id);

        if (done !== undefined) todo.done = done;
        if (description !== undefined) todo.description = description;

        const index = this.todos.findIndex(todo => todo.id === id);
        this.todos.splice(index, 1, todo);

        return todo;
    }

    remove(id: number) {
        this.findOne(id);

        const index = this.todos.findIndex(todo => todo.id === id);
        this.todos.splice(index, 1);

        return this.todos;
    }
}
