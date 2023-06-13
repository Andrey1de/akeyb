import { Component } from '@angular/core';
import { AkbKeyboardService, GLanguages } from '../akb-keyboard.service';

@Component({
  selector: 'akb-keyboard-multi',
  templateUrl: './akb-keyboard-multi.component.html',
  styleUrls: ['../akb-keyboard.scss']
})
export class AkbKeyboardMultiComponent {
  LangList:string[] = GLanguages;
  GlobalLang:string = 'en';
  constructor(readonly  kbsrv:AkbKeyboardService){
    
  }
}
