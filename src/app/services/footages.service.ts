import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FootageResponse } from '../shared/interfaces/footage-response.interface';

@Injectable({
  providedIn: 'root'
})
export class FootagesService {
  private readonly API_URL = "https://images-assets.nasa.gov";

  constructor(private httpClient: HttpClient) { }

  getPopularFootages(): Observable<FootageResponse> {
    return this.httpClient.get<FootageResponse>(`${this.API_URL}/popular.json`).pipe(
      catchError(err => this.handleError(err))
    );
  }

  getRecentFootages(): Observable<FootageResponse> {
    return this.httpClient.get<FootageResponse>(`${this.API_URL}/recent.json`).pipe(
      catchError(err => this.handleError(err))
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errMessage = '';
    if(err) {
      errMessage = `Error: ${err.error.statusCode}: ${err.error.message}`
    }
    return throwError(errMessage);
  }
}
