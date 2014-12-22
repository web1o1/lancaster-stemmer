'use strict';

/**
 * Dependencies.
 */

var lancasterStemmer = require('wooorm/lancaster-stemmer@0.1.4');

/**
 * DOM elements.
 */

var $input = document.getElementsByTagName('input')[0];
var $output = document.getElementsByTagName('output')[0];

/**
 * Event handler.
 */

function oninputchange() {
    $output.textContent = lancasterStemmer($input.value);
}

/**
 * Listen.
 */

$input.addEventListener('input', oninputchange);

/**
 * Initial answer.
 */

oninputchange();
