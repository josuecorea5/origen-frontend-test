import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { FootageResponse } from '../shared/interfaces/footage-response.interface';
import { ImagesDetail } from '../shared/interfaces/images-datail.interface';
import { FootageDetail, MetadataFootage } from '../shared/interfaces/footage-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class FootagesService {
  private readonly API_URL = "https://images-assets.nasa.gov";
  private readonly IMAGES_URL = "https://images-api.nasa.gov";

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

  getFootageAssetsById(nasaId: string): Observable<ImagesDetail> {
    return this.httpClient.get<ImagesDetail>(`${this.IMAGES_URL}/asset/${nasaId}`).pipe(
      catchError(err => this.handleError(err))
    )
  }

  getFootageDetail(nasaId: string): Observable<FootageDetail> {
    return this.httpClient.get<MetadataFootage>(`${this.IMAGES_URL}/metadata/${nasaId}`).pipe(
      switchMap(response => {
        let url = response.location;
        return this.httpClient.get<FootageDetail>(url)
      })
    )
  }

  searchFootage(search: string): Observable<FootageResponse> {
    return this.httpClient.get<FootageResponse>(`${this.IMAGES_URL}/search?q=${search}&media_type=image,video`).pipe(
      catchError(err => this.handleError(err))
    )
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errMessage = '';
    if(err) {
      errMessage = `Error: ${err.error.statusCode}: ${err.error.message}`
    }
    return throwError(errMessage);
  }
}
