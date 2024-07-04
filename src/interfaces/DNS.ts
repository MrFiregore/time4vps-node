export interface DNSZone {
  domain_id: string;
  name: string;
  service_id: string;
}

export interface AddZoneResponse {
  info: string[];
}

export interface DNSRecord {
  id: string;
  name: string;
  ttl: number;
  priority: number;
  content: string;
  type: string;
}

export interface DNSZoneDetails {
  service_id: number;
  name: string;
  records: DNSRecord[];
}

export interface DeleteZoneResponse {
  info: string[];
}

export interface AddRecordResponse {
  info: string[];
}

export interface EditRecordResponse {
  record: DNSRecord;
  info: string[];
}

export interface DeleteRecordResponse {
  info: string[];
}

export interface DNSListResponse {
  service_ids: string[];
  zones: DNSZone[];
}
