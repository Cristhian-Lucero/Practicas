import { useEffect, useState } from "react"
import { getRandomFact } from "../services/getRandomFAct"

export const useRecargar = () => {
  const [frase, setFrase] = useState()

  const recargar = () => {
    getRandomFact().then(setFrase)
  }

  useEffect(recargar, [])

  return { frase, recargar }
}