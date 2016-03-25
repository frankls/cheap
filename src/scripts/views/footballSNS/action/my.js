/*!
 * 足球圈子-发现 view:my
 * 创建时间：2016-03-19
 * 作者：rongtao.lu
 */

var indexTpl = require('../tpl/my.string');

QApp.defineView('my', {
	html: indexTpl,
	plugins: ['delegated'],
	bindActions: {

	},
	bindEvents: {
		'beforeShow': function() {

		}
	}
});
