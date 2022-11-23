import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showSpinner: boolean = false;

  constructor() { }

  ngOnInit(): void {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
      })
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) =>
      observer.observe(el));
  }

}
