import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './home-view/home-view.component';
import { TicketQueueComponent } from './ticket-queue/ticket-queue.component';
import { FavoriteQueueComponent } from './favorite-queue/favorite-queue.component';

const routes: Routes = [
  {path: 'home-view', component: HomeViewComponent},
  {path: 'ticket-queue', component: TicketQueueComponent},
  {path: 'favorite-queue', component: FavoriteQueueComponent},
  {path: '', component: HomeViewComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
