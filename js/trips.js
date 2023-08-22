const trips = [

    {"name": "Mauritius Tour",
    "location": "Mauritius",
    "duration": "5 Days",
    "price": "R7 250 pp",
    "date": "5 August 2023",
    "departure": "Durban Harbour",
    "message": "Experience the amazing view of Mauritius with us.",
    "image": "trip1.jpg",
    "days": "less"
},
{
    "name": "Mozambique islands",
    "location": "Mozambique",
    "duration": "10 Days",
    "price": "R8 500 pp",
    "date": "7 August 2023",
    "departure": "Durban Harbour",
    "message": "Have fun on all the different islands of Mozambique.",
    "image": "trip2.jpg",
    "days": "more"
},
{
    "name": "Tropical Tour ",
    "location": "Harbour island, Bahamas",
    "duration": "6 Days",
    "price": "R8 800 pp",
    "date": "5 August 2023",
    "departure": "Richards Bay",
    "message": "If you have not been to this island you are missing out.",
    "image": "trip3.jpg",
    "days": "less"
},
{
    "name": "White Beach",
    "location": "Clearwater beach, Florida",
    "duration": "9 Days",
    "price": "R10 500 pp",
    "date": "14 August 2023",
    "departure": "Cape Town",
    "message": "This white sand is something you need to see.",
    "image": "trip4.jpg",
    "days": "more"
},
{
    "name": "Under The Sea",
    "location": "San Cristóbal, Galápagos",
    "duration": "5 Days",
    "price": "R7 650 pp",
    "date": "19 September 2023",
    "departure": "East London",
    "message": "Come snorkel here in one of the top places in the world.",
    "image": "trip5.jpg",
    "days": "less"
},
{
    "name": "Luxury At Its Finest",
    "location": "Norway",
    "duration": "20 Days",
    "price": "R35 000 pp",
    "date": "12 November 2023",
    "departure": "Cape Town",
    "message": "Swim in your own secluded piece of heaven.",
    "image": "trip6.jpg",
    "days": "more"
},
{
    "name": "Cave Of Wonders",
    "location": "Dubai",
    "duration": "10 Days",
    "price": "R17 500 pp",
    "date": "6 October 2023",
    "departure": "Durban Harbour",
    "message": "Some say the cave can grant wishes to whoever is worthy",
    "image": "trip7.jpg",
    "days": "more"
},
{
    "name": "The Great Lake",
    "location": "Lake Malawi",
    "duration": "8 Days",
    "price": "R7 000 pp",
    "date": "10 December 2023",
    "departure": "Port Elizabeth",
    "message": "Dive off of the long bridge that connects all the views.",
    "image": "trip8.jpg",
    "days": "more"
}];

$(document).ready(function(){
    loadTrips();
});

function loadTrips () {
    for (let i = 0; i < trips.length/2; i++) {
        console.log(trips[i]);

        $("#tripsContainer").append($("#tripsCardTemp").html());

        let currentChild = $("#tripsContainer").children().eq(i+1);
        $(currentChild).find(".card-img-top").attr('src','../assets/' + trips[i].image);
        $(currentChild).find("#name").text(trips[i].name);
        $(currentChild).find("#location").text('Location: ' + trips[i].location);
        $(currentChild).find("#duration").text('Duration: ' + trips[i].duration);
        $(currentChild).find("#price").text('Price: ' + trips[i].price);
        $(currentChild).find("#date").text('Travel Dates: ' + trips[i].date);
        $(currentChild).find("#departure").text('Departure: ' + trips[i].departure);
        $(currentChild).find("#message").text(trips[i].message);

        $(currentChild).find(".card-img-topR").attr('src','../assets/' + trips[i+4].image);
        $(currentChild).find("#nameR").text(trips[i+4].name);
        $(currentChild).find("#locationR").text('Location: ' + trips[i+4].location);
        $(currentChild).find("#durationR").text('Duration: ' + trips[i+4].duration);
        $(currentChild).find("#priceR").text('Price: ' + trips[i+4].price);
        $(currentChild).find("#dateR").text('Travel Dates: ' + trips[i+4].date);
        $(currentChild).find("#departureR").text('Departure: ' + trips[i+4].departure);
        $(currentChild).find("#messageR").text(trips[i+4].message);
    } 
}

let appliedFilter = "";
let appliedSort = "alphabetically";


$("input[name='filterRadio']").click(function(){
  appliedFilter = $(this).attr('value');

  filterSortTrips();
});

$("input[name='sortRadio']").click(function(){
  appliedSort = $(this).attr('value');

  filterSortTrips();
});

function filterSortTrips() {
  
  let filteredSortedArrTrips = [];

  console.log(appliedFilter);
  console.log(appliedSort);


  if (appliedFilter) {
    filteredSortedArrTrips = arrTrips.filter(trips => trips.days == appliedFilter);
  } else {
    filteredSortedArrTrips = arrTrips;
  }

  // Sort Plants

  if (appliedSort == "") {

    // Sort plants from the lowest to highest price
    filteredSortedArrPlants = filteredSortedArrPlants.sort((a, b) => {
      return a.price - b.price;
    });

  } else if (appliedSort == "date added") {

    // Sort plants from the newest to oldest
    filteredSortedArrPlants = filteredSortedArrPlants.sort((a, b) => {
      let da = new Date(a.addedDate);
      let db = new Date(b.addedDate);
    
      return db - da;
    });

  }

  console.log(filteredSortedArrPlants)

  loadPlants(filteredSortedArrPlants);

}