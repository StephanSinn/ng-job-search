import { Component, inject } from '@angular/core';
import { JobsDataService } from '../../services/jobs-data.service';
import { NgIf } from '@angular/common';
import { JobItemComponent } from '../job-item/job-item.component';

@Component({
  selector: 'app-favorites-list',
  standalone: true,
  imports: [JobItemComponent, NgIf],
  templateUrl: './favorites-list.component.html',
  styles: ``,
})
export class FavoritesListComponent {
  jobsDataService: JobsDataService = inject(JobsDataService);
}
