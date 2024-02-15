import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../shared/storage.service';

@Component({
  selector: 'app-renting-list',
  templateUrl: './renting-list.page.html',
  styleUrls: ['./renting-list.page.scss'],
})
export class RentingListPage implements OnInit {

  arrayRenting: any = [];

  constructor(
    private http: HttpClient, private storageService:StorageService
  ) { }

  ngOnInit() {
    this.arrayRenting=this.storageService.getAll(StorageService.STORAGE_KEYS.RENTING);
  }
}


