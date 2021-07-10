// HUBUNGI DEVALDI AKBAR SURYADI UNTUK KODESUMBER BACKEND
// DID YOU NEED BACKEND CODE? WHATSAPP ME IN BELOW
// WHATSAPP DEVALDI AKBARS +6282143636001

import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private ionicToastService: ServiceService) {}

  bukaPromosi() { 
    this.ionicToastService.openToast('NEED BACKEND? WHATSAPP DEVALDI AKBARS +6282143636001');
  }

}
