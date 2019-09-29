package com.employee.employeePortal.sortOnFirstName;

import java.util.Comparator;

import com.employee.employeePortal.model.EmployeeModel;

public class SortFirstName implements Comparator<EmployeeModel> {

	@Override
	public int compare(EmployeeModel o1, EmployeeModel o2) {
		// TODO Auto-generated method stub
		return o1.getFirstName().compareTo(o2.getFirstName());
	}

}
