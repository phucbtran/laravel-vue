<?php

use Illuminate\Database\Seeder;
use App\Entities\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'phucb1506@gmail.com',
            'password' => bcrypt('12345678'),
            'name' => 'Tran Cong Phuc',
            'department_id' => '1',
        ]);
    }
}
