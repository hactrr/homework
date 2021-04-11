<?php
$var = "мяу";
function countsymbols (string $prostotak): int {
    return mb_strlen($prostotak);
}
function writetouser (int $prosto): void {
    echo $prosto ."\n";
}
$mar = countsymbols($var);
writetouser ($mar);