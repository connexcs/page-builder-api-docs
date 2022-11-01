/**
 * ConnexCS Database
 * 
 * @module Database
 * @namespace database
 * @class
 * @hideconstructor
 * @classdesc ConnexCS Database Component
 */

function database() {
	/**
	* Get All The Records From Database
	* This is a database function in page.js. {@link https://page-builder-api-docs.connexcs.com/page.html#.database Click Here}
	* @function list
	* @memberof dialog
	* @example
	* // Get all the records from a database 'customer'
	* var myDatabase = this.database('customer')
	* myDatabase.list()
	* @returns {Array}
	* try {
	*	var myDatabase = this.database('customer')
	*	var res = await myDatabase.list()
	*	//  Returns all the records as array of objects (key-value pair)
	* } catch (err) {
	*	// Error
	* }
	* @returns {Promise<Array>} If Success returns Database Records or Failure
	*/
	function list () {
	}
	/**
	* Create A Record In Customer Database
	* @function create
	* @memberof dialog
	* @param {Object} data
	* @example
	* // Create a record
	* try {
	*	var data = {name: 'XYZ', age: 24}
	*	var myDatabase = this.database('customer')
	*	await myDatabase.create(data)
	* } catch (err) {
	*	// Error
	* }
	* @returns {Promise<Boolean>} Validation Success or Failure
	*/
	function create (rowData) {
	}
	/**
	* Read a record, by an id
	* @function read
	* @memberof dialog
	* @param {Number} id
	* @example
	* try {
	*	var myDatabase = this.database('customer')
	*	var id = 24
	*	var res = await myDatabase.read(id)
	*	// Returns Response Object - {id: 24, name: 'Customer 1', age: 28, country: 'England'}
	* } catch (err) {
	*	// Error
	* }
	* @returns {Object}
	*/
	function read (id) {
	}
	/**
	* Update a record
	* @function update
	* @memberof dialog
	* @param {Number} id - Record Id
	* @param {Object} updatedData - key-value pair
	* @example
	* try {
	*	var myDatabase = this.database('customer')
	*	var updatedData = {id: 24, name: 'XYZ-1'}
	*	await myDatabase.update(updatedData.id, updatedData)
	* } catch (err) {
	*	// Error
	* }
	* this.database('customer').update(updatedData.id, updatedData)
	* @returns {Promise<Boolean>} Validation Success or Failure
	*/
	function update (id, updatedData) {
	}
	/**
	* // Delete a record by id
	* @function cxDelete
	* @memberof dialog
	* @param {Number} id
	* @example
	* try {
	*	var myDatabase = this.database('customer')
	*	var id = 24
	*	var res = await myDatabase.cxDelete(id)
	*	// Returns Success
	* } catch (err) {
	*	// Error
	* }
	* @returns {Promise<Boolean>} Validation Success or Failure
	*/
	function cxDelete (id) {
	}
}
