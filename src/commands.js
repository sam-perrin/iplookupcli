require('dotenv').config();
const fetch = require("node-fetch");
const API_KEY = process.env.APIKEY

const fetchNow = async (ipAddress) => {
    const ipArray = ipAddress.split(',')
    if (ipArray.length > 1) {
        console.log("Bulk IP addresses not supported")
    }

    const response = await fetch(`http://api.ipapi.com/${ipAddress}?access_key=${API_KEY}`);

    const data = await response.json();
    console.log(data)
    // const now = {
    //     ipAddress: data.ip,
    //     type: data.type,
    //     country: data.country_name,
    //     city: data.city
    // }
    // console.log(now)
};

const myIp = async () => {
    const response = await fetch(`http://api.ipapi.com/check?access_key=${API_KEY}`)
    const data = await response.json();
    console.log(data)
};

module.exports = {
    fetchNow,
    myIp
  };