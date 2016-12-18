
console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController);

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}
function loanController(){
  this.amount = (100) ;
  this.apr =(5);
  this.month = function(n){
    var annual_interest = (this.amount * (this.apr / 100));
    var monthly_interst = (annual_interest / 12);
    var accrued_interest = n * monthly_interest ;
    return {
      accrued: accrued_interest,
      total_balance: this.amount + accrued_interest
    };
  };
}