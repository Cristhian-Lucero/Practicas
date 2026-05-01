export const Relleno = ({children, isSelected ,actualizarTablero, indice, updateTablero}) => {
  const clase = isSelected ? 'cuadro' : 'noCuadro';

  const hundleClick = () => {
    updateTablero(indice);
  }

  return(
    <div onClick={hundleClick} className={clase}>
      {children}
    </div>
  )
}