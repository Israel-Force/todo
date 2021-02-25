import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetAuthorsService {
  constructor() {}
  getAuthors() {
    return ['autour1', 'autour2', 'autour3'];
  }
}
