import { inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class JobsDataService {
  httpClient = inject(HttpClient);

  favorites: Job[] = [];

  jobs$ = this.httpClient.get<Job[]>('/jobs');

  addFavorite(job: Job) {
    this.favorites.push(job);
    this.storeFavoritesLocally();
  }

  removeFavorite(job: Job) {
    this.favorites.splice(this.favorites.indexOf(job), 1);
    this.storeFavoritesLocally();
  }

  storeFavoritesLocally() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  getFavoritesLocally() {
    this.favorites = JSON.parse(localStorage.getItem('favorites') ?? '');
  }
}
