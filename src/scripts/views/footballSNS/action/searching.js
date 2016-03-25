/*!
 * 足球圈子-发现 view:searching
 * 创建时间：2016-03-19
 * 作者：rongtao.lu
 */

var indexTpl = require('../tpl/searching.string');

QApp.defineView('searching', {
	html: indexTpl,
	plugins: ['delegated'],
	bindActions: {

	},
	bindEvents: {
		'beforeShow': function() {

		}
	}
});
