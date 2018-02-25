/**
 * 操作函数集合
 */
import { isFunction } from 'lodash';

/**
 * 判断是否为正确的类型
 * @param {Function} is 判断函数
 */
export function judge(is) {
  return (result) => {
    if (isFunction(is) && is(result)) {
      return result;
    }

    throw result;
  };
}

export function pickUp(fn) {
  return (res) => {
    if (isFunction(fn)) {
      return fn(res);
    }

    throw res;
  };
}
