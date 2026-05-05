const textoURL = 'https://catfact.ninja/fact'
export const getRandomFact = async () => {
    const data = await fetch(textoURL)
    const json = await data.json()
    const { fact } = json
    return fact
  }
