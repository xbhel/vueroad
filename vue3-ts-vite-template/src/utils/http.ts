import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class Axioser {
  private readonly maxRequestNum = -1;
  private readonly instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  post() {}

  get() {}

  put() {}

  delete() {}

  request() {}

  cancel() {}

  // start --- qps 请求数量限制相关 api
  // 最大并发数
  setMaxConcurrentNum() {}
  // 是不是任务进入等待队列
  isWait() {}
  // 超过最大并发数时每个任务等待时间
  waitTime() {}
  // end -- 请求数量限制相关 api

  addHeader() {}

  addRequestInterceptor() {}

  addResponseInterceptor() {}

  getInstance() {
    return this.instance;
  }
}

export default Axioser;
