const localStorage = require('localStorage');

module.exports = function(pool) {
    let username = "";

    function getUsername() {
        return username;
    }

    async function customerList() {
        console.log("LISTING CUSTOMER DATA");
        const result = await pool.query("select * from customer order by username asc");
        return result.rows;
    }

    async function createCustomer(name) {
        username = name;
        console.log("INSERTING DATA");
        await pool.query('insert into customer (username) values ($1)', [name]);
        console.log("Customer succcessfully added");
    }

    async function getCustomer(name) {
        const result = await pool.query("select * from customer where username = $1 ", [name]);
        return result.rows[0];
    }

    function createFruit(fruit){
        console.log("ON CREATE FRUIT");
        let fruits = [];
        fruits.push(fruit);
        localStorage.setItem('fruits', JSON.stringify(fruits));
    }

    function readList() {

    }

    function updateFruit(){

    }

    function deleteList(){

    }



    
    return {
        createCustomer,
        getCustomer,
        getUsername,
        customerList,
        createFruit,
        readList,
        updateFruit,
        deleteList



    }

}
