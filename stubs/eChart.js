/**
 * ConnexCS Page
 * 
 * @module eChart
 * @namespace eChart
 * @class
 * @hideconstructor
 * @classdesc ConnexCS eChart Graph Component
 */

function eChart() {
	/**
		* Set Graph Option
		* @function setOption
		* @memberof eChart
		* @params {Object} option
		* @params {Boolean} notMerge - Optional. Default is false.
		* @params {Boolean} lazyUpdate - Opional. Default is false.
		* @return Returns options object
		* @description All parameters and data can be modified through setOption
		* notMerge - Whether not to merge with previous option. If true, all of the current components will be removed and new components will be created according to the new option.
		* lazyUpdate - Whether not to update chart immediately, stating update chart synchronously. If true, the chart will be updated in the next animation frame.
		* var option = {
		*		xAxis: [
		*			{ id: 'm', interval: 5 },
		*			{ id: 'n', name: 'nnn', interval: 6 }
		*			{ id: 'q', interval: 7 }
		*		]
		*	}
		* @example this.setOption(option, notMerge, lazyUpdate)
	*/
	function setOption (option = {}, notMerge = false, lazyUpdate = false) {
	}
	/**
		* Get Graph Option Object
		* @function getOption
		* @memberof eChart
		* @return Returns options object
		* @description Contains configuration item and data merged from previous setOption.
		* @example this.getOption()
	*/
	function getOption () {
	}
	/**
		* Resize Graph
		* @function resize
		* @memberof eChart
		* @description Resizes chart, which should be called manually when container size changes.
		* @example this.resize()
	*/
	function resize () {
	}
	/**
		* Show Loading Of Graph
		* @function showLoading
		* @memberof eChart
		* @description Shows loading animation effect.
		* @example this.showLoading()
	*/
	function showLoading () {
	}
	/**
		* Hide Loading Of Graph
		* @function hideLoading
		* @memberof eChart
		* @description Hides loading animation effect.
		* @example this.hideLoading()
	*/
	function hideLoading () {
	}
}
	