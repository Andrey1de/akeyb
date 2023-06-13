import { Component, Input, OnInit } from '@angular/core';
//import { TochangeKeyboardKeys } from '../akb-key/akb-key.component';
import { ALL_KEY_LAYOUTS, AkbKeyboardService, IsLtr, KeyHasCase} from '../akb-keyboard.service';
const startLanguage = 'he';


//type Index = 'en' | 'ru' | 'he' | 'ar';
//type TKEyLocation = { [k in 'en' | 'ru' | 'he' | 'ar']?:  string[][] };



@Component({
  selector: 'akb-lang-keyboard',
  templateUrl: './akb-lang-keyboard.component.html',
  styleUrls: ['../akb-keyboard.scss']
})

export class AkbLangKeyboardComponent implements OnInit {
 
  @Input('lang')
  public Lang : string = 'en';

  public get isLtr (): boolean {return IsLtr(this.Lang)}

  public keyLayout!:string[][]; 

  public LangCaps:boolean = false;
  public  keyHasCase(key:string){
      return KeyHasCase(key);
  }


  onCapsPress(key:string){
    this._toggleCaps();
  }

  _toggleCaps(){
    this.LangCaps != this.LangCaps;
  }

  onKeyPress(key :string) {
    let c = key;
    switch (key) {
      case 'caps-on':
        this.LangCaps=true;
        break;
        case 'caps-off':
          this.LangCaps=false;
          break;
          
        // //this._toggleCaps();
        // c=(this.LangCaps) ? 'caps-on' : 'caps-off'
        // break;
      case '\n':
        c = '\\n';
        break;
      case '\b':
        c = '\\b';
        break;
      case ' ':
        c = 'space';
        break;
                
      default:
        break;
 
      }
      console.log(`onKeyPress(${c})`);

  }
 

  constructor(readonly  kbsrv:AkbKeyboardService){
   
  }

 
  ngOnInit(): void {
    this.keyLayout = ALL_KEY_LAYOUTS[this.Lang];
    console.log(`[${this.Lang}]=>AkbLangKeyboardComponent::ngOnInit`)
  }
  

 

}




// switch (lan) {
//   case 'en': return LAN_TAB.en;
//   case 'he': return LAN_TAB.he;
//   case 'ru': return LAN_TAB.ru;
//   case 'ar': return LAN_TAB.ar;
    
//     break;

//   default:
//     return []
//     break;
// }