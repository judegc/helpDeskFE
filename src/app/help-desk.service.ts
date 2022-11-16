import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './interfaces/ticket';
import { Favorite } from './interfaces/favorite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpDeskService {
  backEndURL: string = 'https://localhost:7127/api';

  constructor(private httpClient: HttpClient) { }

  favorites: Favorite[] = [];
  tickets: Ticket[] = [];

  userName: string = "";

  getTickets = (): Observable<Ticket[]> => {
    return this.httpClient.get<Ticket[]>(`${this.backEndURL}/ticket-queue`)
  }

  postTicket = (ticket: Ticket): Observable<Ticket> => {
    return this.httpClient.post<Ticket>(`${this.backEndURL}/ticket-queue`, ticket)
  }; 

  deleteTicket = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(`${this.backEndURL}/ticket-queue/${id}`)
  }; 

  getFavorites = (): Observable<Favorite[]> => {
     return this.httpClient.get<Favorite[]>(`${this.backEndURL}/favorite-queue`)
  }

  addNewFavorite = (favorite: Favorite): Observable<Favorite> => {
    return this.httpClient.post<Favorite>(`${this.backEndURL}/favorite-queue`, favorite)
  }; 

  deleteFavorite = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(`${this.backEndURL}/favorite-queue/${id}`)
  }; 
 


}
