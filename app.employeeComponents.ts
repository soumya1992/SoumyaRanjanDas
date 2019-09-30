import { OnInit, Component, ViewChild } from "@angular/core";
import { Services } from "@angular/core/src/view";
import * as services from './employeeService';
import { Employee } from "./employee";
import { EmployeeService } from "./employeeService";
@Component({
    selector: 'app-root',
    templateUrl: "/app.employeeComponent.html",
    styleUrls: ['/app.employeeComponent.css'],
    providers: [services.EmployeeService]
})
export class EmployeeComponent implements OnInit {
    employee: Employee = new Employee("", "", "", "", "");
    message: any;
    emp: any;
    constructor(private employeeService: services.EmployeeService) {
    }


    initializeModel() {
        this.employee = {
            firstName: "",
            lastName: "",
            gender: "",
            dateOfBirth: "",
            department: "",
        }

    }
    cleardata() {
        this.initializeModel();
    }
    ngOnInit() {
        this.initializeModel;
    }
    onSubmit(Employee: any) {
        this.employeeService.postEmployee(this.employee)
            .subscribe((data: any) => this.message = data)
    }
    view() {
        console.log(this.emp)
        let resp = this.employeeService.getEmployee();
        resp.subscribe((data) => this.emp = data)

    }
}
