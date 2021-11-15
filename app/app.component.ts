import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  spacex:any;
  link="https://api.spacexdata.com/v3/missions";
  constructor(private http:HttpClient){
    this.http.get(this.link).subscribe((spacey:any) =>{
    this.spacex=spacey;
    })
  }
}
