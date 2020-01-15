import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BrokerFromAPI } from './models';

@Injectable({
  providedIn: 'root',
})
export class BrokersApiService {
  constructor(private http: HttpClient) {}

  getBrokersList(): Observable<BrokerFromAPI[]> {
    return this.http.get<BrokerFromAPI[]>('/api/brokers');
  }
}
