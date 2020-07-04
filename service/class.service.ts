import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassService {

api_url="http://localhost:8080/api/class/classes";


  constructor(private http:HttpClient) { }


//Get Classes

getClasses():Observable<any>{

  return this.http.get(`${this.api_url}`);
 }
 //Add Class
addClass(c):Observable<any>{
  return this.http.post(`${this.api_url}`,c);
}

//delete Class
deleteClass(id):Observable<any>{
  return this.http.delete(`${this.api_url}/${id}`)
}

detailsClass(id):Observable<any>{
  return this.http.get(`${this.api_url}/${id}`)
}
searchClass(searchKey,searchType):Observable<any>{
  return this.http.get(`${this.api_url}/${searchKey}/${searchType}`)
}
updateClass(id,c):Observable<any>{

 return this.http.put(`${this.api_url}/${id}`,c)
}
}