import wixData from 'wix-data';
import wixLocation from 'wix-location';
import { getValuesFromSheet } from 'backend/googleApi';


async function checkData(){
    console.log("Checking Data...")
    let scores = await getValuesFromSheet("commerciaux!G2:G3");
    $w("#text180").text = scores[0].toString();
    console.log("Score 1 : "+ scores[0] + " et score 2 : "+ scores[1]);
    $w("#text181").text = scores[1].toString();
    let res = await getValuesFromSheet("commerciaux!A2:B10");
    for(let i = 0; i < res.length ; i++) {
        let player = res[i];
        let results = await wixData.query("alternant")
                            .eq("prenom",player[0])
                            .find()
        if(results.items.length>0) {
                let item = results.items[0];
                item.score = Number(player[1].replace(',','.'));
                await wixData.update("alternant", item);
        }

        results = await wixData.query("cdi")
                            .eq("prenom",player[0])
                            .find()
        if(results.items.length>0) {
                let item = results.items[0];
                item.score = Number(player[1].replace(',','.'));
                await wixData.update("cdi", item);
            }
        
    }
    // refreshUI();
    
}
$w.onReady(function () {
    // setInterval(() => {
    //     checkData();
    // }, 10000);
    checkData();
    setTimeout(()=>{
        wixLocation.to(wixLocation.url);
    },2*60000)
}
);



// https://docs.google.com/spreadsheets/d/1YrJJq8twmXI4XL0e6lAkwr85_zSbfJup5IxlkDemJD4/edit?usp=sharing
// export function updateScoreForPerson(prenom, newScore) {
//     wixData.query("ClassementEquipe1")
//         .eq("title", prenom)
//         .find()
//         .then((results) => {
//             if (results.items.length > 0) {
//                 let item = results.items[0];  // Get the first matching item
//                 item.score = newScore;  // Update the score field
//                 return wixData.update("ClassementEquipe1", item);
//             } else {
//                 console.log("No person found with the given ID.");
//             }
//         })
//         .then((updatedItem) => {
//             console.log("Score updated for person:", updatedItem);
//             refreshUI();  // Call a function to refresh the UI with updated data
//         })
//         .catch((error) => {
//             console.error("Error updating score:", error);
//         });
// }

// export function updateTotalForTeam(teamName, newTotal) {
//     wixData.query("Totalequipe")
//         .eq("title", teamName)
//         .find()
//         .then((results) => {
//             if (results.items.length > 0) {
//                 let item = results.items[0];
//                 item.reference = newTotal;
//                 return wixData.update("Totalequipe", item);
//             } else {
//                 console.log("No team found with the given name.");
//             }
//         })
//         .then((updatedItem) => {
//             console.log("TOTAL updated for team:", updatedItem);
//             refreshUI();  // Call a function to refresh the UI with updated data
//         })
//         .catch((error) => {
//             console.error("Error updating TOTAL:", error);
//         });
// }

