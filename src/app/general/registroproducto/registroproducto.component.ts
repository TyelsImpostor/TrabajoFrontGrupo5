import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registroproducto',
  templateUrl: './registroproducto.component.html',
  styleUrls: ['./registroproducto.component.css']
})
export class RegistroproductoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  texto: string = "";
  lista_productos: producto2[] = [];
  //FORM=====
  codigo: string = "";
  nombre: string = "";
  precio: number = 0;
  stock: string = "";
  //==========

  mensaje_codigo: string | null = "";
  mensaje_nombre: string | null = "";
  mensaje_precio: string | null = "";
  mensaje_stock: string | null = "";


  agregar(): void {
    const producto: any = {
      codigo: this.codigo,
      nombre: this.nombre,
      precio: this.precio,
      stock: this.stock
    }

    this.lista_productos.push(producto);
    this.codigo = "";
    this.nombre = "";
    this.precio = 0;
    this.stock = "";
  }
}

interface producto2{
  codigo: number,
  nombre: string,
  precio: number,
  stock: number
}
