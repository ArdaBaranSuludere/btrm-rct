
function purchaseTickets(selectedLocation) {
    console.log("Selected Location:", selectedLocation);

    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "/tickets_filtered");

    var locationInput = document.createElement("input");
    locationInput.setAttribute("type", "hidden");
    locationInput.setAttribute("name", "Location");
    locationInput.setAttribute("value", selectedLocation);

    form.appendChild(locationInput);
    
    document.body.appendChild(form);

    form.submit();
}


function purchaseTicketsDetails(etkinlikAdi) {
    console.log("Selected Etkinlik Adı:", etkinlikAdi);

    var form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "/ticket-details");

    var etkinlikAdiInput = document.createElement("input");
    etkinlikAdiInput.setAttribute("type", "hidden");
    etkinlikAdiInput.setAttribute("name", "etkinlik_adi");
    etkinlikAdiInput.setAttribute("value", etkinlikAdi);

    form.appendChild(etkinlikAdiInput);
    document.body.appendChild(form);

    form.submit();
}