import { ReturnStatement } from "@angular/compiler";

export interface IKeyData{
     en:string;
     enH:string;
     he:string;
     ar:string;
     ru:string;
     ruH:string;
     isLast:boolean;//,
     isChar:boolean;//,
   
  
  }
  
export class KeyData implements IKeyData {
     get  en() : string{ return this.ikd.en; }
     get  enH () : string{ return this.ikd.enH; }
     get  he () : string{ return this.ikd.he; }
     get  ar () : string{ return this.ikd.ar; }
     get  ru () : string{ return this.ikd.ru; }
     get  ruH () : string{ return this.ikd.ruH; }

     get  isLast() : boolean{ return this.ikd.isLast }
     get  isChar() : boolean{ return this.he.length === 0 ||
                                this.en.length === 1; }// = this.en.length === 1{ return this.ikd }
    // get isChar(){return this.en.length === 1;}

    constructor( public  ikd:IKeyData ){
    }

    getKbChar(lang:string,capsLock:boolean) : string{
        var ch ='';
        if(this.en === 'space') {
            ch = ' ';
        }
        if(!this.isChar) {
            ch = this.en;
        }
        switch(lang){
            case 'he':  
                ch =  (capsLock) ? this.enH : this.he;
                break;
            case 'ar':  
                ch =  (capsLock) ? this.enH : this.ar;
                break;
            case 'en':  
                ch =  (capsLock) ? this.enH : this.en;
                break;

            case 'ru':  
                ch =  (capsLock) ? this.ruH : this.ru;
                break;

            
           // case 'en':  return (caps) ? this.enH : this.en;
             // case 'ru':  break;
            // case 'ru':  break;
        }
        return ch;//en,isLast:false,isChar:true
    }
}  //eoclass!  
   
  
  
export const KEYBOARD_MAP = new Map<string,KeyData>( 
    [
    
        ["idkbd100",new KeyData({en:"",enH:"",he:"",   ar:"ذ",ru:"ё",ruH:"Ё",isLast:false,isChar:true})],
        ["idkbd101",new KeyData({en:"1",enH:"!",he:"1",ar:"1",ru:"1",ruH:"!",isLast:false,isChar:true})],
        ["idkbd102",new KeyData({en:"2",enH:"@",he:"2",ar:"2",ru:"2",ruH:"@",isLast:false,isChar:true})],
        ["idkbd103",new KeyData({en:"3",enH:"#",he:"3",ar:"3",ru:"3",ruH:"#",isLast:false,isChar:true})],
        ["idkbd104",new KeyData({en:"4",enH:"$",he:"4",ar:"4",ru:"4",ruH:"$",isLast:false,isChar:true})],
        ["idkbd105",new KeyData({en:"5",enH:"%",he:"5",ar:"5",ru:"5",ruH:"%",isLast:false,isChar:true})],
        ["idkbd106",new KeyData({en:"6",enH:"^",he:"6",ar:"6",ru:"6",ruH:"^",isLast:false,isChar:true})],
        ["idkbd107",new KeyData({en:"7",enH:"&",he:"7",ar:"7",ru:"7",ruH:"&",isLast:false,isChar:true})],
        ["idkbd108",new KeyData({en:"8",enH:"*",he:"8",ar:"8",ru:"8",ruH:"*",isLast:false,isChar:true})],
        ["idkbd109",new KeyData({en:"9",enH:"(",he:"9",ar:"9",ru:"9",ruH:"(",isLast:false,isChar:true})],
        ["idkbd110",new KeyData({en:"0",enH:")",he:"0",ar:"0",ru:"0",ruH:")",isLast:false,isChar:true})],
    
        ["idkbd111",new KeyData({en:"backspace",enH:"\b",he:"\b",ar:"\b",ru:"\b",ruH:"\b",
                                    isLast:true,isChar:false})], 
        
        ["idkbd201",new KeyData({en:"q",enH:"Q",he:"/",ar:"ض",ru:"й",ruH:"Й",isLast:false,isChar:true})],
        ["idkbd202",new KeyData({en:"w",enH:"W",he:"'",ar:"ص",ru:"ц",ruH:"Ц",isLast:false,isChar:true})],
        ["idkbd203",new KeyData({en:"e",enH:"E",he:"ק",ar:"ث",ru:"у",ruH:"У",isLast:false,isChar:true})],
        ["idkbd204",new KeyData({en:"r",enH:"R",he:"ר",ar:"ق",ru:"к",ruH:"К",isLast:false,isChar:true})],
        ["idkbd205",new KeyData({en:"t",enH:"T",he:"א",ar:"ف",ru:"е",ruH:"Е",isLast:false,isChar:true})],
        ["idkbd206",new KeyData({en:"y",enH:"Y",he:"ט",ar:"غ",ru:"н",ruH:"Н",isLast:false,isChar:true})],
        ["idkbd207",new KeyData({en:"u",enH:"U",he:"ו",ar:"ع",ru:"г",ruH:"Г",isLast:false,isChar:true})],
        ["idkbd208",new KeyData({en:"i",enH:"I",he:"ן",ar:"ه",ru:"ш",ruH:"Ш",isLast:false,isChar:true})],
        ["idkbd209",new KeyData({en:"o",enH:"O",he:"ם",ar:"خ",ru:"щ",ruH:"Щ",isLast:false,isChar:true})],
        ["idkbd210",new KeyData({en:"p",enH:"P",he:"פ",ar:"ح",ru:"з",ruH:"З",isLast:false, isChar:true})],
        ["idkbd211",new KeyData({en:"", enH:"", he:"", ar:"د",ru:"х",ruH:"Щ",isLast:false,isChar:true})],
        ["idkbd212",new KeyData({en:"", enH:"", he:"", ar:"",ru:"ъ",ruH:"Ъ",isLast:false, isChar:true})],
        ["idkbd213",new KeyData({en:"",enH:"",he:""   ,ar:"/",ru:"э",ruH:"Э",isLast:true,isChar:true})],
     
        ["idkbd300",new KeyData({en:"caps",enH:"",he:"",ar:"",ru:"",ruH:"",isLast:false,isChar:false})],

        ["idkbd301",new KeyData({en:"a",enH:"A",he:"ש",ar:"ش",ru:"ф",ruH:"Ф",isLast:false,isChar:true})],
        ["idkbd302",new KeyData({en:"s",enH:"S",he:"ד",ar:"س",ru:"ы",ruH:"Ы",isLast:false,isChar:true})],
        ["idkbd303",new KeyData({en:"d",enH:"D",he:"ג",ar:"ي",ru:"в",ruH:"В",isLast:false,isChar:true})],
        ["idkbd304",new KeyData({en:"f",enH:"F",he:"כ",ar:"ب",ru:"а",ruH:"А",isLast:false,isChar:true})],
        ["idkbd305",new KeyData({en:"g",enH:"G",he:"ע",ar:"ل",ru:"п",ruH:"П",isLast:false,isChar:true})],
        ["idkbd306",new KeyData({en:"h",enH:"H",he:"י",ar:"ا",ru:"р",ruH:"Р",isLast:false,isChar:true})],
        ["idkbd307",new KeyData({en:"j",enH:"J",he:"ח",ar:"ت",ru:"о",ruH:"О",isLast:false,isChar:true})],
        ["idkbd308",new KeyData({en:"k",enH:"K",he:"ל",ar:"ن",ru:"л",ruH:"Л",isLast:false,isChar:true})],
        ["idkbd309",new KeyData({en:"l",enH:"L",he:"ך",ar:"م",ru:"д",ruH:"Д",isLast:false,isChar:true})],
        ["idkbd310",new KeyData({en:".",enH:".",he:"ף",ar:"ك",ru:"ж",ruH:"Ж",isLast:false,isChar:true})],
        ["idkbd311",new KeyData({en:"", enH:"", he:"", ar:"ط",ru:"",ruH:"",isLast:false,isChar:true})],
        ["idkbd320",new KeyData({en:"enter",enH:"\n",he:"\n",ar:"\n",ru:"\n",ruH:"",isLast:true,isChar:false})],
    
        ["idkbd400",new KeyData({en:"done",enH:"",he:"",ar:"",ru:"",ruH:"",isLast:false,isChar:false})],
        
        ["idkbd401",new KeyData({en:"z",enH:"Z",he:"ז",ar:"ظ",ru:"я",ruH:"Я",isLast:false,isChar:true})],
        ["idkbd402",new KeyData({en:"x",enH:"X",he:"ס",ar:"ز",ru:"ч",ruH:"Ч",isLast:false,isChar:true})],
        ["idkbd403",new KeyData({en:"c",enH:"C",he:"ב",ar:"و",ru:"ц",ruH:"С",isLast:false,isChar:true})],
        ["idkbd404",new KeyData({en:"v",enH:"V",he:"ה",ar:"ة",ru:"м",ruH:"М",isLast:false,isChar:true})],
        ["idkbd405",new KeyData({en:"b",enH:"B",he:"נ",ar:"ى",ru:"и",ruH:"И",isLast:false,isChar:true})],
        ["idkbd406",new KeyData({en:"n",enH:"N",he:"מ",ar:"لا",ru:"т",ruH:"Т",isLast:false,isChar:true})],
        ["idkbd407",new KeyData({en:"m",enH:"M",he:"צ",ar:"ر",ru:"ь",ruH:"Ь",isLast:false,isChar:true})],
        ["idkbd408",new KeyData({en:",",enH:",",he:"ת",ar:"ؤ",ru:"б",ruH:"Б",isLast:false,isChar:true})],
        ["idkbd409",new KeyData({en:".",enH:".",he:"ץ",ar:"ء",ru:"ю",ruH:"Ю",isLast:false,isChar:true})],
        ["idkbd410",new KeyData({en:"/",enH:".",he:".",ar:"ئ",ru:".",ruH:".",isLast:true,isChar:true})],
    
        ["idkbd500",new KeyData({en:"space",enH:" ",he:" ",ar:"",ru:"",ruH:"",isLast:false,isChar:false})],
    ]
);
  
