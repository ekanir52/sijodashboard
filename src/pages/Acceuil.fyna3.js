// Référence API Velo : https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {

    const data = [
    { "Name": "Jules", "Points": 28},
    { "Name": "Ilan", "Points": 22},
  ];
    $w("#table1").columns = [
    { "id": "Name", "dataPath": "Name", "label": "Full Name" },  // Change column header from 'Name' to 'Full Name'
    { "id": "Points", "dataPath": "Points", "label": "Points" },  // Add label to age column
  ];
  // Populate the table with the data array
  $w("#table1").rows = data;

});