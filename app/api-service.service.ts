import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl:any="http://dummy.restapiexample.com/api/v1/";
  constructor(    private http:HttpClient,
    ) { }
  posturl(url, data) {
    // console.log(this.networkService.isOnline())
  
        let headers = new HttpHeaders({
           'Authorization': 'Bearer ' + localStorage.getItem('token'),
           "Content-Type": "Application/json",
          'Access-Control-Allow-Origin':'*'
          
        });
        let options = {
          headers: headers
       }
        // let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(data);
        //alert(body);
     
        return this.http.post(this.baseUrl + url, body, options).pipe(map((response: any) => response));
      }
      getUrl(url){
        let headers = new HttpHeaders({
          'Authorization': 'Bearer ' + localStorage.getItem('token'),
          "Content-Type": "Application/json",
         'Access-Control-Allow-Origin':'*'
         
       });
       let options = {
         headers: headers
      }
       // let options = new RequestOptions({ headers: headers });
       // let body = JSON.stringify(data);
       //alert(body);
    
       return this.http.get(this.baseUrl + url, options).pipe(map((response: any) => response));
     }
     
      
}
