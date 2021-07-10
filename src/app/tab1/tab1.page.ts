// HUBUNGI DEVALDI AKBAR SURYADI UNTUK KODESUMBER BACKEND
// DID YOU NEED BACKEND CODE? WHATSAPP ME IN BELOW
// WHATSAPP DEVALDI AKBARS +6282143636001

import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

   //variabel
   profil = false;

  constructor(private ionicToastService: ServiceService) {}

  clickEdit() {
    this.profil = !this.profil;
  }

  hitungData() { 
    this.ionicToastService.openToast('NEED BACKEND? WHATSAPP DEVALDI AKBARS +6282143636001');
  }

}
