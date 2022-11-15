import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HomeViewComponent } from '../home-view/home-view.component';
import { TicketQueueComponent } from '../ticket-queue/ticket-queue.component';
import { HelpDeskService } from '../help-desk.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-bookmarked-queue',
  templateUrl: './bookmarked-queue.component.html',
  styleUrls: ['./bookmarked-queue.component.css']
})
export class BookmarkedQueueComponent implements OnInit {

  constructor(private service: HelpDeskService) { }

  ngOnInit(): void {
  }

  isVisible: boolean = false;


}
