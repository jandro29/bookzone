import { Component, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';


export interface PeriodicElement {
  name: string;
  id: number;
  dni: number;
  direccion: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1 , dni: 77777777 , name: 'Alejandro' , direccion: 'direccion' , estado: 'A'},
  {id: 2 , dni: 77777777 , name: 'Alejandro' , direccion: 'direccion' , estado: 'A'},
  {id: 3 , dni: 77777777 , name: 'Alejandro' , direccion: 'direccion' , estado: 'A'},
  {id: 4 , dni: 77777777 , name: 'Alejandro' , direccion: 'direccion' , estado: 'O'},
  {id: 5 , dni: 77777777 , name: 'Alejandro' , direccion: 'direccion' , estado: 'A'},
  {id: 6 , dni: 77777777 , name: 'Alejandro' , direccion: 'direccion' , estado: 'O'},
  {id: 7 , dni: 77777777 , name: 'Alejandro' , direccion: 'direccion' , estado: 'A'},
  {id: 8 , dni: 77777777 , name: 'Alejandro' , direccion: 'direccion' , estado: 'O'},
  {id: 9 , dni: 77777777 , name: 'Alejandro' , direccion: 'direccion' , estado: 'A'},
  {id: 10 , dni: 77777777 , name: 'Alejandro' , direccion: 'direccion' , estado: 'O'},
];


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {

  displayedColumns: string[] = [ 'id', 'dni' , 'name' , 'direccion' , 'estado' ];
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


  ngOnInit(): void {
  }

}
