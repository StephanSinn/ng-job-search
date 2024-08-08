import { Component, EventEmitter, input, Output } from '@angular/core';
import { Job } from '../../models/job';
import { RouterLink } from '@angular/router';
import { JobTitleComponent } from '../job-title/job-title.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [RouterLink, JobTitleComponent, NgClass, NgIf],
  templateUrl: './job-item.component.html',
  styles: ``,
})
export class JobItemComponent {
  job = input.required<Job>();
  isFavorite = input<boolean>(false);
  isJobList = input<boolean>(false);

  @Output() onFavoriteChange = new EventEmitter<Job>();

  toggleFavorite(): void {
    this.onFavoriteChange.emit(this.job());
  }
}
