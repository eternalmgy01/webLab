import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelDrivenComponent } from './components/model-driven/model-driven.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelDrivenComponent,
    TemplateDrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
