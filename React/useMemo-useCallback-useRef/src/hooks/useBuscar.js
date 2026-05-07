import { useEffect, useRef, useState } from "react"

export const useBuscar = () => {
    const [buscar, setBuscar] = useState('')
    const [error, setError] = useState('')
    const isFirstInput = useRef(true)
    useEffect(() => {
        if (isFirstInput.current){
            isFirstInput.current = (buscar==='')
            return
        }
        if (buscar === '') {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setError('Tiene que introducir texto')
            return
        }

        if (buscar.match(/^\d+$/)) {
            setError('No se puede buscar peliculas de numeros')
            return
        }

        if (buscar.length < 3) {
            setError('Debe tener al menos 3 caracteres')
            return
        }

        setError(null)
    }, [buscar])
    return { buscar, setBuscar, error }
}
