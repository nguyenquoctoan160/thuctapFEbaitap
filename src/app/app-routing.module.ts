import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorComponent} from "./author/author.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthorWorksComponent} from "./author-works/author-works.component";

const routes: Routes = [
  { path: 'author/:authorKey/works', component: AuthorWorksComponent },
  { path: 'author', component: AuthorComponent },

  // Các tuyến đường khác (nếu có)
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
