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
	* Dynamically Set Form Validation Rules In Dialog
	* @function setOptions
	* @memberof dialog
	* @param {Array} fields - Array of items
	* @param {Object} options - Key-Value Pairs
	* @example
	* var myDialog = this.getComponent('myDialog')
	* var fieldsArray = ['name']
	* var options = {required: true, placeholder: 'Enter Name', defaultValue: 'XYZ'}
	* myDialog.setOptions(fieldsArray, options)
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
	* var myData = {name: 'Joe Blogs', age: 30}
	* this.setData(myData)
	*/
	function setData (value) {
	}
	/**
	* Get Form Values From A Component
	* @function getValues
	* @memberof dialog
	* @returns {Object}
	* @description Get the values of all fields in the dialg
	* @example
	* var myDialog = this.getComponent('myDialog')
	* var data = myDialog.getValues()
	* console.log(data) // {name: 'XYZ', age: 28, country: 'United Kingdom'}
	*/
	function getValues () {
	}
	/**
	* Get A Value From An Object
	* @function getValue
	* @memberof dialog
	* @param {string} fieldName - Field Name
	* returns Value of the selected field
	* @returns 'Joe Blogs'
	* @example
	* var myData = {name: 'Joe Blogs', age: 30};
	* var myDialog = this.getComponent('myDialog')
	* var data = myDialog.getValue('name')
	* console.log(data) // 'Joe Blogs'
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
	* Display Form Fields In The Dialog.
	* @description This is opposite of {@link https://page-builder-api-docs.connexcs.com/dialog.html#.hide hide function}
	* @function display
	* @memberof dialog
	* @param {Array} fields - Array of items
	* @example
	* var myDialog = this.getComponent('myDialog')
	* var fieldsArray = ['name', 'age']
	* myDialog.display(fieldsArray)
	*/
	function display (fields) {
	}
	/**
	* Hide Form Fields In The Dialog.
	* This is opposite of {@link https://page-builder-api-docs.connexcs.com/dialog.html#.display display function}
	* @function hide
	* @description This is opposite of {@link https://page-builder-api-docs.connexcs.com/dialog.html#.display display function}
	* @memberof dialog
	* @param {Array} fields - Array of items
	* @example
	* var myDialog = this.getComponent('myDialog')
	* var fieldsArray = ['name', 'age']
	* myDialog.hide(fieldsArray)
	*/
	function hide (fields) {
	}
	/**
	* Disable Fields In The Dialog
	* @function disabled
	* @memberof dialog
	* @param {Array} fields - Array of items
	* @param {boolean} 
	* @description A disabled input field is unusable and un-clickable.
	* @example
	* // Disable Form Fields
	* var myDialog = this.getComponent('myDialog')
	* var disabledFieldsArray = ['name', 'age']
	* myDialog.disabled(disabledFieldsArray, true)
	* @example
	* // Enable Form Fields For User Interaction
	* var myDialog = this.getComponent('myDialog')
	* var disabledFieldsArray = ['name', 'age']
	* myDialog.disabled(disabledFieldsArray, false)
	*/
	function disabled (fields) {
	}
	/**
	* Set A Loading Spinner On Save Button
	* @function confirmLoading
	* @memberof dialog
	* @param {boolean} status
	* var myDialog = this.getComponent('myDialog')
	* @example
	* // Show Loading Spinner On Save Button
	* myDialog.confirmLoading(true)
	* // await [Do Some Work]	
	* // Hide Loading Spinner On Save Button
	* myDialog.confirmLoading(false)
*/
	function confirmLoading (status) {
	}
}
