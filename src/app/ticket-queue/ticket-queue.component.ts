import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HomeViewComponent } from '../home-view/home-view.component';
import { BookmarkedQueueComponent } from '../bookmarked-queue/bookmarked-queue.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../interfaces/Ticket';
import { HelpDeskService } from '../help-desk.service';


@Component({
  selector: 'app-ticket-queue',
  templateUrl: './ticket-queue.component.html',
  styleUrls: ['./ticket-queue.component.css']
})
export class TicketQueueComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private service: HelpDeskService) { }

  ngOnInit(): void {
    this.service.getTickets().subscribe((data: Ticket[]) => this.tickets = data)
  }

  removeTicket = (id: number): void => {
    this.service.deleteTicket(id).subscribe(() =>)
  }

  isVisible: boolean = false;




}
