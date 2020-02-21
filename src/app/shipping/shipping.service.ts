import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  private url = `${environment.apiurl}\shipping`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getItems() {
    return this.httpClient.get(this.url);
  }
}
