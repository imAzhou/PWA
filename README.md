# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

## 关于pwa
1、通过worbox插件配置在umi中，拿到打包后带hash后缀的文件名，并将所有文件缓存到浏览器的service worker中
2、每次更新文件会比对worbox中给文件设置的reversion，清空缓存中的过期文件
3、各大浏览器对pwa的支持并不是很好，特别是手机端浏览器，还不能很好的支持service worker，离线消息推送的支持更差

