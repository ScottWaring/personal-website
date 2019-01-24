import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.addEventListener("scroll", function(){
      if (window.scrollY < 25) {
        document.getElementById("logo").className = "big-title";
      } else if (window.scrollY > 25) {
        document.getElementById("logo").className = "small-title";
      }
      console.log(window.scrollY);
    });

  }

}
