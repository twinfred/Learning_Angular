import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-pro-brand',
  templateUrl: './pro-brand.component.html',
  styleUrls: ['./pro-brand.component.css']
})
export class ProBrandComponent implements OnInit {
  brand:string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.brand = params['brand'];
    });
  }

}
