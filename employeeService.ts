import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import {Http,Response,ResponseContentType,Headers,RequestOptions,RequestMethod,URLSearchParams} from '@angular/http';
//import {Cookie} from 'ng2-cookies';
import {Employee} from "./employee";
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import {Observable} from 'rxjs';
import { text } from "@angular/core/src/render3/instructions";
@Injectable()
export class EmployeeService
{
constructor(private http: HttpClient){}
private createHeaders()
{
    let header = new HttpHeaders({});
    return header;
}
postEmployee(employee:Employee)
{
    return this.http.post("http://localhost:8080/api/employeeportal/employee",employee,{responseType:'text' as 'json'})
}
getEmployee()
{
    return this.http.get("http://localhost:8080/api/employeeportal/getemployee");
}
}