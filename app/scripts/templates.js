angular.module('sg.graphene.sbml.templates', ['templates/bower_components/spectrum/index.html', 'templates/bower_components/spectrum/themes/index.html', 'templates/context-menus.html', 'templates/details.html', 'templates/sbml.html', 'templates/toolbar.html']);

angular.module('templates/bower_components/spectrum/index.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('templates/bower_components/spectrum/index.html',
    '<!doctype html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta http-equiv="content-type" content="text/html; charset=UTF-8">\n' +
    '    <title>Spectrum - The No Hassle jQuery Colorpicker</title>\n' +
    '\n' +
    '    <meta name="description" content="Spectrum is a JavaScript colorpicker plugin using the jQuery framework.  It is highly customizable, but can also be used as a simple input type=color polyfill">\n' +
    '    <meta name="author" content="Brian Grinstead and Spectrum contributors">\n' +
    '\n' +
    '    <link rel="stylesheet" type="text/css" href="spectrum.css">\n' +
    '    <link rel="stylesheet" type="text/css" href="docs/bootstrap.css">\n' +
    '    <link rel="stylesheet" type="text/css" href="docs/docs.css">\n' +
    '    <script type="text/javascript" src="docs/jquery-1.9.1.js"></script>\n' +
    '    <script type="text/javascript" src="spectrum.js"></script>\n' +
    '    <script type=\'text/javascript\' src=\'docs/toc.js\'></script>\n' +
    '    <script type=\'text/javascript\' src=\'docs/docs.js\'></script>\n' +
    '</head>\n' +
    '<body>\n' +
    '<div id=\'header\'>\n' +
    '    <h1><a href=\'http://bgrins.github.com/spectrum\'>Spectrum</a></h1> <h2><em>The No Hassle jQuery Colorpicker</em></h2>\n' +
    '    <div id=\'links\'>\n' +
    '        <a href=\'http://github.com/bgrins/spectrum/zipball/1.4.1\' class="btn btn-primary">Download Zip</a>\n' +
    '        View the <a href=\'http://github.com/bgrins/spectrum\'>Source code</a>.\n' +
    '        Spectrum is a project by <a href=\'http://twitter.com/bgrins\'>@bgrins</a>.\n' +
    '    </div>\n' +
    '    <br style=\'clear:both;\' />\n' +
    '</div>\n' +
    '\n' +
    '<div id=\'toc\'></div>\n' +
    '<div id=\'toc-slider\'></div>\n' +
    '\n' +
    '<div id=\'docs\'>\n' +
    '    <div id=\'docs-content\'>\n' +
    '\n' +
    '    <div id=\'switch-current\'>\n' +
    '        <input type=\'text\' name=\'color1\' id=\'pick1\' value=\'#ddddff\' />\n' +
    '        <div id=\'switch-current-hsv\' class=\'switch-current-output\'></div>\n' +
    '        <div id=\'switch-current-rgb\' class=\'switch-current-output\'></div>\n' +
    '        <div id=\'switch-current-hex\' class=\'switch-current-output\'></div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div style=\'text-align:center;\'>\n' +
    '    <input id="full" />\n' +
    '    </div>\n' +
    '\n' +
    '<pre class=\'prettyprint hide\' id=\'code-heading\'>\n' +
    '&lt;input type=\'color\' value=\'#f594d0\' /&gt;\n' +
    '<input type=\'color\' class=\'basic\' value=\'#f594d0\' />\n' +
    '</pre>\n' +
    '\n' +
    '        <h2 id="why">Why A Colorpicker?</h2>\n' +
    '        <p><em>I wasn\'t satisfied with the solutions available for colorpicking</em>.\n' +
    '        Many of them included a ton of images, were hard to skin or customize, or were very large plugins.\n' +
    '        Here are the goals I had when making a new one:\n' +
    '        </p>\n' +
    '\n' +
    '        <h3 id="why-footprint" class=\'point\'>Small Footprint</h3>\n' +
    '        <div class=\'note\'>see a working <a href=\'http://jsfiddle.net/bgrins/ctkY3/\'>jsFiddle example</a></div>\n' +
    '        <p>Just include the needed CSS and JavaScript files, and you are ready to go!  </p>\n' +
    '<pre class=\'prettyprint\' id=\'code-subheading\'>\n' +
    '&lt;script src=\'<a href=\'http://bgrins.github.com/spectrum/spectrum.js\' target="_blank">spectrum.js</a>\'&gt;&lt;/script&gt;\n' +
    '&lt;link rel=\'stylesheet\' href=\'<a href=\'http://bgrins.github.com/spectrum/spectrum.css\' target="_blank">spectrum.css</a>\' /&gt;\n' +
    '</pre>\n' +
    '        <p><strong>We don\'t need no stinkin\' images!</strong></p>\n' +
    '        <p>Nobody wants to add a bunch of code into their project.  Spectrum is contained in two files, and both are careful not to mess with your existing code.</p>\n' +
    '\n' +
    '        <h3 id="why-polyfill" class=\'point\'>Polyfill</h3>\n' +
    '        <p>I wanted an option for the most basic use case, a polyfill for the <a href=\'http://dev.w3.org/html5/markup/input.color.html\'>input[type=color]</a> HTML5 control.\n' +
    '           This mode needs to work without JavaScript enabled - and fallback to an input[type=text] like other HTML5 inputs.\n' +
    '        </p>\n' +
    '        <p>If you don\'t want this behavior to happen, but still want to use spectrum elsewhere on the page, you can set <code>$.fn.spectrum.load = false;</code> right after loading the script file.</p>\n' +
    '\n' +
    '\n' +
    '        <h3 id="why-customizable" class=\'point\'>Customizable</h3>\n' +
    '        <p>Just because you don\'t <em>have</em> to change anything to get it to work, doesn\'t mean you <em>can\'t</em>!\n' +
    '        It is easy to skin and customize the plugin with CSS, and there are a wide range of modes and options to explore.\n' +
    '        </p>\n' +
    '\n' +
    '        <h3 id="why-mobile" class=\'point\'>Mobile Support</h3>\n' +
    '        <p>Along with desktop browser support, I wanted a mobile colorpicker that was touch friendly, worked in iOS and Android, and used standards\n' +
    '            that maximize future mobile support.\n' +
    '        </p>\n' +
    '\n' +
    '        <h3 id="why-devtools" class=\'point\'>Devtools</h3>\n' +
    '\n' +
    '        <p>\n' +
    '            Believe it or not, <strong>this colorpicker lives inside of Chrome, Firefox, and Safari devtools</strong> to make picking colors easier for web developers and designers.\n' +
    '        </p>\n' +
    '\n' +
    '        <p>\n' +
    '            When I started the project, I wrote about <a href="http://www.briangrinstead.com/blog/chrome-developer-tools-colorpicker-concept">developer tools concept colorpicker implementation</a>.  After that, I was <a href="http://groups.google.com/group/google-chrome-developer-tools/browse_thread/thread/4dd1e853b8051727/4549a6f0788885d4">contacted on the devtools mailing list</a> and got some initial feedback about the possibility of integrating it with devtools.  Then I pulled the jQuery dependency out of a branch and I submitted a patch to the WebKit project.\n' +
    '        </p>\n' +
    '\n' +
    '        <p>\n' +
    '            From there, I opened a <a href="https://bugs.webkit.org/show_bug.cgi?id=71262">bug</a> to start working on it Web Inspector.  50+ comments and 10 patches later, the case <a href="http://www.webkit.org/blog/1804/last-week-in-webkit-calculated-css-values-and-the-translate-attribute/">landed in WebKit</a>. Here is the <a href=\'https://bugzilla.mozilla.org/show_bug.cgi?id=911702\'>Firefox bug</a> where it was added.\n' +
    '        </p>\n' +
    '\n' +
    '\n' +
    '        <h2 id="modes">Modes</h2>\n' +
    '        <h3 id="modes-input" class=\'point\'>input[type=color]</h3>\n' +
    '\n' +
    '    <p>\n' +
    '    If you just want to provide a polyfill for the native color input,\n' +
    '    the easiest way is to create an input with the type of color.\n' +
    '    Once a user\'s browser supports a native color control, it will opt to use their native control instead.\n' +
    '    </p>\n' +
    '    <p><strong>Unlike the other modes, your value must be a 6 character hex value starting with a \'#\'.</strong>  Why?  Because the spec <a href=\'http://dev.w3.org/html5/markup/input.color.html#input.color.attrs.value\'>says so</a>, that\'s why.\n' +
    '    </p>\n' +
    '\n' +
    '<pre class=\'prettyprint\' id=\'code-subheading\'>\n' +
    '&lt;input type=\'color\' name=\'color\' /&gt;\n' +
    '&lt;input type=\'color\' name=\'color2\' value=\'#3355cc\' /&gt;\n' +
    '</pre>\n' +
    '    <div class=\'example\'>\n' +
    '<form method="get">\n' +
    '    <input type=\'color\' name=\'color\' />\n' +
    '    <input type=\'color\' name=\'color2\' value=\'#3355cc\' />\n' +
    '    <input type=\'color\' name=\'color3\' value=\'#000000\' />\n' +
    '    <input type="submit" />\n' +
    '</form>\n' +
    '    </div>\n' +
    '    <p><strong>That\'s it!</strong>\n' +
    '    The field will degrade to a text input if the user does not have JavaScript enabled,\n' +
    '    so that they will still be able to manually enter a color.  You don\'t need to add a single line of code.\n' +
    '    </p>\n' +
    '\n' +
    '        <h3 id="modes-custom" class=\'point\'>Custom</h3>\n' +
    '    <p>If you want to get more into the functionality, just create a normal input and initialize it as a normal jQuery plugin.\n' +
    '    <strong>You can set a lot of options</strong> when initializing the colorpicker.\n' +
    '    See the \'Options\' section below.\n' +
    '    </p>\n' +
    '\n' +
    '<pre class=\'prettyprint\'>\n' +
    '&lt;input type=\'text\' id="custom" /&gt;\n' +
    '</pre>\n' +
    '\n' +
    '<pre class=\'prettyprint\'>\n' +
    '&lt;script&gt;\n' +
    '$("#custom").spectrum({\n' +
    '    color: "#f00"\n' +
    '});\n' +
    '&lt;/script&gt;\n' +
    '</pre>\n' +
    '\n' +
    '        <div class=\'example\'>\n' +
    '            <input type=\'text\' id=\'custom\' />\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="modes-flat" class=\'point\'>Flat</h3>\n' +
    '        <p><strong>Flat</strong>\n' +
    '            This means that it will always show up at full size,\n' +
    '            and be positioned as an inline-block element.\n' +
    '            Look to the left for a full sized flat picker.\n' +
    '        </p>\n' +
    '\n' +
    '<pre class=\'prettyprint\'>\n' +
    '&lt;input type=\'text\' id="flat" /&gt;\n' +
    '&lt;br/&gt;\n' +
    '&lt;input type=\'text\' id="flat" /&gt;\n' +
    '</pre>\n' +
    '<pre class=\'prettyprint\'>\n' +
    '$("#flat").spectrum({\n' +
    '    flat: true,\n' +
    '    showInput: true\n' +
    '});\n' +
    '$("#flatClearable").spectrum({\n' +
    '    flat: true,\n' +
    '    showInput: true,\n' +
    '    allowEmpty:true\n' +
    '});\n' +
    '</pre>\n' +
    '\n' +
    '        <div class=\'example\'>\n' +
    '            <input type=\'text\' id=\'flat\' value="limegreen" />\n' +
    '            <br/>\n' +
    '            <input type=\'text\' id=\'flatClearable\' value="limegreen" />\n' +
    '        </div>\n' +
    '\n' +
    '<!--\n' +
    '<div class="alert">\n' +
    '    Heads up!  Make sure you do not have a <code>maxlength</code> property set on your input.  It has been known to break IE10.\n' +
    '</div>\n' +
    '-->\n' +
    '\n' +
    '        <h2 id="options">Options</h2>\n' +
    '<pre class=\'prettyprint\'>\n' +
    '$("#picker").spectrum({\n' +
    '    color: <strong>tinycolor</strong>,\n' +
    '    flat: bool,\n' +
    '    showInput: bool,\n' +
    '    showInitial: bool,\n' +
    '    allowEmpty: bool,\n' +
    '    showAlpha: bool,\n' +
    '    disabled: bool,\n' +
    '    localStorageKey: string,\n' +
    '    showPalette: bool,\n' +
    '    showPaletteOnly: bool,\n' +
    '    togglePaletteOnly: bool,\n' +
    '    showSelectionPalette: bool,\n' +
    '    clickoutFiresChange: bool,\n' +
    '    cancelText: string,\n' +
    '    chooseText: string,\n' +
    '    togglePaletteMoreText: string,\n' +
    '    togglePaletteLessText: string,\n' +
    '    containerClassName: string,\n' +
    '    replacerClassName: string,\n' +
    '    preferredFormat: string,\n' +
    '    maxSelectionSize: int,\n' +
    '    palette: [[string]],\n' +
    '    selectionPalette: [string]\n' +
    '});\n' +
    '</pre>\n' +
    '        <div class="alert alert-info">\n' +
    '            Tip: options can be specified in an options object in the <code>spectrum</code> initializer, like <code>$(element).spectrum({showAlpha: true })</code> or on the element\'s markup, like <code>&lt;input data-show-alpha="true" /&gt;</code>.\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-color">Color</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                The initial color will be set with the <code>color</code> option.\n' +
    '                If you don\'t pass in a color, Spectrum will use the <code>value</code> attribute on the input.\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                The color parsing is based on the <a href=\'https://github.com/bgrins/TinyColor\'>TinyColor</a> plugin.\n' +
    '                This should parse any color string you throw at it.</p>\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '&lt;input type=\'text\' class=\'basic\' value=\'red\' /&gt;\n' +
    '&lt;input type=\'text\' class=\'basic\' value=\'#0f0\' /&gt;\n' +
    '&lt;input type=\'text\' class=\'basic\' value=\'blue\' /&gt;\n' +
    '&lt;br /&gt;\n' +
    '&lt;input type=\'text\' class=\'override\' /&gt;\n' +
    '&lt;br /&gt;\n' +
    '&lt;input type=\'text\' class=\'startEmpty\' value=\'\' /&gt;\n' +
    '            </pre>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '&lt;script&gt;\n' +
    '$(".basic").spectrum();\n' +
    '$(".override").spectrum({\n' +
    '    color: "yellow"\n' +
    '});\n' +
    '(".startEmpty").spectrum({\n' +
    '    allowEmpty: true\n' +
    '});\n' +
    '&lt;/script&gt;\n' +
    '            </pre>\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' class=\'basic\' value=\'red\' />\n' +
    '                <input type=\'text\' class=\'basic\' value=\'green\' />\n' +
    '                <input type=\'text\' class=\'basic\' value=\'blue\' />\n' +
    '                <br />\n' +
    '                <input type=\'text\' class=\'override\' />\n' +
    '                <br/>\n' +
    '                <input type=\'text\' class=\'startEmpty\' value=\'\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-showInput">Show Input</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>You can add an input to allow free form typing.  The color parsing is very permissive in the allowed strings.  See <a href=\'https://github.com/bgrins/TinyColor\'>TinyColor</a> for more details.\n' +
    '            </div>\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#showInput").spectrum({\n' +
    '    showInput: true\n' +
    '});\n' +
    '$("#showInputWithClear").spectrum({\n' +
    '    showInput: true,\n' +
    '    allowEmpty:true\n' +
    '});\n' +
    '            </pre>\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' name=\'showInput\' id=\'showInput\' />\n' +
    '                 <br/>\n' +
    '                <input type=\'text\' name=\'showInputWithClear\' id=\'showInputWithClear\' value=\'\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-showAlpha">Show Alpha</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>You can allow alpha transparency selection.  Check out these examples: </p>\n' +
    '            </div>\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#showAlpha").spectrum({\n' +
    '    showAlpha: true\n' +
    '});\n' +
    '            </pre>\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' name=\'showAlpha\' id=\'showAlpha\' />\n' +
    '            </div>\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' name=\'showAlphaWithInput\' id=\'showAlphaWithInput\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-disabled">Disabled</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '            <p>Spectrum can be automatically disabled if you pass in the <code>disabled</code> flag.  Additionally, if the input that you initialize spectrum on is disabled, this will be the default value.  Note: you <strong>cannot</strong> enable spectrum if the input is disabled (see below).</p>\n' +
    '            </div>\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#disabled").spectrum({\n' +
    '    disabled: true\n' +
    '});\n' +
    '$("input:disabled").spectrum({\n' +
    '\n' +
    '});\n' +
    '            </pre>\n' +
    '            <div class=\'example\'>\n' +
    '                    <input type=\'text\' name=\'disabled\' id=\'disabled\' value=\'lightblue\' />\n' +
    '                    <input type=\'text\' disabled value=\'lightblue\' />\n' +
    '                    <button id=\'toggle-disabled\' class=\'btn\'>Toggle Disabled</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-showPalette">Show Palette</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '            <p>Spectrum can show a palette below the colorpicker to make it convenient for users to choose from frequently or recently used colors.  When the colorpicker is closed, the current color will be added to the palette if it isn\'t there already.  Check it out here: </p>\n' +
    '            </div>\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#showPalette").spectrum({\n' +
    '    showPalette: true,\n' +
    '    palette: [\n' +
    '        [\'black\', \'white\', \'blanchedalmond\'],\n' +
    '        [\'rgb(255, 128, 0);\', \'hsv 100 70 50\', \'lightyellow\']\n' +
    '    ]\n' +
    '});\n' +
    '            </pre>\n' +
    '            <div class=\'example\'>\n' +
    '                    <input type=\'text\' name=\'showPalette\' id=\'showPalette\' value=\'lightblue\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-showPaletteOnly">Show Palette Only</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'note\'>see a working <a href=\'http://jsfiddle.net/bgrins/S45tW/\'>jsFiddle example</a></div>\n' +
    '            <div class=\'description\'>\n' +
    '            <p>If you\'d like, spectrum can show the palettes you specify, and nothing else.</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#showPaletteOnly").spectrum({\n' +
    '    showPaletteOnly: true,\n' +
    '    showPalette:true,\n' +
    '    color: \'blanchedalmond\',\n' +
    '    palette: [\n' +
    '        [\'black\', \'white\', \'blanchedalmond\',\n' +
    '        \'rgb(255, 128, 0);\', \'hsv 100 70 50\'],\n' +
    '        [\'red\', \'yellow\', \'green\', \'blue\', \'violet\']\n' +
    '    ]\n' +
    '});\n' +
    '            </pre>\n' +
    '            <div class=\'example\'>\n' +
    '            <span class=\'label label-result\'>\n' +
    '            Result\n' +
    '            </span>\n' +
    '                <input type=\'text\' name=\'showPaletteOnly\' id=\'showPaletteOnly\'  />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-togglePaletteOnly">Toggle Palette Only</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '            <p>Spectrum can show a button to toggle the colorpicker next to the palette. This way, the user can choose from a limited number of colors in the palette, but still be able to pick a color that\'s not in the palette.<br />\n' +
    '                The default value for <code>togglePaletteOnly</code> is FALSE. Set it to TRUE to enable the Toggle button.<br /><br />\n' +
    '                You can also change the text on the Toggle Button with the options <code>togglePaletteMoreText</code> (default is "more") and <code>togglePaletteLessText</code> (default is "less").</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#togglePaletteOnly").spectrum({\n' +
    '    showPaletteOnly: true,\n' +
    '    togglePaletteOnly: true,\n' +
    '    togglePaletteMoreText: \'more\',\n' +
    '    togglePaletteLessText: \'less\',\n' +
    '    color: \'blanchedalmond\',\n' +
    '    palette: [\n' +
    '        ["#000","#444","#666","#999","#ccc","#eee","#f3f3f3","#fff"],\n' +
    '        ["#f00","#f90","#ff0","#0f0","#0ff","#00f","#90f","#f0f"],\n' +
    '        ["#f4cccc","#fce5cd","#fff2cc","#d9ead3","#d0e0e3","#cfe2f3","#d9d2e9","#ead1dc"],\n' +
    '        ["#ea9999","#f9cb9c","#ffe599","#b6d7a8","#a2c4c9","#9fc5e8","#b4a7d6","#d5a6bd"],\n' +
    '        ["#e06666","#f6b26b","#ffd966","#93c47d","#76a5af","#6fa8dc","#8e7cc3","#c27ba0"],\n' +
    '        ["#c00","#e69138","#f1c232","#6aa84f","#45818e","#3d85c6","#674ea7","#a64d79"],\n' +
    '        ["#900","#b45f06","#bf9000","#38761d","#134f5c","#0b5394","#351c75","#741b47"],\n' +
    '        ["#600","#783f04","#7f6000","#274e13","#0c343d","#073763","#20124d","#4c1130"]\n' +
    '    ]\n' +
    '});\n' +
    '            </pre>\n' +
    '            <div class=\'example\'>\n' +
    '            <span class=\'label label-result\'>\n' +
    '            Result\n' +
    '            </span>\n' +
    '                <input type=\'text\' name=\'togglePaletteOnly\' id=\'togglePaletteOnly\'  />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-showSelectionPalette">Show Selection Palette</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>Spectrum can keep track of what has been selected by the user with the <code>showSelectionPalette</code> option.</p>\n' +
    '                <p>If the <code>localStorageKey</code> option is defined, the selection will be saved in the browser\'s localStorage object</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#showSelectionPalette").spectrum({\n' +
    '    showPalette: true,\n' +
    '    showSelectionPalette: true, // true by default\n' +
    '    palette: [ ]\n' +
    '});\n' +
    '$("#showSelectionPaletteStorage").spectrum({\n' +
    '    showPalette: true,\n' +
    '    showSelectionPalette: true,\n' +
    '    palette: [ ],\n' +
    '    localStorageKey: "spectrum.homepage", // Any Spectrum with the same string will share selection\n' +
    '});\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                    <span class=\'label label-info\'>This colorpicker will store what you pick:</span><br /><br />\n' +
    '                    <input type=\'text\' name=\'showSelectionPalette\' id=\'showSelectionPalette\' value=\'lightblue\' /><br /><br />\n' +
    '                    <span class=\'label label-info\'>Try switching between the two colorpickers or reloading your page, the chosen colors are always available:</span><br /><br />\n' +
    '                    <input type=\'text\' name=\'showSelectionPaletteStorage\' id=\'showSelectionPaletteStorage\' value=\'lightblue\' />\n' +
    '                    <input type=\'text\' name=\'showSelectionPaletteStorage2\' id=\'showSelectionPaletteStorage2\' value=\'pink\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-clickoutFiresChange">Clickout Fires Change</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                When clicking outside of the colorpicker, you can force it to fire a <code>change</code> event rather than having it revert the change.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#clickoutFiresChange").spectrum({\n' +
    '    clickoutFiresChange: true\n' +
    '});\n' +
    '$("#clickoutDoesntChange").spectrum({\n' +
    '\n' +
    '});\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                    <input type=\'text\' name=\'clickoutFiresChange\' id=\'clickoutFiresChange\' value=\'goldenrod\' />\n' +
    '                    <input type=\'text\' name=\'clickoutDoesntFireChange\' id=\'clickoutDoesntFireChange\' value=\'goldenrod\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-showInitial">Show Initial</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Spectrum can show the color that was initially set when opening.\n' +
    '                This provides an easy way to click back to what was set when opened.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#showInitial").spectrum({\n' +
    '    showInitial: true\n' +
    '});\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                    <input type=\'text\' name=\'showInitial\' id=\'showInitial\' value=\'goldenrod\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-showInputAndInitial">Show Input and Initial</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>If you specify both the <code>showInput</code> and <code>showInitial</code> options, the CSS keeps things in order by wrapping the buttons to the bottom row, and shrinking the input.   <em>Note: this is all customizable via CSS.</em></p>\n' +
    '            </div>\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#showInputAndInitial").spectrum({\n' +
    '    showInitial: true,\n' +
    '    showInput: true\n' +
    '});\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                    <input type=\'text\' name=\'showInputAndInitial\' id=\'showInputAndInitial\' value=\'goldenrod\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '         <h3>Show Input, Initial, and Clear</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>If you specify both the <code>showInput</code>, <code>showInitial</code>, and <code>allowEmpty</code> options, the CSS keeps things in order by wrapping the buttons to the bottom row, and shrinking the input.   <em>Note: this is all customizable via CSS.</em></p>\n' +
    '            </div>\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#showInputInitialClear").spectrum({\n' +
    '    allowEmpty:true,\n' +
    '    showInitial: true,\n' +
    '    showInput: true\n' +
    '});\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                    <input type=\'text\' name=\'showInputInitialClear\' id=\'showInputInitialClear\' value=\'\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <h3 id="options-buttonText">Button Text</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>You can set the button\'s text using <code>cancelText</code> and <code>chooseText</code> properties.</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#buttonText").spectrum({\n' +
    '    allowEmpty:true,\n' +
    '    chooseText: "Alright",\n' +
    '    cancelText: "No way"\n' +
    '});\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                    <input type=\'text\' name=\'buttonText\' id=\'buttonText\' value=\'orangered\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-showButtons">Show Buttons</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                You can show or hide the buttons using the <code>showButtons</code> property.\n' +
    '                If there are no buttons, the behavior will be to fire the `change` event (and update the original input) when the picker is closed.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#hideButtons").spectrum({\n' +
    '    showButtons: false\n' +
    '});\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                    <input type=\'text\' name=\'hideButtons\' id=\'hideButtons\' value=\'orangered\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-containerClassName">Container Class Name</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                You can add an additional class name to the just the container element using the <code>containerClassName</code> property.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#containerClassName").spectrum({\n' +
    '    containerClassName: \'awesome\'\n' +
    '});\n' +
    '            </pre>\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '.awesome {\n' +
    '    background: purple;\n' +
    '}\n' +
    '            </pre>\n' +
    '            <style type=\'text/css\'>\n' +
    '.awesome {\n' +
    '    background: purple;\n' +
    '}\n' +
    '            </style>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                    <input type=\'text\' name=\'containerClassName\' id=\'containerClassName\' value=\'orangered\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-replacerClassName">Replacer Class Name</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                You can add an additional class name to just the replacer element using the <code>replacerClassName</code> property.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#replacerClassName").spectrum({\n' +
    '    replacerClassName: \'awesome\'\n' +
    '});\n' +
    '            </pre>\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '.awesome {\n' +
    '    background: purple;\n' +
    '}\n' +
    '            </pre>\n' +
    '            <style type=\'text/css\'>\n' +
    '.awesome {\n' +
    '    background: purple;\n' +
    '}\n' +
    '            </style>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                    <input type=\'text\' name=\'replacerClassName\' id=\'replacerClassName\' value=\'orangered\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="options-preferredFormat">Preferred Format</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>You can set the format that is displayed in the text box.</p>\n' +
    '                <p>This will also change the format that is displayed in the titles from the palette swatches.</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#preferredHex").spectrum({\n' +
    '    preferredFormat: "hex",\n' +
    '    showInput: true,\n' +
    '    showPalette: true,\n' +
    '    palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]\n' +
    '});\n' +
    '$("#preferredHex3").spectrum({\n' +
    '    preferredFormat: "hex3",\n' +
    '    showInput: true,\n' +
    '    showPalette: true,\n' +
    '    palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]\n' +
    '});\n' +
    '$("#preferredHsl").spectrum({\n' +
    '    preferredFormat: "hsl",\n' +
    '    showInput: true,\n' +
    '    showPalette: true,\n' +
    '    palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]\n' +
    '});\n' +
    '$("#preferredRgb").spectrum({\n' +
    '    preferredFormat: "rgb",\n' +
    '    showInput: true,\n' +
    '    showPalette: true,\n' +
    '    palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]\n' +
    '});\n' +
    '$("#preferredName").spectrum({\n' +
    '    preferredFormat: "name",\n' +
    '    showInput: true,\n' +
    '    showPalette: true,\n' +
    '    palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]\n' +
    '});\n' +
    '$("#preferredNone").spectrum({\n' +
    '    showInput: true,\n' +
    '    showPalette: true,\n' +
    '    palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]]\n' +
    '});\n' +
    '            </pre>\n' +
    '            <div class=\'example\'>\n' +
    '                    <div class=\'alert alert-info\'>Hex</div>\n' +
    '                    <input type=\'text\' name=\'preferredHex\' id=\'preferredHex\' value=\'orangered\' />\n' +
    '                    <div class=\'alert alert-info\'>Hex (3 Characters If Possible)</div>\n' +
    '                    <input type=\'text\' name=\'preferredHex3\' id=\'preferredHex3\' value=\'orangered\' />\n' +
    '                    <div class=\'alert alert-info\'>Hsl</div>\n' +
    '                    <input type=\'text\' name=\'preferredHsl\' id=\'preferredHsl\' value=\'orangered\' />\n' +
    '                    <div class=\'alert alert-info\'>Rgb</div>\n' +
    '                    <input type=\'text\' name=\'preferredRgb\' id=\'preferredRgb\' value=\'orangered\' />\n' +
    '                    <div class=\'alert alert-info\'>Name (Falls back to hex)</div>\n' +
    '                    <input type=\'text\' name=\'preferredName\' id=\'preferredName\' value=\'orangered\' />\n' +
    '                    <div class=\'alert alert-info\'>None (Depends on input - try changing formats with the text box)</div>\n' +
    '                    <input type=\'text\' name=\'preferredNone\' id=\'preferredNone\' value=\'orangered\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h2 id="events">Events</h2>\n' +
    '\n' +
    '<pre class=\'prettyprint\'>\n' +
    '$("#picker").spectrum({\n' +
    '    move: function(tinycolor) { },\n' +
    '    show: function(tinycolor) { },\n' +
    '    hide: function(tinycolor) { },\n' +
    '    beforeShow: function(tinycolor) { },\n' +
    '});\n' +
    '</pre>\n' +
    '\n' +
    '        <h3 id="events-change">change</h3>\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>Called as the original input changes.  Only happens when the input is closed or the \'Choose\' button is clicked.</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    'change: function(color) {\n' +
    '    color.toHexString(); // #ff0000\n' +
    '}\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' value=\'blanchedalmond\' name=\'changeOnMoveNo\' id=\'changeOnMoveNo\' />\n' +
    '                <em id=\'changeOnMoveNoLabel\' class=\'em-label\'></em>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="events-move">move</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>Called as the user moves around within the colorpicker</p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    'move: function(color) {\n' +
    '    color.toHexString(); // #ff0000\n' +
    '}\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' value=\'blanchedalmond\' name=\'changeOnMove\' id=\'changeOnMove\' />\n' +
    '                <em id=\'changeOnMoveLabel\'  class=\'em-label\'></em>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="events-hide">hide</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '\n' +
    '                <p>\n' +
    '                Called after the colorpicker is hidden.\n' +
    '                This happens when clicking outside of the picker while it is open.\n' +
    '                Note, when any colorpicker on the page is shown it will hide any that are already open.\n' +
    '                This event is ignored on a flat colorpicker.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    'hide: function(color) {\n' +
    '    color.toHexString(); // #ff0000\n' +
    '}\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' value=\'blanchedalmond\' name=\'eventhide\' id=\'eventhide\' />\n' +
    '                <em id=\'eventhideLabel\'  class=\'em-label\'></em>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="events-show">show</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Called after the colorpicker is opened.\n' +
    '                This is ignored on a flat colorpicker.\n' +
    '                Note, when any colorpicker on the page is shown it will hide any that are already open.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    'show: function(color) {\n' +
    '    color.toHexString(); // #ff0000\n' +
    '}\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' value=\'blanchedalmond\' name=\'eventshow\' id=\'eventshow\' />\n' +
    '                <em id=\'eventshowLabel\'  class=\'em-label\'></em>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="events-beforeShow">beforeShow</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                You can prevent the colorpicker from showing up if you return false in the beforeShow event.\n' +
    '                This event is ignored on a flat colorpicker.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    'beforeShow: function(color) {\n' +
    '    return false; // Will never show up\n' +
    '}\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' value=\'blanchedalmond\' name=\'beforeShow\' id=\'beforeShow\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="events-dragstart">dragstart</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Called at the beginning of a drag event on either\n' +
    '                hue slider, alpha slider, or main color picker areas\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$(element).on("dragstart.spectrum"): function(e, color) {\n' +
    '    color.toHexString(); // #ff0000\n' +
    '}\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' value=\'blanchedalmond\' name=\'eventdragstart\' id=\'eventdragstart\' />\n' +
    '                <em id=\'eventdragstartLabel\'  class=\'em-label\'></em>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="events-dragstop">dragstop</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Called at the end of a drag event on either\n' +
    '                hue slider, alpha slider, or main color picker areas\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$(element).on("dragstop.spectrum"): function(e, color) {\n' +
    '    color.toHexString(); // #ff0000\n' +
    '}\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' value=\'blanchedalmond\' name=\'eventdragstop\' id=\'eventdragstop\' />\n' +
    '                <em id=\'eventdragstopLabel\'  class=\'em-label\'></em>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <h2 id="methods">Methods</h2>\n' +
    '<pre class=\'prettyprint\'>\n' +
    '$("#picker").spectrum("show");\n' +
    '$("#picker").spectrum("hide");\n' +
    '$("#picker").spectrum("toggle");\n' +
    '$("#picker").spectrum("get");\n' +
    '$("#picker").spectrum("set", colorString);\n' +
    '$("#picker").spectrum("container");\n' +
    '$("#picker").spectrum("reflow");\n' +
    '$("#picker").spectrum("destroy");\n' +
    '$("#picker").spectrum("enable");\n' +
    '$("#picker").spectrum("disable");\n' +
    '$("#picker").spectrum("option", optionName);\n' +
    '$("#picker").spectrum("option", optionName, newOptionValue);\n' +
    '</pre>\n' +
    '\n' +
    '        <h3 id="methods-show">show</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Shows the colorpicker.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="methods-hide">hide</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Hides the colorpicker.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="methods-toggle">toggle</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Toggles the colorpicker.\n' +
    '                </p>\n' +
    '                <p class="warning">\n' +
    '                <b>Warning:</b> If you are calling toggle from a click handler, make sure you <code>return false</code> to prevent the colorpicker from immediately hiding after it is toggled.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '$("#btn-toggle").click(function() {\n' +
    '    $("#toggle").spectrum("toggle");\n' +
    '    return false;\n' +
    '});\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' value=\'blanchedalmond\' name=\'toggle\' id=\'toggle\' />\n' +
    '                <button id=\'btn-toggle\'>Toggle</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="methods-get">get</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Gets the current value from the colorpicker.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="methods-set">set</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Setting the colorpicker programmatically will update the original input.\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                Note: this will <strong>not</strong> fire the <code>change</code> event,\n' +
    '                to prevent infinite loops from calling <code>set</code> from within <code>change</code>.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '            <pre class=\'prettyprint\'>\n' +
    '&lt;input type=\'text\' value=\'blanchedalmond\' name=\'triggerSet\' id=\'triggerSet\' /&gt;\n' +
    '&lt;input type=\'text\' placeholder=\'Enter A Color\' id=\'enterAColor\' /&gt;\n' +
    '&lt;button id=\'btnEnterAColor\'&gt;Trigger Set&lt;/button&gt;\n' +
    '\n' +
    '&lt;script&gt;\n' +
    '$("#triggerSet").spectrum();\n' +
    '\n' +
    '// Show the original input to demonstrate the value changing when calling `set`\n' +
    '$("#triggerSet").show();\n' +
    '\n' +
    '$("#btnEnterAColor").click(function() {\n' +
    '    $("#triggerSet").spectrum("set", $("#enterAColor").val());\n' +
    '});\n' +
    '&lt;/script&gt;\n' +
    '            </pre>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' value=\'blanchedalmond\' name=\'triggerSet\' id=\'triggerSet\' /><br /><br />\n' +
    '                <input type=\'text\' placeholder=\'Enter A Color\' id=\'enterAColor\' /><button id=\'btnEnterAColor\'>Trigger Set</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="methods-container">container</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Retrieves the container element of the colorpicker, in case you want to manaully position it or do other things.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="methods-reflow">reflow</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Resets the positioning of the container element.  This could be used was hidden when initialized, or if the colorpicker is inside of a moving area.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="methods-destroy">destroy</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Removes the colorpicker functionality and restores the element to its original state.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="methods-enable">enable</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Allows selection of the colorpicker component.  If it is already enabled, this method does nothing.\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                Additionally, this will cause the original (now hidden) input to be set as disabled.\n' +
    '                </p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="methods-disable">disable</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Disables selection of the colorpicker component.  Adds the <code>sp-disabled</code> class onto the replacer element.  If it is already disabled, this method does nothing.\n' +
    '                </p>\n' +
    '                <p>\n' +
    '                Additionally, this will remove the <code>disabled</code> property on the original (now hidden).\n' +
    '                </p>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <h3 id="methods-option">option</h3>\n' +
    '\n' +
    '        <div class=\'option-content\'>\n' +
    '            <div class=\'description\'>\n' +
    '                <p>\n' +
    '                Calling <code>option</code> with an option name will return the current value of that option.  So, for example:\n' +
    '                </p>\n' +
    '                <pre class=\'prettyprint\'>\n' +
    '$("input").spectrum({\n' +
    '    showInput: true\n' +
    '});\n' +
    '\n' +
    '$("input").spectrum("option", "showInput"); // true\n' +
    '                </pre>\n' +
    '                <p>\n' +
    '                Calling <code>option</code> with an option name and an option value will set the option to the new value.\n' +
    '                </p>\n' +
    '                <pre class=\'prettyprint\'>\n' +
    '$("input").spectrum({\n' +
    '    showInput: true\n' +
    '});\n' +
    '\n' +
    '$("input").spectrum("option", "showInput", false);\n' +
    '$("input").spectrum("option", "showInput"); // false\n' +
    '                </pre>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <h2 id="skinning">Skinning</h2>\n' +
    '\n' +
    '        <p>Since it is all built with HTML/CSS, you can skin it easily.  There are two parts to the <a href=\'https://github.com/bgrins/spectrum/blob/master/spectrum.css\'>spectrum.css</a> file, the core rules (at the top of the file), and the themable rules (at the bottom).  Feel free to tweak these rules to make it look how you want.</p>\n' +
    '\n' +
    '        <h3 id="skinning-nonInput" class=\'point\'>Non-input elements</h3>\n' +
    '        <p>\n' +
    '            You can use any element you would like to trigger the colorpicker: <a href=\'#\' id=\'openWithLink\'>Click me to open a colorpicker</a>, though it is strongly recommended to stick with <code>&lt;input&gt;</code> tags.\n' +
    '        </p>\n' +
    '\n' +
    '        <h2 id="details">Nitty Gritty</h2>\n' +
    '\n' +
    '        <h3 id="details-browserSupport" class=\'point\'>Browser Support</h3>\n' +
    '        <p>I wanted this to work in the latest and greatest browsers, but also target backwords compatibility and <strong>mobile support</strong>.\n' +
    '        Here are the currently supported browers:\n' +
    '        <ul>\n' +
    '            <li>IE <small>6+</small></li>\n' +
    '            <li>Chrome <small>4+</small></li>\n' +
    '            <li>Firefox <small>3.6+</small></li>\n' +
    '            <li>Safari <small>4+</small></li>\n' +
    '            <li>Opera <small>11.1+</small></li>\n' +
    '            <li>iOS</li>\n' +
    '        </ul>\n' +
    '\n' +
    '        <h3 id="details-ieImplementation" class=\'point\'>IE Implementation</h3>\n' +
    '        <p>\n' +
    '        IE Support is provided using\n' +
    '        <a href=\'http://msdn.microsoft.com/en-us/library/ms532997(v=vs.85).aspx\'>proprietary filters</a>.\n' +
    '        Other browsers use CSS gradients.\n' +
    '        </p>\n' +
    '\n' +
    '\n' +
    '        <h3 id="details-acceptedColorInputs" class=\'point\'>Accepted Color Inputs</h3>\n' +
    '        <p>Spectrum will use the color passed in to initialize.  If there is no color passed in,\n' +
    '        it will try to parse a color based on the <code>value</code> of the input.  The color parsing is based on the <a href=\'https://github.com/bgrins/TinyColor\'>TinyColor</a> plugin, and accepts many forms of input:</p>\n' +
    '<pre class=\'prettyprint\'>\n' +
    'red\n' +
    '#fff\n' +
    'fff\n' +
    '#ffffff\n' +
    'ffffff\n' +
    'rgb(255, 0, 0)\n' +
    'rgb 255 0 0\n' +
    'hsl(0, 100, 50)\n' +
    'hsl(0, 100%, 50%)\n' +
    'hsl 0 100 50\n' +
    'hsl 0 100% 50%\n' +
    'hsv(0, 100%, 100%)\n' +
    'hsv(0, 100, 100)\n' +
    'hsv 0 100% 100%\n' +
    'hsv 0 100 100\n' +
    '</pre>\n' +
    '        <p>It also provides the following forms of output:</p>\n' +
    '<pre class=\'prettyprint\'>\n' +
    'var t = $("#element").spectrum("get");\n' +
    't.toHex()       // "ff0000"\n' +
    't.toHexString() // "#ff0000"\n' +
    't.toRgb()       // {"r":255,"g":0,"b":0}\n' +
    't.toRgbString() // "rgb(255, 0, 0)"\n' +
    't.toHsv()       // {"h":0,"s":1,"v":1}\n' +
    't.toHsvString() // "hsv(0, 100%, 100%)"\n' +
    't.toHsl()       // {"h":0,"s":1,"l":0.5}\n' +
    't.toHslString() // "hsl(0, 100%, 50%)"\n' +
    't.toName()      // "red"\n' +
    '</pre>\n' +
    '\n' +
    '\n' +
    '    <div class=\'footer\'>\n' +
    '        <h2>Share</h2>\n' +
    '        <p>\n' +
    '        If you\'ve made it this far, please share one of these links to help others find this project!\n' +
    '        <br />\n' +
    '        <a href=\'http://bgrins.github.com/spectrum\'>JavaScript Colorpicker</a> |\n' +
    '        <a href=\'http://bgrins.github.com/spectrum\'>jQuery Colorpicker</a> |\n' +
    '        <a href=\'http://bgrins.github.com/spectrum\'>Mobile Colorpicker</a> |\n' +
    '        <a href=\'http://bgrins.github.com/spectrum\'>Spectrum colorpicker</a>\n' +
    '        </p>\n' +
    '        <p>\n' +
    '        Thanks to all the <a href=\'https://github.com/bgrins/spectrum/graphs/contributors\'>spectrum contributors</a> for committing code, documentation, and <a href=\'https://github.com/bgrins/spectrum/tree/master/i18n\'>translations</a>.\n' +
    '        </p>\n' +
    '        <p>\n' +
    '        If you want to let me (<a href=\'http://twitter.com/bgrins\'>@bgrins</a>) know you are using it, send me a link where it can be seen or add it to the <a href=\'https://github.com/bgrins/spectrum/wiki/Sites-Using-Spectrum\'>list of projects using Spectrum</a>!\n' +
    '        </p>\n' +
    '    </div>\n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '</div>\n' +
    '\n' +
    '<script type="text/javascript" src="docs/prettify.js"></script>\n' +
    '<script type="text/javascript">\n' +
    '\n' +
    '  var _gaq = _gaq || [];\n' +
    '  _gaq.push([\'_setAccount\', \'UA-8259845-4\']);\n' +
    '  _gaq.push([\'_trackPageview\']);\n' +
    '\n' +
    '  (function() {\n' +
    '    var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n' +
    '    ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n' +
    '    var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n' +
    '  })();\n' +
    '\n' +
    '</script>\n' +
    '</body>\n' +
    '</html>\n' +
    '');
}]);

angular.module('templates/bower_components/spectrum/themes/index.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('templates/bower_components/spectrum/themes/index.html',
    '<!doctype html>\n' +
    '<html>\n' +
    '<head>\n' +
    '    <meta http-equiv="content-type" content="text/html; charset=UTF-8">\n' +
    '    <title>Spectrum - The No Hassle jQuery Colorpicker</title>\n' +
    '\n' +
    '    <meta name="description" content="Spectrum is a JavaScript colorpicker plugin using the jQuery framework.  It is highly customizable, but can also be used as a simple input type=color polyfill">\n' +
    '    <meta name="author" content="Brian Grinstead and Spectrum contributors">\n' +
    '\n' +
    '    <link rel="stylesheet" type="text/css" href="../spectrum.css">\n' +
    '    <link rel="stylesheet" type="text/css" href="../docs/bootstrap.css">\n' +
    '    <link rel="stylesheet" type="text/css" href="../docs/docs.css">\n' +
    '    <script type="text/javascript" src="../docs/jquery-1.9.1.js"></script>\n' +
    '    <script type="text/javascript" src="../spectrum.js"></script>\n' +
    '\n' +
    '\n' +
    '    <link rel="stylesheet" type="text/css" href="sp-dark.css">\n' +
    '\n' +
    '</head>\n' +
    '<body>\n' +
    '<div id=\'header\'>\n' +
    '    <h1><a href=\'http://bgrins.github.com/spectrum\'>Spectrum</a></h1> <h2><em>The No Hassle jQuery Colorpicker</em></h2>\n' +
    '    <div id=\'links\'>\n' +
    '        View the <a href=\'http://github.com/bgrins/spectrum\'>Source code</a>.\n' +
    '        Spectrum is a project by <a href=\'http://twitter.com/bgrins\'>@bgrins</a>.\n' +
    '    </div>\n' +
    '    <br style=\'clear:both;\' />\n' +
    '</div>\n' +
    '\n' +
    '<div class="container">\n' +
    '    <h2>Themes</h2>\n' +
    '\n' +
    '    <div class="alert">\n' +
    '        This page is in development.\n' +
    '    </div>\n' +
    '\n' +
    '    <div id="theme-gallery">\n' +
    '        <h3>Gallery of existing themes</h3>\n' +
    '\n' +
    '        <div class="theme" id="sp-light">\n' +
    '            <h4>sp-light</h4>\n' +
    '            <p>This is the default theme that you know and love.</p>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="theme" id="sp-dark">\n' +
    '            <h4>sp-dark</h4>\n' +
    '            <p>Similar to sp-light, only ... darker</p>\n' +
    '\n' +
    '            <div class=\'example\'>\n' +
    '                <input type=\'text\' />\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div id="theme-instructions">\n' +
    '        <h3>Instructions for building themes</h3>\n' +
    '        <p>\n' +
    '            You can change most any property on spectrum using CSS.  Anything from  borders and colors, to the size of the draggable areas, to the layout of the colorpicker can be changed with plain CSS.\n' +
    '        </p>\n' +
    '        <h4>Playing friendly with other themes</h4>\n' +
    '        <p>\n' +
    '            Please prefix all of your rules with <code>.theme-name</code>.  The exception is for changes to <code>.sp-container</code> and <code>.sp-replacer</code>, which will have your theme name applied.\n' +
    '        </p>\n' +
    '        <p>\n' +
    '            See a basic scaffold for a super simple theme.  See <a href=\'sp-dark.css\'>sp-dark.css</a> for a slightly more advanced example.\n' +
    '        </p>\n' +
    '        <pre>\n' +
    '.theme-name.sp-container {\n' +
    '\n' +
    '}\n' +
    '.theme-name.sp-replacer {\n' +
    '\n' +
    '}\n' +
    '.theme-name .sp-preview {\n' +
    '\n' +
    '}\n' +
    '        </pre>\n' +
    '        <h3>Submitting a theme</h3>\n' +
    '        <p>\n' +
    '            If you have made some customizations that you would like to share, please open a <a href="http://bgrins.github.com/spectrum/pulls">pull request</a> with the theme file inside of this themes/ directory in the project.  Or <a href="http://bgrins.github.com/spectrum/issues">open an issue</a> with a link to the theme.\n' +
    '        </p>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<script>\n' +
    '    $("#sp-light input").spectrum({\n' +
    '        theme: "sp-light"\n' +
    '    });\n' +
    '    $("#sp-dark input").spectrum({\n' +
    '        theme: "sp-dark"\n' +
    '    });\n' +
    '</script>\n' +
    '<script type="text/javascript" src="../docs/prettify.js"></script>\n' +
    '<script type="text/javascript">\n' +
    '\n' +
    '  var _gaq = _gaq || [];\n' +
    '  _gaq.push([\'_setAccount\', \'UA-8259845-4\']);\n' +
    '  _gaq.push([\'_trackPageview\']);\n' +
    '\n' +
    '  (function() {\n' +
    '    var ga = document.createElement(\'script\'); ga.type = \'text/javascript\'; ga.async = true;\n' +
    '    ga.src = (\'https:\' == document.location.protocol ? \'https://ssl\' : \'http://www\') + \'.google-analytics.com/ga.js\';\n' +
    '    var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(ga, s);\n' +
    '  })();\n' +
    '\n' +
    '</script>\n' +
    '</body>\n' +
    '</html>\n' +
    '');
}]);

angular.module('templates/context-menus.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('templates/context-menus.html',
    '<div ng-repeat="node in model.nodes.species" class="dropdown position-fixed" id="speciesMenu{{node.id}}">\n' +
    '  <ul class="dropdown-menu" role="menu">\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="1" ng-click="node.fixed = !node.fixed">Lock/Unlock Species</a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="1" ng-click="node.model.makeAliasNode(node)">Create Alias Node</a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="2" ng-click="node.delete()">Delete Species</a>\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '<div ng-repeat="node in model.nodes.alias" class="dropdown position-fixed" id="aliasMenu{{node.id}}">\n' +
    '  <ul class="dropdown-menu" role="menu">\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="1" ng-click="node.fixed = !node.fixed">Lock/Unlock Alias</a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="2" ng-click="node.delete()">Delete Alias</a>\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '<div ng-repeat="node in model.nodes.reactions" class="dropdown position-fixed" id="reactionMenu{{node.id}}">\n' +
    '  <ul class="dropdown-menu" role="menu">\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="1" ng-click="node.fixed = !node.fixed">Lock/Unlock Reaction</a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a class="pointer" role="menuitem" tabindex="2" ng-click="node.delete()">Delete Reaction</a>\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</div>\n' +
    '');
}]);

angular.module('templates/details.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('templates/details.html',
    '<form class="form-horizontal" role="form">\n' +
    '  <h4>Details</h4>\n' +
    '  <div class="form-group">\n' +
    '    <div class="row">\n' +
    '      <label class="col-sm-4 control-label">ID:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <input type="text" class="form-control" ng-model="AppState.selected.data._id"></input>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '      <label class="col-sm-4 control-label">Name:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <input type="text" class="form-control" ng-model="AppState.selected.data._name"></input>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '  <h4>Display</h4>\n' +
    '  <div class="form-group">\n' +
    '    <div class="row">\n' +
    '      <label class="col-sm-4 control-label">Stroke:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <spectrum-colorpicker format="hex" ng-model="AppState.selected.display.stroke"></spectrum-colorpicker>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row">\n' +
    '      <label class="col-sm-4 control-label">Stroke-Width:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <input type="text" class="form-control" ng-model="AppState.selected.display.strokeWidth"></input>\n' +
    '        <input type="range" min="0" max="10" ng-model="AppState.selected.display.strokeWidth"></input>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row" ng-if="!AppState.selected.data._id">\n' +
    '      <label class="col-sm-4 control-label">Font-Size:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <input type="text" class="form-control" ng-model="AppState.selected.display.text.size"></input>\n' +
    '        <input type="range" min="5" max="30" ng-model="AppState.selected.display.text.size"></input>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row" ng-if="!AppState.selected.data._id">\n' +
    '      <label class="col-sm-4 control-label">Font:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <input type="text" class="form-control" ng-model="AppState.selected.display.text.font"></input>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row" ng-if="!AppState.selected.centroid">\n' +
    '      <label class="col-sm-4 control-label">Gradient Start:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <spectrum-colorpicker format="hex" ng-model="AppState.selected.display.gradient.start"></spectrum-colorpicker>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '    <div class="row" ng-if="!AppState.selected.centroid">\n' +
    '      <label class="col-sm-4 control-label">Gradient Stop:</label>\n' +
    '      <div class="col-sm-8">\n' +
    '        <spectrum-colorpicker format="hex" ng-model="AppState.selected.display.gradient.stop"></spectrum-colorpicker>\n' +
    '      </div>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</form>\n' +
    '');
}]);

angular.module('templates/sbml.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('templates/sbml.html',
    '<div ng-controller="SbmlLayoutCtrl">\n' +
    '  <div class="row" ng-include="\'templates/toolbar.html\'">\n' +
    '  </div>\n' +
    '  <div class="row">\n' +
    '    <ng-include src="\'templates/context-menus.html\'"></ng-include>\n' +
    '    <div ng-class="{\'col-sm-9\': AppState.selected.id, \'col-sm-12\': !AppState.selected.id}" class="well">\n' +
    '      <svg\n' +
    '        zoomable="AppState.zoom"\n' +
    '        xmlns="http://www.w3.org/2000/svg"\n' +
    '        ng-attr-height="{{imports.height || \'800px\'}}"\n' +
    '        ng-attr-width="{{imports.width || \'100%\'}}"\n' +
    '        ng-click="clickHandler($event);"\n' +
    '        >\n' +
    '        <style>\n' +
    '        svg .node.species {\n' +
    '          stroke: #FFB800;\n' +
    '        }\n' +
    '        svg .link {\n' +
    '          stroke: black;\n' +
    '          stroke-width: 3px;\n' +
    '        }\n' +
    '        svg .link.modifier {\n' +
    '          stroke-dasharray: 5, 5;\n' +
    '        }\n' +
    '        /*\n' +
    '        svg .link.selected {\n' +
    '          stroke: #FF0000;\n' +
    '        }*/\n' +
    '        svg marker {\n' +
    '          overflow: visible;\n' +
    '        }\n' +
    '        svg .null-symbol {\n' +
    '          fill: none;\n' +
    '          stroke: black;\n' +
    '          stroke-width: 3px;\n' +
    '        }\n' +
    '        </style>\n' +
    '        <defs>\n' +
    '          <marker\n' +
    '            case-sensitive="refX,refY" \n' +
    '            id="production" \n' +
    '            viewBox="0 0 10 10" \n' +
    '            ng-attr-refX="{{-2}}"\n' +
    '            ng-attr-refY="{{0}}" \n' +
    '            markerWidth="10" \n' +
    '            markerHeight="10" \n' +
    '            orient="auto">\n' +
    '            <path \n' +
    '              fill="url(#markerGradient)" \n' +
    '              stroke="#0013FF" \n' +
    '              transform="rotate(-90)" \n' +
    '              ng-attr-d="{{sgGeo.arrow({size: 10, type: \'triangle-down\'})}}">\n' +
    '            </path>\n' +
    '          </marker>\n' +
    '          <marker \n' +
    '            case-sensitive="refX,refY" \n' +
    '            id="degradation" \n' +
    '            viewBox="0 0 10 10" \n' +
    '            ng-attr-refX="{{-2}}"\n' +
    '            ng-attr-refY="{{0}}" \n' +
    '            markerWidth="10" \n' +
    '            markerHeight="10" \n' +
    '            orient="auto">\n' +
    '            <path \n' +
    '              fill="url(#markerGradient)" \n' +
    '              stroke="#0013FF" \n' +
    '              transform="rotate(-90)" \n' +
    '              ng-attr-d="{{sgGeo.arrow({size: 10, type: \'triangle-down\'})}}"></path>\n' +
    '          </marker>\n' +
    '          <marker \n' +
    '            case-sensitive="refX,refY" \n' +
    '            id="modifier" \n' +
    '            viewBox="0 0 10 10" \n' +
    '            markerWidth="30"\n' +
    '            markerHeight="30" \n' +
    '            ng-attr-refX="{{-0.4}}" \n' +
    '            ng-attr-refY="{{0}}" \n' +
    '            orient="auto">\n' +
    '            <path \n' +
    '              stroke="black" \n' +
    '              stroke-width="0.3" \n' +
    '              fill="none" \n' +
    '              ng-attr-d="{{sgGeo.arrow({size: 1, type: \'circle\'})}}">\n' +
    '            </path>\n' +
    '          </marker>\n' +
    '          <linearGradient ng-repeat="node in model.nodes.species" id="speciesGradient-{{node.id}}">\n' +
    '            <stop offset="5%" ng-attr-stop-color="{{node.display.gradient.start}}"></stop>\n' +
    '            <stop offset="95%" ng-attr-stop-color="{{node.display.gradient.stop}}"></stop>\n' +
    '          </linearGradient>\n' +
    '          <linearGradient ng-repeat="node in model.nodes.alias" id="aliasGradient-{{node.id}}">\n' +
    '            <stop offset="5%" ng-attr-stop-color="{{node.display.gradient.start}}"></stop>\n' +
    '            <stop offset="95%" ng-attr-stop-color="{{node.display.gradient.stop}}"></stop>\n' +
    '          </linearGradient>\n' +
    '          <linearGradient id="markerGradient">\n' +
    '            <stop offset="5%" stop-color="rgb(97, 116, 255)"></stop>\n' +
    '            <stop offset="95%" stop-color="#FFF"></stop>\n' +
    '          </linearGradient>\n' +
    '        </defs>\n' +
    '        <g ng-attr-transform="translate({{translate.x || 0}}, {{translate.y || 0}})scale({{scale || 1}})">\n' +
    '          <g \n' +
    '            class="link"\n' +
    '            ng-repeat="link in model.links.product"\n' +
    '            context-menu\n' +
    '            data-target="reactionMenu{{link.reaction.id}}"\n' +
    '            >\n' +
    '            <path\n' +
    '              class="pointer"\n' +
    '              ng-click="clickHandler(link.reaction, $event)"\n' +
    '              ng-attr-d="\n' +
    '                M {{link.x1}} {{link.y1}}\n' +
    '                C\n' +
    '                {{link.reaction.getCp(2).x}} {{link.reaction.getCp(2).y}}\n' +
    '                {{link.cp2.x}} {{link.cp2.y}}\n' +
    '                {{link.x2}} {{link.y2}}\n' +
    '              "\n' +
    '              marker-end="url(#production)"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-stroke="{{link.reaction.display.stroke}}"\n' +
    '              ng-attr-stroke-width="{{link.reaction.display.strokeWidth}}"\n' +
    '              fill="none"\n' +
    '            />\n' +
    '            <g\n' +
    '              ng-if="link.reaction.selected"\n' +
    '            >\n' +
    '              <line\n' +
    '                stroke="red"\n' +
    '                stroke-dasharray="1, 1"\n' +
    '                ng-attr-x1="{{link.x2}}"\n' +
    '                ng-attr-y1="{{link.y2}}"\n' +
    '                ng-attr-x2="{{link.cp2.x}}"\n' +
    '                ng-attr-y2="{{link.cp2.y}}"\n' +
    '              />\n' +
    '              <circle\n' +
    '                stroke="red"\n' +
    '                ng-attr-cx="{{link.cp2.x}}"\n' +
    '                ng-attr-cy="{{link.cp2.y}}"\n' +
    '                ng-attr-r="{{7}}"\n' +
    '                fill="white"\n' +
    '                sg-drag\n' +
    '                sg-drag-begin="link.cp2"\n' +
    '                sg-drag-move="_.bind(link.updateCp2, link)"\n' +
    '                style="cursor: pointer;"\n' +
    '              />\n' +
    '            </g>\n' +
    '            <line\n' +
    '              ng-if="false"\n' +
    '              class="reaction production link"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              marker-end="url(#production)"\n' +
    '              ng-attr-x1="{{link.x1}}"\n' +
    '              ng-attr-y1="{{link.y1}}"\n' +
    '              ng-attr-x2="{{link.x2}}"\n' +
    '              ng-attr-y2="{{link.y2}}">\n' +
    '            </line>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            class="link pointer"\n' +
    '            ng-repeat="link in model.links.reactant" \n' +
    '            context-menu\n' +
    '            data-target="reactionMenu{{link.reaction.id}}"\n' +
    '          >\n' +
    '            <path\n' +
    '              class="pointer"\n' +
    '              ng-click="clickHandler(link.reaction, $event)"\n' +
    '              ng-attr-d="\n' +
    '                M {{link.x1}} {{link.y1}}\n' +
    '                C \n' +
    '                {{link.cp1.x}} {{link.cp1.y}}\n' +
    '                {{link.reaction.getCp(1).x}} {{link.reaction.getCp(1).y}}\n' +
    '                {{link.x2}} {{link.y2}}\n' +
    '              "\n' +
    '              fill="none"\n' +
    '              ng-attr-stroke="{{link.reaction.display.stroke}}"\n' +
    '              ng-attr-stroke-width="{{link.reaction.display.strokeWidth}}"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '            />\n' +
    '            <g\n' +
    '              ng-if="link.reaction.selected"\n' +
    '            >\n' +
    '              <line\n' +
    '                stroke="red"\n' +
    '                stroke-dasharray="1, 1"\n' +
    '                ng-attr-x1="{{link.x1}}"\n' +
    '                ng-attr-y1="{{link.y1}}"\n' +
    '                ng-attr-x2="{{link.cp1.x}}"\n' +
    '                ng-attr-y2="{{link.cp1.y}}"\n' +
    '              />\n' +
    '              <circle\n' +
    '                stroke="red"\n' +
    '                ng-attr-cx="{{link.cp1.x}}"\n' +
    '                ng-attr-cy="{{link.cp1.y}}"\n' +
    '                ng-attr-r="{{7}}"\n' +
    '                fill="white"\n' +
    '                sg-drag\n' +
    '                sg-drag-begin="link.cp1"\n' +
    '                sg-drag-move="_.bind(link.updateCp1, link)"\n' +
    '                style="cursor: pointer;"\n' +
    '              />\n' +
    '            </g>\n' +
    '            <line \n' +
    '              ng-if="false"\n' +
    '              ng-class="{selected: isSelected}"\n' +
    '              class="reaction reactant link"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-x1="{{link.x1}}"\n' +
    '              ng-attr-y1="{{link.y1}}"\n' +
    '              ng-attr-x2="{{link.x2}}"\n' +
    '              ng-attr-y2="{{link.y2}}">\n' +
    '            </line>\n' +
    '          </g>\n' +
    '          <g ng-repeat="link in lines.modifier">\n' +
    '            <path \n' +
    '              class="modifier link" \n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-d={{sgGeo.linkArc(link)}}\n' +
    '              fill="none"\n' +
    '              ></path>\n' +
    '            <line \n' +
    '              ng-class="{selected: isSelected}" \n' +
    '              class="modifier link" \n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-x1="{{link.x1}}"\n' +
    '              ng-attr-y1="{{link.y1}}" \n' +
    '              ng-attr-x2="{{link.x2}}" \n' +
    '              ng-attr-y2="{{link.y2}}"\n' +
    '              marker-end="url(#modifier)">\n' +
    '            </line>\n' +
    '          </g>\n' +
    '          <g\n' +
    '            ng-repeat="link in lines.source" \n' +
    '            >\n' +
    '            <path \n' +
    '              class="source link"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-d={{linkArc(link)}}\n' +
    '              fill="none"\n' +
    '              ></path>\n' +
    '            <line\n' +
    '              class="source link"\n' +
    '              ng-attr-x1="{{link.x1}}"\n' +
    '              ng-attr-y1="{{link.y1}}" \n' +
    '              ng-attr-x2="{{link.x2}}" \n' +
    '              ng-attr-y2="{{link.y2}}"></line>\n' +
    '          </g>\n' +
    '          <g\n' +
    '            ng-repeat="link in lines.sink"\n' +
    '            >\n' +
    '            <path \n' +
    '              class="sink link"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-d={{linkArc(link)}}\n' +
    '              fill="none"\n' +
    '              ></path>\n' +
    '            <line\n' +
    '              class="sink link"\n' +
    '              ng-attr-opacity="{{link.opacity}}"\n' +
    '              ng-attr-x1="{{link.x1}}"\n' +
    '              ng-attr-y1="{{link.y1}}" \n' +
    '              ng-attr-x2="{{link.x2}}" \n' +
    '              ng-attr-y2="{{link.y2}}"\n' +
    '              marker-end="url(#production)"></line>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            sg-drag\n' +
    '            sg-drag-begin="node"\n' +
    '            sg-drag-move="_.bind(node.updatePosition, node)"\n' +
    '            ng-repeat="node in model.nodes.species"\n' +
    '            context-menu\n' +
    '            data-target="speciesMenu{{node.id}}"\n' +
    '            ng-click="clickHandler(node, $event)"\n' +
    '            ng-attr-opacity="{{node.opacity}}"\n' +
    '            ng-attr-transform="translate({{node.x}},{{node.y}})"\n' +
    '            style="cursor: move;"\n' +
    '            >\n' +
    '            <rect \n' +
    '              ng-attr-stroke="{{node.display.stroke}}"\n' +
    '              ng-attr-stroke-width="{{node.display.strokeWidth}}"\n' +
    '              ng-attr-x="{{-node.width/2}}"\n' +
    '              ng-attr-y="{{-node.height/2}}"\n' +
    '              ng-attr-width="{{node.width}}" \n' +
    '              ng-attr-height="{{node.height}}"\n' +
    '              ng-attr-ry="{{node.height/2}}"\n' +
    '              ng-attr-fill="url(#speciesGradient-{{node.id}})"\n' +
    '              >\n' +
    '            </rect>\n' +
    '            <line ng-if="node.selected" sg-drag sg-drag-begin="{x: node.x - node.width/2, y: node.y}" sg-drag-move="_.bind(node.resizeWidthLeft, node)" ng-attr-x1="{{-node.width/2}}" ng-attr-y1="{{-node.height/2}}" ng-attr-x2="{{-node.width/2}}" ng-attr-y2="{{node.height/2}}" stroke="red" stroke-width="5px" style="cursor: ew-resize;"></line>\n' +
    '            <line ng-if="node.selected" sg-drag sg-drag-begin="{x: node.x + node.width/2, y: node.y}" sg-drag-move="_.bind(node.resizeWidthRight, node)" ng-attr-x1="{{node.width/2}}" ng-attr-y1="{{-node.height/2}}" ng-attr-x2="{{node.width/2}}" ng-attr-y2="{{node.height/2}}" stroke="red" stroke-width="5px" style="cursor: ew-resize;"></line>\n' +
    '            <line ng-if="node.selected" sg-drag sg-drag-begin="{x: node.x, y: node.y - node.height/2}" sg-drag-move="_.bind(node.resizeHeightBottom, node)" ng-attr-x1="{{-node.width/2}}" ng-attr-y1="{{-node.height/2}}" ng-attr-x2="{{node.width/2}}" ng-attr-y2="{{-node.height/2}}" stroke="red" stroke-width="5px" style="cursor: ns-resize;"></line>\n' +
    '            <line ng-if="node.selected" sg-drag sg-drag-begin="{x: node.x, y: node.y + node.height/2}" sg-drag-move="_.bind(node.resizeHeightTop, node)" ng-attr-x1="{{-node.width/2}}" ng-attr-y1="{{node.height/2}}" ng-attr-x2="{{node.width/2}}" ng-attr-y2="{{node.height/2}}" stroke="red" stroke-width="5px" style="cursor: ns-resize;"></line>\n' +
    '            <g\n' +
    '              ng-if="node.fixed"\n' +
    '              ng-attr-transform="translate({{node.width/2}},{{-node.height/2}}) scale(0.005)"\n' +
    '            >\n' +
    '              <path d="M448 1568v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68zm320-672h512v-192q0-106-75-181t-181-75-181 75-75 181v192z"/>\n' +
    '            </g>\n' +
    '            <text\n' +
    '              ng-attr-style="\n' +
    '              font-size: {{node.display.text.size}}px;\n' +
    '                font-family: {{node.display.text.font}};\n' +
    '                font-weight: bolder;\n' +
    '                text-anchor: middle;\n' +
    '                dominant-baseline: middle;\n' +
    '              "\n' +
    '            >{{node.data._name || node.data._id | truncateTo:100}}</text>\n' +
    '            <title>ID: {{node.id}}, Name: {{node.name}}</title>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            sg-drag\n' +
    '            sg-drag-begin="node"\n' +
    '            sg-drag-move="_.bind(node.updatePosition, node)"\n' +
    '            ng-repeat="node in model.nodes.alias"\n' +
    '            context-menu\n' +
    '            data-target="aliasMenu{{node.id}}"\n' +
    '            ng-click="clickHandler(node, $event)"\n' +
    '            ng-attr-opacity="{{node.opacity}}"\n' +
    '            ng-attr-transform="translate({{node.x}},{{node.y}})"\n' +
    '            style="cursor: move;"\n' +
    '            >\n' +
    '            <rect \n' +
    '              style="\n' +
    '                stroke-width: 3px;\n' +
    '                size: 300px;\n' +
    '              "\n' +
    '              ng-attr-stroke="{{node.display.stroke}}";\n' +
    '              ng-attr-x="{{-node.width/2}}"\n' +
    '              ng-attr-y="{{-node.height/2}}"\n' +
    '              ng-attr-width="{{node.width}}" \n' +
    '              ng-attr-height="{{node.height}}"\n' +
    '              ng-attr-ry="{{node.height/2}}"\n' +
    '              ng-attr-fill="url(#aliasGradient-{{node.id}})"\n' +
    '              >\n' +
    '            </rect>\n' +
    '            <rect\n' +
    '              ng-if="node.selected"\n' +
    '              ng-attr-x="{{-node.width/2}}"\n' +
    '              ng-attr-y="{{-node.height/2}}"\n' +
    '              ng-attr-width="{{node.width}}"\n' +
    '              ng-attr-height="{{node.height}}"\n' +
    '              stroke="red"\n' +
    '              stroke-width="5px"\n' +
    '              fill="none"\n' +
    '              >\n' +
    '            </rect>\n' +
    '            <g\n' +
    '              ng-if="node.fixed"\n' +
    '              ng-attr-transform="translate({{node.width/2}},{{-node.height/2}}) scale(0.005)"\n' +
    '            >\n' +
    '              <path d="M448 1568v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68zm320-672h512v-192q0-106-75-181t-181-75-181 75-75 181v192z"/>\n' +
    '            </g>\n' +
    '            <text\n' +
    '              style="\n' +
    '                font-size: 8px;\n' +
    '                font-family: Georgia;\n' +
    '                font-weight: bolder;\n' +
    '                text-anchor: middle;\n' +
    '                dominant-baseline: middle;\n' +
    '              "\n' +
    '            >{{node.aliasOf.data._name || node.aliasOf.data._id}}</text>\n' +
    '            <title>ID: {{node.id}}, Name: {{node.name}}</title>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            draggable \n' +
    '            ng-repeat="node in model.nodes.reactions" \n' +
    '            context-menu\n' +
    '            data-target="reactionMenu{{node.id}}"\n' +
    '          >\n' +
    '            <circle \n' +
    '              ng-class="node.classes" \n' +
    '              class="node" \n' +
    '              ng-attr-r="{{4}}"\n' +
    '              fill="black" \n' +
    '              stroke="black"\n' +
    '              ng-attr-opacity="{{imports.showReactionNodes ? 1 : 0}}"\n' +
    '              ng-attr-transform="translate({{node.x}},{{node.y}})"\n' +
    '              >\n' +
    '              <title>ID: {{node.id}}, Name: {{node.name}}</title>\n' +
    '            </circle>\n' +
    '            <g\n' +
    '              ng-if="node.selected"\n' +
    '            >\n' +
    '              <g\n' +
    '                ng-if="node.fixed"\n' +
    '                ng-attr-transform="translate({{node.x}},{{node.y}}) scale(0.005)"\n' +
    '                >\n' +
    '                <path d="M448 1568v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68zm320-672h512v-192q0-106-75-181t-181-75-181 75-75 181v192z"/>\n' +
    '              </g>\n' +
    '              <line\n' +
    '                stroke="red"\n' +
    '                stroke-dasharray="1, 1"\n' +
    '                ng-attr-x1="{{node.getCp(1).x}}"\n' +
    '                ng-attr-y1="{{node.getCp(1).y}}"\n' +
    '                ng-attr-x2="{{node.getCp(2).x}}"\n' +
    '                ng-attr-y2="{{node.getCp(2).y}}"\n' +
    '              />\n' +
    '              <circle\n' +
    '                sg-drag\n' +
    '                sg-drag-begin="node.getCp(1)"\n' +
    '                sg-drag-move="_.bind(node.updateCp1, node)"\n' +
    '                stroke="red"\n' +
    '                ng-attr-cx="{{node.getCp(1).x}}"\n' +
    '                ng-attr-cy="{{node.getCp(1).y}}"\n' +
    '                ng-attr-r="{{7}}"\n' +
    '                fill="white"\n' +
    '              />\n' +
    '              <circle\n' +
    '                sg-drag\n' +
    '                sg-drag-begin="node.getCp(2)"\n' +
    '                sg-drag-move="_.bind(node.updateCp2, node)"\n' +
    '                stroke="red"\n' +
    '                ng-attr-cx="{{node.getCp(2).x}}"\n' +
    '                ng-attr-cy="{{node.getCp(2).y}}"\n' +
    '                ng-attr-r="{{7}}"\n' +
    '                fill="white"\n' +
    '              />\n' +
    '            </g>\n' +
    '            <text class="node-label">{{}}</text>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            draggable \n' +
    '            ng-repeat="node in sourceNodes" \n' +
    '            ng-attr-transform="translate({{node.x}},{{node.y}})">\n' +
    '            <g class="null-symbol">\n' +
    '              <circle \n' +
    '                class = "node"\n' +
    '                ng-class="{fixed: node.fixed, selected: node.selected}" \n' +
    '                ng-attr-r="{{node.height / 2}}"\n' +
    '                fill="white">\n' +
    '              </circle>\n' +
    '              <line \n' +
    '                class = "node"\n' +
    '                ng-class="{fixed: node.fixed, selected: node.selected}" \n' +
    '                ng-attr-x1="{{-10}}" \n' +
    '                ng-attr-y1="{{10}}"\n' +
    '                ng-attr-x2="{{10}}" \n' +
    '                ng-attr-y2="{{-10}}">\n' +
    '              </line>\n' +
    '            </g>\n' +
    '          </g>\n' +
    '          <g \n' +
    '            draggable \n' +
    '            ng-repeat="node in sinkNodes" \n' +
    '            ng-attr-transform="translate({{node.x}},{{node.y}})">\n' +
    '            <g class="null-symbol">\n' +
    '              <circle \n' +
    '                ng-attr-r="{{node.height / 2}}"\n' +
    '                class = "node"\n' +
    '                ng-class="{fixed: node.fixed, selected: node.selected}" \n' +
    '                fill="white"\n' +
    '                >\n' +
    '              </circle>\n' +
    '              <line \n' +
    '                class = "node"\n' +
    '                ng-class="{fixed: node.fixed, selected: node.selected}" \n' +
    '                ng-attr-x1="{{-10}}" \n' +
    '                ng-attr-y1="{{10}}"\n' +
    '                ng-attr-x2="{{10}}" \n' +
    '                ng-attr-y2="{{-10}}">\n' +
    '              </line>\n' +
    '            </g>\n' +
    '          </g>\n' +
    '        </g>\n' +
    '      </svg>\n' +
    '    </div>\n' +
    '    <div ng-if="AppState.selected.id" class="col-sm-3">\n' +
    '      <ng-include src="\'templates/details.html\'">\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('templates/toolbar.html', []).run(['$templateCache', function($templateCache) {
  'use strict';
  $templateCache.put('templates/toolbar.html',
    '<span>Click Mode:</span>\n' +
    '<span class="btn-group">\n' +
    '  <button class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'selected\'" tooltip="Select Node" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '    <i class="fa fa-location-arrow fa-flip-horizontal"></i>\n' +
    '  </button>\n' +
    '  <button class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'fixed\'" tooltip="Lock Node" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '    <i class="fa fa-lock"></i>\n' +
    '  </button>\n' +
    '</span>\n' +
    '<button class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'addSpecies\'" tooltip="Add Species Node" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '  Add Species\n' +
    '</button>\n' +
    '<span class="btn-group" dropdown>\n' +
    '  <button class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'addUniUniReaction\'" tooltip="Add Reaction" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '    Add Reaction\n' +
    '  </button>\n' +
    '  <button class="btn btn-default btn-sm dropdown-toggle" tooltip="Additional Reaction" tooltip-popup-delay="1000" tooltip-placement="right">\n' +
    '    <span class="caret"></span>\n' +
    '  </button>\n' +
    '  <ul class="dropdown-menu" role="menu">\n' +
    '    <li>\n' +
    '      <a class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'addUniBiReaction\'">\n' +
    '        Uni-Bi Reaction\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'addBiUniReaction\'">\n' +
    '        Bi-Uni Reaction\n' +
    '      </a>\n' +
    '    </li>\n' +
    '    <li>\n' +
    '      <a class="btn btn-default btn-sm" ng-model="AppState.clickMode" btn-radio="\'addBiBiReaction\'">\n' +
    '        Bi-Bi Reaction\n' +
    '      </a>\n' +
    '    </li>\n' +
    '  </ul>\n' +
    '</span>\n' +
    '<span>Auto Layout:</span>\n' +
    '<span class="btn-group">\n' +
    '  <button class="btn btn-default btn-sm" ng-click="layout.force.stop()" tooltip="Stop Auto-Layout" tooltip-placement="right" tooltip-append-to-body="true" tooltip-popup-delay="1000">\n' +
    '    <i class="fa fa-stop"></i>\n' +
    '  </button>\n' +
    '  <button class="btn btn-default btn-sm" ng-click="layout.start()" tooltip="Start Auto-Layout" tooltip-placement="right" tooltip-append-to-body="true" tooltip-popup-delay="1000">\n' +
    '    <i class="fa fa-play"></i>\n' +
    '  </button>\n' +
    '  <button class="btn btn-default btn-sm" btn-checkbox ng-model="AppState.menu.layout" tooltip="Auto-Layout Settings" tooltip-placement="right" tooltip-append-to-body="true" tooltip-popup-delay="1000">\n' +
    '    <i class="fa fa-wrench"></i>\n' +
    '  </button>\n' +
    '</span>\n' +
    '<div class="col-sm-6 col-sm-offset-3" collapse="!AppState.menu.layout">\n' +
    '  <form>\n' +
    '  <label>Charge</label>\n' +
    '  <input class="form-control" type="number" ng-model="layout.charge" step="10" min="-5000" max="0"></input>\n' +
    '  <label>Gravity</label>\n' +
    '  <input class="form-control" type="number" ng-model="layout.gravity" min="0" max="1" step="0.1"></input>\n' +
    '  <label>Link Distance</label>\n' +
    '  <input class="form-control" type="number" ng-model="layout.linkDistance" min="0" max="100" step="1"></input>\n' +
    '  <label>Max Links In</label>\n' +
    '  <input class="form-control" type="number" ng-model="max.links.in" min="1" max="100" step="1"></input>\n' +
    '  <label>Max Links Out</label>\n' +
    '  <input class="form-control" type="number" ng-model="max.links.out" min="1" max="100" step="1"></input>\n' +
    '  <label>Zoom</label>\n' +
    '  <input class="form-control" type="checkbox" ng-model="AppState.zoom"></input>\n' +
    '  <label>Show Modifiers</label>\n' +
    '  <input class="form-control" type="checkbox" ng-model="linkModifiers"></input>\n' +
    '  </form>\n' +
    '</div>\n' +
    '');
}]);
