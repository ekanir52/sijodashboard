// api.js
import { insert } from 'wix-data';

export async function post_data(request) {
    let options = {
        "suppressAuth": true,
        "suppressHooks": true
    };  

    const body = await request.body.json();

    const result = await insert("ClassementEquipe1", {
        prenom: body.prenom,
        Score: body.Score,
        Equipe: body.Equipe
    }, options);

    return {
        status: 200,
        body: { message: 'Data added successfully', result }
    };
}
