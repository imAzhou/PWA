/*
 * @Author: Azhou
 * @Date: 2020-06-15 15:10:57
 * @LastEditors: Azhou
 * @LastEditTime: 2020-06-17 10:57:13
 */
import {
  setCacheNameDetails,
  clientsClaim,
  skipWaiting,
  cacheNames,
} from 'workbox-core';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { createHandlerBoundToURL } from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkOnly } from 'workbox-strategies';
import { BroadcastUpdatePlugin } from 'workbox-broadcast-update';

// 设置缓存名称
setCacheNameDetails({
  prefix: 'creams',
  suffix: 'v0.1.1',
});

// 更新时自动生效
clientsClaim();
skipWaiting();

// 预缓存文件，self.__WB_MANIFEST是workbox生成的文件地址数组，项目中打包生成的所有静态文件都会自动添加到里面
const fileLists = self.__WB_MANIFEST || [];
precacheAndRoute(fileLists);

// registerRoute(navigationRoute);
// 运行时缓存配置
// 接口数据使用服务端数据
// registerRoute(/^api/, new NetworkOnly());

//图片cdn地址，属于跨域资源，我们使用StaleWhileRevalidate缓存策略
// registerRoute(/^https:\/\/img.xxx.com\//, new StaleWhileRevalidate());

// self.addEventListener('install', event => {
//   event.waitUntil(self.skipWaiting());
// });

self.addEventListener('activate', async e => {
  const { precache } = cacheNames;
  const fileHash = fileLists.map(v => v.revision);
  e.waitUntil(
    Promise.all[
      async () => {
        const cacheStorage = await caches.open(precache);
        const requests = await cacheStorage.keys();
        const reqName = requests.map(v => v.url);
        reqName.map(v => {
          const _version = v.split('=')[1];
          if (!fileHash.includes(_version)) return caches.delete(v);
        });
      }
    ],
  );
});
