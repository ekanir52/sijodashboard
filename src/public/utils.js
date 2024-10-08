import wixData from 'wix-data';

export function updateScoreForPerson(prenom, newScore) {
    wixData.query("ClassementEquipe1")
        .eq("title", prenom)
        .find()
        .then((results) => {
            if (results.items.length > 0) {
                let item = results.items[0];  // Get the first matching item
                item.score = newScore;  // Update the score field
                return wixData.update("ClassementEquipe1", item);
            } else {
                console.log("No person found with the given ID.");
            }
        })
        .then((updatedItem) => {
            console.log("Score updated for person:", updatedItem);
        })
        .catch((error) => {
            console.error("Error updating score:", error);
        });
}

export function updateTotalForTeam(teamName, newTotal) {
    wixData.query("Totalequipe")
        .eq("title", teamName)
        .find()
        .then((results) => {
            if (results.items.length > 0) {
                let item = results.items[0];
                item.reference = newTotal;

                return wixData.update("Totalequipe", item);
            } else {
                console.log("No team found with the given name.");
            }
        })
        .then((updatedItem) => {
            console.log("TOTAL updated for team:", updatedItem);
        })
        .catch((error) => {
            console.error("Error updating TOTAL:", error);
        });
}
