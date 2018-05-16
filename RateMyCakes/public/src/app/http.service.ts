import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  serviceGetCakes(){
    return this._http.get('/api/cakes');
  }

  serviceAddCake(cake){
    return this._http.post('/api/cakes', cake);
  }
  
  serviceAddReview(review, cake_id){
    return this._http.put('/api/cakes/'+cake_id, review);
  }

  serviceSelectCake(cake_id){
    return this._http.get('/api/cakes/'+cake_id);
  }
}
