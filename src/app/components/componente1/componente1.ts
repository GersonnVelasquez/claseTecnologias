import { Component, inject } from '@angular/core';
import { Persona } from '../../servicios/persona';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-componente1-test',
  imports: [
    JsonPipe
  ],
  templateUrl: './componente1-test.html',
  styleUrl: './componente1.scss',
})
export class Componente1 {
  personaService = inject(Persona);
  personas = [];
  variable1 = 'Hola Mundo';


  constructor() {
    this.getPersonas();
  }

  agregarPersona() {
    this.personaService.addPersona({
      nombre: 'Nuevo Usuario',
      edad: 30,
      email: 'gerson@unitec.edu',
      telefono: '1234567890',
    });
  }

  getPersonas() {
    this.personaService.getPersonas().subscribe((data: any) => {
      this.personas = data;
    });
  }
}
