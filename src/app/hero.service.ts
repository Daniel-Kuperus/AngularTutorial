import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes")
    return of (HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // Let hier even op de ' `` ' tekens, om het ID mee te geven.
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of (HEROES.find(hero => hero.id === id))
  }
}
