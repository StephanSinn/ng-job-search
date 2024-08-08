import { Component, inject } from '@angular/core';
import { JobsDataService } from '../../services/jobs-data.service';
import { AsyncPipe, NgIf } from '@angular/common';
import { JobItemComponent } from '../job-item/job-item.component';

@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [AsyncPipe, JobItemComponent, NgIf],
  templateUrl: './favorites-list.component.html',
  styles: ``,
})
export class FavoritesListComponent {
  jobDataService = inject(JobsDataService);
}
