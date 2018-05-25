import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  isOpen = false;

  openUser() {
    console.log('uhhhh you clicked me!');
    this.isOpen = !this.isOpen;
  }


  ngOnInit() {
  }

}
