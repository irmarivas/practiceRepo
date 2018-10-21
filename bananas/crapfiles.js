"use strict";

//morning routine

function morningRoutine()
{
   console.log(`my morning routine`);
    gettingOutofBed();
    goingToshower();
    gettingDressed(`windy`);
    drinkingCoffee();
    brushTeeth();

}

//get out of bed
function gettingOutofBed()
{
    console.log(`getting out of bed`);
    console.log(`alarm rings`);
    var weekday = true;
    if (weekday)
    {
        console.log(`get up at 6:20am`);
    }
    else
    {
        console.log(`get up at 8am`);
    }
}

//shower
function goingToshower()
{
    console.log(`going to shower`);
    var daysSinceLastShave = 5;
    if (daysSinceLastShave > 5){
        console.log(`shave legs`);
        console.log(`shower`);
    }
    else
    {
        console.log('just shower')
    }
}

//get dressed
function gettingDressed(weather)
{
    console.log(`getting dressed`);
    // var weather = `hot`;
    if (weather === `hot`)
    {   
        console.log(`wear short sleeve`);
    }
    else if (weather === `cold`)
    {
        console.log(`wear pants`);
    }
    else 
    {
        console.log(`wear no clothes`);
    }
}

//drink coffee
function drinkingCoffee()
{
    console.log(`drinking coffee`);
}

//brush teeth
function brushTeeth()
{
    console.log(`brushteeth`);
}

morningRoutine();


const MickeyMouse =
{
    short: true,
    animal: true,
    smallEars: false,
    funny(jokes)
    {
        console.log(`Mickey is trying to tell ${jokes}`);
    }
};

MickeyMouse.funny(`old people jokes`);