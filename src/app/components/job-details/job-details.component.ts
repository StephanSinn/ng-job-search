import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { filter, map, Observable, switchMap } from 'rxjs';
import { Job } from '../../models/job';
import { JobsDataService } from '../../services/jobs-data.service';
import { AsyncPipe, DatePipe, Location, NgForOf, NgIf } from '@angular/common';
import { JobTitleComponent } from '../job-title/job-title.component';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [RouterLink, AsyncPipe, JobTitleComponent, NgIf, NgForOf, DatePipe],
  templateUrl: './job-details.component.html',
  styles: ``,
})
export class JobDetailsComponent {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private jobsDataService: JobsDataService = inject(JobsDataService);
  private location: Location = inject(Location);

  goBackToPreviousPage(): void {
    this.location.back();
  }

  job$: Observable<Job | null> = this.activatedRoute.paramMap.pipe(
    map((params) => params.get('id')),
    filter((jobId): jobId is string => jobId != null),
    switchMap((jobId) => {
      return this.jobsDataService.getJobDetails(jobId);
    }),
  );
}
