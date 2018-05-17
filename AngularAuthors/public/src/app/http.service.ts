import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors(){
    return this._http.get('/api/authors');
  }

  addAuthor(author){
    console.log("Author:", author);
    if(author['name'].length < 3){
      return({error: "Name not long enough"});
    }else{
      return this._http.post('/api/authors', author);
    }
  }

  deleteAuthor(author_id){
    console.log("Author ID:", author_id);
    return this._http.delete('/api/authors/'+author_id);
  }

  findAuthor(author_id){
    return this._http.get('/api/authors/'+author_id);
  }

  editAuthor(author){
    console.log(author)
    console.log(author["_id"])
    return this._http.put('/api/authors/'+author["_id"], author)
  }
}
