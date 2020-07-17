import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TipsShellComponent } from './tips-shell/tips-shell.component';
import { FunctionalFormComponent } from './functional-form/functional-form.component';
import { ObservableFormComponent } from './observable-form/observable-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TipsShellComponent,
    FunctionalFormComponent,
    ObservableFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
