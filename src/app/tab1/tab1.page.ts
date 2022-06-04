import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public listaUsers=[];

  constructor(public usersService: UsersService) {}


  ngOnInit() {
    this.usersService.buscarTodosUsers().subscribe(dados =>{
      console.log(dados);
    });
  }

}
