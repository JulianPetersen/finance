import { Component } from '@angular/core';
import { LoadingController, ModalController, PopoverController } from '@ionic/angular';
import { AddgastoComponent } from '../components/addgasto/addgasto.component';
import { AddspentComponent } from '../components/addincome/addspent.component';
import { ConsultasService } from '../services/consultas.service';
import { GlobalService } from '../services/global.service';
import { InitSistemService } from '../services/init-sistem.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public consultas:ConsultasService,
              public modalCtrl:ModalController,
              public global:GlobalService,
              public init:InitSistemService,
              public popover:PopoverController,
              public loader:LoadingController) {

  }


  billetera = JSON.parse(localStorage.getItem('billetera')) 
  listIngresos;
  totalIngresos;

  listEgresos;
  totalEgresos
  date = new Date();
  mesActual;
  movimientos;
  selectedIngresos:boolean = true
  selectedEgresos:boolean = true
  formatedMoth;

  ngOnInit(){
    this.mesCorriente()
    this.obtenerMesFormateado(parseInt(this.mesActual) - 1)
    this.calcularIngresosMes(this.mesActual);
    this.calcularEgresosMes(this.mesActual);
    console.log(this.mesActual)

  }
  async openAddSpent(){
    const modal = await this.modalCtrl.create({
      component:AddspentComponent,
      cssClass:'componentWindow'
    })
    modal.onDidDismiss().then((data:any)=> {
      this.billetera = JSON.parse(localStorage.getItem('billetera'))
      this.calcularIngresosMes(this.mesActual)
      this.calcularEgresosMes(this.mesActual)
    })
    modal.present();
  }

  async openAddGasto(){
    const modal = await this.modalCtrl.create({
      component:AddgastoComponent,
      cssClass:'componentWindow'
    })
    modal.onDidDismiss().then((data:any)=> {
      this.billetera = JSON.parse(localStorage.getItem('billetera'))
      this.calcularIngresosMes(this.mesActual)
      this.calcularEgresosMes(this.mesActual)
    })
    modal.present();
  }

  mesCorriente(){
    let mes = (this.date.getMonth()+1).toString()
    if(mes.length == 1){
      mes = `0${mes}`
    }
    this.mesActual = mes
  }



  calcularIngresosMes(mes){
    let ingresosByMonth=[];
    for(let ingreso of this.billetera.ingreso){
      if(ingreso.fechaIngreso.split('-')[1] == mes){
        ingresosByMonth.push(ingreso)
      }
    }
    this.listIngresos = ingresosByMonth
    this.totalIngresos = this.listIngresos
          .map((item) => item.montoIngreso)
          .reduce((prev, curr) => prev + curr, 0);
   
  }
  
  calcularEgresosMes(mes){
    let egresosByMonth=[];
    for(let egreso of this.billetera.egreso){
      if(egreso.fechaEgreso.split('-')[1] == mes){
        egresosByMonth.push(egreso)
        
      }
    }
    console.log(egresosByMonth)
    this.listEgresos = egresosByMonth
    this.totalEgresos = this.listEgresos
          .map((item) => item.montoEgreso)
          .reduce((prev, curr) => prev + curr, 0);
          
  }


  selectedMonth(date){
    let month = this.obtenerMes(date)
    this.calcularIngresosMes(month)
    this.calcularEgresosMes(month)
    this.popover.dismiss();
    console.log(month)
  }

  obtenerMes(date){
   date= date.split('-')
   let month = date[1]
   this.obtenerMesFormateado(parseInt(month) - 1 )
   console.log('mes formateado', this.formatedMoth)
   return month
  }


  obtenerMesFormateado(obtainedMonth) {
    const mes = obtainedMonth;
    switch (mes) {
      case 0:
        this.formatedMoth = 'Enero';
        break;
      case 1:
        this.formatedMoth = 'Febrero';
        break;
      case 2:
        this.formatedMoth = 'Marzo';
        break;
      case 3:
        this.formatedMoth = 'Abril';
        break;
      case 4:
        this.formatedMoth = 'Mayo';
        break;
      case 5:
        this.formatedMoth = 'Junio';
        break;
      case 6:
        this.formatedMoth = 'Julio';
        break;
      case 7:
        this.formatedMoth = 'Agosto';
        break;
      case 8:
        this.formatedMoth = 'Septiembre';
        break;
      case 9:
        this.formatedMoth = 'Octubre';
        break;
      case 10:
        this.formatedMoth = 'Noviembre';

        break;
      case 11:
        this.formatedMoth = 'Diciembre';

        break;
      default:
    }
  }


  mostrarIngresos(){
    if (this.selectedIngresos == false) {
      this.selectedIngresos = true;
    } else if (this.selectedIngresos == true) {
      this.selectedIngresos = false;
    }
  }

  mostrarEgresos(){
    if (this.selectedEgresos == false) {
      this.selectedEgresos = true;
    } else if (this.selectedEgresos == true) {
      this.selectedEgresos = false;
    }
  }
}
  
  





