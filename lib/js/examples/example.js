// Generated by BUCKLESCRIPT VERSION 1.7.4, PLEASE EDIT WITH CARE
'use strict';

var Curry      = require("bs-platform/lib/js/curry.js");
var Weeping    = require("../src/weeping.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");

function init_foo(a, b) {
  return /* record */[
          /* a */a,
          /* b */b
        ];
}

var json = JSON.parse("{\"x\":6}");

var match = Curry._2(Weeping.Operator[/* <| */0], json, Weeping.prop("x", /* Int */2));

if (match) {
  Pervasives.print_int(match[0]);
}

var json$1 = JSON.parse("{\"x\":{\"y\":\"Hey\"}}");

var match$1 = Curry._2(Weeping.Operator[/* <| */0], json$1, Weeping.path(/* :: */[
          "x",
          /* :: */[
            "y",
            /* [] */0
          ]
        ], /* String */4));

if (match$1) {
  console.log(match$1[0]);
}

exports.init_foo = init_foo;
/* json Not a pure module */