"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var t,r,o,l=e(require("react"));exports.Mode=void 0,(t=exports.Mode||(exports.Mode={})).primary="primary",t.secondary="secondary",exports.Size=void 0,(r=exports.Size||(exports.Size={})).extraSmall="extra-small",r.small="small",r.medium="medium",r.large="large",r.extraLarge="extra-large",exports.ButtonStyle=void 0,(o=exports.ButtonStyle||(exports.ButtonStyle={})).underline="underline",o.outline="outline",o.solid="solid",o.icon="icon";exports.RichButton=e=>{var{additionalClassNames:t=[],children:r,mode:o=exports.Mode.primary,size:n=exports.Size.medium,buttonStyle:i=exports.ButtonStyle.solid}=e,a=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(o=Object.getOwnPropertySymbols(e);l<o.length;l++)t.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(e,o[l])&&(r[o[l]]=e[o[l]])}return r}(e,["additionalClassNames","children","mode","size","buttonStyle"]);return l.default.createElement("button",Object.assign({type:"button",className:["rich-button",o,n,i,...t].join(" ")},a),r)};
