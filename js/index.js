/* Mapbox */
var mymap = L.map("mapid").setView(
  [36.05603414771976, -115.12009791717792],
  12
);

mymap.getContainer().addEventListener("mouseover", function () {
  map.dragging.disable();
});

// Re-enable dragging when user's cursor leaves the element
mymap.getContainer().addEventListener("mouseout", function () {
  map.dragging.enable();
});

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiYnJlbmRvaWsiLCJhIjoiY2ticXpsMXlrMTBzczJ1anp4eWNzYXMycSJ9._aiJ3nb05Dxhp-Lz-ajRDg",
  }
).addTo(mymap);

var marker = L.marker([36.05603414771976, -115.12009791717792]).addTo(mymap);
marker
  .bindPopup(
    "<b>Chef On The Road</b><br><span class='text-secondary'>7435 S Eastern Ave #109, Las Vegas, NV 89123</span>"
  )
  .openPopup();
