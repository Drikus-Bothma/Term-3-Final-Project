const trips = [
    {
        "name": "Mauritius Tour",
        "location": "Mauritius",
        "duration": "5 Days",
        "code": "5678",
        "price": 7250,
        "date": "5 August 2023",
        "departure": "Durban Harbour",
        "quantity": "3"
    },
    {
        "name": "Under The Sea",
        "location": "San Cristóbal, Galápagos",
        "duration": "5 Days",
        "code": "9674",
        "price": 7650,
        "date": "19 September 2023",
        "departure": "East London",
        "quantity": "2"
    },
    {
        "name": "Cave Of Wonders",
        "location": "Dubai",
        "code": "0987",
        "duration": "10 Days",
        "price": 17500,
        "date": "6 October 2023",
        "departure": "Durban Harbour",
        "quantity": "2"
    },
    {
        "name": "The Great Lake",
        "code": "4316",
        "location": "Lake Malawi",
        "duration": "8 Days",
        "price": 7000,
        "date": "10 December 2023",
        "departure": "Port Elizabeth",
        "quantity": "1"
    }
];

$(document).ready(function () {
    loadTrips();
    calculateTotalCost();

    $(document).on("click", ".remove", function () {
        $(this).closest("tr").remove();
        calculateTotalCost();
    });

    $("#removeAll").on("click", function () {
        $("#trip").empty();
        calculateTotalCost();
    });
});

function loadTrips() {
    let space = document.getElementById('trip');

    for (let i = 0; i < trips.length; i++) {
        let name = trips[i].name;
        let code = trips[i].code;
        let location = trips[i].location;
        let duration = trips[i].duration;
        let date = trips[i].date;
        let departure = trips[i].departure;
        let price = trips[i].price;
        let quantity = trips[i].quantity;

        space.innerHTML += `
            <tr>
            <th scope="row">${i + 1}</th>
            <td>${name}</td>
            <td>${code}</td>
            <td>${location}</td>
            <td>${duration}</td>
            <td>${date}</td>
            <td>${departure}</td>
            <td>R ${price}.00</td>
            <td>${quantity}</td>
            <td class="remove">Remove</td>
            </tr>
            `;
    }
}

function calculateTotalCost() {
    let totalCost = 0;

    for (let i = 0; i < trips.length; i++) {
        let price = trips[i].price;
        let quantity = trips[i].quantity;

        totalCost += price * quantity;
    }

    $("#totalCost").text(`Total Cost: R${totalCost.toFixed(2)}`);
}

Pay = () => {
    alert("Your Purchase Was Successful! We Will Contact You Soon.")
    window.location.href = '../index.html'
}
