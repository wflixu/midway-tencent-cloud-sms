// src/components/book/src/bookConfiguration.ts
import { Configuration } from "@midwayjs/core";
import * as DefaultConfig from './config/config.default';

@Configuration({
  namespace: "tencent-cloud-sms",
  importConfigs: [
    {
      default: DefaultConfig
    }
  ]
})
export class TencentCloudSmsConfiguration {
  async onReady() {
    // ...
  }
}
