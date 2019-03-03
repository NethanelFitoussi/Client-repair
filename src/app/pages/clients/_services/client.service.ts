import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// App import
import { environment } from '../../../../environments/environment';
import { Client } from '../client';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly apiUrl = environment.apiUrl;
  private clientsUrl = this.apiUrl + '/clients';

  constructor(
    private http: HttpClient
  ) 
  {}


  /** GET clients from clients endpoint */
  getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl);
  }

  /** POST client from client endpoint */
  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl, client);
  }

}
