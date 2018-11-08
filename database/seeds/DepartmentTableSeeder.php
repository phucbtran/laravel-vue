<?php

use Illuminate\Database\Seeder;
use App\Entities\Department;

class DepartmentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Department::create([
            'name' => 'Nhan Vien',
        ]);
    }
}
