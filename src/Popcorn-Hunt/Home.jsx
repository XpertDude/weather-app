import LayOut from "./LayOut";
import { Link } from "react-router-dom";
import SlideShow from "./SlideShow";
import './styles.css'
export default function Home() {
    return <>
        <LayOut />
        <section className="text-white p-4 all">
            <div className="slide-show d-flex justify-content-center w-100">
                <SlideShow />
            </div>
            <h1>Welcome to Popcorn Hunt!</h1>
            <p>MovieFinder is your ultimate destination for discovering detailed information about your favorite movies and TV series! Simply enter a movie or series title, and our app will fetch all the details, including:</p>
            <ul>
                <li>✅ Plot Summary</li>
                <li>✅ Cast & Crew</li>
                <li>✅ Release Year & Genre</li>
                <li>✅ IMDB Ratings & Reviews</li>
                <li>✅ Box Office Collection</li>
            </ul>
            <p>
                With an easy-to-use interface, you can quickly search for any film or show and get instant results. Whether you're a film buff or just looking for something new to watch, Popcorn Hunt has you covered!
            </p>
            <Link className="btn btn-primary" to='/search'>Start exploring now!</Link>
        </section>
    </>
}