import { useState } from 'react'
import { usePersonajes } from './hooks/usePersonajes'
import PersonajeList from './components/PersonajeList'
import FavoritesPanel from './components/FavoritesPanel'

const MultiversoApp = () => {
  const { personajes, cargando, error } = usePersonajes()
  const [favoritos, setFavoritos] = useState([])

  const toggleFavorito = (personaje) => {
    const existe = favoritos.some((fav) => fav.id === personaje.id)

    if (existe) {
      setFavoritos(favoritos.filter((fav) => fav.id !== personaje.id))
    } else {
      setFavoritos([...favoritos, personaje])
    }
  }

  if (cargando) return <p className="mensaje">Cargando...</p>
  if (error) return <p className="mensaje error">{error}</p>

  return (
    <>
      <h1>Multiverso Rick and Morty</h1>

      <div className="layout">
        <PersonajeList
          personajes={personajes}
          favoritos={favoritos}
          onToggleFavorito={toggleFavorito}
        />

        <FavoritesPanel
          favoritos={favoritos}
          onToggleFavorito={toggleFavorito}
        />
      </div>
    </>
  )
}

export default MultiversoApp