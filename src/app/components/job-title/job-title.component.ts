import { Component, input, InputSignal } from '@angular/core';
import { Job } from '../../models/job';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-job-title',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './job-title.component.html',
  styles: ``,
})
export class JobTitleComponent {
  job: InputSignal<Job> = input.required<Job>();
  linkedTitle: InputSignal<boolean> = input<boolean>(false);
}
