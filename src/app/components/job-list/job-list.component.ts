import { Component, inject } from '@angular/core';
import { JobsDataService } from '../../services/jobs-data.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { JobItemComponent } from '../job-item/job-item.component';
import { Job } from '../../models/job';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [AsyncPipe, JobItemComponent, NgIf],
  templateUrl: './job-list.component.html',
  styles: ``,
})
export class JobListComponent {
  private jobsDataService: JobsDataService = inject(JobsDataService);
  jobs$: Observable<Job[]> = this.jobsDataService.jobs$;

  isFavorite(job: Job): boolean {
    return this.jobsDataService.favorites.some((fav) => fav.id == job.id);
  }

  toggleFavorite(job: Job): void {
    return this.isFavorite(job)
      ? this.jobsDataService.removeFavorite(job)
      : this.jobsDataService.addFavorite(job);
  }
}
