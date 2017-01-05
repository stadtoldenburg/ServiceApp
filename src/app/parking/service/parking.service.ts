import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';
declare var xml2json:any;
@Injectable()
export class CompaniesService {

  constructor(private http: Http) {
  }

  createAuthorizationHeader(headers:Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('a20e6aca-ee83-44bc-8033-b41f3078c2b6:c199f9c8-0548-4be7-9655-7ef7d7bf9d20')); 
  }

  getCompanies() {
  	var headers = new Headers();
  	this.createAuthorizationHeader(headers);
  	headers.append('Accept', 'application/xml');

  	return this.http.get('https://angular2.apispark.net/v1/companies/', {
      headers: headers
    }).map(res => JSON.parse(xml2json(res.text(),'  ')))
    /*.map(data => {
      console.log(data);
      return [].concat.apply([], data);
    })*/;
  }
}