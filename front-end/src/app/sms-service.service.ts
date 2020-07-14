import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SmsServiceService {

  constructor(private http: HttpClient) {}

    getSmsData() {
        return this.http.get('http://localhost:8081/api/smsInfo');
    }
}
