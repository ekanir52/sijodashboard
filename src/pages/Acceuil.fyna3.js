import wixData from 'wix-data';

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

// // Example of a function to refresh the UI
// function refreshUI() {
//     wixData.query("ClassementEquipe1")
//         .find()
//         .then((results) => {
//             $w("#classementPerso").data = results.items;  // Update the repeater with fresh data
//         });

//     wixData.query("Totalequipe")
//         .find()
//         .then((results) => {
//             $w("#classmentEquipes").data = results.items;  // Update the repeater with fresh data
//         });
// }

$w.onReady(function () {
    wixData.query("ClassementEquipe1")
        .eq("poste", "cdi")
        .ascending("score")
        .find()
        .then((results) => {
            $w("#rpcdi").data = results.items;
            console.log(results)
        })
        .catch((err) => {
            console.log(err);
        });

    wixData.query("ClassementEquipe1")
        .eq("poste", "alternant")
        .descending("score")
        .find()
        .then((results) => {
            $w("#rpalternant").data = results.items;
            console.log(results)
        })
        .catch((err) => {
            console.log(err);
        });
});
