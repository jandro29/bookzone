import { Component, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';

export interface PeriodicElement {
  id: number
  name: string;
  dni: number;
  telefono: number;
  user: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 3 , dni: 13213211 ,      name: 'Alejandro', telefono: 99999999 , user: 'usuario1'},
  { id: 3 , dni: 123213212 ,     name: 'Alejandro', telefono: 99999999 , user: 'usuario1'},
  { id: 3 , dni: 3321321 ,       name: 'Alejandro', telefono: 99999999, user: 'usuario1'},
  { id: 3 , dni: 3231232 ,       name: 'Alejandro', telefono: 99999999 , user: 'usuario1'},
  { id: 3 , dni: 51321,          name: 'Alejandro', telefono: 99999999 , user: 'usuario1'},
  { id: 3 , dni: 721312321 ,     name: 'Alejandro', telefono: 99999999, user: 'usuario1'},
  { id: 3 , dni: 8321321 ,       name: 'Alejandro', telefono: 99999999 , user: 'usuario1'},
  { id: 3 , dni: 92321,          name: 'Alejandro', telefono: 99999999 , user: 'usuario1'},
  { id: 3 , dni: 133231232,      name: 'Alejandro', telefono: 99999999 , user: 'Nusuario1e'},
];


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent{

  displayedColumns: string[] = [ 'id' , 'dni' , 'name', 'telefono', 'user'];
  dataSource = [...ELEMENT_DATA];




  constructor() { }

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }


  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

}
