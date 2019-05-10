
import { RequestNode, Variables } from 'relay-runtime';
import global from '../helpers/Global'

export const getToken = () => {
    // get token from cookie or session token instead
    return localStorage.getItem(TOKEN_KEY);
}

const config = {
    GRAPHQL_URL: `${global.url}`,
}

const fetchQuery = (request, variables) => {

    const body = JSON.stringify({
        query: request.text,
        variables
    })

    const headers = {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: getToken()
    }

    const response = await fetch(`${config.GRAPHQL_URL}`, {
        method: 'POST',
        headers,
        body
    })

    return await request.json()
}

export default fetchQuery