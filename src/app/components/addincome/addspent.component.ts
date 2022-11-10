import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { Billetera, Ingreso } from 'src/app/models/billetera';
import { categoria } from 'src/app/models/categorias';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-addspent',
  templateUrl: './addspent.component.html',
  styleUrls: ['./addspent.component.scss'],
})
export class AddspentComponent implements OnInit {

  billetera:Billetera =JSON.parse(localStorage.getItem('billetera')) 
  categorias:categoria[];
  dateSelected;

  constructor(public popover:PopoverController,
              public global:GlobalService,
              public modalCtrl:ModalController) { }

  ngOnInit() {
    this.formatDateToday()
    this.getcategorias()
  }



  newIngreso:Ingreso={
    id: '',
    categoria:'',
    detalle:'',
    montoIngreso:0,
    fechaIngreso: ''
  }
   

  formatDateToday(){
    let date = new Date();
    let day = date.getDate().toString();
    let month = (date.getMonth()+1).toString();
    let year = date.getFullYear().toString();
    if (day.length == 1){
      day = `0${day}`
      
    }
    if(month.length == 1){
      month = `0${month}`
    }
    this.dateSelected = `${day}-${month}-${year}`
  }

  agregarIngreso(){
    let id = this.global.createId(25)
    console.log(id)
      let ingreso:Ingreso ={
        id:id,
        categoria:this.newIngreso.categoria,
        detalle:this.newIngreso.detalle,
        montoIngreso:this.newIngreso.montoIngreso,
        fechaIngreso:this.dateSelected
      }
      console.log(ingreso)
      this.billetera.ingreso.push(ingreso);
      this.billetera.monto += ingreso.montoIngreso;
      localStorage.setItem('billetera', JSON.stringify(this.billetera))
      this.modalCtrl.dismiss();
  }

  getcategorias(){
    this.categorias = JSON.parse(localStorage.getItem('categoriaIngreso')).categorias
    console.log(this.categorias)
  }

  obtenerFecha(dateSelected){
    this.formatearfecha(dateSelected)
    this.popover.dismiss();
  }

  formatearfecha(date:string){
    let dateSelected = date.split('-')
    let year = dateSelected[0]
    let month = dateSelected[1]
    let day = dateSelected[2].split('T')[0]
    this.dateSelected = `${day}-${month}-${year}`
  }
}
