import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.page.html',
  styleUrls: ['./jeu.page.scss'],
})
export class JeuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sticks = new Array(10);

}
