import { Component, inject } from '@angular/core';
import { Persona } from '../../servicios/persona';
import { JsonPipe } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-componente1-test',
  imports: [ReactiveFormsModule],
  templateUrl: './componente1-test.html',
  styleUrl: './componente1.scss',
})
export class Componente1 {
  personaService = inject(Persona);
  formBuilder = inject(FormBuilder);

  personas: any = [];
  variable1 = 'Hola Mundo';

  personaForm: FormGroup;

  constructor() {
    this.getPersonas();

    this.personaForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      edad: ['', [Validators.max(100)]],
      email: [''],
      telefono: [''],
      uuid: [null],
    });
  }

  guardarPersona() {
    if (this.personaForm.invalid) {
      alert('Errores en el formulario');
    } else {
      if (this.personaForm.value.uuid !== null) {
        this.personaService.updatePersona(this.personaForm.value);
      } else {
        this.personaService.addPersona({
          nombre: this.personaForm.value.nombre,
          edad: this.personaForm.value.edad,
          email: this.personaForm.value.email,
          telefono: this.personaForm.value.telefono,
        });
      }

      this.personaForm.reset();
    }
  }

  borrarPersona(persona: any) {
    this.personaService.deletePersona(persona.uuid);
  }

  editarPersona(persona: any) {
    this.personaForm.setValue(persona);
    console.log('form Value', this.personaForm.value);
  }

  getPersonas() {
    this.personaService.getPersonas().subscribe((data: any) => {
      this.personas = data;
    });
  }
}
