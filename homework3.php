<?php
    //есть две переменные. поменять их значения и вывести
$var = 4;
$mar = 3;
$rar = $mar;
$mar = $var;
$var = $rar;
echo "переменная var " . $var . ", переменная mar " . $mar ."\n";