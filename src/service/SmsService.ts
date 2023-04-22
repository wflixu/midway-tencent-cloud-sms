import { Provide } from "@midwayjs/core";

@Provide()
export class SmsService {

    
  async sendSms() {
    return {
      data: "hello world",
    };
  }

  async pullSmsSendStatus () {

  }

  async sendStatusStatistics () {

  }

  async addSmsTemplate () {

  }
}
