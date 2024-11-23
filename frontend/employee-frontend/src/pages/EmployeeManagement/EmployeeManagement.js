import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Table from '../../components/Table/Table';
import './EmployeeManagement.css';

const EmployeeManagement = () => {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
        salary: ''
    });

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/employees');
            const data = await response.json();
            setEmployees(data);
        } catch (error) {
            console.error('Error fetching employees:', error);
            alert('Failed to fetch employees');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/employees', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEmployee),
            });
            if (response.ok) {
                setNewEmployee({
                    firstName: '',
                    lastName: '',
                    email: '',
                    salary: ''
                });
                fetchEmployees();
            }
        } catch (error) {
            console.error('Error adding employee:', error);
            alert('Failed to add employee');
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/employees/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchEmployees();
            }
        } catch (error) {
            console.error('Error deleting employee:', error);
            alert('Failed to delete employee');
        }
    };

    return (
        <div className="employee-management">
            <Card title="Add New Employee">
                <form onSubmit={handleSubmit} className="employee-form">
                    <div className="form-grid">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={newEmployee.firstName}
                            onChange={handleInputChange}
                            required
                            className="form-input"
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={newEmployee.lastName}
                            onChange={handleInputChange}
                            required
                            className="form-input"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={newEmployee.email}
                            onChange={handleInputChange}
                            required
                            className="form-input"
                        />
                        <input
                            type="number"
                            name="salary"
                            placeholder="Salary"
                            value={newEmployee.salary}
                            onChange={handleInputChange}
                            required
                            className="form-input"
                        />
                    </div>
                    <Button type="submit">Add Employee</Button>
                </form>
            </Card>

            <Card title="Employee List">
                <Table headers={['First Name', 'Last Name', 'Email', 'Salary', 'Actions']}>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>${employee.salary}</td>
                            <td>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleDelete(employee.id)}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </Table>
            </Card>
        </div>
    );
};

export default EmployeeManagement;
