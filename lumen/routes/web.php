<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->get('/movies', 'MovieController@getAll');
$router->get('/movies/{id}', 'MovieController@getOne');
$router->post('/movies/add', 'MovieController@save');
$router->post('/movies/edit/{id}', 'MovieController@update');
$router->delete('/movies/delete/{id}', 'MovieController@delete');














