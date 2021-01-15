import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  repositories: any = new Array<any>();
  repositories$: BehaviorSubject<any>;

  getRepositories(): Observable<any> {
    const requestUrl = `https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&per_page=10&page=1`;
    return this.http.get<any>(requestUrl, {});
  }
}
