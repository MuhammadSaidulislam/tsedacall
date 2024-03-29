import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin:20,
    nav: true,
    navSpeed: 700,
    navText:["<div class='nav-btn prev-slide'><</div>","<div class='nav-btn next-slide'>></div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
  }

  customOptionsMobile: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: true,
    navSpeed: 700,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      }
    },
  }


}
