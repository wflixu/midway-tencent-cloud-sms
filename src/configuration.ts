
import {
  Config,
  Configuration,
  ILifeCycle,
  IMidwayContainer,
} from "@midwayjs/core";
import { Client } from "tencentcloud-sdk-nodejs-sms/tencentcloud/services/sms/v20210111/sms_client";
import * as defaultConfig from './config/config.default'
import { TencentCloudSmsConfig } from "./interface";
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
  smsConfig: TencentCloudSmsConfig;

  async onReady(applicationContext: IMidwayContainer) {
    if(this.smsConfig.log){
      console.log("TencentCloudSmsConfiguration:onReady", this.smsConfig);
    }
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
