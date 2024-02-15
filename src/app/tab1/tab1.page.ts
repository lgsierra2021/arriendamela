import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  //Variables o constantes - atributos
  
  constructor(private router: Router) {

  }
  // metodos
  createRenting() {
    this.router.navigate(['renting-form'])
  }
}
