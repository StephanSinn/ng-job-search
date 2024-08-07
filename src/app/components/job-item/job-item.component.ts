import { Component, input } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [],
  templateUrl: './job-item.component.html',
  styles: ``,
})
export class JobItemComponent {
  job = input.required<Job>();
}
