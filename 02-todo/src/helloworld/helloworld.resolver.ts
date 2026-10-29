import { Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {

    @Query(() => String, { description: 'Message for describing the purpose of this function', name: 'getRename' })
    helloWorld(): string {
        return 'Hello World';
    }

    @Query(() => Float, { name: 'randomNumber' })
    getRandomNumber(): number {
        return Math.random() * 100;
    }

    @Query(() => Int, { description: 'get a random number from 0 to 10', name: 'randomFromZero'})
    getRandomFromZero(): number {
        return Math.floor(Math.random() * 10);
    }
}
