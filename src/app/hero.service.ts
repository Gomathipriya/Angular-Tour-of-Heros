import {Injectable} from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable()
export class HeroService{
    getHeros() : Hero[] {
        return HEROES;
    }//stub
}