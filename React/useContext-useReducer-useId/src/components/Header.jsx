import { Filter } from './Filter'

export function Header({ changeFilters }) {
  return (
    <header>
      <h1>React shop</h1>
      <Filter changeFilters={changeFilters} />
    </header>
  )
}
