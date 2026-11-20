console.log("Hello from Node.js");

console.log("Node.js application started");

const a = 10;
const b = 20;

console.log("Sum:", a + b);


console.log("Hello Node.js");

// Global object
global.appName = "My Backend Application";

console.log(global.appName);

// Console global
console.log("Application started");

// Timer global
setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

// Buffer global
const data = Buffer.from("Hello");

console.log(data);
console.log(data.toString());


const path = require('path');
const express = require('express');
const app = express();

console.log(__dirname);   
console.log(__filename);   
console.log(process.cwd()); 


const path = require("path");
const filePath = path.join(__dirname, "uploads", "profile.jpg");
console.log(filePath);