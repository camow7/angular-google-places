import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';

import {environment} from '../environments/environment';
export const googleAPIKey = environment.googleAPIKey;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({ apiKey: googleAPIKey, libraries: ["places"] }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
