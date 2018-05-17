import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  authors: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit(){
    this.serviceGetAuthors();
  }

  serviceGetAuthors(){
    let observable = this._httpService.getAuthors();
    observable.subscribe(data=>{
      console.log(data);
      this.authors = data["data"];
    })
  }

  deleteAuthor(author_id){
    let observable = this._httpService.deleteAuthor(author_id);
    observable.subscribe(data=>{
      this.serviceGetAuthors();
    })
  }
}
