import { EmployeeInterface } from 'interfaces/employee';
import { DepartmentInterface } from 'interfaces/department';
import { GetQueryInterface } from 'interfaces';

export interface JobPositionInterface {
  id?: string;
  name: string;
  department_id: string;
  description?: string;
  salary: number;
  requirements: string;
  created_at?: any;
  updated_at?: any;
  employee?: EmployeeInterface[];
  department?: DepartmentInterface;
  _count?: {
    employee?: number;
  };
}

export interface JobPositionGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  department_id?: string;
  description?: string;
  requirements?: string;
}
