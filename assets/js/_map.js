function initMap() {
    const kallomultiservices = { lat: 9.639348647177693, lng: -13.6109675669375 };
    // The map, centered at kallomultiservices , 
    const map = new google.maps.Map(document.getElementById("gmap"), {
        zoom: 4,
        center: kallomultiservices,
    });
    // The marker, positioned at kallomultiservices
    const marker = new google.maps.Marker({
        position: kallomultiservices,
        map: map,
    });
}