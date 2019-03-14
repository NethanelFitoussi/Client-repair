import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// App import
import { environment } from '../../../../environments/environment';
import { Model } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private readonly apiUrl = environment.apiUrl;
  private modelsUrl = this.apiUrl + '/models';

  constructor(
    private http: HttpClient
  ) { }

  /** POST client from client endpoint */
  addClient(model: Model): Observable<Model> {
    return this.http.post<Model>(this.modelsUrl, model);
  }
}
