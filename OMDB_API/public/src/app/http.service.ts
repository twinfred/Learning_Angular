import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.harryPotterSearch();
  }
  getAvatar(){
    return this._http.get('http://www.omdbapi.com/?apikey=845b8a53&t=Avatar');
  }
  harryPotterSearch(){
    return this._http.get('http://www.omdbapi.com/?apikey=845b8a53&s=Harry Potter');
  }
  titleSearch(title){
    return this._http.get('http://www.omdbapi.com/?apikey=845b8a53&t='+title);
  }
}
