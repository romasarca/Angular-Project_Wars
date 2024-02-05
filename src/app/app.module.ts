import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppEncaminamentModule } from "./app-encaminament.module";

import { M02_SumaComponent } from "./m02-suma.component";
import { M03_IteradorComponent } from "./m03-iterador.component";
import { ConctactoComponent } from "./contacto";

import { M11_EncaminamentComponent } from "./m11-encaminament.component";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import {CdkAccordionModule} from '@angular/cdk/accordion';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    M02_SumaComponent,
    M03_IteradorComponent,
    ConctactoComponent,
    M11_EncaminamentComponent,
  ], // Here I must say the components I want to be able to use.
  imports: [
    AppEncaminamentModule,
    
    BrowserModule,
    BrowserAnimationsModule,

    MatTabsModule,
    MatToolbarModule,
    MatPaginator,
    MatPaginatorModule,
    BrowserModule,
    CdkAccordionModule,

    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  bootstrap: [M11_EncaminamentComponent],
  providers: [provideAnimationsAsync()], // This is the component I'm using.
})
export class AppModule {}
