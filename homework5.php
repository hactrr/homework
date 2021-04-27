<?php
$var = file_get_contents('https://rosfines.ru');
echo substr_count($var, 'штраф') + substr_count($var, 'ШТРАФ') + substr_count($var, 'Штраф');
