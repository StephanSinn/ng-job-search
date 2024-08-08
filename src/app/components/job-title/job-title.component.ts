import { Component, input } from '@angular/core';
import { Job } from '../../models/job';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-title',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-title.component.html',
  styles: ``,
})
export class JobTitleComponent {
  job = input.required<Job>();
}
