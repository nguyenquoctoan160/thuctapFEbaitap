import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AuthorWorksComponent } from './author-works/author-works.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NzModalModule} from "ng-zorro-antd/modal";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorWorksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    NzModalModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
