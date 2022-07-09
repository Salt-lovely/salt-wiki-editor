/*
 * @Author: Salt
 * @Date: 2022-07-09 13:51:11
 * @LastEditors: Salt
 * @LastEditTime: 2022-07-09 20:40:47
 * @Description: 这个文件的功能
 * @FilePath: \salt-wiki-editor\src\utils\utils.ts
 */
/**
 * 断言某个状态，如果状态为假则抛出错误
 * @param condition 需要断言的表达式
 * @param msg 报错文案
 */
export function assert(condition: any, msg?: string): asserts condition {
  if (!condition) throw new Error(msg || '发生错误')
}
/**
 * 返回一个一定时间后解决的Promise，用于异步函数的休眠
 * @param time 休眠时间，默认为500毫秒
 */
export function sleep(time?: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, time || 500))
}
/** 用一个对象 */
export function extend<T extends object, K extends Partial<T>>(
  obj: T,
  ext: K,
  force = false
): T {
  for (const key in ext) {
    if (force || !(key in obj)) {
      Object.defineProperty(obj, key, {
        value: ext[key],
        enumerable: false,
      })
    }
  }
  return obj
}
