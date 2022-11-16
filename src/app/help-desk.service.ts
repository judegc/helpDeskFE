import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './interfaces/ticket';
import { Favorite } from './interfaces/favorite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpDeskService {
  backendURL: string = 'https://localhost:7127/api';

  constructor(private httpClient: HttpClient) { }

  userName: string = "";

  getTickets = () => {
    return this.httpClient.get<Ticket[]>(this.backendURL + "/ticket-queue")
  }

  postTicket = (ticket: Ticket): Observable<Ticket> => {
    return this.httpClient.post<Ticket>(this.backendURL + "/ticket-queue", ticket)
  }; 

  deleteTicket = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + "/ticket-queue" + id)
  }; 

  getFavorites = () => {
     return this.httpClient.get<Favorite[]>(this.backendURL + "/favorite-queue")
  }

  addNewFavorite = (favorite: Favorite): Observable<Favorite> => {
    return this.httpClient.post<Favorite>(this.backendURL + "/favorite-queue", favorite)
  }; 

  deleteFavorite = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + "/favorite-queue" + id)
  }; 



}
