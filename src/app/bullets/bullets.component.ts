import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bullets',
  templateUrl: './bullets.component.html',
  styleUrls: ['./bullets.component.css']
})
export class BulletsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome() {
    document.getElementById("home").scrollIntoView();
  }

  toAbout() {
    document.getElementById("about").scrollIntoView();
  }

  toResume() {
    document.getElementById("resume").scrollIntoView();
  }

  toPortfolio() {
    document.getElementById("portfolio").scrollIntoView();
  }

  toContact() {
    document.getElementById("contact").scrollIntoView();
  }
}
