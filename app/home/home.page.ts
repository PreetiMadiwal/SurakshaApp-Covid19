import { Router } from "@angular/router";
import { Component } from "@angular/core";
// home.page.ts
import { Geolocation } from "@ionic-native/geolocation/ngx";
import {
  NativeGeocoder,
  NativeGeocoderOptions,
  NativeGeocoderResult,
} from "@ionic-native/native-geocoder/ngx";
import { ModalController, LoadingController } from "@ionic/angular";
import { SaftyCheckComponent } from "../safty-check/safty-check.component";
import { ApiServiceService } from "../api-service.service";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { interval } from "rxjs";
import { TextToSpeech } from "@ionic-native/text-to-speech/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
 
  address: string;
  latitude: number;
  longitude: number;
  accuracy: number;
  data:any=false;
  statusCheck = [
    {
      user: "1234",
      greenZone: true,
    },
    {
      user: "7890",
      greenZone: false,
    },
    {
      user: "3456",
      greenZone: false,
    },
    {
      user: "123",
      greenZone: false,
    },
  ];
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5,
  };
  status: any = [];
  horizontalText: string;
  constructor(
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    public modalController: ModalController,
    private post: ApiServiceService,
    public loadingCtrlr: LoadingController,
    public tts: TextToSpeech,
    private router: Router,
    private localNotifications: LocalNotifications
  ) {}
  //Get current coordinates of device
  async getGeolocation() {
   
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        this.accuracy = resp.coords.accuracy;

        this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);
    
      })
      .catch((error) => {
        
        alert("Error getting location" + JSON.stringify(error));
      });
  }
  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.between(latitude,latitude)
    console.log(latitude,longitude);
   
    this.nativeGeocoder
      .reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.address = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
        alert("Error getting location" + JSON.stringify(error));
      });
  }
  between(lat,lan){


  }
  //Return Comma saperated address
  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    console.log(addressObj);
    console.log(addressObj.areasOfInterest[0]);
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length) address += obj[val] + ", ";
    }
    return address.slice(0, -2);
  }
  async saftyCheck() {

    for (var i = 0; i < this.statusCheck.length; i++) {
      if (this.statusCheck[i].user == localStorage.getItem("name")) {
        this.status.push({
          user: this.statusCheck[i].user,
          status: this.statusCheck[i].greenZone,
        });
      }
    }
    console.log(this.status);

    const modal = await this.modalController.create({
      component: SaftyCheckComponent,
      cssClass: "saftyCheck",
      componentProps: { state: this.status },
    });
    return await modal.present();
  }
  getData() {
   
  }
  simpleNotif(add) {
    this.localNotifications.schedule({
      id: 1,
      text: add,
      data: { secret: "secret" },
    });
  }
  logOut() {
    localStorage.removeItem("name");
    this.status.length = 0;
    console.log(localStorage.getItem("name"));
    this.router.navigateByUrl("/");
  }
  ionViewWillEnter() {
    setTimeout(() => {
      this.horizontalText = `this is the text to show that text could be refreshed. 
      but this feature support horizontal scroll only!`;
    }, 5000);
    setTimeout(() => {
      this.check(false)
     }, 20000)
    this.getGeolocation();
    
    console.log("getLocation method")
  }
  check(data){
    console.log(data)
    if(data){
     
      this.data==true;
      this.tts.speak('You  are safe')
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
    }
    else{
     
      setTimeout(() => {
        this.data=true;
       }, 10000)
      this.tts.speak('your entering containment zone your safety status check will go red')
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
    }
  }
}
