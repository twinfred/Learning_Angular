import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "";
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getAvatarFromService();
  }
  getAvatarFromService(){
    let observable = this._httpService.getAvatar();
    observable.subscribe(data => {
      console.log("Got a Movie!", data);
      console.log("Avatar made",data["BoxOffice"],"at the Box Office!");
      this.title = data["Title"];
    })
  }
    
  // getAvatar();
  // harryPotterSearch();
}
