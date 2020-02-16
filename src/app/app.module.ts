import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PotionListComponent } from './potion-list/potion-list.component';
import { HomeComponent } from './home/home.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule  } from '@angular/forms';
import { ImageAngularComponent } from './image-angular/image-angular.component'

@NgModule({
  declarations: [
    AppComponent,
    PotionListComponent,
    HomeComponent,
    ImageAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
