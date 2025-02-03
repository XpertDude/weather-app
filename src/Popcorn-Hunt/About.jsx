import LayOut from "./LayOut";

export default function About() {
    return <>
        <LayOut />
        <section className="text-white p-4">
            <h1 className="p-4">About this App</h1>
            <p>
                Welcome to Popcorn Hunt, your ultimate destination for discovering and exploring movies and TV series! Whether you're a movie enthusiast, a binge-watcher, or just someone looking for recommendations, MovieVerse has got you covered.
                <br />
                With our user-friendly interface and easy-to-navigate layout, you can quickly search for your favorite movies or series by title, genre, or year. We fetch detailed information such as movie posters, plot summaries, cast lists, ratings, and much more to help you make informed viewing choices.
                <br />
                Key Features:
                Movie & Series Search: Search by title, genre, or year to find your next movie or TV show.
                Detailed Information: Get all the info you need—plot summaries, cast, release date, ratings, and more.
                Regular Updates: Stay up to date with the latest and most popular movies and TV shows.
                User-Friendly Interface: Enjoy a clean and intuitive design for seamless browsing.
                Start exploring the world of entertainment today—find, watch, and enjoy all your favorite movies and series, all in one place!
            </p>
        </section>
    </>
}