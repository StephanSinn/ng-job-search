import {
  Component,
  EventEmitter,
  input,
  InputSignal,
  Output,
} from '@angular/core';
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
  job: InputSignal<Job> = input.required<Job>();
  isFavorite: InputSignal<boolean> = input<boolean>(false);
  isJobList: InputSignal<boolean> = input<boolean>(false);

  @Output() onFavoriteChange: EventEmitter<Job> = new EventEmitter<Job>();

  toggleFavorite(): void {
    this.onFavoriteChange.emit(this.job());
  }
}
