import SaltOriginalClass from './SaltOriginalClass'

const { log } = console

export default class SaltWikiEditHelper extends SaltOriginalClass {
  constructor(ver?: string, note?: string) {
    super(ver, note)
    // 检查mw.Api原型的方法
    this.addPlugin()
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
  /** addPlugin: 给mw.Api的原型添加方法——垫片代码来自官方文档 */
  async addPlugin() {
    await this.waitMwApi() // 等待mw和mw.Api加载完毕
    const mwApiInst = new mw.Api()
    if (typeof mwApiInst.postWithEditToken !== 'function') {
      log('mw.Api原型没有postWithEditToken方法，自动加载...')
      mw.Api.prototype.postWithEditToken = function (p: any, a: any): any {
        return this.postWithToken('csrf', p, a)
      }
    }
    if (typeof mwApiInst.getEditToken !== 'function') {
      log('mw.Api原型没有getEditToken方法，自动加载...')
      mw.Api.prototype.getEditToken = function (): any {
        return this.getToken('csrf')
      }
    }
    if (typeof mwApiInst.create !== 'function') {
      log('mw.Api原型没有create方法，自动加载...')
      mw.Api.prototype.create = function (
        title: string,
        params: any,
        content: any
      ): any {
        return this.postWithEditToken(
          $.extend(
            this.assertCurrentUser({
              action: 'edit',
              title: String(title),
              text: content,
              formatversion: '2',
              createonly: true,
            }),
            params
          )
        ).then(function (data: any) {
          return data.edit
        })
      }
    }
    if (typeof mwApiInst.edit !== 'function') {
      log('mw.Api原型没有edit方法，自动加载...')
      mw.Api.prototype.edit = function (title: string, transform: any): any {
        var basetimestamp: any,
          curtimestamp: any,
          api = this
        title = String(title)
        return api
          .get({
            action: 'query',
            prop: 'revisions',
            rvprop: ['content', 'timestamp'],
            titles: [title],
            formatversion: '2',
            curtimestamp: true,
          })
          .then(function (data: any) {
            var page, revision
            if (!data.query || !data.query.pages) {
              return $.Deferred().reject('unknown')
            }
            page = data.query.pages[0]
            if (!page || page.invalid) {
              return $.Deferred().reject('invalidtitle')
            }
            if (page.missing) {
              return $.Deferred().reject('nocreate-missing')
            }
            revision = page.revisions[0]
            basetimestamp = revision.timestamp
            curtimestamp = data.curtimestamp
            return transform({
              timestamp: revision.timestamp,
              content: revision.content,
            })
          })
          .then(function (params: any) {
            var editParams =
              typeof params === 'object' ? params : { text: String(params) }
            return api.postWithEditToken(
              $.extend(
                {
                  action: 'edit',
                  title: title,
                  formatversion: '2',
                  assert: mw.config.get('wgUserName') ? 'user' : undefined,
                  basetimestamp: basetimestamp,
                  starttimestamp: curtimestamp,
                  nocreate: true,
                },
                editParams
              )
            )
          })
          .then(function (data: any) {
            return data.edit
          })
      }
    }
    if (typeof mwApiInst.newSection !== 'function') {
      log('mw.Api原型没有newSection方法，自动加载...')
      mw.Api.prototype.newSection = function (
        title: string,
        header: any,
        message: any,
        additionalParams: any
      ): any {
        return this.postWithEditToken(
          $.extend(
            {
              action: 'edit',
              section: 'new',
              title: String(title),
              summary: header,
              text: message,
            },
            additionalParams
          )
        )
      }
    }
  }
}
