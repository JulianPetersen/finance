import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { Billetera } from '../models/billetera';
import { categoria, colCategorias } from '../models/categorias';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class InitSistemService {

  constructor(public global:GlobalService, public loader:LoadingController) { }

  newbilletera:Billetera ={
    monto:0,
    ingreso: [],
    egreso:[],

  }

  categoriasEgreso:colCategorias = {
    categorias:[
     { id:'Ki7O0zEkvR7ssbXDR5hmLhLbB',
      nombre:'Facturas'
     },
     { id:'T8lNLfzxzq8Aczh6Y94ZnnOuq',
      nombre:'Kiosco'
     },
     { id:'lcwWkIQMx5invQEsLYIRiKfKQ',
      nombre:'Transporte'
     },
     { id:'2wzwoPJqCyErRSR5zs7pOfJWP',
      nombre:'Alimentos'
     },
     { id:'gme7wr55gfSGXvoiz4HxvIrhP',
      nombre:'Renta'
     }
    ]
  }

  categoriasIngreso:colCategorias = {
    categorias:[
     { id:'rBWEM2bXhzJ57tXMYjHdO9XCx',
      nombre:'Salario'
     },
     { id:'uODo3mziGg8sG7qU1mWXt8RWT',
      nombre:'Inversiones'
     },
     { id:'W2scJpF2qxQBU79vruiwjmV92',
      nombre:'Renta'
     },
     { id:'34eKSJw1l8ZwGqaWZFE5lEzhx',
      nombre:'Regalos'
     },
    ]
  }

createDocument(key:string, value){
    localStorage.setItem(key,value);
}

  iniciarBilletera(){
    if(localStorage.getItem('billetera')){
      console.log('no se creo el documento, ya existe un documento con este nombre');
      return
    }else{
      this.createDocument('billetera', JSON.stringify(this.newbilletera))
      console.log('el documento se creo correctamente')
    }
  }

  iniciarCategoriasEgreso(){
    if(localStorage.getItem('categoriasEgreso')){
      console.log('no se creo la coleccion categoiras, ya existe una coleccion con este nombre');
      return
    }else{
      this.createDocument('categoriasEgreso', JSON.stringify(this.categoriasEgreso))
      console.log('la coleccion categorias se creo correctamente')
    }
  }

  iniciarCategoriasIngreso(){
    if(localStorage.getItem('categoriaIngreso')){
      console.log('no se creo la coleccion categoiras, ya existe una coleccion con este nombre');
      return
    }else{
      this.createDocument('categoriaIngreso', JSON.stringify(this.categoriasIngreso))
      console.log('la coleccion categorias se creo correctamente')
    }
  }
}
