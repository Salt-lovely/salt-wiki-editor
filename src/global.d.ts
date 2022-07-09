/*
 * @Author: Salt
 * @Date: 2022-07-09 13:48:48
 * @LastEditors: Salt
 * @LastEditTime: 2022-07-09 23:11:58
 * @Description: 全局类型定义
 * @FilePath: \salt-wiki-editor\src\global.d.ts
 */
interface Window {
  we: any
  SaltWikiEditHelper: any
  SaltOriginalClass: any
}
declare var mw: MediaWiki
interface MediaWiki {
  Api: {
    new (): mwApi
  }
  config: mwConfig
  html: any
  loader: any
}
interface mwConfig {
  get(selection: string, fallback?: any)
  set(selection: string, value: string)
  exists(selection: string)
  values: any
}
interface mwApi {
  abort()
  postWithEditToken(params: any, additionalParams: any)
  getEditToken()
  get(parameters: object, ajaxOptions?: object): JQueryPromise
  create(title: string, params: any, content: any)
  edit(title: string, transform: any)
  newSection(title: string, header: any, message: any, additionalParams: any)
  postWithToken(s: string, params: any, additionalParams: any)
  getToken(s: string)
  watch(pages: string)
  unwatch(pages: string)
}
interface querySearchArray {
  ns: number
  title: string
  pagid: number
  size: number
  wordcount: number
  snippet: string
  timestamp: string
}
