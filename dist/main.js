/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./assets/js/dist/jquery.tablesorter.min.js":
/*!**************************************************!*\
  !*** ./assets/js/dist/jquery.tablesorter.min.js ***!
  \**************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (e) {
  return function (A) {
    "use strict";

    var L = A.tablesorter = {
      version: "2.31.3",
      parsers: [],
      widgets: [],
      defaults: {
        theme: "default",
        widthFixed: !1,
        showProcessing: !1,
        headerTemplate: "{content}",
        onRenderTemplate: null,
        onRenderHeader: null,
        cancelSelection: !0,
        tabIndex: !0,
        dateFormat: "mmddyyyy",
        sortMultiSortKey: "shiftKey",
        sortResetKey: "ctrlKey",
        usNumberFormat: !0,
        delayInit: !1,
        serverSideSorting: !1,
        resort: !0,
        headers: {},
        ignoreCase: !0,
        sortForce: null,
        sortList: [],
        sortAppend: null,
        sortStable: !1,
        sortInitialOrder: "asc",
        sortLocaleCompare: !1,
        sortReset: !1,
        sortRestart: !1,
        emptyTo: "bottom",
        stringTo: "max",
        duplicateSpan: !0,
        textExtraction: "basic",
        textAttribute: "data-text",
        textSorter: null,
        numberSorter: null,
        initWidgets: !0,
        widgetClass: "widget-{name}",
        widgets: [],
        widgetOptions: {
          zebra: ["even", "odd"]
        },
        initialized: null,
        tableClass: "",
        cssAsc: "",
        cssDesc: "",
        cssNone: "",
        cssHeader: "",
        cssHeaderRow: "",
        cssProcessing: "",
        cssChildRow: "tablesorter-childRow",
        cssInfoBlock: "tablesorter-infoOnly",
        cssNoSort: "tablesorter-noSort",
        cssIgnoreRow: "tablesorter-ignoreRow",
        cssIcon: "tablesorter-icon",
        cssIconNone: "",
        cssIconAsc: "",
        cssIconDesc: "",
        cssIconDisabled: "",
        pointerClick: "click",
        pointerDown: "mousedown",
        pointerUp: "mouseup",
        selectorHeaders: "> thead th, > thead td",
        selectorSort: "th, td",
        selectorRemove: ".remove-me",
        debug: !1,
        headerList: [],
        empties: {},
        strings: {},
        parsers: [],
        globalize: 0,
        imgAttr: 0
      },
      css: {
        table: "tablesorter",
        cssHasChild: "tablesorter-hasChildRow",
        childRow: "tablesorter-childRow",
        colgroup: "tablesorter-colgroup",
        header: "tablesorter-header",
        headerRow: "tablesorter-headerRow",
        headerIn: "tablesorter-header-inner",
        icon: "tablesorter-icon",
        processing: "tablesorter-processing",
        sortAsc: "tablesorter-headerAsc",
        sortDesc: "tablesorter-headerDesc",
        sortNone: "tablesorter-headerUnSorted"
      },
      language: {
        sortAsc: "Ascending sort applied, ",
        sortDesc: "Descending sort applied, ",
        sortNone: "No sort applied, ",
        sortDisabled: "sorting is disabled",
        nextAsc: "activate to apply an ascending sort",
        nextDesc: "activate to apply a descending sort",
        nextNone: "activate to remove the sort"
      },
      regex: {
        templateContent: /\{content\}/g,
        templateIcon: /\{icon\}/g,
        templateName: /\{name\}/i,
        spaces: /\s+/g,
        nonWord: /\W/g,
        formElements: /(input|select|button|textarea)/i,
        chunk: /(^([+\-]?(?:\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,
        chunks: /(^\\0|\\0$)/,
        hex: /^0x[0-9a-f]+$/i,
        comma: /,/g,
        digitNonUS: /[\s|\.]/g,
        digitNegativeTest: /^\s*\([.\d]+\)/,
        digitNegativeReplace: /^\s*\(([.\d]+)\)/,
        digitTest: /^[\-+(]?\d+[)]?$/,
        digitReplace: /[,.'"\s]/g
      },
      string: {
        max: 1,
        min: -1,
        emptymin: 1,
        emptymax: -1,
        zero: 0,
        none: 0,
        "null": 0,
        top: !0,
        bottom: !1
      },
      keyCodes: {
        enter: 13
      },
      dates: {},
      instanceMethods: {},
      setup: function setup(t, r) {
        if (t && t.tHead && 0 !== t.tBodies.length && !0 !== t.hasInitialized) {
          var e,
              o = "",
              s = A(t),
              a = A.metadata;
          t.hasInitialized = !1, t.isProcessing = !0, t.config = r, A.data(t, "tablesorter", r), L.debug(r, "core") && (console[console.group ? "group" : "log"]("Initializing tablesorter v" + L.version), A.data(t, "startoveralltimer", new Date())), r.supportsDataObject = ((e = A.fn.jquery.split("."))[0] = parseInt(e[0], 10), 1 < e[0] || 1 === e[0] && 4 <= parseInt(e[1], 10)), r.emptyTo = r.emptyTo.toLowerCase(), r.stringTo = r.stringTo.toLowerCase(), r.last = {
            sortList: [],
            clickedIndex: -1
          }, /tablesorter\-/.test(s.attr("class")) || (o = "" !== r.theme ? " tablesorter-" + r.theme : ""), r.namespace ? r.namespace = "." + r.namespace.replace(L.regex.nonWord, "") : r.namespace = ".tablesorter" + Math.random().toString(16).slice(2), r.table = t, r.$table = s.addClass(L.css.table + " " + r.tableClass + o + " " + r.namespace.slice(1)).attr("role", "grid"), r.$headers = s.find(r.selectorHeaders), r.$table.children().children("tr").attr("role", "row"), r.$tbodies = s.children("tbody:not(." + r.cssInfoBlock + ")").attr({
            "aria-live": "polite",
            "aria-relevant": "all"
          }), r.$table.children("caption").length && ((o = r.$table.children("caption")[0]).id || (o.id = r.namespace.slice(1) + "caption"), r.$table.attr("aria-labelledby", o.id)), r.widgetInit = {}, r.textExtraction = r.$table.attr("data-text-extraction") || r.textExtraction || "basic", L.buildHeaders(r), L.fixColumnWidth(t), L.addWidgetFromClass(t), L.applyWidgetOptions(t), L.setupParsers(r), r.totalRows = 0, r.debug && L.validateOptions(r), r.delayInit || L.buildCache(r), L.bindEvents(t, r.$headers, !0), L.bindMethods(r), r.supportsDataObject && void 0 !== s.data().sortlist ? r.sortList = s.data().sortlist : a && s.metadata() && s.metadata().sortlist && (r.sortList = s.metadata().sortlist), L.applyWidget(t, !0), 0 < r.sortList.length ? (r.last.sortList = r.sortList, L.sortOn(r, r.sortList, {}, !r.initWidgets)) : (L.setHeadersCss(r), r.initWidgets && L.applyWidget(t, !1)), r.showProcessing && s.unbind("sortBegin" + r.namespace + " sortEnd" + r.namespace).bind("sortBegin" + r.namespace + " sortEnd" + r.namespace, function (e) {
            clearTimeout(r.timerProcessing), L.isProcessing(t), "sortBegin" === e.type && (r.timerProcessing = setTimeout(function () {
              L.isProcessing(t, !0);
            }, 500));
          }), t.hasInitialized = !0, t.isProcessing = !1, L.debug(r, "core") && (console.log("Overall initialization time:" + L.benchmark(A.data(t, "startoveralltimer"))), L.debug(r, "core") && console.groupEnd && console.groupEnd()), s.triggerHandler("tablesorter-initialized", t), "function" == typeof r.initialized && r.initialized(t);
        } else L.debug(r, "core") && (t.hasInitialized ? console.warn("Stopping initialization. Tablesorter has already been initialized") : console.error("Stopping initialization! No table, thead or tbody", t));
      },
      bindMethods: function bindMethods(r) {
        var e = r.$table,
            t = r.namespace,
            o = "sortReset update updateRows updateAll updateHeaders addRows updateCell updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(t + " ");
        e.unbind(o.replace(L.regex.spaces, " ")).bind("sortReset" + t, function (e, t) {
          e.stopPropagation(), L.sortReset(this.config, function (e) {
            e.isApplyingWidgets ? setTimeout(function () {
              L.applyWidget(e, "", t);
            }, 100) : L.applyWidget(e, "", t);
          });
        }).bind("updateAll" + t, function (e, t, r) {
          e.stopPropagation(), L.updateAll(this.config, t, r);
        }).bind("update" + t + " updateRows" + t, function (e, t, r) {
          e.stopPropagation(), L.update(this.config, t, r);
        }).bind("updateHeaders" + t, function (e, t) {
          e.stopPropagation(), L.updateHeaders(this.config, t);
        }).bind("updateCell" + t, function (e, t, r, o) {
          e.stopPropagation(), L.updateCell(this.config, t, r, o);
        }).bind("addRows" + t, function (e, t, r, o) {
          e.stopPropagation(), L.addRows(this.config, t, r, o);
        }).bind("updateComplete" + t, function () {
          this.isUpdating = !1;
        }).bind("sorton" + t, function (e, t, r, o) {
          e.stopPropagation(), L.sortOn(this.config, t, r, o);
        }).bind("appendCache" + t, function (e, t, r) {
          e.stopPropagation(), L.appendCache(this.config, r), A.isFunction(t) && t(this);
        }).bind("updateCache" + t, function (e, t, r) {
          e.stopPropagation(), L.updateCache(this.config, t, r);
        }).bind("applyWidgetId" + t, function (e, t) {
          e.stopPropagation(), L.applyWidgetId(this, t);
        }).bind("applyWidgets" + t, function (e, t) {
          e.stopPropagation(), L.applyWidget(this, !1, t);
        }).bind("refreshWidgets" + t, function (e, t, r) {
          e.stopPropagation(), L.refreshWidgets(this, t, r);
        }).bind("removeWidget" + t, function (e, t, r) {
          e.stopPropagation(), L.removeWidget(this, t, r);
        }).bind("destroy" + t, function (e, t, r) {
          e.stopPropagation(), L.destroy(this, t, r);
        }).bind("resetToLoadState" + t, function (e) {
          e.stopPropagation(), L.removeWidget(this, !0, !1);
          var t = A.extend(!0, {}, r.originalSettings);
          (r = A.extend(!0, {}, L.defaults, t)).originalSettings = t, this.hasInitialized = !1, L.setup(this, r);
        });
      },
      bindEvents: function bindEvents(e, t, r) {
        var o,
            i = (e = A(e)[0]).config,
            s = i.namespace,
            d = null;
        !0 !== r && (t.addClass(s.slice(1) + "_extra_headers"), (o = L.getClosest(t, "table")).length && "TABLE" === o[0].nodeName && o[0] !== e && A(o[0]).addClass(s.slice(1) + "_extra_table")), o = (i.pointerDown + " " + i.pointerUp + " " + i.pointerClick + " sort keyup ").replace(L.regex.spaces, " ").split(" ").join(s + " "), t.find(i.selectorSort).add(t.filter(i.selectorSort)).unbind(o).bind(o, function (e, t) {
          var r,
              o,
              s,
              a = A(e.target),
              n = " " + e.type + " ";

          if (!(1 !== (e.which || e.button) && !n.match(" " + i.pointerClick + " | sort | keyup ") || " keyup " === n && e.which !== L.keyCodes.enter || n.match(" " + i.pointerClick + " ") && void 0 !== e.which || n.match(" " + i.pointerUp + " ") && d !== e.target && !0 !== t)) {
            if (n.match(" " + i.pointerDown + " ")) return d = e.target, void ("1" === (s = a.jquery.split("."))[0] && s[1] < 4 && e.preventDefault());
            if (d = null, r = L.getClosest(A(this), "." + L.css.header), L.regex.formElements.test(e.target.nodeName) || a.hasClass(i.cssNoSort) || 0 < a.parents("." + i.cssNoSort).length || r.hasClass("sorter-false") || 0 < a.parents("button").length) return !i.cancelSelection;
            i.delayInit && L.isEmptyObject(i.cache) && L.buildCache(i), i.last.clickedIndex = r.attr("data-column") || r.index(), (o = i.$headerIndexed[i.last.clickedIndex][0]) && !o.sortDisabled && L.initSort(i, o, e);
          }
        }), i.cancelSelection && t.attr("unselectable", "on").bind("selectstart", !1).css({
          "user-select": "none",
          MozUserSelect: "none"
        });
      },
      buildHeaders: function buildHeaders(d) {
        var e, l, t, r;

        for (d.headerList = [], d.headerContent = [], d.sortVars = [], L.debug(d, "core") && (t = new Date()), d.columns = L.computeColumnIndex(d.$table.children("thead, tfoot").children("tr")), l = d.cssIcon ? '<i class="' + (d.cssIcon === L.css.icon ? L.css.icon : d.cssIcon + " " + L.css.icon) + '"></i>' : "", d.$headers = A(A.map(d.$table.find(d.selectorHeaders), function (e, t) {
          var r,
              o,
              s,
              a,
              n,
              i = A(e);
          if (!L.getClosest(i, "tr").hasClass(d.cssIgnoreRow)) return /(th|td)/i.test(e.nodeName) || (n = L.getClosest(i, "th, td"), i.attr("data-column", n.attr("data-column"))), r = L.getColumnData(d.table, d.headers, t, !0), d.headerContent[t] = i.html(), "" === d.headerTemplate || i.find("." + L.css.headerIn).length || (a = d.headerTemplate.replace(L.regex.templateContent, i.html()).replace(L.regex.templateIcon, i.find("." + L.css.icon).length ? "" : l), d.onRenderTemplate && (o = d.onRenderTemplate.apply(i, [t, a])) && "string" == typeof o && (a = o), i.html('<div class="' + L.css.headerIn + '">' + a + "</div>")), d.onRenderHeader && d.onRenderHeader.apply(i, [t, d, d.$table]), s = parseInt(i.attr("data-column"), 10), e.column = s, n = L.getOrder(L.getData(i, r, "sortInitialOrder") || d.sortInitialOrder), d.sortVars[s] = {
            count: -1,
            order: n ? d.sortReset ? [1, 0, 2] : [1, 0] : d.sortReset ? [0, 1, 2] : [0, 1],
            lockedOrder: !1,
            sortedBy: ""
          }, void 0 !== (n = L.getData(i, r, "lockedOrder") || !1) && !1 !== n && (d.sortVars[s].lockedOrder = !0, d.sortVars[s].order = L.getOrder(n) ? [1, 1] : [0, 0]), d.headerList[t] = e, i.addClass(L.css.header + " " + d.cssHeader), L.getClosest(i, "tr").addClass(L.css.headerRow + " " + d.cssHeaderRow).attr("role", "row"), d.tabIndex && i.attr("tabindex", 0), e;
        })), d.$headerIndexed = [], r = 0; r < d.columns; r++) {
          L.isEmptyObject(d.sortVars[r]) && (d.sortVars[r] = {}), e = d.$headers.filter('[data-column="' + r + '"]'), d.$headerIndexed[r] = e.length ? e.not(".sorter-false").length ? e.not(".sorter-false").filter(":last") : e.filter(":last") : A();
        }

        d.$table.find(d.selectorHeaders).attr({
          scope: "col",
          role: "columnheader"
        }), L.updateHeader(d), L.debug(d, "core") && (console.log("Built headers:" + L.benchmark(t)), console.log(d.$headers));
      },
      addInstanceMethods: function addInstanceMethods(e) {
        A.extend(L.instanceMethods, e);
      },
      setupParsers: function setupParsers(e, t) {
        var r,
            o,
            s,
            a,
            n,
            i,
            d,
            l,
            c,
            g,
            p,
            u,
            f,
            h,
            m = e.table,
            b = 0,
            y = L.debug(e, "core"),
            w = {};
        if (e.$tbodies = e.$table.children("tbody:not(." + e.cssInfoBlock + ")"), 0 === (h = (f = void 0 === t ? e.$tbodies : t).length)) return y ? console.warn("Warning: *Empty table!* Not building a parser cache") : "";

        for (y && (u = new Date(), console[console.group ? "group" : "log"]("Detecting parsers for each column")), o = {
          extractors: [],
          parsers: []
        }; b < h;) {
          if ((r = f[b].rows).length) for (n = 0, a = e.columns, i = 0; i < a; i++) {
            if ((d = e.$headerIndexed[n]) && d.length && (l = L.getColumnData(m, e.headers, n), p = L.getParserById(L.getData(d, l, "extractor")), g = L.getParserById(L.getData(d, l, "sorter")), c = "false" === L.getData(d, l, "parser"), e.empties[n] = (L.getData(d, l, "empty") || e.emptyTo || (e.emptyToBottom ? "bottom" : "top")).toLowerCase(), e.strings[n] = (L.getData(d, l, "string") || e.stringTo || "max").toLowerCase(), c && (g = L.getParserById("no-parser")), p = p || !1, g = g || L.detectParserForColumn(e, r, -1, n), y && (w["(" + n + ") " + d.text()] = {
              parser: g.id,
              extractor: p ? p.id : "none",
              string: e.strings[n],
              empty: e.empties[n]
            }), o.parsers[n] = g, o.extractors[n] = p, 0 < (s = d[0].colSpan - 1))) for (n += s, a += s; 0 < s + 1;) {
              o.parsers[n - s] = g, o.extractors[n - s] = p, s--;
            }
            n++;
          }
          b += o.parsers.length ? h : 1;
        }

        y && (L.isEmptyObject(w) ? console.warn("  No parsers detected!") : console[console.table ? "table" : "log"](w), console.log("Completed detecting parsers" + L.benchmark(u)), console.groupEnd && console.groupEnd()), e.parsers = o.parsers, e.extractors = o.extractors;
      },
      addParser: function addParser(e) {
        var t,
            r = L.parsers.length,
            o = !0;

        for (t = 0; t < r; t++) {
          L.parsers[t].id.toLowerCase() === e.id.toLowerCase() && (o = !1);
        }

        o && (L.parsers[L.parsers.length] = e);
      },
      getParserById: function getParserById(e) {
        if ("false" == e) return !1;
        var t,
            r = L.parsers.length;

        for (t = 0; t < r; t++) {
          if (L.parsers[t].id.toLowerCase() === e.toString().toLowerCase()) return L.parsers[t];
        }

        return !1;
      },
      detectParserForColumn: function detectParserForColumn(e, t, r, o) {
        for (var s, a, n, i = L.parsers.length, d = !1, l = "", c = L.debug(e, "core"), g = !0; "" === l && g;) {
          (n = t[++r]) && r < 50 ? n.className.indexOf(L.cssIgnoreRow) < 0 && (d = t[r].cells[o], l = L.getElementText(e, d, o), a = A(d), c && console.log("Checking if value was empty on row " + r + ", column: " + o + ': "' + l + '"')) : g = !1;
        }

        for (; 0 <= --i;) {
          if ((s = L.parsers[i]) && "text" !== s.id && s.is && s.is(l, e.table, d, a)) return s;
        }

        return L.getParserById("text");
      },
      getElementText: function getElementText(e, t, r) {
        if (!t) return "";
        var o,
            s = e.textExtraction || "",
            a = t.jquery ? t : A(t);
        return "string" == typeof s ? "basic" === s && void 0 !== (o = a.attr(e.textAttribute)) ? A.trim(o) : A.trim(t.textContent || a.text()) : "function" == typeof s ? A.trim(s(a[0], e.table, r)) : "function" == typeof (o = L.getColumnData(e.table, s, r)) ? A.trim(o(a[0], e.table, r)) : A.trim(a[0].textContent || a.text());
      },
      getParsedText: function getParsedText(e, t, r, o) {
        void 0 === o && (o = L.getElementText(e, t, r));
        var s = "" + o,
            a = e.parsers[r],
            n = e.extractors[r];
        return a && (n && "function" == typeof n.format && (o = n.format(o, e.table, t, r)), s = "no-parser" === a.id ? "" : a.format("" + o, e.table, t, r), e.ignoreCase && "string" == typeof s && (s = s.toLowerCase())), s;
      },
      buildCache: function buildCache(e, t, r) {
        var o,
            s,
            a,
            n,
            i,
            d,
            l,
            c,
            g,
            p,
            u,
            f,
            h,
            m,
            b,
            y,
            w,
            x,
            v,
            C,
            $,
            I,
            D = e.table,
            R = e.parsers,
            T = L.debug(e, "core");
        if (e.$tbodies = e.$table.children("tbody:not(." + e.cssInfoBlock + ")"), l = void 0 === r ? e.$tbodies : r, e.cache = {}, e.totalRows = 0, !R) return T ? console.warn("Warning: *Empty table!* Not building a cache") : "";

        for (T && (f = new Date()), e.showProcessing && L.isProcessing(D, !0), d = 0; d < l.length; d++) {
          for (y = [], o = e.cache[d] = {
            normalized: []
          }, h = l[d] && l[d].rows.length || 0, n = 0; n < h; ++n) {
            if (m = {
              child: [],
              raw: []
            }, g = [], !(c = A(l[d].rows[n])).hasClass(e.selectorRemove.slice(1))) if (c.hasClass(e.cssChildRow) && 0 !== n) for ($ = o.normalized.length - 1, (b = o.normalized[$][e.columns]).$row = b.$row.add(c), c.prev().hasClass(e.cssChildRow) || c.prev().addClass(L.css.cssHasChild), p = c.children("th, td"), $ = b.child.length, b.child[$] = [], x = 0, C = e.columns, i = 0; i < C; i++) {
              (u = p[i]) && (b.child[$][i] = L.getParsedText(e, u, i), 0 < (w = p[i].colSpan - 1) && (x += w, C += w)), x++;
            } else {
              for (m.$row = c, m.order = n, x = 0, C = e.columns, i = 0; i < C; ++i) {
                if ((u = c[0].cells[i]) && x < e.columns && (!(v = void 0 !== R[x]) && T && console.warn("No parser found for row: " + n + ", column: " + i + '; cell containing: "' + A(u).text() + '"; does it have a header?'), s = L.getElementText(e, u, x), m.raw[x] = s, a = L.getParsedText(e, u, x, s), g[x] = a, v && "numeric" === (R[x].type || "").toLowerCase() && (y[x] = Math.max(Math.abs(a) || 0, y[x] || 0)), 0 < (w = u.colSpan - 1))) {
                  for (I = 0; I <= w;) {
                    a = e.duplicateSpan || 0 === I ? a : "string" != typeof e.textExtraction && L.getElementText(e, u, x + I) || "", m.raw[x + I] = a, g[x + I] = a, I++;
                  }

                  x += w, C += w;
                }

                x++;
              }

              g[e.columns] = m, o.normalized[o.normalized.length] = g;
            }
          }

          o.colMax = y, e.totalRows += o.normalized.length;
        }

        if (e.showProcessing && L.isProcessing(D), T) {
          for ($ = Math.min(5, e.cache[0].normalized.length), console[console.group ? "group" : "log"]("Building cache for " + e.totalRows + " rows (showing " + $ + " rows in log) and " + e.columns + " columns" + L.benchmark(f)), s = {}, i = 0; i < e.columns; i++) {
            for (x = 0; x < $; x++) {
              s["row: " + x] || (s["row: " + x] = {}), s["row: " + x][e.$headerIndexed[i].text()] = e.cache[0].normalized[x][i];
            }
          }

          console[console.table ? "table" : "log"](s), console.groupEnd && console.groupEnd();
        }

        A.isFunction(t) && t(D);
      },
      getColumnText: function getColumnText(e, t, r, o) {
        var s,
            a,
            n,
            i,
            d,
            l,
            c,
            g,
            p,
            u,
            f = "function" == typeof r,
            h = "all" === t,
            m = {
          raw: [],
          parsed: [],
          $cell: []
        },
            b = (e = A(e)[0]).config;

        if (!L.isEmptyObject(b)) {
          for (d = b.$tbodies.length, s = 0; s < d; s++) {
            for (l = (n = b.cache[s].normalized).length, a = 0; a < l; a++) {
              i = n[a], o && !i[b.columns].$row.is(o) || (u = !0, g = h ? i.slice(0, b.columns) : i[t], i = i[b.columns], c = h ? i.raw : i.raw[t], p = h ? i.$row.children() : i.$row.children().eq(t), f && (u = r({
                tbodyIndex: s,
                rowIndex: a,
                parsed: g,
                raw: c,
                $row: i.$row,
                $cell: p
              })), !1 !== u && (m.parsed[m.parsed.length] = g, m.raw[m.raw.length] = c, m.$cell[m.$cell.length] = p));
            }
          }

          return m;
        }

        L.debug(b, "core") && console.warn("No cache found - aborting getColumnText function!");
      },
      setHeadersCss: function setHeadersCss(a) {
        function e(e, t) {
          e.removeClass(n).addClass(i[t]).attr("aria-sort", l[t]).find("." + L.css.icon).removeClass(d[2]).addClass(d[t]);
        }

        var t,
            r,
            o = a.sortList,
            s = o.length,
            n = L.css.sortNone + " " + a.cssNone,
            i = [L.css.sortAsc + " " + a.cssAsc, L.css.sortDesc + " " + a.cssDesc],
            d = [a.cssIconAsc, a.cssIconDesc, a.cssIconNone],
            l = ["ascending", "descending"],
            c = a.$table.find("tfoot tr").children("td, th").add(A(a.namespace + "_extra_headers")).removeClass(i.join(" ")),
            g = a.$headers.add(A("thead " + a.namespace + "_extra_headers")).removeClass(i.join(" ")).addClass(n).attr("aria-sort", "none").find("." + L.css.icon).removeClass(d.join(" ")).end();

        for (g.not(".sorter-false").find("." + L.css.icon).addClass(d[2]), a.cssIconDisabled && g.filter(".sorter-false").find("." + L.css.icon).addClass(a.cssIconDisabled), t = 0; t < s; t++) {
          if (2 !== o[t][1]) {
            if ((g = (g = a.$headers.filter(function (e) {
              for (var t = !0, r = a.$headers.eq(e), o = parseInt(r.attr("data-column"), 10), s = o + L.getClosest(r, "th, td")[0].colSpan; o < s; o++) {
                t = !!t && (t || -1 < L.isValueInArray(o, a.sortList));
              }

              return t;
            })).not(".sorter-false").filter('[data-column="' + o[t][0] + '"]' + (1 === s ? ":last" : ""))).length) for (r = 0; r < g.length; r++) {
              g[r].sortDisabled || e(g.eq(r), o[t][1]);
            }
            c.length && e(c.filter('[data-column="' + o[t][0] + '"]'), o[t][1]);
          }
        }

        for (s = a.$headers.length, t = 0; t < s; t++) {
          L.setColumnAriaLabel(a, a.$headers.eq(t));
        }
      },
      getClosest: function getClosest(e, t) {
        return A.fn.closest ? e.closest(t) : e.is(t) ? e : e.parents(t).filter(":first");
      },
      setColumnAriaLabel: function setColumnAriaLabel(e, t, r) {
        if (t.length) {
          var o = parseInt(t.attr("data-column"), 10),
              s = e.sortVars[o],
              a = t.hasClass(L.css.sortAsc) ? "sortAsc" : t.hasClass(L.css.sortDesc) ? "sortDesc" : "sortNone",
              n = A.trim(t.text()) + ": " + L.language[a];
          t.hasClass("sorter-false") || !1 === r ? n += L.language.sortDisabled : (a = (s.count + 1) % s.order.length, r = s.order[a], n += L.language[0 === r ? "nextAsc" : 1 === r ? "nextDesc" : "nextNone"]), t.attr("aria-label", n), s.sortedBy ? t.attr("data-sortedBy", s.sortedBy) : t.removeAttr("data-sortedBy");
        }
      },
      updateHeader: function updateHeader(e) {
        var t,
            r,
            o,
            s,
            a = e.table,
            n = e.$headers.length;

        for (t = 0; t < n; t++) {
          o = e.$headers.eq(t), s = L.getColumnData(a, e.headers, t, !0), r = "false" === L.getData(o, s, "sorter") || "false" === L.getData(o, s, "parser"), L.setColumnSort(e, o, r);
        }
      },
      setColumnSort: function setColumnSort(e, t, r) {
        var o = e.table.id;
        t[0].sortDisabled = r, t[r ? "addClass" : "removeClass"]("sorter-false").attr("aria-disabled", "" + r), e.tabIndex && (r ? t.removeAttr("tabindex") : t.attr("tabindex", "0")), o && (r ? t.removeAttr("aria-controls") : t.attr("aria-controls", o));
      },
      updateHeaderSortCount: function updateHeaderSortCount(e, t) {
        var r,
            o,
            s,
            a,
            n,
            i,
            d,
            l,
            c = t || e.sortList,
            g = c.length;

        for (e.sortList = [], a = 0; a < g; a++) {
          if (d = c[a], (r = parseInt(d[0], 10)) < e.columns) {
            switch (e.sortVars[r].order || (l = L.getOrder(e.sortInitialOrder) ? e.sortReset ? [1, 0, 2] : [1, 0] : e.sortReset ? [0, 1, 2] : [0, 1], e.sortVars[r].order = l, e.sortVars[r].count = 0), l = e.sortVars[r].order, o = (o = ("" + d[1]).match(/^(1|d|s|o|n)/)) ? o[0] : "") {
              case "1":
              case "d":
                o = 1;
                break;

              case "s":
                o = n || 0;
                break;

              case "o":
                o = 0 === (i = l[(n || 0) % l.length]) ? 1 : 1 === i ? 0 : 2;
                break;

              case "n":
                o = l[++e.sortVars[r].count % l.length];
                break;

              default:
                o = 0;
            }

            n = 0 === a ? o : n, s = [r, parseInt(o, 10) || 0], e.sortList[e.sortList.length] = s, o = A.inArray(s[1], l), e.sortVars[r].count = 0 <= o ? o : s[1] % l.length;
          }
        }
      },
      updateAll: function updateAll(e, t, r) {
        var o = e.table;
        o.isUpdating = !0, L.refreshWidgets(o, !0, !0), L.buildHeaders(e), L.bindEvents(o, e.$headers, !0), L.bindMethods(e), L.commonUpdate(e, t, r);
      },
      update: function update(e, t, r) {
        e.table.isUpdating = !0, L.updateHeader(e), L.commonUpdate(e, t, r);
      },
      updateHeaders: function updateHeaders(e, t) {
        e.table.isUpdating = !0, L.buildHeaders(e), L.bindEvents(e.table, e.$headers, !0), L.resortComplete(e, t);
      },
      updateCell: function updateCell(e, t, r, o) {
        if (A(t).closest("tr").hasClass(e.cssChildRow)) console.warn('Tablesorter Warning! "updateCell" for child row content has been disabled, use "update" instead');else {
          if (L.isEmptyObject(e.cache)) return L.updateHeader(e), void L.commonUpdate(e, r, o);
          e.table.isUpdating = !0, e.$table.find(e.selectorRemove).remove();
          var s,
              a,
              n,
              i,
              d,
              l,
              c = e.$tbodies,
              g = A(t),
              p = c.index(L.getClosest(g, "tbody")),
              u = e.cache[p],
              f = L.getClosest(g, "tr");

          if (t = g[0], c.length && 0 <= p) {
            if (n = c.eq(p).find("tr").not("." + e.cssChildRow).index(f), d = u.normalized[n], (l = f[0].cells.length) !== e.columns) for (s = !1, a = i = 0; a < l; a++) {
              s || f[0].cells[a] === t ? s = !0 : i += f[0].cells[a].colSpan;
            } else i = g.index();
            s = L.getElementText(e, t, i), d[e.columns].raw[i] = s, s = L.getParsedText(e, t, i, s), d[i] = s, "numeric" === (e.parsers[i].type || "").toLowerCase() && (u.colMax[i] = Math.max(Math.abs(s) || 0, u.colMax[i] || 0)), !1 !== (s = "undefined" !== r ? r : e.resort) ? L.checkResort(e, s, o) : L.resortComplete(e, o);
          } else L.debug(e, "core") && console.error("updateCell aborted, tbody missing or not within the indicated table"), e.table.isUpdating = !1;
        }
      },
      addRows: function addRows(e, t, r, o) {
        var s,
            a,
            n,
            i,
            d,
            l,
            c,
            g,
            p,
            u,
            f,
            h,
            m,
            b = "string" == typeof t && 1 === e.$tbodies.length && /<tr/.test(t || ""),
            y = e.table;
        if (b) t = A(t), e.$tbodies.append(t);else if (!(t && t instanceof A && L.getClosest(t, "table")[0] === e.table)) return L.debug(e, "core") && console.error("addRows method requires (1) a jQuery selector reference to rows that have already been added to the table, or (2) row HTML string to be added to a table with only one tbody"), !1;
        if (y.isUpdating = !0, L.isEmptyObject(e.cache)) L.updateHeader(e), L.commonUpdate(e, r, o);else {
          for (d = t.filter("tr").attr("role", "row").length, n = e.$tbodies.index(t.parents("tbody").filter(":first")), e.parsers && e.parsers.length || L.setupParsers(e), i = 0; i < d; i++) {
            for (p = 0, c = t[i].cells.length, g = e.cache[n].normalized.length, f = [], u = {
              child: [],
              raw: [],
              $row: t.eq(i),
              order: g
            }, l = 0; l < c; l++) {
              h = t[i].cells[l], s = L.getElementText(e, h, p), u.raw[p] = s, a = L.getParsedText(e, h, p, s), f[p] = a, "numeric" === (e.parsers[p].type || "").toLowerCase() && (e.cache[n].colMax[p] = Math.max(Math.abs(a) || 0, e.cache[n].colMax[p] || 0)), 0 < (m = h.colSpan - 1) && (p += m), p++;
            }

            f[e.columns] = u, e.cache[n].normalized[g] = f;
          }

          L.checkResort(e, r, o);
        }
      },
      updateCache: function updateCache(e, t, r) {
        e.parsers && e.parsers.length || L.setupParsers(e, r), L.buildCache(e, t, r);
      },
      appendCache: function appendCache(e, t) {
        var r,
            o,
            s,
            a,
            n,
            i,
            d,
            l = e.table,
            c = e.$tbodies,
            g = [],
            p = e.cache;
        if (L.isEmptyObject(p)) return e.appender ? e.appender(l, g) : l.isUpdating ? e.$table.triggerHandler("updateComplete", l) : "";

        for (L.debug(e, "core") && (d = new Date()), i = 0; i < c.length; i++) {
          if ((s = c.eq(i)).length) {
            for (a = L.processTbody(l, s, !0), o = (r = p[i].normalized).length, n = 0; n < o; n++) {
              g[g.length] = r[n][e.columns].$row, e.appender && (!e.pager || e.pager.removeRows || e.pager.ajax) || a.append(r[n][e.columns].$row);
            }

            L.processTbody(l, a, !1);
          }
        }

        e.appender && e.appender(l, g), L.debug(e, "core") && console.log("Rebuilt table" + L.benchmark(d)), t || e.appender || L.applyWidget(l), l.isUpdating && e.$table.triggerHandler("updateComplete", l);
      },
      commonUpdate: function commonUpdate(e, t, r) {
        e.$table.find(e.selectorRemove).remove(), L.setupParsers(e), L.buildCache(e), L.checkResort(e, t, r);
      },
      initSort: function initSort(t, e, r) {
        if (t.table.isUpdating) return setTimeout(function () {
          L.initSort(t, e, r);
        }, 50);
        var o,
            s,
            a,
            n,
            i,
            d,
            l,
            c = !r[t.sortMultiSortKey],
            g = t.table,
            p = t.$headers.length,
            u = L.getClosest(A(e), "th, td"),
            f = parseInt(u.attr("data-column"), 10),
            h = "mouseup" === r.type ? "user" : r.type,
            m = t.sortVars[f].order;
        if (u = u[0], t.$table.triggerHandler("sortStart", g), d = (t.sortVars[f].count + 1) % m.length, t.sortVars[f].count = r[t.sortResetKey] ? 2 : d, t.sortRestart) for (a = 0; a < p; a++) {
          l = t.$headers.eq(a), f !== (d = parseInt(l.attr("data-column"), 10)) && (c || l.hasClass(L.css.sortNone)) && (t.sortVars[d].count = -1);
        }

        if (c) {
          if (A.each(t.sortVars, function (e) {
            t.sortVars[e].sortedBy = "";
          }), t.sortList = [], t.last.sortList = [], null !== t.sortForce) for (o = t.sortForce, s = 0; s < o.length; s++) {
            o[s][0] !== f && (t.sortList[t.sortList.length] = o[s], t.sortVars[o[s][0]].sortedBy = "sortForce");
          }
          if ((n = m[t.sortVars[f].count]) < 2 && (t.sortList[t.sortList.length] = [f, n], t.sortVars[f].sortedBy = h, 1 < u.colSpan)) for (s = 1; s < u.colSpan; s++) {
            t.sortList[t.sortList.length] = [f + s, n], t.sortVars[f + s].count = A.inArray(n, m), t.sortVars[f + s].sortedBy = h;
          }
        } else if (t.sortList = A.extend([], t.last.sortList), 0 <= L.isValueInArray(f, t.sortList)) for (t.sortVars[f].sortedBy = h, s = 0; s < t.sortList.length; s++) {
          (d = t.sortList[s])[0] === f && (d[1] = m[t.sortVars[f].count], 2 === d[1] && (t.sortList.splice(s, 1), t.sortVars[f].count = -1));
        } else if (n = m[t.sortVars[f].count], t.sortVars[f].sortedBy = h, n < 2 && (t.sortList[t.sortList.length] = [f, n], 1 < u.colSpan)) for (s = 1; s < u.colSpan; s++) {
          t.sortList[t.sortList.length] = [f + s, n], t.sortVars[f + s].count = A.inArray(n, m), t.sortVars[f + s].sortedBy = h;
        }

        if (t.last.sortList = A.extend([], t.sortList), t.sortList.length && t.sortAppend && (o = A.isArray(t.sortAppend) ? t.sortAppend : t.sortAppend[t.sortList[0][0]], !L.isEmptyObject(o))) for (s = 0; s < o.length; s++) {
          if (o[s][0] !== f && L.isValueInArray(o[s][0], t.sortList) < 0) {
            if (i = ("" + (n = o[s][1])).match(/^(a|d|s|o|n)/)) switch (d = t.sortList[0][1], i[0]) {
              case "d":
                n = 1;
                break;

              case "s":
                n = d;
                break;

              case "o":
                n = 0 === d ? 1 : 0;
                break;

              case "n":
                n = (d + 1) % m.length;
                break;

              default:
                n = 0;
            }
            t.sortList[t.sortList.length] = [o[s][0], n], t.sortVars[o[s][0]].sortedBy = "sortAppend";
          }
        }
        t.$table.triggerHandler("sortBegin", g), setTimeout(function () {
          L.setHeadersCss(t), L.multisort(t), L.appendCache(t), t.$table.triggerHandler("sortBeforeEnd", g), t.$table.triggerHandler("sortEnd", g);
        }, 1);
      },
      multisort: function multisort(l) {
        var e,
            t,
            c,
            r,
            g = l.table,
            p = [],
            u = 0,
            f = l.textSorter || "",
            h = l.sortList,
            m = h.length,
            o = l.$tbodies.length;

        if (!l.serverSideSorting && !L.isEmptyObject(l.cache)) {
          if (L.debug(l, "core") && (t = new Date()), "object" == _typeof(f)) for (c = l.columns; c--;) {
            "function" == typeof (r = L.getColumnData(g, f, c)) && (p[c] = r);
          }

          for (e = 0; e < o; e++) {
            c = l.cache[e].colMax, l.cache[e].normalized.sort(function (e, t) {
              var r, o, s, a, n, i, d;

              for (r = 0; r < m; r++) {
                if (s = h[r][0], a = h[r][1], u = 0 === a, l.sortStable && e[s] === t[s] && 1 === m) return e[l.columns].order - t[l.columns].order;
                if (n = (o = /n/i.test(L.getSortType(l.parsers, s))) && l.strings[s] ? (o = "boolean" == typeof L.string[l.strings[s]] ? (u ? 1 : -1) * (L.string[l.strings[s]] ? -1 : 1) : l.strings[s] && L.string[l.strings[s]] || 0, l.numberSorter ? l.numberSorter(e[s], t[s], u, c[s], g) : L["sortNumeric" + (u ? "Asc" : "Desc")](e[s], t[s], o, c[s], s, l)) : (i = u ? e : t, d = u ? t : e, "function" == typeof f ? f(i[s], d[s], u, s, g) : "function" == typeof p[s] ? p[s](i[s], d[s], u, s, g) : L["sortNatural" + (u ? "Asc" : "Desc")](e[s] || "", t[s] || "", s, l))) return n;
              }

              return e[l.columns].order - t[l.columns].order;
            });
          }

          L.debug(l, "core") && console.log("Applying sort " + h.toString() + L.benchmark(t));
        }
      },
      resortComplete: function resortComplete(e, t) {
        e.table.isUpdating && e.$table.triggerHandler("updateComplete", e.table), A.isFunction(t) && t(e.table);
      },
      checkResort: function checkResort(e, t, r) {
        var o = A.isArray(t) ? t : e.sortList;
        !1 === (void 0 === t ? e.resort : t) || e.serverSideSorting || e.table.isProcessing ? (L.resortComplete(e, r), L.applyWidget(e.table, !1)) : o.length ? L.sortOn(e, o, function () {
          L.resortComplete(e, r);
        }, !0) : L.sortReset(e, function () {
          L.resortComplete(e, r), L.applyWidget(e.table, !1);
        });
      },
      sortOn: function sortOn(e, t, r, o) {
        var s,
            a = e.table;

        for (e.$table.triggerHandler("sortStart", a), s = 0; s < e.columns; s++) {
          e.sortVars[s].sortedBy = -1 < L.isValueInArray(s, t) ? "sorton" : "";
        }

        L.updateHeaderSortCount(e, t), L.setHeadersCss(e), e.delayInit && L.isEmptyObject(e.cache) && L.buildCache(e), e.$table.triggerHandler("sortBegin", a), L.multisort(e), L.appendCache(e, o), e.$table.triggerHandler("sortBeforeEnd", a), e.$table.triggerHandler("sortEnd", a), L.applyWidget(a), A.isFunction(r) && r(a);
      },
      sortReset: function sortReset(e, t) {
        var r;

        for (e.sortList = [], r = 0; r < e.columns; r++) {
          e.sortVars[r].count = -1, e.sortVars[r].sortedBy = "";
        }

        L.setHeadersCss(e), L.multisort(e), L.appendCache(e), A.isFunction(t) && t(e.table);
      },
      getSortType: function getSortType(e, t) {
        return e && e[t] && e[t].type || "";
      },
      getOrder: function getOrder(e) {
        return /^d/i.test(e) || 1 === e;
      },
      sortNatural: function sortNatural(e, t) {
        if (e === t) return 0;
        e = (e || "").toString(), t = (t || "").toString();
        var r,
            o,
            s,
            a,
            n,
            i,
            d = L.regex;

        if (d.hex.test(t)) {
          if ((r = parseInt(e.match(d.hex), 16)) < (o = parseInt(t.match(d.hex), 16))) return -1;
          if (o < r) return 1;
        }

        for (r = e.replace(d.chunk, "\\0$1\\0").replace(d.chunks, "").split("\\0"), o = t.replace(d.chunk, "\\0$1\\0").replace(d.chunks, "").split("\\0"), i = Math.max(r.length, o.length), n = 0; n < i; n++) {
          if (s = isNaN(r[n]) ? r[n] || 0 : parseFloat(r[n]) || 0, a = isNaN(o[n]) ? o[n] || 0 : parseFloat(o[n]) || 0, isNaN(s) !== isNaN(a)) return isNaN(s) ? 1 : -1;
          if (_typeof(s) != _typeof(a) && (s += "", a += ""), s < a) return -1;
          if (a < s) return 1;
        }

        return 0;
      },
      sortNaturalAsc: function sortNaturalAsc(e, t, r, o) {
        if (e === t) return 0;
        var s = L.string[o.empties[r] || o.emptyTo];
        return "" === e && 0 !== s ? "boolean" == typeof s ? s ? -1 : 1 : -s || -1 : "" === t && 0 !== s ? "boolean" == typeof s ? s ? 1 : -1 : s || 1 : L.sortNatural(e, t);
      },
      sortNaturalDesc: function sortNaturalDesc(e, t, r, o) {
        if (e === t) return 0;
        var s = L.string[o.empties[r] || o.emptyTo];
        return "" === e && 0 !== s ? "boolean" == typeof s ? s ? -1 : 1 : s || 1 : "" === t && 0 !== s ? "boolean" == typeof s ? s ? 1 : -1 : -s || -1 : L.sortNatural(t, e);
      },
      sortText: function sortText(e, t) {
        return t < e ? 1 : e < t ? -1 : 0;
      },
      getTextValue: function getTextValue(e, t, r) {
        if (r) {
          var o,
              s = e ? e.length : 0,
              a = r + t;

          for (o = 0; o < s; o++) {
            a += e.charCodeAt(o);
          }

          return t * a;
        }

        return 0;
      },
      sortNumericAsc: function sortNumericAsc(e, t, r, o, s, a) {
        if (e === t) return 0;
        var n = L.string[a.empties[s] || a.emptyTo];
        return "" === e && 0 !== n ? "boolean" == typeof n ? n ? -1 : 1 : -n || -1 : "" === t && 0 !== n ? "boolean" == typeof n ? n ? 1 : -1 : n || 1 : (isNaN(e) && (e = L.getTextValue(e, r, o)), isNaN(t) && (t = L.getTextValue(t, r, o)), e - t);
      },
      sortNumericDesc: function sortNumericDesc(e, t, r, o, s, a) {
        if (e === t) return 0;
        var n = L.string[a.empties[s] || a.emptyTo];
        return "" === e && 0 !== n ? "boolean" == typeof n ? n ? -1 : 1 : n || 1 : "" === t && 0 !== n ? "boolean" == typeof n ? n ? 1 : -1 : -n || -1 : (isNaN(e) && (e = L.getTextValue(e, r, o)), isNaN(t) && (t = L.getTextValue(t, r, o)), t - e);
      },
      sortNumeric: function sortNumeric(e, t) {
        return e - t;
      },
      addWidget: function addWidget(e) {
        e.id && !L.isEmptyObject(L.getWidgetById(e.id)) && console.warn('"' + e.id + '" widget was loaded more than once!'), L.widgets[L.widgets.length] = e;
      },
      hasWidget: function hasWidget(e, t) {
        return (e = A(e)).length && e[0].config && e[0].config.widgetInit[t] || !1;
      },
      getWidgetById: function getWidgetById(e) {
        var t,
            r,
            o = L.widgets.length;

        for (t = 0; t < o; t++) {
          if ((r = L.widgets[t]) && r.id && r.id.toLowerCase() === e.toLowerCase()) return r;
        }
      },
      applyWidgetOptions: function applyWidgetOptions(e) {
        var t,
            r,
            o,
            s = e.config,
            a = s.widgets.length;
        if (a) for (t = 0; t < a; t++) {
          (r = L.getWidgetById(s.widgets[t])) && r.options && (o = A.extend(!0, {}, r.options), s.widgetOptions = A.extend(!0, o, s.widgetOptions), A.extend(!0, L.defaults.widgetOptions, r.options));
        }
      },
      addWidgetFromClass: function addWidgetFromClass(e) {
        var t,
            r,
            o = e.config,
            s = "^" + o.widgetClass.replace(L.regex.templateName, "(\\S+)+") + "$",
            a = new RegExp(s, "g"),
            n = (e.className || "").split(L.regex.spaces);
        if (n.length) for (t = n.length, r = 0; r < t; r++) {
          n[r].match(a) && (o.widgets[o.widgets.length] = n[r].replace(a, "$1"));
        }
      },
      applyWidgetId: function applyWidgetId(e, t, r) {
        var o,
            s,
            a,
            n = (e = A(e)[0]).config,
            i = n.widgetOptions,
            d = L.debug(n, "core"),
            l = L.getWidgetById(t);
        l && (a = l.id, o = !1, A.inArray(a, n.widgets) < 0 && (n.widgets[n.widgets.length] = a), d && (s = new Date()), !r && n.widgetInit[a] || (n.widgetInit[a] = !0, e.hasInitialized && L.applyWidgetOptions(e), "function" == typeof l.init && (o = !0, d && console[console.group ? "group" : "log"]("Initializing " + a + " widget"), l.init(e, l, n, i))), r || "function" != typeof l.format || (o = !0, d && console[console.group ? "group" : "log"]("Updating " + a + " widget"), l.format(e, n, i, !1)), d && o && (console.log("Completed " + (r ? "initializing " : "applying ") + a + " widget" + L.benchmark(s)), console.groupEnd && console.groupEnd()));
      },
      applyWidget: function applyWidget(e, t, r) {
        var o,
            s,
            a,
            n,
            i,
            d = (e = A(e)[0]).config,
            l = L.debug(d, "core"),
            c = [];

        if (!1 === t || !e.hasInitialized || !e.isApplyingWidgets && !e.isUpdating) {
          if (l && (i = new Date()), L.addWidgetFromClass(e), clearTimeout(d.timerReady), d.widgets.length) {
            for (e.isApplyingWidgets = !0, d.widgets = A.grep(d.widgets, function (e, t) {
              return A.inArray(e, d.widgets) === t;
            }), s = (a = d.widgets || []).length, o = 0; o < s; o++) {
              (n = L.getWidgetById(a[o])) && n.id ? (n.priority || (n.priority = 10), c[o] = n) : l && console.warn('"' + a[o] + '" was enabled, but the widget code has not been loaded!');
            }

            for (c.sort(function (e, t) {
              return e.priority < t.priority ? -1 : e.priority === t.priority ? 0 : 1;
            }), s = c.length, l && console[console.group ? "group" : "log"]("Start " + (t ? "initializing" : "applying") + " widgets"), o = 0; o < s; o++) {
              (n = c[o]) && n.id && L.applyWidgetId(e, n.id, t);
            }

            l && console.groupEnd && console.groupEnd();
          }

          d.timerReady = setTimeout(function () {
            e.isApplyingWidgets = !1, A.data(e, "lastWidgetApplication", new Date()), d.$table.triggerHandler("tablesorter-ready"), t || "function" != typeof r || r(e), l && (n = d.widgets.length, console.log("Completed " + (!0 === t ? "initializing " : "applying ") + n + " widget" + (1 !== n ? "s" : "") + L.benchmark(i)));
          }, 10);
        }
      },
      removeWidget: function removeWidget(e, t, r) {
        var o,
            s,
            a,
            n,
            i = (e = A(e)[0]).config;
        if (!0 === t) for (t = [], n = L.widgets.length, a = 0; a < n; a++) {
          (s = L.widgets[a]) && s.id && (t[t.length] = s.id);
        } else t = (A.isArray(t) ? t.join(",") : t || "").toLowerCase().split(/[\s,]+/);

        for (n = t.length, o = 0; o < n; o++) {
          s = L.getWidgetById(t[o]), 0 <= (a = A.inArray(t[o], i.widgets)) && !0 !== r && i.widgets.splice(a, 1), s && s.remove && (L.debug(i, "core") && console.log((r ? "Refreshing" : "Removing") + ' "' + t[o] + '" widget'), s.remove(e, i, i.widgetOptions, r), i.widgetInit[t[o]] = !1);
        }

        i.$table.triggerHandler("widgetRemoveEnd", e);
      },
      refreshWidgets: function refreshWidgets(e, t, r) {
        function o(e) {
          A(e).triggerHandler("refreshComplete");
        }

        var s,
            a,
            n = (e = A(e)[0]).config.widgets,
            i = L.widgets,
            d = i.length,
            l = [];

        for (s = 0; s < d; s++) {
          (a = i[s]) && a.id && (t || A.inArray(a.id, n) < 0) && (l[l.length] = a.id);
        }

        L.removeWidget(e, l.join(","), !0), !0 !== r ? (L.applyWidget(e, t || !1, o), t && L.applyWidget(e, !1, o)) : o(e);
      },
      benchmark: function benchmark(e) {
        return " (" + (new Date().getTime() - e.getTime()) + " ms)";
      },
      log: function log() {
        console.log(arguments);
      },
      debug: function debug(e, t) {
        return e && (!0 === e.debug || "string" == typeof e.debug && -1 < e.debug.indexOf(t));
      },
      isEmptyObject: function isEmptyObject(e) {
        for (var t in e) {
          return !1;
        }

        return !0;
      },
      isValueInArray: function isValueInArray(e, t) {
        var r,
            o = t && t.length || 0;

        for (r = 0; r < o; r++) {
          if (t[r][0] === e) return r;
        }

        return -1;
      },
      formatFloat: function formatFloat(e, t) {
        return "string" != typeof e || "" === e ? e : (e = (t && t.config ? !1 !== t.config.usNumberFormat : void 0 === t || t) ? e.replace(L.regex.comma, "") : e.replace(L.regex.digitNonUS, "").replace(L.regex.comma, "."), L.regex.digitNegativeTest.test(e) && (e = e.replace(L.regex.digitNegativeReplace, "-$1")), r = parseFloat(e), isNaN(r) ? A.trim(e) : r);
        var r;
      },
      isDigit: function isDigit(e) {
        return isNaN(e) ? L.regex.digitTest.test(e.toString().replace(L.regex.digitReplace, "")) : "" !== e;
      },
      computeColumnIndex: function computeColumnIndex(e, t) {
        var r,
            o,
            s,
            a,
            n,
            i,
            d,
            l,
            c,
            g,
            p = t && t.columns || 0,
            u = [],
            f = new Array(p);

        for (r = 0; r < e.length; r++) {
          for (i = e[r].cells, o = 0; o < i.length; o++) {
            for (d = r, l = (n = i[o]).rowSpan || 1, c = n.colSpan || 1, void 0 === u[d] && (u[d] = []), s = 0; s < u[d].length + 1; s++) {
              if (void 0 === u[d][s]) {
                g = s;
                break;
              }
            }

            for (p && n.cellIndex === g || (n.setAttribute ? n.setAttribute("data-column", g) : A(n).attr("data-column", g)), s = d; s < d + l; s++) {
              for (void 0 === u[s] && (u[s] = []), f = u[s], a = g; a < g + c; a++) {
                f[a] = "x";
              }
            }
          }
        }

        return L.checkColumnCount(e, u, f.length), f.length;
      },
      checkColumnCount: function checkColumnCount(e, t, r) {
        var o,
            s,
            a = !0,
            n = [];

        for (o = 0; o < t.length; o++) {
          if (t[o] && (s = t[o].length, t[o].length !== r)) {
            a = !1;
            break;
          }
        }

        a || (e.each(function (e, t) {
          var r = t.parentElement.nodeName;
          n.indexOf(r) < 0 && n.push(r);
        }), console.error("Invalid or incorrect number of columns in the " + n.join(" or ") + "; expected " + r + ", but found " + s + " columns"));
      },
      fixColumnWidth: function fixColumnWidth(e) {
        var t,
            r,
            o,
            s,
            a,
            n = (e = A(e)[0]).config,
            i = n.$table.children("colgroup");

        if (i.length && i.hasClass(L.css.colgroup) && i.remove(), n.widthFixed && 0 === n.$table.children("colgroup").length) {
          for (i = A('<colgroup class="' + L.css.colgroup + '">'), t = n.$table.width(), s = (o = n.$tbodies.find("tr:first").children(":visible")).length, a = 0; a < s; a++) {
            r = parseInt(o.eq(a).width() / t * 1e3, 10) / 10 + "%", i.append(A("<col>").css("width", r));
          }

          n.$table.prepend(i);
        }
      },
      getData: function getData(e, t, r) {
        var o,
            s,
            a = "",
            n = A(e);
        return n.length ? (o = !!A.metadata && n.metadata(), s = " " + (n.attr("class") || ""), void 0 !== n.data(r) || void 0 !== n.data(r.toLowerCase()) ? a += n.data(r) || n.data(r.toLowerCase()) : o && void 0 !== o[r] ? a += o[r] : t && void 0 !== t[r] ? a += t[r] : " " !== s && s.match(" " + r + "-") && (a = s.match(new RegExp("\\s" + r + "-([\\w-]+)"))[1] || ""), A.trim(a)) : "";
      },
      getColumnData: function getColumnData(e, t, r, o, s) {
        if ("object" != _typeof(t) || null === t) return t;
        var a,
            n = (e = A(e)[0]).config,
            i = s || n.$headers,
            d = n.$headerIndexed && n.$headerIndexed[r] || i.find('[data-column="' + r + '"]:last');
        if (void 0 !== t[r]) return o ? t[r] : t[i.index(d)];

        for (a in t) {
          if ("string" == typeof a && d.filter(a).add(d.find(a)).length) return t[a];
        }
      },
      isProcessing: function isProcessing(e, t, r) {
        var o = (e = A(e))[0].config,
            s = r || e.find("." + L.css.header);
        t ? (void 0 !== r && 0 < o.sortList.length && (s = s.filter(function () {
          return !this.sortDisabled && 0 <= L.isValueInArray(parseFloat(A(this).attr("data-column")), o.sortList);
        })), e.add(s).addClass(L.css.processing + " " + o.cssProcessing)) : e.add(s).removeClass(L.css.processing + " " + o.cssProcessing);
      },
      processTbody: function processTbody(e, t, r) {
        if (e = A(e)[0], r) return e.isProcessing = !0, t.before('<colgroup class="tablesorter-savemyplace"/>'), A.fn.detach ? t.detach() : t.remove();
        var o = A(e).find("colgroup.tablesorter-savemyplace");
        t.insertAfter(o), o.remove(), e.isProcessing = !1;
      },
      clearTableBody: function clearTableBody(e) {
        A(e)[0].config.$tbodies.children().detach();
      },
      characterEquivalents: {
        a: "áàâãäąå",
        A: "ÁÀÂÃÄĄÅ",
        c: "çćč",
        C: "ÇĆČ",
        e: "éèêëěę",
        E: "ÉÈÊËĚĘ",
        i: "íìİîïı",
        I: "ÍÌİÎÏ",
        o: "óòôõöō",
        O: "ÓÒÔÕÖŌ",
        ss: "ß",
        SS: "ẞ",
        u: "úùûüů",
        U: "ÚÙÛÜŮ"
      },
      replaceAccents: function replaceAccents(e) {
        var t,
            r = "[",
            o = L.characterEquivalents;

        if (!L.characterRegex) {
          for (t in L.characterRegexArray = {}, o) {
            "string" == typeof t && (r += o[t], L.characterRegexArray[t] = new RegExp("[" + o[t] + "]", "g"));
          }

          L.characterRegex = new RegExp(r + "]");
        }

        if (L.characterRegex.test(e)) for (t in o) {
          "string" == typeof t && (e = e.replace(L.characterRegexArray[t], t));
        }
        return e;
      },
      validateOptions: function validateOptions(e) {
        var t,
            r,
            o,
            s,
            a = "headers sortForce sortList sortAppend widgets".split(" "),
            n = e.originalSettings;

        if (n) {
          for (t in L.debug(e, "core") && (s = new Date()), n) {
            if ("undefined" === (o = _typeof(L.defaults[t]))) console.warn('Tablesorter Warning! "table.config.' + t + '" option not recognized');else if ("object" === o) for (r in n[t]) {
              o = L.defaults[t] && _typeof(L.defaults[t][r]), A.inArray(t, a) < 0 && "undefined" === o && console.warn('Tablesorter Warning! "table.config.' + t + "." + r + '" option not recognized');
            }
          }

          L.debug(e, "core") && console.log("validate options time:" + L.benchmark(s));
        }
      },
      restoreHeaders: function restoreHeaders(e) {
        var t,
            r,
            o = A(e)[0].config,
            s = o.$table.find(o.selectorHeaders),
            a = s.length;

        for (t = 0; t < a; t++) {
          (r = s.eq(t)).find("." + L.css.headerIn).length && r.html(o.headerContent[t]);
        }
      },
      destroy: function destroy(e, t, r) {
        if ((e = A(e)[0]).hasInitialized) {
          L.removeWidget(e, !0, !1);
          var o,
              s = A(e),
              a = e.config,
              n = s.find("thead:first"),
              i = n.find("tr." + L.css.headerRow).removeClass(L.css.headerRow + " " + a.cssHeaderRow),
              d = s.find("tfoot:first > tr").children("th, td");
          !1 === t && 0 <= A.inArray("uitheme", a.widgets) && (s.triggerHandler("applyWidgetId", ["uitheme"]), s.triggerHandler("applyWidgetId", ["zebra"])), n.find("tr").not(i).remove(), o = "sortReset update updateRows updateAll updateHeaders updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets removeWidget destroy mouseup mouseleave " + "keypress sortBegin sortEnd resetToLoadState ".split(" ").join(a.namespace + " "), s.removeData("tablesorter").unbind(o.replace(L.regex.spaces, " ")), a.$headers.add(d).removeClass([L.css.header, a.cssHeader, a.cssAsc, a.cssDesc, L.css.sortAsc, L.css.sortDesc, L.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled", "true"), i.find(a.selectorSort).unbind("mousedown mouseup keypress ".split(" ").join(a.namespace + " ").replace(L.regex.spaces, " ")), L.restoreHeaders(e), s.toggleClass(L.css.table + " " + a.tableClass + " tablesorter-" + a.theme, !1 === t), s.removeClass(a.namespace.slice(1)), e.hasInitialized = !1, delete e.config.cache, "function" == typeof r && r(e), L.debug(a, "core") && console.log("tablesorter has been removed");
        }
      }
    };
    A.fn.tablesorter = function (t) {
      return this.each(function () {
        var e = A.extend(!0, {}, L.defaults, t, L.instanceMethods);
        e.originalSettings = t, !this.hasInitialized && L.buildTable && "TABLE" !== this.nodeName ? L.buildTable(this, e) : L.setup(this, e);
      });
    }, window.console && window.console.log || (L.logs = [], console = {}, console.log = console.warn = console.error = console.table = function () {
      var e = 1 < arguments.length ? arguments : arguments[0];
      L.logs[L.logs.length] = {
        date: Date.now(),
        log: e
      };
    }), L.addParser({
      id: "no-parser",
      is: function is() {
        return !1;
      },
      format: function format() {
        return "";
      },
      type: "text"
    }), L.addParser({
      id: "text",
      is: function is() {
        return !0;
      },
      format: function format(e, t) {
        var r = t.config;
        return e && (e = A.trim(r.ignoreCase ? e.toLocaleLowerCase() : e), e = r.sortLocaleCompare ? L.replaceAccents(e) : e), e;
      },
      type: "text"
    }), L.regex.nondigit = /[^\w,. \-()]/g, L.addParser({
      id: "digit",
      is: function is(e) {
        return L.isDigit(e);
      },
      format: function format(e, t) {
        var r = L.formatFloat((e || "").replace(L.regex.nondigit, ""), t);
        return e && "number" == typeof r ? r : e ? A.trim(e && t.config.ignoreCase ? e.toLocaleLowerCase() : e) : e;
      },
      type: "numeric"
    }), L.regex.currencyReplace = /[+\-,. ]/g, L.regex.currencyTest = /^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/, L.addParser({
      id: "currency",
      is: function is(e) {
        return e = (e || "").replace(L.regex.currencyReplace, ""), L.regex.currencyTest.test(e);
      },
      format: function format(e, t) {
        var r = L.formatFloat((e || "").replace(L.regex.nondigit, ""), t);
        return e && "number" == typeof r ? r : e ? A.trim(e && t.config.ignoreCase ? e.toLocaleLowerCase() : e) : e;
      },
      type: "numeric"
    }), L.regex.urlProtocolTest = /^(https?|ftp|file):\/\//, L.regex.urlProtocolReplace = /(https?|ftp|file):\/\/(www\.)?/, L.addParser({
      id: "url",
      is: function is(e) {
        return L.regex.urlProtocolTest.test(e);
      },
      format: function format(e) {
        return e ? A.trim(e.replace(L.regex.urlProtocolReplace, "")) : e;
      },
      type: "text"
    }), L.regex.dash = /-/g, L.regex.isoDate = /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/, L.addParser({
      id: "isoDate",
      is: function is(e) {
        return L.regex.isoDate.test(e);
      },
      format: function format(e) {
        var t = e ? new Date(e.replace(L.regex.dash, "/")) : e;
        return t instanceof Date && isFinite(t) ? t.getTime() : e;
      },
      type: "numeric"
    }), L.regex.percent = /%/g, L.regex.percentTest = /(\d\s*?%|%\s*?\d)/, L.addParser({
      id: "percent",
      is: function is(e) {
        return L.regex.percentTest.test(e) && e.length < 15;
      },
      format: function format(e, t) {
        return e ? L.formatFloat(e.replace(L.regex.percent, ""), t) : e;
      },
      type: "numeric"
    }), L.addParser({
      id: "image",
      is: function is(e, t, r, o) {
        return 0 < o.find("img").length;
      },
      format: function format(e, t, r) {
        return A(r).find("img").attr(t.config.imgAttr || "alt") || e;
      },
      parsed: !0,
      type: "text"
    }), L.regex.dateReplace = /(\S)([AP]M)$/i, L.regex.usLongDateTest1 = /^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i, L.regex.usLongDateTest2 = /^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i, L.addParser({
      id: "usLongDate",
      is: function is(e) {
        return L.regex.usLongDateTest1.test(e) || L.regex.usLongDateTest2.test(e);
      },
      format: function format(e) {
        var t = e ? new Date(e.replace(L.regex.dateReplace, "$1 $2")) : e;
        return t instanceof Date && isFinite(t) ? t.getTime() : e;
      },
      type: "numeric"
    }), L.regex.shortDateTest = /(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/, L.regex.shortDateReplace = /[\-.,]/g, L.regex.shortDateXXY = /(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/, L.regex.shortDateYMD = /(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/, L.convertFormat = function (e, t) {
      e = (e || "").replace(L.regex.spaces, " ").replace(L.regex.shortDateReplace, "/"), "mmddyyyy" === t ? e = e.replace(L.regex.shortDateXXY, "$3/$1/$2") : "ddmmyyyy" === t ? e = e.replace(L.regex.shortDateXXY, "$3/$2/$1") : "yyyymmdd" === t && (e = e.replace(L.regex.shortDateYMD, "$1/$2/$3"));
      var r = new Date(e);
      return r instanceof Date && isFinite(r) ? r.getTime() : "";
    }, L.addParser({
      id: "shortDate",
      is: function is(e) {
        return e = (e || "").replace(L.regex.spaces, " ").replace(L.regex.shortDateReplace, "/"), L.regex.shortDateTest.test(e);
      },
      format: function format(e, t, r, o) {
        if (e) {
          var s = t.config,
              a = s.$headerIndexed[o],
              n = a.length && a.data("dateFormat") || L.getData(a, L.getColumnData(t, s.headers, o), "dateFormat") || s.dateFormat;
          return a.length && a.data("dateFormat", n), L.convertFormat(e, n) || e;
        }

        return e;
      },
      type: "numeric"
    }), L.regex.timeTest = /^(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)$|^((?:[01]\d|[2][0-4]):[0-5]\d)$/i, L.regex.timeMatch = /(0?[1-9]|1[0-2]):([0-5]\d)(\s[AP]M)|((?:[01]\d|[2][0-4]):[0-5]\d)/i, L.addParser({
      id: "time",
      is: function is(e) {
        return L.regex.timeTest.test(e);
      },
      format: function format(e) {
        var t = (e || "").match(L.regex.timeMatch),
            r = new Date(e),
            o = e && (null !== t ? t[0] : "00:00 AM"),
            s = o ? new Date("2000/01/01 " + o.replace(L.regex.dateReplace, "$1 $2")) : o;
        return s instanceof Date && isFinite(s) ? (r instanceof Date && isFinite(r) ? r.getTime() : 0) ? parseFloat(s.getTime() + "." + r.getTime()) : s.getTime() : e;
      },
      type: "numeric"
    }), L.addParser({
      id: "metadata",
      is: function is() {
        return !1;
      },
      format: function format(e, t, r) {
        var o = t.config,
            s = o.parserMetadataName ? o.parserMetadataName : "sortValue";
        return A(r).metadata()[s];
      },
      type: "numeric"
    }), L.addWidget({
      id: "zebra",
      priority: 90,
      format: function format(e, t, r) {
        var o,
            s,
            a,
            n,
            i,
            d,
            l,
            c = new RegExp(t.cssChildRow, "i"),
            g = t.$tbodies.add(A(t.namespace + "_extra_table").children("tbody:not(." + t.cssInfoBlock + ")"));

        for (i = 0; i < g.length; i++) {
          for (a = 0, l = (o = g.eq(i).children("tr:visible").not(t.selectorRemove)).length, d = 0; d < l; d++) {
            s = o.eq(d), c.test(s[0].className) || a++, n = a % 2 == 0, s.removeClass(r.zebra[n ? 1 : 0]).addClass(r.zebra[n ? 0 : 1]);
          }
        }
      },
      remove: function remove(e, t, r, o) {
        if (!o) {
          var s,
              a,
              n = t.$tbodies,
              i = (r.zebra || ["even", "odd"]).join(" ");

          for (s = 0; s < n.length; s++) {
            (a = L.processTbody(e, n.eq(s), !0)).children().removeClass(i), L.processTbody(e, a, !1);
          }
        }
      }
    });
  }(e), e.tablesorter;
});

/***/ }),

/***/ "./assets/js/dist/jquery.tablesorter.widgets.min.js":
/*!**********************************************************!*\
  !*** ./assets/js/dist/jquery.tablesorter.widgets.min.js ***!
  \**********************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function (jQuery) {
  /*! tablesorter (FORK) - updated 2020-03-03 (v2.31.3)*/
  !function (e) {
     true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
  }(function (e) {
    return function (b, y, _) {
      "use strict";

      var v = b.tablesorter || {};
      b.extend(!0, v.defaults, {
        fixedUrl: "",
        widgetOptions: {
          storage_fixedUrl: "",
          storage_group: "",
          storage_page: "",
          storage_storageType: "",
          storage_tableId: "",
          storage_useSessionStorage: ""
        }
      }), v.storage = function (e, t, r, i) {
        var a,
            l,
            s,
            n = !1,
            o = {},
            c = (e = b(e)[0]).config,
            d = c && c.widgetOptions,
            f = v.debug(c, "storage"),
            h = (i && i.storageType || d && d.storage_storageType).toString().charAt(0).toLowerCase(),
            u = h ? "" : i && i.useSessionStorage || d && d.storage_useSessionStorage,
            p = b(e),
            g = i && i.id || p.attr(i && i.group || d && d.storage_group || "data-table-group") || d && d.storage_tableId || e.id || b(".tablesorter").index(p),
            m = i && i.url || p.attr(i && i.page || d && d.storage_page || "data-table-page") || d && d.storage_fixedUrl || c && c.fixedUrl || y.location.pathname;
        if ("c" !== h && (h = "s" === h || u ? "sessionStorage" : "localStorage") in y) try {
          y[h].setItem("_tmptest", "temp"), n = !0, y[h].removeItem("_tmptest");
        } catch (e) {
          console.warn(h + " is not supported in this browser");
        }
        if (f && console.log("Storage >> Using", n ? h : "cookies"), b.parseJSON && (o = n ? b.parseJSON(y[h][t] || "null") || {} : (l = _.cookie.split(/[;\s|=]/), 0 !== (a = b.inArray(t, l) + 1) && b.parseJSON(l[a] || "null") || {})), void 0 === r || !y.JSON || !JSON.hasOwnProperty("stringify")) return o && o[m] ? o[m][g] : "";
        o[m] || (o[m] = {}), o[m][g] = r, n ? y[h][t] = JSON.stringify(o) : ((s = new Date()).setTime(s.getTime() + 31536e6), _.cookie = t + "=" + JSON.stringify(o).replace(/\"/g, '"') + "; expires=" + s.toGMTString() + "; path=/");
      };
    }(e, window, document), function (C) {
      "use strict";

      var z = C.tablesorter || {};
      z.themes = {
        bootstrap: {
          table: "table table-bordered table-striped",
          caption: "caption",
          header: "bootstrap-header",
          sortNone: "",
          sortAsc: "",
          sortDesc: "",
          active: "",
          hover: "",
          icons: "",
          iconSortNone: "bootstrap-icon-unsorted",
          iconSortAsc: "glyphicon glyphicon-chevron-up",
          iconSortDesc: "glyphicon glyphicon-chevron-down",
          filterRow: "",
          footerRow: "",
          footerCells: "",
          even: "",
          odd: ""
        },
        jui: {
          table: "ui-widget ui-widget-content ui-corner-all",
          caption: "ui-widget-content",
          header: "ui-widget-header ui-corner-all ui-state-default",
          sortNone: "",
          sortAsc: "",
          sortDesc: "",
          active: "ui-state-active",
          hover: "ui-state-hover",
          icons: "ui-icon",
          iconSortNone: "ui-icon-carat-2-n-s ui-icon-caret-2-n-s",
          iconSortAsc: "ui-icon-carat-1-n ui-icon-caret-1-n",
          iconSortDesc: "ui-icon-carat-1-s ui-icon-caret-1-s",
          filterRow: "",
          footerRow: "",
          footerCells: "",
          even: "ui-widget-content",
          odd: "ui-state-default"
        }
      }, C.extend(z.css, {
        wrapper: "tablesorter-wrapper"
      }), z.addWidget({
        id: "uitheme",
        priority: 10,
        format: function format(e, t, r) {
          var i,
              a,
              l,
              s,
              n,
              o,
              c,
              d,
              f,
              h,
              u,
              p,
              g,
              m = z.themes,
              b = t.$table.add(C(t.namespace + "_extra_table")),
              y = t.$headers.add(C(t.namespace + "_extra_headers")),
              _ = t.theme || "jui",
              v = m[_] || {},
              w = C.trim([v.sortNone, v.sortDesc, v.sortAsc, v.active].join(" ")),
              x = C.trim([v.iconSortNone, v.iconSortDesc, v.iconSortAsc].join(" ")),
              S = z.debug(t, "uitheme");

          for (S && (n = new Date()), b.hasClass("tablesorter-" + _) && t.theme === t.appliedTheme && r.uitheme_applied || (r.uitheme_applied = !0, h = m[t.appliedTheme] || {}, u = (g = !C.isEmptyObject(h)) ? [h.sortNone, h.sortDesc, h.sortAsc, h.active].join(" ") : "", p = g ? [h.iconSortNone, h.iconSortDesc, h.iconSortAsc].join(" ") : "", g && (r.zebra[0] = C.trim(" " + r.zebra[0].replace(" " + h.even, "")), r.zebra[1] = C.trim(" " + r.zebra[1].replace(" " + h.odd, "")), t.$tbodies.children().removeClass([h.even, h.odd].join(" "))), v.even && (r.zebra[0] += " " + v.even), v.odd && (r.zebra[1] += " " + v.odd), b.children("caption").removeClass(h.caption || "").addClass(v.caption), d = b.removeClass((t.appliedTheme ? "tablesorter-" + (t.appliedTheme || "") : "") + " " + (h.table || "")).addClass("tablesorter-" + _ + " " + (v.table || "")).children("tfoot"), t.appliedTheme = t.theme, d.length && d.children("tr").removeClass(h.footerRow || "").addClass(v.footerRow).children("th, td").removeClass(h.footerCells || "").addClass(v.footerCells), y.removeClass((g ? [h.header, h.hover, u].join(" ") : "") || "").addClass(v.header).not(".sorter-false").unbind("mouseenter.tsuitheme mouseleave.tsuitheme").bind("mouseenter.tsuitheme mouseleave.tsuitheme", function (e) {
            C(this)["mouseenter" === e.type ? "addClass" : "removeClass"](v.hover || "");
          }), y.each(function () {
            var e = C(this);
            e.find("." + z.css.wrapper).length || e.wrapInner('<div class="' + z.css.wrapper + '" style="position:relative;height:100%;width:100%"></div>');
          }), t.cssIcon && y.find("." + z.css.icon).removeClass(g ? [h.icons, p].join(" ") : "").addClass(v.icons || ""), z.hasWidget(t.table, "filter") && (a = function a() {
            b.children("thead").children("." + z.css.filterRow).removeClass(g && h.filterRow || "").addClass(v.filterRow || "");
          }, r.filter_initialized ? a() : b.one("filterInit", function () {
            a();
          }))), i = 0; i < t.columns; i++) {
            o = t.$headers.add(C(t.namespace + "_extra_headers")).not(".sorter-false").filter('[data-column="' + i + '"]'), c = z.css.icon ? o.find("." + z.css.icon) : C(), (f = y.not(".sorter-false").filter('[data-column="' + i + '"]:last')).length && (o.removeClass(w), c.removeClass(x), f[0].sortDisabled ? c.removeClass(v.icons || "") : (l = v.sortNone, s = v.iconSortNone, f.hasClass(z.css.sortAsc) ? (l = [v.sortAsc, v.active].join(" "), s = v.iconSortAsc) : f.hasClass(z.css.sortDesc) && (l = [v.sortDesc, v.active].join(" "), s = v.iconSortDesc), o.addClass(l), c.addClass(s || "")));
          }

          S && console.log("uitheme >> Applied " + _ + " theme" + z.benchmark(n));
        },
        remove: function remove(e, t, r, i) {
          if (r.uitheme_applied) {
            var a = t.$table,
                l = t.appliedTheme || "jui",
                s = z.themes[l] || z.themes.jui,
                n = a.children("thead").children(),
                o = s.sortNone + " " + s.sortDesc + " " + s.sortAsc,
                c = s.iconSortNone + " " + s.iconSortDesc + " " + s.iconSortAsc;
            a.removeClass("tablesorter-" + l + " " + s.table), r.uitheme_applied = !1, i || (a.find(z.css.header).removeClass(s.header), n.unbind("mouseenter.tsuitheme mouseleave.tsuitheme").removeClass(s.hover + " " + o + " " + s.active).filter("." + z.css.filterRow).removeClass(s.filterRow), n.find("." + z.css.icon).removeClass(s.icons + " " + c));
          }
        }
      });
    }(e), function (b) {
      "use strict";

      var y = b.tablesorter || {};
      y.addWidget({
        id: "columns",
        priority: 65,
        options: {
          columns: ["primary", "secondary", "tertiary"]
        },
        format: function format(e, t, r) {
          var i,
              a,
              l,
              s,
              n,
              o,
              c,
              d,
              f = t.$table,
              h = t.$tbodies,
              u = t.sortList,
              p = u.length,
              g = r && r.columns || ["primary", "secondary", "tertiary"],
              m = g.length - 1;

          for (c = g.join(" "), a = 0; a < h.length; a++) {
            (l = (i = y.processTbody(e, h.eq(a), !0)).children("tr")).each(function () {
              if (n = b(this), "none" !== this.style.display && (o = n.children().removeClass(c), u && u[0] && (o.eq(u[0][0]).addClass(g[0]), 1 < p))) for (d = 1; d < p; d++) {
                o.eq(u[d][0]).addClass(g[d] || g[m]);
              }
            }), y.processTbody(e, i, !1);
          }

          if (s = !1 !== r.columns_thead ? ["thead tr"] : [], !1 !== r.columns_tfoot && s.push("tfoot tr"), s.length && (l = f.find(s.join(",")).children().removeClass(c), p)) for (d = 0; d < p; d++) {
            l.filter('[data-column="' + u[d][0] + '"]').addClass(g[d] || g[m]);
          }
        },
        remove: function remove(e, t, r) {
          var i,
              a,
              l = t.$tbodies,
              s = (r.columns || ["primary", "secondary", "tertiary"]).join(" ");

          for (t.$headers.removeClass(s), t.$table.children("tfoot").children("tr").children("th, td").removeClass(s), i = 0; i < l.length; i++) {
            (a = y.processTbody(e, l.eq(i), !0)).children("tr").each(function () {
              b(this).children().removeClass(s);
            }), y.processTbody(e, a, !1);
          }
        }
      });
    }(e), function (A) {
      "use strict";

      var I,
          O,
          E = A.tablesorter || {},
          b = E.css,
          o = E.keyCodes;
      A.extend(b, {
        filterRow: "tablesorter-filter-row",
        filter: "tablesorter-filter",
        filterDisabled: "disabled",
        filterRowHide: "hideme"
      }), A.extend(o, {
        backSpace: 8,
        escape: 27,
        space: 32,
        left: 37,
        down: 40
      }), E.addWidget({
        id: "filter",
        priority: 50,
        options: {
          filter_cellFilter: "",
          filter_childRows: !1,
          filter_childByColumn: !1,
          filter_childWithSibs: !0,
          filter_columnAnyMatch: !0,
          filter_columnFilters: !0,
          filter_cssFilter: "",
          filter_defaultAttrib: "data-value",
          filter_defaultFilter: {},
          filter_excludeFilter: {},
          filter_external: "",
          filter_filteredRow: "filtered",
          filter_filterLabel: 'Filter "{{label}}" column by...',
          filter_formatter: null,
          filter_functions: null,
          filter_hideEmpty: !0,
          filter_hideFilters: !1,
          filter_ignoreCase: !0,
          filter_liveSearch: !0,
          filter_matchType: {
            input: "exact",
            select: "exact"
          },
          filter_onlyAvail: "filter-onlyAvail",
          filter_placeholder: {
            search: "",
            select: ""
          },
          filter_reset: null,
          filter_resetOnEsc: !0,
          filter_saveFilters: !1,
          filter_searchDelay: 300,
          filter_searchFiltered: !0,
          filter_selectSource: null,
          filter_selectSourceSeparator: "|",
          filter_serversideFiltering: !1,
          filter_startsWith: !1,
          filter_useParsedData: !1
        },
        format: function format(e, t, r) {
          t.$table.hasClass("hasFilters") || I.init(e, t, r);
        },
        remove: function remove(e, t, r, i) {
          var a,
              l,
              s = t.$table,
              n = t.$tbodies,
              o = "addRows updateCell update updateRows updateComplete appendCache filterReset filterAndSortReset filterFomatterUpdate filterEnd search stickyHeadersInit ".split(" ").join(t.namespace + "filter ");

          if (s.removeClass("hasFilters").unbind(o.replace(E.regex.spaces, " ")).find("." + b.filterRow).remove(), r.filter_initialized = !1, !i) {
            for (a = 0; a < n.length; a++) {
              (l = E.processTbody(e, n.eq(a), !0)).children().removeClass(r.filter_filteredRow).show(), E.processTbody(e, l, !1);
            }

            r.filter_reset && A(document).undelegate(r.filter_reset, "click" + t.namespace + "filter");
          }
        }
      }), O = (I = E.filter = {
        regex: {
          regex: /^\/((?:\\\/|[^\/])+)\/([migyu]{0,5})?$/,
          child: /tablesorter-childRow/,
          filtered: /filtered/,
          type: /undefined|number/,
          exact: /(^[\"\'=]+)|([\"\'=]+$)/g,
          operators: /[<>=]/g,
          query: "(q|query)",
          wild01: /\?/g,
          wild0More: /\*/g,
          quote: /\"/g,
          isNeg1: /(>=?\s*-\d)/,
          isNeg2: /(<=?\s*\d)/
        },
        types: {
          or: function or(e, t, r) {
            if (!O.orTest.test(t.iFilter) && !O.orSplit.test(t.filter) || O.regex.test(t.filter)) return null;
            var i,
                a,
                l,
                s = A.extend({}, t),
                n = t.filter.split(O.orSplit),
                o = t.iFilter.split(O.orSplit),
                c = n.length;

            for (i = 0; i < c; i++) {
              s.nestedFilters = !0, s.filter = "" + (I.parseFilter(e, n[i], t) || ""), s.iFilter = "" + (I.parseFilter(e, o[i], t) || ""), l = "(" + (I.parseFilter(e, s.filter, t) || "") + ")";

              try {
                if (a = new RegExp(t.isMatch ? l : "^" + l + "$", e.widgetOptions.filter_ignoreCase ? "i" : "").test(s.exact) || I.processTypes(e, s, r)) return a;
              } catch (e) {
                return null;
              }
            }

            return a || !1;
          },
          and: function and(e, t, r) {
            if (O.andTest.test(t.filter)) {
              var i,
                  a,
                  l,
                  s,
                  n = A.extend({}, t),
                  o = t.filter.split(O.andSplit),
                  c = t.iFilter.split(O.andSplit),
                  d = o.length;

              for (i = 0; i < d; i++) {
                n.nestedFilters = !0, n.filter = "" + (I.parseFilter(e, o[i], t) || ""), n.iFilter = "" + (I.parseFilter(e, c[i], t) || ""), s = ("(" + (I.parseFilter(e, n.filter, t) || "") + ")").replace(O.wild01, "\\S{1}").replace(O.wild0More, "\\S*");

                try {
                  l = new RegExp(t.isMatch ? s : "^" + s + "$", e.widgetOptions.filter_ignoreCase ? "i" : "").test(n.exact) || I.processTypes(e, n, r), a = 0 === i ? l : a && l;
                } catch (e) {
                  return null;
                }
              }

              return a || !1;
            }

            return null;
          },
          regex: function regex(e, t) {
            if (O.regex.test(t.filter)) {
              var r,
                  i = t.filter_regexCache[t.index] || O.regex.exec(t.filter),
                  a = i instanceof RegExp;

              try {
                a || (t.filter_regexCache[t.index] = i = new RegExp(i[1], i[2])), r = i.test(t.exact);
              } catch (e) {
                r = !1;
              }

              return r;
            }

            return null;
          },
          operators: function operators(e, t) {
            if (O.operTest.test(t.iFilter) && "" !== t.iExact) {
              var r,
                  i,
                  a,
                  l = e.table,
                  s = t.parsed[t.index],
                  n = E.formatFloat(t.iFilter.replace(O.operators, ""), l),
                  o = e.parsers[t.index] || {},
                  c = n;
              return !s && "numeric" !== o.type || (a = A.trim("" + t.iFilter.replace(O.operators, "")), n = "number" != typeof (i = I.parseFilter(e, a, t, !0)) || "" === i || isNaN(i) ? n : i), r = !s && "numeric" !== o.type || isNaN(n) || void 0 === t.cache ? (a = isNaN(t.iExact) ? t.iExact.replace(E.regex.nondigit, "") : t.iExact, E.formatFloat(a, l)) : t.cache, O.gtTest.test(t.iFilter) ? i = O.gteTest.test(t.iFilter) ? n <= r : n < r : O.ltTest.test(t.iFilter) && (i = O.lteTest.test(t.iFilter) ? r <= n : r < n), i || "" !== c || (i = !0), i;
            }

            return null;
          },
          notMatch: function notMatch(e, t) {
            if (O.notTest.test(t.iFilter)) {
              var r,
                  i = t.iFilter.replace("!", ""),
                  a = I.parseFilter(e, i, t) || "";
              return O.exact.test(a) ? "" === (a = a.replace(O.exact, "")) || A.trim(a) !== t.iExact : (r = t.iExact.search(A.trim(a)), "" === a || (t.anyMatch ? r < 0 : !(e.widgetOptions.filter_startsWith ? 0 === r : 0 <= r)));
            }

            return null;
          },
          exact: function exact(e, t) {
            if (O.exact.test(t.iFilter)) {
              var r = t.iFilter.replace(O.exact, ""),
                  i = I.parseFilter(e, r, t) || "";
              return t.anyMatch ? 0 <= A.inArray(i, t.rowArray) : i == t.iExact;
            }

            return null;
          },
          range: function range(e, t) {
            if (O.toTest.test(t.iFilter)) {
              var r,
                  i,
                  a,
                  l,
                  s = e.table,
                  n = t.index,
                  o = t.parsed[n],
                  c = t.iFilter.split(O.toSplit);
              return i = c[0].replace(E.regex.nondigit, "") || "", a = E.formatFloat(I.parseFilter(e, i, t), s), i = c[1].replace(E.regex.nondigit, "") || "", l = E.formatFloat(I.parseFilter(e, i, t), s), !o && "numeric" !== e.parsers[n].type || (a = "" === (r = e.parsers[n].format("" + c[0], s, e.$headers.eq(n), n)) || isNaN(r) ? a : r, l = "" === (r = e.parsers[n].format("" + c[1], s, e.$headers.eq(n), n)) || isNaN(r) ? l : r), r = !o && "numeric" !== e.parsers[n].type || isNaN(a) || isNaN(l) ? (i = isNaN(t.iExact) ? t.iExact.replace(E.regex.nondigit, "") : t.iExact, E.formatFloat(i, s)) : t.cache, l < a && (i = a, a = l, l = i), a <= r && r <= l || "" === a || "" === l;
            }

            return null;
          },
          wild: function wild(e, t) {
            if (O.wildOrTest.test(t.iFilter)) {
              var r = "" + (I.parseFilter(e, t.iFilter, t) || "");
              !O.wildTest.test(r) && t.nestedFilters && (r = t.isMatch ? r : "^(" + r + ")$");

              try {
                return new RegExp(r.replace(O.wild01, "\\S{1}").replace(O.wild0More, "\\S*"), e.widgetOptions.filter_ignoreCase ? "i" : "").test(t.exact);
              } catch (e) {
                return null;
              }
            }

            return null;
          },
          fuzzy: function fuzzy(e, t) {
            if (O.fuzzyTest.test(t.iFilter)) {
              var r,
                  i = 0,
                  a = t.iExact.length,
                  l = t.iFilter.slice(1),
                  s = I.parseFilter(e, l, t) || "";

              for (r = 0; r < a; r++) {
                t.iExact[r] === s[i] && (i += 1);
              }

              return i === s.length;
            }

            return null;
          }
        },
        init: function init(r) {
          E.language = A.extend(!0, {}, {
            to: "to",
            or: "or",
            and: "and"
          }, E.language);

          function e(e, t, r) {
            return "" === (t = t.trim()) ? "" : (e || "") + t + (r || "");
          }

          var t,
              i,
              a,
              l,
              s,
              n,
              o,
              c,
              d = r.config,
              f = d.widgetOptions;
          if (d.$table.addClass("hasFilters"), d.lastSearch = [], f.filter_searchTimer = null, f.filter_initTimer = null, f.filter_formatterCount = 0, f.filter_formatterInit = [], f.filter_anyColumnSelector = '[data-column="all"],[data-column="any"]', f.filter_multipleColumnSelector = '[data-column*="-"],[data-column*=","]', n = "\\{" + O.query + "\\}", A.extend(O, {
            child: new RegExp(d.cssChildRow),
            filtered: new RegExp(f.filter_filteredRow),
            alreadyFiltered: new RegExp("(\\s+(-" + e("|", E.language.or) + e("|", E.language.to) + ")\\s+)", "i"),
            toTest: new RegExp("\\s+(-" + e("|", E.language.to) + ")\\s+", "i"),
            toSplit: new RegExp("(?:\\s+(?:-" + e("|", E.language.to) + ")\\s+)", "gi"),
            andTest: new RegExp("\\s+(" + e("", E.language.and, "|") + "&&)\\s+", "i"),
            andSplit: new RegExp("(?:\\s+(?:" + e("", E.language.and, "|") + "&&)\\s+)", "gi"),
            orTest: new RegExp("(\\|" + e("|\\s+", E.language.or, "\\s+") + ")", "i"),
            orSplit: new RegExp("(?:\\|" + e("|\\s+(?:", E.language.or, ")\\s+") + ")", "gi"),
            iQuery: new RegExp(n, "i"),
            igQuery: new RegExp(n, "ig"),
            operTest: /^[<>]=?/,
            gtTest: />/,
            gteTest: />=/,
            ltTest: /</,
            lteTest: /<=/,
            notTest: /^\!/,
            wildOrTest: /[\?\*\|]/,
            wildTest: /\?\*/,
            fuzzyTest: /^~/,
            exactTest: /[=\"\|!]/
          }), n = d.$headers.filter(".filter-false, .parser-false").length, !1 !== f.filter_columnFilters && n !== d.$headers.length && I.buildRow(r, d, f), a = "addRows updateCell update updateRows updateComplete appendCache filterReset " + "filterAndSortReset filterResetSaved filterEnd search ".split(" ").join(d.namespace + "filter "), d.$table.bind(a, function (e, t) {
            return n = f.filter_hideEmpty && A.isEmptyObject(d.cache) && !(d.delayInit && "appendCache" === e.type), d.$table.find("." + b.filterRow).toggleClass(f.filter_filteredRow, n), /(search|filter)/.test(e.type) || (e.stopPropagation(), I.buildDefault(r, !0)), "filterReset" === e.type || "filterAndSortReset" === e.type ? (d.$table.find("." + b.filter).add(f.filter_$externalFilters).val(""), "filterAndSortReset" === e.type ? E.sortReset(this.config, function () {
              I.searching(r, []);
            }) : I.searching(r, [])) : "filterResetSaved" === e.type ? E.storage(r, "tablesorter-filters", "") : "filterEnd" === e.type ? I.buildDefault(r, !0) : (t = "search" === e.type ? t : "updateComplete" === e.type ? d.$table.data("lastSearch") : "", /(update|add)/.test(e.type) && "updateComplete" !== e.type && (d.lastCombinedFilter = null, d.lastSearch = [], setTimeout(function () {
              d.$table.triggerHandler("filterFomatterUpdate");
            }, 100)), I.searching(r, t, !0)), !1;
          }), f.filter_reset && (f.filter_reset instanceof A ? f.filter_reset.click(function () {
            d.$table.triggerHandler("filterReset");
          }) : A(f.filter_reset).length && A(document).undelegate(f.filter_reset, "click" + d.namespace + "filter").delegate(f.filter_reset, "click" + d.namespace + "filter", function () {
            d.$table.triggerHandler("filterReset");
          })), f.filter_functions) for (s = 0; s < d.columns; s++) {
            if (o = E.getColumnData(r, f.filter_functions, s)) if (c = !((l = d.$headerIndexed[s].removeClass("filter-select")).hasClass("filter-false") || l.hasClass("parser-false")), !(t = "") === o && c) I.buildSelect(r, s);else if ("object" == _typeof(o) && c) {
              for (i in o) {
                "string" == typeof i && (t += "" === t ? '<option value="">' + (l.data("placeholder") || l.attr("data-placeholder") || f.filter_placeholder.select || "") + "</option>" : "", 0 <= (a = n = i).indexOf(f.filter_selectSourceSeparator) && (a = (n = i.split(f.filter_selectSourceSeparator))[1], n = n[0]), t += "<option " + (a === n ? "" : 'data-function-name="' + i + '" ') + 'value="' + n + '">' + a + "</option>");
              }

              d.$table.find("thead").find("select." + b.filter + '[data-column="' + s + '"]').append(t), (o = "function" == typeof (a = f.filter_selectSource) || E.getColumnData(r, a, s)) && I.buildSelect(d.table, s, "", !0, l.hasClass(f.filter_onlyAvail));
            }
          }
          I.buildDefault(r, !0), I.bindSearch(r, d.$table.find("." + b.filter), !0), f.filter_external && I.bindSearch(r, f.filter_external), f.filter_hideFilters && I.hideFilters(d), d.showProcessing && (a = "filterStart filterEnd ".split(" ").join(d.namespace + "filter-sp "), d.$table.unbind(a.replace(E.regex.spaces, " ")).bind(a, function (e, t) {
            l = t ? d.$table.find("." + b.header).filter("[data-column]").filter(function () {
              return "" !== t[A(this).data("column")];
            }) : "", E.isProcessing(r, "filterStart" === e.type, t ? l : "");
          })), d.filteredRows = d.totalRows, a = "tablesorter-initialized pagerBeforeInitialized ".split(" ").join(d.namespace + "filter "), d.$table.unbind(a.replace(E.regex.spaces, " ")).bind(a, function () {
            I.completeInit(this);
          }), d.pager && d.pager.initialized && !f.filter_initialized ? (d.$table.triggerHandler("filterFomatterUpdate"), setTimeout(function () {
            I.filterInitComplete(d);
          }, 100)) : f.filter_initialized || I.completeInit(r);
        },
        completeInit: function completeInit(e) {
          var t = e.config,
              r = t.widgetOptions,
              i = I.setDefaults(e, t, r) || [];
          i.length && (t.delayInit && "" === i.join("") || E.setFilters(e, i, !0)), t.$table.triggerHandler("filterFomatterUpdate"), setTimeout(function () {
            r.filter_initialized || I.filterInitComplete(t);
          }, 100);
        },
        formatterUpdated: function formatterUpdated(e, t) {
          var r = e && e.closest("table"),
              i = r.length && r[0].config,
              a = i && i.widgetOptions;
          a && !a.filter_initialized && (a.filter_formatterInit[t] = 1);
        },
        filterInitComplete: function filterInitComplete(e) {
          function t() {
            a.filter_initialized = !0, e.lastSearch = e.$table.data("lastSearch"), e.$table.triggerHandler("filterInit", e), I.findRows(e.table, e.lastSearch || []), E.debug(e, "filter") && console.log("Filter >> Widget initialized");
          }

          var r,
              i,
              a = e.widgetOptions,
              l = 0;
          if (A.isEmptyObject(a.filter_formatter)) t();else {
            for (i = a.filter_formatterInit.length, r = 0; r < i; r++) {
              1 === a.filter_formatterInit[r] && l++;
            }

            clearTimeout(a.filter_initTimer), a.filter_initialized || l !== a.filter_formatterCount ? a.filter_initialized || (a.filter_initTimer = setTimeout(function () {
              t();
            }, 500)) : t();
          }
        },
        processFilters: function processFilters(e, t) {
          var r,
              i = [],
              a = t ? encodeURIComponent : decodeURIComponent,
              l = e.length;

          for (r = 0; r < l; r++) {
            e[r] && (i[r] = a(e[r]));
          }

          return i;
        },
        setDefaults: function setDefaults(e, t, r) {
          var i,
              a,
              l,
              s,
              n,
              o = E.getFilters(e) || [];
          if (r.filter_saveFilters && E.storage && (a = E.storage(e, "tablesorter-filters") || [], (i = A.isArray(a)) && "" === a.join("") || !i || (o = I.processFilters(a))), "" === o.join("")) for (n = t.$headers.add(r.filter_$externalFilters).filter("[" + r.filter_defaultAttrib + "]"), l = 0; l <= t.columns; l++) {
            s = l === t.columns ? "all" : l, o[l] = n.filter('[data-column="' + s + '"]').attr(r.filter_defaultAttrib) || o[l] || "";
          }
          return t.$table.data("lastSearch", o), o;
        },
        parseFilter: function parseFilter(e, t, r, i) {
          return i || r.parsed[r.index] ? e.parsers[r.index].format(t, e.table, [], r.index) : t;
        },
        buildRow: function buildRow(e, t, r) {
          var i,
              a,
              l,
              s,
              n,
              o,
              c,
              d,
              f,
              h = r.filter_cellFilter,
              u = t.columns,
              p = A.isArray(h),
              g = '<tr role="search" class="' + b.filterRow + " " + t.cssIgnoreRow + '">';

          for (l = 0; l < u; l++) {
            t.$headerIndexed[l].length && (g += 1 < (f = t.$headerIndexed[l] && t.$headerIndexed[l][0].colSpan || 0) ? '<td data-column="' + l + "-" + (l + f - 1) + '" colspan="' + f + '"' : '<td data-column="' + l + '"', g += p ? h[l] ? ' class="' + h[l] + '"' : "" : "" !== h ? ' class="' + h + '"' : "", g += "></td>");
          }

          for (t.$filters = A(g += "</tr>").appendTo(t.$table.children("thead").eq(0)).children("td"), l = 0; l < u; l++) {
            o = !1, (s = t.$headerIndexed[l]) && s.length && (i = I.getColumnElm(t, t.$filters, l), d = E.getColumnData(e, r.filter_functions, l), n = r.filter_functions && d && "function" != typeof d || s.hasClass("filter-select"), a = E.getColumnData(e, t.headers, l), o = "false" === E.getData(s[0], a, "filter") || "false" === E.getData(s[0], a, "parser"), n ? g = A("<select>").appendTo(i) : ((d = E.getColumnData(e, r.filter_formatter, l)) ? (r.filter_formatterCount++, (g = d(i, l)) && 0 === g.length && (g = i.children("input")), g && (0 === g.parent().length || g.parent().length && g.parent()[0] !== i[0]) && i.append(g)) : g = A('<input type="search">').appendTo(i), g && (f = s.data("placeholder") || s.attr("data-placeholder") || r.filter_placeholder.search || "", g.attr("placeholder", f))), g && (c = (A.isArray(r.filter_cssFilter) ? void 0 !== r.filter_cssFilter[l] && r.filter_cssFilter[l] || "" : r.filter_cssFilter) || "", g.addClass(b.filter + " " + c), f = (f = (c = r.filter_filterLabel).match(/{{([^}]+?)}}/g)) || ["{{label}}"], A.each(f, function (e, t) {
              var r = new RegExp(t, "g"),
                  i = s.attr("data-" + t.replace(/{{|}}/g, "")),
                  a = void 0 === i ? s.text() : i;
              c = c.replace(r, A.trim(a));
            }), g.attr({
              "data-column": i.attr("data-column"),
              "aria-label": c
            }), o && (g.attr("placeholder", "").addClass(b.filterDisabled)[0].disabled = !0)));
          }
        },
        bindSearch: function bindSearch(a, e, t) {
          if (a = A(a)[0], (e = A(e)).length) {
            var r,
                l = a.config,
                s = l.widgetOptions,
                i = l.namespace + "filter",
                n = s.filter_$externalFilters;
            !0 !== t && (r = s.filter_anyColumnSelector + "," + s.filter_multipleColumnSelector, s.filter_$anyMatch = e.filter(r), n && n.length ? s.filter_$externalFilters = s.filter_$externalFilters.add(e) : s.filter_$externalFilters = e, E.setFilters(a, l.$table.data("lastSearch") || [], !1 === t)), r = "keypress keyup keydown search change input ".split(" ").join(i + " "), e.attr("data-lastSearchTime", new Date().getTime()).unbind(r.replace(E.regex.spaces, " ")).bind("keydown" + i, function (e) {
              if (e.which === o.escape && !a.config.widgetOptions.filter_resetOnEsc) return !1;
            }).bind("keyup" + i, function (e) {
              s = a.config.widgetOptions;
              var t = parseInt(A(this).attr("data-column"), 10),
                  r = "boolean" == typeof s.filter_liveSearch ? s.filter_liveSearch : E.getColumnData(a, s.filter_liveSearch, t);
              if (void 0 === r && (r = s.filter_liveSearch.fallback || !1), A(this).attr("data-lastSearchTime", new Date().getTime()), e.which === o.escape) this.value = s.filter_resetOnEsc ? "" : l.lastSearch[t];else {
                if ("" !== this.value && ("number" == typeof r && this.value.length < r || e.which !== o.enter && e.which !== o.backSpace && (e.which < o.space || e.which >= o.left && e.which <= o.down))) return;
                if (!1 === r && "" !== this.value && e.which !== o.enter) return;
              }
              I.searching(a, !0, !0, t);
            }).bind("search change keypress input blur ".split(" ").join(i + " "), function (e) {
              var t = parseInt(A(this).attr("data-column"), 10),
                  r = e.type,
                  i = "boolean" == typeof s.filter_liveSearch ? s.filter_liveSearch : E.getColumnData(a, s.filter_liveSearch, t);
              !a.config.widgetOptions.filter_initialized || e.which !== o.enter && "search" !== r && "blur" !== r && ("change" !== r && "input" !== r || !0 !== i && (!0 === i || "INPUT" === e.target.nodeName) || this.value === l.lastSearch[t]) || (e.preventDefault(), A(this).attr("data-lastSearchTime", new Date().getTime()), I.searching(a, "keypress" !== r || e.which === o.enter, !0, t));
            });
          }
        },
        searching: function searching(e, t, r, i) {
          var a,
              l = e.config.widgetOptions;
          void 0 === i ? a = !1 : void 0 === (a = "boolean" == typeof l.filter_liveSearch ? l.filter_liveSearch : E.getColumnData(e, l.filter_liveSearch, i)) && (a = l.filter_liveSearch.fallback || !1), clearTimeout(l.filter_searchTimer), void 0 === t || !0 === t ? l.filter_searchTimer = setTimeout(function () {
            I.checkFilters(e, t, r);
          }, a ? l.filter_searchDelay : 10) : I.checkFilters(e, t, r);
        },
        equalFilters: function equalFilters(e, t, r) {
          var i,
              a = [],
              l = [],
              s = e.columns + 1;

          for (t = A.isArray(t) ? t : [], r = A.isArray(r) ? r : [], i = 0; i < s; i++) {
            a[i] = t[i] || "", l[i] = r[i] || "";
          }

          return a.join(",") === l.join(",");
        },
        checkFilters: function checkFilters(e, t, r) {
          var i = e.config,
              a = i.widgetOptions,
              l = A.isArray(t),
              s = l ? t : E.getFilters(e, !0),
              n = s || [];
          if (A.isEmptyObject(i.cache)) i.delayInit && (!i.pager || i.pager && i.pager.initialized) && E.updateCache(i, function () {
            I.checkFilters(e, !1, r);
          });else {
            if (l && (E.setFilters(e, s, !1, !0 !== r), a.filter_initialized || (i.lastSearch = [], i.lastCombinedFilter = "")), a.filter_hideFilters && i.$table.find("." + b.filterRow).triggerHandler(I.hideFiltersCheck(i) ? "mouseleave" : "mouseenter"), I.equalFilters(i, i.lastSearch, n)) {
              if (!1 !== t) return;
              i.lastCombinedFilter = "", i.lastSearch = [];
            }

            if (s = s || [], s = Array.prototype.map ? s.map(String) : s.join("�").split("�"), a.filter_initialized && i.$table.triggerHandler("filterStart", [s]), !i.showProcessing) return I.findRows(e, s, n), !1;
            setTimeout(function () {
              return I.findRows(e, s, n), !1;
            }, 30);
          }
        },
        hideFiltersCheck: function hideFiltersCheck(e) {
          if ("function" == typeof e.widgetOptions.filter_hideFilters) {
            var t = e.widgetOptions.filter_hideFilters(e);
            if ("boolean" == typeof t) return t;
          }

          return "" === E.getFilters(e.$table).join("");
        },
        hideFilters: function hideFilters(i, e) {
          var a;
          (e || i.$table).find("." + b.filterRow).addClass(b.filterRowHide).bind("mouseenter mouseleave", function (e) {
            var t = e,
                r = A(this);
            clearTimeout(a), a = setTimeout(function () {
              /enter|over/.test(t.type) ? r.removeClass(b.filterRowHide) : A(document.activeElement).closest("tr")[0] !== r[0] && r.toggleClass(b.filterRowHide, I.hideFiltersCheck(i));
            }, 200);
          }).find("input, select").bind("focus blur", function (e) {
            var t = e,
                r = A(this).closest("tr");
            clearTimeout(a), a = setTimeout(function () {
              clearTimeout(a), r.toggleClass(b.filterRowHide, I.hideFiltersCheck(i) && "focus" !== t.type);
            }, 200);
          });
        },
        defaultFilter: function defaultFilter(e, t) {
          if ("" === e) return e;
          var r = O.iQuery,
              i = t.match(O.igQuery).length,
              a = 1 < i ? A.trim(e).split(/\s/) : [A.trim(e)],
              l = a.length - 1,
              s = 0,
              n = t;

          for (l < 1 && 1 < i && (a[1] = a[0]); r.test(n);) {
            n = n.replace(r, a[s++] || ""), r.test(n) && s < l && "" !== (a[s] || "") && (n = t.replace(r, n));
          }

          return n;
        },
        getLatestSearch: function getLatestSearch(e) {
          return e ? e.sort(function (e, t) {
            return A(t).attr("data-lastSearchTime") - A(e).attr("data-lastSearchTime");
          }) : e || A();
        },
        findRange: function findRange(e, t, r) {
          var i,
              a,
              l,
              s,
              n,
              o,
              c,
              d,
              f,
              h = [];
          if (/^[0-9]+$/.test(t)) return [parseInt(t, 10)];
          if (!r && /-/.test(t)) for (f = (a = t.match(/(\d+)\s*-\s*(\d+)/g)) ? a.length : 0, d = 0; d < f; d++) {
            for (l = a[d].split(/\s*-\s*/), s = parseInt(l[0], 10) || 0, (n = parseInt(l[1], 10) || e.columns - 1) < s && (i = s, s = n, n = i), n >= e.columns && (n = e.columns - 1); s <= n; s++) {
              h[h.length] = s;
            }

            t = t.replace(a[d], "");
          }
          if (!r && /,/.test(t)) for (f = (o = t.split(/\s*,\s*/)).length, c = 0; c < f; c++) {
            "" !== o[c] && (d = parseInt(o[c], 10)) < e.columns && (h[h.length] = d);
          }
          if (!h.length) for (d = 0; d < e.columns; d++) {
            h[h.length] = d;
          }
          return h;
        },
        getColumnElm: function getColumnElm(t, e, r) {
          return e.filter(function () {
            var e = I.findRange(t, A(this).attr("data-column"));
            return -1 < A.inArray(r, e);
          });
        },
        multipleColumns: function multipleColumns(e, t) {
          var r = e.widgetOptions,
              i = r.filter_initialized || !t.filter(r.filter_anyColumnSelector).length,
              a = A.trim(I.getLatestSearch(t).attr("data-column") || "");
          return I.findRange(e, a, !i);
        },
        processTypes: function processTypes(e, t, r) {
          var i,
              a = null,
              l = null;

          for (i in I.types) {
            A.inArray(i, r.excludeMatch) < 0 && null === l && null !== (l = I.types[i](e, t, r)) && (t.matchedOn = i, a = l);
          }

          return a;
        },
        matchType: function matchType(e, t) {
          var r = e.widgetOptions,
              i = e.$headerIndexed[t];
          return !i.hasClass("filter-exact") && (!!i.hasClass("filter-match") || (r.filter_columnFilters ? i = e.$filters.find("." + b.filter).add(r.filter_$externalFilters).filter('[data-column="' + t + '"]') : r.filter_$externalFilters && (i = r.filter_$externalFilters.filter('[data-column="' + t + '"]')), !!i.length && "match" === e.widgetOptions.filter_matchType[(i[0].nodeName || "").toLowerCase()]));
        },
        processRow: function processRow(t, r, e) {
          var i,
              a,
              l,
              s,
              n,
              o = t.widgetOptions,
              c = !0,
              d = o.filter_$anyMatch && o.filter_$anyMatch.length,
              f = o.filter_$anyMatch && o.filter_$anyMatch.length ? I.multipleColumns(t, o.filter_$anyMatch) : [];

          if (r.$cells = r.$row.children(), r.matchedOn = null, r.anyMatchFlag && 1 < f.length || r.anyMatchFilter && !d) {
            if (r.anyMatch = !0, r.isMatch = !0, r.rowArray = r.$cells.map(function (e) {
              if (-1 < A.inArray(e, f) || r.anyMatchFilter && !d) return r.parsed[e] ? n = r.cacheArray[e] : (n = r.rawArray[e], n = A.trim(o.filter_ignoreCase ? n.toLowerCase() : n), t.sortLocaleCompare && (n = E.replaceAccents(n))), n;
            }).get(), r.filter = r.anyMatchFilter, r.iFilter = r.iAnyMatchFilter, r.exact = r.rowArray.join(" "), r.iExact = o.filter_ignoreCase ? r.exact.toLowerCase() : r.exact, r.cache = r.cacheArray.slice(0, -1).join(" "), e.excludeMatch = e.noAnyMatch, null !== (a = I.processTypes(t, r, e))) c = a;else if (o.filter_startsWith) for (c = !1, f = Math.min(t.columns, r.rowArray.length); !c && 0 < f;) {
              f--, c = c || 0 === r.rowArray[f].indexOf(r.iFilter);
            } else c = 0 <= (r.iExact + r.childRowText).indexOf(r.iFilter);
            if (r.anyMatch = !1, r.filters.join("") === r.filter) return c;
          }

          for (f = 0; f < t.columns; f++) {
            r.filter = r.filters[f], r.index = f, e.excludeMatch = e.excludeFilter[f], r.filter && (r.cache = r.cacheArray[f], i = r.parsed[f] ? r.cache : r.rawArray[f] || "", r.exact = t.sortLocaleCompare ? E.replaceAccents(i) : i, r.iExact = !O.type.test(_typeof(r.exact)) && o.filter_ignoreCase ? r.exact.toLowerCase() : r.exact, r.isMatch = I.matchType(t, f), i = c, s = o.filter_columnFilters && t.$filters.add(o.filter_$externalFilters).filter('[data-column="' + f + '"]').find("select option:selected").attr("data-function-name") || "", t.sortLocaleCompare && (r.filter = E.replaceAccents(r.filter)), o.filter_defaultFilter && O.iQuery.test(e.defaultColFilter[f]) && (r.filter = I.defaultFilter(r.filter, e.defaultColFilter[f])), r.iFilter = o.filter_ignoreCase ? (r.filter || "").toLowerCase() : r.filter, a = null, (l = e.functions[f]) && ("function" == typeof l ? a = l(r.exact, r.cache, r.filter, f, r.$row, t, r) : "function" == typeof l[s || r.filter] && (a = l[n = s || r.filter](r.exact, r.cache, r.filter, f, r.$row, t, r))), c = !!(i = null === a ? (a = I.processTypes(t, r, e), n = !0 === l && ("and" === r.matchedOn || "or" === r.matchedOn), null === a || n ? !0 === l ? r.isMatch ? 0 <= ("" + r.iExact).search(r.iFilter) : r.filter === r.exact : (n = (r.iExact + r.childRowText).indexOf(I.parseFilter(t, r.iFilter, r)), !o.filter_startsWith && 0 <= n || o.filter_startsWith && 0 === n) : a) : a) && c);
          }

          return c;
        },
        findRows: function findRows(e, r, t) {
          if (!I.equalFilters(e.config, e.config.lastSearch, t) && e.config.widgetOptions.filter_initialized) {
            var i,
                a,
                l,
                s,
                n,
                o,
                c,
                d,
                f,
                h,
                u,
                p,
                g,
                m,
                b,
                y,
                _,
                v,
                w,
                x,
                S,
                C,
                z,
                $ = A.extend([], r),
                F = e.config,
                R = F.widgetOptions,
                T = E.debug(F, "filter"),
                k = {
              anyMatch: !1,
              filters: r,
              filter_regexCache: []
            },
                H = {
              noAnyMatch: ["range", "operators"],
              functions: [],
              excludeFilter: [],
              defaultColFilter: [],
              defaultAnyFilter: E.getColumnData(e, R.filter_defaultFilter, F.columns, !0) || ""
            };

            for (k.parsed = [], f = 0; f < F.columns; f++) {
              k.parsed[f] = R.filter_useParsedData || F.parsers && F.parsers[f] && F.parsers[f].parsed || E.getData && "parsed" === E.getData(F.$headerIndexed[f], E.getColumnData(e, F.headers, f), "filter") || F.$headerIndexed[f].hasClass("filter-parsed"), H.functions[f] = E.getColumnData(e, R.filter_functions, f) || F.$headerIndexed[f].hasClass("filter-select"), H.defaultColFilter[f] = E.getColumnData(e, R.filter_defaultFilter, f) || "", H.excludeFilter[f] = (E.getColumnData(e, R.filter_excludeFilter, f, !0) || "").split(/\s+/);
            }

            for (T && (console.log("Filter >> Starting filter widget search", r), m = new Date()), F.filteredRows = 0, t = $ || [], c = F.totalRows = 0; c < F.$tbodies.length; c++) {
              if (d = E.processTbody(e, F.$tbodies.eq(c), !0), f = F.columns, a = F.cache[c].normalized, s = A(A.map(a, function (e) {
                return e[f].$row.get();
              })), "" === t.join("") || R.filter_serversideFiltering) s.removeClass(R.filter_filteredRow).not("." + F.cssChildRow).css("display", "");else {
                if (i = (s = s.not("." + F.cssChildRow)).length, (R.filter_$anyMatch && R.filter_$anyMatch.length || void 0 !== r[F.columns]) && (k.anyMatchFlag = !0, k.anyMatchFilter = "" + (r[F.columns] || R.filter_$anyMatch && I.getLatestSearch(R.filter_$anyMatch).val() || ""), R.filter_columnAnyMatch)) {
                  for (w = k.anyMatchFilter.split(O.andSplit), x = !1, y = 0; y < w.length; y++) {
                    1 < (S = w[y].split(":")).length && (isNaN(S[0]) ? A.each(F.headerContent, function (e, t) {
                      -1 < t.toLowerCase().indexOf(S[0]) && (r[C = e] = S[1]);
                    }) : C = parseInt(S[0], 10) - 1, 0 <= C && C < F.columns && (r[C] = S[1], w.splice(y, 1), y--, x = !0));
                  }

                  x && (k.anyMatchFilter = w.join(" && "));
                }

                if (v = R.filter_searchFiltered, u = F.lastSearch || F.$table.data("lastSearch") || [], v) for (y = 0; y < f + 1; y++) {
                  b = r[y] || "", v || (y = f), v = v && u.length && 0 === b.indexOf(u[y] || "") && !O.alreadyFiltered.test(b) && !O.exactTest.test(b) && !(O.isNeg1.test(b) || O.isNeg2.test(b)) && !("" !== b && F.$filters && F.$filters.filter('[data-column="' + y + '"]').find("select").length && !I.matchType(F, y));
                }

                for (_ = s.not("." + R.filter_filteredRow).length, v && 0 === _ && (v = !1), T && console.log("Filter >> Searching through " + (v && _ < i ? _ : "all") + " rows"), k.anyMatchFlag && (F.sortLocaleCompare && (k.anyMatchFilter = E.replaceAccents(k.anyMatchFilter)), R.filter_defaultFilter && O.iQuery.test(H.defaultAnyFilter) && (k.anyMatchFilter = I.defaultFilter(k.anyMatchFilter, H.defaultAnyFilter), v = !1), k.iAnyMatchFilter = R.filter_ignoreCase && F.ignoreCase ? k.anyMatchFilter.toLowerCase() : k.anyMatchFilter), o = 0; o < i; o++) {
                  if (z = s[o].className, !(o && O.child.test(z) || v && O.filtered.test(z))) {
                    if (k.$row = s.eq(o), k.rowIndex = o, k.cacheArray = a[o], l = k.cacheArray[F.columns], k.rawArray = l.raw, k.childRowText = "", !R.filter_childByColumn) {
                      for (z = "", h = l.child, y = 0; y < h.length; y++) {
                        z += " " + h[y].join(" ") || 0;
                      }

                      k.childRowText = R.filter_childRows ? R.filter_ignoreCase ? z.toLowerCase() : z : "";
                    }

                    if (p = !1, g = I.processRow(F, k, H), n = l.$row, b = !!g, h = l.$row.filter(":gt(0)"), R.filter_childRows && h.length) {
                      if (R.filter_childByColumn) for (R.filter_childWithSibs || (h.addClass(R.filter_filteredRow), n = n.eq(0)), y = 0; y < h.length; y++) {
                        k.$row = h.eq(y), k.cacheArray = l.child[y], k.rawArray = k.cacheArray, b = I.processRow(F, k, H), p = p || b, !R.filter_childWithSibs && b && h.eq(y).removeClass(R.filter_filteredRow);
                      }
                      p = p || g;
                    } else p = b;

                    n.toggleClass(R.filter_filteredRow, !p)[0].display = p ? "" : "none";
                  }
                }
              }
              F.filteredRows += s.not("." + R.filter_filteredRow).length, F.totalRows += s.length, E.processTbody(e, d, !1);
            }

            F.lastCombinedFilter = $.join(""), F.lastSearch = $, F.$table.data("lastSearch", $), R.filter_saveFilters && E.storage && E.storage(e, "tablesorter-filters", I.processFilters($, !0)), T && console.log("Filter >> Completed search" + E.benchmark(m)), R.filter_initialized && (F.$table.triggerHandler("filterBeforeEnd", F), F.$table.triggerHandler("filterEnd", F)), setTimeout(function () {
              E.applyWidget(F.table);
            }, 0);
          }
        },
        getOptionSource: function getOptionSource(e, t, r) {
          var i = (e = A(e)[0]).config,
              a = !1,
              l = i.widgetOptions.filter_selectSource,
              s = i.$table.data("lastSearch") || [],
              n = "function" == typeof l || E.getColumnData(e, l, t);
          if (r && "" !== s[t] && (r = !1), !0 === n) a = l(e, t, r);else {
            if (n instanceof A || "string" === A.type(n) && 0 <= n.indexOf("</option>")) return n;
            if (A.isArray(n)) a = n;else if ("object" === A.type(l) && n && null === (a = n(e, t, r))) return null;
          }
          return !1 === a && (a = I.getOptions(e, t, r)), I.processOptions(e, t, a);
        },
        processOptions: function processOptions(a, l, r) {
          if (!A.isArray(r)) return !1;
          var s,
              e,
              t,
              i,
              n,
              o,
              c = (a = A(a)[0]).config,
              d = null != l && 0 <= l && l < c.columns,
              f = d && c.$headerIndexed[l].hasClass("filter-select-sort-desc"),
              h = [];
          if (r = A.grep(r, function (e, t) {
            return !!e.text || A.inArray(e, r) === t;
          }), d && c.$headerIndexed[l].hasClass("filter-select-nosort")) return r;

          for (i = r.length, t = 0; t < i; t++) {
            o = (e = r[t]).text ? e.text : e, n = (d && c.parsers && c.parsers.length && c.parsers[l].format(o, a, [], l) || o).toString(), n = c.widgetOptions.filter_ignoreCase ? n.toLowerCase() : n, e.text ? (e.parsed = n, h[h.length] = e) : h[h.length] = {
              text: e,
              parsed: n
            };
          }

          for (s = c.textSorter || "", h.sort(function (e, t) {
            var r = f ? t.parsed : e.parsed,
                i = f ? e.parsed : t.parsed;
            return d && "function" == typeof s ? s(r, i, !0, l, a) : d && "object" == _typeof(s) && s.hasOwnProperty(l) ? s[l](r, i, !0, l, a) : !E.sortNatural || E.sortNatural(r, i);
          }), r = [], i = h.length, t = 0; t < i; t++) {
            r[r.length] = h[t];
          }

          return r;
        },
        getOptions: function getOptions(e, t, r) {
          var i,
              a,
              l,
              s,
              n,
              o,
              c,
              d,
              f = (e = A(e)[0]).config,
              h = f.widgetOptions,
              u = [];

          for (a = 0; a < f.$tbodies.length; a++) {
            for (n = f.cache[a], l = f.cache[a].normalized.length, i = 0; i < l; i++) {
              if (s = n.row ? n.row[i] : n.normalized[i][f.columns].$row[0], !r || !s.className.match(h.filter_filteredRow)) if (h.filter_useParsedData || f.parsers[t].parsed || f.$headerIndexed[t].hasClass("filter-parsed")) {
                if (u[u.length] = "" + n.normalized[i][t], h.filter_childRows && h.filter_childByColumn) for (d = n.normalized[i][f.columns].$row.length - 1, o = 0; o < d; o++) {
                  u[u.length] = "" + n.normalized[i][f.columns].child[o][t];
                }
              } else if (u[u.length] = n.normalized[i][f.columns].raw[t], h.filter_childRows && h.filter_childByColumn) for (d = n.normalized[i][f.columns].$row.length, o = 1; o < d; o++) {
                c = n.normalized[i][f.columns].$row.eq(o).children().eq(t), u[u.length] = "" + E.getElementText(f, c, t);
              }
            }
          }

          return u;
        },
        buildSelect: function buildSelect(e, t, r, i, a) {
          if (e = A(e)[0], t = parseInt(t, 10), e.config.cache && !A.isEmptyObject(e.config.cache)) {
            var l,
                s,
                n,
                o,
                c,
                d,
                f,
                h = e.config,
                u = h.widgetOptions,
                p = h.$headerIndexed[t],
                g = '<option value="">' + (p.data("placeholder") || p.attr("data-placeholder") || u.filter_placeholder.select || "") + "</option>",
                m = h.$table.find("thead").find("select." + b.filter + '[data-column="' + t + '"]').val();

            if (void 0 !== r && "" !== r || null !== (r = I.getOptionSource(e, t, a))) {
              if (A.isArray(r)) {
                for (l = 0; l < r.length; l++) {
                  if ((f = r[l]).text) {
                    for (s in f["data-function-name"] = void 0 === f.value ? f.text : f.value, g += "<option", f) {
                      f.hasOwnProperty(s) && "text" !== s && (g += " " + s + '="' + f[s].replace(O.quote, "&quot;") + '"');
                    }

                    f.value || (g += ' value="' + f.text.replace(O.quote, "&quot;") + '"'), g += ">" + f.text.replace(O.quote, "&quot;") + "</option>";
                  } else "" + f != "[object Object]" && (0 <= (s = n = f = ("" + f).replace(O.quote, "&quot;")).indexOf(u.filter_selectSourceSeparator) && (s = (o = n.split(u.filter_selectSourceSeparator))[0], n = o[1]), g += "" !== f ? "<option " + (s === n ? "" : 'data-function-name="' + f + '" ') + 'value="' + s + '">' + n + "</option>" : "");
                }

                r = [];
              }

              c = (h.$filters ? h.$filters : h.$table.children("thead")).find("." + b.filter), u.filter_$externalFilters && (c = c && c.length ? c.add(u.filter_$externalFilters) : u.filter_$externalFilters), (d = c.filter('select[data-column="' + t + '"]')).length && (d[i ? "html" : "append"](g), A.isArray(r) || d.append(r).val(m), d.val(m));
            }
          }
        },
        buildDefault: function buildDefault(e, t) {
          var r,
              i,
              a,
              l = e.config,
              s = l.widgetOptions,
              n = l.columns;

          for (r = 0; r < n; r++) {
            a = !((i = l.$headerIndexed[r]).hasClass("filter-false") || i.hasClass("parser-false")), (i.hasClass("filter-select") || !0 === E.getColumnData(e, s.filter_functions, r)) && a && I.buildSelect(e, r, "", t, i.hasClass(s.filter_onlyAvail));
          }
        }
      }).regex, E.getFilters = function (e, t, r, i) {
        var a,
            l,
            s,
            n,
            o = [],
            c = e ? A(e)[0].config : "",
            d = c ? c.widgetOptions : "";
        if (!0 !== t && d && !d.filter_columnFilters || A.isArray(r) && I.equalFilters(c, r, c.lastSearch)) return A(e).data("lastSearch") || [];
        if (c && (c.$filters && (l = c.$filters.find("." + b.filter)), d.filter_$externalFilters && (l = l && l.length ? l.add(d.filter_$externalFilters) : d.filter_$externalFilters), l && l.length)) for (o = r || [], a = 0; a < c.columns + 1; a++) {
          n = a === c.columns ? d.filter_anyColumnSelector + "," + d.filter_multipleColumnSelector : '[data-column="' + a + '"]', (s = l.filter(n)).length && (s = I.getLatestSearch(s), A.isArray(r) ? (i && 1 < s.length && (s = s.slice(1)), a === c.columns && (s = (n = s.filter(d.filter_anyColumnSelector)).length ? n : s), s.val(r[a]).trigger("change" + c.namespace)) : (o[a] = s.val() || "", a === c.columns ? s.slice(1).filter('[data-column*="' + s.attr("data-column") + '"]').val(o[a]) : s.slice(1).val(o[a])), a === c.columns && s.length && (d.filter_$anyMatch = s));
        }
        return o;
      }, E.setFilters = function (e, t, r, i) {
        var a = e ? A(e)[0].config : "",
            l = E.getFilters(e, !0, t, i);
        return void 0 === r && (r = !0), a && r && (a.lastCombinedFilter = null, a.lastSearch = [], I.searching(a.table, t, i), a.$table.triggerHandler("filterFomatterUpdate")), 0 !== l.length;
      };
    }(e), function (z, $) {
      "use strict";

      var F = z.tablesorter || {};

      function R(e, t) {
        var r = isNaN(t.stickyHeaders_offset) ? z(t.stickyHeaders_offset) : [];
        return r.length ? r.height() || 0 : parseInt(t.stickyHeaders_offset, 10) || 0;
      }

      z.extend(F.css, {
        sticky: "tablesorter-stickyHeader",
        stickyVis: "tablesorter-sticky-visible",
        stickyHide: "tablesorter-sticky-hidden",
        stickyWrap: "tablesorter-sticky-wrapper"
      }), F.addHeaderResizeEvent = function (e, t, r) {
        if ((e = z(e)[0]).config) {
          var i = z.extend({}, {
            timer: 250
          }, r),
              o = e.config,
              c = o.widgetOptions,
              a = function a(e) {
            var t,
                r,
                i,
                a,
                l,
                s,
                n = o.$headers.length;

            for (c.resize_flag = !0, r = [], t = 0; t < n; t++) {
              a = (i = o.$headers.eq(t)).data("savedSizes") || [0, 0], l = i[0].offsetWidth, s = i[0].offsetHeight, l === a[0] && s === a[1] || (i.data("savedSizes", [l, s]), r.push(i[0]));
            }

            r.length && !1 !== e && o.$table.triggerHandler("resize", [r]), c.resize_flag = !1;
          };

          if (clearInterval(c.resize_timer), t) return c.resize_flag = !1;
          a(!1), c.resize_timer = setInterval(function () {
            c.resize_flag || a();
          }, i.timer);
        }
      }, F.addWidget({
        id: "stickyHeaders",
        priority: 54,
        options: {
          stickyHeaders: "",
          stickyHeaders_appendTo: null,
          stickyHeaders_attachTo: null,
          stickyHeaders_xScroll: null,
          stickyHeaders_yScroll: null,
          stickyHeaders_offset: 0,
          stickyHeaders_filteredToTop: !0,
          stickyHeaders_cloneId: "-sticky",
          stickyHeaders_addResizeEvent: !0,
          stickyHeaders_includeCaption: !0,
          stickyHeaders_zIndex: 2
        },
        format: function format(e, r, p) {
          if (!(r.$table.hasClass("hasStickyHeaders") || 0 <= z.inArray("filter", r.widgets) && !r.$table.hasClass("hasFilters"))) {
            var t,
                i,
                a,
                l,
                g = r.$table,
                m = z(p.stickyHeaders_attachTo || p.stickyHeaders_appendTo),
                s = r.namespace + "stickyheaders ",
                b = z(p.stickyHeaders_yScroll || p.stickyHeaders_attachTo || $),
                n = z(p.stickyHeaders_xScroll || p.stickyHeaders_attachTo || $),
                o = g.children("thead:first").children("tr").not(".sticky-false").children(),
                y = g.children("tfoot"),
                c = R(0, p),
                _ = g.parent().closest("." + F.css.table).hasClass("hasStickyHeaders") ? g.parent().closest("table.tablesorter")[0].config.widgetOptions.$sticky.parent() : [],
                v = _.length ? _.height() : 0,
                d = p.$sticky = g.clone().addClass("containsStickyHeaders " + F.css.sticky + " " + p.stickyHeaders + " " + r.namespace.slice(1) + "_extra_table").wrap('<div class="' + F.css.stickyWrap + '">'),
                w = d.parent().addClass(F.css.stickyHide).css({
              position: m.length ? "absolute" : "fixed",
              padding: parseInt(d.parent().parent().css("padding-left"), 10),
              top: c + v,
              left: 0,
              visibility: "hidden",
              zIndex: p.stickyHeaders_zIndex || 2
            }),
                f = d.children("thead:first"),
                x = "",
                h = function h(e, t) {
              var r,
                  i,
                  a,
                  l,
                  s,
                  n = e.filter(":visible"),
                  o = n.length;

              for (r = 0; r < o; r++) {
                l = t.filter(":visible").eq(r), i = "border-box" === (s = n.eq(r)).css("box-sizing") ? s.outerWidth() : "collapse" === l.css("border-collapse") ? $.getComputedStyle ? parseFloat($.getComputedStyle(s[0], null).width) : (a = parseFloat(s.css("border-width")), s.outerWidth() - parseFloat(s.css("padding-left")) - parseFloat(s.css("padding-right")) - a) : s.width(), l.css({
                  width: i,
                  "min-width": i,
                  "max-width": i
                });
              }
            },
                S = function S(e) {
              return !1 === e && _.length ? g.position().left : m.length ? parseInt(m.css("padding-left"), 10) || 0 : g.offset().left - parseInt(g.css("margin-left"), 10) - z($).scrollLeft();
            },
                C = function C() {
              w.css({
                left: S(),
                width: g.outerWidth()
              }), h(g, d), h(o, l);
            },
                u = function u(e) {
              if (g.is(":visible")) {
                v = _.length ? _.offset().top - b.scrollTop() + _.height() : 0;
                var t,
                    r = g.offset(),
                    i = R(0, p),
                    a = z.isWindow(b[0]),
                    l = a ? b.scrollTop() : _.length ? parseInt(_[0].style.top, 10) : b.offset().top,
                    s = m.length ? l : b.scrollTop(),
                    n = p.stickyHeaders_includeCaption ? 0 : g.children("caption").height() || 0,
                    o = s + i + v - n,
                    c = g.height() - (w.height() + (y.height() || 0)) - n,
                    d = o > r.top && o < r.top + c ? "visible" : "hidden",
                    f = "visible" == d ? F.css.stickyVis : F.css.stickyHide,
                    h = !w.hasClass(f),
                    u = {
                  visibility: d
                };
                m.length && (h = !0, u.top = a ? o - m.offset().top : m.scrollTop()), (t = S(a)) !== parseInt(w.css("left"), 10) && (h = !0, u.left = t), u.top = (u.top || 0) + (!a && _.length ? _.height() : i + v), h && w.removeClass(F.css.stickyVis + " " + F.css.stickyHide).addClass(f).css(u), d === x && !e || (C(), x = d);
              }
            };

            if (m.length && !m.css("position") && m.css("position", "relative"), d.attr("id") && (d[0].id += p.stickyHeaders_cloneId), d.find("> thead:gt(0), tr.sticky-false").hide(), d.find("> tbody, > tfoot").remove(), d.find("caption").toggle(p.stickyHeaders_includeCaption), l = f.children().children(), d.css({
              height: 0,
              width: 0,
              margin: 0
            }), l.find("." + F.css.resizer).remove(), g.addClass("hasStickyHeaders").bind("pagerComplete" + s, function () {
              C();
            }), F.bindEvents(e, f.children().children("." + F.css.header)), p.stickyHeaders_appendTo ? z(p.stickyHeaders_appendTo).append(w) : g.after(w), r.onRenderHeader) for (i = (a = f.children("tr").children()).length, t = 0; t < i; t++) {
              r.onRenderHeader.apply(a.eq(t), [t, r, d]);
            }
            n.add(b).unbind("scroll resize ".split(" ").join(s).replace(/\s+/g, " ")).bind("scroll resize ".split(" ").join(s), function (e) {
              u("resize" === e.type);
            }), r.$table.unbind("stickyHeadersUpdate" + s).bind("stickyHeadersUpdate" + s, function () {
              u(!0);
            }), p.stickyHeaders_addResizeEvent && F.addHeaderResizeEvent(e), g.hasClass("hasFilters") && p.filter_columnFilters && (g.bind("filterEnd" + s, function () {
              var e = z(document.activeElement).closest("td"),
                  t = e.parent().children().index(e);
              w.hasClass(F.css.stickyVis) && p.stickyHeaders_filteredToTop && ($.scrollTo(0, g.position().top), 0 <= t && r.$filters && r.$filters.eq(t).find("a, select, input").filter(":visible").focus());
            }), F.filter.bindSearch(g, l.find("." + F.css.filter)), p.filter_hideFilters && F.filter.hideFilters(r, d)), p.stickyHeaders_addResizeEvent && g.bind("resize" + r.namespace + "stickyheaders", function () {
              C();
            }), u(!0), g.triggerHandler("stickyHeadersInit");
          }
        },
        remove: function remove(e, t, r) {
          var i = t.namespace + "stickyheaders ";
          t.$table.removeClass("hasStickyHeaders").unbind("pagerComplete resize filterEnd stickyHeadersUpdate ".split(" ").join(i).replace(/\s+/g, " ")).next("." + F.css.stickyWrap).remove(), r.$sticky && r.$sticky.length && r.$sticky.remove(), z($).add(r.stickyHeaders_xScroll).add(r.stickyHeaders_yScroll).add(r.stickyHeaders_attachTo).unbind("scroll resize ".split(" ").join(i).replace(/\s+/g, " ")), F.addHeaderResizeEvent(e, !0);
        }
      });
    }(e, window), function (d, t) {
      "use strict";

      var f = d.tablesorter || {};
      d.extend(f.css, {
        resizableContainer: "tablesorter-resizable-container",
        resizableHandle: "tablesorter-resizable-handle",
        resizableNoSelect: "tablesorter-disableSelection",
        resizableStorage: "tablesorter-resizable"
      }), d(function () {
        var e = "<style>body." + f.css.resizableNoSelect + " { -ms-user-select: none; -moz-user-select: -moz-none;-khtml-user-select: none; -webkit-user-select: none; user-select: none; }." + f.css.resizableContainer + " { position: relative; height: 1px; }." + f.css.resizableHandle + " { position: absolute; display: inline-block; width: 8px;top: 1px; cursor: ew-resize; z-index: 3; user-select: none; -moz-user-select: none; }</style>";
        d("head").append(e);
      }), f.resizable = {
        init: function init(e, t) {
          if (!e.$table.hasClass("hasResizable")) {
            e.$table.addClass("hasResizable");
            var r,
                i,
                a,
                l,
                s = e.$table,
                n = s.parent(),
                o = parseInt(s.css("margin-top"), 10),
                c = t.resizable_vars = {
              useStorage: f.storage && !1 !== t.resizable,
              $wrap: n,
              mouseXPosition: 0,
              $target: null,
              $next: null,
              overflow: "auto" === n.css("overflow") || "scroll" === n.css("overflow") || "auto" === n.css("overflow-x") || "scroll" === n.css("overflow-x"),
              storedSizes: []
            };

            for (f.resizableReset(e.table, !0), c.tableWidth = s.width(), c.fullWidth = Math.abs(n.width() - c.tableWidth) < 20, c.useStorage && c.overflow && (f.storage(e.table, "tablesorter-table-original-css-width", c.tableWidth), l = f.storage(e.table, "tablesorter-table-resized-width") || "auto", f.resizable.setWidth(s, l, !0)), t.resizable_vars.storedSizes = a = (c.useStorage ? f.storage(e.table, f.css.resizableStorage) : []) || [], f.resizable.setWidths(e, t, a), f.resizable.updateStoredSizes(e, t), t.$resizable_container = d('<div class="' + f.css.resizableContainer + '">').css({
              top: o
            }).insertBefore(s), i = 0; i < e.columns; i++) {
              r = e.$headerIndexed[i], l = f.getColumnData(e.table, e.headers, i), "false" === f.getData(r, l, "resizable") || d('<div class="' + f.css.resizableHandle + '">').appendTo(t.$resizable_container).attr({
                "data-column": i,
                unselectable: "on"
              }).data("header", r).bind("selectstart", !1);
            }

            f.resizable.bindings(e, t);
          }
        },
        updateStoredSizes: function updateStoredSizes(e, t) {
          var r,
              i,
              a = e.columns,
              l = t.resizable_vars;

          for (l.storedSizes = [], r = 0; r < a; r++) {
            i = e.$headerIndexed[r], l.storedSizes[r] = i.is(":visible") ? i.width() : 0;
          }
        },
        setWidth: function setWidth(e, t, r) {
          e.css({
            width: t,
            "min-width": r ? t : "",
            "max-width": r ? t : ""
          });
        },
        setWidths: function setWidths(e, t, r) {
          var i,
              a,
              l = t.resizable_vars,
              s = d(e.namespace + "_extra_headers"),
              n = e.$table.children("colgroup").children("col");

          if ((r = r || l.storedSizes || []).length) {
            for (i = 0; i < e.columns; i++) {
              f.resizable.setWidth(e.$headerIndexed[i], r[i], l.overflow), s.length && (a = s.eq(i).add(n.eq(i)), f.resizable.setWidth(a, r[i], l.overflow));
            }

            (a = d(e.namespace + "_extra_table")).length && !f.hasWidget(e.table, "scroller") && f.resizable.setWidth(a, e.$table.outerWidth(), l.overflow);
          }
        },
        setHandlePosition: function setHandlePosition(a, l) {
          var s,
              n = a.$table.height(),
              e = l.$resizable_container.children(),
              o = Math.floor(e.width() / 2);
          f.hasWidget(a.table, "scroller") && (n = 0, a.$table.closest("." + f.css.scrollerWrap).children().each(function () {
            var e = d(this);
            n += e.filter('[style*="height"]').length ? e.height() : e.children("table").height();
          })), !l.resizable_includeFooter && a.$table.children("tfoot").length && (n -= a.$table.children("tfoot").height()), s = 3.3 <= parseFloat(d.fn.jquery) ? 0 : a.$table.position().left, e.each(function () {
            var e = d(this),
                t = parseInt(e.attr("data-column"), 10),
                r = a.columns - 1,
                i = e.data("header");
            i && (!i.is(":visible") || !l.resizable_addLastColumn && f.resizable.checkVisibleColumns(a, t) ? e.hide() : (t < r || t === r && l.resizable_addLastColumn) && e.css({
              display: "inline-block",
              height: n,
              left: i.position().left - s + i.outerWidth() - o
            }));
          });
        },
        checkVisibleColumns: function checkVisibleColumns(e, t) {
          var r,
              i = 0;

          for (r = t + 1; r < e.columns; r++) {
            i += e.$headerIndexed[r].is(":visible") ? 1 : 0;
          }

          return 0 === i;
        },
        toggleTextSelection: function toggleTextSelection(e, t, r) {
          var i = e.namespace + "tsresize";
          t.resizable_vars.disabled = r, d("body").toggleClass(f.css.resizableNoSelect, r), r ? d("body").attr("unselectable", "on").bind("selectstart" + i, !1) : d("body").removeAttr("unselectable").unbind("selectstart" + i);
        },
        bindings: function bindings(l, s) {
          var e = l.namespace + "tsresize";
          s.$resizable_container.children().bind("mousedown", function (e) {
            var t,
                r = s.resizable_vars,
                i = d(l.namespace + "_extra_headers"),
                a = d(e.target).data("header");
            t = parseInt(a.attr("data-column"), 10), r.$target = a = a.add(i.filter('[data-column="' + t + '"]')), r.target = t, r.$next = e.shiftKey || s.resizable_targetLast ? a.parent().children().not(".resizable-false").filter(":last") : a.nextAll(":not(.resizable-false)").eq(0), t = parseInt(r.$next.attr("data-column"), 10), r.$next = r.$next.add(i.filter('[data-column="' + t + '"]')), r.next = t, r.mouseXPosition = e.pageX, f.resizable.updateStoredSizes(l, s), f.resizable.toggleTextSelection(l, s, !0);
          }), d(document).bind("mousemove" + e, function (e) {
            var t = s.resizable_vars;
            t.disabled && 0 !== t.mouseXPosition && t.$target && (s.resizable_throttle ? (clearTimeout(t.timer), t.timer = setTimeout(function () {
              f.resizable.mouseMove(l, s, e);
            }, isNaN(s.resizable_throttle) ? 5 : s.resizable_throttle)) : f.resizable.mouseMove(l, s, e));
          }).bind("mouseup" + e, function () {
            s.resizable_vars.disabled && (f.resizable.toggleTextSelection(l, s, !1), f.resizable.stopResize(l, s), f.resizable.setHandlePosition(l, s));
          }), d(t).bind("resize" + e + " resizeEnd" + e, function () {
            f.resizable.setHandlePosition(l, s);
          }), l.$table.bind("columnUpdate pagerComplete resizableUpdate ".split(" ").join(e + " "), function () {
            f.resizable.setHandlePosition(l, s);
          }).bind("resizableReset" + e, function () {
            f.resizableReset(l.table);
          }).find("thead:first").add(d(l.namespace + "_extra_table").find("thead:first")).bind("contextmenu" + e, function () {
            var e = 0 === s.resizable_vars.storedSizes.length;
            return f.resizableReset(l.table), f.resizable.setHandlePosition(l, s), s.resizable_vars.storedSizes = [], e;
          });
        },
        mouseMove: function mouseMove(e, t, r) {
          if (0 !== t.resizable_vars.mouseXPosition && t.resizable_vars.$target) {
            var i,
                a = 0,
                l = t.resizable_vars,
                s = l.$next,
                n = l.storedSizes[l.target],
                o = r.pageX - l.mouseXPosition;

            if (l.overflow) {
              if (0 < n + o) {
                for (l.storedSizes[l.target] += o, f.resizable.setWidth(l.$target, l.storedSizes[l.target], !0), i = 0; i < e.columns; i++) {
                  a += l.storedSizes[i];
                }

                f.resizable.setWidth(e.$table.add(d(e.namespace + "_extra_table")), a);
              }

              s.length || (l.$wrap[0].scrollLeft = e.$table.width());
            } else l.fullWidth ? (l.storedSizes[l.target] += o, l.storedSizes[l.next] -= o) : l.storedSizes[l.target] += o, f.resizable.setWidths(e, t);

            l.mouseXPosition = r.pageX, e.$table.triggerHandler("stickyHeadersUpdate");
          }
        },
        stopResize: function stopResize(e, t) {
          var r = t.resizable_vars;
          f.resizable.updateStoredSizes(e, t), r.useStorage && (f.storage(e.table, f.css.resizableStorage, r.storedSizes), f.storage(e.table, "tablesorter-table-resized-width", e.$table.width())), r.mouseXPosition = 0, r.$target = r.$next = null, e.$table.triggerHandler("stickyHeadersUpdate"), e.$table.triggerHandler("resizableComplete");
        }
      }, f.addWidget({
        id: "resizable",
        priority: 40,
        options: {
          resizable: !0,
          resizable_addLastColumn: !1,
          resizable_includeFooter: !0,
          resizable_widths: [],
          resizable_throttle: !1,
          resizable_targetLast: !1
        },
        init: function init(e, t, r, i) {
          f.resizable.init(r, i);
        },
        format: function format(e, t, r) {
          f.resizable.setHandlePosition(t, r);
        },
        remove: function remove(e, t, r, i) {
          if (r.$resizable_container) {
            var a = t.namespace + "tsresize";
            t.$table.add(d(t.namespace + "_extra_table")).removeClass("hasResizable").children("thead").unbind("contextmenu" + a), r.$resizable_container.remove(), f.resizable.toggleTextSelection(t, r, !1), f.resizableReset(e, i), d(document).unbind("mousemove" + a + " mouseup" + a);
          }
        }
      }), f.resizableReset = function (l, s) {
        d(l).each(function () {
          var e,
              t,
              r = this.config,
              i = r && r.widgetOptions,
              a = i.resizable_vars;

          if (l && r && r.$headerIndexed.length) {
            for (a.overflow && a.tableWidth && (f.resizable.setWidth(r.$table, a.tableWidth, !0), a.useStorage && f.storage(l, "tablesorter-table-resized-width", a.tableWidth)), e = 0; e < r.columns; e++) {
              t = r.$headerIndexed[e], i.resizable_widths && i.resizable_widths[e] ? f.resizable.setWidth(t, i.resizable_widths[e], a.overflow) : t.hasClass("resizable-false") || f.resizable.setWidth(t, "", a.overflow);
            }

            r.$table.triggerHandler("stickyHeadersUpdate"), f.storage && !s && f.storage(this, f.css.resizableStorage, []);
          }
        });
      };
    }(e, window), function (r) {
      "use strict";

      var c = r.tablesorter || {};

      function d(e) {
        var t = c.storage(e.table, "tablesorter-savesort");
        return t && t.hasOwnProperty("sortList") && r.isArray(t.sortList) ? t.sortList : [];
      }

      function f(e, t) {
        return (t || d(e)).join(",") !== e.sortList.join(",");
      }

      c.addWidget({
        id: "saveSort",
        priority: 20,
        options: {
          saveSort: !0
        },
        init: function init(e, t, r, i) {
          t.format(e, r, i, !0);
        },
        format: function format(t, e, r, i) {
          var a,
              l = e.$table,
              s = !1 !== r.saveSort,
              n = {
            sortList: e.sortList
          },
              o = c.debug(e, "saveSort");
          o && (a = new Date()), l.hasClass("hasSaveSort") ? s && t.hasInitialized && c.storage && f(e) && (c.storage(t, "tablesorter-savesort", n), o && console.log("saveSort >> Saving last sort: " + e.sortList + c.benchmark(a))) : (l.addClass("hasSaveSort"), n = "", c.storage && (n = d(e), o && console.log('saveSort >> Last sort loaded: "' + n + '"' + c.benchmark(a)), l.bind("saveSortReset", function (e) {
            e.stopPropagation(), c.storage(t, "tablesorter-savesort", "");
          })), i && n && 0 < n.length ? e.sortList = n : t.hasInitialized && n && 0 < n.length && f(e, n) && c.sortOn(e, n));
        },
        remove: function remove(e, t) {
          t.$table.removeClass("hasSaveSort"), c.storage && c.storage(e, "tablesorter-savesort", "");
        }
      });
    }(e), e.tablesorter;
  });
  return jQuery;
});

/***/ }),

/***/ "./src/services/falcon-editor.js":
/*!***************************************!*\
  !*** ./src/services/falcon-editor.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/services/storage.js");
/* harmony import */ var _ui_ui_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ui-injector */ "./src/ui/ui-injector.js");
/* harmony import */ var _ui_ui_event_listeners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/ui-event-listeners */ "./src/ui/ui-event-listeners.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var FalconEditor = /*#__PURE__*/function () {
  function FalconEditor(currentCourse) {
    _classCallCheck(this, FalconEditor);

    _defineProperty(this, "STORAGE_KEY", 'falconEditor');

    _defineProperty(this, "uiEditor", void 0);

    _defineProperty(this, "falconEditor", []);

    _defineProperty(this, "currentCourse", void 0);

    this.currentCourse = currentCourse;
    _ui_ui_injector__WEBPACK_IMPORTED_MODULE_2__.default.falconEditorButton();
    this.addEventListeners();
  }

  _createClass(FalconEditor, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var isOpen = false;
      var self = this;

      if (!isOpen) {
        cleanupEditor();
      }

      $('#falcon-editor-button').on('click', function () {
        $('#falcon-editor-icon').addClass('fa-spinner fa-pulse').removeClass('fa-pencil'); // $('.Mrphs-pagebody').hide();

        $('.Mrphs-pagebody').hide();

        if (isOpen) {
          $('#falcon-editor-title').html('Saving...');
          self.saveFalconEdits(self.uiEditor["export"]()).then(function (item) {
            $('#falcon-editor-title').html('Saved!');
          });
        } // Async to prevent from the slight freeze up


        setTimeout(function () {
          isOpen = !isOpen;

          if (isOpen) {
            $('a.Mrphs-toolsNav__menuitem--link').not('#falcon-editor-button').parent().hide();
            $('#falcon-editor-title').html('Close Editor');
            $('#falcon-editor-icon').removeClass('fa-spinner fa-pulse fa-pencil').addClass('fa-close');
            $('#pageBody').append("<div id=\"falcon-editor-diagram\"></div>");
            self.setupEditor();
            self.getEditorDataFromStorage();
          } else {
            cleanupEditor();
          }
        }, 0);
      });

      function cleanupEditor() {
        $('#falcon-editor-title').html('Falcon Editor');
        $('a.Mrphs-toolsNav__menuitem--link').not('#falcon-editor-button').parent().show();
        $('#falcon-editor-icon').removeClass('fa-spinner fa-pulse fa-close').addClass('fa-pencil');
        $('#falcon-editor-diagram').remove();
        $('.Mrphs-pagebody').show();
      }
    }
  }, {
    key: "setupEditor",
    value: function setupEditor() {
      var autoSaveIntervalMs = 2000;
      var autoSaveTimeout = -1;
      var self = this;
      this.uiEditor = new DevExpress.ui.dxDiagram(document.getElementById("falcon-editor-diagram"), {
        "height": function height() {
          return window.innerHeight / 1.1;
        },
        "nodes": {
          "autoLayout": {
            "orientation": "horizontal"
          }
        },
        propertiesPanel: {
          visibility: 'disabled'
        },
        "simpleView": true,
        "toolbox": {
          "visible": true
        },
        historyToolbar: {
          visible: false
        },
        mainToolbar: {
          visible: true
        },
        onOptionChanged: function onOptionChanged(e) {
          if (e.name === "hasChanges" && e.value && autoSaveTimeout === -1) {
            autoSaveTimeout = setTimeout(function () {
              var data = e.component["export"]();
              autoSaveTimeout = -1;
              self.saveFalconEdits(data).then(function () {
                e.component.option("hasChanges", false);
              });
            }, autoSaveIntervalMs);
          }
        },
        "width": '100%'
      });
    }
  }, {
    key: "saveFalconEdits",
    value: function saveFalconEdits(data) {
      var _this = this;

      var exists = _storage__WEBPACK_IMPORTED_MODULE_1__.default.existsInStorage(this.falconEditor, 'courseName', this.currentCourse);

      if (exists) {
        this.falconEditor.map(function (item) {
          if (item.courseName === _this.currentCourse) {
            return item.diagramData = data;
          }

          return item;
        });
      } else {
        this.falconEditor.push({
          courseName: this.currentCourse,
          diagramData: data
        });
      }

      return _storage__WEBPACK_IMPORTED_MODULE_1__.default.set({
        falconEditor: this.falconEditor
      });
    }
  }, {
    key: "getEditorDataFromStorage",
    value: function () {
      var _getEditorDataFromStorage = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this2 = this;

        var _yield$FalconStorage$, falconEditor, exists, falconEdit;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _storage__WEBPACK_IMPORTED_MODULE_1__.default.local().get(this.STORAGE_KEY);

              case 2:
                _yield$FalconStorage$ = _context.sent;
                falconEditor = _yield$FalconStorage$.falconEditor;
                this.falconEditor = falconEditor; // if there's no data... it means that it's a new user visiting the falcon editor
                // populate it with default data and show them the welcome page
                // It's NOT saved in storage (because it's dummy data)

                if (falconEditor) {
                  _context.next = 9;
                  break;
                }

                this.falconEditor = [];
                this.importDataToEditor(this.defaultData());
                return _context.abrupt("return");

              case 9:
                exists = _storage__WEBPACK_IMPORTED_MODULE_1__.default.existsInStorage(falconEditor, 'courseName', this.currentCourse);

                if (exists) {
                  falconEdit = falconEditor.filter(function (item) {
                    return item.courseName === _this2.currentCourse;
                  })[0];
                  this.importDataToEditor(falconEdit.diagramData);
                }

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getEditorDataFromStorage() {
        return _getEditorDataFromStorage.apply(this, arguments);
      }

      return getEditorDataFromStorage;
    }()
  }, {
    key: "importDataToEditor",
    value: function importDataToEditor(data) {
      this.uiEditor["import"](data);
    } // Default falcon editor data

  }, {
    key: "defaultData",
    value: function defaultData() {
      return "{\"page\":{\"width\":16782,\"height\":23812,\"pageColor\":-1,\"pageWidth\":8391,\"pageHeight\":11906,\"pageLandscape\":false},\"connectors\":[{\"key\":\"9\",\"dataKey\":\"f42178f6-a498-49e7-943d-27b0b741f653\",\"locked\":false,\"zIndex\":0,\"points\":[{\"x\":11562,\"y\":9386},{\"x\":10842,\"y\":11006}],\"styleText\":{\"font-size\":\"14pt\"},\"beginItemKey\":\"4\",\"beginConnectionPointIndex\":-1,\"endItemKey\":\"6\",\"endConnectionPointIndex\":-1},{\"key\":\"10\",\"dataKey\":\"5535914e-b95a-4d63-8438-cc70c440356a\",\"locked\":false,\"zIndex\":0,\"points\":[{\"x\":11562,\"y\":9386},{\"x\":12282,\"y\":11006}],\"styleText\":{\"font-size\":\"14pt\"},\"beginItemKey\":\"4\",\"beginConnectionPointIndex\":-1,\"endItemKey\":\"5\",\"endConnectionPointIndex\":-1}],\"shapes\":[{\"key\":\"1\",\"dataKey\":\"8ffd4013-cc19-4567-b241-5183167b8c85\",\"locked\":false,\"zIndex\":0,\"type\":\"rectangle\",\"text\":\"Each course has its own editor\",\"x\":8502,\"y\":16406,\"width\":6120,\"height\":540},{\"key\":\"2\",\"dataKey\":\"bfffcc2c-ab59-4ff1-8582-a2a8952848b1\",\"locked\":false,\"zIndex\":0,\"type\":\"rectangle\",\"text\":\"To get started, select all these elements and hit delete!\",\"x\":8322,\"y\":16946,\"width\":6480,\"height\":720},{\"key\":\"3\",\"dataKey\":\"d054a3b3-9b51-45a9-96cb-5b31e958c513\",\"locked\":false,\"zIndex\":0,\"type\":\"heart\",\"text\":\"Good luck!\",\"x\":10302,\"y\":14066,\"width\":2520,\"height\":2160,\"style\":{\"fill\":\"#ffcccc\",\"stroke\":\"#ffffff\"},\"styleText\":{\"fill\":\"#8a0000\",\"font-size\":\"14pt\"}},{\"key\":\"4\",\"dataKey\":\"c33421dc-650b-4ace-89de-b0c9048d4e02\",\"locked\":false,\"zIndex\":0,\"type\":\"rectangle\",\"text\":\"Welcome to this new Falcon Editor!\",\"x\":7062,\"y\":8486,\"width\":9000,\"height\":900,\"style\":{\"fill\":\"#6400ff\",\"stroke\":\"#ffffff\"},\"styleText\":{\"fill\":\"#ffffff\",\"font-family\":\"Helvetica\",\"font-size\":\"24pt\"}},{\"key\":\"5\",\"dataKey\":\"d97730d1-3f1a-45b5-9b75-651fa3c90327\",\"locked\":false,\"zIndex\":0,\"type\":\"ellipse\",\"text\":\"Draw diagrams\",\"x\":12282,\"y\":10286,\"width\":1800,\"height\":1440,\"styleText\":{\"font-size\":\"14pt\"}},{\"key\":\"6\",\"dataKey\":\"0463af6f-c987-4f2d-8069-9318cec6efd5\",\"locked\":false,\"zIndex\":0,\"type\":\"ellipse\",\"text\":\"Draw flow-charts\",\"x\":9042,\"y\":10286,\"width\":1800,\"height\":1440,\"styleText\":{\"font-size\":\"14pt\"}},{\"key\":\"7\",\"dataKey\":\"bbb957b3-7141-4a99-9eb7-5b19b8f7aa49\",\"locked\":false,\"zIndex\":0,\"type\":\"octagon\",\"text\":\"And so much more!\",\"x\":10842,\"y\":11546,\"width\":1440,\"height\":1440,\"styleText\":{\"font-size\":\"14pt\"}},{\"key\":\"8\",\"dataKey\":\"aa13a0e0-3350-48aa-a6c5-7e78234ec723\",\"locked\":false,\"zIndex\":0,\"type\":\"text\",\"text\":\"You can export your diagrams as PNG, JPG and SVG \\nfrom the bottom left\",\"x\":9042,\"y\":13166,\"width\":5400,\"height\":720,\"style\":{\"fill\":\"#969696\"},\"styleText\":{\"fill\":\"#919191\"}}]}";
    }
  }]);

  return FalconEditor;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FalconEditor);

/***/ }),

/***/ "./src/services/falcon.js":
/*!********************************!*\
  !*** ./src/services/falcon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pjax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pjax */ "./node_modules/pjax/index.js");
/* harmony import */ var pjax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pjax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var topbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! topbar */ "./node_modules/topbar/topbar.min.js");
/* harmony import */ var topbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(topbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table_sorter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-sorter */ "./src/services/table-sorter.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _falcon_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./falcon-editor */ "./src/services/falcon-editor.js");
/* harmony import */ var _file_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./file-manager */ "./src/services/file-manager.js");
/* harmony import */ var _ui_ui_injector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/ui-injector */ "./src/ui/ui-injector.js");







var currentCourseId; // in format 39cbafa5-fa7b-4a18-8ca8-d7ae032c8de8

var currentCourseName;
var pjax;
var Falcon = {
  start: function start() {
    // loaded only once on page load (regular page load, no pjax)
    Falcon.onSuccess();
    pjax = new (pjax__WEBPACK_IMPORTED_MODULE_0___default())({
      elements: "a[href]:not(.Mrphs-sitesNav__dropdown), form[action]:not(#Mrphs-xlogin):not(#dfCompose)",
      cacheBust: true,
      debug: false,
      selectors: ["title", // "head",
      "meta[name=description]", ".Mrphs-pagebody", ".Mrphs-container--nav-tools", "#topnav_container"]
    });
    document.addEventListener("pjax:success", Falcon.onSuccess); // document.addEventListener("pjax:success", makeTablesResponsive)

    document.addEventListener('pjax:send', Falcon.onSend);
    document.addEventListener('pjax:complete', Falcon.onComplete);
    Falcon.setupTopbar();
  },
  setupTopbar: function setupTopbar() {
    topbar__WEBPACK_IMPORTED_MODULE_1___default().config({
      autoRun: true,
      barThickness: 3,
      barColors: {
        '0': '#d900ff',
        '.3': '#7000ff',
        '1.0': '#d900ff'
      },
      shadowBlur: 5,
      shadowColor: 'rgba(0, 0, 0, .5)',
      className: 'topbar'
    });
  },
  onSend: function onSend() {
    topbar__WEBPACK_IMPORTED_MODULE_1___default().show();
  },
  onSuccess: function onSuccess() {
    _ui_ui_injector__WEBPACK_IMPORTED_MODULE_6__.default.initAnimations();
    Falcon.saveCourseId();
    new _table_sorter__WEBPACK_IMPORTED_MODULE_2__.default();
    new _falcon_editor__WEBPACK_IMPORTED_MODULE_4__.default(currentCourseId); // new FalconFileManager(currentCourseId, currentCourseName);
  },
  onComplete: function onComplete() {
    topbar__WEBPACK_IMPORTED_MODULE_1___default().hide();
  },
  saveCourseId: function saveCourseId() {
    var linkElement = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.Mrphs-sitesNav__menuitem.is-selected a.link-container');
    currentCourseId = linkElement.attr('href').split('/').pop();
    currentCourseName = linkElement.attr('title');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Falcon);

/***/ }),

/***/ "./src/services/file-manager.js":
/*!**************************************!*\
  !*** ./src/services/file-manager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/services/storage.js");
/* harmony import */ var _ui_ui_injector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ui-injector */ "./src/ui/ui-injector.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var FalconFileManager = /*#__PURE__*/function () {
  // 10 minutes
  // current course ID in format 39cbafa5-fa7b-4a18-8ca8-d7ae032c8de8
  function FalconFileManager(courseId, courseName) {
    _classCallCheck(this, FalconFileManager);

    _defineProperty(this, "API_URL", 'https://owl.uwo.ca/direct/content/site/');

    _defineProperty(this, "CACHE_TTL", 10 * 60 * 1000);

    _defineProperty(this, "STORAGE_KEY", 'falconResources');

    _defineProperty(this, "forceRecache", false);

    _defineProperty(this, "falconResources", []);

    _defineProperty(this, "currentCourse", void 0);

    this.currentCourse = courseName;
    this.courseId = courseId;
    _ui_ui_injector__WEBPACK_IMPORTED_MODULE_2__.default.falconResources();
    this.addEventListeners();
  }

  _createClass(FalconFileManager, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var showOriginal = false;
      $('#toggle-original-resource').on('click', function () {
        if (showOriginal) {
          $('#showForm').slideUp();
          showOriginal = false;
          $(this).html('Show Original Resources');
        } else {
          $('#showForm').slideDown();
          showOriginal = true;
          $(this).html('Hide Original Resources');
        }
      });
      $('#refresh-resources-button').on('click', function () {
        $(this).hide();
        $('#last-fetched-time').html('Re-fetching...'); // startFileManager(true).then(() => {
        //     $(this).show();
        // })
      });
      this.setupResources();
    }
  }, {
    key: "forceRefresh",
    value: function forceRefresh() {
      this.forceRecache = true;
      return this;
    }
  }, {
    key: "setupResources",
    value: function () {
      var _setupResources = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var result, onItemClick, openFileInNewTab, isImage, download;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                download = function _download(url) {
                  var a = document.createElement("a");
                  a.href = url;
                  a.click();
                };

                isImage = function _isImage(mimeType) {
                  return mimeType.split('/')[0] === 'image'; //returns true or false
                };

                openFileInNewTab = function _openFileInNewTab(url) {
                  window.open(url, '_blank');
                };

                onItemClick = function _onItemClick(args) {
                  var url = args.fileSystemItem.dataItem.url; // they wanna download

                  if (args.itemData === 'download') {
                    if (url) {
                      download(url);
                    }
                  }
                };

                _context.next = 6;
                return this.getResourcesForCourse();

              case 6:
                result = _context.sent;
                $("#file-manager").dxFileManager({
                  name: "fileManager",
                  fileSystemProvider: result,
                  rootFolderName: "Falcon",
                  selectionMode: "single",
                  currentPath: this.currentCourse,
                  height: function height() {
                    return window.innerHeight / 1.5;
                  },
                  permissions: {
                    download: false
                  },
                  onSelectedFileOpened: function onSelectedFileOpened(e) {
                    if (isImage(e.file.dataItem.mimeType)) {
                      var popup = $("#photo-popup").dxPopup("instance");
                      console.log(e);
                      popup.option({
                        "title": e.file.name,
                        "contentTemplate": "<img src=\"".concat(e.file.dataItem.url, "\" class=\"photo-popup-image\"/>")
                      });
                      popup.show();
                    } else {
                      openFileInNewTab(e.file.dataItem.url);
                    }
                  },
                  onContextMenuItemClick: onItemClick,
                  toolbar: {
                    items: [{
                      name: "showNavPane",
                      visible: true
                    }, 'refresh', 'separator', 'switchView']
                  },
                  itemView: {
                    details: {
                      columns: ["thumbnail", "name", "size", {
                        dataField: "modified_at",
                        caption: "Last Modified",
                        width: 'auto',
                        dataType: 'date'
                      }, {
                        dataField: "created_by",
                        caption: "Created By",
                        width: 'auto'
                      }]
                    }
                  }
                }); // Whenever an item is (double) clicked, download it

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setupResources() {
        return _setupResources.apply(this, arguments);
      }

      return setupResources;
    }() // Get resources

  }, {
    key: "getResourcesForCourse",
    value: function () {
      var _getResourcesForCourse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var _this = this;

        var _yield$this$getResour, falconResources, data, exists, falconResource;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getResources();

              case 2:
                _yield$this$getResour = _context2.sent;
                falconResources = _yield$this$getResour.falconResources;

                if (!(!falconResources || this.forceRecache)) {
                  _context2.next = 12;
                  break;
                }

                this.forceRecache = false;
                _context2.next = 8;
                return this.fetchResourcesForCourse();

              case 8:
                data = _context2.sent;
                _context2.next = 11;
                return this.saveResources(data);

              case 11:
                return _context2.abrupt("return", _context2.sent);

              case 12:
                exists = _storage__WEBPACK_IMPORTED_MODULE_1__.default.existsInStorage(falconResources, 'courseId', this.courseId);

                if (exists) {
                  _context2.next = 20;
                  break;
                }

                _context2.next = 16;
                return this.fetchResourcesForCourse();

              case 16:
                data = _context2.sent;
                _context2.next = 19;
                return this.saveResources(data);

              case 19:
                return _context2.abrupt("return", data);

              case 20:
                // if exists
                falconResource = falconResources.filter(function (item) {
                  return item.courseId === _this.courseId;
                })[0]; // make sure it's not older than TTL... otherwise re-fetch

                if (!this.isExpired(falconResource)) {
                  _context2.next = 28;
                  break;
                }

                _context2.next = 24;
                return this.fetchResourcesForCourse();

              case 24:
                data = _context2.sent;
                _context2.next = 27;
                return this.saveResources(data);

              case 27:
                return _context2.abrupt("return", data);

              case 28:
                return _context2.abrupt("return", falconResource.courses);

              case 29:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getResourcesForCourse() {
        return _getResourcesForCourse.apply(this, arguments);
      }

      return getResourcesForCourse;
    }()
  }, {
    key: "getResources",
    value: function () {
      var _getResources = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var _yield$FalconStorage$, falconResources;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _storage__WEBPACK_IMPORTED_MODULE_1__.default.local().get(this.STORAGE_KEY);

              case 2:
                _yield$FalconStorage$ = _context3.sent;
                falconResources = _yield$FalconStorage$.falconResources;
                this.falconResources = falconResources;
                return _context3.abrupt("return", falconResources);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getResources() {
        return _getResources.apply(this, arguments);
      }

      return getResources;
    }()
  }, {
    key: "saveResources",
    value: function () {
      var _saveResources = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(data) {
        var _this2 = this;

        var currentTimeInMillis, exists;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // let {falconResources} = await this.getResources();
                //
                // if (!falconResources) {
                //     falconResources = [];
                // }
                currentTimeInMillis = new Date().getTime();
                exists = _storage__WEBPACK_IMPORTED_MODULE_1__.default.existsInStorage(this.falconResources, 'courseId', this.courseId); // if it exists... update it..

                if (exists) {
                  this.falconResources.map(function (item) {
                    if (item.courseId === _this2.courseId) {
                      item.courses = data;
                      item.lastFetched = currentTimeInMillis;
                      return item;
                    }

                    return item;
                  });
                } else {
                  // otherwise, add a new record
                  this.falconResources.push({
                    courseName: this.currentCourse,
                    courseId: this.courseId,
                    courses: data,
                    lastFetched: currentTimeInMillis
                  });
                } // and save it in storage


                return _context4.abrupt("return", _storage__WEBPACK_IMPORTED_MODULE_1__.default.set({
                  falconResources: this.falconResources
                }));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function saveResources(_x) {
        return _saveResources.apply(this, arguments);
      }

      return saveResources;
    }()
  }, {
    key: "isExpired",
    value: function isExpired(falconResource) {
      return new Date() - new Date(falconResource.lastFetched) > this.CACHE_TTL;
    }
  }, {
    key: "fetchResourcesForCourse",
    value: function () {
      var _fetchResourcesForCourse = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
        var file;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return fetch(this.API_URL + this.courseId + '.json').then(function (response) {
                  return response.json();
                }).then(function (json) {
                  file = json;
                });

              case 2:
                if (!file) {
                  _context5.next = 4;
                  break;
                }

                return _context5.abrupt("return", file.content_collection);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchResourcesForCourse() {
        return _fetchResourcesForCourse.apply(this, arguments);
      }

      return fetchResourcesForCourse;
    }() // save the cache of the file manager...

  }, {
    key: "saveCache",
    value: function saveCache() {}
  }, {
    key: "parseRawFileDataIntoTree",
    value: function parseRawFileDataIntoTree(rawFileStructure) {
      var _this3 = this;

      // final file structure result
      var result = [];
      var level = {
        result: result
      };
      rawFileStructure.forEach(function (file) {
        var rawFilePath;

        if (file.type === 'collection') {
          rawFilePath = decodeURIComponent(file.url.slice(0, -1)).split('/');
        } else {
          rawFilePath = decodeURIComponent(file.url).split('/');
        }

        rawFilePath = rawFilePath.splice(6);
        rawFilePath[0] = _this3.courseId;
        rawFilePath = rawFilePath.join('/');
        var dateString = file.modifiedDate.substr(0, 8);
        var year = dateString.substring(0, 4);
        var month = dateString.substring(4, 6);
        var day = dateString.substring(6, 8);
        var date = new Date(year, month - 1, day).toLocaleString('en-us', {
          month: 'long',
          year: 'numeric',
          day: 'numeric'
        });
        var path = rawFilePath;
        var sharedDataToShow = {
          //TODO Fix
          modified_at: date,
          created_by: file.author
        };
        path.split('/').reduce(function (r, name, i, a) {
          if (!r[name]) {
            r[name] = {
              result: []
            };

            if (file.type === 'collection') {
              r.result.push({
                name: name,
                isDirectory: true,
                modified_at: date,
                created_by: file.author,
                items: r[name].result
              });
            } else {
              r.result.push({
                name: name,
                url: file.url,
                mimeType: file.type,
                modified_at: date,
                created_by: file.author,
                size: file.size,
                items: r[name].result
              });
            }
          }

          return r[name];
        }, level);
      });
      return result;
    }
  }]);

  return FalconFileManager;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FalconFileManager);

/***/ }),

/***/ "./src/services/storage.js":
/*!*********************************!*\
  !*** ./src/services/storage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 This storage file is responsible for saving data using the browser storage sync/local API
 */
var FalconStorage = {
  api: 'sync',
  // sync OR local
  setup: function setup() {},
  sync: function sync() {
    FalconStorage.api = 'sync';
    return FalconStorage;
  },
  local: function local() {
    FalconStorage.api = 'local';
    return FalconStorage;
  },
  get: function get(key) {
    return new Promise(function (resolve, reject) {
      return chrome.storage[FalconStorage.api].get(key, function (result) {
        return chrome.runtime.lastError ? reject(Error(chrome.runtime.lastError.message)) : resolve(result);
      });
    });
  },
  set: function set(data) {
    return new Promise(function (resolve, reject) {
      return chrome.storage[FalconStorage.api].set(data, function () {
        return chrome.runtime.lastError ? reject(Error(chrome.runtime.lastError.message)) : resolve();
      });
    });
  },
  // data = array returned from FalconStorage.get()
  existsInStorage: function existsInStorage(data, index, matching) {
    return data.findIndex(function (item) {
      return item[index] === matching;
    }) !== -1;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FalconStorage);

/***/ }),

/***/ "./src/services/table-sorter.js":
/*!**************************************!*\
  !*** ./src/services/table-sorter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_js_dist_jquery_tablesorter_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/js/dist/jquery.tablesorter.min.js */ "./assets/js/dist/jquery.tablesorter.min.js");
/* harmony import */ var _assets_js_dist_jquery_tablesorter_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_js_dist_jquery_tablesorter_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_js_dist_jquery_tablesorter_widgets_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/js/dist/jquery.tablesorter.widgets.min.js */ "./assets/js/dist/jquery.tablesorter.widgets.min.js");
/* harmony import */ var _assets_js_dist_jquery_tablesorter_widgets_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_js_dist_jquery_tablesorter_widgets_min_js__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


window.$ = window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_0___default());



var TableSorter = /*#__PURE__*/function () {
  // all the tables that should be sorted/searched
  function TableSorter() {
    _classCallCheck(this, TableSorter);

    _defineProperty(this, "sortableTables", ['form[name="listAssignmentsForm"]', 'form[name="announcementListForm"]']);

    this.makeSortable();
  }

  _createClass(TableSorter, [{
    key: "makeSortable",
    value: function makeSortable() {
      // Ensure that the page includes tables to be sortable
      if (!this.tablesExist()) {
        return;
      } // These tables do not have <thead>... so convert the header to thead...


      var theadElement = jquery__WEBPACK_IMPORTED_MODULE_0___default()('table tbody tr')[0];
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('table').prepend("<thead>".concat(theadElement, "</thead>"));
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('table thead').html(theadElement);
      setTimeout(function () {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tablesorter-header-inner a').contents().unwrap().wrap('<span/>');
      }, 10);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('td[headers="author"]').addClass('text-nowrap');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()("table").tablesorter({
        theme: "bootstrap",
        widthFixed: true,
        widgets: ["columns"],
        widgetOptions: {
          // class names added to columns when sorted
          columns: ["falcon-table-column"],
          // reset filters button TODO: add it
          filter_reset: ".reset",
          // extra css class name (string or array) added to the filter element (input or select)
          filter_cssFilter: ['form-control', 'form-control', 'form-control', // select needs custom class names :(
          'form-control', 'form-control', 'form-control', 'form-control']
        }
      });
    }
  }, {
    key: "tablesExist",
    value: function tablesExist() {
      var exists = false;
      this.sortableTables.forEach(function (table) {
        console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()(table));

        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(table).length > 0) {
          exists = true;
        }
      });
      return exists;
    }
  }]);

  return TableSorter;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TableSorter);

/***/ }),

/***/ "./src/ui/ui-event-listeners.js":
/*!**************************************!*\
  !*** ./src/ui/ui-event-listeners.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var pageBody = $('.Mrphs-pagebody');
var FalconInterfaceEventListeners = {
  // listen for all sorts of events here...
  // constructor() {
  //
  //     // when course name edit modal shows up... auto-focus the text box
  //     $('#edit-course-title-modal').on('shown.bs.modal', function() {
  //         $('#custom-course-name-text').focus();
  //     })
  //
  //     // when the edit course button is pressed
  //     $('.edit-course-name-button').on('click', function () {
  //         $('#custom-course-name-text').val('');
  //         let link = $(this).siblings('div.fav-title').find('a');
  //         $('#old-course-name').html(link.attr('title'));
  //
  //         $('#edit-course-title-modal').modal('show');
  //         // populate it with the new name...
  //         //TODO: autoPopulateCourseName();
  //     })
  //
  //     // when dark mode is clicked...
  //
  //
  //
  //
  //
  // }
  handleFalconEditorButtonToggle: function handleFalconEditorButtonToggle(isOpen) {
    isOpen = !isOpen;
    $('#falcon-editor-button').on('click', function () {
      if (isOpen) {
        pageBody.hide();
        $('a.Mrphs-toolsNav__menuitem--link').not('#falcon-editor').parent().hide();
        $('#falcon-editor-title').html('Close Editor');
        $('#falcon-editor-icon').removeClass('fa-pencil').addClass('fa-close');
        $('#pageBody').append("<div id=\"falcon-editor-diagram\"></div>");
      } else {
        $('#falcon-editor-title').html('Falcon Editor');
        $('a.Mrphs-toolsNav__menuitem--link').not('#falcon-editor').parent().show();
        $('#falcon-editor-icon').removeClass('fa-close').addClass('fa-pencil');
        $('#falcon-editor-diagram').remove();
        pageBody.show();
      }
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FalconInterfaceEventListeners);

/***/ }),

/***/ "./src/ui/ui-injector.js":
/*!*******************************!*\
  !*** ./src/ui/ui-injector.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/storage */ "./src/services/storage.js");

var FalconInterfaceInjector = {
  darkModeButton: function darkModeButton() {
    var $dark_mode_button = "<div class=\"Mrphs-sitesNav__menuitem\"><a href=\"javascript:;\" id=\"dark-mode-toggle\" class=\"dark-mode-toggle\"><i id=\"dark-mode-toggle-icon\" class=\"fa fa-toggle-off mr-3\"></i><span>Dark Mode</span></a></div>";
    $(".Mrphs-loginNav").prepend($dark_mode_button);
  },
  falconEditorButton: function falconEditorButton() {
    $('.Mrphs-toolsNav__menu ul').append("<li><a href=\"javascript:;\" class=\"Mrphs-toolsNav__menuitem--link\" id=\"falcon-editor-button\" title=\"Double Click to open. A powerful diagram editor included with Falcon\"><span id=\"falcon-editor-icon\" class=\"Mrphs-toolsNav__menuitem--icon fa fa-pencil \"></span><span id=\"falcon-editor-title\" class=\"Mrphs-toolsNav__menuitem--title\">Falcon Editor</span></a></li>");
  },
  courseEditButton: function courseEditButton() {
    $('<a class="mr-4 edit-course-name-button" href="javascript:;"> <i class="fa fa-pencil"></i> Edit</a>').insertBefore('.toolMenus');
  },
  courseEditModal: function courseEditModal() {
    var $courseNameEditModal = "<div class=\"modal fade\" style=\"z-index: 10000\" id=\"edit-course-title-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"edit-course-title-modal-label\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-sm\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\" id=\"edit-course-title-modal-label\">Edit title for this course</h5>\n            </div>\n            <div class=\"modal-body\">\n                Falcon allows you to give this course <span class=\"badge\" id=\"old-course-name\">ENGSCI 4498F 001 SP21</span> a custom name.\n\n                <div class=\"row mt-4\">\n                    <div class=\"col-md-12\">\n                        <input autofocus type=\"text\" id=\"custom-course-name-text\" class=\"form-control\" placeholder=\"E.g. Physics\">\n                        <small class=\"help-block\">Leave empty to reset to normal.</small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                <button type=\"button\" id=\"save-custom-course-title-button\" class=\"btn btn-primary\">Save Title</button>\n            </div>\n        </div>\n    </div>\n</div>";

    if (!$('#edit-course-title-modal').length) {
      $('.Mrphs-pagebody').prepend($courseNameEditModal);
    }
  },
  falconResources: function falconResources() {
    if ($('.page-header h1').html() === 'Site Resources') {
      $("<div id=\"file-manager\"></div><div id=\"photo-popup\"></div><button id=\"toggle-original-resource\" class=\"mt-5\">Show Original Resources</button>").insertAfter($('.page-header'));
      $('#showForm').hide();
      $("<h1 id=\"loading-resources\">Loading resources...</h1>").insertAfter('.page-header');
    }
  },
  initAnimations: function initAnimations() {
    $('.Mrphs-pagebody').addClass('animate__animated animate__fadeIn');
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FalconInterfaceInjector);

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v2.2.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:23Z
 */

(function( global, factory ) {

	if (  true && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var arr = [];

var document = window.document;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "2.2.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isPlainObject: function( obj ) {
		var key;

		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		// Not own constructor property must be Object
		if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {

			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf( "use strict" ) === 1 ) {
				script = document.createElement( "script" );
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {

				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval

				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {

						// Inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE9-10 only
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	register: function( owner, initial ) {
		var value = initial || {};

		// If it is a node unlikely to be stringify-ed or looped over
		// use plain assignment
		if ( owner.nodeType ) {
			owner[ this.expando ] = value;

		// Otherwise secure it in a non-enumerable, non-writable property
		// configurability must be true to allow the property to be
		// deleted with the delete operator
		} else {
			Object.defineProperty( owner, this.expando, {
				value: value,
				writable: true,
				configurable: true
			} );
		}
		return owner[ this.expando ];
	},
	cache: function( owner ) {

		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return an empty object.
		if ( !acceptData( owner ) ) {
			return {};
		}

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ prop ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :
			owner[ this.expando ] && owner[ this.expando ][ key ];
	},
	access: function( owner, key, value ) {
		var stored;

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase( key ) );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key === undefined ) {
			this.register( owner );

		} else {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );

				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;

			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <= 35-45+
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://code.google.com/p/chromium/issues/detail?id=378607
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data, camelKey;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// with the key as-is
				data = dataUser.get( elem, key ) ||

					// Try to find dashed key if it exists (gh-2779)
					// This is for 2.2.x only
					dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

				if ( data !== undefined ) {
					return data;
				}

				camelKey = jQuery.camelCase( key );

				// Attempt to get data from the cache
				// with the key camelized
				data = dataUser.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			camelKey = jQuery.camelCase( key );
			this.each( function() {

				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = dataUser.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				dataUser.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
					dataUser.set( this, key, value );
				}
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE9
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE9-11+
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android<4.1, PhantomJS<2
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0-4.3, Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
			"screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {
	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <= 35-45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {
		div.style.cssText =

			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );
	}

	jQuery.extend( support, {
		pixelPosition: function() {

			// This test is executed only once but we still do memoizing
			// since we can use the boxSizingReliable pre-computing.
			// No need to check if the test was already performed, though.
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
			// since that compresses better and they're computed together anyway.
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( boxSizingReliableVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		},
		reliableMarginRight: function() {

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			// This support function is only executed once so no memoizing is needed.
			var ret,
				marginDiv = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			marginDiv.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;box-sizing:content-box;" +
				"display:block;margin:0;border:0;padding:0";
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";
			documentElement.appendChild( container );

			ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

			documentElement.removeChild( container );
			div.removeChild( marginDiv );

			return ret;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );
	ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

	// Support: Opera 12.1x only
	// Fall back to style even without computed
	// computed is undefined for elems on document fragments
	if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
		ret = jQuery.style( elem, name );
	}

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// http://dev.w3.org/csswg/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE9-11+
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = dataPriv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = dataPriv.access(
					elem,
					"olddisplay",
					defaultDisplay( elem.nodeName )
				);
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				dataPriv.set(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = dataPriv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;

			dataPriv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {
	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
		opt.duration : opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// Handle most common string cases
					ret.replace( rreturn, "" ) :

					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE8-11+
			// IE throws exception if url is malformed, e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE8-11+
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


jQuery.expr.filters.hidden = function( elem ) {
	return !jQuery.expr.filters.visible( elem );
};
jQuery.expr.filters.visible = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	// Use OR instead of AND as the element is not visible if either is true
	// See tickets #10406 and #13132
	return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE9
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE9
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		box = elem.getBoundingClientRect();
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},
	size: function() {
		return this.length;
	}
} );

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));


/***/ }),

/***/ "./node_modules/pjax/index.js":
/*!************************************!*\
  !*** ./node_modules/pjax/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var executeScripts = __webpack_require__(/*! ./lib/execute-scripts */ "./node_modules/pjax/lib/execute-scripts.js");
var forEachEls = __webpack_require__(/*! ./lib/foreach-els */ "./node_modules/pjax/lib/foreach-els.js");
var parseOptions = __webpack_require__(/*! ./lib/parse-options */ "./node_modules/pjax/lib/parse-options.js");
var switches = __webpack_require__(/*! ./lib/switches */ "./node_modules/pjax/lib/switches.js");
var newUid = __webpack_require__(/*! ./lib/uniqueid */ "./node_modules/pjax/lib/uniqueid.js");

var on = __webpack_require__(/*! ./lib/events/on */ "./node_modules/pjax/lib/events/on.js");
var trigger = __webpack_require__(/*! ./lib/events/trigger */ "./node_modules/pjax/lib/events/trigger.js");

var clone = __webpack_require__(/*! ./lib/util/clone */ "./node_modules/pjax/lib/util/clone.js");
var contains = __webpack_require__(/*! ./lib/util/contains */ "./node_modules/pjax/lib/util/contains.js");
var extend = __webpack_require__(/*! ./lib/util/extend */ "./node_modules/pjax/lib/util/extend.js");
var noop = __webpack_require__(/*! ./lib/util/noop */ "./node_modules/pjax/lib/util/noop.js");

var Pjax = function(options) {
  this.state = {
    numPendingSwitches: 0,
    href: null,
    options: null
  };

  this.options = parseOptions(options);
  this.log("Pjax options", this.options);

  if (this.options.scrollRestoration && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  this.maxUid = this.lastUid = newUid();

  this.parseDOM(document);

  on(
    window,
    "popstate",
    function(st) {
      if (st.state) {
        var opt = clone(this.options);
        opt.url = st.state.url;
        opt.title = st.state.title;
        // Since state already exists, prevent it from being pushed again
        opt.history = false;
        opt.scrollPos = st.state.scrollPos;
        if (st.state.uid < this.lastUid) {
          opt.backward = true;
        } else {
          opt.forward = true;
        }
        this.lastUid = st.state.uid;

        // @todo implement history cache here, based on uid
        this.loadUrl(st.state.url, opt);
      }
    }.bind(this)
  );
};

Pjax.switches = switches;

Pjax.prototype = {
  log: __webpack_require__(/*! ./lib/proto/log */ "./node_modules/pjax/lib/proto/log.js"),

  getElements: function(el) {
    return el.querySelectorAll(this.options.elements);
  },

  parseDOM: function(el) {
    var parseElement = __webpack_require__(/*! ./lib/proto/parse-element */ "./node_modules/pjax/lib/proto/parse-element.js");
    forEachEls(this.getElements(el), parseElement, this);
  },

  refresh: function(el) {
    this.parseDOM(el || document);
  },

  reload: function() {
    window.location.reload();
  },

  attachLink: __webpack_require__(/*! ./lib/proto/attach-link */ "./node_modules/pjax/lib/proto/attach-link.js"),

  attachForm: __webpack_require__(/*! ./lib/proto/attach-form */ "./node_modules/pjax/lib/proto/attach-form.js"),

  forEachSelectors: function(cb, context, DOMcontext) {
    return __webpack_require__(/*! ./lib/foreach-selectors */ "./node_modules/pjax/lib/foreach-selectors.js").bind(this)(
      this.options.selectors,
      cb,
      context,
      DOMcontext
    );
  },

  switchSelectors: function(selectors, fromEl, toEl, options) {
    return __webpack_require__(/*! ./lib/switches-selectors */ "./node_modules/pjax/lib/switches-selectors.js").bind(this)(
      this.options.switches,
      this.options.switchesOptions,
      selectors,
      fromEl,
      toEl,
      options
    );
  },

  latestChance: function(href) {
    window.location = href;
  },

  onSwitch: function() {
    trigger(window, "resize scroll");

    this.state.numPendingSwitches--;

    // debounce calls, so we only run this once after all switches are finished.
    if (this.state.numPendingSwitches === 0) {
      this.afterAllSwitches();
    }
  },

  loadContent: function(html, options) {
    if (typeof html !== "string") {
      trigger(document, "pjax:complete pjax:error", options);

      return;
    }

    var tmpEl = document.implementation.createHTMLDocument("pjax");

    // parse HTML attributes to copy them
    // since we are forced to use documentElement.innerHTML (outerHTML can't be used for <html>)
    var htmlRegex = /<html[^>]+>/gi;
    var htmlAttribsRegex = /\s?[a-z:]+(?:=['"][^'">]+['"])*/gi;
    var matches = html.match(htmlRegex);
    if (matches && matches.length) {
      matches = matches[0].match(htmlAttribsRegex);
      if (matches.length) {
        matches.shift();
        matches.forEach(function(htmlAttrib) {
          var attr = htmlAttrib.trim().split("=");
          if (attr.length === 1) {
            tmpEl.documentElement.setAttribute(attr[0], true);
          } else {
            tmpEl.documentElement.setAttribute(attr[0], attr[1].slice(1, -1));
          }
        });
      }
    }

    tmpEl.documentElement.innerHTML = html;
    this.log(
      "load content",
      tmpEl.documentElement.attributes,
      tmpEl.documentElement.innerHTML.length
    );

    // Clear out any focused controls before inserting new page contents.
    if (
      document.activeElement &&
      contains(document, this.options.selectors, document.activeElement)
    ) {
      try {
        document.activeElement.blur();
      } catch (e) {} // eslint-disable-line no-empty
    }

    this.switchSelectors(this.options.selectors, tmpEl, document, options);
  },

  abortRequest: __webpack_require__(/*! ./lib/abort-request */ "./node_modules/pjax/lib/abort-request.js"),

  doRequest: __webpack_require__(/*! ./lib/send-request */ "./node_modules/pjax/lib/send-request.js"),

  handleResponse: __webpack_require__(/*! ./lib/proto/handle-response */ "./node_modules/pjax/lib/proto/handle-response.js"),

  loadUrl: function(href, options) {
    options =
      typeof options === "object"
        ? extend({}, this.options, options)
        : clone(this.options);

    this.log("load href", href, options);

    // Abort any previous request
    this.abortRequest(this.request);

    trigger(document, "pjax:send", options);

    // Do the request
    this.request = this.doRequest(
      href,
      options,
      this.handleResponse.bind(this)
    );
  },

  afterAllSwitches: function() {
    // FF bug: Won’t autofocus fields that are inserted via JS.
    // This behavior is incorrect. So if theres no current focus, autofocus
    // the last field.
    //
    // http://www.w3.org/html/wg/drafts/html/master/forms.html
    var autofocusEl = Array.prototype.slice
      .call(document.querySelectorAll("[autofocus]"))
      .pop();
    if (autofocusEl && document.activeElement !== autofocusEl) {
      autofocusEl.focus();
    }

    // execute scripts when DOM have been completely updated
    this.options.selectors.forEach(function(selector) {
      forEachEls(document.querySelectorAll(selector), function(el) {
        executeScripts(el);
      });
    });

    var state = this.state;

    if (state.options.history) {
      if (!window.history.state) {
        this.lastUid = this.maxUid = newUid();
        window.history.replaceState(
          {
            url: window.location.href,
            title: document.title,
            uid: this.maxUid,
            scrollPos: [0, 0]
          },
          document.title
        );
      }

      // Update browser history
      this.lastUid = this.maxUid = newUid();

      window.history.pushState(
        {
          url: state.href,
          title: state.options.title,
          uid: this.maxUid,
          scrollPos: [0, 0]
        },
        state.options.title,
        state.href
      );
    }

    this.forEachSelectors(function(el) {
      this.parseDOM(el);
    }, this);

    // Fire Events
    trigger(document, "pjax:complete pjax:success", state.options);

    if (typeof state.options.analytics === "function") {
      state.options.analytics();
    }

    if (state.options.history) {
      // First parse url and check for hash to override scroll
      var a = document.createElement("a");
      a.href = this.state.href;
      if (a.hash) {
        var name = a.hash.slice(1);
        name = decodeURIComponent(name);

        var curtop = 0;
        var target =
          document.getElementById(name) || document.getElementsByName(name)[0];
        if (target) {
          // http://stackoverflow.com/questions/8111094/cross-browser-javascript-function-to-find-actual-position-of-an-element-in-page
          if (target.offsetParent) {
            do {
              curtop += target.offsetTop;

              target = target.offsetParent;
            } while (target);
          }
        }
        window.scrollTo(0, curtop);
      } else if (state.options.scrollTo !== false) {
        // Scroll page to top on new page load
        if (state.options.scrollTo.length > 1) {
          window.scrollTo(state.options.scrollTo[0], state.options.scrollTo[1]);
        } else {
          window.scrollTo(0, state.options.scrollTo);
        }
      }
    } else if (state.options.scrollRestoration && state.options.scrollPos) {
      window.scrollTo(state.options.scrollPos[0], state.options.scrollPos[1]);
    }

    this.state = {
      numPendingSwitches: 0,
      href: null,
      options: null
    };
  }
};

Pjax.isSupported = __webpack_require__(/*! ./lib/is-supported */ "./node_modules/pjax/lib/is-supported.js");

// arguably could do `if( require("./lib/is-supported")()) {` but that might be a little to simple
if (Pjax.isSupported()) {
  module.exports = Pjax;
}
// if there isn’t required browser functions, returning stupid api
else {
  var stupidPjax = noop;
  for (var key in Pjax.prototype) {
    if (
      Pjax.prototype.hasOwnProperty(key) &&
      typeof Pjax.prototype[key] === "function"
    ) {
      stupidPjax[key] = noop;
    }
  }

  module.exports = stupidPjax;
}


/***/ }),

/***/ "./node_modules/pjax/lib/abort-request.js":
/*!************************************************!*\
  !*** ./node_modules/pjax/lib/abort-request.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var noop = __webpack_require__(/*! ./util/noop */ "./node_modules/pjax/lib/util/noop.js");

module.exports = function(request) {
  if (request && request.readyState < 4) {
    request.onreadystatechange = noop;
    request.abort();
  }
};


/***/ }),

/***/ "./node_modules/pjax/lib/eval-script.js":
/*!**********************************************!*\
  !*** ./node_modules/pjax/lib/eval-script.js ***!
  \**********************************************/
/***/ ((module) => {

module.exports = function(el) {
  var code = el.text || el.textContent || el.innerHTML || "";
  var src = el.src || "";
  var parent =
    el.parentNode || document.querySelector("head") || document.documentElement;
  var script = document.createElement("script");

  if (code.match("document.write")) {
    if (console && console.log) {
      console.log(
        "Script contains document.write. Can’t be executed correctly. Code skipped ",
        el
      );
    }
    return false;
  }

  script.type = "text/javascript";
  script.id = el.id;

  /* istanbul ignore if */
  if (src !== "") {
    script.src = src;
    script.async = false; // force synchronous loading of peripheral JS
  }

  if (code !== "") {
    try {
      script.appendChild(document.createTextNode(code));
    } catch (e) {
      /* istanbul ignore next */
      // old IEs have funky script nodes
      script.text = code;
    }
  }

  // execute
  parent.appendChild(script);
  // avoid pollution only in head or body tags
  if (
    (parent instanceof HTMLHeadElement || parent instanceof HTMLBodyElement) &&
    parent.contains(script)
  ) {
    parent.removeChild(script);
  }

  return true;
};


/***/ }),

/***/ "./node_modules/pjax/lib/events/on.js":
/*!********************************************!*\
  !*** ./node_modules/pjax/lib/events/on.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var forEachEls = __webpack_require__(/*! ../foreach-els */ "./node_modules/pjax/lib/foreach-els.js");

module.exports = function(els, events, listener, useCapture) {
  events = typeof events === "string" ? events.split(" ") : events;

  events.forEach(function(e) {
    forEachEls(els, function(el) {
      el.addEventListener(e, listener, useCapture);
    });
  });
};


/***/ }),

/***/ "./node_modules/pjax/lib/events/trigger.js":
/*!*************************************************!*\
  !*** ./node_modules/pjax/lib/events/trigger.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var forEachEls = __webpack_require__(/*! ../foreach-els */ "./node_modules/pjax/lib/foreach-els.js");

module.exports = function(els, events, opts) {
  events = typeof events === "string" ? events.split(" ") : events;

  events.forEach(function(e) {
    var event;
    event = document.createEvent("HTMLEvents");
    event.initEvent(e, true, true);
    event.eventName = e;
    if (opts) {
      Object.keys(opts).forEach(function(key) {
        event[key] = opts[key];
      });
    }

    forEachEls(els, function(el) {
      var domFix = false;
      if (!el.parentNode && el !== document && el !== window) {
        // THANK YOU IE (9/10/11)
        // dispatchEvent doesn't work if the element is not in the DOM
        domFix = true;
        document.body.appendChild(el);
      }
      el.dispatchEvent(event);
      if (domFix) {
        el.parentNode.removeChild(el);
      }
    });
  });
};


/***/ }),

/***/ "./node_modules/pjax/lib/execute-scripts.js":
/*!**************************************************!*\
  !*** ./node_modules/pjax/lib/execute-scripts.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var forEachEls = __webpack_require__(/*! ./foreach-els */ "./node_modules/pjax/lib/foreach-els.js");
var evalScript = __webpack_require__(/*! ./eval-script */ "./node_modules/pjax/lib/eval-script.js");
// Finds and executes scripts (used for newly added elements)
// Needed since innerHTML does not run scripts
module.exports = function(el) {
  if (el.tagName.toLowerCase() === "script") {
    evalScript(el);
  }

  forEachEls(el.querySelectorAll("script"), function(script) {
    if (!script.type || script.type.toLowerCase() === "text/javascript") {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      evalScript(script);
    }
  });
};


/***/ }),

/***/ "./node_modules/pjax/lib/foreach-els.js":
/*!**********************************************!*\
  !*** ./node_modules/pjax/lib/foreach-els.js ***!
  \**********************************************/
/***/ ((module) => {

/* global HTMLCollection: true */

module.exports = function(els, fn, context) {
  if (
    els instanceof HTMLCollection ||
    els instanceof NodeList ||
    els instanceof Array
  ) {
    return Array.prototype.forEach.call(els, fn, context);
  }
  // assume simple DOM element
  return fn.call(context, els);
};


/***/ }),

/***/ "./node_modules/pjax/lib/foreach-selectors.js":
/*!****************************************************!*\
  !*** ./node_modules/pjax/lib/foreach-selectors.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var forEachEls = __webpack_require__(/*! ./foreach-els */ "./node_modules/pjax/lib/foreach-els.js");

module.exports = function(selectors, cb, context, DOMcontext) {
  DOMcontext = DOMcontext || document;
  selectors.forEach(function(selector) {
    forEachEls(DOMcontext.querySelectorAll(selector), cb, context);
  });
};


/***/ }),

/***/ "./node_modules/pjax/lib/is-supported.js":
/*!***********************************************!*\
  !*** ./node_modules/pjax/lib/is-supported.js ***!
  \***********************************************/
/***/ ((module) => {

module.exports = function() {
  // Borrowed wholesale from https://github.com/defunkt/jquery-pjax
  return (
    window.history &&
    window.history.pushState &&
    window.history.replaceState &&
    // pushState isn’t reliable on iOS until 5.
    !navigator.userAgent.match(
      /((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/
    )
  );
};


/***/ }),

/***/ "./node_modules/pjax/lib/parse-options.js":
/*!************************************************!*\
  !*** ./node_modules/pjax/lib/parse-options.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global _gaq: true, ga: true */

var defaultSwitches = __webpack_require__(/*! ./switches */ "./node_modules/pjax/lib/switches.js");

module.exports = function(options) {
  options = options || {};
  options.elements = options.elements || "a[href], form[action]";
  options.selectors = options.selectors || ["title", ".js-Pjax"];
  options.switches = options.switches || {};
  options.switchesOptions = options.switchesOptions || {};
  options.history =
    typeof options.history === "undefined" ? true : options.history;
  options.analytics =
    typeof options.analytics === "function" || options.analytics === false
      ? options.analytics
      : defaultAnalytics;
  options.scrollTo =
    typeof options.scrollTo === "undefined" ? 0 : options.scrollTo;
  options.scrollRestoration =
    typeof options.scrollRestoration !== "undefined"
      ? options.scrollRestoration
      : true;
  options.cacheBust =
    typeof options.cacheBust === "undefined" ? true : options.cacheBust;
  options.debug = options.debug || false;
  options.timeout = options.timeout || 0;
  options.currentUrlFullReload =
    typeof options.currentUrlFullReload === "undefined"
      ? false
      : options.currentUrlFullReload;

  // We can’t replace body.outerHTML or head.outerHTML.
  // It creates a bug where a new body or head are created in the DOM.
  // If you set head.outerHTML, a new body tag is appended, so the DOM has 2 body nodes, and vice versa
  if (!options.switches.head) {
    options.switches.head = defaultSwitches.switchElementsAlt;
  }
  if (!options.switches.body) {
    options.switches.body = defaultSwitches.switchElementsAlt;
  }

  return options;
};

/* istanbul ignore next */
function defaultAnalytics() {
  if (window._gaq) {
    _gaq.push(["_trackPageview"]);
  }
  if (window.ga) {
    ga("send", "pageview", { page: location.pathname, title: document.title });
  }
}


/***/ }),

/***/ "./node_modules/pjax/lib/proto/attach-form.js":
/*!****************************************************!*\
  !*** ./node_modules/pjax/lib/proto/attach-form.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var on = __webpack_require__(/*! ../events/on */ "./node_modules/pjax/lib/events/on.js");
var clone = __webpack_require__(/*! ../util/clone */ "./node_modules/pjax/lib/util/clone.js");

var attrState = "data-pjax-state";

var formAction = function(el, event) {
  if (isDefaultPrevented(event)) {
    return;
  }

  // Since loadUrl modifies options and we may add our own modifications below,
  // clone it so the changes don't persist
  var options = clone(this.options);

  // Initialize requestOptions
  options.requestOptions = {
    requestUrl: el.getAttribute("action") || window.location.href,
    requestMethod: el.getAttribute("method") || "GET"
  };

  // create a testable virtual link of the form action
  var virtLinkElement = document.createElement("a");
  virtLinkElement.setAttribute("href", options.requestOptions.requestUrl);

  var attrValue = checkIfShouldAbort(virtLinkElement, options);
  if (attrValue) {
    el.setAttribute(attrState, attrValue);
    return;
  }

  event.preventDefault();

  if (el.enctype === "multipart/form-data") {
    options.requestOptions.formData = new FormData(el);
  } else {
    options.requestOptions.requestParams = parseFormElements(el);
  }

  el.setAttribute(attrState, "submit");

  options.triggerElement = el;
  this.loadUrl(virtLinkElement.href, options);
};

function parseFormElements(el) {
  var requestParams = [];
  var formElements = el.elements;

  for (var i = 0; i < formElements.length; i++) {
    var element = formElements[i];
    var tagName = element.tagName.toLowerCase();
    // jscs:disable disallowImplicitTypeConversion
    if (
      !!element.name &&
      element.attributes !== undefined &&
      tagName !== "button"
    ) {
      // jscs:enable disallowImplicitTypeConversion
      var type = element.attributes.type;

      if (
        !type ||
        (type.value !== "checkbox" && type.value !== "radio") ||
        element.checked
      ) {
        // Build array of values to submit
        var values = [];

        if (tagName === "select") {
          var opt;

          for (var j = 0; j < element.options.length; j++) {
            opt = element.options[j];
            if (opt.selected && !opt.disabled) {
              values.push(opt.hasAttribute("value") ? opt.value : opt.text);
            }
          }
        } else {
          values.push(element.value);
        }

        for (var k = 0; k < values.length; k++) {
          requestParams.push({
            name: encodeURIComponent(element.name),
            value: encodeURIComponent(values[k])
          });
        }
      }
    }
  }

  return requestParams;
}

function checkIfShouldAbort(virtLinkElement, options) {
  // Ignore external links.
  if (
    virtLinkElement.protocol !== window.location.protocol ||
    virtLinkElement.host !== window.location.host
  ) {
    return "external";
  }

  // Ignore click if we are on an anchor on the same page
  if (
    virtLinkElement.hash &&
    virtLinkElement.href.replace(virtLinkElement.hash, "") ===
      window.location.href.replace(location.hash, "")
  ) {
    return "anchor";
  }

  // Ignore empty anchor "foo.html#"
  if (virtLinkElement.href === window.location.href.split("#")[0] + "#") {
    return "anchor-empty";
  }

  // if declared as a full reload, just normally submit the form
  if (
    options.currentUrlFullReload &&
    virtLinkElement.href === window.location.href.split("#")[0]
  ) {
    return "reload";
  }
}

var isDefaultPrevented = function(event) {
  return event.defaultPrevented || event.returnValue === false;
};

module.exports = function(el) {
  var that = this;

  el.setAttribute(attrState, "");

  on(el, "submit", function(event) {
    formAction.call(that, el, event);
  });
};


/***/ }),

/***/ "./node_modules/pjax/lib/proto/attach-link.js":
/*!****************************************************!*\
  !*** ./node_modules/pjax/lib/proto/attach-link.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var on = __webpack_require__(/*! ../events/on */ "./node_modules/pjax/lib/events/on.js");
var clone = __webpack_require__(/*! ../util/clone */ "./node_modules/pjax/lib/util/clone.js");

var attrState = "data-pjax-state";

var linkAction = function(el, event) {
  if (isDefaultPrevented(event)) {
    return;
  }

  // Since loadUrl modifies options and we may add our own modifications below,
  // clone it so the changes don't persist
  var options = clone(this.options);

  var attrValue = checkIfShouldAbort(el, event);
  if (attrValue) {
    el.setAttribute(attrState, attrValue);
    return;
  }

  event.preventDefault();

  // don’t do "nothing" if user try to reload the page by clicking the same link twice
  if (
    this.options.currentUrlFullReload &&
    el.href === window.location.href.split("#")[0]
  ) {
    el.setAttribute(attrState, "reload");
    this.reload();
    return;
  }

  el.setAttribute(attrState, "load");

  options.triggerElement = el;
  this.loadUrl(el.href, options);
};

function checkIfShouldAbort(el, event) {
  // Don’t break browser special behavior on links (like page in new window)
  if (
    event.which > 1 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return "modifier";
  }

  // we do test on href now to prevent unexpected behavior if for some reason
  // user have href that can be dynamically updated

  // Ignore external links.
  if (
    el.protocol !== window.location.protocol ||
    el.host !== window.location.host
  ) {
    return "external";
  }

  // Ignore anchors on the same page (keep native behavior)
  if (
    el.hash &&
    el.href.replace(el.hash, "") ===
      window.location.href.replace(location.hash, "")
  ) {
    return "anchor";
  }

  // Ignore empty anchor "foo.html#"
  if (el.href === window.location.href.split("#")[0] + "#") {
    return "anchor-empty";
  }
}

var isDefaultPrevented = function(event) {
  return event.defaultPrevented || event.returnValue === false;
};

module.exports = function(el) {
  var that = this;

  el.setAttribute(attrState, "");

  on(el, "click", function(event) {
    linkAction.call(that, el, event);
  });

  on(
    el,
    "keyup",
    function(event) {
      if (event.keyCode === 13) {
        linkAction.call(that, el, event);
      }
    }.bind(this)
  );
};


/***/ }),

/***/ "./node_modules/pjax/lib/proto/handle-response.js":
/*!********************************************************!*\
  !*** ./node_modules/pjax/lib/proto/handle-response.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var clone = __webpack_require__(/*! ../util/clone */ "./node_modules/pjax/lib/util/clone.js");
var newUid = __webpack_require__(/*! ../uniqueid */ "./node_modules/pjax/lib/uniqueid.js");
var trigger = __webpack_require__(/*! ../events/trigger */ "./node_modules/pjax/lib/events/trigger.js");

module.exports = function(responseText, request, href, options) {
  options = clone(options || this.options);
  options.request = request;

  // Fail if unable to load HTML via AJAX
  if (responseText === false) {
    trigger(document, "pjax:complete pjax:error", options);

    return;
  }

  // push scroll position to history
  var currentState = window.history.state || {};
  window.history.replaceState(
    {
      url: currentState.url || window.location.href,
      title: currentState.title || document.title,
      uid: currentState.uid || newUid(),
      scrollPos: [
        document.documentElement.scrollLeft || document.body.scrollLeft,
        document.documentElement.scrollTop || document.body.scrollTop
      ]
    },
    document.title,
    window.location.href
  );

  // Check for redirects
  var oldHref = href;
  if (request.responseURL) {
    if (href !== request.responseURL) {
      href = request.responseURL;
    }
  } else if (request.getResponseHeader("X-PJAX-URL")) {
    href = request.getResponseHeader("X-PJAX-URL");
  } else if (request.getResponseHeader("X-XHR-Redirected-To")) {
    href = request.getResponseHeader("X-XHR-Redirected-To");
  }

  // Add back the hash if it was removed
  var a = document.createElement("a");
  a.href = oldHref;
  var oldHash = a.hash;
  a.href = href;
  if (oldHash && !a.hash) {
    a.hash = oldHash;
    href = a.href;
  }

  this.state.href = href;
  this.state.options = options;

  try {
    this.loadContent(responseText, options);
  } catch (e) {
    trigger(document, "pjax:error", options);

    if (!this.options.debug) {
      if (console && console.error) {
        console.error("Pjax switch fail: ", e);
      }
      return this.latestChance(href);
    } else {
      throw e;
    }
  }
};


/***/ }),

/***/ "./node_modules/pjax/lib/proto/log.js":
/*!********************************************!*\
  !*** ./node_modules/pjax/lib/proto/log.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = function() {
  if (this.options.debug && console) {
    if (typeof console.log === "function") {
      console.log.apply(console, arguments);
    }
    // IE is weird
    else if (console.log) {
      console.log(arguments);
    }
  }
};


/***/ }),

/***/ "./node_modules/pjax/lib/proto/parse-element.js":
/*!******************************************************!*\
  !*** ./node_modules/pjax/lib/proto/parse-element.js ***!
  \******************************************************/
/***/ ((module) => {

var attrState = "data-pjax-state";

module.exports = function(el) {
  switch (el.tagName.toLowerCase()) {
    case "a":
      // only attach link if el does not already have link attached
      if (!el.hasAttribute(attrState)) {
        this.attachLink(el);
      }
      break;

    case "form":
      // only attach link if el does not already have link attached
      if (!el.hasAttribute(attrState)) {
        this.attachForm(el);
      }
      break;

    default:
      throw "Pjax can only be applied on <a> or <form> submit";
  }
};


/***/ }),

/***/ "./node_modules/pjax/lib/send-request.js":
/*!***********************************************!*\
  !*** ./node_modules/pjax/lib/send-request.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var updateQueryString = __webpack_require__(/*! ./util/update-query-string */ "./node_modules/pjax/lib/util/update-query-string.js");

module.exports = function(location, options, callback) {
  options = options || {};
  var queryString;
  var requestOptions = options.requestOptions || {};
  var requestMethod = (requestOptions.requestMethod || "GET").toUpperCase();
  var requestParams = requestOptions.requestParams || null;
  var formData = requestOptions.formData || null;
  var requestPayload = null;
  var request = new XMLHttpRequest();
  var timeout = options.timeout || 0;

  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      if (request.status === 200) {
        callback(request.responseText, request, location, options);
      } else if (request.status !== 0) {
        callback(null, request, location, options);
      }
    }
  };

  request.onerror = function(e) {
    console.log(e);
    callback(null, request, location, options);
  };

  request.ontimeout = function() {
    callback(null, request, location, options);
  };

  // Prepare the request payload for forms, if available
  if (requestParams && requestParams.length) {
    // Build query string
    queryString = requestParams
      .map(function(param) {
        return param.name + "=" + param.value;
      })
      .join("&");

    switch (requestMethod) {
      case "GET":
        // Reset query string to avoid an issue with repeat submissions where checkboxes that were
        // previously checked are incorrectly preserved
        location = location.split("?")[0];

        // Append new query string
        location += "?" + queryString;
        break;

      case "POST":
        // Send query string as request payload
        requestPayload = queryString;
        break;
    }
  } else if (formData) {
    requestPayload = formData;
  }

  // Add a timestamp as part of the query string if cache busting is enabled
  if (options.cacheBust) {
    location = updateQueryString(location, "t", Date.now());
  }

  request.open(requestMethod, location, true);
  request.timeout = timeout;
  request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  request.setRequestHeader("X-PJAX", "true");
  request.setRequestHeader(
    "X-PJAX-Selectors",
    JSON.stringify(options.selectors)
  );

  // Send the proper header information for POST forms
  if (requestPayload && requestMethod === "POST" && !formData) {
    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
  }

  request.send(requestPayload);

  return request;
};


/***/ }),

/***/ "./node_modules/pjax/lib/switches-selectors.js":
/*!*****************************************************!*\
  !*** ./node_modules/pjax/lib/switches-selectors.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var forEachEls = __webpack_require__(/*! ./foreach-els */ "./node_modules/pjax/lib/foreach-els.js");

var defaultSwitches = __webpack_require__(/*! ./switches */ "./node_modules/pjax/lib/switches.js");

module.exports = function(
  switches,
  switchesOptions,
  selectors,
  fromEl,
  toEl,
  options
) {
  var switchesQueue = [];

  selectors.forEach(function(selector) {
    var newEls = fromEl.querySelectorAll(selector);
    var oldEls = toEl.querySelectorAll(selector);
    if (this.log) {
      this.log("Pjax switch", selector, newEls, oldEls);
    }
    if (newEls.length !== oldEls.length) {
      throw "DOM doesn’t look the same on new loaded page: ’" +
        selector +
        "’ - new " +
        newEls.length +
        ", old " +
        oldEls.length;
    }

    forEachEls(
      newEls,
      function(newEl, i) {
        var oldEl = oldEls[i];
        if (this.log) {
          this.log("newEl", newEl, "oldEl", oldEl);
        }

        var callback = switches[selector]
          ? switches[selector].bind(
              this,
              oldEl,
              newEl,
              options,
              switchesOptions[selector]
            )
          : defaultSwitches.outerHTML.bind(this, oldEl, newEl, options);

        switchesQueue.push(callback);
      },
      this
    );
  }, this);

  this.state.numPendingSwitches = switchesQueue.length;

  switchesQueue.forEach(function(queuedSwitch) {
    queuedSwitch();
  });
};


/***/ }),

/***/ "./node_modules/pjax/lib/switches.js":
/*!*******************************************!*\
  !*** ./node_modules/pjax/lib/switches.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var on = __webpack_require__(/*! ./events/on */ "./node_modules/pjax/lib/events/on.js");

module.exports = {
  outerHTML: function(oldEl, newEl) {
    oldEl.outerHTML = newEl.outerHTML;
    this.onSwitch();
  },

  innerHTML: function(oldEl, newEl) {
    oldEl.innerHTML = newEl.innerHTML;

    if (newEl.className === "") {
      oldEl.removeAttribute("class");
    } else {
      oldEl.className = newEl.className;
    }

    this.onSwitch();
  },

  switchElementsAlt: function(oldEl, newEl) {
    oldEl.innerHTML = newEl.innerHTML;

    // Copy attributes from the new element to the old one
    if (newEl.hasAttributes()) {
      var attrs = newEl.attributes;
      for (var i = 0; i < attrs.length; i++) {
        oldEl.attributes.setNamedItem(attrs[i].cloneNode());
      }
    }

    this.onSwitch();
  },

  // Equivalent to outerHTML(), but doesn't require switchElementsAlt() for <head> and <body>
  replaceNode: function(oldEl, newEl) {
    oldEl.parentNode.replaceChild(newEl, oldEl);
    this.onSwitch();
  },

  sideBySide: function(oldEl, newEl, options, switchOptions) {
    var forEach = Array.prototype.forEach;
    var elsToRemove = [];
    var elsToAdd = [];
    var fragToAppend = document.createDocumentFragment();
    var animationEventNames =
      "animationend webkitAnimationEnd MSAnimationEnd oanimationend";
    var animatedElsNumber = 0;
    var sexyAnimationEnd = function(e) {
      if (e.target !== e.currentTarget) {
        // end triggered by an animation on a child
        return;
      }

      animatedElsNumber--;
      if (animatedElsNumber <= 0 && elsToRemove) {
        elsToRemove.forEach(function(el) {
          // browsing quickly can make the el
          // already removed by last page update ?
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
        });

        elsToAdd.forEach(function(el) {
          el.className = el.className.replace(
            el.getAttribute("data-pjax-classes"),
            ""
          );
          el.removeAttribute("data-pjax-classes");
        });

        elsToAdd = null; // free memory
        elsToRemove = null; // free memory

        // this is to trigger some repaint (example: picturefill)
        this.onSwitch();
      }
    }.bind(this);

    switchOptions = switchOptions || {};

    forEach.call(oldEl.childNodes, function(el) {
      elsToRemove.push(el);
      if (el.classList && !el.classList.contains("js-Pjax-remove")) {
        // for fast switch, clean element that just have been added, & not cleaned yet.
        if (el.hasAttribute("data-pjax-classes")) {
          el.className = el.className.replace(
            el.getAttribute("data-pjax-classes"),
            ""
          );
          el.removeAttribute("data-pjax-classes");
        }
        el.classList.add("js-Pjax-remove");
        if (switchOptions.callbacks && switchOptions.callbacks.removeElement) {
          switchOptions.callbacks.removeElement(el);
        }
        if (switchOptions.classNames) {
          el.className +=
            " " +
            switchOptions.classNames.remove +
            " " +
            (options.backward
              ? switchOptions.classNames.backward
              : switchOptions.classNames.forward);
        }
        animatedElsNumber++;
        on(el, animationEventNames, sexyAnimationEnd, true);
      }
    });

    forEach.call(newEl.childNodes, function(el) {
      if (el.classList) {
        var addClasses = "";
        if (switchOptions.classNames) {
          addClasses =
            " js-Pjax-add " +
            switchOptions.classNames.add +
            " " +
            (options.backward
              ? switchOptions.classNames.forward
              : switchOptions.classNames.backward);
        }
        if (switchOptions.callbacks && switchOptions.callbacks.addElement) {
          switchOptions.callbacks.addElement(el);
        }
        el.className += addClasses;
        el.setAttribute("data-pjax-classes", addClasses);
        elsToAdd.push(el);
        fragToAppend.appendChild(el);
        animatedElsNumber++;
        on(el, animationEventNames, sexyAnimationEnd, true);
      }
    });

    // pass all className of the parent
    oldEl.className = newEl.className;
    oldEl.appendChild(fragToAppend);
  }
};


/***/ }),

/***/ "./node_modules/pjax/lib/uniqueid.js":
/*!*******************************************!*\
  !*** ./node_modules/pjax/lib/uniqueid.js ***!
  \*******************************************/
/***/ ((module) => {

module.exports = (function() {
  var counter = 0;
  return function() {
    var id = "pjax" + new Date().getTime() + "_" + counter;
    counter++;
    return id;
  };
})();


/***/ }),

/***/ "./node_modules/pjax/lib/util/clone.js":
/*!*********************************************!*\
  !*** ./node_modules/pjax/lib/util/clone.js ***!
  \*********************************************/
/***/ ((module) => {

module.exports = function(obj) {
  /* istanbul ignore if */
  if (null === obj || "object" !== typeof obj) {
    return obj;
  }
  var copy = obj.constructor();
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = obj[attr];
    }
  }
  return copy;
};


/***/ }),

/***/ "./node_modules/pjax/lib/util/contains.js":
/*!************************************************!*\
  !*** ./node_modules/pjax/lib/util/contains.js ***!
  \************************************************/
/***/ ((module) => {

module.exports = function contains(doc, selectors, el) {
  for (var i = 0; i < selectors.length; i++) {
    var selectedEls = doc.querySelectorAll(selectors[i]);
    for (var j = 0; j < selectedEls.length; j++) {
      if (selectedEls[j].contains(el)) {
        return true;
      }
    }
  }

  return false;
};


/***/ }),

/***/ "./node_modules/pjax/lib/util/extend.js":
/*!**********************************************!*\
  !*** ./node_modules/pjax/lib/util/extend.js ***!
  \**********************************************/
/***/ ((module) => {

module.exports = function(target) {
  if (target == null) {
    return null;
  }

  var to = Object(target);

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    if (source != null) {
      for (var key in source) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          to[key] = source[key];
        }
      }
    }
  }
  return to;
};


/***/ }),

/***/ "./node_modules/pjax/lib/util/noop.js":
/*!********************************************!*\
  !*** ./node_modules/pjax/lib/util/noop.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = function() {};


/***/ }),

/***/ "./node_modules/pjax/lib/util/update-query-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/pjax/lib/util/update-query-string.js ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = function(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, "$1" + key + "=" + value + "$2");
  } else {
    return uri + separator + key + "=" + value;
  }
};


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/topbar/topbar.min.js":
/*!*******************************************!*\
  !*** ./node_modules/topbar/topbar.min.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
 * @license MIT
 * topbar 1.0.0, 2021-01-06
 * http://buunguyen.github.io/topbar
 * Copyright (c) 2021 Buu Nguyen
 */
(function(window,document){"use strict";!function(){for(var lastTime=0,vendors=["ms","moz","webkit","o"],x=0;x<vendors.length&&!window.requestAnimationFrame;++x)window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[vendors[x]+"CancelAnimationFrame"]||window[vendors[x]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(callback,element){var currTime=(new Date).getTime(),timeToCall=Math.max(0,16-(currTime-lastTime)),id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);return lastTime=currTime+timeToCall,id}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(id){clearTimeout(id)})}();function repaint(){canvas.width=window.innerWidth,canvas.height=5*options.barThickness;var ctx=canvas.getContext("2d");ctx.shadowBlur=options.shadowBlur,ctx.shadowColor=options.shadowColor;var stop,lineGradient=ctx.createLinearGradient(0,0,canvas.width,0);for(stop in options.barColors)lineGradient.addColorStop(stop,options.barColors[stop]);ctx.lineWidth=options.barThickness,ctx.beginPath(),ctx.moveTo(0,options.barThickness/2),ctx.lineTo(Math.ceil(currentProgress*canvas.width),options.barThickness/2),ctx.strokeStyle=lineGradient,ctx.stroke()}var canvas,progressTimerId,fadeTimerId,currentProgress,showing,options={autoRun:!0,barThickness:3,barColors:{0:"rgba(26,  188, 156, .9)",".25":"rgba(52,  152, 219, .9)",".50":"rgba(241, 196, 15,  .9)",".75":"rgba(230, 126, 34,  .9)","1.0":"rgba(211, 84,  0,   .9)"},shadowBlur:10,shadowColor:"rgba(0,   0,   0,   .6)",className:null},topbar={config:function(opts){for(var key in opts)options.hasOwnProperty(key)&&(options[key]=opts[key])},show:function(){var type,handler,elem;showing||(showing=!0,null!==fadeTimerId&&window.cancelAnimationFrame(fadeTimerId),canvas||((elem=(canvas=document.createElement("canvas")).style).position="fixed",elem.top=elem.left=elem.right=elem.margin=elem.padding=0,elem.zIndex=100001,elem.display="none",options.className&&canvas.classList.add(options.className),document.body.appendChild(canvas),type="resize",handler=repaint,(elem=window).addEventListener?elem.addEventListener(type,handler,!1):elem.attachEvent?elem.attachEvent("on"+type,handler):elem["on"+type]=handler),canvas.style.opacity=1,canvas.style.display="block",topbar.progress(0),options.autoRun&&function loop(){progressTimerId=window.requestAnimationFrame(loop),topbar.progress("+"+.05*Math.pow(1-Math.sqrt(currentProgress),2))}())},progress:function(to){return void 0===to||("string"==typeof to&&(to=(0<=to.indexOf("+")||0<=to.indexOf("-")?currentProgress:0)+parseFloat(to)),currentProgress=1<to?1:to,repaint()),currentProgress},hide:function(){showing&&(showing=!1,null!=progressTimerId&&(window.cancelAnimationFrame(progressTimerId),progressTimerId=null),function loop(){return 1<=topbar.progress("+.1")&&(canvas.style.opacity-=.05,canvas.style.opacity<=.05)?(canvas.style.display="none",void(fadeTimerId=null)):void(fadeTimerId=window.requestAnimationFrame(loop))}())}}; true&&"object"==typeof module.exports?module.exports=topbar: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return topbar}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}).call(this,window,document);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_falcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/falcon */ "./src/services/falcon.js");


_services_falcon__WEBPACK_IMPORTED_MODULE_1__.default.start();
})();

/******/ })()
;