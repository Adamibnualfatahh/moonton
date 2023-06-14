<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\SubscriptionPlan;
use Illuminate\Support\Str;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans =[
            [
                'id' => Str::uuid()->toString(),
                'name' => 'Basic',
                'price' => 200000,
                'active_period_in_months' => 3,
                'features' => json_encode(
                    [
                        'feature_1' => 'feature 1',
                        'feature_2' => 'feature 2',
                        'feature_3' => 'feature 3',
                        'feature_4' => 'feature 4',
                        'feature_5' => 'feature 5',
                    ]
                )
            ],
            [
                'id' => Str::uuid()->toString(),
                'name' => 'Premium',
                'price' => 300000,
                'active_period_in_months' => 6,
                'features' => json_encode(
                    [
                        'feature_1' => 'feature 1',
                        'feature_2' => 'feature 2',
                        'feature_3' => 'feature 3',
                        'feature_4' => 'feature 4',
                        'feature_5' => 'feature 5',
                    ]
                )
            ]
        ];

        SubscriptionPlan::insert($subscriptionPlans);
    }
}
