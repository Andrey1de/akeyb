import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
export const KEY_LAYOUT_EN : string[][] = [
  [    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0","backspace"],
  [    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  [    "a", "s", "d", "f", "g", "h", "j", "k", "l",  "done"],
  [    "z", "x", "c", "v", "b", "n", "m" , "-"],
  [    "caps","@", ".","space",",", "/"]
];

export const KEY_LAYOUT_HE : string[][] = [
  [    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",  "backspace"],
  [    "'", "ק", "ר", "א", "ט", "ו", "ן", "ם", "פ",  "-"],
  [    "ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", "done"],
  [    "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ","\\"],
  [     "@", ".","space",",", "/"]


];

export const KEY_LAYOUT_RU : string[][]= [
  [    "1", "2", "3", "4", "5", "6", "7", "8", "9", "0",  "backspace"],
  [    "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "э", ],
  [    "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж",   "done"],
  [    "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "ъ"],
  [    "caps","@", ".","space",",", "/"]
];

export  const KEY_LAYOUT_AR : string[][]= [
  [    "1", "2", "3", "4", "5", "6", "7",  "8", "9", "0", "backspace"],
  [    "ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج", "د",  "لإ", "إ"],
  [    "ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط", "لأ",  "أ"],
  [    "ئ", "ء", "ؤ", "ر", "لا", "ى", "ة", "و", "ز", "لآ", "آ", "\\", ",", "/" ],
  [     "@", ".","space",",", "/","\\" , "done"]

];
export interface IKeyLayout {
  [key: string ]: string[][] ;
  }
  
export const ALL_KEY_LAYOUTS : IKeyLayout = {
  en:KEY_LAYOUT_EN,
  ru:KEY_LAYOUT_RU,
  he:KEY_LAYOUT_HE,
  ar:KEY_LAYOUT_AR,
}
export const GLanguages:string[] = ['en','he','ru','ar'];
export function IsLtr (lan:string) : boolean {
    return lan == 'en'|| lan == 'ru';}
export function  KeyHasCase(key:string){
  return key.length === 1  &&
    ((key >= 'a' && key <= 'z')||(key >= 'а' && key <= 'я'));


}

@Injectable({
  providedIn: 'root'
})
export class AkbKeyboardService {
  readonly  CapsPipe$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public get GlobalCaps() : boolean {
    return this.CapsPipe$.value;
  }
  public set GlobalCaps(val:boolean){
    if(this.CapsPipe$.value != val ){
      this.CapsPipe$.next(val);
    }

  }

 

  readonly  KeyPipe$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  

  public SendKey(key:string){
    this.KeyPipe$.next(key);

  }
  public get LastSent() : string {
    return this.KeyPipe$.value;
  }
  
  constructor() { }

  getKeyLayout(lang:string) : string[][]{
    switch (lang) {
      case 'ru': return KEY_LAYOUT_RU;
      case 'he': return KEY_LAYOUT_HE;
      case 'ar': return KEY_LAYOUT_AR;
      default : return KEY_LAYOUT_EN;
      }

  }
 }
