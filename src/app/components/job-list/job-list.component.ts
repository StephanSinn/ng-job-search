import { Component, inject } from '@angular/core';
import { JobsDataService } from '../../services/jobs-data.service';
import { AsyncPipe, NgClass, NgIf, NgStyle } from '@angular/common';
import { JobItemComponent } from '../job-item/job-item.component';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [AsyncPipe, JobItemComponent, NgIf, NgClass, NgStyle],
  templateUrl: './job-list.component.html',
  styles: ``,
})
export class JobListComponent {
  dataService = inject(JobsDataService);
  jobs$ = this.dataService.jobs$;

  isFavorite(job: Job): boolean {
    return this.dataService.favorites.some((fav) => fav.id == job.id);
  }

  toggleFavorite(job: Job) {
    console.log('toggle favorite job', job);
    return this.isFavorite(job)
      ? this.dataService.removeFavorite(job)
      : this.dataService.addFavorite(job);
  }
}
