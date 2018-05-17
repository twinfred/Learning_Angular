import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-rev-author',
  templateUrl: './rev-author.component.html',
  styleUrls: ['./rev-author.component.css']
})
export class RevAuthorComponent implements OnInit {
  id:string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }

}