import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  private lastTimeBackButtonWasPressed:number = 0
  private timePeriodToAction:number = 2000

  constructor(
    private loadingController: LoadingController,
    private platform: Platform,
    private router: Router,
    private navControler: NavController,
    private toastController: ToastController) { }
    
  async openToast(message: string) {  
    const toast = await this.toastController.create({
      color: 'primary',
      position: 'bottom',
      cssClass: 'tabs-bottom',
      duration: 3000,
      message: message
    });  
    toast.present();  

  }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Sedang proses..",
      cssClass: 'loader-css-class',
      duration: 300
    });
    await loading.present();
    await loading.onDidDismiss();
  }

  async withDoublePress(action: () => void) {
    const currentTime = new Date().getTime()

    if (currentTime - this.lastTimeBackButtonWasPressed < this.timePeriodToAction) {
      action()
    } else {
      this.openToast("Tekan sekali lagi untuk keluar")
      
      this.lastTimeBackButtonWasPressed = currentTime
    }
  }

  async backButton() {

    this.platform.backButton.subscribeWithPriority(10, async () => {
      const currentUrl = this.router.url

      if (currentUrl === "/tabs/tab1") {
         this.withDoublePress(()=> {
           navigator['app'].exitApp()
         })
      } else {
        this.navControler.navigateRoot('/tabs/tab1')
      }
    
    })
  }

}
