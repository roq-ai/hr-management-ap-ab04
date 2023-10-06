import { AttendanceInterface } from 'interfaces/attendance';
import { UserInterface } from 'interfaces/user';
import { JobPositionInterface } from 'interfaces/job-position';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  user_id: string;
  job_position_id: string;
  start_date: any;
  end_date?: any;
  salary: number;
  status: string;
  created_at?: any;
  updated_at?: any;
  attendance?: AttendanceInterface[];
  user?: UserInterface;
  job_position?: JobPositionInterface;
  _count?: {
    attendance?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  job_position_id?: string;
  status?: string;
}
