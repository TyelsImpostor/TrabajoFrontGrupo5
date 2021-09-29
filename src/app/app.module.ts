import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './general/registro/registro.component';
import { RegistroproductoComponent } from './general/registroproducto/registroproducto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    RegistroproductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Siempre se debe importar para forms
    FormsModule,
    //para json
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
