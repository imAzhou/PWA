import React, { useEffect } from 'react';
import styles from './index.less';
import { Button, Modal, WhiteSpace, Flex, Toast } from 'antd-mobile';

window.addEventListener('message', e => {
  if (e.data && e.data.sw && e.data.updated) {
    Modal.alert('提示', '有新的版本，请刷新页面', [
      { text: '确定', onPress: () => window.location.reload() },
    ]);
  }
});

export default () => {
  const handleClick = () => {
    console.log(123);
  };
  return (
    <div>
      <WhiteSpace />
      <Flex justify="center">
        <img
          style={{ width: 69, height: 69 }}
          src={require('@/assets/creams-logo.png')}
        />
      </Flex>
      <WhiteSpace />
      <Button type="primary" onClick={handleClick}>
        允许离线推送
      </Button>
    </div>
  );
};
