import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobsDataService } from './services/jobs-data.service';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title: string = 'ng-job-search';
  jobsDataService: JobsDataService = inject(JobsDataService);

  ngOnInit(): void {
    this.jobsDataService.restoreFavoritesLocally();
  }
}
