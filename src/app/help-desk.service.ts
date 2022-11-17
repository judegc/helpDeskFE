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
  favoriteIssue: string = "";
  newFavorite: Favorite = {id: 0, favoritedBy: "", ticketId: 0};

  getTickets = (): Observable<Ticket[]> => {
    return this.httpClient.get<Ticket[]>(`${this.backEndURL}/tickets`)
  }

  postTicket = (ticket: Ticket): Observable<Ticket> => {
    return this.httpClient.post<Ticket>(`${this.backEndURL}/tickets`, ticket)
  }; 

  deleteTicket = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(`${this.backEndURL}/tickets/${id}`)
  }; 

  getFavorites = (): Observable<Favorite[]> => {
     return this.httpClient.get<Favorite[]>(`${this.backEndURL}/favorites`)
  }

  addNewFavorite = (favorite: Favorite): Observable<Favorite> => {
    return this.httpClient.post<Favorite>(`${this.backEndURL}/favorites`, favorite)
  }; 

  deleteFavorite = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(`${this.backEndURL}/favorites/${id}`)
  }; 

  displayIssueFavorite(id: number): void {
    this.favoriteIssue = this.tickets[id].issue
  }

  loadFavorites = (): void => {
    this.getFavorites().subscribe((data:Favorite[]) => this.favorites = data)
  }

  postFavorite = (favorite: Favorite): Observable<Favorite> => {
    return this.httpClient.post<Favorite>(`${this.backEndURL}/favorites`, this.favorites)
  }; 
 


}
