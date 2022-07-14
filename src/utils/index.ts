/*
 * @Author: Salt
 * @Date: 2022-07-09 13:51:15
 * @LastEditors: Salt
 * @LastEditTime: 2022-07-10 14:46:05
 * @Description: 统一导出
 * @FilePath: \salt-wiki-editor\src\utils\index.ts
 */
import { prefix } from 'src/constant/note'
import { useConsole } from './utils'

const saltConsole = useConsole(prefix)

export { assert, sleep, useConsole } from './utils'
export { saltConsole }
