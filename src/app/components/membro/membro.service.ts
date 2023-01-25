import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable,map } from 'rxjs';


import { API } from 'src/app/app.api';
import { SharedService } from '../shared/shared.service';
import { Membro } from './membro.model';

@Injectable({
  providedIn: 'root'
})
export class MembroService {

  constructor(private http: HttpClient,private sharedService: SharedService) { }

  handleError(error:any): Observable<any>{
    let errorMessage;
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;      
    }else{
      errorMessage = `Error: ${error.status}\nMessage:${error.message}`;
    }
    this.sharedService.showMessage(errorMessage,true)
    return EMPTY;
  }

  create(membro: Membro): Observable<Membro> { 
    
    return this.http.post<Membro>(`${API}/person`,membro);
  }

  index():Observable<Membro[]> {
    return this.http.get<Membro[]>(`${API}/person`);
  }

  getById(id: string): Observable<Membro> {
    return this.http.get<Membro>(`${API}/person/${id}`);
  }

  update(membro: Membro): Observable<Membro> {
    const uri=`${API}/person/${membro.id}`;
    return this.http.put<Membro>(uri,membro).pipe(
      map(obj => obj),
      catchError((e) => this.handleError(e))
    );
  }

  delete(id: string): Observable<Membro> {
    const uri=`${API}/person/${id}`;
    return this.http.delete<Membro>(uri);
  }
}
