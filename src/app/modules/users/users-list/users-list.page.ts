import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {

  users = [
    {
      name: "Juan Hernandez",
      email: "juanhernandez@gmail.com",
      role: "Administrador"
    },
    {
      name: "Luis Sierra",
      email: "luissierra@gmail.com",
      role: "Administrador"
    },
    {
      name: "Yesid Herrera",
      email: "yesidherrera@gmail.com",
      role: "Administrador"
    },
    {
      name: "Invitado",
      email: "invitado@gmail.com",
      role: "Usuario"
    }
  ];
  usersFiltered: any[] = this.users;

  constructor() { }

  ngOnInit() {
    
  }

  handleInput(event: any){
    const value = event.target.value.toLowerCase();
    this.usersFiltered = this.users.filter(user => user.name.toLowerCase().includes(value));
  }

}
