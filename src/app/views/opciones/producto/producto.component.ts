import { Component, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';

export interface PeriodicElement {
  precio: number;
  nombre: string;
  position: number;
  stock: number;
  estado: string;
  autor: string;
  editorial: string;
  numpag: number;
  sinopsis: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre:'Alejandro' , precio: 1.0079 , stock: 10 , estado: 'S' , autor : 'Auto no reconocido' , editorial : 'editorial' , numpag: 20 , sinopsis: 'sinopsis' },
  {position: 2, nombre:'Alejandro' , precio: 1.0079 , stock: 2 , estado: 'S' , autor : 'Auto no reconocido' , editorial : 'editorial' , numpag: 20 , sinopsis: 'sinopsis' },
  {position: 3, nombre:'Alejandro' , precio: 1.0079 , stock: 20 , estado: 'N' , autor : 'Auto no reconocido' , editorial : 'editorial' , numpag: 20 , sinopsis: 'sinopsis' },
  {position: 4, nombre:'Alejandro' , precio: 1.0079 , stock: 10 , estado: 'S' , autor : 'Auto no reconocido' , editorial : 'editorial' , numpag: 20 , sinopsis: 'sinopsis' },
  {position: 5, nombre:'Alejandro' , precio: 1.0079 , stock: 10 , estado: 'S' , autor : 'Auto no reconocido' , editorial : 'editorial' , numpag: 20 , sinopsis: 'sinopsis' },
  {position: 6, nombre:'Alejandro' , precio: 1.0079 , stock: 12 , estado: 'N' , autor : 'Auto no reconocido' , editorial : 'editorial' , numpag: 20 , sinopsis: 'sinopsis' },
  {position: 7, nombre:'Alejandro' , precio: 1.0079 , stock: 14 , estado: 'S' , autor : 'Auto no reconocido' , editorial : 'editorial' , numpag: 10 , sinopsis: 'sinopsis' },
  {position: 8, nombre:'Alejandro' , precio: 1.0079 , stock: 15 , estado: 'S' , autor : 'Auto no reconocido' , editorial : 'editorial' , numpag: 10 , sinopsis: 'sinopsis' },
  {position: 9, nombre:'Alejandro' , precio: 1.0079 , stock: 18 , estado: 'N' , autor : 'Auto no reconocido' , editorial : 'editorial' , numpag: 20 , sinopsis: 'sinopsis' },
  {position: 10, nombre:'Alejandro' , precio: 1.0079 , stock: 20 , estado: 'N' , autor : 'Auto no reconocido' , editorial : 'editorial' , numpag: 10 , sinopsis: 'sinopsis' },
];

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  displayedColumns: string[] = ['position',  'nombre' , 'precio' , 'stock' , 'estado' , 'autor' , 'editorial' , 'numpag' , 'sinopsis' ];
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
