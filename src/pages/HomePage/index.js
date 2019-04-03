import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../store/actions'

import { Label } from '../../atoms'
import { Field } from '../../molecules'
import { List } from '../../organisms'
import TemplateSpotify from '../../templates/TemplateSpotify';

const mapStateToProps = (state) => ({
  recent: state.recent,
  played: state.played,
  results: state.results,
  searchText: state.searchText
})

const HomePage = ({ recent, played, results, searchText, dispatch, history }) => {
  const onChange = (e) => {
    dispatch(actions.search(e.target.value))
    fetch('http://example.com/movies.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(actions.getResults(data))
      });
  }

  const openAlbum = (id) => {
    history.push({pathname: `/album/${id}`})
  }

  const search = () => {
    if (searchText) {
      if (results.length > 0) {
        return (<div>
          <Label>Resultados Encontrados para "{searchText}"</Label>
          <List cards={results} onClick={openAlbum} />
        </div>)
      }
      return (<div>
        <Label>Nenhum Resultado Encontrado</Label>
      </div>)
    }
    return (
      <div>
        {recent.length > 0 && (
          <div>
            <Label>Álbuns Buscados Recentemente</Label>
            <List cards={recent} onClick={openAlbum} />
          </div>
        )}
        {played.length > 0 && (
          <div>
            <Label>Álbuns Tocados Recentemente</Label>
            <List cards={played} onClick={openAlbum} />
          </div>
        )}
      </div>
    )
  }
  return (
    <TemplateSpotify>
      <Field
        name='searchText'
        label='Busque por artistas, álbuns ou músicas'
        placeholder='Comece a escrecer...'
        value={searchText}
        onChange={onChange} />
      {search()}
    </TemplateSpotify>)
}

export default connect(mapStateToProps)(HomePage)