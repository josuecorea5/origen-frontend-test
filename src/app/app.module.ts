import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ListFootageComponent } from './components/list-footage/list-footage.component';
import { FootageItemComponent } from './components/footage-item/footage-item.component';
@NgModule({
  declarations: [
    AppComponent,
    ListFootageComponent,
    FootageItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
