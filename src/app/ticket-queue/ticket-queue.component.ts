import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HomeViewComponent } from '../home-view/home-view.component';
import { FavoriteQueueComponent } from '../favorite-queue/favorite-queue.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../interfaces/ticket';
import { Favorite } from '../interfaces/favorite';
import { HelpDeskService } from '../help-desk.service';


@Component({
  selector: 'app-ticket-queue',
  templateUrl: './ticket-queue.component.html',
  styleUrls: ['./ticket-queue.component.css']
})
export class TicketQueueComponent implements OnInit {
  favorites: Favorite[] = this.service.favorites;
  tickets: Ticket[] = this.service.tickets;
  newIssue: string = "";
  currentIssue: string = ""; //Copy here for on-click issue display

  constructor(protected service: HelpDeskService) { }

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

  Favorited(t: Ticket): void {
    t.favorited = true;
    this.service.newFavorite = {id: this.favorites.length + 1, favoritedBy: this.service.userName, ticketId: t.id} //Copy here for on-click issue display
    this.favorites.push(this.service.newFavorite)
    this.service.postFavorite(this.service.newFavorite).subscribe(() => this.service.loadFavorites())
  }

  Resolved(t: Ticket): void {
    t.resolved = true;
  }

  displayIssue(t: Ticket): void { //Copy here for on-click issue display
    this.currentIssue = t.issue;
  }



}
