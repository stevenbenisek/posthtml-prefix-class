'use strict';

var assert = require('assert');
var posthtml = require('posthtml');
var posthtmlPrefixClass = require('../index.js');

var input = '<div class="selector-1 selector-2"></div>';

function test(input, expected, options) {
    return posthtml()
        .use(posthtmlPrefixClass(options))
        .process(input)
        .then(function(output) {
            assert.equal(output.html, expected);
        });
}

describe('posthtml-prefix-class', function () {
    it('posthtmlPrefixClass()', function () {
        test(
            input,
            input
        );
    });

    it('posthtmlPrefixClass({ prefix: String })', function () {
        test(
            input,
            '<div class="prefix-selector-1 prefix-selector-2"></div>',
            { prefix: 'prefix-' }
        );
    });

    it('posthtmlPrefixClass({ prefix: String, ignore: String })', function () {
        test(
            input,
            '<div class="prefix-selector-1 selector-2"></div>',
            { prefix: 'prefix-', ignore: 'selector-2' }
        );
    });

    it('posthtmlPrefixClass({ prefix: String, ignore: *String })', function () {
        test(
            input,
            '<div class="prefix-selector-1 selector-2"></div>',
            { prefix: 'prefix-', ignore: '*-2' }
        );
    });

    it('posthtmlPrefixClass({ prefix: String, ignore: Array })', function () {
        test(
            input,
            input,
            { prefix: 'prefix-', ignore: ['selector-1', 'selector-2'] }
        );
    });

    it('posthtmlPrefixClass({ prefix: String, ignore: *Array })', function () {
        test(
            input,
            input,
            { prefix: 'prefix-', ignore: ['*-1', '*-2'] }
        );
    });
});
