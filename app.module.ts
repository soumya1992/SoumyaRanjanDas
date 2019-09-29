import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import{DemoDatepickerHideOnScrollComponent} from './datepicker-popup'
import{EmployeeComponent} from './app.employeeComponents';
import{EmployeeService} from './employeeService';
@NgModule({
  declarations: [
    EmployeeComponent,DemoDatepickerHideOnScrollComponent
  ],
  imports: [HttpClientModule,
    BrowserModule,TooltipModule.forRoot(),FormsModule,BrowserAnimationsModule,BsDatepickerModule.forRoot(),
  ],
  providers: [EmployeeService],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
