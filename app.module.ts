import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UrlSerializer, DefaultUrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './shared/helpers/url.lowercase';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: UrlSerializer, useClass: LowerCaseUrlSerializer, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
