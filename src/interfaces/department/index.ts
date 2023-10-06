import { JobPositionInterface } from 'interfaces/job-position';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface DepartmentInterface {
  id?: string;
  name: string;
  company_id: string;
  description?: string;
  location: string;
  phone_number?: string;
  created_at?: any;
  updated_at?: any;
  job_position?: JobPositionInterface[];
  company?: CompanyInterface;
  _count?: {
    job_position?: number;
  };
}

export interface DepartmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  company_id?: string;
  description?: string;
  location?: string;
  phone_number?: string;
}
