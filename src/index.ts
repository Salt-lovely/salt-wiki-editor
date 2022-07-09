/*
 * @Author: Salt
 * @Date: 2022-07-09 13:46:28
 * @LastEditors: Salt
 * @LastEditTime: 2022-07-09 23:41:24
 * @Description: 这个文件的功能
 * @FilePath: \salt-wiki-editor\src\index.ts
 */
import SaltOriginalClass from './class/SaltOriginalClass'
import SaltWikiEditHelper from './class/SaltWikiEditHelper'
import { helpNote } from './constant/note'

window.we = new SaltWikiEditHelper('1.0.0', helpNote)
window.SaltWikiEditHelper = SaltWikiEditHelper
window.SaltOriginalClass = SaltOriginalClass
/*!
Copyright (c) 2022 Salt-lovely
salt-wiki-editor is licensed under Mulan PSL v2.
You can use this software according to the terms and conditions of the Mulan PSL v2. 
You may obtain a copy of Mulan PSL v2 at:
        http://license.coscl.org.cn/MulanPSL2 
THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.  
See the Mulan PSL v2 for more details.  
*/
/*!
// ==UserScript==
// @name         Wiki编辑工具
// @namespace    salt.is.lovely
// @version      1.0.0
// @description  Wiki编辑工具
// @author       Salt
// @match        https://mcbbs-wiki.cn/index.php?*
// @match        https://mcbbs-wiki.cn/wiki/*
// @match        https://wiki.biligame.com/mcplayer/*
// @grant        none
// ==/UserScript==
*/