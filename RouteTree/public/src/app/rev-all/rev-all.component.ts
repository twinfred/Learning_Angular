import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-rev-all',
  templateUrl: './rev-all.component.html',
  styleUrls: ['./rev-all.component.css']
})
export class RevAllComponent implements OnInit {
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