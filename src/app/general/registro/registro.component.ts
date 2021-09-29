import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //FORM=====
  email: string = "";
  nombre: string = "";
  numero: string = "";
  //==========

  mensaje_email: string | null = "";
  mensaje_nombre: string | null = "";
  mensaje_numero: string | null = "";

  mensaje_emailF: string | null = "";
  mensaje_nombreF: string | null = "";
  mensaje_numeroF: string | null = "";



  insertar(): void {
    var valido = 0;

    if (/^\s+|\s+$/.test(this.nombre)) {
      this.mensaje_nombre = "Introduzca un cadena de texto.";
      this.nombre = "";
    } else if (this.nombre.trim() == "") {
      this.nombre = "";
      this.mensaje_nombre = " El campo nombre no puede  estar vacio";
    } else if (this.nombre.length < 4 || this.nombre.length > 10) {
      this.nombre = "";
      this.mensaje_nombre = "El campo nombre debe tener entre 4 y 10 caracteres";
    } else {
      this.mensaje_nombre = "";
      valido++;
    }

    let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    if (/^\s+|\s+$/.test(this.email)) {
      this.mensaje_email = "Introduzca un cadena de texto.";
      this.email = "";
    } else if (this.email.trim() == "") {
      this.mensaje_email = "El campo email no puede  estar vacio";
      this.email = "";
    } else if (!regexp.test(this.email)) {
      this.mensaje_email = "El email debe ser valido";
      this.email = "";
    } else  if (this.email.length < 5 || this.email.length > 30) {
      this.mensaje_email = "El campo email debe tener entre 5 y 30 caracteres";
      this.email = "";
    } else {
      this.mensaje_email = "";
      valido++;
    }

    let RegEx = new RegExp(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/);
    
    if (/^\s+|\s+$/.test(this.numero)) {
      this.mensaje_numero = "Introduzca solo numeros.";
      this.numero = "";
    } else if (this.numero.trim() == "") {
      this.mensaje_numero = "El campo telefono no puede estar vacio";
      this.numero = "";
    } else if (this.numero.length < 1 || this.numero.length > 20) {
      this.mensaje_numero = "El campo telefono debe tener entre 5 y 20 caracteres";
      this.numero = "";
    } else if (!RegEx.test(this.numero)) {
      this.mensaje_numero = "El numero debe ser valido";
      this.numero = "";
    } else {
      this.mensaje_numero = "";
      valido++;
    }

    if(valido==3){
      this.mensaje_nombreF = "Nombre: "+ this.nombre;
      this.mensaje_emailF = "Email: " + this.email;
      this.mensaje_numeroF = "Numero: "+ this.numero;
    }else{
      this.mensaje_nombreF = "";
      this.mensaje_emailF = "";
      this.mensaje_numeroF = "";
    }

  }

}
