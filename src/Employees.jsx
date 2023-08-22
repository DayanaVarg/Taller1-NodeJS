import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Employees = () =>{
  const[employees, setEmployees] = useState([{
    id:1,
    fullName: 'Dayana Vargas',     
    designation:'Maestro',
    gender:'Female',
    teamName:'TeamA'
  },                    
{
    id:2,
    fullName: 'Laura Vargas',     
    designation:'Informática',
    gender:'Female',
    teamName:'TeamB'
  },
                                            {
    id:3,
    fullName: 'Deivi Herrera',     
    designation:'Informático',
    gender:'Male',
    teamName:'TeamC'
  },
                                            {
    id:4,
    fullName: 'Beatriz Tobón',     
    designation:'Contadora',
    gender:'Female',
    teamName:'TeamA'
  },
                                            {
    id:5,
    fullName: 'Nelson Vargas',     
    designation:'Maestro',
    gender:'Male',
    teamName:'TeamB'
  },
                                            {
    id:6,
    fullName: 'Daniel Romero',     
    designation:'Contador',
    gender:'Male',
    teamName:'TeamC'
  },
                                            {
    id:7,
    fullName: 'Juan García',     
    designation:'Informático',
    gender:'Male',
    teamName:'TeamA'
  },
                                            {
    id:8,
    fullName: 'Hilary Porras',     
    designation:'Audiovisuales',
    gender:'Female',
    teamName:'TeamB'
  },
                                            {
    id:9,
    fullName: 'Angie Mahecha',     
    designation:'Maestra',
    gender:'Female',
    teamName:'TeamC'
  },
                                            {
    id:10,
    fullName: 'Ximena Vanegas',     
    designation:'Coordinador',
    gender:'Female',
    teamName:'TeamA'
  },
                                            {
    id:11,
    fullName: 'Jordan Ortiz',     
    designation:'Audiovisuales',
    gender:'Male',
    teamName:'TeamB'
  },
                                        {
    id:12,
    fullName: 'Cristian Velandia',     
    designation:'Coordinador',
    gender:'Male',
    teamName:'TeamC'
  }
                                        ]);

  return(
    <main className='m-3'>
         <table className='table table-bordered'>
            <thead>
                <tr className='table-dark'>
                    <th scope='col'>Nombre Completo</th>
                    <th scope='col'>Genero</th>
                    <th scope='col'>Designación</th>
                    <th scope='col'>Equipo</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>
        {
        employees.map((employee) => (
                <tr>{employee.fullName}</tr>
        ))
        }  
                </td>
                    <td>  
        {
        employees.map((employee) => (
                <tr>{employee.gender}</tr>
            
        ))
        }
                    </td>
                    <td>
        {
        employees.map((employee) => (
                <tr>{employee.designation}</tr>
            
        ))
        }
                    </td>
                    <td>
        {
        employees.map((employee) => (
                <tr>{employee.teamName}</tr>
            
        ))
        }
                    </td>
                    </tr>
            </tbody> 
          </table>
    </main>
  )
}

export default Employees;