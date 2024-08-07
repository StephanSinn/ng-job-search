import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobsDataService } from './services/jobs-data.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, JsonPipe, TopMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-job-search';
}
