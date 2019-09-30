package com.employee.employeePortal.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.employee.employeePortal.model.EmployeeModel;
import com.employee.employeePortal.service.EmployeeService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value="/api/employeeportal")
public class EmployeeController {
	@Autowired
	EmployeeService service;

	@RequestMapping(value = "/getemployee",method=RequestMethod.GET, produces = { "application/json" })
	public ResponseEntity<List<EmployeeModel>> getAllEmployee() {
		List<EmployeeModel> list = service.getAllEmployeeService();
		return new ResponseEntity<List<EmployeeModel>>(list, new HttpHeaders(), HttpStatus.OK);
	}

	@RequestMapping(value = "/employee",method=RequestMethod.POST ,consumes = { "application/json" }, produces = { "application/json" })
	public ResponseEntity<String> get(@Valid @RequestBody EmployeeModel emp) {
		return new ResponseEntity<String>(service.createOrUpdateEmployee(emp), HttpStatus.OK);

	}
}
