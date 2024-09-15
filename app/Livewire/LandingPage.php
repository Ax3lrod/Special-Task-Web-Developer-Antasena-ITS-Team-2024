<?php

namespace App\Livewire;

use Livewire\Component;

class LandingPage extends Component
{
    public $title = "Antasena ITS";

    public function render()
    {
        return view('livewire.landing-page');
    }
}
