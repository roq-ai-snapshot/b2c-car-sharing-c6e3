import { DashboardInterface } from 'interfaces/dashboard';
import { GetQueryInterface } from 'interfaces';

export interface OperationInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  dashboard_id: string;
  created_at?: any;
  updated_at?: any;

  dashboard?: DashboardInterface;
  _count?: {};
}

export interface OperationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  dashboard_id?: string;
}
