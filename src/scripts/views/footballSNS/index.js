/*!
 * 足球圈子-views入口
 * 创建时间：2016-03-17
 * 作者：rongtao.lu
 */

require('./action/guide.js');
require('./action/index.js');
require('./action/home.js');
require('./action/searching.js');
require('./action/my.js');

// Config
QApp.config({
  indexView: 'guide'
});
