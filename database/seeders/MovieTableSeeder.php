<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'id' => Str::uuid()->toString(),
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'drama',
                'video_url' => 'https://www.youtube.com/watch?v=6hB3S9bIaco',
                'thumbnail' => 'https://i.ytimg.com/vi/6hB3S9bIaco/maxresdefault.jpg',
                'rating' => 4.3,
                'is_featured' => true,
            ],
            [
                'id' => Str::uuid()->toString(),
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'drama',
                'video_url' => 'https://www.youtube.com/watch?v=sY1S34973zA',
                'thumbnail' => 'https://i.ytimg.com/vi/sY1S34973zA/maxresdefault.jpg',
                'rating' => 4.5,
                'is_featured' => true,
            ],
            [
               'id' => Str::uuid()->toString(),
               'name' => 'The Dark Knight',
               'slug' => 'the-dark-knight',
               'category' => 'action',
               'video_url' => 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
               'thumbnail' => 'https://i.ytimg.com/vi/EXeTwQWrcwY/maxresdefault.jpg',
               'rating' => 4.7,
               'is_featured' => false,
            ]
        ];
        Movie::insert($movies);
    }
}
