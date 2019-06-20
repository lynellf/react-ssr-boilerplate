import fetch from 'isomorphic-fetch'

export default async function getTest() {
    const data = await fetch('http://localhost:3000/api/test');
    const output = await data.json();
    return output
}