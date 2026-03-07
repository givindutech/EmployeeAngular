import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../Model/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  getParentDept(){
    return this.http.get<IApiResponse>("https://localhost:7221/api/EmployeeManagement/GetParentDepartments")
  }
  getChildDept(id:number):Observable<IApiResponse>{
    return this.http.get<IApiResponse>('https://localhost:7221/api/EmployeeManagement/GetChildDepartments/${id}');
  }
}
