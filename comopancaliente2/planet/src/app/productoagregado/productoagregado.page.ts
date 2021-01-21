import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productoagregado',
  templateUrl: './productoagregado.page.html',
  styleUrls: ['./productoagregado.page.scss'],
})
export class ProductoagregadoPage implements OnInit {
 

  constructor(private route: Router) { }

  ngOnInit() {
  }

  gotocarritodecompras(){
    this.route.navigate(['/carritodecompras']);
  }
  gotoMenu(){
    this.route.navigate(['/tabs/tabmenu']);
  }
}
