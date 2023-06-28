# midway 腾讯云短信组件

封装 tencentcloud-sdk-nodejs-sms 成组件，命名空间是 tencentCloudSms 。

# 使用

## 安装

```
 npm i midway-tencent-cloud-sms

```

## 配置

在 config/\* 中配置

```
   tencentCloudSms: {
    secretId: '',//
    secretKey: '',
    region: '',
    SmsSdkAppId: '',
    TemplateId: '',
    SignName: '',
    log:true, // 调试时设置为true，会打印出配置和请求参数
  },
```

具体配置的含义，请
[参考腾讯云文档](https://cloud.tencent.com/document/product/382/43197)

## Controller 中使用

```
// 引入
import { SmsService } from 'midway-tencent-cloud-sms';


class SomeController {
   // 注入
   @Inject()
   smsService: SmsService;

   @Post('/sms')
    async sms(@Body('phone') phone: string) {
    const code = _.random(100000, 999999);
    // 使用
    const res = await this.smsService.sendSms(code.toString(), phone);
    this.ctx.logger.info('sms', phone, res);
  }
}

```

# 贡献

👏 欢迎提 issue 或 pr
