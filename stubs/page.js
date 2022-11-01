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
	* Hide Fields. This is opposite of {@link https://page-builder-api-docs.connexcs.com/page.html#.display display function}
	* @function hide
	* @memberof page
	* @param {Array} fields - ['name', 'age']
	* @apiDescription Hide the fields
	* @example
	* var formData = {name: 'XYZ', age: 28, country: 'England'}
	* var fields = ['name', 'age']
	* this.hide(fields)
	* // Displays only 'country' field in the form
	*/
	function hide (fields) {
	}
	/**
	* Display/Show Fields. This is opposite of {@link https://page-builder-api-docs.connexcs.com/page.html#.hide hide function}
	* @function display
	* @memberof page
	* @param {Array} fields
	* @apiDescription Display/Show the fields
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
	* Add style class to form item. This is opposite of {@link https://page-builder-api-docs.connexcs.com/page.html#.removeClassName removeClassName function}
	* @function addClassName
	* @memberof page
	* @param {Array} fields
	* @param {Boolean} disabled - true/false
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
	* Remove form item style class. This is opposite of {@link https://page-builder-api-docs.connexcs.com/page.html#.addClassName addClassName function}
	* @function removeClassName
	* @memberof page
	* @param {Array} fields
	* @param {Boolean} disabled - true/false
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
	* @param {string} fieldName - Field Name
	* @returns 'Joe Blogs'
	* @example
	* var myData = {name: 'Joe Blogs', age: 30};
	* this.getValue('name')
	*/
	function getValue (fieldName) {
	}
	/**
	* send a request to GET, POST, PUT, DELETE
	* @function sendRequest
	* @memberof page
	* @param {string} name
	* @param {Object} args - arguments, datasource parameters
	* @param {Object} extendOptions - extendOptions
	* @returns {Promise<Boolean>} Validation Success or Failure
	* @example
	* try {
	*	var res = await this.sendRequest('customer')
	*	// if success returns response and data as an array [{id: 1, name: 'XYZ'}, {id: 2, name: 'JOE'}]
	*} catch (err) {
	*	// returns  err message
	*}
	*/
	function sendRequest (name, args) {
	}
	/**
	* Access database for List(get all records), Read (get a record), Update (update a record), Delete (delete a record).
	* This is an Object of functions. {@link https://page-builder-api-docs.connexcs.com/database.html Click Here}
	* @function database
	* @memberof page
	* @param {string} name - Database name
	*/
	function database (name) {
	}
	/**
	* Access scriptForge
	* @function scriptForge
	* @memberof page
	* @param {string} name - script forge name
	* @param {Object} data
	* @param {string} fn - function name
	* @param {Object} args - arguments
	* @returns {Promise<Boolean>} Validation Success or Failure
	*/
	function scriptForge (name = '', data = {}, fn = '', args = {}) {
	}
	/**
	* Set Form Field Validation Rules
	* @function setRules
	* @memberof page
	* @param {string} field
	* @param {Array} rules - Array of Objects
	* @example
	// Make Name as a required field
	* var field = 'name'
	* var rules = [
	* { required: true, message: 'Name is requried' }
	* ]
	* this.setRules(field, rules)
	* @example
	* // Remove name as a required field
	* var field = 'name'
	* var rules = [
	* { required: false }
	* ]
	* this.setRules(field, rules)
	*/
	function setRules (field, rules) {
	}
	/**
	* Set Form Field Configuration Item
	* @function setOptions
	* @memberof page
	* @param {Array} fields
	* @param {Object} options - key-value pair
	* @example
	* // Make Name field: Have a default value, a placeholder and as required
	* var formData = {name: '', age: 28, country: 'England'}
	* var field = ['name']
	* var options = {defaultValue: 'Default Name', placeholder: 'Name', required: true}
	* this.setOptions(fields, options)
	*/
	function setOptions (fields, options) {
	}
	/**
	* Dynamic option data assignment
	* @function setOptionData
	* @param {Array} fields
	* @memberof page
	* @param {Object} newData - key-value pair
	* @example
	* // pending
	* var formData = {name: '', age: 28, country: 'England'}
	* var field = ['name']
	* var newData = {}
	* this.setOptionData(fields, newData)
	* Ask Jon
	*/
	function setOptionData (fields, newData) {
	}
	/**
	* Refresh the datasource data bound to the form field
	* @function refreshFieldDataSource
	* @memberof page
	* @param {String} field - Datasource name
	* @param {Object} args - key-value pair
	* @example
	* Get Provider Rate Cards When Provider Field Is selected
	* var providerId = 1789
	* var providerRateCards = this.refreshFieldDataSource('card', {id: providerId})
	* @retuns Array of objects (key-value pairs)
	* // Returns array of objects [
	* //	{key: 23, value: 'Provider Rate Card 1'},
	* //	{key: 28, value: 'Provider Rate Card 3'}
	]
	*/
	function refreshFieldDataSource (field, args) {
	}
	/**
	* Validate Form Fields
	* @function validate
	* @memberof page
	* @param {Array} [fields = []]
	* @returns {Promise<Boolean>} Validation Success or Failure
	* @example
	* Validate Only A Set Of Array Of Fields
	* var formData = {name: '', age: 28, country: 'England'}
	* var fields = ['name', 'age']
	* this.validate(fields)
	* @example
	* If No Array Of Fields, Validates The Entire Form
	* this.validate()
	* @description Validates the form data or a key-value pair
	* // Returns Both The Success And Failure Results
	*/
	function validate (fields) {
	}
/*
	/**
	* Call The JS Event Of The Form Configuration
	function triggerEvent (eventName, args) {
	}
	/**
	* Delete Component
	* @function deleteComponentInstance
	* @memberof page
	* @param {string} key
	* @example - Delete a Dialog Component
	* this.deleteComponentInstance('dialog')
	* @description Deletes the component if it exists
	function deleteComponentInstance (key) {
	}
	*/
}
