import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  open: string
  toggle:string
  cond:boolean=true

  constructor() {
    
   }

  ngOnInit(): void {
  }


  barsCalled() {
    if (this.cond) {
      this.open = "open"
      this.toggle = "toggle"
      this.cond = false
    } else {
      this.open = ""
      this.toggle=""
      this.cond = true
    }
  }


}
