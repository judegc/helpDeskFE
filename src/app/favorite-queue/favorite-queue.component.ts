import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { HomeViewComponent } from '../home-view/home-view.component';
import { TicketQueueComponent } from '../ticket-queue/ticket-queue.component';
import { HelpDeskService } from '../help-desk.service';
import { FormsModule } from '@angular/forms';
import { Favorite } from '../interfaces/favorite';
import { Ticket } from '../interfaces/ticket';


@Component({
  selector: 'app-favorite-queue',
  templateUrl: './favorite-queue.component.html',
  styleUrls: ['./favorite-queue.component.css']
})
export class FavoriteQueueComponent implements OnInit {
  favorites: Favorite[] = this.service.favorites;
  tickets: Ticket[] = this.service.tickets;

  constructor(protected service: HelpDeskService) { }

  ngOnInit(): void {
    this.service.getFavorites().subscribe((data: Favorite[]) => this.favorites = data)
  }

  isVisible: boolean = false;

  removeFavorite = (id: number): void => {
    this.service.deleteFavorite(id).subscribe(() => this.service.loadFavorites());
  }




}
