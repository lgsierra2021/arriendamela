import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../shared/storage.service';

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

  constructor(public formB: FormBuilder, private router:Router, private storageService:StorageService) {
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
  }

  save(){
    const renting = this.rentingForm.value
    this.storageService.save(StorageService.STORAGE_KEYS.RENTING, renting);
  }
  ngOnInit() {
}

}
