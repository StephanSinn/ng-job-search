import { Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { FavoritesListComponent } from './components/favorites-list/favorites-list.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';

export const routes: Routes = [
  { path: 'favorites', component: FavoritesListComponent },
  { path: 'jobs/:id', component: JobDetailsComponent },
  { path: '', component: JobListComponent },
];
