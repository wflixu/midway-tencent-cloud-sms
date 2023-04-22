export * from './dist/index';

declare module '@midwayjs/core/dist/interface' {
  interface MidwayConfig {
    tencentCloudSms?: PowerPartial<{
      a: number;
      b: string;
    }>;
  }
}
