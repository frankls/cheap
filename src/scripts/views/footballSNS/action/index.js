/*!
 * 足球圈子-容器页面 view:index
 * 创建时间：2016-03-19
 * 作者：rongtao.lu
 */

var indexTpl = require('../tpl/index.string');

var _ = QApp.util;

var TAGS = ['home', 'searching', 'my'];

QApp.defineView('index', {
	html: indexTpl,

	// 配置 嵌套
    modules: [{
    	name: 'content',
    	container: '.m-index-body',
    	views: TAGS,
    	defaultTag: 'home'
    }],

	plugins: ['doms', 'delegated'],

	// 初始化
    init: {
    	// 当前 Tag（所在的 Tab ）
        curTag: 'home',

    	// 切换 Tab
        switchTab: function( tag ) {
            if (TAGS.indexOf(tag) > -1) {
                _.removeClass(this.doms[this.curTag], 'active');
                _.addClass(this.doms[tag], 'active');

                // 切换视图
                this.modules.content.launch(tag);

                // 设定当前 Tag
                this.curTag = tag;
            }
        }
    },

	bindActions: {
		'tab.switch': function(e, data) {
            this.switchTab(data.tag);
        },
        'exit': function(){
            this.hide();
        }
	},

	bindEvents: {
		'beforeShow': function() {

		}
	}
});
