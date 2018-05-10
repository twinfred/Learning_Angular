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
    let tempObservable = this._http.get('http://www.omdbapi.com/?apikey=845b8a53&s=Harry Potter');
    tempObservable.subscribe(data => {
      console.log("Let's do a search for 'Harry Potter' movies!", data);
      console.log("Our 'Harry Potter' search returned", data['Search'].length, "results.");
      let callbackObservable = this._http.get('http://www.omdbapi.com/?apikey=845b8a53&t='+data['Search'][0]['Title']);
      callbackObservable.subscribe(data => {
        console.log("We clicked on the first Harry Potter search result and got a Movie!", data);
        console.log("Can you believe that", data["Title"], "made", data["BoxOffice"], "at the Box Office! That's a lot of money.")
      })
    })
  }
}
