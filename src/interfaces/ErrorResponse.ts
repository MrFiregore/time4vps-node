import { AxiosError } from 'axios';

export default class ErrorResponse extends Error {
  constructor(private error: AxiosError, message?: string) {
    super(message);
  }

  get data() {
    return this.error.response.data;
  }

  get status() {
    return this.error.response.status;
  }

  get statusText() {
    return this.error.response.statusText;
  }

  get axiosError() : AxiosError {
    return this.error;
  }
}
