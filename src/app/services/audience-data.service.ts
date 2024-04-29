import { Injectable } from '@angular/core';
import { Audience } from '../models/audience.model';
import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class AudienceDataService {
  private audiences: Audience[] = [
    new Audience('Аудитория 101', 30, 'Инженерный Факультет'),
      new Audience('Лаборатория 201', 20, 'Инженерный Факультет'),
      new Audience('Компьютерный класс 301', 25, 'Факультет Компьютерных Наук'),
      new Audience('Аудитория для семинаров 401', 20, 'Факультет Компьютерных Наук'),
      new Audience('Аудитория М201', 15, 'Математический Факультет'),
      new Audience('Исследовательская лаборатория Ф101', 10, 'Факультет Физики'),
      new Audience('Биологическая лаборатория Б101', 18, 'Биологический Факультет'),
      new Audience('Большая лекционная аудитория Г1', 50, 'Факультет Гуманитарных Наук'),
      new Audience('Аудитория Г2', 15, 'Факультет Гуманитарных Наук'),
  ];

  constructor() { }

  getAudiences(): Audience[] {
    return this.audiences;
  }

  getAudiencesByFaculty(faculty: string): Audience[] {
    return this.audiences.filter(audience => audience.faculty === faculty);
  }

  getSuitableAudiences(group: Group): Audience[] {
    return this.audiences.filter(audience => audience.capacity >= group.size && audience.faculty === group.faculty);
  }

  sortAudiencesByCapacity(): Audience[] {
    return [...this.audiences].sort((a, b) => a.capacity - b.capacity);
  }

  sortAudiencesByName(): Audience[] {
    return [...this.audiences].sort((a, b) => a.name.localeCompare(b.name));
  }
}
