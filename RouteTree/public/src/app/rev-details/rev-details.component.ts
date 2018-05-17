import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-rev-details',
  templateUrl: './rev-details.component.html',
  styleUrls: ['./rev-details.component.css']
})
export class RevDetailsComponent implements OnInit {
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