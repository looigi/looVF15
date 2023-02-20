import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { ExternalHttpClient } from './services/httpclient.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';
import { ImmaginiDuplicateComponent } from './immagini_duplicate/immagini_duplicate.component';
import Utils from './Utility.component';
import { AngularDraggableModule } from 'angular2-draggable';

/* import * as Hammer from 'hammerjs';
import {HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';

import "hammerjs"; // HAMMER TIME

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL },
    pinch: { enable: true },
    pan: { enable: true, direction: Hammer.DIRECTION_All },
  };
} */

@NgModule({
  declarations: [
    AppComponent,
    ImmaginiDuplicateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    // MatVideoModule,
    AngularDraggableModule
    // HammerModule
  ],
  providers: [
    DatePipe,
    ExternalHttpClient,
    ApiService,
    Utils
    /* {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    }, */

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
