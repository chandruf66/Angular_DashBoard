// app.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://1.api.fy23ey06.careers.ifelsecloud.com/';
  private dataSubject = new BehaviorSubject<any>(null);
  data$: Observable<any> = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  private fetchData(): void {
    this.http.get<any>(this.apiUrl)
      .pipe(
        catchError(this.handleError),
        tap(data => this.dataSubject.next(data))
      )
      .subscribe();
  }

  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}
