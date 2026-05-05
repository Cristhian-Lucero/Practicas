import { useEffect, useState } from 'react'
const imagenURL = `https://cataas.com/cat/says/`
// Custom Hook
export function useImage(frase) {
  const [imagen, setImagen] = useState()
  useEffect(() => {
    if (!frase) return
    const firstWord = frase.split(' ', 1).join('')
    fetch(`${imagenURL}${firstWord}?size050&color=red&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        setImagen(url)
      })
  }, [frase])
  return { imagen } // {imagen:'https://..'}
}
