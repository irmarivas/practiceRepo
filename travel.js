"use strict";
// Irma and Luigi are going to visit Places

// We need 2 constructor functions: 1 for Persons and 1 for Places
// A constructor FUNCTION  makes copies of an OBJECT: that is their ONLY purpose

// To DEFINE a CONSTRUCTOR FUNCTION SIGNATURE we need 3 things:
// the Function key word, NAME OF THE Function, and PARAMATERS

function makePerson( paramName, paramCountriesVisited, paramIsHappy) //parameters are general
{
    // this is inisde of the body constructor function
    // "this" is the person object that we are going to make a copy out of 

    // with the . operator you access the attributes
    // next the = is used to assign the parameter to the attribute
    // the semi-colon is telling the = operator that there are no more parameters to assign
    this.attributeName = paramName;
    this.attributeCountriesVisited = paramCountriesVisited;
    this.attributeIsHappy = paramIsHappy;
    this.attributeMemories = [];
    this.attributeIsHungry = true;
    this.attributePurchases = [];

    //the person object should be able to SIGHT-SEE, EAT, SHOP

    this.methodVisited = function(paramPlace)
    {
        // the museum has been visited
        // a person gains a happy memory
        // museum is visited = true
        this.attributeMemories.push( paramPlace );
        this.attributeIsHappy = true;
        return `${this.attributeName} is happy to have visited ${paramPlace}!`;
        
    };

    this.methodEat = function(paramFood)
    {
        this.attributeIsHungry = false;
        return `${this.attributeName} ate some ${paramFood} and isn't hungry anymore!`;
    };

    this.methodShop = function(paramClothes)
    {
        this.attributePurchases.push(paramClothes);
        return `${this.attributeName} bought some ${paramClothes}`;
    };
}

function makePlaces(paramName, paramTimesVisited, paramIsPretty)
{
    this.attribName = paramName;
    this.attribVisited = paramTimesVisited;
    this.attribIsPretty = paramIsPretty;
    this.methodGoverns = function (paramNameOfPlace)
    {
       return `Democracy governs ${paramNameOfPlace}`;
    };
    
};

const luigi = new makePerson(`Luigi`, 10, false);
const place = new makePlaces(`France`, 2, true);
const museum = new makePlaces(`louvre`,1, true);
const park = new makePlaces(`Yosemite`,2, true);
const dump = new makePlaces(`South Central`, 0, false);

console.log(luigi.attributeName);
console.log(luigi.attributeCountriesVisited);
console.log(luigi.attributeIsHungry);
console.log(luigi.methodEat(`Indian Food`) );
console.log(luigi.methodShop(`Hollister`));
console.log(luigi.methodVisited(place.attribName));
console.log(luigi.methodVisited(museum.attribName));
console.log(luigi.methodVisited(park.attribName));
console.log(luigi.methodVisited(dump.attribName));
console.log(luigi.attributeMemories);


console.log('placa visited ' + place.attribName);
console.log(place.attribVisited);
console.log(place.attribIsPretty);
console.log(place.methodGoverns(place.attribName));