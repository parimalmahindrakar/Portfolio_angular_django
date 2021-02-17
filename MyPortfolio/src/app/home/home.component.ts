import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  photoPath:string = "" 
  portfolio:string=""
  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {
    this.portfolio = this.sharedService.myPortfolioLink
  }

}
