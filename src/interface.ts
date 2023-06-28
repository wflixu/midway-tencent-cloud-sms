export interface TencentCloudSmsConfig {
  secretId: string;
  secretKey: string;
  region: string;
  SmsSdkAppId: string;
  SignName: string;
  TemplateId: string;
  log?:boolean;
}
export interface ISendSmsParam {
  /* 短信应用ID: 短信SmsSdkAppId在 [短信控制台] 添加应用后生成的实际SmsSdkAppId，示例如1400006666 */
  // 应用 ID 可前往 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 查看
  SmsSdkAppId: string;
  /* 短信签名内容: 使用 UTF-8 编码，必须填写已审核通过的签名 */
  // 签名信息可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-sign)
  //    或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-sign) 的签名管理查看
  SignName: string;
  /* 模板 ID: 必须填写已审核通过的模板 ID */
  // 模板 ID 可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-template)
  // 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-template) 的正文模板管理查看
  TemplateId: string;
  /* 模板参数: 模板参数的个数需要与 TemplateId 对应模板的变量个数保持一致，若无模板参数，则设置为空 */
  TemplateParamSet: string[];
  /* 下发手机号码，采用 e.164 标准，+[国家或地区码][手机号]
   * 示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号，最多不要超过200个手机号*/
  PhoneNumberSet: string[];
  /* 用户的 session 内容（无需要可忽略）: 可以携带用户侧 ID 等上下文信息，server 会原样返回 */
  SessionContext?: string;
  /* 短信码号扩展号（无需要可忽略）: 默认未开通，如需开通请联系 [腾讯云短信小助手] */
  ExtendCode?: string;
  /* 国际/港澳台短信 senderid（无需要可忽略）: 国内短信填空，默认未开通，如需开通请联系 [腾讯云短信小助手] */
  SenderId?: string;
}

export interface IPullSmsSendStatusParam {
  // 短信应用ID: 短信SdkAppId在 [短信控制台] 添加应用后生成的实际SdkAppId，示例如1400006666
  SmsSdkAppId: string;
  // 拉取最大条数，最多100条
  Limit: number;
}
export interface ISendStatusStatisticsParam {
  // 短信应用ID: 短信SdkAppId在 [短信控制台] 添加应用后生成的实际SdkAppId，示例如1400006666
  SmsSdkAppId: string;
  // 拉取最大条数，最多100条
  Limit: number;
  // 偏移量 注：目前固定设置为0
  Offset: number;
  // 开始时间，yyyymmddhh 需要拉取的起始时间，精确到小时
  BeginTime: string;
  // 结束时间，yyyymmddhh 需要拉取的截止时间，精确到小时
  // 注：EndTime 必须大于 BeginTime
  EndTime: string;
}
