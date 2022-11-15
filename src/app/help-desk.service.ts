import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './interfaces/Ticket';
import { BookmarkedTicket } from './interfaces/BookmarkedTicket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpDeskService {
  backendURL: string = '';

  constructor(private httpClient: HttpClient) { }

  getTickets = () => {
    return this.httpClient.get<Ticket[]>(this.backendURL + "/ticket-queue")
  }

  addNewTicket = (ticket: Ticket): Observable<Ticket> => {
    return this.httpClient.post<Ticket>(this.backendURL + "/ticket-queue", ticket)
  }; 

  deleteTicket = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + "/ticket-queue" + id)
  }; 

  getBookMarkedTickets = () => {
     return this.httpClient.get<BookmarkedTicket[]>(this.backendURL + "/bookmarked-queue")
  }

  addNewBookMarkedTicket = (bookmarkedTicket: BookmarkedTicket): Observable<BookmarkedTicket> => {
    return this.httpClient.post<BookmarkedTicket>(this.backendURL + "/bookmarked-queue", bookmarkedTicket)
  }; 

  deleteBookMarkedTicket = (id: number): Observable<void> => {
    return this.httpClient.delete<void>(this.backendURL + "/bookmarked-queue" + id)
  }; 

}
