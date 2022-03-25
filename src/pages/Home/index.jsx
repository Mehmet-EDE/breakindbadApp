import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../../redux/characterSlice'
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Home() {
  const data = useSelector((state) => state.characters.items)
  const status = useSelector((state) => state.characters.status)
  const Nextpage = useSelector((state) => state.characters.page)
  const isNextpage = useSelector((state) => state.characters.isNextpage)
  const error = useSelector((state) => state.characters.error)
  const dispatch = useDispatch()
  useEffect(() => {
    if (status === 'idle') dispatch(fetchCharacters())
  }, [dispatch, status])
  if (error) {
    return (
      <div>
        <h1>Error:{error}</h1>
      </div>
    )
  }
  return (
    <Container fluid className='App'>

      <h1> <u>Characters</u></h1>
      {
        data.map(character => (
          <Row className="justify-content-md-center" key={character.char_id}>
            <Col xs lg="2">
              <div className='charContainer'>
                <Link to={`/character/${character.char_id}`}>
                  <img alt={character.name} src={character.img} className='character' />
                  <h3 className='App-link'>{character.name}</h3>
                </Link>
              </div>
            </Col>
          </Row>
        ))
      }
      {status === 'loading' && <h1>Loading...</h1>}
      {isNextpage && status !== 'loading' && (
        <button
          className='loadBtn'
          onClick={() => dispatch(fetchCharacters(Nextpage))}
        >Load More {Nextpage}</button>
      )
      }
      {isNextpage &&
        (<div className='alertContainer'>
          <h1 className='alertNotification'>Gösterilecek Sayfa Kalmadı !</h1>
        </div>)
      }
      <br /><br />
    </Container>
  )
}

export default Home