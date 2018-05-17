import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pro-category',
  templateUrl: './pro-category.component.html',
  styleUrls: ['./pro-category.component.css']
})
export class ProCategoryComponent implements OnInit {
  cat:string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.cat = params['cat'];
    });
  }

}