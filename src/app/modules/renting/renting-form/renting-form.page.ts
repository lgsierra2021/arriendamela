import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renting-form',
  templateUrl: './renting-form.page.html',
  styleUrls: ['./renting-form.page.scss'],
})
export class RentingFormPage implements OnInit {
  rentingForm: FormGroup;
  public alertButtons = [
    {
      text: 'NO',
      role: 'cancel',
      handler:()=>{
        console.log('No quiero salir');
      },

    },
    {
      text:'SI',
      role:'confirm',
      handler:()=>{
        this.returnHome();
      },

    },
  ];

  constructor(public formB: FormBuilder, private router:Router) {
    this.rentingForm = this.formB.group({
      'category': new FormControl('', Validators.required),
      'price': new FormControl('', Validators.required),
      'area': new FormControl('', Validators.required),
      'numBathRooms': new FormControl('', Validators.required),
      'numRooms': new FormControl('', Validators.required),
      'address': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required),
    })
   }
  //funciones - medotos
  returnHome(){
    this.router.navigate([''])
  }

  setResult() {
    console.log('Dismissed with role: ${ev.detail.role}');
  }
  ngOnInit() {
}

}
