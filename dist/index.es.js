import e from"react";var t,r,n;!function(e){e.primary="primary",e.secondary="secondary"}(t||(t={})),function(e){e.extraSmall="extra-small",e.small="small",e.medium="medium",e.large="large",e.extraLarge="extra-large"}(r||(r={})),function(e){e.underline="underline",e.outline="outline",e.solid="solid",e.icon="icon"}(n||(n={}));const o=o=>{var{additionalClassNames:a=[],children:l,mode:i=t.primary,size:s=r.medium,buttonStyle:m=n.solid}=o,c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(o,["additionalClassNames","children","mode","size","buttonStyle"]);return e.createElement("button",Object.assign({type:"button",className:["rich-button",i,s,m,...a].join(" ")},c),l)};export{n as ButtonStyle,t as Mode,o as RichButton,r as Size};
