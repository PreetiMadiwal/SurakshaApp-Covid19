import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-safty-check',
  templateUrl: './safty-check.component.html',
  styleUrls: ['./safty-check.component.scss'],
})
export class SaftyCheckComponent implements OnInit {
data:any=[]
  constructor(public modalCtrlr:ModalController,
              public navParams:NavParams,
              private tts: TextToSpeech) { }

  ngOnInit() {}
  dismiss(){
this.modalCtrlr.dismiss();
  }
  ionViewWillEnter(){
    
    
  }
  ionViewWillLeave(){
   this.data.length=0;
  }
}
