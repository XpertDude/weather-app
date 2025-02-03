import LayOut from "./LayOut";
import { Form, Button, Table, Card, Container, Row, Col } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
export default function FindMovie() {
    const [movie, setMovie] = useState({});
    const [movieSearch, setmovieSearch] = useState('');
    const [movieId, setMovieId] = useState('')
    const [searchBy, setSearchBy] = useState('');
    const [error, setError] = useState('');
    const [isMovieFound, setIsMovieFound] = useState(false);
    const [changeLayOut, setchangeLayOut] = useState(false);
    const [loading, setLoading] = useState(false)
    const inputValue = useRef()
    console.log(movieId, movieSearch);
    {/*use https://www.omdbapi.com/?s=batman&apikey=c81c109f&page=3 to fitch with links than create a dynamic page for each movie*/ }
    useEffect(() => {
        let search = undefined;
        if (movieSearch) {
            search = movieSearch;
        } else if (movieId) {
            search = movieId;
        }
        if (search) {
            setLoading(true)
            let type = searchBy;
            fetch(`https://www.omdbapi.com/?${type}=${search}&apikey=c81c109f&page=3`)
                .then(res => res.json())
                .then(data => {
                    setLoading(false)
                    if (data.Error) {
                        setError(data.Error);
                        setIsMovieFound(false);
                        setMovie([]);
                        return;
                    } else {
                        if (type === 's') {
                            setchangeLayOut(true)
                        } else {
                            setchangeLayOut(false)
                        }
                        setMovie(data);
                        setIsMovieFound(true);
                        setError('');
                    }
                })
                .catch(err => setError('Error while fetching', err)
                )
        } else {
            setMovie([]);
            setmovieSearch('');
        }
    }, [movieSearch, searchBy, movieId])

    const LadingEffect = () => {
        return <>
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-white" role="status">
                </div>
            </div>
        </>
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let movie = inputValue.current.value.trim();
        if (movie === '') {
            setError('Please search for a movie')
        }else if(searchBy === ''){
            setError('Please select search type')
        }else {
            setmovieSearch(movie);
            inputValue.current.value = '';
        }
    }
    const handleSearchType = (e) => {
        setSearchBy(e.target.value)
    }

    const handleSearchTypeChange = (id) => {
        if(id){
            setMovieId(id)
            document.getElementById('select').selectedIndex = 3;
            setSearchBy('i')
            setmovieSearch('')
        }
    }

    return <>
        <LayOut />
        <section className="p-3 mx-4">
            <div className="d-flex flex-column align-items-end">
                <Form className="d-flex justify-content-center gap-4" onSubmit={handleSubmit}>
                    <Form.Group className="d-flex gap-3">
                        <Form.Select onChange={handleSearchType} id="select">
                            <option value="" defaultValue=''>Select Search type</option>
                            <option value="t">Advanced(Detailed)</option>
                            <option value="s">Global(Multiple results)</option>
                            <option value="i">IMDb ID</option>
                        </Form.Select>
                        <Form.Control className="p-2" type="text" placeholder="Enter movie title" ref={inputValue} />
                    </Form.Group>
                    <Button type="submit" className="btn btn-secondary">Search</Button>
                </Form>
                {error && <div className="m-3 text-danger">{error}</div>}
            </div>
            <div className="p-5">
                {loading && <LadingEffect />}
                {isMovieFound &&
                    !changeLayOut ?
                    <>
                        <div className="p-3 d-flex align-items-start gap-3 movie-info">
                            <div className="poster">
                                <img className="text-white" src={movie.Poster} alt={movie.Title} />
                            </div>
                            <div className="text-white">
                                <h1 className="fs-4 text-white text-center">{movie.Title}</h1>
                                <p>Type: <span className="badge bg-primary">{movie.Type}</span></p>
                                <p>Language: <span className="badge bg-primary p-1">{movie.Language}</span></p>
                                <p>Country: <span className="badge bg-primary p-1">{movie.Country}</span></p>
                                <p>Rate: <span className="badge bg-primary rate">{movie.imdbRating}</span></p>
                                <p>Box Office: <span className="text-danger">{movie.BoxOffice}</span></p>
                                <p>Awards: <span className="text-danger">{movie.Awards}</span></p>
                                <h3>Plot:</h3>
                                <p>{movie.Plot}</p>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <Table className="m-3" striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>Year</th>
                                        <th>Rated</th>
                                        <th>Released</th>
                                        <th>Runtime</th>
                                        <th>Genre</th>
                                        <th>Director</th>
                                        <th>Writer</th>
                                        <th>Actors</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{movie.Year}</td>
                                        <td>{movie.Rated}</td>
                                        <td>{movie.Released}</td>
                                        <td>{movie.Runtime}</td>
                                        <td>{movie.Genre}</td>
                                        <td>{movie.Director}</td>
                                        <td>{movie.Writer}</td>
                                        <td>{movie.Actors}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </>
                    :
                    <Container className="my-4">
                        <Row className="g-4">
                            {movie.Search ?
                                movie.Search.map((movie) => {
                                    return (
                                        <>
                                            <Col key={movie.imdbID} xs={12} sm={6} md={4} lg={2} xl={3}>
                                                <Card className="h-100 shadow-sm element">
                                                    <Card.Header className="bg-primary text-white text-center">
                                                        <h5 className="mb-0">{movie.Title}</h5>
                                                    </Card.Header>
                                                    <Card.Img
                                                        width={300}
                                                        height={200}
                                                        variant="top"
                                                        src={movie.Poster}
                                                        alt={movie.Title}
                                                    />
                                                    <Card.Body className="d-flex flex-column">
                                                        <Card.Text className="mb-2">
                                                            <strong>Type:</strong> {movie.Type} <br />
                                                            <strong>Year:</strong> {movie.Year} <br />
                                                            <strong>Rate:</strong> {movie.imdbRating || 'N/A'}
                                                        </Card.Text>
                                                        <Button
                                                        onClick={() => {
                                                            handleSearchTypeChange(movie.imdbID)
                                                        }}
                                                            variant="primary"
                                                            className="mt-auto w-100"
                                                        >
                                                            More Details
                                                        </Button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </>
                                    )
                                })
                                : undefined}
                        </Row>
                    </Container>
                }
            </div>
        </section>
    </>
}