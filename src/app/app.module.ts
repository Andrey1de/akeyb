import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AkbKeyComponent } from './keyb/akb-key/akb-key.component';
import { AkbLangKeyboardComponent } from './keyb/akb-lang-keyboard/akb-lang-keyboard.component';
import { FormsModule } from '@angular/forms';
import { AkbKeyboardMultiComponent } from './keyb/akb-keyboard-multi/akb-keyboard-multi.component';

@NgModule({
  declarations: [
    AppComponent,
    AkbKeyComponent,
    AkbLangKeyboardComponent,
    AkbKeyboardMultiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
