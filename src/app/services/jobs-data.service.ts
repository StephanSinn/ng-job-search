import { inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobsDataService {
  httpClient: HttpClient = inject(HttpClient);

  favorites: Job[] = [];

  jobs$: Observable<Job[]> = this.httpClient.get<Job[]>('/jobs');

  getJobDetails(jobId: string): Observable<Job> {
    return this.httpClient.get<Job>(`/jobs/${jobId}`);
  }

  addFavorite(job: Job): void {
    this.favorites.push(job);
    this.storeFavoritesLocally();
  }

  removeFavorite(job: Job): void {
    this.favorites = this.favorites.filter((fav) => fav.id != job.id);
    this.storeFavoritesLocally();
  }

  storeFavoritesLocally(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  getFavoritesLocally(): void {
    this.favorites = JSON.parse(localStorage.getItem('favorites') ?? '');
  }
}
