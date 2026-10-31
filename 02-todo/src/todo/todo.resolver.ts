import { Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity.js';

@Resolver()
export class TodoResolver {

    @Query(() => [Todo], { name: 'todo' })
    findAll(): Todo[] {
        return [
            { id: 1, description: 'some', done: false }
        ];
    }
}
