/*
 * @Author: Azhou
 * @Date: 2020-06-15 15:10:57
 * @LastEditors: Azhou
 * @LastEditTime: 2020-06-17 14:57:13
 */
import { register } from 'register-service-worker';

const url = window.location.origin;

export default function(swDest) {
  register(`${swDest}`, {
    ready() {},
    registered() {},
    cached() {},
    updatefound() {},
    updated() {
      window.postMessage(
        {
          sw: true,
          updated: true,
        },
        url,
      );
    },
    offline() {
      console.log('当前处于离线状态');
    },
    error(error) {
      console.log('error', error);
    },
  });
}
