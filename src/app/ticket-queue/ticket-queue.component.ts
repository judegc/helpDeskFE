import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HomeViewComponent } from '../home-view/home-view.component';
import { FavoriteQueueComponent } from '../favorite-queue/favorite-queue.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../interfaces/ticket';
import { HelpDeskService } from '../help-desk.service';


@Component({
  selector: 'app-ticket-queue',
  templateUrl: './ticket-queue.component.html',
  styleUrls: ['./ticket-queue.component.css']
})
export class TicketQueueComponent implements OnInit {
  tickets: Ticket[] = [];
  newIssue: string = "";

  constructor(public service: HelpDeskService) { }

  newTicket: Ticket = {
    id: 0,
    openedBy: "",
    issue: "",
    resolvedBy: "",
    resolution: "",
    resolved: false,
    favorited: false
  }

  ngOnInit(): void {
    this.loadTickets();
  }

  loadTickets = (): void => {
    this.service.getTickets().subscribe((data:Ticket[]) => this.tickets = data)
  }

  removeTicket = (id: number): void => {
    this.service.deleteTicket(id).subscribe(() => this.loadTickets());
  }


  addTicket = (ticket: Ticket): void => {
    ticket = {id: this.tickets.length + 1, openedBy: this.service.userName, issue: this.newIssue, resolvedBy: "", resolution: "", resolved: false, favorited: false }
    this.tickets.push(ticket)
    this.service.postTicket(ticket).subscribe(() => this.loadTickets())
  }

}
