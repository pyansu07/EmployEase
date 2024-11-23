package com.example.employeemanagement.service;

import com.example.employeemanagement.model.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeManagementService {
    List<Employee> getAllEmployees();
    Employee saveEmployee(Employee employee);
    Optional<Employee> getEmployeeById(Long id);
    void deleteEmployee(Long id);
    List<Employee> getEmployeesWithSalaryGreaterThan(double salary);
}
