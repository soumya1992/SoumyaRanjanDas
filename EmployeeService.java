package com.employee.employeePortal.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.employeePortal.model.EmployeeModel;
import com.employee.employeePortal.repo.EmployeeRepository;
import com.employee.employeePortal.sortOnFirstName.SortFirstName;

@Service
public class EmployeeService {
	@Autowired
	EmployeeRepository repository;

	public List<EmployeeModel> getAllEmployeeService() {
		List<EmployeeModel> list = repository.findAll();
		Collections.sort(list, new SortFirstName());
		if (list.size() > 0) {
			return list;
		} else {
			return new ArrayList<EmployeeModel>();
		}
	}

	public String createOrUpdateEmployee(EmployeeModel emp) {
		repository.save(emp);
		return "Employee " + emp.getFirstName() + " is Successfully Registered";
	}
}
