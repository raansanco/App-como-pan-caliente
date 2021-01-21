import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidorealizado',
  templateUrl: './pedidorealizado.page.html',
  styleUrls: ['./pedidorealizado.page.scss'],
})
export class PedidorealizadoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  gotoMenu(){
    this.router.navigate(['/tabs/tabmenu']);
  }
  gotoMispedidos(){
    this.router.navigate(['/tabs/tabmispedidos']);
    
  }

}
