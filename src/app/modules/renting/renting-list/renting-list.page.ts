import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-renting-list',
  templateUrl: './renting-list.page.html',
  styleUrls: ['./renting-list.page.scss'],
})
export class RentingListPage implements OnInit {

  arrayRenting: any = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getRenting().subscribe((res) => {
      this.arrayRenting = res;
    })
  }

  getRenting() {
    return this.http
      .get("assets/files/renting.json")
      .pipe(
        map((res: any) => {
          return res.data;
        })
      )
  }
}


