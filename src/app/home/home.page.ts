import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listado!:any;

  constructor(private http: HttpClient, private Router: Router, private navCtrl: NavController, private user:UserService) {
      this.http.get("http://localhost/IonicApi/src/controllers/consultados.php").subscribe(snap =>{
        console.log(snap);
        this.listado=snap;
      });
  }

  ionViewWillEnter() {
    // Coloca aquí la lógica para recargar los datos que necesitas
    this.http.get("http://localhost/IonicApi/src/controllers/consultados.php").subscribe(snap =>{
        console.log(snap);
        this.listado=snap;
      });
  }

  eliminar(id:string){
    this.http.get("http://localhost/IonicApi/src/controllers/eliminar.php?id="+id).subscribe(snap =>{
      console.log(snap);
      this.ionViewWillEnter();
    });
  }

  editar(id:string){
      this.user.setId(id);
  }

}
