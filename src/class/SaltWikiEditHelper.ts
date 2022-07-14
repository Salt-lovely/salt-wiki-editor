/*
 * @Author: Salt
 * @Date: 2022-07-09 15:13:33
 * @LastEditors: Salt
 * @LastEditTime: 2022-07-10 14:47:22
 * @Description: 有实用方法的类
 * @FilePath: \salt-wiki-editor\src\class\SaltWikiEditHelper.ts
 */
import SaltOriginalClass from './SaltOriginalClass'
import { saltConsole } from 'Utils/index'

const { log } = saltConsole

/**
 * 实现了实用方法
 */
export default class SaltWikiEditHelper extends SaltOriginalClass {
  constructor(ver?: string, note?: string) {
    super(ver, note)
    // 完成构造
    log('构造完成...')
  }

  pageReplace(before: any = /$/, after = '', sum?: string) {
    this.pageEdit({
      before,
      after,
      sum: sum || `替换 “${before}” 为 “${after}”`,
    })
  }
  pageReplaceAll(content = '', sum?: string) {
    this.pageEdit({
      before: /[\S\s]*/g,
      after: content,
      sum: sum || `整页替换为 “${content}”`,
    })
  }
  pageAppend(content = '', sum?: string) {
    this.pageEdit({
      before: /$/,
      after: content,
      sum: sum || `添加 “${content}” 到页尾`,
    })
  }
  pagePrepend(content = '', sum?: string) {
    this.pageEdit({
      before: /^/,
      after: content,
      sum: sum || `添加 “${content}” 到页首`,
    })
  }

  wikiReplace(pages = '', before: any = /$/, after = '', timeInterval = 500) {
    this.wikiEdit({
      pages,
      before,
      after,
      timeInterval,
      sum: `批量替换：替换 “${before}” 为 “${after}”`,
    })
  }
  wikiAppend(pages = '', content = '', timeInterval = 500) {
    this.wikiEdit({
      pages,
      before: /$/,
      after: content,
      timeInterval,
      sum: `批量添加：添加 “${content}” 到页尾`,
    })
  }
  wikiPrepend(pages = '', content = '', timeInterval = 500) {
    this.wikiEdit({
      pages,
      before: /^/,
      after: content,
      timeInterval,
      sum: `批量添加：添加 “${content}” 到页首`,
    })
  }

  searchMain(str: string, limit: string = 'max') {
    this.wikiSearch(str, '0', limit)
  }
  searchUserpage(str: string, limit: string = 'max') {
    this.wikiSearch(str, '2', limit)
  }
  searchProject(str: string, limit: string = 'max') {
    this.wikiSearch(str, '4', limit)
  }
  searchFile(str: string, limit: string = 'max') {
    this.wikiSearch(str, '6', limit)
  }
  searchMediaWiki(str: string, limit: string = 'max') {
    this.wikiSearch(str, '8', limit)
  }
  searchTemplate(str: string, limit: string = 'max') {
    this.wikiSearch(str, '10', limit)
  }
  searchHelp(str: string, limit: string = 'max') {
    this.wikiSearch(str, '12', limit)
  }
  searchCategory(str: string, limit: string = 'max') {
    this.wikiSearch(str, '14', limit)
  }
  searchWidget(str: string, limit: string = 'max') {
    this.wikiSearch(str, '274', limit)
  }
  searchGadget(str: string, limit: string = 'max') {
    this.wikiSearch(str, '2300', limit)
  }

  searchMainTitle(str: string, limit: string = 'max') {
    this.wikiSearchTitle(str, '0', limit)
  }
  searchUserpageTitle(str: string, limit: string = 'max') {
    this.wikiSearchTitle(str, '2', limit)
  }
  searchProjectTitle(str: string, limit: string = 'max') {
    this.wikiSearchTitle(str, '4', limit)
  }
  searchFileTitle(str: string, limit: string = 'max') {
    this.wikiSearchTitle(str, '6', limit)
  }
  searchMediaWikiTitle(str: string, limit: string = 'max') {
    this.wikiSearchTitle(str, '8', limit)
  }
  searchTemplateTitle(str: string, limit: string = 'max') {
    this.wikiSearchTitle(str, '10', limit)
  }
  searchHelpTitle(str: string, limit: string = 'max') {
    this.wikiSearchTitle(str, '12', limit)
  }
  searchCategoryTitle(str: string, limit: string = 'max') {
    this.wikiSearchTitle(str, '14', limit)
  }
  searchWidgetTitle(str: string, limit: string = 'max') {
    this.wikiSearchTitle(str, '274', limit)
  }
  searchGadgetTitle(str: string, limit: string = 'max') {
    this.wikiSearchTitle(str, '2300', limit)
  }
}
