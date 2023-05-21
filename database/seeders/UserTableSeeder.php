<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@moonton.com',
            'password' => bcrypt('password'),
        ]);

        $admin->assignRole('admin');

        $user = User::create([
            'name' => 'User',
            'email' => 'user@moonton.com',
            'password' => bcrypt('password'),
        ]);

        $user->assignRole('user');
    }
}
