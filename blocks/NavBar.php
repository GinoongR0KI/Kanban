<?php

class NavBar {
    // $relativeNav is an Array

    public function __construct($relativeNav) {
        // Home, About, Projects, Logout
        $listItemCount = count($relativeNav) < 1 ? exit : count($relativeNav);
        echo "<ul>";
        foreach($relativeNav as $text => $url) {
            // Get assoc array indexes, read, then proceed to use $this->createLink()
            $this->createLink($url, $text);
        }
        echo "</ul>";
    }

    public function createLink($url, $text) {
        echo "<li><a href='$url'>$text</a></li>";
    }

}