import { Component, input } from '@angular/core';
import { Job } from '../../models/job';
import { RouterLink } from '@angular/router';
import { JobTitleComponent } from '../job-title/job-title.component';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [RouterLink, JobTitleComponent],
  templateUrl: './job-item.component.html',
  styles: ``,
})
export class JobItemComponent {
  job = input.required<Job>();
}
