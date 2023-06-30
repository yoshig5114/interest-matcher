const { query } = require("express")
const connection = require("./index")

const query = (queryString, values)=>{
    return new Promise((res, rej)=>{
        connection.query(queryString, values, (err, results)=>{
            if(err) rej(err)
            else res(results)
        })
    })
}

module.exports = query;