import { EmployeeInterface } from 'interfaces/employee';
import { GetQueryInterface } from 'interfaces';

export interface AttendanceInterface {
  id?: string;
  employee_id: string;
  date: any;
  check_in: any;
  check_out?: any;
  total_hours: number;
  status: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  _count?: {};
}

export interface AttendanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  status?: string;
}
