const app = Vue.createApp({
    created() {
        fetch('http://localhost:8000/movies')
            .then(res => res.json())
            .then(data => {
                this.moviesData = data;
                this.loadingMovies = false;
            })
            .catch(error => {
                console.error(error);
                this.error = "Failed to load movie list.";
            });
    },
    data() {
        return {
            moviesData: [],
            title: "",
            short_description: "",
            director: "",
            poster: "",
            error: "",
            loading: false,
            loadingMovies: true,
        }
    },
    methods: {
        getMovie(id) {
            console.log(id);
            this.loading = true;
            this.error = false;
            const movieInfoCon = document.querySelector("#movieInfoCon");

            fetch(`http://localhost:8000/movies/${id}`)
                .then(res => res.json())
                .then(data => {
                    if (data.length > 0) {
                        const movieData = data[0];
                        this.title = movieData.title ?? 'Not available';
                        this.short_description = movieData.short_description ?? 'Not available';
                        this.director = movieData.name ?? 'Not available';
                        this.poster = movieData.poster ?? '';
                    } else {
                        this.error = 'No movie found with the given ID.';
                    }
                    this.loading = false;
                })
                .then(() => {
                    movieInfoCon.scrollIntoView({ behavior: 'smooth', block: 'start' });
                })
                .catch(error => {
                    console.error(error);
                    this.error = "Failed to fetch movie details.";
                    this.loading = false;
                });
        }
    }
}).mount('#app');
