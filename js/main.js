const app = Vue.createApp({
    created() {
        fetch('http://localhost:8000/movies')
            .then(res => res.json())
            .then(data => {
                this.moviesData = data;
                this.loadingMovies = false;

                this.$nextTick(() => {
                    gsap.from("#movie-list li", {
                      opacity: 0,
                      y: 20,
                      duration: 0.6,
                      stagger: 0.1,
                      ease: "power2.out"
                    });
                  });
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
            this.loading = true;
            this.error = false;
            fetch(`http://localhost:8000/movies/${id}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error("No movie found with the given ID.");
                    }
                    return res.json();
                })
                .then(data => {
                    this.title = data.title || 'Not available';
                    this.short_description = data.short_description || 'Not available';
                    this.director = data.director || 'Not available';
                    this.poster = data.poster || 'placeholder.jpg';
                    this.loading = false;

                       
                    this.$nextTick(() => {
                        gsap.from("#info-box", {
                          opacity: 0,
                          y: 20,
                          duration: 0.6,
                          stagger: 0.1,
                          ease: "power2.out"
                        });
                      });
                })
                .then(() => {
                    const movieInfoCon = document.querySelector("#movieInfoCon");
                    movieInfoCon.scrollIntoView({ behavior: 'smooth', block: 'end' });
                })
                .catch(error => {
                    this.error = error.message;
                    this.loading = false;
                });
             
        }
    }
}).mount('#app');
