import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentInterface } from '../models/shared/CommentInterface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  private readonly API = "https://33ed8541-8a99-4650-a4aa-3cf183957603.mock.pstmn.io"
  constructor(private http: HttpClient) { }
  
    getComments(): Observable<CommentInterface[]>{
        return this.http.get<CommentInterface[]>(this.API);
    }
  
  }
