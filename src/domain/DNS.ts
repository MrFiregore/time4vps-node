import BaseDomain       from '@src/domain/BaseDomain';
import {
  AddRecordResponse,
  AddZoneResponse,
  DeleteRecordResponse,
  DeleteZoneResponse,
  DNSListResponse,
  DNSRecord,
  DNSZoneDetails,
  EditRecordResponse,
} from '@src/interfaces/DNS';

export default class DNS extends BaseDomain {
  protected endpoint = '/dns';

  public async listDNS(): Promise<DNSListResponse> {
    return this.get();
  }

  public async addZone(serviceId: string, name: string): Promise<AddZoneResponse> {
    return this.post(
      `/service/${serviceId}/dns`,
      {
        name,
      },
      false,
    );
  }

  public async getZoneDetails(serviceId: string, zoneId: string): Promise<DNSZoneDetails> {
    return this.get(`/service/${serviceId}/dns/${zoneId}`, false);
  }

  public async deleteZone(serviceId: string, zoneId: string): Promise<DeleteZoneResponse> {
    return this.delete(`/service/${serviceId}/dns/${zoneId}`, false);
  }

  public async addRecord(
    serviceId: string,
    zoneId: string,
    record: DNSRecord,
  ): Promise<AddRecordResponse> {
    return this.post(`/service/${serviceId}/dns/${zoneId}/records`, record, false);
  }

  public async editRecord(
    serviceId: string,
    zoneId: string,
    recordId: string,
    record: DNSRecord,
  ): Promise<EditRecordResponse> {
    return this.put(`/service/${serviceId}/dns/${zoneId}/records/${recordId}`, record, false);
  }

  public async deleteRecord(
    serviceId: string,
    zoneId: string,
    recordId: string,
  ): Promise<DeleteRecordResponse> {
    return this.delete(`/service/${serviceId}/dns/${zoneId}/records/${recordId}`, false);
  }
}
