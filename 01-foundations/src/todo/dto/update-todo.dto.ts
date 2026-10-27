import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto.js';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {

    @IsBoolean()
    @IsOptional()
    done?: boolean;
    
}
