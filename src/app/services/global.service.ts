import { Injectable } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(public modalCtrl:ModalController,
              public loadingCtrl:LoadingController) { }


  async openModal(component, clase) {
    const modal = await this.modalCtrl.create({
      component: component,
      cssClass:clase
    });
    modal.present();
}

createId(num){ 
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result1= ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < num; i++ ) {
      result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result1 
}

async showLoading(message:string) {
  const loading = await this.loadingCtrl.create({
    message: message,
  });

  loading.present();
}

}
