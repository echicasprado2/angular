import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent{
  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo = '';

  agregarPersona(){
    this.mensaje = 'Persona agregada';
  }

  modificarTitulo(event: Event){
    this.titulo = (<HTMLInputElement>event.target).value;
  }

}
