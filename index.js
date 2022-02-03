// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){ 
    return function(fare){
        return fare*multiplier;
    }
}


const fareDoubler = function fareMultiplier(fare){
    createFareMultiplier();
    return fare *2;
}

const fareTripler = function fareMultiplier(fare){
    createFareMultiplier();
    return fare*3;
}

function selectDifferentDrivers(arrayOfDrivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}

