import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeManagement from './pages/EmployeeManagement/EmployeeManagement';
import FilterBySalary from './pages/SalaryFilter/FilterBySalary';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {/* Route for adding and listing employees */}
                    <Route path="/" element={<EmployeeManagement />} />
                    
                    {/* Route for filtering employees by salary */}
                    <Route path="/filter-by-salary" element={<FilterBySalary />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
