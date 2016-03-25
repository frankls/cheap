/*!
 * 足球圈子- 公共方法
 * 创建时间：2017-03-17
 * 作者：rongtao.lu
 */

var ajaxUtil = require('./util-ajax.js');
var Swiper = require('../lib/swiper.js');

var utilFn = {
	getPageInfo: function(name) {
		var v = document.querySelector('input[name=' + name + ']');
		return v && v.value;
	},

	initSlider: function(swiperOpt) {
		var swiper = new Swiper(swiperOpt.ele, {
			pagination: swiperOpt.page,
			loop: true,
			paginationClickable: true,
			observer: true,
    		observeParents: true,
    		slidesPerView:'auto'
		});
		if (swiperOpt.lock) {
			swiper.lockSwipes();
		}
	}
}

module.exports = utilFn;
