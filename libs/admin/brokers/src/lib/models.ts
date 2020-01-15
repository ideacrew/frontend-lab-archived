export interface BrokerFromAPI {
  _id: string;
  hbx_id: string;
  staff_name: string;
  current_status: string;
  writing_agent: string;
  agency: string;
  history: BrokerHistory[];
}

export interface BrokerHistory {
  date: string;
  status: string;
}
