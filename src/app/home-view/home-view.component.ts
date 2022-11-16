import { Component, OnInit } from '@angular/core';
import { TicketQueueComponent } from '../ticket-queue/ticket-queue.component';
import { FavoriteQueueComponent } from '../favorite-queue/favorite-queue.component';
import { AppComponent } from '../app.component';
import { FormsModule } from '@angular/forms';
import { HelpDeskService } from '../help-desk.service';
import { Ticket } from '../interfaces/ticket';
import { Favorite } from '../interfaces/favorite';
import { QueueScheduler } from 'rxjs/internal/scheduler/QueueScheduler';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(public service: HelpDeskService) { }

  ngOnInit(): void {
  }


    login(name: string): void {
      this.service.userName = name;
    }
  
    logout(): void {
      this.service.userName = "";
    }


}
