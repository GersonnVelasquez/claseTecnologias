import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  Firestore,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class Persona {
  firestore = inject(Firestore);

  getPersonas() {
    const personaCollection = collection(this.firestore, 'personas');
    return collectionData(personaCollection, { idField: 'uuid' });
  }

  addPersona(persona: any) {
    const personaCollection = collection(this.firestore, 'personas');
    return addDoc(personaCollection, persona);
  }

  updatePersona(persona: any) {}

  deletePersona(personaId: number) {}

  // getUsuarios() {
  //   const usuarioCollection = collection(this.firestore, 'usuariooos');
  //   return collectionData(usuarioCollection, { idField: 'uuid' });
  // }

  // getUsuario(id: string) {
  //   const usuarioCollection = collection(this.firestore, 'usuariooos');
  //   const usuarioDoc = doc(usuarioCollection, id);
  //   return getDoc(usuarioDoc)
  // }

  // addUsuario(usuario: Usuario) {
  //   const usuarioCollection = collection(this.firestore, 'usuariooos');
  //   return addDoc(usuarioCollection, usuario);
  // }

  // editUsuario(usuario: Usuario) {
  //   const usuarioCollection = collection(this.firestore, 'usuariooos');
  //   const usuarioDoc = doc(usuarioCollection, usuario.uuid);
  //   return updateDoc(usuarioDoc, {
  //     ...usuario,
  //   });
  // }

  // deleteUsuario(usuario: Usuario) {
  //   const usuarioCollection = collection(this.firestore, 'usuariooos');
  //   const usuarioDoc = doc(usuarioCollection, usuario.uuid);
  //   console.log('hola mundo');
  //   return deleteDoc(usuarioDoc);
  // }
}
