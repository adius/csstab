var properties = {
	structure:["name", "values", "initial", "applies", "inherited", 'percentages', 'media'],
	data:[
		["background-attachment", ["scroll", "fixed", "inherit"], "scroll", '', '', '', "visual"],
		["background-color", ["inherit"], "transparent", '', '', '', "visual"],
		["background-image", ["none", "inherit"], "none", '', '', '', "visual"],
		["background-position", ["inherit"], "0% 0%", '', '', "refer to the size of the box itself", "visual"],
		["background-repeat", ["repeat" , "repeat-x" , "repeat-y" , "no-repeat" , "inherit"], "repeat", '', '', '', "visual"],
		["background", ["background-color", "background-image", "background-repeat", "background-attachment", "background-position", "inherit"], "see individual properties", '', '', "allowed on ‘background-position’", "visual"],
		["border-collapse", ["collapse" , "separate" , "inherit"], "separate", "‘table’ and ‘inline-table’ elements", true, '', "visual"],
		["border-color", ["color", "inherit"], "see individual properties", '', '', '', "visual"],
		["border-spacing", ["inherit"], "0", "‘table’ and ‘inline-table’ elements", true, '', "visual"],
		["border-style", ["inherit"], "see individual properties", '', '', '', "visual"],
		["border-top", ["inherit"], "see individual properties", '', '', '', "visual"],
		["border-bottom", ["inherit"], "see individual properties", '', '', '', "visual"],
		["border-right", ["inherit"], "see individual properties", '', '', '', "visual"],
		["border-left", ["inherit"], "see individual properties", '', '', '', "visual"],
		["border-top-color", ["inherit"], "the value of the ‘color’ property", '', '', '', "visual"],
		["border-right-color", ["inherit"], "the value of the ‘color’ property", '', '', '', "visual"],
		["border-bottom-color", ["inherit"], "the value of the ‘color’ property", '', '', '', "visual"],
		["border-left-color", ["inherit"], "the value of the ‘color’ property", '', '', '', "visual"],
		["border-top-style", ["inherit"], "none", '', '', '', "visual"],
		["border-right-style", ["inherit"], "none", '', '', '', "visual"],
		["border-bottom-style", ["inherit"], "none", '', '', '', "visual"],
		["border-left-style", ["inherit"], "none", '', '', '', "visual"],
		["border-top-width", ["inherit"], "medium", '', '', '', "visual"],
		["border-right-width", ["inherit"], "medium", '', '', '', "visual"],
		["border-bottom-width", ["inherit"], "medium", '', '', '', "visual"],
		["border-left-width", ["inherit"], "medium", '', '', '', "visual"],
		["border-width", ["inherit"], "see individual properties", '', '', '', "visual"],
		["border", ["inherit"], "see individual properties", '', '', '', "visual"],
		["bottom", ["auto", "inherit"], "auto", "positioned elements", '', "refer to height of containing block", "visual"],
		["caption-side", ["top" , "bottom" , "inherit"], "top", "‘table-caption’ elements", true, '', "visual"],
		["clear", ["none" , "left" , "right" , "both" , "inherit"], "none", "block-level elements", '', '', "visual"],
		["clip", ["auto" , "inherit"], "auto", "absolutely positioned elements", '', '', "visual"],
		["color", ["inherit"], "depends on user agent", '', true, '', "visual"],
		["content", ["normal", "none" , "open-quote" , "close-quote" , "no-open-quote" , "no-close-quote", "inherit"], "normal", ":before and :after pseudo-elements", '', '', "all"],
		["counter-increment", ["none" , "inherit"], "none", '', '', '', "all"],
		["counter-reset", ["none" , "inherit"], "none", '', '', '', "all"],
		["cursor", ["auto", "crosshair", "default", "pointer" , "move" , "e-resize" , "ne-resize" , "nw-resize" , "n-resize" , "se-resize" , "sw-resize" , "s-resize" , "w-resize" , "text" , "wait" , "help" , "progress", "inherit"], "auto", '', true, '', "visual, interactive"],
		["direction", ["ltr" , "rtl" , "inherit"], "ltr", "all elements, but see prose", true, '', "visual"],
		["display", ["inline" , "block" , "list-item" , "inline-block" , "table" , "inline-table" , "table-row-group" , "table-header-group" , "table-footer-group" , "table-row" , "table-column-group" , "table-column" , "table-cell" , "table-caption" , "none" , "inherit"], "inline", '', '', '', "all"],
		["empty-cells", ["show", "hide", "inherit"], "show", "‘table-cell’ elements", true, '', "visual"],
		["float", ["left" , "right" , "none" , "inherit"], "none", "all, but see 9.7", '', '', "visual"],
		["font-family", ["inherit"], "depends on user agent", '', true, '', "visual"],
		["font-size", ["inherit"], "medium", '', true, "refer to inherited font size", "visual"],
		["font-style", ["normal" , "italic" , "oblique" , "inherit"], "normal", '', true, '', "visual"],
		["font-variant", ["normal" , "small-caps" , "inherit"], "normal", '', true, '', "visual"],
		["font-weight", ["normal" , "bold" , "bolder" , "lighter" , 100 , 200 , 300 , 400 , 500 , 600 , 700 , 800 , 900 , "inherit"], "normal", '', true, '', "visual"],
		["font", ["font-style", "font-variant", "font-weight", "font-size", "line-height", "font-family" , "caption" , "icon" , "menu" , "message-box" , "small-caption" , "status-bar", "inherit"], "see individual properties", '', true, "see individual properties", "visual"],
		["height", ["auto", "inherit"], "auto", "all elements but non-replaced inline elements, table columns, and column groups,", '', "see prose", "visual"],
		["left", ["auto", "inherit"], "auto", "positioned elements", '', "refer to width of containing block", "visual"],
		["letter-spacing", ["normal", "inherit"], "normal", '', true, '', "visual"],
		["line-height", ["normal", "inherit"], "normal", '', true, "refer to the font size of the element itself", "visual"],
		["list-style-image", ["none" , "inherit"], "none", "elements with ‘display: list-item’", true, '', "visual"],
		["list-style-position", ["inside" , "outside" , "inherit"], "outside", "elements with ‘display: list-item’", true, '', "visual"],
		["list-style-type", ["disc" , "circle" , "square" , "decimal" , "decimal-leading-zero" , "lower-roman" , "upper-roman" , "lower-greek" , "lower-latin" , "upper-latin" , "armenian" , "georgian", "lower-alpha" , "upper-alpha" , "none" , "inherit"], "disc", "elements with ‘display: list-item’", true, '', "visual"],
		["list-style", ["list-style-type", "list-style-position", "list-style-image", "inherit"], "see individual properties", "elements with ‘display: list-item’", true, '', "visual"],
		["margin-right margin-left", ["inherit"], "0", "all elements except elements with table display types other than table-caption, table and inline-table", '', "refer to width of containing block", "visual"],
		["margin-top margin-bottom", ["inherit"], "0", "all elements except elements with table display types other than table-caption, table and inline-table", '', "refer to width of containing block", "visual"],
		["margin", ["inherit"], "see individual properties", "all elements except elements with table display types other than table-caption, table and inline-table", '', "refer to width of containing block", "visual"],
		["max-height", ["inherit"], "none", "all elements but non-replaced inline elements, table columns, and column groups", '', "see prose", "visual"],
		["max-width", ["inherit"], "none", "all elements but non-replaced inline elements, table rows, and row groups", '', "refer to width of containing block", "visual"],
		["min-height", ["inherit"], "0", "all elements but non-replaced inline elements, table columns, and column groups", '', "see prose", "visual"],
		["min-width", ["inherit"], "0", "all elements but non-replaced inline elements, table rows, and row groups", '', "refer to width of containing block", "visual"],
		["opacity", ["inherit"], "1", "all", '', '', "visual"],
		["orphans", ["inherit"], "2", "block container elements", true, '', "visual, paged"],
		["outline-color", ["invert" , "inherit"], "invert", '', '', '', "visual, interactive"],
		["outline-style", ["inherit"], "none", '', '', '', "visual, interactive"],
		["outline-width", ["inherit"], "medium", '', '', '', "visual, interactive"],
		["outline", ["outline-color", "outline-style", "outline-width", "inherit"], "see individual properties", '', '', '', "visual, interactive"],
		["overflow", ["visible" , "hidden" , "scroll" , "auto" , "inherit"], "visible", "block containers", '', '', "visual"],
		["padding-top", ["inherit"], "0", "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column", '', "refer to width of containing block", "visual"],
		["padding-right", ["inherit"], "0", "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column", '', "refer to width of containing block", "visual"],
		["padding-bottom", ["inherit"], "0", "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column", '', "refer to width of containing block", "visual"],
		["padding-left", ["inherit"], "0", "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column", '', "refer to width of containing block", "visual"],
		["padding", ["inherit"], "see individual properties", "all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column", '', "refer to width of containing block", "visual"],
		["page-break-after", ["auto" , "always" , "avoid" , "left" , "right" , "inherit"], "auto", "block-level elements (but see text)", '', '', "visual, paged"],
		["page-break-before", ["auto" , "always" , "avoid" , "left" , "right" , "inherit"], "auto", "block-level elements (but see text)", '', '', "visual, paged"],
		["page-break-inside", ["avoid" , "auto" , "inherit"], "auto", "block-level elements (but see text)", '', '', "visual, paged"],
		["position", ["static" , "relative" , "absolute" , "fixed" , "inherit"], "static", '', '', '', "visual"],
		["quotes", ["none" , "inherit"], "depends on user agent", '', true, '', "visual"],
		["right", ["auto" , "inherit"], "auto", "positioned elements", '', "refer to width of containing block", "visual"],
		["table-layout", ["auto" , "fixed" , "inherit"], "auto", "‘table’ and ‘inline-table’ elements", '', '', "visual"],
		["text-align", ["left" , "right" , "center" , "justify" , "inherit"], "a nameless value that acts as ‘left’ if ‘direction’ is ‘ltr’, ‘right’ if ‘direction’ is ‘rtl’", "block containers", true, '', "visual"],
		["text-decoration", ["none" , "underline" , "overline" , "line-through" , "blink" , "inherit"], "none", '', "no (see prose)", '', "visual"],
		["text-indent", ["inherit"], "0", "block containers", true, "refer to width of containing block", "visual"],
		["text-transform", ["capitalize" , "uppercase" , "lowercase" , "none" , "inherit"], "none", '', true, '', "visual"],
		["top", ["auto" , "inherit"], "auto", "positioned elements", '', "refer to height of containing block", "visual"],
		["unicode-bidi", ["normal" , "embed" , "bidi-override" , "inherit"], "normal", "all elements, but see prose", '', '', "visual"],
		["vertical-align", ["baseline" , "sub" , "super" , "top" , "text-top" , "middle" , "bottom" , "text-bottom", "inherit"], "baseline", "inline-level and ‘table-cell’ elements", '', "refer to the ‘line-height’ of the element itself", "visual"],
		["visibility", ["visible" , "hidden" , "collapse" , "inherit"], "visible", '', true, '', "visual"],
		["white-space", ["normal" , "pre" , "nowrap" , "pre-wrap" , "pre-line" , "inherit"], "normal", '', true, '', "visual"],
		["widows", ["inherit"], "2", "block container elements", true, '', "visual, paged"],
		["width", ["auto", "inherit"], "auto", "all elements but non-replaced inline elements, table rows, and row groups", '', "refer to width of containing block", "visual"],
		["word-spacing", ["normal", "inherit"], "normal", '', true, '', "visual"],
		["z-index", ["auto", "inherit"], "auto", "positioned elements", '', '', "visual, paged"],
		["width", ["auto", "inherit"], "auto", "all elements but non-replaced inline elements, table rows, and row groups", '', "refer to width of containing block", "visual"],
		["word-spacing", ["normal", "inherit"], "normal", '', true, '', "visual"],
		["z-index", ["auto", "inherit"], "auto", "positioned elements", '', '', "visual"]
	]
};