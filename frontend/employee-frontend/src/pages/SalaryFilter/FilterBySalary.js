import React, { useState } from 'react';
import Table from '../../components/Table/Table';
import Button from '../../components/Button/Button';
import './FilterBySalary.css';

const FilterBySalary = () => {
    const [salaryThreshold, setSalaryThreshold] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState([]);

    const handleInputChange = (e) => {
        setSalaryThreshold(e.target.value);
    };

    const fetchFilteredEmployees = async () => {
        try {
            const response = await fetch(`http://localhost:8080/api/employees/filter?salary=${salaryThreshold}`);
            const data = await response.json();
            setFilteredEmployees(data);
        } catch (error) {
            console.error('Error fetching filtered employees:', error);
            alert('Failed to fetch filtered employees');
        }
    };

    return (
        <div className="filter-by-salary">
            <h2>Filter Employees by Salary</h2>
            <input
                type="number"
                placeholder="Enter salary threshold"
                value={salaryThreshold}
                onChange={handleInputChange}
                className="salary-input"
            />
            <Button onClick={fetchFilteredEmployees}>Filter</Button>

            {filteredEmployees.length > 0 && (
                <Table headers={['First Name', 'Last Name', 'Email', 'Salary']}>
                    {filteredEmployees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>${employee.salary}</td>
                        </tr>
                    ))}
                </Table>
            )}
        </div>
    );
};

export default FilterBySalary;
