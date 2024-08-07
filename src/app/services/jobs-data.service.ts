import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JobsDataService {
  httpClient = inject(HttpClient);
  jobs$ = this.httpClient.get('/jobs')

}
