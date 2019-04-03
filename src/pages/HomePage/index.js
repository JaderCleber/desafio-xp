import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { search, openAlbum } from '../../store/actions'
import TemplateSpotify from '../../templates/TemplateSpotify'
import { Field } from '../../molecules'
import { Label } from '../../atoms'
import { List } from '../../organisms'

class HomePage extends React.Component {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this)
    this.openAlbum = this.openAlbum.bind(this)
    this.search = this.search.bind(this)
  }

  onChange(e) {
    this.props.search(e.target.value)
  }

  openAlbum(album) {
    this.props.openAlbum(album);
    this.props.history.push({ pathname: `/album` })
  }

  search({ searchText, recent, results, played }) {
    if (searchText) {
      if (results.length > 0) {
        return (<div>
          <Label>Resultados Encontrados para "{searchText}"</Label>
          <List cards={results} onClick={this.openAlbum} />
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
            <List cards={recent} onClick={this.openAlbum} />
          </div>
        )}
        {played.length > 0 && (
          <div>
            <Label>Álbuns Tocados Recentemente</Label>
            <List cards={played} onClick={this.openAlbum} />
          </div>
        )}
      </div>
    )
  }
  render() {
    const { searchText, recent, results, played } = this.props
    return (
      <TemplateSpotify>
        <Field
          name='searchText'
          label='Busque por artistas, álbuns ou músicas'
          placeholder='Comece a escrecer...'
          value={searchText}
          onChange={this.onChange} />
        {this.search({ searchText, recent, results, played })}
      </TemplateSpotify>)
  }
}


const mapStateToProps = (state) => ({
  recent: state.recent,
  played: state.played,
  results: state.results,
  searchText: state.searchText
})


const mapDispatchToProps = dispatch => {

  return bindActionCreators({
    search, openAlbum
  }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)