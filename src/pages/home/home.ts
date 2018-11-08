import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Estado } from '../../models/estado.model';
import { EstadoProvider } from './../../providers/estado/estado';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  estados: Estado[];
  inscricao: Subscription;

  constructor(
    public navCtrl: NavController,
    private estadoProvider: EstadoProvider
  ) { }

  ionViewDidLoad(){
    this.inscricao = this.estadoProvider.getAll()
      .subscribe(
        data => this.estados = data.estados
      );
  }

  ionViewWillUnload(){
    if (this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }


}
