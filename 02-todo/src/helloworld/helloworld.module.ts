import { Module } from '@nestjs/common';
import { HelloworldResolver } from './helloworld.resolver.js';

@Module({
    providers: [HelloworldResolver]
})
export class HelloworldModule { }
