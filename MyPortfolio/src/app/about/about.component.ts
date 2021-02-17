import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  portfolio: string = ""
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.portfolio = this.sharedService.myPortfolioLink
  }

}
