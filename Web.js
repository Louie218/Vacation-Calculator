function vacationFunc() {
    let peopleInFamily = document.querySelector("#peopleInFamily");
    let howManyDays = document.querySelector("#howManyDays");
    let costOfPlaneTicket = document.querySelector("#costOfPlaneTicket");
    let travelOutput = document.querySelector("#travelOutput");

    let totalCostOfFair = peopleInFamily.value * costOfPlaneTicket.value;
    let DailycarRental = peopleInFamily.value * howManyDays.value 
    let DailycarRentalTotal = DailycarRental * 20

travelOutput.innerHTML = totalCostOfFair + DailycarRentalTotal


}

function foodFunction() {
    let foodPeopleCount = document.querySelector("#foodPeopleCount");
    let foodDaysCount = document.querySelector("#foodDaysCount");
    let foodTaxes = document.querySelector("#foodTaxes");

    const BKF_COST_PERSON = 5;
    const LNC_COST_PERSON = 8;
    const DIN_COST_PERSON = 13;
    const TIP_PERC = 0.18;

//Estimating total Breakfast with Tax included
    let totalBFK = (foodPeopleCount.value * foodDaysCount.value) * BKF_COST_PERSON
    let totalBFKPlusTax = totalBFK + (totalBFK * TIP_PERC);
//Estimating total Lunch with Tax included
    let totalLNC = (foodPeopleCount.value * foodDaysCount.value) * LNC_COST_PERSON
    let totalLNCPlusTax = totalLNC + (totalLNC * TIP_PERC);
//Estimating total Dinner with Tax included
    let totalDIN = (foodPeopleCount.value * foodDaysCount.value) * DIN_COST_PERSON
    let totalDINPlusTax = totalDIN + (totalDIN * TIP_PERC);

    foodOutput.innerHTML = Math.round(totalBFKPlusTax + totalLNCPlusTax + totalDINPlusTax)
}


