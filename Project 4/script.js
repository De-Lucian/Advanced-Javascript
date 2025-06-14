// Sample hotel data (in a real app, this would come from an API)
// Pseudocode (Instructions)
// Pseudocode is a way to describe the steps of an algorithm or program without writing any code. It is a way to communicate the logic of a program to other programmers or to yourself before you start writing code.
// 1. Hotel data [Array of Objects]
// 2. DOM elements [HTML elements]
// 3. Event Listner [Event listeners]
// 4. Filter Hotels [Filter hotels based on search and filters]
// 5. Display Hotels [Display hotels in the results container]
// 6. Book Hotel [Book a hotel]
// 7. Validate Dates [Validate that check-out date is after check-in date]
// 8. Calculate Total Price [Calculate total price based on stay duration]
// 9. Update Availability [Update available rooms when a hotel is booked]


const hotels = [
    {
        id: 1,
        name: "Grand Plaza Hotel",
        address: "123 Main St, Anytown",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 120,
        hasWifi: true,
        hasBreakfast: true,
        hasPool: true,
        rating: 4.5,
        availableRooms: 8
    },
    {
        id: 2,
        name: "Sunset Resort & Spa",
        address: "456 Oak Ave, Somewhere",
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 200,
        hasWifi: true,
        hasBreakfast: true,
        hasPool: true,
        rating: 4.8,
        availableRooms: 5
    },
    {
        id: 3,
        name: "City Center Inn",
        address: "789 Pine Rd, Elsewhere",
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 85,
        hasWifi: true,
        hasBreakfast: false,
        hasPool: false,
        rating: 3.9,
        availableRooms: 12
    },
    {
        id: 4,
        name: "Oceanview Suites",
        address: "101 Elm St, Nowhere",
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 175,
        hasWifi: true,
        hasBreakfast: true,
        hasPool: true,
        rating: 4.6,
        availableRooms: 3
    },
    {
        id: 5,
        name: "Mountain Lodge",
        address: "202 Pine Valley, Uptown",
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 150,
        hasWifi: true,
        hasBreakfast: true,
        hasPool: false,
        rating: 4.4,
        availableRooms: 7
    },
    {
        id: 6,
        name: "Budget Stay Inn",
        address: "303 Budget Blvd, Downtown",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        price: 65,
        hasWifi: true,
        hasBreakfast: false,
        hasPool: false,
        rating: 3.5,
        availableRooms: 20
    }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const wifiFilter = document.getElementById('wifiFilter');
const breakfastFilter = document.getElementById('breakfastFilter');
const poolFilter = document.getElementById('poolFilter');
const checkInDate = document.getElementById('checkInDate');
const checkOutDate = document.getElementById('checkOutDate');
const guestCount = document.getElementById('guestCount');
const resultsContainer = document.getElementById('results');

// Set default dates (today and tomorrow)
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

checkInDate.valueAsDate = today;
checkOutDate.valueAsDate = tomorrow;

// Event listeners
searchBtn.addEventListener('click', filterHotels);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        filterHotels();
    }
});
wifiFilter.addEventListener('change', filterHotels);
breakfastFilter.addEventListener('change', filterHotels);
poolFilter.addEventListener('change', filterHotels);
checkInDate.addEventListener('change', validateDates);
checkOutDate.addEventListener('change', validateDates);
guestCount.addEventListener('change', filterHotels);

// Initial display
displayHotels(hotels);

// Validate that check-out date is after check-in date
function validateDates() {
    const checkIn = new Date(checkInDate.value);
    const checkOut = new Date(checkOutDate.value);

    if (checkOut <= checkIn) {
        alert('Check-out date must be after check-in date');
        checkOutDate.valueAsDate = new Date(checkIn);
        checkOutDate.valueAsDate.setDate(checkIn.getDate() + 1);
    }

    filterHotels();
}

function filterHotels() {
    const searchTerm = searchInput.value.tolowerCase();
    const wifiChecked = wifiFilter.checked;
    const breakfastChecked = breakfastFilter.checked;
    const poolChecked = poolFilter.checked;

    const filteredHotels = hotels.filter(hotel => {
        const matchesSearch = hotel.name.toLowerCase().includes(searchTerm) || hotel.address.toLowerCase().includes(searchTerm);

        const matchesWifi = !wifiChecked || hotel.hasWifi;
        const matchesBreakfast = !breakfastChecked || hotel.hasBreakfast;
        const matchesPool = !poolChecked || hotel.hasPool;
        // Availability filter 
        const hasAvailability = hotel.availableRooms > 0;

        return matchesSearch && matchesWifi && matchesBreakfast && matchesPool && hasAvailability;
    });
    displayHotels(filteredHotels);
}

// Display hotels in the result container

function displayHotels(hotelsToShow) {
    resultsContainer.innerHTML = '';

    if (hotelsToShow.length === 0) {
        resultsContainer.innerHTML = '<p> No hotels found matching your crieteria. <p>';
        return;
    }

    hotelsToShow.forEach(hotel => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';

        const checkIn = new Date(checkInDate.value);
        const checkOut = new Date(checkOutDate.value);
        const nights = Math.round((checkOut - checkIn) / (1000 * 60 * 60 * 24));
        const totalPrice = hotel.price * nights;

        hotelCard.innerHTML = `
        <img src="${hotel.image}" alt="${hotel.name}" class="hotel-img">
            <div class="hotel-info">
                <h3 class="hotel-name">${hotel.name}</h3>
                <p class="hotel-address">${hotel.address}</p>
                <div class="hotel-rating">Rating: ${hotel.rating}/5</div>
                <div class="hotel-features">
                    ${hotel.hasWifi ? '<span class="feature">Free WiFi</span>' : ''}
                    ${hotel.hasBreakfast ? '<span class="feature">Free Breakfast</span>' : ''}
                    ${hotel.hasPool ? '<span class="feature">Swimming Pool</span>' : ''}
                </div>
                <p class="hotel-price">$${hotel.price} per night</p>
                <p>Total for ${nights} nights: $${totalPrice}</p>
                <p>Available rooms: ${hotel.availableRooms}</p>
                <button class="book-btn" onclick="bookHotel(${hotel.id})">Book Now</button>
            </div>
        `;
        resultsContainer.appendChild(hotelCard);
    });
}

// Book hotel function 
function bookHotel(hotelId){
    const hotel = hotel.find(h=> h.id=== hotelId);
    const checkIn = checkInDate.value;
    const checkout = checkOutDate.value;
    const guests = guestCount.value;

    if(hotel){
      alert(`Booking confirmed at ${hotel.name}!\n\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\n\nThank you for your reservation!`);
    

    hotel.availableRooms -= 1;
    if(hotel.availableRooms <=0){
        hotel.availableRooms = 0;
    }
    filterHotels();
}
}
