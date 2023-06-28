import {
  Config,
  Inject,
  Provide,
} from "@midwayjs/core";
import { Client } from "tencentcloud-sdk-nodejs-sms/tencentcloud/services/sms/v20210111/sms_client";
import { TencentCloudSmsConfig } from "../interface";

@Provide()
export class SmsService {
  @Config("tencentCloudSms")
  smsConfig: TencentCloudSmsConfig;

  @Inject("tencentCloudSmsClient")
  client: Client;


  async sendSms(code: string, phone: string) {
    if (!this.client) {
      console.warn("client not exit");
      return;
    }
    if (!this.smsConfig) {
      console.warn("config is not correact");
      return;
    }
    const params = {
      SmsSdkAppId: this.smsConfig.SmsSdkAppId,
      /* 短信签名内容: 使用 UTF-8 编码，必须填写已审核通过的签名 */
      // 签名信息可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-sign) 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-sign) 的签名管理查看
      SignName: this.smsConfig.SignName,
      /* 模板 ID: 必须填写已审核通过的模板 ID */
      // 模板 ID 可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-template) 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-template) 的正文模板管理查看
      TemplateId: this.smsConfig.TemplateId,
      /* 模板参数: 模板参数的个数需要与 TemplateId 对应模板的变量个数保持一致，若无模板参数，则设置为空 */
      TemplateParamSet: [code],
      /* 下发手机号码，采用 e.164 标准，+[国家或地区码][手机号]
       * 示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号，最多不要超过200个手机号*/
      PhoneNumberSet: [`+86${phone}`],
      /* 用户的 session 内容（无需要可忽略）: 可以携带用户侧 ID 等上下文信息，server 会原样返回 */
      SessionContext: "",
      /* 短信码号扩展号（无需要可忽略）: 默认未开通，如需开通请联系 [腾讯云短信小助手] */
      ExtendCode: "",
      /* 国际/港澳台短信 senderid（无需要可忽略）: 国内短信填空，默认未开通，如需开通请联系 [腾讯云短信小助手] */
      SenderId: "",
    };
    if(this.smsConfig.log){
      console.log(`发送短信的参数：`, params);
    }
    return this.client.SendSms(params);
  }

  async pullSmsSendStatus() {}

  async sendStatusStatistics() {}

  async addSmsTemplate() {}
}
