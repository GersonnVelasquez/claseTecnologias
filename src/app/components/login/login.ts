import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Autenticacion } from '../../servicios/autenticacion';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  formBuilder = inject(FormBuilder);
  authService = inject(Autenticacion);

  loginForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });
  registerForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  iniciarSesion() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if (email && password) {
      this.authService
        .iniciarSesion(email, password)
        .then((credencial) => {
          alert('Usuario logueado: ' + credencial.user?.email);
        })
        .catch((error) => {
          alert('Error al iniciar sesión: ' + error.message);
        });
    } else {
      alert('Por favor ingresa un correo y una contraseña');
    }
  }

  registrar() {
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    if (email && password) {
      this.authService
        .registrarUsuario(email, password)
        .then((credencial) => {
          alert('Usuario registrado: ' + credencial.user?.email);
        })
        .catch((error) => {
          alert('Error al registrar: ' + error.message);
        });
    } else {
      alert('Por favor ingresa un correo y una contraseña');
    }
  }

  cerrarSesion() {
    this.authService
      .cerrarSesion()
      .then(() => {
        alert('Sesión cerrada');
      })
      .catch((error) => {
        alert('Error al cerrar sesión: ' + error.message);
      });
  }
}
