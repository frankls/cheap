/*!
 * 足球圈子-首页 view:home
 * 创建时间：2016-03-19
 * 作者：rongtao.lu
 */

var indexTpl = require('../tpl/home.string');
var utilAjax = require('../util/util-ajaxf.js');
require('../lib/dropload.js');
require('../lib/swiper-3.3.1.min.js');
var flist;

QApp.defineView('home', {
	html: indexTpl,
	plugins: ['delegated', 'ajax', {
		name: 'avalon',
		options: function(vm) {
			vm.list = [];
		}
	}],

	init: {
		vm: null
	},

	bindActions: {},

	bindEvents: {
		'beforeShow': function() {
			var self = this;
			self.vm = this.getVM();
			flist = self.vm;
			utilAjax.query({
				url: "/interface/getHomeTimeList.do",
				success: function(rs) {
					self.vm.list = rs.goods;
				},
			});
			
		},
		'show': function() {
			var itemIndex = 0;
			var tab1LoadEnd = false;
			var tab2LoadEnd = false;
			var tab3LoadEnd = false;
			var counter = 0;
			var list1 = list2 = list3 = [];//???3 [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN]
			// 每页展示4个
			var num = 1;
			var pageStart = 0,
				pageEnd1 = 0;
			// tab
			$('.nav .item').on('tap', function() {
				var $this = $(this);
				itemIndex = $this.index();
				$this.addClass('active').siblings('.item').removeClass('active');
				$('.lists').eq(itemIndex).show().siblings('.lists').hide();
				// 如果选中菜单一
				tab2LoadEnd = tab3LoadEnd = tab1LoadEnd = false;
				if (itemIndex == '0') {
					// 如果数据没有加载完
					if (!tab1LoadEnd) {
						// 解锁
						dropload.unlock();
						dropload.noData(false);
					} else {
						// 锁定
						dropload.lock('down');
						dropload.noData();
					}
					// 如果选中菜单二
				} else if (itemIndex == '1') {
					if (!tab2LoadEnd) {
						// 解锁
						dropload.unlock();
						dropload.noData(false);
					} else {
						// 锁定
						dropload.lock('down');
						dropload.noData();
					}
				} else if (itemIndex == '2') {
					if (!tab3LoadEnd) {
						// 解锁
						dropload.unlock();
						dropload.noData(false);
					} else {
						// 锁定
						dropload.lock('down');
						dropload.noData();
					}
				}
				// 重置
				dropload.resetload();
			});



			// dropload
			var dropload = $('.content').dropload({
				scrollArea: window,
				loadDownFn: function(me) {
					// 加载菜单一的数据
					if (itemIndex == '0') {
						utilAjax.query({
							url: "/interface/getHomeNewList.do",
							success: function(rs) {
								var result = rs.goods;
								var len = result.length;
								flist.list = result;
								console.info('new', result);
								counter++;
								pageEnd = num * counter;
								pageStart = pageEnd - num;
								if (pageStart <= result.length) {
									for (var i = pageStart; i < pageEnd; i++) {
										list1[i] += result[len--];
										if ((i + 1) >= result.length) {
											// 数据加载完
											tab1LoadEnd = true;
											// 锁定
											me.lock();
											// 无数据
											me.noData();
											break;
										}
									}
									// 为了测试，延迟1秒加载
									setTimeout(function() {
										flist.list += list1;
										console.info("1", flist.list1);
										// 每次数据加载完，必须重置
										me.resetload();
									}, 5000);
								}
							}
						});
						// 加载菜单二的数据
					} else if (itemIndex == '1') {
						utilAjax.query({
							url: "/interface/getHomeTopList.do",
							success: function(rs) {
								var result = rs.goods;
								var len = result.length;
								flist.list = result;
								console.info('top', result);
								counter++;
								pageEnd = num * counter;
								pageStart = pageEnd - num;
								if (pageStart <= result.length) {
									for (var i = pageStart; i < pageEnd; i++) {
										list2[i] += result[len--];
										if ((i + 1) >= result.length) {
											// 数据加载完
											tab2LoadEnd = true;
											// 锁定
											me.lock();
											// 无数据
											me.noData();
											break;
										}
									}
									// 为了测试，延迟1秒加载
									setTimeout(function() {
										flist.list += list2;
										console.info("2", flist.list);
										// 每次数据加载完，必须重置
										me.resetload();
									}, 5000);
								}
							}
						});
						// 加载菜单三的数据
					} else if (itemIndex == '2') {
						utilAjax.query({
							url: "/interface/getHomeTimeList.do",
							success: function(rs) {
								var result = rs.goods;
								var len = result.length;
								flist.list = result;
								console.info('time', result);
								counter++;
								pageEnd = num * counter;
								pageStart = pageEnd - num;
								if (pageStart <= result.length) {
									for (var i = pageStart; i < pageEnd; i++) {
										list3[i] += result[len--];
										if ((i + 1) >= result.length) {
											// 数据加载完
											tab3LoadEnd = true;
											// 锁定
											me.lock();
											// 无数据
											me.noData();
											break;
										}
									}
									// 为了测试，延迟1秒加载
									setTimeout(function() {
										flist.list += list3;
										console.info("3", flist.list);
										// 每次数据加载完，必须重置
										me.resetload();
									}, 5000);
								}
							}
						});
					}
				}
			});
		
		
			//
		}
	}
});