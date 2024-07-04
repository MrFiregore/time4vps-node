import ErrorResponse  from '@src/interfaces/ErrorResponse';
import Time4VpsClient from '../index';

export default abstract class BaseDomain {
  protected client: Time4VpsClient;

    protected abstract endpoint: string;

    constructor(client: Time4VpsClient) {
      this.client = client;
    }

    protected async request(
      method: 'GET' | 'POST' | 'PUT' | 'DELETE',
      path: string,
      data?: any,
      appendEndpoint: boolean = true,
    ): Promise<any> {
      const url    = appendEndpoint ? `${this.endpoint}${path}` : `${path}`;
      const config = {
        method,
        url,
        data,
      };

      try {
        const response = await this.client.instance(config);
        return response.data;
      } catch (error) {
        throw new ErrorResponse(error, `Request error: ${error.message}`);
      }
    }

    protected get(path: string = '', appendEndpoint: boolean = true): Promise<any> {
      return this.request('GET', path, undefined, appendEndpoint);
    }

    protected post(
      path: string = '',
      data: any = {},
      appendEndpoint: boolean = true,
    ): Promise<any> {
      return this.request('POST', path, data, appendEndpoint);
    }

    protected put(path: string = '', data: any = {}, appendEndpoint: boolean = true): Promise<any> {
      return this.request('PUT', path, data, appendEndpoint);
    }

    protected delete(path: string = '', appendEndpoint: boolean = true): Promise<any> {
      return this.request('DELETE', path, undefined, appendEndpoint);
    }
}
