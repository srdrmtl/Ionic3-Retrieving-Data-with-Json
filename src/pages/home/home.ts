import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  constructor(public navCtrl: NavController, public restProvider: RemoteServiceProvider) {

    this.getUsers();


  }


  products: any;

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.products = data;
      console.log(this.products);
    });
  }


 
}
