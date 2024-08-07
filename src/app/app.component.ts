import {Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JobsDataService} from "./services/jobs-data.service";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';
  dataService = inject(JobsDataService)
  jobs$ = this.dataService.jobs$
}
