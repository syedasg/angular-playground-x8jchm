import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { ReactiveFormsModule } from '@angular/forms';
import { HelloFrameworkModule } from './hello-framework';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    CoreModule,
    HelloFrameworkModule,ReactiveFormsModule,CommonModule,BrowserModule
  ],
})
export class AppModule {}
