import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { TicketQueueComponent } from './ticket-queue/ticket-queue.component';
import { BookmarkedQueueComponent } from './bookmarked-queue/bookmarked-queue.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    TicketQueueComponent,
    BookmarkedQueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
