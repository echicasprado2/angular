import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { GroupFormComponent } from './components/group-form/group-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    GroupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
