import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddspentComponent } from './addincome/addspent.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AddgastoComponent } from './addgasto/addgasto.component';



@NgModule({
  declarations: [AddspentComponent,AddgastoComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports:[AddspentComponent,AddgastoComponent]
})
export class ComponentsModule { }
