import { WeatherService } from './../../../services/weather.service';
import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathers:Weather[];
  cityname:string='';

  constructor(private searchService:WeatherService) { }

  ngOnInit(): void {
    
  }


  getUserInf () {
    let list = []
    this.searchService.getUserSearch(this.cityname).subscribe(data =>{
      list.push(data)
    })
    this.weathers=list
  }

}
