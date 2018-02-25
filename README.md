# Promise 回调函数操作

```javascript
import {judge, pickUp} from '@jt/promise-operators';
import _ from 'lodash';

async function test() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: 0,
          result: {
            list: []
          }
        })
      }, 1000);
    })
    .then(judge(_.isObject))
    .then(pickUp(res=>res.result));
  } catch(error) {
    console.log('请求接口错误');
  }
}
```