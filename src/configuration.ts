
import {
  Config,
  Configuration,
  ILifeCycle,
  IMidwayContainer,
} from "@midwayjs/core";
import { Client } from "tencentcloud-sdk-nodejs-sms/tencentcloud/services/sms/v20210111/sms_client";
import * as defaultConfig from './config/config.default'
@Configuration({
  namespace: "tencentCloudSms",
  importConfigs: [
    {
      default: defaultConfig,
    },
  ],
})
export class TencentCloudSmsConfiguration implements ILifeCycle {
  @Config("tencentCloudSms")
  smsConfig: any;

  async onReady(applicationContext: IMidwayContainer) {
    console.log("TencentCloudSmsConfiguration:onReady", this.smsConfig);
    const client = new Client({
      credential: {
        secretId: this.smsConfig.secretId as string,
        secretKey: this.smsConfig.secretKey,
      },
      region: this.smsConfig.region,
      profile: {
        signMethod: "HmacSHA256",
        httpProfile: {
          reqMethod: "POST",
 
          reqTimeout: 30,
         
          endpoint: "sms.tencentcloudapi.com",
        },
      },
    });
    applicationContext.registerObject("tencentCloudSmsClient", client);
  }
}
