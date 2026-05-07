export const load = async () => {
    const swResponse = await fetch ('https://swapi.py4e.com/api/people/')
    const swCharacterData = await swResponse.json()

    console.log(swCharacterData)

    return{
        swCharacterData
    }
}