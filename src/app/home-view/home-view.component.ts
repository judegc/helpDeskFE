import { Component, OnInit } from '@angular/core';
import { TicketQueueComponent } from '../ticket-queue/ticket-queue.component';
import { BookmarkedQueueComponent } from '../bookmarked-queue/bookmarked-queue.component';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userName: string = "";

}
