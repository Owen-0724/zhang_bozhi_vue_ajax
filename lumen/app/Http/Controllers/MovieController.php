<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Movie;

class MovieController extends Controller
{

    public function getAll() {
        $movies = Movie::join('directors', 'movies.director_id', '=', 'directors.id')
            ->select('movies.id', 'title', 'short_description', 'poster', 'directors.name as director')
            ->orderBy('title', 'asc')
            ->get();

        return response()->json($movies);
    }

    public function getOne($id) {
        $movie = Movie::join('directors', 'movies.director_id', '=', 'directors.id')
            ->select(
                'movies.id',
                'movies.title',
                'movies.short_description',
                'movies.poster',
                'directors.name as director'
            )
            ->where('movies.id', $id)
            ->first(); // <-- returns a single object instead of a collection
    
        if (!$movie) {
            return response()->json(['error' => 'No movie found with the given ID.'], 404);
        }
    
        return response()->json($movie);
    }
    

    public function save(Request $request) {
        $this->validate($request, [
            'title' => 'required',
            'short_description' => 'required',
            'poster' => 'required',
            'director_id' => 'required|exists:directors,id'
        ]);

        $movie = Movie::create($request->all());
        return response()->json($movie, 201);
    }

    public function update(Request $request, $id) {
        $movie = Movie::findOrFail($id);

        $this->validate($request, [
            'title' => 'required',
            'short_description' => 'required',
            'poster' => 'required',
            'director_id' => 'required|exists:directors,id'
        ]);

        $movie->update($request->all());
        return response()->json($movie);
    }

    public function delete($id) {
        $movie = Movie::findOrFail($id);
        $movie->delete();

        return response()->json(null, 204);
    }
}
