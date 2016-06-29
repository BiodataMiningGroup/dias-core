<?php

$router->get('manual/tutorials/label-trees/{name}', [
    'as'   => 'manual-tutorials-label-trees',
    'uses' => 'LabelTreesController@tutorial',
]);

$router->group(['middleware' => 'auth'], function ($router) {
    $router->get('label-trees', [
        'as'   => 'label-trees-index',
        'uses' => 'LabelTreesController@index',
    ]);

    $router->get('label-trees/create', [
        'as'   => 'label-trees-create',
        'uses' => 'LabelTreesController@create',
    ]);

    $router->get('label-trees/{id}', [
        'as'   => 'label-trees',
        'uses' => 'LabelTreesController@show',
    ]);

    $router->get('admin/label-trees', [
        'as' => 'admin-global-label-trees',
        'middleware' => 'admin',
        'uses' => 'LabelTreesController@admin',
    ]);
});
