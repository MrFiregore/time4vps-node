import axios, { AxiosInstance } from 'axios';
import DNS                      from '@src/domain/DNS';

export default class Time4VpsClient {
  private readonly axiosInstance: AxiosInstance;

  static readonly BASE_URL = 'https://billing.time4vps.com/api/';

  /**
   * @param {string} username Your email
   * @param {string} password Your password
   */
  constructor(username: string, password: string) {
    this.axiosInstance = axios.create({
      baseURL : Time4VpsClient.BASE_URL,
      auth    : {
        username,
        password,
      },
    });
  }

  public get dns(): DNS {
    return new DNS(this);
  }

  public get instance(): AxiosInstance {
    return this.axiosInstance;
  }
}
