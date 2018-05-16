import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cakes: string[];
  newCake: any;
  ratings: any;
  selectedCake: any = false;
  trackByRatings(index: number, cake: any): string { return cake._id };

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getCakes();
    this.newCake = {baker: "", image: ""};
    this.ratings = [];
  }

  getCakes(){
    let observable = this._httpService.serviceGetCakes();
    observable.subscribe((data) => {
      this.cakes = data['data'];
      console.log(data['data']);
      for(var i in this.cakes){
        this.ratings.push({stars: "5", comment: ""})
      }
      console.log("Ratings:", this.ratings)
    })
  }

  addCake(){
    let observable = this._httpService.serviceAddCake(this.newCake);
    observable.subscribe((data) => {
      this.getCakes();
      this.newCake = {baker: "", image: ""};
    })
  }

  addRating(idx, cake_id){
    console.log(this.ratings[idx], cake_id)
    let observable = this._httpService.serviceAddReview(this.ratings[idx], cake_id);
    observable.subscribe((data) => {
      this.ratings[idx] = {stars: "5", comment: ""};
      this.selectCake(cake_id);
    })
  }

  selectCake(cake_id){
    let observable = this._httpService.serviceSelectCake(cake_id);
    observable.subscribe((data) => {
      this.selectedCake = data["data"];
      let sum = 0;
      for(var i in this.selectedCake["ratings"]){
        sum += this.selectedCake["ratings"][i]["stars"];
      }
      this.selectedCake['avgRating'] = Math.round((sum/this.selectedCake["ratings"].length) * 100) / 100;
      this.selectedCake['ratings'].reverse();
      console.log("Selected Cake:", this.selectedCake);
    })
  }
}
