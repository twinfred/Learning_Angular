import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  error: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) {}

  ngOnInit() {
    this.newAuthor = {name: ""};
    this.error = false;
  }

  serviceAddAuthor(){
    if(this.newAuthor['name'].length < 3){
      this.error = "Name too short."
    }else{
      let observable = this._httpService.addAuthor(this.newAuthor);
      observable.subscribe(data => {
        this._router.navigate(['/']);
      })
    }
  }

}
