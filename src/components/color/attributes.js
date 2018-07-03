/**
* Copyright 2012-2018, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

'use strict';


// IMPORTANT - default colors should be in hex for compatibility
exports.defaults = [
    '#2096f3',  // teal blue
    '#FAA654',  // orange
    '#5DCB7E',  // cooked asparagus green
    '#FFE06E',  // pale yellow
    '#0D94F6',  // muted blue
    '#6DEDC7',  // mint green
    '#FFCA74',  // pumkin yellow
    '#89CEEF',  // denim blue
    '#FFCF00',  // sunset yellow
    '#85DFE3',  // aqua blue
    '#B8F788',  // pastel green
    '#6F86D6',  // violet sky
    '#C2E9FB',  // cool water
    '#B4C4DA',  // mirror grey
    '#9FD4C4',  // algae green
    '#998CE3',  // purple
    '#AE4680',  // magenta
    '#F77373',  // raspberry yogurt pink
    '#FF8500',  // safety orange
    '#E5CAB4',  // sand dust
];

exports.defaultLine = '#444';

exports.lightLine = '#eee';

exports.background = '#fff';

exports.borderLine = '#BEC8D9';

// with axis.color and Color.interp we aren't using lightLine
// itself anymore, instead interpolating between axis.color
// and the background color using tinycolor.mix. lightFraction
// gives back exactly lightLine if the other colors are defaults.
exports.lightFraction = 100 * (0xe - 0x4) / (0xf - 0x4);
