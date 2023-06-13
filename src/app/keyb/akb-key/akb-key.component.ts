import { publishFacade } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { AkbKeyboardService, KeyHasCase } from '../akb-keyboard.service';


export function TochangeKeyboardLanguage(ev:string){
 
   // evTochangeKey$.next(ev);   


}


@Component({
  selector: 'akb-key',
  templateUrl: './akb-key.component.html',
  styleUrls: ['../akb-keyboard.scss']
})
export class AkbKeyComponent implements OnInit,OnDestroy{

  @Input() charInit: string = '';
  @Input() keybInit: string = '';
  @Input() row:number = 0;
  @Input() col:number = -1;
  @Output('KeyPress') readonly KeyPress$: EventEmitter<string> 
     = new EventEmitter<string>(true);
  @Input('lang')
  public Lang:string = 'en';
  
  private _kbdId !: string;
  public get kbdId() : string {
    return this._kbdId;
  }

   @Input()
  /// console.log(`set caps(${this.caps}) `);
  public set caps(v : boolean) {
    if(this._caps != v){
      this._caps = v;
      this._setKeyText1();
    }
  }
  private _caps:boolean = false;
  public get caps() : boolean {
    return this._caps;
  }

  public keyText:string='';
  public KeyIcon:string='';
  iconName:string='';
  isHidden:boolean = false;
  isWide:boolean=false;
  isExtraWide:boolean =false;
  hasIcon:boolean=false;
  isCapsKey:boolean=false;
  //isActive:boolean=false;
  hasCase:boolean = false;
  
  classList:string[] = ['keyboard_key'];
  
  subscription:Subscription |undefined = undefined;
   
  constructor(readonly  kbsrv:AkbKeyboardService){
     //private render:Renderer2){
      //this.subscription = evTochangeKey$.subscribe(ev=>this.toChangeKey(ev))
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
   
    this._initkey();
    this._kbdId = `kbdId-${this.row}${this.col.toString(16).toUpperCase()}`;
    console.log('onInit', this._kbdId, this.Lang ,this.keyText);
    if(this.hasCase){
      this.subscription = this.kbsrv.CapsPipe$
        .subscribe((p:boolean)=>{
          this.caps = p;
          this._setKeyText1();
        });
       // .subscribe((b:boolean)=>{
          // this.caps = b;
          // this._setKeyText1();
      //});
    }
  }


  _initkey(){
  
    this.isHidden = (!this.charInit || this.charInit == '?');
    if(this.charInit.length === 1  ){
      this.charInit = this.charInit.toLowerCase();
      this.hasCase = KeyHasCase(this.charInit);
      this._setKeyText1();
     //
     // this.keyText = this.lang + ':' + this.keyText;
    } else if(this.charInit.length == 2 && this.Lang == 'ar'){
      this.keyText = this.charInit;
    }
    else {
      switch (this.charInit) {
        case 'caps':
          this.iconName='keyboard_capslock'
          this.isCapsKey=true;
          this.keyText ='caps';
          this.isWide=true;
          break;
        case 'backspace':
          this.iconName='backspace';
          this.keyText ='\b';
          this.isWide=true;
          break;
        case 'enter':
            this.iconName='keyboard_return';
            this.keyText ='enter';
            this.isWide=true;
            break;
        case 'done':
          this.iconName='check';
          this.keyText ='done';
          this.isWide=true;

            break;
          case 'space':
          case ' ':
            this.iconName='space_bar';
            this.keyText =' ';
            this.isExtraWide=true;
          break;
      
        default:
          this.isExtraWide = this.isWide = false;
          this.iconName='';
          this.keyText = '??';
          break;
      }
 
    }  
    this.hasIcon= !!this.iconName;
    
 
  }

  public  get keyHasCase(){
    return KeyHasCase(this.charInit);
  }
  private _setKeyText1(){
   
    if(this.keyHasCase){
      this.keyText = this.caps ? this.charInit.toUpperCase() : this.charInit;
      
    } else {
      this.keyText = this.charInit;
    }
  }

  keyClick(event:any){
  
    if(this.isCapsKey){
      this._caps = !this._caps;
      this._setKeyText1();
      console.log(`(click) + ${this.keyText} + 'caps:' + ${this._caps}`); 
      let msg =  this.keyText+( (this._caps) ? '-on' : '-off');
      //this.KeyPress$.emit(msg);
      this.kbsrv.CapsPipe$.next(this._caps);
      console.log('(click)' + msg); 
 
    } else {
      console.log('(click)' + this.keyText); 
      this.KeyPress$.emit(this.keyText);

    }

   
  }

}


// _initkey1() {
//   const render = this.render;
//   const keyElement = this.refMe.nativeElement;;
//  let char = this.keyb || '';



//  // Creates HTML for an icon
//  const  createIconHTML = (icon_name: string) =>{
//    keyElement.innerHTML = `<i class="material-icons">${icon_name}</i>`;
//  }
//  const setOnClick = (char:string) =>{
//    keyElement.addEventListener("click", () => {  
//      this.sendKeyboardChar(char);
//   });
//  };
  
//  if(char.length == 0) {
     
//    render.setAttribute(keyElement,'display','none');
  
//  }
//  else switch (char) {
//    case "caps": 
//      render.addClass(keyElement,"keyboard__key--wide");
//      render.addClass(keyElement,"keyboard__key--activatable");

//      createIconHTML("keyboard_capslock");

//      keyElement.addEventListener("click", () => {
//          this.native.classList.toggle("keyboard__key--active");
//          this.capsLock = this.native.classList.contains("keyboard__key--active");
//      });

//      return;

//    case "backspace": //\b
//    case "\b":
//      render.addClass(keyElement,"keyboard__key--wide");

//      createIconHTML("backspace");
//      setOnClick("\b");

//      break;
     
//    case "enter"://\n
//    case "\n"://\n
//      render.addClass(keyElement,"keyboard__key--wide");
//      createIconHTML("keyboard_return");
//      setOnClick("\n");

//      break;
   
//    case "space":
//    case " ":
//      render.addClass(keyElement,"keyboard__key--extra-wide");
     
//      createIconHTML("space_bar");
//      setOnClick("\n");

//      break;

//    case "done":
//        keyElement.classList.add("keyboard__key--wide",
//                                "keyboard__key--dark");
//        createIconHTML("check_circle");

//        keyElement.addEventListener("click", () => {
//          //   this.close();
//            this._triggerEventOnClose();
//        });

//        break;

//      default:
//        if(keyData.isChar){
//          keyElement.textContent = char;

//          keyElement.addEventListener("click", () => {
//            this.gdata.sendKeyboardChar(keyElement?.textContent || '');
//            // this.properties.value += this.gdata.capsLock ? keyData.toUpperCase() : keyData.toLowerCase();
             
//          });
//          this.keyboardAZKeys.push(keyElement);
       
//        }
//          break;
   
//  }
      
// private _toggleCapsLock() {
//  this.native.classList.toggle("keyboard__key--active");

//  this.capsLock = this.native.classList.contains("keyboard__key--active");

// }
// sendKeyboardChar(arg0: string) {
//  throw new Error('Method not implemented.');
// }
// // );

