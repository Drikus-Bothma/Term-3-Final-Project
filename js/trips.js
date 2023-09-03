const trips = [

  {   "name": "Mauritius Tour",
      "location": "Mauritius",
      "duration": "5 Days",
      "type": "One",
      "return": "Yes",
      "price": "R7 250 pp",
      "date": "5 August 2023",
      "departure": "Durban Harbour",
      "message": "Experience the amazing view of Mauritius with us.",
      "image": "trip1.jpg",
  },
  {
      "name": "Mozambique islands",
      "location": "Mozambique",
      "type": "Two",
      "return": "No",
      "duration": "10 Days",
      "price": "R8 500 pp",
      "date": "7 August 2023",
      "departure": "Durban Harbour",
      "message": "Have fun on all the different islands of Mozambique.",
      "image": "trip2.jpg",
  },
  {
      "name": "Tropical Tour ",
      "location": "Harbour island, Bahamas",
      "type": "Three",
      "return": "Yes",
      "duration": "6 Days",
      "price": "R8 800 pp",
      "date": "5 August 2023",
      "departure": "Richards Bay",
      "message": "If you have not been to this island you are missing out.",
      "image": "trip3.jpg",
  },
  {
      "name": "White Beach",
      "location": "Clearwater beach, Florida",
      "type": "One",
      "return": "Yes",
      "duration": "9 Days",
      "price": "R10 500 pp",
      "date": "14 August 2023",
      "departure": "Cape Town",
      "message": "This white sand is something you need to see.",
      "image": "trip4.jpg",
  },
  {
      "name": "Under The Sea",
      "location": "San Cristóbal, Galápagos",
      "type": "One",
      "return": "No",
      "duration": "5 Days",
      "price": "R7 650 pp",
      "date": "19 September 2023",
      "departure": "East London",
      "message": "Come snorkel here in one of the top places in the world.",
      "image": "trip5.jpg",
  },
  {
      "name": "Luxury At Its Finest",
      "location": "Norway",
      "type": "Five",
      "return": "Yes",
      "duration": "20 Days",
      "price": "R35 000 pp",
      "date": "12 November 2023",
      "departure": "Cape Town",
      "message": "Swim in your own secluded piece of heaven.",
      "image": "trip6.jpg",
  },
  {
      "name": "Cave Of Wonders",
      "location": "Dubai",
      "type": "Four",
      "return": "No",
      "duration": "10 Days",
      "price": "R17 500 pp",
      "date": "6 October 2023",
      "departure": "Durban Harbour",
      "message": "Some say the cave can grant wishes to whoever is worthy",
      "image": "trip7.jpg",
  },
  {
      "name": "The Great Lake",
      "location": "Lake Malawi",
      "type": "One",
      "return": "No",
      "duration": "8 Days",
      "price": "R7 000 pp",
      "date": "10 December 2023",
      "departure": "Port Elizabeth",
      "message": "Dive off of the long bridge that connects all the views.",
      "image": "trip8.jpg",
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
          $(currentChild).find("#type").text('How Many Destinations: ' + trips[i].type);
          $(currentChild).find("#return").text('Round Trip: ' + trips[i].return);
          $(currentChild).find("#duration").text('Duration: ' + trips[i].duration);
          $(currentChild).find("#price").text('Price: ' + trips[i].price);
          $(currentChild).find("#date").text('Travel Dates: ' + trips[i].date);
          $(currentChild).find("#departure").text('Departure: ' + trips[i].departure);
          $(currentChild).find("#message").text(trips[i].message);
  
          $(currentChild).find(".card-img-topR").attr('src','../assets/' + trips[i+4].image);
          $(currentChild).find("#nameR").text(trips[i+4].name);
          $(currentChild).find("#locationR").text('Location: ' + trips[i+4].location);
          $(currentChild).find("#typeR").text('How Many Destinations: ' + trips[i+4].type);
          $(currentChild).find("#returnR").text('Round Trip: ' + trips[i+4].return);
          $(currentChild).find("#durationR").text('Duration: ' + trips[i+4].duration);
          $(currentChild).find("#priceR").text('Price: ' + trips[i+4].price);
          $(currentChild).find("#dateR").text('Travel Dates: ' + trips[i+4].date);
          $(currentChild).find("#departureR").text('Departure: ' + trips[i+4].departure);
          $(currentChild).find("#messageR").text(trips[i+4].message);
      } 
  }

//This is the code to the sorting and filtering but it doesnt work. I tried my best to debug it but it didnt work. I commented it so the trips would show. If i dont comment it the trips dont auto fill in.

// function filterAndSortTrips() {

//   const selectedType = $("#tripType").val();
//   const sortOrder = $("#sortOrder").val();


//   const filteredTrips = selectedType === "all" ? trips : trips.filter(trip => trip.type.toLowerCase() === selectedType.toLowerCase());


//   if (sortOrder === "asc") {
//     filteredTrips.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//   } else if (sortOrder === "desc") {
//     filteredTrips.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
//   }

 
//   $("#tripsContainer").empty();


//   for (let i = 0; i < filteredTrips.length; i++) {
//     $("#tripsContainer").append($("#tripsCardTemp").html());

//     let currentChild = $("#tripsContainer").children().eq(i);

//     $(currentChild).find(".card-img-top").attr('src', '../assets/' + filteredTrips[i].image);
//     $(currentChild).find("#name").text(filteredTrips[i].name);
//     $(currentChild).find("#location").text('Location: ' + filteredTrips[i].location);
//     $(currentChild).find("#type").text('How Many Destinations: ' + filteredTrips[i].type);
//     $(currentChild).find("#return").text('Round Trip: ' + filteredTrips[i].return);
//     $(currentChild).find("#duration").text('Duration: ' + filteredTrips[i].duration);
//     $(currentChild).find("#price").text('Price: ' + filteredTrips[i].price);
//     $(currentChild).find("#date").text('Travel Dates: ' + filteredTrips[i].date);
//     $(currentChild).find("#departure").text('Departure: ' + filteredTrips[i].departure);
//     $(currentChild).find("#message").text(filteredTrips[i].message);
//   }
// }


// filterAndSortTrips();

AddToCart = () => {
    alert("This trip has been added to your cart")
}

SubmitOrder = () => {
    let data = JSON.stringify(SubmitTrip);
    localStorage.setItem('trip', data);
  }