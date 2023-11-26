import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

   auth_headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `${environment.API_AUTH}`,
  });


  getData(technology:String) {
    const options = { headers: this.auth_headers };
    const url =`${environment.API_URL}${technology}`;
    return this.http.get(url,options);
  }
}


