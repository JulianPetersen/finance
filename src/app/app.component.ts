import { Component } from '@angular/core';
import { InitSistemService } from './services/init-sistem.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public init:InitSistemService) {
    this.init.iniciarBilletera();
    this.init.iniciarCategoriasEgreso();
    this.init.iniciarCategoriasIngreso()
  }
}
