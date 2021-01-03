import { Injectable } from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestataireService {
   
   private baseUrl = 'http://localhost:8080/demande/DG'; 
   constructor(private http: HttpClient ) {}

   getServiceList(): Observable<any> {
       return this.http.get('http://localhost:8080/prestation');
   }
    
   createService(servicepres: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, servicepres);
   }

}
