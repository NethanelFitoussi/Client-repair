import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// App import
import { environment } from '../../../../environments/environment';
import { Brand } from '../brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private readonly apiUrl = environment.apiUrl;
  private brandsUrl = this.apiUrl + '/brands';

  constructor(
    private http: HttpClient
  ) { }


  /** GET clients from clients endpoint */
  /* getClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl);
  } */

  /** POST client from client endpoint */
  addBrand(brand: Brand): Observable<Brand> {
    return this.http.post<Brand>(this.brandsUrl, brand);
  }

  /** GET clietn detail from clietn-detail endpoint */
  /* getClientDetail(id: number): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl + `/${id}`);
  } */

  /** PUT client to clients endpoint */
  /* updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(this.clientsUrl + `/${id}`, client);
  } */

  /** DELETE cient cient endpoint */
  /* deleteClient(id: number): Observable<any> {
    return this.http.delete<Client>(this.clientsUrl + `/${id}`);
  } */
}
