import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

const heroes: Hero[] = HEROES.slice();
heroes.unshift({id: 0, name: 'Zero'});

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return {heroes};
  }
}
