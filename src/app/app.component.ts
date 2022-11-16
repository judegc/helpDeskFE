import { Component } from '@angular/core';
import { HomeViewComponent } from './home-view/home-view.component';
import { TicketQueueComponent } from './ticket-queue/ticket-queue.component';
import { FavoriteQueueComponent } from './favorite-queue/favorite-queue.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helpDeskFE';
}
