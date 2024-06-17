/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 555:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getGenderFromEnum = exports.createFilesize = exports.createDuration = void 0;
/** Converts the given seconds into a uniform string showing an amount of time.
 * */
var createDuration = function (seconds) {
    var inMinutes = Math.floor(seconds / 60);
    var inHours = Math.floor(inMinutes / 60);
    var inDays = Math.floor(inHours / 24);
    var output = "";
    var totalHours = inHours % 60;
    var totalMinutes = inMinutes % 60;
    var totalSeconds = seconds % 60;
    if (inDays > 0)
        output += inDays + " days ";
    if (!!totalHours || !!output.length)
        output += totalHours + "h ";
    if (!!totalMinutes || !!output.length)
        output += totalMinutes + "m ";
    // Round down to match native
    output += Math.floor(totalSeconds) + "s ";
    return output;
};
exports.createDuration = createDuration;
/** Converts the given bytes into a uniform string showing a filesize, from
 * bytes to terabytes. */
var createFilesize = function (bytes) {
    var b = roundToTwo(bytes);
    var kb = roundToTwo(bytes / 1024);
    if (kb < 1)
        return b + "B";
    var mb = roundToTwo(kb / 1024);
    if (mb < 1)
        return kb + "KB";
    var gb = roundToTwo(mb / 1024);
    if (gb < 1)
        return mb + "MB";
    var tb = roundToTwo(gb / 1024);
    if (tb < 1)
        return gb + "GB";
    return tb + "TB";
};
exports.createFilesize = createFilesize;
/** Returns the associated string GenderEnum as a human-readable value. */
var getGenderFromEnum = function (gender) {
    switch (gender) {
        case "MALE":
            return "Male";
        case "FEMALE":
            return "Female";
        case "TRANSGENDER_MALE":
            return "Transgender male";
        case "TRANSGENDER_FEMALE":
            return "Transgender female";
        case "INTERSEX":
            return "Intersex";
        case "NON_BINARY":
            return "Non-binary";
    }
    return null;
};
exports.getGenderFromEnum = getGenderFromEnum;
/** Round the provided number to two decimal places. */
var roundToTwo = function (number) {
    return Math.round((number + Number.EPSILON) * 100) / 100;
};


/***/ }),

/***/ 333:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GENDERS = void 0;
/** `enum GenderEnum` as an array. */
exports.GENDERS = [
    "MALE",
    "FEMALE",
    "TRANSGENDER_MALE",
    "TRANSGENDER_FEMALE",
    "INTERSEX",
    "NON_BINARY",
];


/***/ }),

/***/ 687:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var classnames_1 = __importDefault(__webpack_require__(942));
var React = window.PluginApi.React;
/** The detail group row. Identical to the native component, with an optional
 * ID. */
var DetailGroup = function (props) {
    return (React.createElement("div", { id: props.id, className: (0, classnames_1.default)("detail-group", props.className), children: props.children }));
};
exports["default"] = DetailGroup;


/***/ }),

/***/ 645:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = window.PluginApi.React;
/** Initialises and returns the DetailItem component by passing React as an
 * argument. */
var DetailItem = function (_a) {
    var additionalData = _a.additionalData, id = _a.id, title = _a.title, props = __rest(_a, ["additionalData", "id", "title"]);
    var titleText = !props.collapsed ? title + ":" : title;
    var classes = ["detail-item", id];
    if (props.wide)
        classes.push("detail-item-wide");
    return (React.createElement("div", { className: classes.join(" ") },
        React.createElement("span", { className: "detail-item-title " + id }, titleText),
        React.createElement("span", { className: "detail-item-value " + id },
            React.createElement("span", { className: "performer-" + id },
                props.value,
                additionalData ? (React.createElement("span", { className: "additional-data performer-" + additionalData.id }, additionalData.value)) : null))));
};
exports["default"] = DetailItem;


/***/ }),

/***/ 282:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DetailItem_1 = __importDefault(__webpack_require__(645));
var TagItem_1 = __importDefault(__webpack_require__(718));
var React = window.PluginApi.React;
var ItemMostCommonTags = function (_a) {
    var performer = _a.performer, props = __rest(_a, ["performer"]);
    var tagCount = props.userConfig.mostCommonTagsCount;
    // Create an array of tag data from all scenes
    var tags = [];
    // Check each scene
    props.scenesQueryResult.scenes.forEach(function (sc) {
        // Check each tag in the scene
        sc.tags.forEach(function (tag) {
            // Check if the tag already exists in the array
            var tagIndex = tags.findIndex(function (t) { return t.data.id === tag.id; });
            if (tagIndex !== -1) {
                // Increase the tag count
                tags[tagIndex].count++;
            }
            else {
                // Add the tag to the array
                tags.push({
                    count: 1,
                    data: tag,
                });
            }
        });
    });
    // Sort count from highest to lowest
    tags.sort(function (a, b) { return b.count - a.count; });
    // Return null if there are no tags
    if (!tags.length)
        return null;
    // Return the tags with the highest overall count, up to the tagCount
    var maxTags = tags.length < tagCount ? tags.length : tagCount;
    var value = [];
    for (var i = 0; i < maxTags; i++) {
        var tagCount_1 = tags[i].count;
        var tagData = tags[i].data;
        var link = "/scenes?c=(\"type\":\"performers\",\"value\":(\"items\":%5B(\"id\":\"".concat(performer.id, "\",\"label\":\"").concat(encodeURIComponent(performer.name), "\")%5D,\"excluded\":%5B%5D),\"modifier\":\"INCLUDES\")&c=(\"type\":\"tags\",\"value\":(\"items\":%5B(\"id\":\"").concat(tagData.id, "\",\"label\":\"").concat(encodeURIComponent(tagData.name), "\")%5D,\"excluded\":%5B%5D,\"depth\":0),\"modifier\":\"INCLUDES\")");
        value.push(React.createElement(TagItem_1.default, { link: link, title: "".concat(tagData.name, " (").concat(tagCount_1, " ").concat(tagCount_1 === 1 ? "scene" : "scenes", ")") }));
    }
    var title = "Most Common Tag" + (tagCount === 1 ? "" : "s");
    return (React.createElement(DetailItem_1.default, { collapsed: props.collapsed, id: "most-common-tags", title: title, value: value, wide: true }));
};
exports["default"] = ItemMostCommonTags;


/***/ }),

/***/ 138:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DetailItem_1 = __importDefault(__webpack_require__(645));
var React = window.PluginApi.React;
var ItemAverageRating = function (props) {
    var _a;
    // Get the user's rating system
    var defaultRatingSystem = {
        type: "stars",
        starPrecision: "full",
    };
    var ratingSystem = ((_a = props.configurationQueryResult.ui) === null || _a === void 0 ? void 0 : _a.ratingSystemOptions) || defaultRatingSystem;
    // Get the rating for each scene
    var scenes = props.scenesQueryResult.scenes;
    var sceneRatings = scenes
        .map(function (sc) { return (typeof sc.rating100 === "undefined" ? null : sc.rating100); })
        .filter(function (r) { return r !== null; });
    // Only return a component if at least one scene has been rated.
    if (!sceneRatings.length)
        return null;
    var averageRating100 = Math.round(((sceneRatings.reduce(function (a, b) { return (a || 0) + (b || 0); }, 0) || 0) +
        Number.EPSILON) /
        sceneRatings.length);
    var rating = ratingSystem.type === "decimal"
        ? averageRating100 / 10
        : averageRating100 / 20;
    var additionalValue = "".concat(sceneRatings.length, " of ").concat(scenes.length, " scenes rated");
    return (React.createElement(DetailItem_1.default, { collapsed: props.collapsed, id: "average-rating", title: "Average Scene Rating", value: rating, wide: true, additionalData: {
            id: "scenes-rated",
            value: additionalValue,
        } }));
};
exports["default"] = ItemAverageRating;


/***/ }),

/***/ 92:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var helpers_1 = __webpack_require__(555);
var DetailItem_1 = __importDefault(__webpack_require__(645));
var React = window.PluginApi.React;
var ItemContentSize = function (props) {
    var _a = props.scenesQueryResult, duration = _a.duration, filesize = _a.filesize;
    return (React.createElement(DetailItem_1.default, { collapsed: props.collapsed, id: "content-size", title: "Total Content", value: (0, helpers_1.createDuration)(duration), wide: true, additionalData: {
            id: "content-filesize",
            value: (0, helpers_1.createFilesize)(filesize),
        } }));
};
exports["default"] = ItemContentSize;


/***/ }),

/***/ 682:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DetailItem_1 = __importDefault(__webpack_require__(645));
var React = window.PluginApi.React;
var ItemFrequentStudio = function (_a) {
    var collapsed = _a.collapsed, performer = _a.performer, scenesQueryResult = _a.scenesQueryResult;
    // Create an array of studio data from all scenes
    var studios = [];
    var scenes = scenesQueryResult.scenes;
    if (scenes.length === 0)
        return null;
    // Check each scene
    scenesQueryResult.scenes.forEach(function (sc) {
        // Check if the scene studio already exists in the array
        var studiosIndex = studios.findIndex(function (st) { var _a; return st.id === ((_a = sc.studio) === null || _a === void 0 ? void 0 : _a.id); });
        // If there is not studio attached to the scene, skip the scene.
        if (!sc.studio)
            return;
        if (studiosIndex !== -1) {
            // Studio already appears the array. Increase its count.
            studios[studiosIndex].count++;
        }
        else {
            // Add the studio to the array
            studios.push({ id: sc.studio.id, count: 1, name: sc.studio.name });
        }
    });
    // Sort count from highest to lowest number of scenes.
    studios.sort(function (a, b) { return b.count - a.count; });
    var topStudio = studios[0];
    var additionalDataValue = topStudio.count + (topStudio.count === 1 ? " scene" : " scenes");
    var linkToStudio = "/studios/".concat(topStudio.id, "/scenes?c=(\"type\":\"performers\",\"value\":(\"items\":%5B(\"id\":\"").concat(performer.id, "\",\"label\":\"").concat(encodeURIComponent(performer.name), "\")%5D,\"excluded\":%5B%5D),\"modifier\":\"INCLUDES\")");
    return (React.createElement(DetailItem_1.default, { collapsed: collapsed, id: "most-featured-on", title: "Most Featured On", value: React.createElement("a", { href: linkToStudio }, topStudio.name), wide: true, additionalData: {
            id: "featured-studio-scenes",
            value: additionalDataValue,
        } }));
};
exports["default"] = ItemFrequentStudio;


/***/ }),

/***/ 231:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var helpers_1 = __webpack_require__(555);
var constants_1 = __webpack_require__(333);
var DetailItem_1 = __importDefault(__webpack_require__(645));
var React = window.PluginApi.React;
var makePerformerScenesUrl = window.PluginApi.utils.NavUtils.makePerformerScenesUrl;
var ItemMostWorkedWith = function (_a) {
    var performer = _a.performer, props = __rest(_a, ["performer"]);
    var mostWorkedWithGendered = props.userConfig.mostWorkedWithGendered;
    // Create an array of performer data from all scenes
    var partners = [];
    // Check each scene
    props.scenesQueryResult.scenes.forEach(function (sc) {
        // Check each performer in the scene
        sc.performers.forEach(function (pf) {
            // Check this is not the featured performer
            if (pf.id !== performer.id) {
                // Check if the performer already exists in the array
                var perfomersIndex = partners.findIndex(function (ptnr) { return ptnr.data.id === pf.id; });
                if (perfomersIndex !== -1) {
                    // Increase the performer count
                    partners[perfomersIndex].count++;
                }
                else {
                    // Add the performer to the array
                    partners.push({
                        count: 1,
                        data: pf,
                    });
                }
            }
        });
    });
    // Sort count from highest to lowest
    partners.sort(function (a, b) { return b.count - a.count; });
    if (!partners)
        return null;
    if (mostWorkedWithGendered) {
        return constants_1.GENDERS.map(function (g) {
            var topPartnerIndex = partners.findIndex(function (p) { return p.data.gender === g; });
            // If there is no partner for the current gender, don't return a
            // component.
            if (topPartnerIndex === -1)
                return null;
            var topPartner = partners[topPartnerIndex];
            var scenesText = topPartner.count + " " + (topPartner.count === 1 ? "scene" : "scenes");
            var scenesLink = makePerformerScenesUrl(performer, {
                id: topPartner.data.id,
                label: topPartner.data.name,
            });
            var genderWord = " (" + (0, helpers_1.getGenderFromEnum)(g) + ")";
            var id = genderWord.toLowerCase().split(" ").join("-");
            return (React.createElement(DetailItem_1.default, { collapsed: props.collapsed, id: "most-worked-with-" + id, title: "Most Worked With " + genderWord, value: React.createElement("a", { href: scenesLink }, topPartner.data.name), wide: true, additionalData: {
                    id: "scene-count",
                    value: scenesText,
                } }));
        });
    }
    var topPartner = partners[0];
    var scenesText = topPartner.count + " " + (topPartner.count === 1 ? "scene" : "scenes");
    var scenesLink = makePerformerScenesUrl(performer, {
        id: topPartner.data.id,
        label: topPartner.data.name,
    });
    return (React.createElement(DetailItem_1.default, { collapsed: props.collapsed, id: "most-worked-with", title: "Most Worked With", value: React.createElement("a", { href: scenesLink }, topPartner.data.name), wide: true, additionalData: {
            id: "scene-count",
            value: scenesText,
        } }));
};
exports["default"] = ItemMostWorkedWith;


/***/ }),

/***/ 806:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DetailItem_1 = __importDefault(__webpack_require__(645));
var React = window.PluginApi.React;
var ItemOCount = function (props) {
    var total_o_count = props.statsQueryResult.total_o_count;
    // Don't return a component if there is no O count across all performers
    if (total_o_count === 0)
        return null;
    var oCount = 0;
    props.scenesQueryResult.scenes.forEach(function (sc) {
        if (typeof sc.o_counter !== "undefined")
            oCount += sc.o_counter || 0;
    });
    // Don't return a component if there is no O count for this performer
    if (oCount === 0)
        return null;
    var percentage = Math.round((oCount / total_o_count + Number.EPSILON) * 10000) / 100;
    var additionalValue = "".concat(percentage, "% of ").concat(total_o_count, " total");
    return (React.createElement(DetailItem_1.default, { collapsed: props.collapsed, id: "o-count", title: "O Count", value: oCount, wide: true, additionalData: {
            id: "o-count-of-total",
            value: additionalValue,
        } }));
};
exports["default"] = ItemOCount;


/***/ }),

/***/ 740:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DetailItem_1 = __importDefault(__webpack_require__(645));
var React = window.PluginApi.React;
var ItemScenesOrganized = function (props) {
    var scenes = props.scenesQueryResult.scenes;
    var totalScenes = scenes.length;
    if (totalScenes < 1)
        return null;
    var organizedScenes = scenes.filter(function (sc) { return sc.organized; }).length;
    return (React.createElement(DetailItem_1.default, { collapsed: props.collapsed, id: "scenes-organized", title: "Scenes Organized", value: Math.round((organizedScenes / totalScenes + Number.EPSILON) * 100) + "%", wide: true, additionalData: {
            id: "scenes-organized-number",
            value: organizedScenes + " of " + totalScenes,
        } }));
};
exports["default"] = ItemScenesOrganized;


/***/ }),

/***/ 222:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DetailItem_1 = __importDefault(__webpack_require__(645));
var PluginApi = window.PluginApi;
var React = PluginApi.React;
var ItemScenesTimespan = function (_a) {
    var _b, _c;
    var collapsed = _a.collapsed, scenesQueryResult = _a.scenesQueryResult;
    // Wait for PluginApi components to load before rendering.
    var componentsLoading = PluginApi.hooks.useLoadComponents([
        PluginApi.loadableComponents.SceneCard,
    ]);
    if (componentsLoading)
        return null;
    var _d = PluginApi.components, HoverPopover = _d.HoverPopover, SceneCard = _d.SceneCard;
    // Filter out scenes with no date
    var scenes = scenesQueryResult.scenes;
    var datedScenes = scenes.filter(function (sc) { return typeof sc.date !== "undefined"; });
    // Require a minimum of two scenes to render this item.
    if (datedScenes.length < 2)
        return null;
    var earliestScene = datedScenes[0];
    var latestScene = datedScenes[datedScenes.length - 1];
    return (React.createElement(React.Fragment, null,
        React.createElement(DetailItem_1.default, { collapsed: collapsed, id: "scenes-timespan", title: "Scenes Timespan", value: React.createElement("div", { className: "inner-wrapper" },
                React.createElement(HoverPopover, { placement: "bottom", content: React.createElement(SceneCard, { scene: earliestScene, compact: true }), leaveDelay: 100 },
                    React.createElement("span", { className: "hoverable" }, (_b = earliestScene.date) === null || _b === void 0 ? void 0 : _b.split("-").join("/"))),
                React.createElement("span", { className: "separator" }, "\u2013"),
                React.createElement(HoverPopover, { placement: "bottom", content: React.createElement(SceneCard, { scene: latestScene, compact: true }), leaveDelay: 100 },
                    React.createElement("span", { className: "hoverable" }, (_c = latestScene.date) === null || _c === void 0 ? void 0 : _c.split("-").join("/")))), wide: true })));
};
exports["default"] = ItemScenesTimespan;


/***/ }),

/***/ 197:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var helpers_1 = __webpack_require__(555);
var DetailItem_1 = __importDefault(__webpack_require__(645));
var React = window.PluginApi.React;
/** "Scene Play Count" item component. */
var ItemWatchedFor = function (_a) {
    var collapsed = _a.collapsed, scenesQueryResult = _a.scenesQueryResult;
    var playCount = 0;
    var playDuration = 0;
    for (var _i = 0, _b = scenesQueryResult.scenes; _i < _b.length; _i++) {
        var scene = _b[_i];
        playCount += (scene === null || scene === void 0 ? void 0 : scene.play_count) || 0;
        playDuration += scene.play_duration || 0;
    }
    return (React.createElement(DetailItem_1.default, { collapsed: collapsed, id: "watched-for", title: "Scenes Watched For", value: (0, helpers_1.createDuration)(playDuration), wide: true, additionalData: {
            id: "total-play-count",
            value: "".concat(playCount, " ").concat(playCount === 1 ? "play" : "plays"),
        } }));
};
exports["default"] = ItemWatchedFor;


/***/ }),

/***/ 718:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var React = window.PluginApi.React;
/** A custom tag item component designed to look like the native component, but
 * with more customisation options. */
var TagItem = function (props) {
    /**
     * ! Awaiting `TagCard` component to be made available in order to add the
     * hover popover. See
     * https://github.com/stashapp/stash/issues/4510#issuecomment-2171511553
     */
    return (React.createElement("span", { className: "tag-item badge badge-secondary" },
        React.createElement("a", { href: props.link }, props.title)));
};
exports["default"] = TagItem;


/***/ }),

/***/ 221:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var DetailGroup_1 = __importDefault(__webpack_require__(687));
var ItemAverageRating_1 = __importDefault(__webpack_require__(138));
var Item_CommonTags_1 = __importDefault(__webpack_require__(282));
var ItemContentSize_1 = __importDefault(__webpack_require__(92));
var ItemMostFeaturedOn_1 = __importDefault(__webpack_require__(682));
var ItemMostWorkedWith_1 = __importDefault(__webpack_require__(231));
var ItemOCount_1 = __importDefault(__webpack_require__(806));
var ItemScenesOrganized_1 = __importDefault(__webpack_require__(740));
var ItemScenesTimespan_1 = __importDefault(__webpack_require__(222));
var ItemWatchedFor_1 = __importDefault(__webpack_require__(197));
__webpack_require__(680);
var PluginApi = window.PluginApi;
var GQL = PluginApi.GQL, React = PluginApi.React;
var defaultConfig = {
    mostCommonTagsCount: 3,
    mostWorkedWithGendered: true,
};
/* -------------------------------------------------------------------------- */
/*                               PluginApi patch                              */
/* -------------------------------------------------------------------------- */
PluginApi.patch.after("PerformerDetailsPanel.DetailGroup", function (_a) {
    var _b;
    var children = _a.children, collapsed = _a.collapsed, performer = _a.performer;
    var performerID = performer.id;
    var qScenes = GQL.useFindScenesQuery({
        variables: {
            filter: { per_page: -1, sort: "date" },
            scene_filter: {
                performers: {
                    modifier: "INCLUDES" /* CriterionModifier.Includes */,
                    value: [performerID],
                },
            },
        },
    });
    var qConfig = GQL.useConfigurationQuery();
    var qStats = GQL.useStatsQuery();
    // Only attach plugin component if scene data has been found. Otherwise,
    // return the original component only.
    if (!!qScenes.data &&
        qScenes.data.findScenes.scenes.length &&
        !!qConfig.data &&
        !!qStats.data &&
        performerID !== null) {
        var configurationQueryResult = qConfig.data.configuration;
        var scenesQueryResult = qScenes.data.findScenes;
        var statsQueryResult = qStats.data.stats;
        var userConfig = __assign(__assign(__assign({}, defaultConfig), configurationQueryResult.plugins.PerformerDetailsExtended), { mostCommonTagsCount: ((_b = configurationQueryResult.plugins.PerformerDetailsExtended) === null || _b === void 0 ? void 0 : _b.mostCommonTagsCount) || defaultConfig.mostCommonTagsCount });
        return [
            React.createElement(React.Fragment, null,
                React.createElement(DetailGroup_1.default, null, children),
                React.createElement(DetailGroup_1.default, { id: "pde__entities", className: "performer-details-extended" },
                    React.createElement(ItemAverageRating_1.default, { collapsed: collapsed, configurationQueryResult: configurationQueryResult, performer: performer, scenesQueryResult: scenesQueryResult }),
                    React.createElement(ItemMostWorkedWith_1.default, { collapsed: collapsed, performer: performer, scenesQueryResult: scenesQueryResult, userConfig: userConfig }),
                    React.createElement(ItemMostFeaturedOn_1.default, { collapsed: collapsed, performer: performer, scenesQueryResult: scenesQueryResult }),
                    React.createElement(Item_CommonTags_1.default, { collapsed: collapsed, performer: performer, scenesQueryResult: scenesQueryResult, userConfig: userConfig })),
                React.createElement(DetailGroup_1.default, { id: "pde__numbers", className: "performer-details-extended" },
                    React.createElement(ItemContentSize_1.default, { collapsed: collapsed, scenesQueryResult: scenesQueryResult }),
                    React.createElement(ItemWatchedFor_1.default, { collapsed: collapsed, scenesQueryResult: scenesQueryResult }),
                    React.createElement(ItemScenesTimespan_1.default, { collapsed: collapsed, scenesQueryResult: scenesQueryResult }),
                    React.createElement(ItemScenesOrganized_1.default, { collapsed: collapsed, scenesQueryResult: scenesQueryResult }),
                    React.createElement(ItemOCount_1.default, { collapsed: collapsed, scenesQueryResult: scenesQueryResult, statsQueryResult: statsQueryResult }))),
        ];
    }
    return [React.createElement("div", { className: "detail-group" }, children)];
});


/***/ }),

/***/ 942:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(221);
/******/ 	
/******/ })()
;