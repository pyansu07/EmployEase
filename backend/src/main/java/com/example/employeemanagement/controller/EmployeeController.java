// EmployeeController.java
package com.example.employeemanagement.controller;

import com.example.employeemanagement.model.Employee;
import com.example.employeemanagement.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }

    @GetMapping("/filter")
public List<Employee> getEmployeesWithSalaryGreaterThan(@RequestParam double salary) {
    return employeeService.getEmployeesWithSalaryGreaterThan(salary);
}


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok().build();
    }

    // New endpoint to fetch employees with salary greater than the provided value
    @GetMapping("/salaryGreaterThan")
    public List<Employee> getEmployeesBySalary(@RequestParam double salary) {
        return employeeService.getEmployeesWithSalaryGreaterThan(salary);
    }
}
