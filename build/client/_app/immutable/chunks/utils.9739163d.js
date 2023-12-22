function We(e,r){const t={},o={},l={$$scope:1};let s=e.length;for(;s--;){const n=e[s],i=r[s];if(i){for(const c in n)c in i||(o[c]=1);for(const c in i)l[c]||(t[c]=i[c],l[c]=1);e[s]=i}else for(const c in n)l[c]=1}for(const n in o)n in t||(t[n]=void 0);return t}function Be(e){return typeof e=="object"&&e!==null?e:{}}function D(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=D(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function se(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=D(e))&&(o&&(o+=" "),o+=r);return o}const V="-";function ie(e){const r=ae(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;function l(n){const i=n.split(V);return i[0]===""&&i.length!==1&&i.shift(),ee(i,r)||le(n)}function s(n,i){const c=t[n]||[];return i&&o[n]?[...c,...o[n]]:c}return{getClassGroupId:l,getConflictingClassGroupIds:s}}function ee(e,r){var n;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),l=o?ee(e.slice(1),o):void 0;if(l)return l;if(r.validators.length===0)return;const s=e.join(V);return(n=r.validators.find(({validator:i})=>i(s)))==null?void 0:n.classGroupId}const Q=/^\[(.+)\]$/;function le(e){if(Q.test(e)){const r=Q.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function ae(e){const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return de(Object.entries(e.classGroups),t).forEach(([s,n])=>{O(n,o,s,r)}),o}function O(e,r,t,o){e.forEach(l=>{if(typeof l=="string"){const s=l===""?r:Y(r,l);s.classGroupId=t;return}if(typeof l=="function"){if(ce(l)){O(l(o),r,t,o);return}r.validators.push({validator:l,classGroupId:t});return}Object.entries(l).forEach(([s,n])=>{O(n,Y(r,s),t,o)})})}function Y(e,r){let t=e;return r.split(V).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t}function ce(e){return e.isThemeGetter}function de(e,r){return r?e.map(([t,o])=>{const l=o.map(s=>typeof s=="string"?r+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(([n,i])=>[r+n,i])):s);return[t,l]}):e}function ue(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;function l(s,n){t.set(s,n),r++,r>e&&(r=0,o=t,t=new Map)}return{get(s){let n=t.get(s);if(n!==void 0)return n;if((n=o.get(s))!==void 0)return l(s,n),n},set(s,n){t.has(s)?t.set(s,n):l(s,n)}}}const re="!";function pe(e){const r=e.separator,t=r.length===1,o=r[0],l=r.length;return function(n){const i=[];let c=0,u=0,f;for(let g=0;g<n.length;g++){let m=n[g];if(c===0){if(m===o&&(t||n.slice(g,g+l)===r)){i.push(n.slice(u,g)),u=g+l;continue}if(m==="/"){f=g;continue}}m==="["?c++:m==="]"&&c--}const b=i.length===0?n:n.substring(u),h=b.startsWith(re),x=h?b.substring(1):b,z=f&&f>u?f-u:void 0;return{modifiers:i,hasImportantModifier:h,baseClassName:x,maybePostfixModifierPosition:z}}}function fe(e){if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r}function be(e){return{cache:ue(e.cacheSize),splitModifiers:pe(e),...ie(e)}}const ge=/\s+/;function me(e,r){const{splitModifiers:t,getClassGroupId:o,getConflictingClassGroupIds:l}=r,s=new Set;return e.trim().split(ge).map(n=>{const{modifiers:i,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:f}=t(n);let b=o(f?u.substring(0,f):u),h=!!f;if(!b){if(!f)return{isTailwindClass:!1,originalClassName:n};if(b=o(u),!b)return{isTailwindClass:!1,originalClassName:n};h=!1}const x=fe(i).join(":");return{isTailwindClass:!0,modifierId:c?x+re:x,classGroupId:b,originalClassName:n,hasPostfixModifier:h}}).reverse().filter(n=>{if(!n.isTailwindClass)return!0;const{modifierId:i,classGroupId:c,hasPostfixModifier:u}=n,f=i+c;return s.has(f)?!1:(s.add(f),l(c,u).forEach(b=>s.add(i+b)),!0)}).reverse().map(n=>n.originalClassName).join(" ")}function he(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=te(r))&&(o&&(o+=" "),o+=t);return o}function te(e){if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=te(e[o]))&&(t&&(t+=" "),t+=r);return t}function ye(e,...r){let t,o,l,s=n;function n(c){const u=r.reduce((f,b)=>b(f),e());return t=be(u),o=t.cache.get,l=t.cache.set,s=i,i(c)}function i(c){const u=o(c);if(u)return u;const f=me(c,t);return l(c,f),f}return function(){return s(he.apply(null,arguments))}}function d(e){const r=t=>t[e]||[];return r.isThemeGetter=!0,r}const oe=/^\[(?:([a-z-]+):)?(.+)\]$/i,xe=/^\d+\/\d+$/,we=new Set(["px","full","screen"]),ve=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ke=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Ce=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ze=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function y(e){return S(e)||we.has(e)||xe.test(e)}function k(e){return A(e,"length",Te)}function S(e){return!!e&&!Number.isNaN(Number(e))}function E(e){return A(e,"number",S)}function R(e){return!!e&&Number.isInteger(Number(e))}function Se(e){return e.endsWith("%")&&S(e.slice(0,-1))}function a(e){return oe.test(e)}function C(e){return ve.test(e)}const Ae=new Set(["length","size","percentage"]);function Me(e){return A(e,Ae,ne)}function Ge(e){return A(e,"position",ne)}const Re=new Set(["image","url"]);function Ie(e){return A(e,Re,Ee)}function Pe(e){return A(e,"",je)}function I(){return!0}function A(e,r,t){const o=oe.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1}function Te(e){return ke.test(e)}function ne(){return!1}function je(e){return Ce.test(e)}function Ee(e){return ze.test(e)}function $e(){const e=d("colors"),r=d("spacing"),t=d("blur"),o=d("brightness"),l=d("borderColor"),s=d("borderRadius"),n=d("borderSpacing"),i=d("borderWidth"),c=d("contrast"),u=d("grayscale"),f=d("hueRotate"),b=d("invert"),h=d("gap"),x=d("gradientColorStops"),z=d("gradientColorStopPositions"),g=d("inset"),m=d("margin"),v=d("opacity"),w=d("padding"),N=d("saturate"),$=d("scale"),U=d("sepia"),F=d("skew"),q=d("space"),J=d("translate"),L=()=>["auto","contain","none"],_=()=>["auto","hidden","clip","visible","scroll"],W=()=>["auto",a,r],p=()=>[a,r],X=()=>["",y,k],P=()=>["auto",S,a],Z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],T=()=>["solid","dashed","dotted","double","none"],H=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"],B=()=>["start","end","center","between","around","evenly","stretch"],M=()=>["","0",a],K=()=>["auto","avoid","all","avoid-page","page","left","right","column"],G=()=>[S,E],j=()=>[S,a];return{cacheSize:500,separator:":",theme:{colors:[I],spacing:[y,k],blur:["none","",C,a],brightness:G(),borderColor:[e],borderRadius:["none","","full",C,a],borderSpacing:p(),borderWidth:X(),contrast:G(),grayscale:M(),hueRotate:j(),invert:M(),gap:p(),gradientColorStops:[e],gradientColorStopPositions:[Se,k],inset:W(),margin:W(),opacity:G(),padding:p(),saturate:G(),scale:G(),sepia:M(),skew:j(),space:p(),translate:p()},classGroups:{aspect:[{aspect:["auto","square","video",a]}],container:["container"],columns:[{columns:[C]}],"break-after":[{"break-after":K()}],"break-before":[{"break-before":K()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Z(),a]}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",R,a]}],basis:[{basis:W()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",a]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",R,a]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",R,a]},a]}],"col-start":[{"col-start":P()}],"col-end":[{"col-end":P()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[R,a]},a]}],"row-start":[{"row-start":P()}],"row-end":[{"row-end":P()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",a]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",a]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[w]}],px:[{px:[w]}],py:[{py:[w]}],ps:[{ps:[w]}],pe:[{pe:[w]}],pt:[{pt:[w]}],pr:[{pr:[w]}],pb:[{pb:[w]}],pl:[{pl:[w]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[q]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[q]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",a,r]}],"min-w":[{"min-w":["min","max","fit",a,y]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[C]},C,a]}],h:[{h:[a,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",y,a]}],"max-h":[{"max-h":[a,r,"min","max","fit"]}],"font-size":[{text:["base",C,k]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",E]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",a]}],"line-clamp":[{"line-clamp":["none",S,E]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",y,a]}],"list-image":[{"list-image":["none",a]}],"list-style-type":[{list:["none","disc","decimal",a]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...T(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",y,k]}],"underline-offset":[{"underline-offset":["auto",y,a]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:p()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",a]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",a]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Z(),Ge]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Me]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Ie]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[z]}],"gradient-via-pos":[{via:[z]}],"gradient-to-pos":[{to:[z]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[s]}],"rounded-s":[{"rounded-s":[s]}],"rounded-e":[{"rounded-e":[s]}],"rounded-t":[{"rounded-t":[s]}],"rounded-r":[{"rounded-r":[s]}],"rounded-b":[{"rounded-b":[s]}],"rounded-l":[{"rounded-l":[s]}],"rounded-ss":[{"rounded-ss":[s]}],"rounded-se":[{"rounded-se":[s]}],"rounded-ee":[{"rounded-ee":[s]}],"rounded-es":[{"rounded-es":[s]}],"rounded-tl":[{"rounded-tl":[s]}],"rounded-tr":[{"rounded-tr":[s]}],"rounded-br":[{"rounded-br":[s]}],"rounded-bl":[{"rounded-bl":[s]}],"border-w":[{border:[i]}],"border-w-x":[{"border-x":[i]}],"border-w-y":[{"border-y":[i]}],"border-w-s":[{"border-s":[i]}],"border-w-e":[{"border-e":[i]}],"border-w-t":[{"border-t":[i]}],"border-w-r":[{"border-r":[i]}],"border-w-b":[{"border-b":[i]}],"border-w-l":[{"border-l":[i]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[...T(),"hidden"]}],"divide-x":[{"divide-x":[i]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[i]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:T()}],"border-color":[{border:[l]}],"border-color-x":[{"border-x":[l]}],"border-color-y":[{"border-y":[l]}],"border-color-t":[{"border-t":[l]}],"border-color-r":[{"border-r":[l]}],"border-color-b":[{"border-b":[l]}],"border-color-l":[{"border-l":[l]}],"divide-color":[{divide:[l]}],"outline-style":[{outline:["",...T()]}],"outline-offset":[{"outline-offset":[y,a]}],"outline-w":[{outline:[y,k]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:X()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[y,k]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",C,Pe]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":H()}],"bg-blend":[{"bg-blend":H()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",C,a]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[b]}],saturate:[{saturate:[N]}],sepia:[{sepia:[U]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[N]}],"backdrop-sepia":[{"backdrop-sepia":[U]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[n]}],"border-spacing-x":[{"border-spacing-x":[n]}],"border-spacing-y":[{"border-spacing-y":[n]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",a]}],duration:[{duration:j()}],ease:[{ease:["linear","in","out","in-out",a]}],delay:[{delay:j()}],animate:[{animate:["none","spin","ping","pulse","bounce",a]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[$]}],"scale-x":[{"scale-x":[$]}],"scale-y":[{"scale-y":[$]}],rotate:[{rotate:[R,a]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",a]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",a]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":p()}],"scroll-mx":[{"scroll-mx":p()}],"scroll-my":[{"scroll-my":p()}],"scroll-ms":[{"scroll-ms":p()}],"scroll-me":[{"scroll-me":p()}],"scroll-mt":[{"scroll-mt":p()}],"scroll-mr":[{"scroll-mr":p()}],"scroll-mb":[{"scroll-mb":p()}],"scroll-ml":[{"scroll-ml":p()}],"scroll-p":[{"scroll-p":p()}],"scroll-px":[{"scroll-px":p()}],"scroll-py":[{"scroll-py":p()}],"scroll-ps":[{"scroll-ps":p()}],"scroll-pe":[{"scroll-pe":p()}],"scroll-pt":[{"scroll-pt":p()}],"scroll-pr":[{"scroll-pr":p()}],"scroll-pb":[{"scroll-pb":p()}],"scroll-pl":[{"scroll-pl":p()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",a]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[y,k,E]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const Le=ye($e);function _e(e){const r=e-1;return r*r*r+1}function Oe(...e){return Le(se(e))}const Ve=(e,r={y:-8,x:0,start:.95,duration:150})=>{const t=getComputedStyle(e),o=t.transform==="none"?"":t.transform,l=(n,i,c)=>{const[u,f]=i,[b,h]=c;return(n-u)/(f-u)*(h-b)+b},s=n=>Object.keys(n).reduce((i,c)=>n[c]===void 0?i:i+`${c}:${n[c]};`,"");return{duration:r.duration??200,delay:0,css:n=>{const i=l(n,[0,1],[r.y??5,0]),c=l(n,[0,1],[r.x??0,0]),u=l(n,[0,1],[r.start??.95,1]);return s({transform:`${o} translate3d(${c}px, ${i}px, 0) scale(${u})`,opacity:n})},easing:_e}};export{Be as a,_e as b,Oe as c,Ve as f,We as g};
