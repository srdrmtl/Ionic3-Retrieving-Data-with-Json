import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RemoteServiceProvider Provider');
  }
  
  
  getApiUrl : string = "http://localhost:3000";




 getUsers() {
  return new Promise(resolve => {
    this.http.get(this.getApiUrl+'/products').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}




}
