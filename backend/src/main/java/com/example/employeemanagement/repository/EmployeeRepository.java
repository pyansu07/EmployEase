package com.example.employeemanagement.repository;

import com.example.employeemanagement.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    // Custom query method to find employees with salary greater than the specified amount
    List<Employee> findBySalaryGreaterThan(double salary);
}
