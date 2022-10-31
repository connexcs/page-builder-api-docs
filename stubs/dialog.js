/**
 * ConnexCS Dialog
 * 
 * @module Dialog
 * @namespace dialog
 * @class
 * @hideconstructor
 * @classdesc ConnexCS Dialog Component
 */

function dialog() {
	/**
		* Open The Dialog
		* @function open
		* @memberof dialog
		* @example
		* var myDialog = this.getComponent('myDialog')
		* myDialog.open()
	*/
	function open () {
	}
	/**
		* Close The Dialog
		* @function close
		* @memberof dialog
		* @example
		* var myDialog = this.getComponent('myDialog')
		* myDialog.close()
	*/
	function close () {
	}
	/**
		* Validate The Form In Dialog
		* @function validate
		* @memberof dialog
		* @example
		* var myDialog = this.getComponent('myDialog')
		* myDialog.validate()
	*/
	function validate () {
	}
	/**
		* Validate The Form In Dialog
		* @function setOptions
		* @memberof dialog
		* @example
		* var myDialog = this.getComponent('myDialog')
		* var fields = []
		* var options = []
		* myDialog.setOptions(fields, options)
	*/
	function setOptions (fields, options) {
	}
	/**
	* Set Data
	* @function setData
	* @memberof page
	* @param {Object} Value - Key-Value pair
	* @apiDescription setData can be used to populate a page/form with information stored in a key:value object
	* @example
	* var myData = {name: 'Joe Blogs', age: 30};
	* this.setData(myData);
	 */
	function setData (value) {
	},
	/**
		* Get Form Values From A Component
		* @function getValues()
		* @memberof dialog
		* @returns The Data
		* @example
		* var myDialog = this.getComponent('myDialog')
		* myDialog.getValues()
		* @description Get the values of all fields in the dialg
		* @returns {name: 'XYZ', age: 28, country: 'United Kingdom'}
	*/
	function getValues () {
	}
	/**
		* Get A Value From An Object
		* @function getValue
		* @memberof dialog
		* @param {string} fieldName - Field Name
		* returns Value of the selected field
		* @example
		* var myData = {name: 'Joe Blogs', age: 30};
		* var myDialog = this.getComponent('myDialog')
		* myDialog.getValue('name')
		* @returns 'Joe Blogs'
	*/
	function getValue (fieldName) {
	}
	/**
		* Clear Form Validation In Dialog
		* @function clearValidate
		* @memberof dialog
		* @example
		* var myDialog = this.getComponent('myDialog')
		* myDialog.clearValidate()
	*/
	function clearValidate () {
	}
	/**
		* Display Fields In The Dialog
		* @function display
		* @memberof dialog
		* @param {Array} fields - Array of items
		* @example
		* var myDialog = this.getComponent('myDialog')
		* var hideFieldsArray = ['name']
		* myDialog.display(hideFieldsArray)
	*/
	function display (fields) {
	}
	/**
		* Hide Fields In The Dialog
		* @function hide
		* @memberof dialog
		* @param [Array] fields - Array of items
		* @example
		* var myDialog = this.getComponent('myDialog')
		* var hideFieldsArray = ['name']
		* myDialog.hide(hideFieldsArray)
	*/
	function hide (fields) {
	}
	/**
		* Set A Spinner On Save Button
		* @function confirmLoading
		* @memberof dialog
		* @param [boolean] [status = false]
		* @example
		* var myDialog = this.getComponent('myDialog')
		* myDialog.confirmLoading(true)
	*/
	function confirmLoading (status) {
	}
}
