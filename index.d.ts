export * from './dist/index';

declare module '@midwayjs/core/dist/interface' {
  interface MidwayConfig {
    tencentCloudSms: {
      secretId: string;
      secretKey: string;
      region:string;
      SmsSdkAppId:string
      SignName:string;
      TemplateId:string;
    };
  }
}
