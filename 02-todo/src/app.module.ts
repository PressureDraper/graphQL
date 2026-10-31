import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloworldModule } from './helloworld/helloworld.module.js';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { TodoModule } from './todo/todo.module.js';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/graphql/schema.sql'),
            playground: false,
            plugins: [
                ApolloServerPluginLandingPageLocalDefault()
            ]
        }),
        HelloworldModule,
        TodoModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
