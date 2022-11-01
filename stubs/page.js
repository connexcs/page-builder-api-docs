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
	* @description refreshs the data
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
	* Get A Component
	* @function getComponent
	* @memberof page
	* @param {string} name - The component name
	* @returns {Object} - Component Object
	* @example
	* this.getComponent('dialog')
	* @description 'dialog' is the ID field in the 'Component Attribute' tab
	*/
	function getComponent (name) {
	}
	/**
	* Get Form Values From A Component
	* @function getValues
	* @memberof page
	* @returns The Data
	* @example
	* this.getComponent('dialog').getValues()
	* @example
	* var dialog = this.getComponent('dialog')
	* dialog.getValues()
	* @description To get form data values from a component
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
