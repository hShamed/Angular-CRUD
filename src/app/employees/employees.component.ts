import { Component } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  employeesArray: Employee[] = [
    {id: 1, name: "Hiram Shamed Ambriz Rubio", country: "Mexico"},
    {id: 2, name: "Scarlett Jimena Solórzano Rodríguez", country: "Mexico"},
    {id: 3, name: "John Whick", country: "United States"},
    {id: 4, name: "Xi Maotze", country: "China"},
  ];
}
