import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.page.html',
  styleUrls: ['./partie.page.scss'],
})
export class PartiePage {

  public alertButtons = ['OK'];
  public alertInputs = [

    {
      type: 'string',
      placeholder: 'Inviter un Joueur',
    },

    {
      type: 'number',
      placeholder: 'Bâtonnet',
      min: 20,
      max: 100,
    },

  ];
}
