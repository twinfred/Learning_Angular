import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author:any;
  error: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this.author = {name: ""};
    this.error = false;
    this._route.params.subscribe((params: Params) => {
      console.log("ID:", params['id'])
      let observable = this._httpService.findAuthor(params['id'])
      observable.subscribe(data => {
        this.author = data['data'];
        console.log("Author:", this.author)
      })
    })
  }

  serviceEditAuthor(){
    if(this.author['name'].length < 3){
      this.error = "Name too short."
    }else{
      let observable = this._httpService.editAuthor(this.author);
      observable.subscribe(data => {
        this._router.navigate(['/']);
      })
    }
  }

}
