/**
 * ConnexCS Page
 * 
 * @module Page
 * @namespace page
 * @class
 * @hideconstructor
 * @classdesc ConnexCS Page Component
 */

function page() {
	/**
	* Refresh
	* @function refresh
	* @memberof page
	* @description refresh the form, when the form data changes, you need to call this method for re-render
	* @example
	* this.refresh()
	*/
	function refresh () {
	}
	/**
	* Set Data
	* @function setData
	* @memberof page
	* @param {Object} Value
	* @apiDescription setData can be used to populate a page/form with information stored in a key:value object
	* @example
	* var myData = {name: 'Joe Blogs', age: 30};
	* this.setData(myData);
	*/
	function setData (value) {
	}
	/**
	* Get Form Data From A Component
	* @function getData
	* @memberof page
	* @param {Boolean} [isValidate = true]
	* @returns {Promise<Object>} All of the form data
	* @example
	* Validate form data Object by default
	* try {
	*	var data = await this.getData()
	*	// if success returns validated data as an object {name: 'XYZ'}
	*} catch (err) {
	*	// returns  err message
	*}
	}
	* @example
	* var data = await this.getData(false)
	* // data contains {name: 'XYZ'}
	* @description To get form data
	*/
	function getData (value) {
	}
	/**
	* Reset Form Fields Data
	* @function reset
	* @memberof page
	* @apiDescription Reset form fields
	* @example
	* this.reset()
	*/
	function reset () {
	}
	/**
	* Hide Fields
	* @function hide
	* @memberof page
	* @param {Array} fields - ['name', 'age']
	* @apiDescription Hide the fields
	* @description This is opposite of {@link https://page-builder-api-docs.connexcs.com/page.html#.display display function}
	* @example
	* var formData = {name: 'XYZ', age: 28, country: 'England'}
	* var fields = ['name', 'age']
	* this.hide(fields)
	* // Displays only 'country' field in the form
	*/
	function hide (fields) {
	}
	/**
	* Display/Show Fields
	* @function display
	* @memberof page
	* @param {Array} fields
	* @apiDescription Display/Show the fields
	* @description This is opposite of {@link https://page-builder-api-docs.connexcs.com/page.html#.hide hide function}
	* @example
	* var formData = {name: 'XYZ', age: 28, country: 'England'}
	* var fields = ['name', 'age']
	* this.display(fields)
	* // Displays only 'name' and 'age' fields in the form
	*/
	function display (fields) {
	}
	/**
	* Disable Fields
	* @function disabled
	* @memberof page
	* @param {Array} fields
	* @param {Boolean} disabled - true/false
	* @apiDescription Disable the fields
	* @description Dynamically set whether a form field is disabled
	* @example
	* // Disable name and age fields from user interaction
	* var formData = {name: 'XYZ', age: 28, country: 'England'}
	* var fields = ['name', 'age']
	* this.disabled(fields, true)
	* // 'name' and 'age' fields in the form are unclickable and unchangeable
	* @example
	* // Enable name and age fields for user interaction
	* this.disabled(fields, false)
	* // 'name' and 'age' fields in the form are now enabled for user interaction
	*/
	function disabled (fields, disabled) {
	}
	/**
	* Get A Component
	* @function getComponent
	* @memberof page
	* @param {string} name - The component name
	* @description 'dialog' is the ID field in the 'Component Attribute' tab
	* @returns {Object} - Component Object
	* @example
	* var myDialog = this.getComponent('myDialog')
	* // myDialog component object
	*/
	function getComponent (name) {
	}
	/**
	* Add style class to form item
	* @function addClassName
	* @memberof page
	* @param {Array} fields
	* @param {Boolean} disabled - true/false
	* @description This is opposite of {@link https://page-builder-api-docs.connexcs.com/page.html#.removeClassName removeClassName function}
	* @example
	* var formData = {name: 'XYZ', age: 28, country: 'England'}
	* .custom-style {
	*	background: red;		
	* }
	* var className = 'custom-style'
	* var fields = ['name', 'age']
	* this.addClassName(fields, className)
	* // Now the 'background color' of Name and Age fields are 'red' in color
	*/
	function addClassName (name) {
	}
	/**
	* Remove form item style class
	* @function removeClassName
	* @memberof page
	* @param {Array} fields
	* @param {Boolean} disabled - true/false
	* @description This is opposite of {@link https://page-builder-api-docs.connexcs.com/page.html#.addClassName addClassName function}
	* @example
	* var formData = {name: 'XYZ', age: 28, country: 'England'}
	* .custom-style {
	*	background: red;		
	* }
	* var className = 'custom-style'
	* var fields = ['name', 'age']
	* this.removeClassName(fields, className)
	* // Now the 'background color' of Name and Age fields are not 'red' in color
	*/
	function removeClassName (name) {
	}
	/**
	* Get Form Values From A Component
	* @function getValues
	* @memberof dialog
	* @returns {Object}
	* @description Get the values of all fields in the dialg
	* @example
	* var data = this.getValues()
	* console.log(data) // {name: 'XYZ', age: 28, country: 'England'}
	*/
	function getValues () {
	}
	/**
	* Get A Value From An Object
	* @function getValue
	* @memberof page
	* @params {string} fieldName - Field Name
	* returns Value of the selected field
	* @example
	* var myData = {name: 'Joe Blogs', age: 30};
	* this.getValue('name')
	* @returns 'Joe Blogs'
	*/
	function getValue (fieldName) {
	}
	/**
	* Set Rules For A Field
	* @function setRules
	* @memberof page
	* @params {string} field
	* @params {Array} rules
	* @example
	* var field = 'name'
	* var rules = [
	* { required: true, message: 'Name is requried' }
	* ]
	* this.setRules(field, rules)
	*/
	function setRules (field, rules) {
	}
	/**
	* Delete Component
	* @function deleteComponentInstance
	* @memberof page
	* @params {string} key
	* @example - Delete a Dialog Component
	* this.deleteComponentInstance('dialog')
	* @description Deletes the component if it exists
	*/
	function deleteComponentInstance (key) {
	}
}
