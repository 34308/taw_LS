import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DataService} from "./services/data.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import { SummaryPipe } from './pipes/summary.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    SummaryPipe,
    AppComponent,
    BlogComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailsComponent,
    SummaryPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],

  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
