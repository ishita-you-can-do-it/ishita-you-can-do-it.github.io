(()=>{function he(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var N=he();function Ke(t){N=t}var j={exec:()=>null};function x(t,e=""){let a=typeof t=="string"?t:t.source,o={replace:(r,s)=>{let n=typeof s=="string"?s:s.source;return n=n.replace(A.caret,"$1"),a=a.replace(r,n),o},getRegex:()=>new RegExp(a,e)};return o}var A={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},xt=/^(?:[ \t]*(?:\n|$))+/,bt=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,yt=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,X=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,wt=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ge=/(?:[*+-]|\d{1,9}[.)])/,Ze=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ye=x(Ze).replace(/bull/g,ge).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),vt=x(Ze).replace(/bull/g,ge).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),xe=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,kt=/^[^\n]+/,be=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ct=x(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",be).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),At=x(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ge).getRegex(),se="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ye=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,It=x("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ye).replace("tag",se).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Je=x(xe).replace("hr",X).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",se).getRegex(),St=x(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Je).getRegex(),we={blockquote:St,code:bt,def:Ct,fences:yt,heading:wt,hr:X,html:It,lheading:Ye,list:At,newline:xt,paragraph:Je,table:j,text:kt},_e=x("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",X).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",se).getRegex(),Tt={...we,lheading:vt,table:_e,paragraph:x(xe).replace("hr",X).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",_e).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",se).getRegex()},Pt={...we,html:x(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ye).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:j,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:x(xe).replace("hr",X).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Ye).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Bt=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Dt=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,et=/^( {2,}|\\)\n(?!\s*$)/,Et=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,ne=/[\p{P}\p{S}]/u,ve=/[\s\p{P}\p{S}]/u,tt=/[^\s\p{P}\p{S}]/u,Rt=x(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,ve).getRegex(),at=/(?!~)[\p{P}\p{S}]/u,Mt=/(?!~)[\s\p{P}\p{S}]/u,Lt=/(?:[^\s\p{P}\p{S}]|~)/u,qt=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ot=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,Ft=x(ot,"u").replace(/punct/g,ne).getRegex(),$t=x(ot,"u").replace(/punct/g,at).getRegex(),rt="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Ot=x(rt,"gu").replace(/notPunctSpace/g,tt).replace(/punctSpace/g,ve).replace(/punct/g,ne).getRegex(),Nt=x(rt,"gu").replace(/notPunctSpace/g,Lt).replace(/punctSpace/g,Mt).replace(/punct/g,at).getRegex(),Qt=x("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,tt).replace(/punctSpace/g,ve).replace(/punct/g,ne).getRegex(),Ut=x(/\\(punct)/,"gu").replace(/punct/g,ne).getRegex(),Ht=x(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Gt=x(ye).replace("(?:-->|$)","-->").getRegex(),zt=x("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Gt).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ae=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,_t=x(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ae).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),st=x(/^!?\[(label)\]\[(ref)\]/).replace("label",ae).replace("ref",be).getRegex(),nt=x(/^!?\[(ref)\](?:\[\])?/).replace("ref",be).getRegex(),Vt=x("reflink|nolink(?!\\()","g").replace("reflink",st).replace("nolink",nt).getRegex(),ke={_backpedal:j,anyPunctuation:Ut,autolink:Ht,blockSkip:qt,br:et,code:Dt,del:j,emStrongLDelim:Ft,emStrongRDelimAst:Ot,emStrongRDelimUnd:Qt,escape:Bt,link:_t,nolink:nt,punctuation:Rt,reflink:st,reflinkSearch:Vt,tag:zt,text:Et,url:j},Wt={...ke,link:x(/^!?\[(label)\]\((.*?)\)/).replace("label",ae).getRegex(),reflink:x(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ae).getRegex()},ce={...ke,emStrongRDelimAst:Nt,emStrongLDelim:$t,url:x(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},jt={...ce,br:x(et).replace("{2,}","*").getRegex(),text:x(ce.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ee={normal:we,gfm:Tt,pedantic:Pt},V={normal:ke,gfm:ce,breaks:jt,pedantic:Wt},Xt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ve=t=>Xt[t];function D(t,e){if(e){if(A.escapeTest.test(t))return t.replace(A.escapeReplace,Ve)}else if(A.escapeTestNoEncode.test(t))return t.replace(A.escapeReplaceNoEncode,Ve);return t}function We(t){try{t=encodeURI(t).replace(A.percentDecode,"%")}catch{return null}return t}function je(t,e){let a=t.replace(A.findPipe,(s,n,i)=>{let d=!1,l=n;for(;--l>=0&&i[l]==="\\";)d=!d;return d?"|":" |"}),o=a.split(A.splitPipe),r=0;if(o[0].trim()||o.shift(),o.length>0&&!o.at(-1)?.trim()&&o.pop(),e)if(o.length>e)o.splice(e);else for(;o.length<e;)o.push("");for(;r<o.length;r++)o[r]=o[r].trim().replace(A.slashPipe,"|");return o}function W(t,e,a){let o=t.length;if(o===0)return"";let r=0;for(;r<o;){let s=t.charAt(o-r-1);if(s===e&&!a)r++;else if(s!==e&&a)r++;else break}return t.slice(0,o-r)}function Kt(t,e){if(t.indexOf(e[1])===-1)return-1;let a=0;for(let o=0;o<t.length;o++)if(t[o]==="\\")o++;else if(t[o]===e[0])a++;else if(t[o]===e[1]&&(a--,a<0))return o;return a>0?-2:-1}function Xe(t,e,a,o,r){let s=e.href,n=e.title||null,i=t[1].replace(r.other.outputLinkReplace,"$1");o.state.inLink=!0;let d={type:t[0].charAt(0)==="!"?"image":"link",raw:a,href:s,title:n,text:i,tokens:o.inlineTokens(i)};return o.state.inLink=!1,d}function Zt(t,e,a){let o=t.match(a.other.indentCodeCompensation);if(o===null)return e;let r=o[1];return e.split(`
`).map(s=>{let n=s.match(a.other.beginningSpace);if(n===null)return s;let[i]=n;return i.length>=r.length?s.slice(r.length):s}).join(`
`)}var oe=class{options;rules;lexer;constructor(t){this.options=t||N}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let a=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?a:W(a,`
`)}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let a=e[0],o=Zt(a,e[3]||"",this.rules);return{type:"code",raw:a,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:o}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let a=e[2].trim();if(this.rules.other.endingHash.test(a)){let o=W(a,"#");(this.options.pedantic||!o||this.rules.other.endingSpaceChar.test(o))&&(a=o.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:a,tokens:this.lexer.inline(a)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:W(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let a=W(e[0],`
`).split(`
`),o="",r="",s=[];for(;a.length>0;){let n=!1,i=[],d;for(d=0;d<a.length;d++)if(this.rules.other.blockquoteStart.test(a[d]))i.push(a[d]),n=!0;else if(!n)i.push(a[d]);else break;a=a.slice(d);let l=i.join(`
`),f=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");o=o?`${o}
${l}`:l,r=r?`${r}
${f}`:f;let g=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,s,!0),this.lexer.state.top=g,a.length===0)break;let c=s.at(-1);if(c?.type==="code")break;if(c?.type==="blockquote"){let v=c,y=v.raw+`
`+a.join(`
`),C=this.blockquote(y);s[s.length-1]=C,o=o.substring(0,o.length-v.raw.length)+C.raw,r=r.substring(0,r.length-v.text.length)+C.text;break}else if(c?.type==="list"){let v=c,y=v.raw+`
`+a.join(`
`),C=this.list(y);s[s.length-1]=C,o=o.substring(0,o.length-c.raw.length)+C.raw,r=r.substring(0,r.length-v.raw.length)+C.raw,a=y.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:o,tokens:s,text:r}}}list(t){let e=this.rules.block.list.exec(t);if(e){let a=e[1].trim(),o=a.length>1,r={type:"list",raw:"",ordered:o,start:o?+a.slice(0,-1):"",loose:!1,items:[]};a=o?`\\d{1,9}\\${a.slice(-1)}`:`\\${a}`,this.options.pedantic&&(a=o?a:"[*+-]");let s=this.rules.other.listItemRegex(a),n=!1;for(;t;){let d=!1,l="",f="";if(!(e=s.exec(t))||this.rules.block.hr.test(t))break;l=e[0],t=t.substring(l.length);let g=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,T=>" ".repeat(3*T.length)),c=t.split(`
`,1)[0],v=!g.trim(),y=0;if(this.options.pedantic?(y=2,f=g.trimStart()):v?y=e[1].length+1:(y=e[2].search(this.rules.other.nonSpaceChar),y=y>4?1:y,f=g.slice(y),y+=e[1].length),v&&this.rules.other.blankLine.test(c)&&(l+=c+`
`,t=t.substring(c.length+1),d=!0),!d){let T=this.rules.other.nextBulletRegex(y),B=this.rules.other.hrRegex(y),F=this.rules.other.fencesBeginRegex(y),$=this.rules.other.headingBeginRegex(y),ue=this.rules.other.htmlBeginRegex(y);for(;t;){let P=t.split(`
`,1)[0],I;if(c=P,this.options.pedantic?(c=c.replace(this.rules.other.listReplaceNesting,"  "),I=c):I=c.replace(this.rules.other.tabCharGlobal,"    "),F.test(c)||$.test(c)||ue.test(c)||T.test(c)||B.test(c))break;if(I.search(this.rules.other.nonSpaceChar)>=y||!c.trim())f+=`
`+I.slice(y);else{if(v||g.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||F.test(g)||$.test(g)||B.test(g))break;f+=`
`+c}!v&&!c.trim()&&(v=!0),l+=P+`
`,t=t.substring(P.length+1),g=I.slice(y)}}r.loose||(n?r.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(n=!0));let C=null,b;this.options.gfm&&(C=this.rules.other.listIsTask.exec(f),C&&(b=C[0]!=="[ ] ",f=f.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:l,task:!!C,checked:b,loose:!1,text:f,tokens:[]}),r.raw+=l}let i=r.items.at(-1);if(i)i.raw=i.raw.trimEnd(),i.text=i.text.trimEnd();else return;r.raw=r.raw.trimEnd();for(let d=0;d<r.items.length;d++)if(this.lexer.state.top=!1,r.items[d].tokens=this.lexer.blockTokens(r.items[d].text,[]),!r.loose){let l=r.items[d].tokens.filter(g=>g.type==="space"),f=l.length>0&&l.some(g=>this.rules.other.anyLine.test(g.raw));r.loose=f}if(r.loose)for(let d=0;d<r.items.length;d++)r.items[d].loose=!0;return r}}html(t){let e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){let e=this.rules.block.def.exec(t);if(e){let a=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),o=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",r=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:a,raw:e[0],href:o,title:r}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let a=je(e[1]),o=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:e[0],header:[],align:[],rows:[]};if(a.length===o.length){for(let n of o)this.rules.other.tableAlignRight.test(n)?s.align.push("right"):this.rules.other.tableAlignCenter.test(n)?s.align.push("center"):this.rules.other.tableAlignLeft.test(n)?s.align.push("left"):s.align.push(null);for(let n=0;n<a.length;n++)s.header.push({text:a[n],tokens:this.lexer.inline(a[n]),header:!0,align:s.align[n]});for(let n of r)s.rows.push(je(n,s.header.length).map((i,d)=>({text:i,tokens:this.lexer.inline(i),header:!1,align:s.align[d]})));return s}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let a=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:a,tokens:this.lexer.inline(a)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let a=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(a)){if(!this.rules.other.endAngleBracket.test(a))return;let s=W(a.slice(0,-1),"\\");if((a.length-s.length)%2===0)return}else{let s=Kt(e[2],"()");if(s===-2)return;if(s>-1){let i=(e[0].indexOf("!")===0?5:4)+e[1].length+s;e[2]=e[2].substring(0,s),e[0]=e[0].substring(0,i).trim(),e[3]=""}}let o=e[2],r="";if(this.options.pedantic){let s=this.rules.other.pedanticHrefTitle.exec(o);s&&(o=s[1],r=s[3])}else r=e[3]?e[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(a)?o=o.slice(1):o=o.slice(1,-1)),Xe(e,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:r&&r.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let a;if((a=this.rules.inline.reflink.exec(t))||(a=this.rules.inline.nolink.exec(t))){let o=(a[2]||a[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[o.toLowerCase()];if(!r){let s=a[0].charAt(0);return{type:"text",raw:s,text:s}}return Xe(a,r,a[0],this.lexer,this.rules)}}emStrong(t,e,a=""){let o=this.rules.inline.emStrongLDelim.exec(t);if(!o||o[3]&&a.match(this.rules.other.unicodeAlphaNumeric))return;if(!(o[1]||o[2]||"")||!a||this.rules.inline.punctuation.exec(a)){let s=[...o[0]].length-1,n,i,d=s,l=0,f=o[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*t.length+s);(o=f.exec(e))!=null;){if(n=o[1]||o[2]||o[3]||o[4]||o[5]||o[6],!n)continue;if(i=[...n].length,o[3]||o[4]){d+=i;continue}else if((o[5]||o[6])&&s%3&&!((s+i)%3)){l+=i;continue}if(d-=i,d>0)continue;i=Math.min(i,i+d+l);let g=[...o[0]][0].length,c=t.slice(0,s+o.index+g+i);if(Math.min(s,i)%2){let y=c.slice(1,-1);return{type:"em",raw:c,text:y,tokens:this.lexer.inlineTokens(y)}}let v=c.slice(2,-2);return{type:"strong",raw:c,text:v,tokens:this.lexer.inlineTokens(v)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let a=e[2].replace(this.rules.other.newLineCharGlobal," "),o=this.rules.other.nonSpaceChar.test(a),r=this.rules.other.startingSpaceChar.test(a)&&this.rules.other.endingSpaceChar.test(a);return o&&r&&(a=a.substring(1,a.length-1)),{type:"codespan",raw:e[0],text:a}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){let e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let a,o;return e[2]==="@"?(a=e[1],o="mailto:"+a):(a=e[1],o=a),{type:"link",raw:e[0],text:a,href:o,tokens:[{type:"text",raw:a,text:a}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let a,o;if(e[2]==="@")a=e[0],o="mailto:"+a;else{let r;do r=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(r!==e[0]);a=e[0],e[1]==="www."?o="http://"+e[0]:o=e[0]}return{type:"link",raw:e[0],text:a,href:o,tokens:[{type:"text",raw:a,text:a}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let a=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:a}}}},E=class pe{tokens;options;state;tokenizer;inlineQueue;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||N,this.options.tokenizer=this.options.tokenizer||new oe,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let a={other:A,block:ee.normal,inline:V.normal};this.options.pedantic?(a.block=ee.pedantic,a.inline=V.pedantic):this.options.gfm&&(a.block=ee.gfm,this.options.breaks?a.inline=V.breaks:a.inline=V.gfm),this.tokenizer.rules=a}static get rules(){return{block:ee,inline:V}}static lex(e,a){return new pe(a).lex(e)}static lexInline(e,a){return new pe(a).inlineTokens(e)}lex(e){e=e.replace(A.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let a=0;a<this.inlineQueue.length;a++){let o=this.inlineQueue[a];this.inlineTokens(o.src,o.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,a=[],o=!1){for(this.options.pedantic&&(e=e.replace(A.tabCharGlobal,"    ").replace(A.spaceLine,""));e;){let r;if(this.options.extensions?.block?.some(n=>(r=n.call({lexer:this},e,a))?(e=e.substring(r.raw.length),a.push(r),!0):!1))continue;if(r=this.tokenizer.space(e)){e=e.substring(r.raw.length);let n=a.at(-1);r.raw.length===1&&n!==void 0?n.raw+=`
`:a.push(r);continue}if(r=this.tokenizer.code(e)){e=e.substring(r.raw.length);let n=a.at(-1);n?.type==="paragraph"||n?.type==="text"?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.at(-1).src=n.text):a.push(r);continue}if(r=this.tokenizer.fences(e)){e=e.substring(r.raw.length),a.push(r);continue}if(r=this.tokenizer.heading(e)){e=e.substring(r.raw.length),a.push(r);continue}if(r=this.tokenizer.hr(e)){e=e.substring(r.raw.length),a.push(r);continue}if(r=this.tokenizer.blockquote(e)){e=e.substring(r.raw.length),a.push(r);continue}if(r=this.tokenizer.list(e)){e=e.substring(r.raw.length),a.push(r);continue}if(r=this.tokenizer.html(e)){e=e.substring(r.raw.length),a.push(r);continue}if(r=this.tokenizer.def(e)){e=e.substring(r.raw.length);let n=a.at(-1);n?.type==="paragraph"||n?.type==="text"?(n.raw+=`
`+r.raw,n.text+=`
`+r.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(e)){e=e.substring(r.raw.length),a.push(r);continue}if(r=this.tokenizer.lheading(e)){e=e.substring(r.raw.length),a.push(r);continue}let s=e;if(this.options.extensions?.startBlock){let n=1/0,i=e.slice(1),d;this.options.extensions.startBlock.forEach(l=>{d=l.call({lexer:this},i),typeof d=="number"&&d>=0&&(n=Math.min(n,d))}),n<1/0&&n>=0&&(s=e.substring(0,n+1))}if(this.state.top&&(r=this.tokenizer.paragraph(s))){let n=a.at(-1);o&&n?.type==="paragraph"?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):a.push(r),o=s.length!==e.length,e=e.substring(r.raw.length);continue}if(r=this.tokenizer.text(e)){e=e.substring(r.raw.length);let n=a.at(-1);n?.type==="text"?(n.raw+=`
`+r.raw,n.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):a.push(r);continue}if(e){let n="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(n);break}else throw new Error(n)}}return this.state.top=!0,a}inline(e,a=[]){return this.inlineQueue.push({src:e,tokens:a}),a}inlineTokens(e,a=[]){let o=e,r=null;if(this.tokens.links){let i=Object.keys(this.tokens.links);if(i.length>0)for(;(r=this.tokenizer.rules.inline.reflinkSearch.exec(o))!=null;)i.includes(r[0].slice(r[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(r=this.tokenizer.rules.inline.anyPunctuation.exec(o))!=null;)o=o.slice(0,r.index)+"++"+o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(r=this.tokenizer.rules.inline.blockSkip.exec(o))!=null;)o=o.slice(0,r.index)+"["+"a".repeat(r[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let s=!1,n="";for(;e;){s||(n=""),s=!1;let i;if(this.options.extensions?.inline?.some(l=>(i=l.call({lexer:this},e,a))?(e=e.substring(i.raw.length),a.push(i),!0):!1))continue;if(i=this.tokenizer.escape(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.tag(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.link(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(i.raw.length);let l=a.at(-1);i.type==="text"&&l?.type==="text"?(l.raw+=i.raw,l.text+=i.text):a.push(i);continue}if(i=this.tokenizer.emStrong(e,o,n)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.codespan(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.br(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.del(e)){e=e.substring(i.raw.length),a.push(i);continue}if(i=this.tokenizer.autolink(e)){e=e.substring(i.raw.length),a.push(i);continue}if(!this.state.inLink&&(i=this.tokenizer.url(e))){e=e.substring(i.raw.length),a.push(i);continue}let d=e;if(this.options.extensions?.startInline){let l=1/0,f=e.slice(1),g;this.options.extensions.startInline.forEach(c=>{g=c.call({lexer:this},f),typeof g=="number"&&g>=0&&(l=Math.min(l,g))}),l<1/0&&l>=0&&(d=e.substring(0,l+1))}if(i=this.tokenizer.inlineText(d)){e=e.substring(i.raw.length),i.raw.slice(-1)!=="_"&&(n=i.raw.slice(-1)),s=!0;let l=a.at(-1);l?.type==="text"?(l.raw+=i.raw,l.text+=i.text):a.push(i);continue}if(e){let l="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return a}},re=class{options;parser;constructor(t){this.options=t||N}space(t){return""}code({text:t,lang:e,escaped:a}){let o=(e||"").match(A.notSpaceStart)?.[0],r=t.replace(A.endingNewline,"")+`
`;return o?'<pre><code class="language-'+D(o)+'">'+(a?r:D(r,!0))+`</code></pre>
`:"<pre><code>"+(a?r:D(r,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,a=t.start,o="";for(let n=0;n<t.items.length;n++){let i=t.items[n];o+=this.listitem(i)}let r=e?"ol":"ul",s=e&&a!==1?' start="'+a+'"':"";return"<"+r+s+`>
`+o+"</"+r+`>
`}listitem(t){let e="";if(t.task){let a=this.checkbox({checked:!!t.checked});t.loose?t.tokens[0]?.type==="paragraph"?(t.tokens[0].text=a+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=a+" "+D(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:a+" ",text:a+" ",escaped:!0}):e+=a+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",a="";for(let r=0;r<t.header.length;r++)a+=this.tablecell(t.header[r]);e+=this.tablerow({text:a});let o="";for(let r=0;r<t.rows.length;r++){let s=t.rows[r];a="";for(let n=0;n<s.length;n++)a+=this.tablecell(s[n]);o+=this.tablerow({text:a})}return o&&(o=`<tbody>${o}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+o+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),a=t.header?"th":"td";return(t.align?`<${a} align="${t.align}">`:`<${a}>`)+e+`</${a}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${D(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:a}){let o=this.parser.parseInline(a),r=We(t);if(r===null)return o;t=r;let s='<a href="'+t+'"';return e&&(s+=' title="'+D(e)+'"'),s+=">"+o+"</a>",s}image({href:t,title:e,text:a,tokens:o}){o&&(a=this.parser.parseInline(o,this.parser.textRenderer));let r=We(t);if(r===null)return D(a);t=r;let s=`<img src="${t}" alt="${a}"`;return e&&(s+=` title="${D(e)}"`),s+=">",s}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:D(t.text)}},Ce=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},R=class me{options;renderer;textRenderer;constructor(e){this.options=e||N,this.options.renderer=this.options.renderer||new re,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ce}static parse(e,a){return new me(a).parse(e)}static parseInline(e,a){return new me(a).parseInline(e)}parse(e,a=!0){let o="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let i=s,d=this.options.extensions.renderers[i.type].call({parser:this},i);if(d!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(i.type)){o+=d||"";continue}}let n=s;switch(n.type){case"space":{o+=this.renderer.space(n);continue}case"hr":{o+=this.renderer.hr(n);continue}case"heading":{o+=this.renderer.heading(n);continue}case"code":{o+=this.renderer.code(n);continue}case"table":{o+=this.renderer.table(n);continue}case"blockquote":{o+=this.renderer.blockquote(n);continue}case"list":{o+=this.renderer.list(n);continue}case"html":{o+=this.renderer.html(n);continue}case"paragraph":{o+=this.renderer.paragraph(n);continue}case"text":{let i=n,d=this.renderer.text(i);for(;r+1<e.length&&e[r+1].type==="text";)i=e[++r],d+=`
`+this.renderer.text(i);a?o+=this.renderer.paragraph({type:"paragraph",raw:d,text:d,tokens:[{type:"text",raw:d,text:d,escaped:!0}]}):o+=d;continue}default:{let i='Token with "'+n.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return o}parseInline(e,a=this.renderer){let o="";for(let r=0;r<e.length;r++){let s=e[r];if(this.options.extensions?.renderers?.[s.type]){let i=this.options.extensions.renderers[s.type].call({parser:this},s);if(i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){o+=i||"";continue}}let n=s;switch(n.type){case"escape":{o+=a.text(n);break}case"html":{o+=a.html(n);break}case"link":{o+=a.link(n);break}case"image":{o+=a.image(n);break}case"strong":{o+=a.strong(n);break}case"em":{o+=a.em(n);break}case"codespan":{o+=a.codespan(n);break}case"br":{o+=a.br(n);break}case"del":{o+=a.del(n);break}case"text":{o+=a.text(n);break}default:{let i='Token with "'+n.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return o}},te=class{options;block;constructor(t){this.options=t||N}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?E.lex:E.lexInline}provideParser(){return this.block?R.parse:R.parseInline}},Yt=class{defaults=he();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=R;Renderer=re;TextRenderer=Ce;Lexer=E;Tokenizer=oe;Hooks=te;constructor(...t){this.use(...t)}walkTokens(t,e){let a=[];for(let o of t)switch(a=a.concat(e.call(this,o)),o.type){case"table":{let r=o;for(let s of r.header)a=a.concat(this.walkTokens(s.tokens,e));for(let s of r.rows)for(let n of s)a=a.concat(this.walkTokens(n.tokens,e));break}case"list":{let r=o;a=a.concat(this.walkTokens(r.items,e));break}default:{let r=o;this.defaults.extensions?.childTokens?.[r.type]?this.defaults.extensions.childTokens[r.type].forEach(s=>{let n=r[s].flat(1/0);a=a.concat(this.walkTokens(n,e))}):r.tokens&&(a=a.concat(this.walkTokens(r.tokens,e)))}}return a}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(a=>{let o={...a};if(o.async=this.defaults.async||o.async||!1,a.extensions&&(a.extensions.forEach(r=>{if(!r.name)throw new Error("extension name required");if("renderer"in r){let s=e.renderers[r.name];s?e.renderers[r.name]=function(...n){let i=r.renderer.apply(this,n);return i===!1&&(i=s.apply(this,n)),i}:e.renderers[r.name]=r.renderer}if("tokenizer"in r){if(!r.level||r.level!=="block"&&r.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let s=e[r.level];s?s.unshift(r.tokenizer):e[r.level]=[r.tokenizer],r.start&&(r.level==="block"?e.startBlock?e.startBlock.push(r.start):e.startBlock=[r.start]:r.level==="inline"&&(e.startInline?e.startInline.push(r.start):e.startInline=[r.start]))}"childTokens"in r&&r.childTokens&&(e.childTokens[r.name]=r.childTokens)}),o.extensions=e),a.renderer){let r=this.defaults.renderer||new re(this.defaults);for(let s in a.renderer){if(!(s in r))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;let n=s,i=a.renderer[n],d=r[n];r[n]=(...l)=>{let f=i.apply(r,l);return f===!1&&(f=d.apply(r,l)),f||""}}o.renderer=r}if(a.tokenizer){let r=this.defaults.tokenizer||new oe(this.defaults);for(let s in a.tokenizer){if(!(s in r))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;let n=s,i=a.tokenizer[n],d=r[n];r[n]=(...l)=>{let f=i.apply(r,l);return f===!1&&(f=d.apply(r,l)),f}}o.tokenizer=r}if(a.hooks){let r=this.defaults.hooks||new te;for(let s in a.hooks){if(!(s in r))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;let n=s,i=a.hooks[n],d=r[n];te.passThroughHooks.has(s)?r[n]=l=>{if(this.defaults.async)return Promise.resolve(i.call(r,l)).then(g=>d.call(r,g));let f=i.call(r,l);return d.call(r,f)}:r[n]=(...l)=>{let f=i.apply(r,l);return f===!1&&(f=d.apply(r,l)),f}}o.hooks=r}if(a.walkTokens){let r=this.defaults.walkTokens,s=a.walkTokens;o.walkTokens=function(n){let i=[];return i.push(s.call(this,n)),r&&(i=i.concat(r.call(this,n))),i}}this.defaults={...this.defaults,...o}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return E.lex(t,e??this.defaults)}parser(t,e){return R.parse(t,e??this.defaults)}parseMarkdown(t){return(a,o)=>{let r={...o},s={...this.defaults,...r},n=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&r.async===!1)return n(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof a>"u"||a===null)return n(new Error("marked(): input parameter is undefined or null"));if(typeof a!="string")return n(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(a)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=t);let i=s.hooks?s.hooks.provideLexer():t?E.lex:E.lexInline,d=s.hooks?s.hooks.provideParser():t?R.parse:R.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(a):a).then(l=>i(l,s)).then(l=>s.hooks?s.hooks.processAllTokens(l):l).then(l=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then(l=>d(l,s)).then(l=>s.hooks?s.hooks.postprocess(l):l).catch(n);try{s.hooks&&(a=s.hooks.preprocess(a));let l=i(a,s);s.hooks&&(l=s.hooks.processAllTokens(l)),s.walkTokens&&this.walkTokens(l,s.walkTokens);let f=d(l,s);return s.hooks&&(f=s.hooks.postprocess(f)),f}catch(l){return n(l)}}}onError(t,e){return a=>{if(a.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let o="<p>An error occurred:</p><pre>"+D(a.message+"",!0)+"</pre>";return e?Promise.resolve(o):o}if(e)return Promise.reject(a);throw a}}},O=new Yt;function p(t,e){return O.parse(t,e)}p.options=p.setOptions=function(t){return O.setOptions(t),p.defaults=O.defaults,Ke(p.defaults),p};p.getDefaults=he;p.defaults=N;p.use=function(...t){return O.use(...t),p.defaults=O.defaults,Ke(p.defaults),p};p.walkTokens=function(t,e){return O.walkTokens(t,e)};p.parseInline=O.parseInline;p.Parser=R;p.parser=R.parse;p.Renderer=re;p.TextRenderer=Ce;p.Lexer=E;p.lexer=E.lex;p.Tokenizer=oe;p.Hooks=te;p.parse=p;var pa=p.options,ma=p.setOptions,ha=p.use,ga=p.walkTokens,xa=p.parseInline;var ba=R.parse,ya=E.lex;var it=(t,e,a=[])=>{let o=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(e).forEach(r=>{o.setAttribute(r,String(e[r]))}),a.length&&a.forEach(r=>{let s=it(...r);o.appendChild(s)}),o},lt=([t,e,a])=>it(t,e,a);var Jt=t=>Array.from(t.attributes).reduce((e,a)=>(e[a.name]=a.value,e),{}),ea=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",ta=t=>t.flatMap(ea).map(a=>a.trim()).filter(Boolean).filter((a,o,r)=>r.indexOf(a)===o).join(" "),aa=t=>t.replace(/(\w)(\w*)(_|-|\s*)/g,(e,a,o)=>a.toUpperCase()+o.toLowerCase()),Ae=(t,{nameAttr:e,icons:a,attrs:o})=>{let r=t.getAttribute(e);if(r==null)return;let s=aa(r),n=a[s];if(!n)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);let i=Jt(t),[d,l,f]=n,g={...l,"data-lucide":r,...o,...i},c=ta(["lucide",`lucide-${r}`,i,o]);c&&Object.assign(g,{class:c});let v=lt([d,g,f]);return t.parentNode?.replaceChild(v,t)};var m={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var Ie=["svg",m,[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]]];var Se=["svg",m,[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]]];var Te=["svg",m,[["path",{d:"M12 7v14"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]]];var Pe=["svg",m,[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18"}]]];var Be=["svg",m,[["path",{d:"M18 6 7 17l-5-5"}],["path",{d:"m22 10-7.5 7.5L13 16"}]]];var De=["svg",m,[["path",{d:"M20 6 9 17l-5-5"}]]];var Ee=["svg",m,[["path",{d:"m15 18-6-6 6-6"}]]];var Re=["svg",m,[["path",{d:"m9 18 6-6-6-6"}]]];var Me=["svg",m,[["circle",{cx:"12",cy:"12",r:"10"}],["polyline",{points:"12 6 12 12 16.5 12"}]]];var Le=["svg",m,[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15"}]]];var qe=["svg",m,[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"}],["path",{d:"M22 10v6"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5"}]]];var Fe=["svg",m,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]]];var $e=["svg",m,[["circle",{cx:"12",cy:"16",r:"1"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3"}]]];var Oe=["svg",m,[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3"}]]];var Ne=["svg",m,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];var Qe=["svg",m,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];var ie=({icons:t={},nameAttr:e="data-lucide",attrs:a={}}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");let o=document.querySelectorAll(`[${e}]`);if(Array.from(o).forEach(r=>Ae(r,{nameAttr:e,icons:t,attrs:a})),e==="data-lucide"){let r=document.querySelectorAll("[icon-name]");r.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(r).forEach(s=>Ae(s,{nameAttr:"icon-name",icons:t,attrs:a})))}};var le=10800*1e3;function dt(t){let e=t.split(/^# Part \d+[^\n]*$/m),a=b=>b.replace(/Time Allotted:[\s\S]*?SOLVED PAPER MARCH 2023/g,"").replace(/^### PDF page \d+\s*$/gm,"").replace(/^UGC NET PAPER[^\n]*$|^GENERAL APTITUDE$|^SOLVED PAPER MARCH 2023$/gm,"").replace(/\u0008/g,"").trim(),o=a(e[1]||"").replace(/\n\s*3\s*\n(?=\s*a\.)/,`
`),r=[...o.matchAll(/^Q\.?([0-9]+)\.\s*/gm)],s=new Map([...String(e[2]).matchAll(/^\s*(\d+)\s*\n([a-d])\s*$/gm)].map(b=>[Number(b[1]),b[2].toUpperCase()])),n=a(e[3]||""),i=[...n.matchAll(/^\s*(\d+)\.\s*\n\s*Option \(([a-d])\) is correct\./gm)],d=new Map(i.map((b,T)=>[Number(b[1]),n.slice(b.index,i[T+1]?.index??n.length).replace(/^\s*\d+\.\s*\n/,"").replace(/\n---\s*$/,"").trim()])),l=p.lexer(e[5]||"").filter(b=>b.type==="list").flatMap(b=>b.items).map(b=>b.text),f=o.indexOf("Direction for Questions (46 -50):"),g=r.find(b=>Number(b[1])===46)?.index,c=o.slice(f,g).trim(),v=o.slice(o.indexOf("Years \u2193"),r[0]?.index).match(/\b\d+\b/g)||[];if(v.length!==66)throw new Error("Paper I athlete data must contain six years with ten values each.");let y=`| Year | A M | A F | B M | B F | C M | C F | D M | D F | E M | E F |
|---|---|---|---|---|---|---|---|---|---|---|
`+Array.from({length:6},(b,T)=>`| ${v.slice(T*11,(T+1)*11).join(" | ")} |`).join(`
`),C=r.map((b,T)=>{let B=Number(b[1]),F=o.slice(b.index+b[0].length,r[T+1]?.index??o.length);B===45&&(F=F.slice(0,F.indexOf("Direction for Questions (46 -50):")));let $=F.trim().replace(/\n---\s*$/,"").split(/^\s*([a-d])\.\s+/m),ue=l.filter(I=>new RegExp(`^\\*\\*Q${B}(?::| wording:)`).test(I)),P={id:B,prompt:$[0].trim(),options:[],accepted:[s.get(B)],explanation:`${d.get(B)||""}

${ue.map(I=>`**Source/key note:** ${I}`).join(`

`)}`.trim()};for(let I=1;I<$.length;I+=2)P.options.push({key:$[I].toUpperCase(),text:$[I+1].trim()});return B<=5&&(P.passage="Year-wise country-wise distribution of male (M) and female (F) athletes.",P.passageTable=y,P.passageLabel="Data \xB7 Questions 1\u20135"),B>=46&&(P.passage=c,P.passageLabel="Passage \xB7 Questions 46\u201350"),P});if(C.length!==50||C.some((b,T)=>b.id!==T+1||!b.prompt||b.options.length!==4||!b.accepted[0]||!d.has(b.id)))throw new Error("Paper I must contain 50 complete questions, four options, a printed answer key, and explanations.");return C}function ft(t){let e=p.lexer(t),a=[],o;for(let r of e)if(r.type==="heading"&&/^Question \d+$/.test(r.text))o={id:Number(r.text.replace("Question ","")),prompt:"",options:[],accepted:[],explanation:""},a.push(o);else if(o&&r.type==="blockquote"){let n=r.raw.replace(/^ {0,3}> ?/gm,"").trim().split(/^\(([A-D])\)\s*/m);o.prompt+=n[0].replace(/^\d+\.\s*/,"").trim();for(let i=1;i<n.length;i+=2)o.options.push({key:n[i],text:n[i+1].trim()})}else if(o&&r.type==="paragraph"){let s=r.raw.match(/^\*\*Answer:\s*([A-D, ]+)\*\*/);s?o.accepted=s[1].split(",").map(n=>n.trim()):o.explanation+=r.raw+`

`}for(let[r,s,n]of[[90,91,95],[95,96,100]]){let i=a.find(l=>l.id===r)?.options.at(-1),d=i?.text.search(/Read the (?:given paragraph|following passage)/)??-1;if(d!==-1){let l=i.text.slice(d);i.text=i.text.slice(0,d).trim();for(let f of a.filter(g=>g.id>=s&&g.id<=n))f.passage=l}}if(a.length!==100||a.some((r,s)=>r.id!==s+1||!r.prompt||r.options.length!==4||!r.accepted.length||!r.explanation))throw new Error("The question file must contain 100 complete, sequential questions with four options, answers, and explanations.");return a}function Q(t,e=Date.now()){return Math.max(0,t.deadline-e)}function U(t,e){let a=t.filter(r=>r.accepted.includes(e[r.id])).length,o=t.filter(r=>r.options.some(s=>s.key===e[r.id])).length;return{correct:a,answered:o,incorrect:o-a,unanswered:t.length-o,score:a*2,total:t.length*2}}var ut=`# UGC NET Psychology \u2014 March 2023 (AN Shift)

> **Scope:** Questions 1\u2013100 and the answer key from the March 2023 AN Shift section only. The subsequent September 2022 section (the page after the answer key) has been excluded.

## How to use this document
- Each question is transcribed from the supplied PDF, with obvious OCR spacing/typographical issues cleaned where safe.
- The **Answer** line follows the answer key printed in the PDF.
- **Explanation & NET study notes** add the underlying concept, formula, distinction or exam-relevant context.
- Where the printed key or question wording appears ambiguous or technically imprecise, this is explicitly flagged rather than silently changed.

## Quick answer key

1. **C**
2. **D**
3. **B**
4. **A**
5. **B**
6. **D**
7. **B**
8. **C**
9. **C**
10. **A**
11. **A**
12. **C**
13. **D**
14. **C**
15. **C**
16. **B**
17. **C**
18. **A, C**
19. **B**
20. **C**
21. **C**
22. **D**
23. **C**
24. **B**
25. **C**
26. **B**
27. **B**
28. **B**
29. **A**
30. **B**
31. **D**
32. **C**
33. **D**
34. **D**
35. **B**
36. **C**
37. **C**
38. **B**
39. **B**
40. **C**
41. **C**
42. **D**
43. **D**
44. **A**
45. **B**
46. **C**
47. **D**
48. **B**
49. **A**
50. **B**
51. **D**
52. **A**
53. **D, A**
54. **D**
55. **C**
56. **B**
57. **A**
58. **D**
59. **A**
60. **B**
61. **A**
62. **C**
63. **B**
64. **D**
65. **C**
66. **D**
67. **C**
68. **B**
69. **B**
70. **B**
71. **D**
72. **C**
73. **D**
74. **B**
75. **A**
76. **A**
77. **B**
78. **C**
79. **D**
80. **C**
81. **B**
82. **B**
83. **A**
84. **C**
85. **D**
86. **A**
87. **C**
88. **A**
89. **B**
90. **B**
91. **C**
92. **C**
93. **B**
94. **B**
95. **C**
96. **C**
97. **B**
98. **D**
99. **D**
100. **C**

---

## Questions with explanations

### Question 1

> 1. The term 'integral yoga' is popularized by:
> (A) Panini
> (B) Patanjali
> (C) Sri Aurobindo
> (D) Ramakrishna Paramahansa

**Answer: C**

**Explanation & NET study notes:** Integral Yoga is associated with Sri Aurobindo. It integrates the development of the whole being\u2014physical, vital, mental, psychic and spiritual\u2014rather than focusing on one narrow yogic discipline.

### Question 2

> 2. Which of the following correlation coefficient represents the variables with the weakest degree of
> relationship?
> (A) - . 84
> (B) - . 56
> (C) + . 75
> (D) + . 08

**Answer: D**

**Explanation & NET study notes:** Correlation strength is judged by the absolute value of r, not its sign. Values near 0 indicate a weak linear relationship; +0.08 is weakest here. The sign only indicates direction.

### Question 3

> 3. If observers disagree 15 times out of 75, then the inter-rater reliability is:
> (A) 50%
> (B) 80%
> (C) 20%
> (D) 60%

**Answer: B**

**Explanation & NET study notes:** Agreement = (75 \u2212 15) / 75 \xD7 100 = 80%. Simple percentage agreement is a basic inter-rater agreement index; chance-corrected indices such as Cohen\u2019s kappa are often preferable.

### Question 4

> 4. If a student scored 12 on a test, of which the mean is 16 and the standard deviation is 4, what is his
> Z-score?
> (A) - 1.0
> (B) + 1.0
> (C) + 3.0
> (D) 0.0

**Answer: A**

**Explanation & NET study notes:** Z = (X \u2212 mean) / SD = (12 \u2212 16) / 4 = \u22121. The score is one standard deviation below the mean.

### Question 5

> 5. Which one is the correct formula for variance?
> (\u2211 \u{1D44B}\u{1D44B}\u2212\u2211 \u{1D44B}\u{1D44B}\uFFFD)2
> (A) Variance =
> \u{1D441}\u{1D441}
> \u2211(\u{1D44B}\u{1D44B}\u2212\u{1D44B}\u{1D44B}\uFFFD)2
> (B) Variance =
> \u{1D441}\u{1D441}
> (\u2211 \u{1D44B}\u{1D44B}\u2212\u{1D44B}\u{1D44B}\uFFFD)2
> (C) Variance =
> \u{1D441}\u{1D441}2
> \uFFFD\u2211 \u{1D44B}\u{1D44B} 2 \u2212\u{1D44B}\u{1D44B}\uFFFD 2 \uFFFD
> (D) Variance =
> \u{1D441}\u{1D441}

**Answer: B**

**Explanation & NET study notes:** Population variance is \u03A3(X \u2212 X\u0304)\xB2/N; sample variance commonly uses n \u2212 1 in the denominator. Variance is the average squared deviation and is expressed in squared units.

### Question 6

> 6. A researcher is interested in testing the effectiveness of Pre-post intervention on a single group.
> The statistical test that could be used is:
> (A) Correlation
> (B) Chi square
> (C) ANOVA
> (D) \u2018t\u2019 test

**Answer: D**

**Explanation & NET study notes:** For the same participants measured before and after an intervention, use a paired-samples (dependent) t-test when assumptions are met. With more than two time points, repeated-measures ANOVA may be appropriate.

### Question 7

> 7. Which of the following is correct?
> (A) Test-retest reliability is determined by assessing the degree of relationship between scores on
> one half of a test with scores on the other half of the test.
> (B) Alternate forms reliability is determined by assessing the degree of relationship between scores
> on two different equivalent tests.
> (C) Split-half reliability is determined by assessing the degree of relationship between scores on the
> same test, administered on two different occasions.
> (D) Internal reliability is the extent to which the effect of the dependent variable is the result of the
> independent variable and not some other aspect of the study.

**Answer: B**

**Explanation & NET study notes:** Alternate-forms reliability correlates scores on two equivalent versions of a test. Test\u2013retest uses the same test on two occasions; split-half compares two halves of one administration.

### Question 8

> 8. Cog-screen, a computer assisted tool, has been used in the selection of ________
> (A) Human Resource Managers
> (B) Doctors
> (C) Airline pilots
> (D) Electronic Media journalists

**Answer: C**

**Explanation & NET study notes:** The answer key identifies airline pilots. Computerised cognitive screening can assess abilities relevant to aviation selection, such as attention, memory and psychomotor performance.

### Question 9

> 9. Utility of Semantic differential scale is not contingent upon:
> (A) Finding appropriate adjective pairs
> (B) Meaning of the words
> (C) Length of the items in the scale
> (D) Contextual reference of the items

**Answer: C**

**Explanation & NET study notes:** Semantic differential scales use bipolar adjective anchors (e.g., good\u2013bad) to measure connotative meaning or attitudes. Appropriate adjective pairs, meaning and context matter; item length is not the defining requirement.

### Question 10

> 10. Which structure of the Limbic system is mostly responsible for controlling the emotional behaviour
> of fear?
> (A) Amygdala
> (B) Hippocampus
> (C) Cingulate gyrus
> (D) Mammilary bodies

**Answer: A**

**Explanation & NET study notes:** The amygdala is central to processing threat and fear learning and coordinating fear-related responses. The hippocampus is more strongly associated with contextual and episodic memory.

### Question 11

> 11. REM sleep is characterized by one of the following conditions.
> (A) PGO waves
> (B) ULPA
> (C) Flip-flop
> (D) Histamine

**Answer: A**

**Explanation & NET study notes:** REM sleep is associated with ponto-geniculo-occipital (PGO) waves, rapid eye movements, vivid dreaming and muscle atonia. REM alternates cyclically with NREM sleep.

### Question 12

> 12. Class is to the ________ property of measurement as time is to the ______ property of measurement
> (A) Magnitude, Identity
> (B) Equal unit size, magnitude
> (C) Identity, absolute zero
> (D) Absolute zero, equal unit size

**Answer: C**

**Explanation & NET study notes:** \u201CClass\u201D is a nominal category: identity only. Time has a meaningful absolute zero and equal units, making it a ratio-scale variable. The answer key marks C.

### Question 13

> 13. A genetic inability to metabolize amino acid phenylalanine leads to one of the following Conditions.
> (A) Down's syndrome
> (B) Autism
> (C) Cerebral Palsy
> (D) PKU

**Answer: D**

**Explanation & NET study notes:** Phenylketonuria (PKU) is an inherited metabolic disorder, usually due to phenylalanine hydroxylase deficiency, causing phenylalanine accumulation. Early dietary management prevents severe neurodevelopmental consequences.

### Question 14

> 14. A person who had experienced an intensive negative emotion fails to recollect the emotional event.
> This is known as:
> (A) Forgetting due to interference
> (B) Retrieval failure
> (C) Motivated Forgetting
> (D) Forgetting due to decay

**Answer: C**

**Explanation & NET study notes:** Motivated forgetting refers to difficulty recalling distressing or threatening material, traditionally discussed in relation to repression/suppression. It differs from ordinary decay, interference and cue-dependent retrieval failure.

### Question 15

> 15. The tendency of a consumer to decide on buying a product that was repeatedly appearing on T.V.
> screen is attributed to
> (A) Effectiveness of the product
> (B) Price of the product
> (C) Subliminal perception
> (D) Utility of the product

**Answer: C**

**Explanation & NET study notes:** Repeated exposure can increase familiarity and liking\u2014the mere-exposure effect. The paper\u2019s key calls this subliminal perception, but repetition on television is not necessarily subliminal: subliminal exposure requires stimuli below conscious awareness.

### Question 16

> 16. Brain lesions of sub cortical regions produced by passing electrical current through an insulated
> electrode is called:
> (A) Excitotoxic lesions
> (B) Radio frequency lesions
> (C) Sham lesions
> (D) Excitatory lesions

**Answer: B**

**Explanation & NET study notes:** Radio-frequency lesions are produced by passing high-frequency electrical current through an insulated electrode tip, generating heat that damages a targeted brain region. Sham lesions are control procedures without the active lesion.

### Question 17

> 17. A person dressed in a gorilla suit walked unnoticed through a group of students playing basket ball.
> How can this phenomenon be described?
> (A) Change of attention
> (B) Attention loss
> (C) Inattention blindness
> (D) Attention lapse

**Answer: C**

**Explanation & NET study notes:** This is inattentional blindness: failure to notice an unexpected visible object because attention is engaged elsewhere. The classic \u201Cinvisible gorilla\u201D demonstration illustrates limits of selective attention.

### Question 18

> 18. The light sensation from the left and right visual field travels to the visual cortex through:
> (A) Lateral geniculate nucleus
> (B) Superior colliculus
> (C) Optic radiations
> (D) Pulvinar nucleus

**Answer: A, C**

**Explanation & NET study notes:** The conventional pathway is retina \u2192 optic nerve/tract \u2192 lateral geniculate nucleus (LGN) of thalamus \u2192 optic radiations \u2192 primary visual cortex. The answer key lists both A and C because both are successive relay structures in the pathway.

**Source/key note:** The printed key accepts both A and C; the visual pathway includes both LGN and optic radiations.

### Question 19

> 19. Step by step interaction of operating a mechanical gadget is an example of :
> (A) Trouble shooting
> (B) Algorithm
> (C) Heuristic approach
> (D) Means-end analysis

**Answer: B**

**Explanation & NET study notes:** An algorithm is a defined sequence of steps that, when followed correctly, solves a problem. A heuristic is a quicker rule of thumb that may not guarantee a solution.

### Question 20

> 20. Making a reference to a respected person believed to be well informed, when one's own logic or
> reasoning is called:
> (A) Arguing in circles
> (B) False Analogy
> (C) Appeal to authority
> (D) Overgeneralization

**Answer: C**

**Explanation & NET study notes:** An appeal to authority supports a claim by citing a perceived expert. It is a fallacy when the authority is irrelevant, unqualified, or treated as decisive evidence instead of evaluating the argument.

### Question 21

> 21. When a person who needs to use a tool in a novel way but cannot do, it is attributed to:
> (A) Lack of interest
> (B) Lack of motor skill
> (C) Functional fixedness
> (D) Lack of motivation

**Answer: C**

**Explanation & NET study notes:** Functional fixedness is the tendency to see an object only in its customary function, preventing novel uses. It is a classic obstacle in problem solving.

### Question 22

> 22. Which of the following examines information processing approach to intelligence?
> (A) Overall success in living
> (B) Structure of intelligence
> (C) Functions of intelligence
> (D) Processes underlying intelligent behaviour

**Answer: D**

**Explanation & NET study notes:** The information-processing approach studies the mental operations underlying intelligent behaviour\u2014how information is encoded, stored, retrieved and used\u2014not merely the structure or overall outcome of intelligence.

### Question 23

> 23. In the Drive Reduction Theory given by Hull, SHR stands for:
> (A) Excitatory potential
> (B) Drive reduction
> (C) Habit strength
> (D) Inhibitory potential

**Answer: C**

**Explanation & NET study notes:** In Hull\u2019s notation, sHr (habit strength) represents the learned strength of the stimulus\u2013response connection. Hull\u2019s behaviour potential also involved drive and incentive factors.

### Question 24

> 24. Which of the following attributions indicate an optimistic explanatory style in the face of Stress?
> (A) Internal cause, specific impact and unstable outcome
> (B) External cause, specific impact and unstable outcome
> (C) Internal cause, global impact and unstable outcome
> (D) Internal cause, global impact and stable outcome

**Answer: B**

**Explanation & NET study notes:** For negative events, an optimistic explanatory style tends to explain causes as external, specific and unstable/temporary. For positive events the pattern is typically internal, global and stable.

### Question 25

> 25. An individual encountering prolonged stress is prone to suffer from skin infection because:
> (A) Corticotropin Releasing Factor (CRF) flows into the blood causing damage to the skin.
> (B) Adrenalin released into blood absorbs the vitamin B that is necessary for nourishing the skin
> (C) Cortisol released into blood causes damage to the T and B cells in the WBC
> (D) Corticosteroids get deposited in the skin due to stress

**Answer: C**

**Explanation & NET study notes:** Prolonged stress activates the HPA axis and increases glucocorticoids such as cortisol. Sustained cortisol can suppress immune functioning, including T- and B-lymphocyte activity, increasing susceptibility to infection.

### Question 26

> 26. Hardiness is a combination of three cognitive factors involved in the interpretation of life events.
> Find out from the following which is not correct for hardy personality.
> (A) Control
> (B) Coping
> (C) Challenge
> (D) Commitment

**Answer: B**

**Explanation & NET study notes:** Kobasa\u2019s hardiness comprises commitment, control and challenge. \u201CCoping\u201D is a response/process, not one of the three defining components.

### Question 27

> 27. Cognitive dissonance theory explains that attitude change occurs as a result of :
> (A) Distance between one's belief and behaviour
> (B) Reduction of the unpleasant arousal people experience while they engage in a behavior that
> conflicts with their attitude.
> (C) A resolution of conflict by a neutral third party who studies both sides and imposes a
> settlement.
> (D) A strategy in which people create obstacles to success so that potential failure can be blamed on
> these external factors.

**Answer: B**

**Explanation & NET study notes:** Cognitive dissonance is the aversive tension produced by inconsistent cognitions or by behaviour conflicting with attitudes. People may change attitudes or beliefs to reduce this discomfort.

### Question 28

> 28. Social loafing is defined as:
> (A) Personal characteristics that others view as insurmountable handicaps preventing competent or
> morally trustworthy behaviour
> (B) The tendency by group members to slack off and reduce their effort on additive tasks, which
> cause the group's output to fall short of its potential
> (C) The set of interpersonal relationships associated with the social position a person occupies
> (D) Individuals' concept of self in specific social roles.

**Answer: B**

**Explanation & NET study notes:** Social loafing is reduced individual effort when people work collectively on an additive task, especially when individual contributions are not identifiable. Making contributions identifiable can reduce it.

### Question 29

> 29. Which of the following is a group decision-making technique?
> (A) Brainstorming
> (B) Ordinal group technique
> (C) Risky shift
> (D) Random shift

**Answer: A**

**Explanation & NET study notes:** Brainstorming is a group idea-generation and decision-support technique that initially encourages many ideas without immediate criticism. \u201CNominal group technique\u201D is another established structured method; the item\u2019s option says \u201Cordinal\u201D.

**Source/key note:** The option printed as \u201COrdinal group technique\u201D may be a typographical error for \u201CNominal Group Technique\u201D; the printed key selects Brainstorming.

### Question 30

> 30. Which of the following is correct about the result of Milgram's study?
> (A) In the real word, most people will refuse to follow orders to inflict harm on a stranger
> (B) Many people will obey an authority figure even if innocent people get hurt
> (C) Most people are willing to give obviously wrong answers when ordered to do so
> (D) Most people stick to their own judgement even when group members unanimously disagree

**Answer: B**

**Explanation & NET study notes:** Milgram\u2019s obedience studies showed that many ordinary participants continued administering what they believed were harmful shocks when instructed by an experimenter, highlighting the power of authority and situational pressures.

### Question 31

> 31. Which of the following definitions is not correct according to Gestalt therapy?
> (A) Introjection refers to the internalized rules governing our thoughts, feelings and behavior which
> we absorb from parental and other influences from childhood onwards.
> (B) Retroflection refers to the process whereby we do to ourselves what we would like to do to
> someone else.
> (C) Confluence refers to the style of relating to other people which is based on an absence of
> conflict and a conviction that everyone should be in agreement
> (D) Deflection refers to the process of attributing aspects of ourselves to other people

**Answer: D**

**Explanation & NET study notes:** Deflection in Gestalt therapy means avoiding direct contact or awareness by diverting, generalising or avoiding. Attributing one\u2019s own disowned qualities to others is projection, so D is the incorrect definition.

### Question 32

> 32. The counsellor can use the following formula for a rough assessment of severity of client's problem,
> prescribed by Mehrabian and Reed (1969).
> (A) Distress+ Uncontrollability + Frequency
> (B) Distress + Uncontrollability - Frequency
> (C) Distress \xD7 uncontrollability \xD7 frequency
> (D) (Distress + controllability) \xD7 Frequency

**Answer: C**

**Explanation & NET study notes:** The cited rough severity formula is distress \xD7 uncontrollability \xD7 frequency. The three dimensions capture how upsetting, difficult to control and recurrent the problem is.

### Question 33

> 33. Which of the following name is associated with Play Therapy ?
> (A) Eric Berne
> (B) Elizabeth Hurlock
> (C) Gerard Egan
> (D) Virginia Axline

**Answer: D**

**Explanation & NET study notes:** Virginia Axline is strongly associated with non-directive play therapy and articulated principles for therapeutic work with children. Eric Berne is associated with transactional analysis; Egan with helping skills.

### Question 34

> 34. In REBT, treatment is based on:
> (A) Assessment of goals and activating events only
> (B) Diagnostic categories, beliefs and consequences
> (C) Believes and consequences only
> (D) Assessment of goals, activating events, believes and consequences

**Answer: D**

**Explanation & NET study notes:** REBT uses the ABC framework: Activating event, Beliefs and Consequences; treatment also clarifies goals and disputes irrational beliefs (often expanded as ABCDE). The wording in the key corresponds to assessing these elements.

### Question 35

> 35. Transactional analysis is concerned with four major areas of analysis. Which out of the following
> does not come under this ?
> (A) Structural analysis
> (B) Hypnotic analysis
> (C) Ground analysis
> (D) Game analysis

**Answer: B**

**Explanation & NET study notes:** Transactional analysis commonly includes structural, transactional, game and script analysis. \u201CHypnotic analysis\u201D is not one of its four major areas.

### Question 36

> 36. Which of the following is not relevant to a cardiac patient's behaviour of adherence to treatment?
> (A) Self-efficacy
> (B) Perception about how serious is the condition
> (C) Sense of humour
> (D) Perception of how much control one can exercise on health

**Answer: C**

**Explanation & NET study notes:** Treatment adherence is influenced by self-efficacy, perceived severity, perceived control, beliefs and barriers. Sense of humour is not a core health-belief/adherence determinant in this framework.

### Question 37

> 37. Which of the following is not a risk factor for hypertension ?
> (A) Obesity
> (B) Atherosclerosis
> (C) Multiple Sclerosis
> (D) Exposure to stress

**Answer: C**

**Explanation & NET study notes:** Obesity and stress are recognised hypertension risk factors; atherosclerosis is closely related to cardiovascular disease. Multiple sclerosis is a neurological demyelinating disease, not a standard hypertension risk factor.

### Question 38

> 38. Actions taken to identify and treat an illness or injury early with an aim of stopping or reversing the
> problem comes under
> (A) Primary prevention
> (B) Secondary prevention
> (C) Tertiary prevention
> (D) Protection prevention

**Answer: B**

**Explanation & NET study notes:** Secondary prevention aims at early detection and prompt treatment to halt or reverse illness. Primary prevention prevents onset; tertiary prevention reduces disability and complications after established disease.

### Question 39

> 39. In the context of health behaviour, Matarazzo (1984) claims:
> (A) Behaviour that protects health as 'behavioural immunogenes\u2019 and that puts health at risk as
> 'behavioural compromise'
> (B) Behaviour that protects health as 'behavioural immunogenes\u2019 and that puts health at risk as
> 'Behavioural pathogens'
> (C) Behaviour that protects health as 'psycho immunogenes' and that puts health at risk is 'Immuno
> Compromisers'
> (D) Behaviour that protects health as 'Immunological behaviour and that puts health at risk as
> 'pathological behaviour'

**Answer: B**

**Explanation & NET study notes:** Matarazzo distinguished health-protective \u201Cbehavioural immunogens\u201D from health-risk \u201Cbehavioural pathogens\u201D. Examples include exercise and seat-belt use versus smoking and harmful dietary patterns.

### Question 40

> 40. Martin Seligman proposed a theory of authentic happiness and well being which contains five
> elements. Which of the following does not come under Seligman's theory?
> (A) Positive emotion
> (B) Meaning that defines authentic happiness
> (C) Resilience
> (D)Accomplishment

**Answer: C**

**Explanation & NET study notes:** Seligman\u2019s original authentic happiness account emphasised positive emotion, engagement and meaning; his later PERMA model includes positive emotion, engagement, relationships, meaning and accomplishment. Resilience is not one of the five PERMA elements.

### Question 41

> 41. Which of the following is correct about cognitive perspective?
> (a) Thinking and understanding about the world
> (b) Information processing
> (c) Overt behaviour only
> (d) Similarity of thinking and working of a computer
> Choose the most appropriate answer from the options given below:
> (A) (a) and (d) only
> (B) (c) and (d) only
> (C) (a), (b) and (d) only
> (D) (a) and (b) only

**Answer: C**

**Explanation & NET study notes:** The cognitive perspective studies thinking and understanding, information processing, and often uses the computer as an analogy for mental processing. It is not limited to overt behaviour.

### Question 42

> 42. According to Indian concept of Self, elements of Psychological self include:
> (a) Manas
> (b) Buddhi
> (c) Anthakarna
> (d) Dhyana.
> Choose the correct answer from the options given below:
> (A) (a), (b) and (d) only
> (B) (b), (c) and (d) only
> (C) (a), (c) and (d) only
> (D) (a), (b) and (c) only

**Answer: D**

**Explanation & NET study notes:** The paper groups manas, buddhi and antahkarana under the psychological self. Dhyana means meditation/contemplation and is not listed as one of those components in the keyed grouping.

### Question 43

> 43. Which of the following can be used to determine the number of factors to be extracted in factor
> analysis?
> (a) Scree-plot
> (b) Orthogonal rotation
> (c) Eigen value
> (d) Factor Loading.
> Choose the most appropriate answer from the options given below:
> (A) (a) only
> (B) (b) and (c) only
> (C) (c) only
> (D) (a) and (c) only

**Answer: D**

**Explanation & NET study notes:** The scree plot and eigenvalue criterion help decide how many factors to retain. Rotation (orthogonal or oblique) aids interpretation after extraction; factor loadings describe variable\u2013factor relationships.

### Question 44

> 44. Which of the following are the types of probability sample?
> (a) Simple Random sampling
> (b) Proportionate stratified sampling
> (c) Disproportionate stratified sampling
> (d) Saturation sampling
> Choose the correct answer from the options given below:
> (A) (a), (b) and (c) only
> (B) (b), (c) and (d) only
> (C) (a), (c) and (d) only
> (D) (a), (b) and (d) only

**Answer: A**

**Explanation & NET study notes:** Simple random and proportionate/disproportionate stratified sampling are probability methods because selection probabilities are known. Saturation is a qualitative sampling principle, not probability sampling.

### Question 45

> 45. Which of the following statements are true of aptitude?
> (a) They are acquired
> (b) They are innate
> (c) Training ensures optimal performance
> (d) Aptitudes and interests are positively related.
> Choose the most appropriate answer from the options given below:
> (A) (a) and (b) only
> (B) (b) and (c) only
> (C) (a), (b) and (c) only
> (D) (c) and (d) only

**Answer: B**

**Explanation & NET study notes:** The key selects innate aptitude and the role of training in bringing performance towards its potential. Aptitude is a capacity/potential for learning; interests are related but distinct preferences. The wording \u201Ctraining ensures\u201D is stronger than most modern psychometric accounts would claim.

**Source/key note:** The key selects B, although \u201Ctraining ensures optimal performance\u201D is an overstatement if read literally.

### Question 46

> 46. What is true about norm in Psychological Test?
> (a) Norm helps as comparative device
> (b) 'Percentage' is a type of norm used by some psychometricians
> (c) T-score is a type of standard score norm
> (d) Raw score is converted to derived score for norm interpretation.
> Choose the most appropriate answer from the options given below:
> (A) (a) and (d) only
> (B) (a), (b) and (d) only
> (C) (a), (c) and (d) only
> (D) (a), (b) and (c) only

**Answer: C**

**Explanation & NET study notes:** Norms provide a comparative frame for interpreting an individual\u2019s score against a reference group. T-scores are standard scores (typically mean 50, SD 10); raw scores are often converted to derived scores such as percentiles or standard scores.

### Question 47

> 47. True description about Differential Aptitude Test (DAT) are:
> (a) It has eight sub tests
> (b) Meant for students from grade 8 to grade 12
> (c) Meant for students in the age of 8 to 12 years
> (d) It has also been adapted by Indian Psychologists.
> Choose the most appropriate answer from the options given below:
> (A) (a) and (b) only
> (B) (a) and (c) only
> (C) (b), (c) and (d) only
> (D) (a), (b) and (d) only

**Answer: D**

**Explanation & NET study notes:** The Differential Aptitude Tests include eight aptitude subtests and are used in educational/vocational guidance, including secondary-school levels. The test has also been adapted in Indian contexts; it is not specifically for ages 8\u201312.

### Question 48

> 48. Which of the following domains are assessed by Neuropsychological tests?
> (a) Language
> (b) Opinion
> (c) Memory
> (d) Executive Functioning
> (e) Reaction
> Choose the correct answer from the options given below:
> (A) (b), (c) and (e) only
> (B) (a), (c) and (d) only
> (C) (c), (d) and (e) only
> (D) (a), (b) and (d) only

**Answer: B**

**Explanation & NET study notes:** Neuropsychological assessment commonly examines language, memory, attention, visuospatial ability and executive functions. \u201COpinion\u201D is not a standard neuropsychological domain.

### Question 49

> 49. Which of the following statements are True of Biofeedback?
> (a) It is accurate
> (b) Behaviour can be modified through biofeedback
> (c) It helps in bringing involuntary actions to voluntary actions
> (d) It is one of the components of polygraphy.
> Choose the most appropriate answer from the options given below:
> (A) (a), (b) and (c) only
> (B) (a) and (b) only
> (C) (c) and (d) only
> (D) (a), (b) and (d) only

**Answer: A**

**Explanation & NET study notes:** Biofeedback provides information about physiological processes (e.g., muscle tension, heart rate) so people can learn to regulate them. It can support behavioural change; it is distinct from a polygraph\u2019s broader recording/interrogation context.

### Question 50

> 50. Which of the following are the motivating factors in learning:
> (a) Intelligence
> (b) Nature of task
> (c) Knowledge of result
> (d) Reinforcement
> Choose the most appropriate answer from the options given below:
> (A) (a), (b) and (c) only
> (B) (b), (c) and (d) only
> (C) (b) and (c) only
> (D) (a) and (c) only

**Answer: B**

**Explanation & NET study notes:** The nature of the task, knowledge of results (feedback) and reinforcement can motivate learning. Intelligence influences learning capacity but is not itself usually classified as a motivational factor.

### Question 51

> 51. Which one is not correct about classical conditioning
> (a) Classical conditioning is also known as respondent conditioning.
> (b) A previously natural stimulus comes to elicit a response after it is paired with a stimulus that
> automatically elicits that response.
> (c) It is based on the fact that certain stimuli automatically elicit certain response without learning
> (d) Classical Conditioning is also known as Instrumental Conditioning.
> (e) In Classical conditioning there is no association between stimulus and response
> Choose the correct answer from the options given below :
> (A) (a) and (d) only
> (B) (a), (c) and (d) only
> (C) (b), (c), (d) only
> (D) (c) and (d) only

**Answer: D**

**Explanation & NET study notes:** Classical conditioning is respondent conditioning and involves learned association between stimuli; instrumental conditioning is operant conditioning. The item/key is imperfect: statement (e) is also worded incorrectly because classical conditioning does involve stimulus\u2013stimulus learning and a conditioned stimulus\u2013response relation.

**Source/key note:** The printed key is D, but statement (e) is also problematic as written. Classical conditioning does involve learned stimulus associations; consider this item flawed.

### Question 52

> 52. Which of the following are true of perceptual constancy?
> (a) Shape
> (b) Illumination
> (c) Colour
> (d) Distance
> Choose the most appropriate answer from the options given below:
> (A) (a) and (c) only
> (B) (a) and (b) only
> (C) (b) and (c) only
> (D) (b) and (d) only

**Answer: A**

**Explanation & NET study notes:** Perceptual constancies include shape, size, colour and brightness/lightness constancy. They allow objects to be perceived as relatively stable despite changes in viewing conditions. The keyed pair is shape and colour.

### Question 53

> 53. Which of the following are the types of long term memory?
> (a) Declarative Memory
> (b) Flash Bulb memory
> (c) Episodic memory
> (d) Sensory Memory
> Choose the most appropriate answer from the options given below:
> (A) (a), (b) and (c) only
> (B) (b), (c) and (d) only
> (C) (a) and (d) only
> (D) (a) and (c) only

**Answer: D, A**

**Explanation & NET study notes:** Declarative memory is explicit long-term memory and includes semantic and episodic memory; flashbulb memory is a vivid form of episodic autobiographical memory. Sensory memory is very brief and not long-term. The source key prints both D and A; D is the narrower correct pair, while A also includes flashbulb memory.

**Source/key note:** The printed key gives both D and A. Flashbulb memory is generally treated as a vivid type of episodic memory, so A is defensible; D is a narrower grouping.

### Question 54

> 54. Which of the following statements are true?
> (a) All intelligent persons are creative
> (b) Creativity is also known as divergent thinking
> (c) Creativity is genetically determined
> (d) Research is not conclusive about the relationship between intelligence and creativity.
> Choose the correct answer from the options given below:
> (A) (a) and (b) only
> (B) (b) and (c) only
> (C) (a) and (d) only
> (D) (b) and (d) only

**Answer: D**

**Explanation & NET study notes:** Creativity is often associated with divergent thinking, but it is not true that all intelligent people are creative, nor is creativity wholly genetically determined. Research on the intelligence\u2013creativity relationship is complex and not conclusive.

### Question 55

> 55. Which of the following indicate aspects of language development?
> (a) Pragmatics
> (b) Syntax
> (c) Imprinting
> (d) Semantics
> Choose the correct answer from the options given below:
> (A) (a), (b) and (c) only
> (B) (a) and (b) only
> (C) (a), (b) and (d) only
> (D) (b) and (c) only

**Answer: C**

**Explanation & NET study notes:** Pragmatics concerns social use of language, syntax its grammatical structure, and semantics meaning. Imprinting is a form of early learning, not a component of language development.

### Question 56

> 56. Which of the following is true about linguistic-relativity hypothesis?
> (a) Thought produces language
> (b) Language shapes perception and understanding
> (c) Language determines thought
> (d) Thinking and language interact
> Choose the most appropriate answer from the options given below:
> (A) (a) and (d) only
> (B) (b) and (c) only
> (C) (a) only
> (D) (b), (c) and (d) only

**Answer: B**

**Explanation & NET study notes:** The linguistic-relativity (Sapir\u2013Whorf) hypothesis proposes that language influences habitual thought and perception; strong determinism claims language determines thought. The keyed option includes both influence and determination, though contemporary views generally favour a weaker influence rather than strict determinism.

**Source/key note:** The key selects B. Strong linguistic determinism is debated; contemporary interpretations more often emphasise language influencing rather than rigidly determining thought.

### Question 57

> 57. Which of the following statements related to stress are correct?
> (a) Anthropogenic stress refers to stressors such as crowding
> (b) The impact of earth energies on human well being is called 'Geopathic Stress'
> (c) Stress due to the efforts of the individual to fit oneself into the design of man made objects is
> called \u2018Energetic stress'
> (d) 'Ergonomic Stress' refers to the stress induced due to exposure to radioactive rays.
> Choose the most appropriate answer from the options given below:
> (A) (a) and (b) only
> (B) (b) and (c) only
> (C) (c) and (d) only
> (D) (a) and (d) only

**Answer: A**

**Explanation & NET study notes:** Anthropogenic stressors are human-created/environmental, such as crowding; geopathic stress is a term used for alleged effects of earth energies. Ergonomic stress concerns mismatch between people and designed environments/tools, not radiation exposure; \u201Cenergetic stress\u201D in C is not the standard term.

### Question 58

> 58. Which of the following is true with reference to psychological stress ?
> (a) Stress is a temporary phenomenon
> (b) Stress is a subjective perception
> (c) Personality and stress are not related
> (d) A certain degree of stress is needed for optimal performance.
> Choose the correct answer from the options given below:
> (A) (a), (b) and (c) only
> (B) (b), (c) and (d) only
> (C) (a), (c) and (d) only
> (D) (a), (b) and (d) only

**Answer: D**

**Explanation & NET study notes:** Stress appraisal is subjective and varies by person and context; personality and stress are related. Moderate arousal can facilitate performance, consistent with the Yerkes\u2013Dodson principle. The statement that stress is always temporary is overly broad, but the key selects A, B and D.

**Source/key note:** The key selects D. Statement (a), \u201Cstress is a temporary phenomenon,\u201D is too absolute because stress can be chronic.

### Question 59

> 59. Which of the following is true about leadership?
> (a) Leaders influence followers
> (b) Situation is not important in leadership
> (c) All managers are leaders
> (d) Transactional leaders are different from transformational leaders.
> Choose the correct answer from the options given below:
> (A) (a) and (d) only
> (B) (a), (b) and (d) only
> (C) (a), (c) and (d) only
> (D) (a) and (b) only

**Answer: A**

**Explanation & NET study notes:** Leadership involves influence and can be shaped by situational factors. Transactional leadership uses exchanges/rewards, whereas transformational leadership inspires change and shared vision. Not every manager necessarily functions as a leader.

### Question 60

> 60. Which of the following is applicable to Fiedler's contingency model of leadership effectiveness?
> (a) The leader's position power
> (b) The degree of task structure
> (c) The leader-member relationship
> (d) The inborn traits of the leader
> Choose the most appropriate answer from the options given below:
> (A) (a) and (b) only
> (B) (a), (b) and (c) only
> (C) (d) only
> (D) (a), (b) and (d) only

**Answer: B**

**Explanation & NET study notes:** Fiedler\u2019s model uses leader\u2013member relations, task structure and position power to assess situational favourableness. It matches leader style (task- or relationship-oriented, assessed via LPC) to the situation.

### Question 61

> 61. Transactional Analysis refers to the ego states such as:
> (a) Critical Parent, Adult
> (b) Parent, Child, Adult
> (c) Nurturant Parent, Little Professor
> (d) Adapted child, Deviant child
> Choose the correct answer from the options given below:
> (A) (a), (b) and (c) only
> (B) (c) and (d) only
> (C) (b), (c) and (d) only
> (D) (a) and (d) only

**Answer: A**

**Explanation & NET study notes:** Transactional analysis describes Parent, Adult and Child ego states, with subdivisions such as Critical/Nurturing Parent and Adapted Child/Free Child; \u201CLittle Professor\u201D is a Child-state concept. The keyed combination is A.

### Question 62

> 62. In force-field analysis the counselee analyses:
> (a) The force one has to apply in the field to assert oneself
> (b) The forces that constitute one's resources
> (c) The force applied by the counsellor in initiating action
> (d) Facilitating factors and restraining factors in the situation.
> Choose the most appropriate answer from the options given below:
> (A) (a) only
> (B) (a) and (c) only
> (C) (b) and (d) only
> (D) (d) only

**Answer: C**

**Explanation & NET study notes:** Lewin\u2019s force-field analysis identifies forces driving change and forces restraining it. Counselling can help clients identify resources/facilitators and barriers rather than simply applying force themselves.

### Question 63

> 63. In counselling, 'advanced empathy' includes:
> (a) Connecting islands and identifying themes
> (b) Identifying themes and brain storming
> (c) Making the implicit explicit and identifying themes
> (d) Connecting islands and paraphrasing.
> Choose the correct answer from the options given below:
> (A) (a) and (b) only
> (B) (a) and (c) only
> (C) (a) and (d) only
> (D) (a), (b) and (d) only

**Answer: B**

**Explanation & NET study notes:** Advanced empathy goes beyond reflecting content: it links separate disclosures (\u201Cislands\u201D), identifies recurring themes and makes implicit feelings or meanings explicit. Brainstorming is not itself the defining empathy skill.

### Question 64

> 64. The principle of Classical Conditioning is used in:
> (a) Token economy
> (b) Systematic desensitization
> (c) Electro convulsion therapy
> (d) Aversion therapy
> Choose the correct answer from the options given below:
> (A) (a) and (b) only
> (B) (a) and (c) only
> (C) (b) and (c) only
> (D) (b) and (d) only

**Answer: D**

**Explanation & NET study notes:** Systematic desensitisation and aversion therapy use principles of conditioning. Token economy is based primarily on operant conditioning; electroconvulsive therapy is a biological treatment.

### Question 65

> 65. In the Transactional Analysis, Ego State Analysis involves analyzing
> (a) Id, Ego, Super Ego
> (b) Alter Ego
> (c) Parent, Adult, child
> (d) Voluntary and Involuntary Ego
> Choose the most appropriate answer from the options given below:
> (A) (a) and (c) only
> (B) (b) only
> (C) (c) only
> (D) (c) and (d) only

**Answer: C**

**Explanation & NET study notes:** In transactional analysis, ego-state analysis examines Parent, Adult and Child. Freud\u2019s id, ego and superego belong to psychoanalytic structural theory, not Berne\u2019s TA ego-state model; the source key nevertheless marks C only.

**Source/key note:** The answer key selects C. Transactional Analysis ego-state analysis is Parent\u2013Adult\u2013Child; Freud\u2019s id\u2013ego\u2013superego is a separate model.

### Question 66

> 66. Match List I with List II
> List I                                               List II
> (a) An inferential test used to determine            (I) Point-biserial correlation
> effect size for a chi-square test; the              coefficient
> correlation used when both measured
> variables are dichotomous and nominal
> (b) The correlation used when one of its             (II) Regression analysis
> variables is measured on a dichotomous
> nominal scale and the other is measured
> on an interval or ratio scale
> (c) A procedure that allows to predict an            (III) Partial correlation
> individual's score on one variable based
> on knowing one or more variable
> (d) A correlational technique that involves          (IV) Phi-coefficient
> measuring three variables and then
> statistically removing the effect of the
> third variable from the correlation of the
> remaining two variables
> Choose the correct answer from the options given below:
> (A) (a)-(IV), (b)-(II), (c)-(III), (d)-(I)
> (B) (a)-(III), (b)-(II), (c)-(IV), (d)-(I)
> (C) (a)-(II), (b)-(IV), (c)-(III), (d)-(I)
> (D) (a)-(IV), (b)-(I), (c)-(II), (d)-(III)

**Answer: D**

**Explanation & NET study notes:** Matching: (a) phi coefficient (two nominal dichotomies; also effect-size association for chi-square), (b) point-biserial correlation (true dichotomy plus continuous score), (c) regression analysis (prediction), and (d) partial correlation (controls a third variable).

### Question 67

> 67. Match List I with List II
> List I                                        List II
> (a) Phenomenology                             (I) Constructionist Approach
> (b) Narrative analysis                        (II) Social media
> (c) Grounded theory                           (III) Eidectic variation
> (d) Netnographic Analysis                     (IV) Theoretical coding
> Choose the correct answer from the options given below:
> (A) (a)-(I), (b)-(III), (c)-(IV), (d)-(II)
> (B) (a)-(II), (b)-(IV), (c)-(III), (d)-(I)
> (C) (a)-(III), (b)-(I), (c)-(IV), (d)-(II)
> (D) (a)-(IV), (b)-(I), (c)-(III), (d)-(II)

**Answer: C**

**Explanation & NET study notes:** Phenomenology seeks lived experience and uses eidetic variation; narrative analysis is often associated with a constructionist approach; grounded theory uses theoretical coding; netnography studies online communities/social media. The keyed sequence is C.

### Question 68

> 68. Match List I with List II
> List I                                          List II
> (a) Non-parametric test used to determine       (I) Mann-Whitney Test
> differences between three or more
> groups on a ranked variable for
> between subjects design.
> (b) Non-parametric test for seeing              (II) Wilcoxon Signed Rank Test
> whether the number of times scores
> from one sample are ranked
> significantly higher than scores from
> another unrelated sample.
> (c) Non-parametric test for assessing           (III) Kruskal Wallis Test
> whether the scores from two samples
> that come from the same or similar
> cases differ significantly.
> (d) Non-panometric test for determining         (IV) Friedman's Test
> whether the mean ranks of three or
> more related samples under two
> factors differ significantly
> Choose the correct answer from the options given below:
> (A) (a)-(III), (b)-(II), (c)-(IV), (d)-(I)
> (B) (a)-(III), (b)-(I), (c)-(II), (d)-(IV)
> (C) (a)-(IV), (b)-(II), (c)-(III), (d)-(I)
> (D) (a)-(I), (b)-(II), (c)-(IV), (d)-(III)

**Answer: B**

**Explanation & NET study notes:** Kruskal\u2013Wallis compares three or more independent groups; Mann\u2013Whitney U compares two independent groups; Wilcoxon signed-rank compares two related measurements; Friedman compares three or more related conditions.

### Question 69

> 69. Match List I with List II
> List I                                           List II
> (Attitude Scales)                                (Psychologists)
> (a) Summated Rating scale                        (I) Thurstone
> (b) Semantic differential scale                  (II) Guttman
> (c) Equal Appearing Interval Scale               (III) Likert
> (d) Cumulative scale                             (IV) Osgood
> Choose the correct answer from the options given below:
> (A) (a)-(IV), (b)-(I), (c)-(II), (d)-(III)
> (B) (a)-(III), (b)-(IV), (c)-(I), (d)-(II)
> (C) (a)-(III), (b)-(IV), (c)-(II), (d)-(I)
> (D) (a)-(IV), (b)-(I), (c)-(III), (d)-(II)

**Answer: B**

**Explanation & NET study notes:** Likert developed the summated rating scale; Osgood the semantic differential; Thurstone the equal-appearing intervals scale; Guttman the cumulative scale. Remember the four names as a common matching question.

### Question 70

> 70. Match List I with List II
> List I                          List II
> (a) Turner's                    (I) An imbalance in X chromosome where two X
> Syndrome                      from the ovum combine with a Y-sperm
> (b) Fragile-X                   (II) An extra 21st chromosome
> Syndrome
> (c) Down's syndrome             (III) Ovum containing no X chromosome is fertilized
> by an \u2018X\u2019 bearing sperm
> (d) Klinefelter syndrome        (IV) The X chromosome is compressed or broken
> Choose the correct answer from the options given below:
> (A) (a)-(I), (b)-(III), (c)-(II), (d)-(IV)
> (B) (a)-(III), (b)-(IV), (c)-(II), (d)-(I)
> (C) (a)-(II), (b)-(III), (c)-(I), (d)-(IV)
> (D) (a)-(III), (b)-(II), (c)-(IV), (d)-(I)

**Answer: B**

**Explanation & NET study notes:** Turner syndrome is typically 45,X (often described as an ovum lacking an X fertilised by an X-bearing sperm); fragile X involves an FMR1 CGG-repeat expansion and constriction appearance; Down syndrome is trisomy 21; Klinefelter is typically 47,XXY. The item\u2019s description of Klinefelter is imprecise.

**Source/key note:** The descriptions in the source table simplify chromosomal mechanisms; Klinefelter syndrome is typically 47,XXY, while Turner syndrome is typically 45,X.

### Question 71

> 71. Match List I with List II
> List I                   List II
> (a) Semantic             (I) Memory for general knowledge and facts about the
> Memory                 world as well as memory for the rules of logic that are
> used to deduce other facts.
> (b) Episodic             (II) Memory centered on a specific important event that
> Memory                  are vivid as if they represented a snapshot of the event
> (c) Flashbulb Memory (III) Memory for skills and habits
> (d) Procedural           (IV) Memory for events that occur in a particular time,
> Memory                    place or context
> Choose the correct answer from the options given below:
> (A) (a)-(I), (b)-(II), (c)-(IV), (d)-(III)
> (B) (a)-(I), (b)-(II), (c)-(III),(d)-(IV)
> (C) (a)-(II), (b)-(III), (c)-(I), (d)-(IV)
> (D) (a)-(I), (b)-(IV), (c)-(II), (d)-(III)

**Answer: D**

**Explanation & NET study notes:** Semantic memory stores facts and concepts; episodic memory stores personally experienced events in context; flashbulb memory is vivid event memory; procedural memory stores skills and habits. The key matches these as I, IV, II and III.

### Question 72

> 72. Match List I with List II
> List I                           List II
> (a) Thurstone                    (I) Triarchic Theory
> (b) Gardner                      (II) Set of seven primary mental abilities
> (c) Sternberg                    (III) Multiple intelligence
> (d) J.P. Das                     (IV) Pass Model
> Choose the correct answer from the options given below:
> (A) (a)-(IV), (b)-(I), (c)-(II), (d)-(III)
> (B) (a)-(II), (b)-(I), (c)-(III), (d)-(IV)
> (C) (a)-(II), (b)-(III), (c)-(I), (d)-(IV)
> (D) (a)-(II), (b)-(III), (c)-(IV), (d)-(I)

**Answer: C**

**Explanation & NET study notes:** Thurstone proposed seven primary mental abilities; Gardner multiple intelligences; Sternberg the triarchic theory; J. P. Das is associated with the PASS model (Planning, Attention, Simultaneous, Successive processing).

### Question 73

> 73. Match List I with List II
> List I                        List II
> (a) Inductive reasoning       (I) Inferring specific instances from general principles
> or rules.
> (b) Deductive                 (II) Cognitive short-cuts that provide adequately
> reasoning                      accurate inferences for most of the time
> (c) Heuristics                (III)Inferring general principles or rules from specific
> facts
> (d) Algorithm                 (IV) A procedure that consists of a series of steps to
> solve a problem
> Choose the correct answer from the options given below:
> (A) (a)-(III), (b)-(IV), (c)-(II), (d)-(I)
> (B) (a)-(I), (b)-(II), (c)-(IV), (d)-(III)
> (C) (a)-(IV), (b)-(III), (c)-(II), (d)-(I)
> (D) (a)-(III), (b)-(I),(c)-(II), (d)-(IV)

**Answer: D**

**Explanation & NET study notes:** Induction moves from specific observations to general rules; deduction applies general principles to specific cases; heuristics are efficient shortcuts; algorithms are systematic stepwise procedures that guarantee a solution when correctly applied.

### Question 74

> 74. Match List I with List II
> List I                                              List II
> (a) Emotions are largely innate reactions           (I) Cannon-Bard theory
> to certain stimuli
> (b) Emotions result from perception of              (II) Schachter's two-factor theory
> autonomic arousal
> (c) Emotion is inferred from arousal and            (III) Evolutionary theories
> then labelling it after interpretation
> (d) Emotions originate in sub-cortical              (IV) James-Lange theory
> areas of the brain.
> Choose the correct answer from the options given below:
> (A) (a)-(II), (b)-(I), (c)-(IV), (d)-(III)
> (B) (a)-(III), (b)-(IV), (c)-(II), (d)-(I)
> (C) (a)-(I), (b)-(II), (c)-(III), (d)-(IV)
> (D) (a)-(IV), (b)-(II), (c)-(I), (d)-(III)

**Answer: B**

**Explanation & NET study notes:** Evolutionary theories emphasise innate/adaptive emotional responses; James\u2013Lange says perception of bodily arousal precedes emotion; Schachter\u2013Singer adds cognitive labelling to arousal; Cannon\u2013Bard proposes simultaneous emotion and physiological arousal. The keyed match is B.

### Question 75

> 75. Match List I with List II
> List I                  List II
> (a) Snyder              (I) Bottom-up Theories vs Top-down theories of
> happiness
> (b) Diener              (II) Broaden and Build Model
> (c) Antonovsky          (III) Hope theory
> (d) Fredrickson         (IV) Salutogenic Model
> Choose the correct answer from the options given below:
> (A) (a)-(III), (b)-(I), (c)-(IV), (d)-(II)
> (B) (a)-(III), (b)-(II), (c)-(I), (d)-(IV)
> (C) (a)-(II), (b)-(III), (c)-(IV), (d)-(I)
> (D) (a)-(I), (b)-(III), (c)-(II), (d)-(IV)

**Answer: A**

**Explanation & NET study notes:** Snyder proposed hope theory; Diener is associated with subjective well-being and bottom-up/top-down accounts; Antonovsky proposed the salutogenic model; Fredrickson proposed broaden-and-build theory of positive emotions.

### Question 76

> 76. Arrange in sequence the following scales of measurement Ordinal, Nominal, Ratio and Interval
> according to properties of scale
> (a) Identity
> (b) Identity and Magnitude
> (c) Identity, magnitude and equal unit size
> (d) Identity, magnitude, equal unit size and absolute Zero
> Choose the correct answer from the options given below:
> (A) (b),(a), (d), (c)
> (B) (b), (c), (d), (a)
> (C) (a), (b), (d), (c)
> (D) (c), (b), (a), (d)

**Answer: A**

**Explanation & NET study notes:** The measurement scales progress: nominal = identity; ordinal = identity + magnitude/rank; interval = equal units; ratio = equal units + absolute zero. Therefore the requested order maps to (b), (a), (c), (d) properties as represented by the key\u2019s option A.

**Source/key note:** The printed option A corresponds to nominal \u2192 ordinal \u2192 ratio \u2192 interval only if following the item\u2019s unusual listed order; conceptually the scale properties should be learned directly as stated above.

### Question 77

> 77. What is the correct sequence in development of a psychological tool?
> (a) Establishing reliability
> (b) Item analysis
> (c) Developing norm
> (d) Establishing validity.
> Choose the correct answer from the options given below:
> (A) (a), (b), (d), (c)
> (B) (b), (a), (d), (c)
> (C) (a), (d), (c), (b)
> (D) (b), (a), (c), (d)

**Answer: B**

**Explanation & NET study notes:** A practical test-development sequence begins with item analysis, then establishes reliability and validity, and finally develops norms for interpretation. The source key is B; in actual test construction, these activities can be iterative rather than strictly linear.

**Source/key note:** Test development is iterative; the answer key gives B, but different psychometric frameworks may place validity and norming steps somewhat differently.

### Question 78

> 78. What is the sequence of steps involved in conducting Radio Frequency lesion by using stereotoxic
> apparatus?
> (a) Drill a hole in the skull of the rat using coordinates from the stereotoxic atlas.
> (b) Pass on radio frequency current through the tip of the insulated electrode to the brain area.
> (c) Close the hole on the skull of the rat and provide appropriate medical treatment.
> (d) Fix the head of the rat on the stereotoxic apparatus
> (e) Push an electrode to the appropriate depth of the brain till it touches the specified brain area.
> Choose the correct answer from the options given below:
> (A) (a), (b), (d), (e), (c)
> (B) (c), (a), (b), (d), (e)
> (C) (d), (a), (e), (b), (c)
> (D) (b), (d), (a), (c), (e)

**Answer: C**

**Explanation & NET study notes:** The sequence is secure the animal in the stereotaxic apparatus, locate/drill using atlas coordinates, insert the electrode to target depth, pass radio-frequency current, then close and provide post-operative care. This is the order in option C.

### Question 79

> 79. Arrange the following in order of their occurrence in observational learning.
> (a) Retention
> (b) Attention
> (c) Reproduction
> (d) Motivation
> Choose the correct answer from the options given below:
> (A) (d), (b), (a), (c)
> (B) (a), (b), (c), (d)
> (C) (b), (d), (a), (c)
> (D) (b), (a), (c), (d)

**Answer: D**

**Explanation & NET study notes:** Bandura\u2019s observational learning processes are attention, retention, reproduction and motivation. Learners first attend to the model, remember the behaviour, reproduce it, and need motivation to perform it.

### Question 80

> 80. Arrange the bodily consequences of stress in the order as proposed by Hans Selye
> (a) Exhaustion
> (b) Alarm
> (c) Resistance
> (d) Hardiness
> Choose the correct answer from the options given below:
> (A) (d), (b), (c), (a)
> (B) (b), (c), (a), (d)
> (C) (b), (c), (a)
> (D) (b), (c), (d)

**Answer: C**

**Explanation & NET study notes:** Selye\u2019s General Adaptation Syndrome proceeds through alarm, resistance and exhaustion. Hardiness is a personality resource, not a stage of GAS; hence the correct sequence excludes it.

### Question 81

> 81. The Four Stage theory of creativity was proposed by Joseph Wallas. Arrange these stages in a
> sequence.
> (a) Preparation
> (b) Incubation
> (c) Illumination
> (d) Verification
> Choose the correct answer from the options given below:
> (A) (a), (c), (b), (d)
> (B) (a), (b), (c), (d)
> (C) (a), (d), (b), (c)
> (D) (a), (c), (d), (b)

**Answer: B**

**Explanation & NET study notes:** Wallas\u2019 four stages are preparation (investigate), incubation (unconscious processing), illumination (insight) and verification (test/refine the idea).

### Question 82

> 82. Arrange in order the Hierarchy of Needs by Maslow.
> (a) Physiological
> (b) Esteem
> (c) Affiliation
> (d) Safety
> (e) Self-actualization
> Choose the correct answer from the options given below:
> (A) (a), (e), (c), (b), (d)
> (B) (a), (d), (c), (b), (e)
> (C) (a), (b), (d), (c), (e)
> (D) (a), (c), (e), (d), (b)

**Answer: B**

**Explanation & NET study notes:** Maslow\u2019s commonly taught hierarchy is physiological, safety, love/belonging (affiliation), esteem and self-actualisation. The order is not rigid for every person, but this is the standard exam sequence.

### Question 83

> 83. The correct sequence of a person who is hungry in terms of motivational cycle is:
> (a) Disequilibrium
> (b) Reaching goal
> (c) Instrumental behaviour
> (d) Homeostasis
> (e) Consumption of food.
> Choose the correct answer from the options given below:
> (A) (a), (c), (b), (e),(d)
> (B) (d), (a), (b), (e), (c)
> (C) (c), (a), (b), (d), (e)
> (D) (e), (d), (a), (c), (b)

**Answer: A**

**Explanation & NET study notes:** The motivational cycle begins with disequilibrium/need, followed by instrumental behaviour, goal attainment, consumption of food and restoration of homeostasis. The sequence illustrates drive reduction.

### Question 84

> 84. As per Tuckman's group development model, identify the correct sequence
> (a) Norming
> (b) Storming
> (c) Performing
> (d) Forming
> (e) Adjourning
> Choose the correct answer from the options given below:
> (A) (a), (c), (b), (d), (e)
> (B) (a), (d), (b), (c), (e)
> (C) (d), (b), (a), (c), (e)
> (D) (d), (a), (b), (c), (e)

**Answer: C**

**Explanation & NET study notes:** Tuckman\u2019s stages are forming, storming, norming, performing and adjourning. Teams first orient, then experience conflict, establish norms, work effectively and finally disband/transition.

### Question 85

> 85. Arrange the following from early to later development
> (a) Autonomy versus shame and doubt
> (b) Identity versus role confusion
> (c) Industry versus inferiority
> (d) Initiative versus guilt
> Choose the correct answer from the options given below:
> (A) (a), (c), (d), (b)
> (B) (d), (c), (a), (b)
> (C) (c), (d), (a), (b)
> (D) (a), (d), (c), (b)

**Answer: D**

**Explanation & NET study notes:** Erikson\u2019s stages in this set occur as autonomy vs shame/doubt (toddlerhood), initiative vs guilt (preschool), industry vs inferiority (school age), and identity vs role confusion (adolescence).

### Question 86

> 86. Given below are two statements: One is labelled as Assertion (A) and the other is labelled as Reason
> (R).
> Assertion (A): Effectiveness of psychological research increases if multiple methods are used by the
> researcher.
> Reason (R): Triangulation helps in relating information collected from different methods to arrive at
> meaningful inference.
> In the light of the above statements, choose the most appropriate answer from the options given
> below:
> (A) Both (A) and (R) are correct and (R) is the correct explanation of (A)
> (B) Both (A) and (R) are true but (R) is not the correct explanation of (A)
> (C) (A) is true but (R) is false
> (D) (A) is false but (R) is true

**Answer: A**

**Explanation & NET study notes:** Triangulation combines multiple methods, data sources or perspectives to examine a phenomenon. Convergence and complementarity can strengthen credibility and make interpretations more robust; it does not automatically remove bias.

### Question 87

> 87. Given below are two statements:
> Statement (I): Posterior of pituitary gland secretes antidiuretic hormone which stimulates kidneys to
> reabsorb water to prevent dehydration.
> Statement (II): Cortex of adrenal glands located on the top of Kidneys helps in uterine contraction
> during child birth and release of milk through mammary glands in females and contraction of sperm
> duct during ejaculation in males.
> In the light of the above statements, choose the most appropriate answer from the options given
> below:
> (A) Both Statement (I) and Statement (II) are true
> (B) Both Statement (I) and Statement (II) are false
> (C) Statement (I) is true but Statement (II) is false
> (D) Statement (I) is false but Statement (II) is true

**Answer: C**

**Explanation & NET study notes:** The posterior pituitary releases (stores and releases) ADH, which increases renal water reabsorption. Uterine contraction, milk ejection and sperm-duct contraction are associated with oxytocin, released from the posterior pituitary\u2014not the adrenal cortex.

### Question 88

> 88. Given below are two statements:
> Statement (I): In a figure-ground perception, the stimulus with two or more distinct region, the
> region seen as figure contains the object of interest and the other region is perceived as the
> background.
> Statement (II): Figure-ground perception can be ambiguous.
> In the light of the above statements, choose the most appropriate answer from the options given
> below:
> (A) Both Statement (I) and Statement (II) are correct
> (B) Both Statement (I) and Statement (II) are incorrect
> (C) Statement (I) is correct but Statement (II) is incorrect
> (D) Statement (I) is incorrect but Statement (II) is correct

**Answer: A**

**Explanation & NET study notes:** Figure\u2013ground organisation separates a focal figure from its background. Some displays are reversible/ambiguous, such as the Rubin vase, where figure and ground can alternate.

### Question 89

> 89. Given below are two statements: One is labelled as Assertion (A) and the other is labelled as
> Reason(R).
> Assertion-(A): Monthly salary of Government employees can be termed as a reinforcement at
> workplace.
> Reason-(R): Variable ratio, as a partial reinforcement schedule, leads to higher rate of responses.
> In the light of the above statements, choose the most appropriate answer from the options given
> below:
> (A) Both (A) and (R) are true and (R) is the correct explanation of (A)
> (B) Both (A) and (R) are true but (R) is not the correct explanation of (A)
> (C) (A) is true but (R) is false
> (D) (A) is false but (R) is true

**Answer: B**

**Explanation & NET study notes:** A regular monthly salary is a fixed-interval reinforcement schedule, not variable-ratio. Variable-ratio schedules typically produce high, steady response rates; therefore both statements are true but the reason does not explain the assertion.

### Question 90

> 90. Given below are two statements: One is labelled as Assertion (A) and the other is labelled as
> Reason(R).
> Assertion-(A): A person who has type A personality experiences high stress.
> Reason-(R): Research shows evidence for correlation between personality and stress.
> In the light of the above statements, choose the most appropriate answer from the options given
> below:
> (A) Both (A) and (R) are true and (R) is the correct explanation of (A)
> (B) Both (A) and (R) are true but (R) is not the correct explanation of (A)
> (C) (A) is true but (R) is false
> (D) (A) is false but (R) is true
> Read the given paragraph and answer the questions that follow:
> An experimenter conducted a study on a group of children in order to find out their development level.
> In his study he provided two clay balls and took their agreement that the two balls are of equal size.
> Then he changed the shape of one ball to a flat shape in front of the children and asked which out of the
> two shapes contained more clay. Few children responded that the flat shape contained more clay. Later
> he asked another question as follows:
> "If an aeroplane is called an elephant, can it fly?" Few children answered "Yes it can fly".

**Answer: B**

**Explanation & NET study notes:** Type A behaviour pattern\u2014time urgency, competitiveness and hostility\u2014has been associated particularly with stress and historically with coronary risk. Personality is related to stress, but the broad correlation statement alone does not fully explain the specific assertion.

### Question 91

> 91. The children who answered the Aeroplane-elephant question correctly come under the stage of:
> (A) Concrete operational stage
> (B) Intuitive Operational Stage
> (C) Formal Operational stage
> (D) Preoperational Stage

**Answer: C**

**Explanation & NET study notes:** The key identifies the formal operational stage, associated with abstract and hypothetical reasoning. The \u201Cif an aeroplane is called an elephant\u201D item tests whether the child can reason beyond the object\u2019s familiar label; interpret cautiously because the vignette is not a standard standalone Piagetian diagnostic task.

**Source/key note:** The key marks C. The passage\u2019s aeroplane/elephant wording is not a widely standardised Piaget task, so avoid treating it as a definitive diagnostic measure by itself.

### Question 92

> 92. The clay ball experiment measures children's ability of
> (A) Object Permanence
> (B) Egocentrism
> (C) Conservation
> (D) Animism

**Answer: C**

**Explanation & NET study notes:** The clay transformation task assesses conservation: understanding that quantity remains the same despite a change in shape. Conservation typically develops during Piaget\u2019s concrete operational stage.

### Question 93

> 93. The psychologist associated with the above experiment:
> (A) Vygotsky
> (B) Piaget
> (C) Bruner
> (D) Bandura

**Answer: B**

**Explanation & NET study notes:** Jean Piaget is associated with the conservation task and the broader theory of cognitive development. Vygotsky is associated with sociocultural theory; Bruner with modes of representation and discovery learning; Bandura with social learning/social cognitive theory.

**Study note:** This question belongs to the Piagetian conservation vignette; see the full source wording above.

### Question 94

> 94. In which stage of development are the children who answered that the flattened ball contained more
> clay?
> (A) Formal operational stage
> (B) Preoperational stage
> (C) Sensori Motor stage
> (D) Concrete operational stage

**Answer: B**

**Explanation & NET study notes:** Children who judge that the flattened ball contains more clay typically have not yet mastered conservation and are classified here as preoperational. A key limitation is centration: focusing on one perceptual dimension (the wider shape) while ignoring unchanged quantity.

**Study note:** This question belongs to the Piagetian conservation vignette; see the full source wording above.

### Question 95

> 95. The theory underlining the above study is:
> (A) Psychodynamic theory
> (B) Social observational learning
> (C) Cognitive development theory
> (D) Cognitive dynamic behaviour theory
> Read the following passage and answer the questions.
> An experimenter conducted a study to see the effect of social support on well being. He recruited a
> group of students from a school where he was working. Later he decided to see the role of gender on the
> relation between social support and well being. He formulated a hypothesis taking all these variables
> into account. The hypothesis was that the strength of the relationship between social support and well
> being would change when the gender variable is included. After collecting the data, normal distribution
> of scores was confirmed. The result was not in accordance with the hypothesis. Later the experimenter
> interpreted the result of the study.

**Answer: C**

**Explanation & NET study notes:** The study is grounded in Piaget\u2019s cognitive development theory. Piaget proposed qualitatively different stages of thinking: sensorimotor, preoperational, concrete operational and formal operational.

**Study note:** This question belongs to the Piagetian conservation vignette; see the full source wording above.

### Question 96

> 96. What design was used in the above experiment?
> (A) Between Group Design
> (B) Within group design
> (C) Correlational design
> (D) Factorial design

**Answer: C**

**Explanation & NET study notes:** The study examines the association between social support and well-being and whether gender changes that association; it is correlational/moderation analysis, not an experiment manipulating variables. The key marks C.

### Question 97

> 97. What sampling was used in the study?
> (A) Quota sampling
> (B) Purposive sampling
> (C) Cluster sampling
> (D) Stratified sampling

**Answer: B**

**Explanation & NET study notes:** Participants were recruited from the school where the researcher worked, indicating purposive/convenience selection based on accessibility and study purpose. The key marks purposive sampling.

### Question 98

> 98. What type of variable was gender in the study?
> (A) Predictive Variable
> (B) Criterion variable
> (C) Mediation variable
> (D) Moderation variable

**Answer: D**

**Explanation & NET study notes:** Gender is a moderator because the hypothesis states that it changes the strength of the relationship between social support and well-being. A mediator would explain the mechanism through which one variable affects another.

### Question 99

> 99. The interpretation of the result the experiment made was:
> (A) P < .05
> (B) P <.01
> (C) P < .001
> (D) P >.05

**Answer: D**

**Explanation & NET study notes:** A result not in accordance with the hypothesis is treated here as statistically non-significant (p > .05) in the answer key. A p-value is not the probability that the null hypothesis is true.

### Question 100

> 100. Which type of statistical analysis was used?
> (A) Simple linear regression
> (B) Biserial correlation
> (C) Multiple regression
> (D) Log linear correlation

**Answer: C**

**Explanation & NET study notes:** Multiple regression can model well-being from social support and gender and test an interaction term (social support \xD7 gender) to assess moderation. A significant interaction indicates that the predictor\u2013outcome relationship differs by gender.

---

## Important source-quality notes
- The PDF answer key lists **Q18: A, C** and **Q53: D, A**. Both have been preserved as printed, with explanations of the overlap.
- Some source items contain ambiguous wording or questionable statements (notably Q15, Q29, Q45, Q51, Q56, Q58, Q65, Q70, Q76 and Q77). These have been flagged in the relevant sections.
- Questions 93\u201395 are present in the source PDF but their full wording was not recoverable from the extracted text layer. Their answer letters (B, B and C) are retained from the printed answer key; no question wording has been invented.
- The page beginning **SEPTEMBER 2022 SHIFT I** after the answer key is excluded, as requested.
`;var ct=`# UGC NET Paper 1 \u2013 March 2023
## Complete question paper, answer key, explanations and additional study notes

**Paper:** UGC NET Paper 1 \u2013 General Aptitude (not the Psychology subject paper)  
**Source:** *Oswaal UGC NET Paper\u20131: 15 Mock Test Papers*, solved paper March 2023  
**Coverage:** Questions 1\u201350, answer key and the supplied explanations.  
**Time / marks stated in the PDF:** 1 hour 15 minutes / 100 marks; 50 questions, 2 marks each; no negative marking.

> **How this file is organised:** The original questions and options are transcribed from PDF pages 1\u20136; the answer key is reproduced from pages 7\u20138; the publisher's explanations are reproduced from pages 9\u201315. Additional NET-focused notes and a quality-control section follow. Page headers and promotional footers have been removed. The final page of this PDF contains explanations, not an additional question paper.

---

# Part 1 \u2013 Questions 1\u201350

### PDF page 1

Direction for Questions (1 -5):
The following table shows the distribution of male (M) and female (F) athletes who participated in an Annual Sports 
Event from five different countries A-E over the years 2016 to 2021. Based on the data in the table, answer the question.
Year-wise Country-wise Distribution of Athletes.
Countries \u2192
A
B
C
D
E
Years \u2193
M
F
M
F
M
F
M
F
M
F
2016
220
165
315
210
225
155
280
205
235
105
2017
330
210
420
310
345
165
420
315
390
260
2018
230
90
370
240
240
140
465
365
435
325
2019
480
245
570
420
330
210
630
470
445
290
2020
590
320
530
260
390
315
720
510
590
460
2021
410
260
320
360
540
345
780
605
680
490
Q.1.	
The difference between the number of male and 
female athletes from country C was the second 
highest in the year ______.
	
a.	 2016
	
b.	 2017
	
c.	 2019
	
d.	 2021
Q.2.	
The average number of female athletes who 
participated from Country B over the years 
together was ______.
	
a.	 300
	
b.	 275
	
c.	 310
	
d.	 280
Q.3.	
The approximate percentage decrease in the 
number of male athletes who participated from 
Country C in the year 2018 as compared to the 
previous year was ______.
	
a.	 21%
	
b.	 25%
	
c.	 30%
	
d.	 35%
Q.4.	
The number of female athletes who participated 
from Country E in the year 2020 was ______% 
of the total number of athletes who participated 
from Country B in the year 2019.
	
a.	 60
	
b.	 56
	
c.	 50
	
d.	 46
Q.5.	
In the year 2017, the total number of athletes who 
participated in the event was the second highest 
from country ______.
	
a.	 A
	
b.	 B
	
c.	 D
	
d.	 E
Q.6.	
The quality of one\u2019s memory can generally be 
judged on the basis of his/her
	
a.	 Power of retention
	
b.	 Analytical ability
	
c.	 Communication skills
	
d.	 Mathematical numeracy
Q.7.	
Given below are two statements:
	
Statement I: Padlet is a game-based platform 
used in educational institutions to create quizzes, 
conversions and surveys.
	
Statement II: Seasaw is an app-based platform 
that allows students to work together on texts, 
PDFs drawings and videos etc.
Time Allotted: 1 Hour and 15 Minutes\b
Maximum Marks: 100
Important Instructions:-
1.	
Each question carries 2 marks.
2.	
This paper consists of fifty (50) multiple-choice type of questions.
3.	
Each item has four alternative options marked (a), (b), (c) and (d). You have to select the correct option. 
	
Example: where (c) is the correct option then you will select it like this (a) 
 (b) 
 (c) \uF0FC (d) 
.
4.	
Use of any calculator or log table etc., is prohibited.
5.	
There is no negative marking for incorrect answers.
UGC NET PAPER\u20131
UGC NET PAPER\u20131
GENERAL APTITUDE
SOLVED PAPER MARCH 2023

### PDF page 2

In the light of the above statements, choose the 
most appropriate answer from the options given 
below:
 
a. Both Statement I and Statement II are correct.
 
b. Both Statement I and Statement II are 
incorrect.
 
c. Statement I is correct but Statement II is 
incorrect.
 
d. Statement I is incorrect but Statement II is 
correct.
Q.8. 
Given below are two statements:
 
Statement I: Vygotsky emphasized the significant 
role played by adults and more able peers in 
children\u2019s learning.
 
Statement II: The zone of proximal development 
is the area, where the child solves a problem alone 
without the help of others.
In the light of the above statements, choose the 
most appropriate answer from the options given 
below:
 
a. Both Statement I and Statement II are correct.
 
b. Both Statement I and Statement II are 
incorrect.
 
c. Statement I is correct but Statement II is 
incorrect.
 
d. Statement I is incorrect but Statement II is 
correct.
Q.9. 
According to David and Johnson, which of the 
following are the basic elements of cooperative 
learning groups?
 
1. Self conceptualisation
 
2. Individual accountability
 
3. Skill development
 
4. Positive interdependence
 
5. Promotive interaction
Choose the correct answer from the options given 
below:
 
a. 1, 3 and 4 only
 
b. 1, 2 and 5 only
 
c. 2, 4 and 5 only
 
d. 1, 2, 4 and 5 only
Q.10. According to Kohlberg\u2019s theory the conventional 
level of moral development includes the following 
stages:
 
1. Obedience orientation
 
2. Being Nice/Relationships orientation
 
3. Social contract orientation
 
4. Law and Order orientation
 
5. Universal Ethical Principles orientation.
Choose the correct answer from the options given 
below:
 
a. 1 and 5 only
 
b. 3 and 4 only
 
c. 2 and 4 only
 
d. 2, 3 and 5 only
Q.11. The tendency of researchers to subtly and 
inadvertently affect the behaviours of participants 
in a study, obscuring the true effect of the 
independent variable, is called
 
a. Placebo effect
 
b. Experimenter Bias effect
 
c. The Hawthorne effect
 
d. Evaluation Apprehension effect
Q.12. Arrange the following components of a research 
paper written in APA style, in the correct order
 
1. Figures
 
2. Methods
 
3. Introduction
 
4. Tables
 
5. Results
Choose the correct answer from the options given 
below:
 
a. 3, 5, 2, 4, 1
 
b. 3, 2, 5, 4, 1
 
c. 3, 2, 1, 4, 5
 
d. 3, 2, 5, 1, 4
Q.13. The extent to which a measure yields the same 
scores across different times, groups of people, or 
versions of the instrument, is called:
 
a. Reliability
 
b. Content validity
 
c. Construct validity
 
d. Predictive validity
Q.14. Given below are two statements:
 
Statement I: Snowball sampling is a type of 
random sampling.
 
Statement II: Snowball sampling is helpful when 
participants belong to hard-to-reach groups.
In the light of the above statements, choose the 
most appropriate answer from the options given 
below:
 
a. Both Statement I and Statement II are correct.
 
b. Both Statement I and Statement II are 
incorrect.
 
c. Statement I is correct but Statement II is 
incorrect.
 
d. Statement I is incorrect but Statement II is 
correct.
Q.15. In the case of negatively skewed distribution
 
a. Mean < Mode < Median
 
b. Mean > Mode > Median
 
c. Mean > Median > Mode
 
d. Mean < Median < Mode
Q.16. One of the cool media of communication is:
 
a. Print
 
b. Television
 
c. Photograph
 
d. Radio
Q.17. In mass communication print is considered as a/
an

### PDF page 3

3
 
a. Folk medium
 
b. Electronic medium
 
c. Mechanical medium
 
d. Ordinary medium
Q.18. Which of the following are the characteristics of 
interactive communication?
 
1. It is decentralised.
 
2. It is state controlled.
 
3. It is highly centralized.
 
4. It is a two-way communication.
 
5. It provides universal citizenship.
Choose the correct answer from the options given 
below:
 
a. 1, 2, 3 only
 
b. 2, 3, 4 only
 
c. 3, 4, 5 only
 
d. 1, 4, 5 only
Q.19. Which 
of 
the 
following 
make 
classroom 
communication interesting?
 
1. Many asides while speaking
 
2. Fruitful discussions
 
3. Use of relevant transitions
 
4. Finding out the correct context
 
5. Pressurising the students with authoritarian 
commands.
Choose the correct answer from the options given 
below:
 
a. 1, 2 and 3 only
 
b. 2, 3 and 4 only
 
c. 3, 4 and 5 only
 
d. 1, 4 and 5 only
Q.20. Given below are two statements:
 
Statement I: The new technologies have brought 
in \u2018Market Specific Communication\u2019.
 
Statement II: The second media age has made 
the interactive technologies of communication to 
change the mediascape.
In the light of the above statements, choose the 
most appropriate answer from the options given 
below:
 
a. Both Statement I and Statement II are true.
 
b. Both Statement I and Statement II are false.
 
c. Statement I is true but Statement II is false.
 
d. Statement I is false but Statement II is true.
Q.21. In a certain coding language:
 
1. \u2018odo pado fao\u2019 means \u2018order packed food\u2019
 
2. \u2018pado fao sa digo\u2019 means \u2018packed food is 
good\u2019
 
3. \u2018digo yao mao\u2019 means \u2018good young man\u2019
 
4. \u2018Yao mao sa sito\u2019 mean \u2018young man is strong\u2019
Which of the following means \u2018order\u2019 and \u2018strong\u2019, 
respectively in that language?
 
a. \u2018yao\u2019 and \u2018mao\u2019
 
b. \u2018digo\u2019 and \u2018mao\u2019
 
c. \u2018pado\u2019 and \u2018sito\u2019
 
d. \u2018odo\u2019 and \u2018sito\u2019
Q.22. In a competitive examination held in the year 2000, 
a total of 6,00,000 (6.0 lakh) students appeared 
and 40% passed the examination. Forty percent 
(40%) of the total students were females and the 
rest were males. The pass percentage among the 
males was 50%. Find the pass percentage among 
the females.
 
a. 25%
 
b. 30%
 
c. 35%
 
d. 40%
Q.23. What number should replace the question mark 
(?) in the following series: 450, 473, 519, 588, 680, 
795?
 
a. 933
 
b. 950
 
c. 138
 
d. 82
Q.24. A businessman buys a house for \` 9.0 lakhs. He 
puts the house on rent and keeps 15% of each 
month\u2019s rent Separately for repairs. After paying 
\` 2106 as annual taxes on the rent, he realizes 10% 
annually on his investment. Find the monthly 
rent of the house.
 
a. \` 10,000
 
b. \` 9,080
 
c. \` 9,030
 
d. \` 9,500
Q.25. Sum of 3 consecutive odd numbers and 3 
consecutive even numbers together is 231. Also 
the smallest odd number is 11 less than the 
smallest even number. What is the sum of the 
largest odd number and the largest even number?
 
a. 81
 
b. 73
 
c. 77
 
d. 79
Q.26. \u201CFirst it is staying out late, then it is not calling 
home, then wild parties, and before you know 
it, your life will be completely out of control. 
Someday you will be glad that you had a 
lockdown.\u201D Which informal fallacy is committed 
in the above argument?
 
a. Red herring
 
b. Slippery slope
 
c. Strawman
 
d. Appeal to authority
Q.27. Which of the following statements are logically 
equivalent?
 
1. No philosophers are industrialists.
 
2. No industrialists are philosophers.
 
3. All non-industrialists are non-philosophers.
 
4. All philosophers are non-industrialists.
Choose the most appropriate answer from the 
options given below:
 
a. 1, 2 and 3 only
 
b. 1, 2 and 4 only
 
c. 1, 3 and 4 only
 
d. 2, 3 and 4 only
Q28. 
Which of the following statements are logically 
contradictory to each other?
 
1. All philosophers are industrialists.
 
2. Some philosophers are not industrialists.

### PDF page 4

3. No philosophers are industrialists.
 
4. No industrialists are philosophers.
Choose the most appropriate answer from the 
options given below:
 
a. 1 and 2 only
 
b. 1, 3 and 4 only
 
c. 1 and 3 only
 
d. 3 and 4 only
Q.29. 
If the statement \u2018No philosophers are industrialists\u2019 
is given as true, which of the following statements 
can be immediately inferred from it to be true?
 
a. No philosophers are rich persons.
 
b. All industrialists are philosophers.
 
c. Some philosophers are industrialists.
 
d. Some philosophers are not industrialists.
Q.30. According to Nyaya (Classical Indian school of 
Logic) which means of knowledge (pramana) 
is used in the following argument - \u201CThe world 
is an effect and hence it must have an efficient 
cause like all objects e.g. pots, cloth etc. do. That 
efficient cause is God\u201D.
 
a. Postulation (arthapatti)
 
b. Inference (anumana)
 
c. Comparison (Upamana)
 
d. Verbal Testimony (Sabda)
Q.31. Which one of the following acronyms matches 
incorrectly with their full form?
 
a. ATM - Automatic Teller Machine
 
b. SIM - Subscriber Identity Module
 
c. GPS - Global Positioning Sensor
 
d. GIS - Geographic Information System
Q.32. Identify the correct order of the following terms 
A-E to complete the paragraph given below 
that explains how data is sent securely over the 
Internet using the Transport Layer Security (TLS) 
protocol:
 
\u2018The browser requests to the _____ to identify 
itself by providing its _____. This is sent and a 
check is performed to see if it is _____. If it is, the 
_____ sends a _____ back to the web server and 
data transmission begins.\u2019
 
Choose the correct answer from the options given 
below:
 
1. authentic
 
2. browser
 
3. certificate
 
4. signal
 
5. web server
Choose the most answer from the options given 
below:
 
a. 3, 2, 4, 1, 5
 
b. 5, 3, 1, 2, 4
 
c. 4, 3, 1, 2, 5
 
d. 2, 3, 1, 5, 4
Q.33. Given below are two statements:
 
Statement I:
AI is an artificially created 
environment used to give a feeling of being there, 
whereas virtual reality learns from changing 
circumstances.
 
Statement II: Unlike dot matrix and inkjet 
printers, laser printers don\u2019t use ink when 
producing documents.
In the light of the above statements, choose the 
correct answer from the options given below:
 
a. Both Statement I and Statement II are true.
 
b. Both Statement I and Statement II are false.
 
c. Statement I is true but Statement II is false.
 
d. Statement I is false but Statement II is true.
Q.34. Which of the following are the main benefits of 
networking computers and devices rather than 
using a number of standalone computers?
 
1. Devices, such as printers, can be shared, thus 
reducing costs.
 
2. Licenses to run software on networks are 
often far cheaper than buying licenses for an 
equivalent number of standalone computers.
 
3. Users cannot share files and data.
 
4. Access to reliable data that comes from a 
central source, such as file server.
Choose the correct answer from the options given 
below:
 
a. 1 and 3 only
 
b. 2, 3 and 4 only
 
c. 1, 2, 3 and 4
 
d. 1, 2 and 4 only
Q.35. What is the average expenditure on tennis, 
hockey and cricket together?
LIST I 
(Computer Term)
LIST II 
(Description)
A. Disk defragmenter 
1. Utility that prepares 
a disk to allow that 
files to be stored 
and retrieved.
B. Disk formatter
2. Storage media with 
no moving parts.
C. Device driver
3. Utility that 
reorganises the 
sectors on a hard 
disk so that files 
can be stored in 
contiguous data 
blocks
D. Solid state drive
4. Software that 
communicates 
with the OS and 
translates data into 
a format understood 
by the device.
Choose the correct code from the below: 
 
a. A-2, B-1, C-3, D-4
 
b. A-3, B-1, C-4, D-2
 
c. A-1, B-3, C-2, D-4
 
d. A-4, B-2, C-1, D-3

### PDF page 5

5
Q.36. Which of the following is measured in Dobson 
Units?
 
a. Chloro Fluoro Carbon (CFC)
 
b. Stratospheric Ozone
 
c. Ultraviolet Rays
 
d. Solar Radiation
Q.37. Photo Electro Chemical (PEC) solar cells are based 
on
 
a. Only inorganic semiconductors
 
b. Only organic semiconductors
 
c. Only crystal silicon semiconductor
 
d. Hybrid structure of inorganic semiconductors 
and an electrolyte
Q.38. Match List I with List II
LIST I 
(Summit/Protocol)
LIST II 
(Year)
A. Montreal Protocol
1. 1992
B. Rio Summit
2. 2015
C. Kyoto Protocol
3. 1987
D. Paris Agreement
4. 1997
Choose the correct answer from the options given 
below:
 
a. A-3, B-1, C-4, D-2
 
b. A-3, B-1, C-2, D-4
 
c. A-1, B-3, C-2, D-4
 
d. A-4, B-2, C-1, D-3
Q.39. Thermal expansion of oceans may lead to
 
a. Global warming
 
b. Ozone depletion
 
c. Melting of glaciers
 
d. Sea level rise
Q.40. Waste stabilization ponds are:
 
1. Mainly oxidation ponds
 
2. Used to remove pathogen and organic 
contents
 
3. Natural treatment systems
 
4. Extremely quick
 
5.  Most efficient in extremely cold weather.
Choose the correct answer from the options given 
below:
 
a. 1, 2 and 3 only
 
b. 2, 3 and 4 only
 
c. 1, 2 and 5 only
 
d. 3, 4 and 5 only
Q.41. Given below are two statements:
 
Statement I: The Governor of the State is the 
Chancellor of deemed universities.
 
Statement II: Deemed universities can design 
their own syllabus and course work.
In the light of the above statements, choose the 
correct answer from the options given below:
 
a. Both Statement I and Statement II are true.
 
b. Both Statement I and Statement II are false.
 
c. Statement I is true but Statement II is false.
 
d. Statement I is false but Statement II is true.
Q.42. What is the full form of \u2018DIKSHA\u2019?
 
a. Digital Infrastructure for Knowledge Sharing
 
b. District Institute for Knowledge Sharing
 
c. Data Information and Knowledge Sharing
 
d. Digital Institution for Knowledge Sharing
Q.43. Which of the following are the key ingredients of 
quality in-service teacher training?
 
1. Preparation of training material
 
2. Assessment of training needs
 
3. Development of appropriate curriculum/
Modules
 
4. Assessment of the impact and outcome of the 
training.
Choose the most appropriate answer from the 
options given below:
 
a. 1 and 4 only
 
b. 2 and 3 only
 
c. 1, 3 and 4 only
 
d. 1, 2, 3, and 4
Q.44. According to NEP 2020 more HEIs shall be 
established and developed in underserved 
regions to ensure full
 
a. Access, Equity and Inclusion
 
b. Accountability, Equality and Integration
 
c. Assessment, Equivalence and Identity
 
d. Autonomy, Effectiveness and Implication
Q.45. Which 
of 
the 
following 
recommendations 
were put forward by the University Education 
Commission appointed after independence by 
the Indian Government concerning medical 
education in India?
 
1. Medical colleges should admit a maximum 
number of hundred students.
 
2. History of medicine with special reference to 
Indian systems should be taught in the first 
degree course in medicine.
 
3. More importance should be attached to Public 
health, Engineering and Nursing.
 
4. There should be provision of ten beds per 
student admitted in the medical college.
Choose the correct answer from the options given 
below:
 
a. 1 and 2 only
 
b. 2 and 3 only
 
c. 2, 3 and 4 only
 
d. 1, 2, 3, and 4
Direction for Questions (46 -50):
Read the following passage and answer the question.
It was in this atmosphere of intense antagonism and 
hostility that Gokhale introduced his Elementary 
Education Bill in 1910. He called it \u2018a small humble 
attempt to suggest the first steps of a journey, which is 
bound to prove long and tedious, but which must be 
performed, if the mass of our people are to emerge from 
their present condition.\u2019 Gokhale argued:
Free and compulsory education is the first remedy of 
all the remedies to be applied...without compulsion 
the educational developments in the last 60 years have 
been hopelessly slow. The only way that the world has

### PDF page 6

discovered to secure universal education in a country has 
been making it compulsory and free. Compulsion would 
operate harshly on the poorer classes of the community 
if it is not made free.
He suggested that only those students whose family 
income was 25 rupees and above per month should 
pay fees; for the rest, education was to be free. Out of 
the total expenditure required for it, two-thirds should 
be borne by the state and one-third by the local bodies. 
He suggested imposing an additional 8-anna tax on salt 
on the grounds that \u2018my countrymen should eat less salt 
than that their children should continue to grow up in 
ignorance and darkness\u2019.
Q.46. According to Gokhale, what percentage of the 
total expenditure on education should be borne 
by the state?
 
a. \u223C 25%
 
b. \u223C 33%
 
c. \u223C 66%
 
d. \u223C 75%
Q.47. Given below are two statements:
 
Statement I: Gokhale believed that education was 
necessary for the Indian masses to be liberated 
from their miserable condition.
 
Statement II: Gokhale faced little resistance in the 
introduction of his bill on elementary education.
In the light of the above statements, choose the 
most appropriate answer from the options given 
below:
 
a. Both Statement I and Statement II are correct.
 
b. Both Statement I and Statement II are 
incorrect.
 
c. Statement I is correct but Statement II is 
incorrect.
 
d. Statement I is incorrect but Statement II is 
correct.
Q.48. Which of the following can be inferred from the 
passage?
 
1. The growth of education in India was very 
slow prior to 1910.
 
2. There was a need to make education 
compulsory for all according to Gokhale.
 
3. Gokhale believed that achieving education 
for all Indians was a distant dream.
 
4. Gokhale suggested that the majority of 
expenditure for education should be met by 
local bodies.
Choose the correct answer from the options given 
below:
 
a. 1, 2 and 3 only
 
b. 2, 3 and 4 only
 
c. 1, 2 and 4 only
 
d. 1, 3, and 4 only
Q.49. Given below are two statements:
 
Statement I: Gokhale believed that education 
should be made free for the poor people.
Statement II: Gokhale suggested that an additional
tax of 8-anna should be imposed on salt.
In the light of the above statements, choose the 
most appropriate answer from the options given 
below:
 
a. Both Statement I and Statement II are correct.
 
b. Both Statement I and Statement II are 
incorrect.
 
c. Statement I is correct but Statement II is 
incorrect.
 
d. Statement I is incorrect but Statement II is 
correct.
Q.50. Given below are two statements: One is labelled 
as Assertion A and the other is labelled as 
Reason R:
 
Assertion A: Gokhale was not in favour of free 
education for the poor.
 
Reason R: He suggested that those students 
whose family income was Rs. 25 per month or 
more, should pay the education fees.
In the light of the above statements, choose the 
most appropriate answer from the options given 
below:
 
a. Both A and R are correct and R is the correct 
explanation of A.
 
b. Both A and R are correct but R is NOT the 
correct explanation of A.
 
c. A is correct but R is not correct.
 
d. A is not correct but R is correct.

---

# Part 2 \u2013 Answer key as printed in the PDF

Answer Key
Ques.
Ans.
Topic's Name
Chapter's Name
1
b
Data Interpretation 
Data Interpretation 
2
a
Data Interpretation 
Data Interpretation 
3
c
Data Interpretation 
Data Interpretation 
4
d
Data Interpretation 
Data Interpretation 
5
b
Data Interpretation 
Data Interpretation 
6
a
Method of learning
Teaching Aptitude
7
d
Levels of Teaching 
Teaching Aptitude 
8
d
Theories of learning
Teaching Aptitude 
9
c
Methods of learning
Teaching Aptitude 
10
c
Theories of learning
Teaching Aptitude 
11
b
Terminology
Research Aptitude
12
b
Styles of report wrting
Research Aptitude
13
a
validity and reliability
Research Aptitude
14
d
Sampling
Research Aptitude
15
d
Analyzing the data
Research Aptitude
16
b
General Aptitude
Communication
17
c
General Aptitude
Communication
18
d
Types of Communication
Communication
19
b
Classroom communication
Communication
20
a
ICT in communication
Communication
21
d
Coding decoding
Mathematical Reasoning
22
a
Percentage
Mathematical Reasoning
23
a
Number series
Mathematical Reasoning
24
c
Percentage
Mathematical Reasoning
25
a
Fallacies
Mathematical Reasoning
26
b
General Aptitude
Logical Reasoning
27
d
Square of opposition
Logical Reasoning
28
a
Square of opposition
Logical Reasoning
29
a
Square of opposition
Logical Reasoning
30
b
Indian logic
Logical Reasoning
31
c
Terminology
ICT
32
b
Terminology
ICT
33
b
Artificial Intelligence
ICT
34
d
Networking
ICT
35
b
Hardware
ICT
36
b
General Aptitude
People and Environment
37
d
General Aptitude
People and Environment
38
a
International Conventions
People and Environment
39
d
Natural Hazards
People and Environment

40
a
Terminology
People and Environment
41
d
Universities
Higher Education
42
a
Government initiativea
Higher Education
43
a
Teachers education
Higher Education
44
a
NEP 2020
Higher Education
45
d
Committies on education after independence
Higher Education
46
c
Reading Comprehension
Reading Comprehension
47
c
Reading Comprehension
Reading Comprehension
48
a
Reading Comprehension
Reading Comprehension
49
a
Reading Comprehension
Reading Comprehension
50
d
Reading Comprehension
Reading Comprehension

---

# Part 3 \u2013 Publisher's explanations (transcribed)

Answers with Explanations
1.	
Option (b) is correct.
Years 
Male in 
Country C
Female in 
Country C
Difference 
2016
225
155
70
2017
345
165
180
2019
330
210
120
2021
540
345
195
	
Highest difference in 2021.
	
Second highest is in 2017.
2.	
Option (a) is correct.
	
Average of female athletes from country B = Sum 
of female participants / no. of years 
	
 = (210 + 310 + 240 + 420 + 260 + 360) / 6
	
 = 1800 / 6 = 300
3.	
Option (c) is correct.
	
Male participants from country C in 2018 = 240
	
Male participants from country C in 2017 ( Previous 
year) = 345
	
Decrease = 105
	
Decrease percentage = (105 \xD7 100)/345 = 30.43% 
or 30% approximate.
4.	
Option (d) is correct.
	
Female participants from country E in 2020 = 460
	
Total participants from country B in 2019 = 570 + 
420 = 990
	
Percentage = 460 \xD7 100/990 = 46.46% or 46% 
Approximately.
5.	
Option (b) is correct.
	
Athletes participated in 2017 from country, 
Countries 
Male 
Female 
Total 
A 
330
210
540
B 
420
310
730
D 
420
315
735
E 
390
260
650
	
Highest = country D
	
Second highest = Country B
6.	
Option (a) is correct.
	
Power of retention is a quality of memory power. 
And a characteristic of the memory level of 
learning. 
	
There are three levels of learning
	
A.	 Memory level - lowest level of teaching where 
learning is focused on remembering, retention 
and route of information and facts. This is a 
thoughtless level. 
	
B.	 Understanding level - This level is associated 
with 
understanding 
the 
concepts 
and 
analyzing. This is a thoughtful level. 
	
C.	 Reflective level: This is the highest thoughtful 
level. Here, learners learn skills of problem 
solving and concept building. 
7.	
Option (d) is correct.
	
Padlet is an online tool used as a notice board and 
used by teachers and students both to post notes 
on a common area which can include images, 
links, videos, text etc. 
	
Seasaw is a mobile application platform that 
allows students to work with their imagination 
and creativity. Everyone works together on this 
platform on text, PDF, drawings, videos etc.
8.	
Option (d) is correct.
	
Vygotski gave the socio-cultural theory of cognitive 
development. According to his theory, society and 
culture affects the cognitive development of a 
child. 
	
The performance that a child can perform on their 
own is termed as actual development. 
	
The performance that a child can perform with 
help of any adult or more skilled person is termed 
as expected development. 
	
Difference 
between 
actual 
and 
expected 
development is called the Zone of Proximal 
Development or ZPD. 
9.	
Option (c) is correct.
	
According to David and Johnson, Five elements 
are essential for cooperative learning group: 
	
1.	
Positive interdependence
	
2.	
Group and individual accountability
UGC NET PAPER\u20131
UGC NET PAPER\u20131
GENERAL APTITUDE
SOLVED PAPER MARCH 2023

3. 
Promotive interaction
4. 
Appreciate use of social skills
5. 
Group processing 
10. 
Option (c) is correct.
According to the theory of moral development 
of Kohlberg, there are three stages of Moral 
Development and five stages of it. They are: 
1. Preconventional morality: this level is from 
0 to 9 years of age. In this stage, a child tries 
to be nice to everyone and moral values are 
dependent on the environment of home and 
peer group. 
 
Child follows moral values due to fear of 
punishment or to get an award or reward. 
Stage 1 and 2 are included in this stage. 
2. Conventional 
morality: 
From 
early 
adolescence to adulthood. In this level of 
moral development, the child is focused on 
developing good interpersonal relationships 
and maintaining social relationships and 
order. In Other words, a child performs the 
moral values with the motive of getting social 
recognition and respect. Stage 3 and 4 are 
included in this level. 
3. Postconventional morality: This level is rare 
and found in some adults. In this stage a person 
performs moral values as universal application 
of principles and social contracts.
11. 
Option (b) is correct.
When the personal biases or perception of the 
researcher or experimental affects the behaviors of 
participants in the study is called an experimental 
bias effect.
\u2022 
The Hawthorne effect is when a person 
changes behavior because all other people 
are changing or the response is changed after 
observing that the behavior is being observed. 
In other words, when a person changes his 
behavior because he is being observed or the 
behavior is modified by the participants is 
called hawthorne effects.
\u2022 
A placebo effect is when there is no scientific 
or logical method behind improvement. 
Only the thinking of participants affects the 
improvement.
\u2022 
The effect of fear of negative criticism from 
the external members is called the evaluation 
apprehension effect.
12. 
Option (b) is correct.
APA of American Psychological Association format 
is a very commonly used format for research 
writing or thesis writing. This format is used for 
psychology, business nursing, sociology, linguistic 
Research and economics. 
Correct order of report writing in this format is: 
\u2022 Introduction 
\u2022 Methods 
\u2022 Result 
\u2022 Tables
\u2022 Figures
13. 
Option (a) is correct.
Reliability is associated with consistency of results. 
When a test is providing the same results after 
measuring different points of times, it can be called 
a reliable test.
Validity is associated with correct or right results. 
A valid test is always reliable but a reliable test is 
not always valid. 
Content validity of a test is associated with content 
of the test as it is able to test for which it was 
constructed.
Construct validity of a test is when construction or 
the format of a test is correctly done.
14. 
Option (d) is correct.
Non probability sampling the type of sampling in 
which every unit of population does not have an 
equal chance to be selected in the sample size. This 
sampling method is commonly used in qualitative 
research from the given options phenomenology 
based Research and action research are some 
examples in which non probability sampling 
works properly.
Types of non probability sampling: 
1. Quota sampling
2. Judgemental sampling
3. Convenience sampling 
4. Purposive sampling 
5. Snowball sampling 
6. Accidental sampling 
Probability sampling or random sampling is 
the method of sampling in which every unit of 
population has an equal chance to be selected and 
that sample size or sample is collected on a random 
basis from the population. 
Types of random sampling: 
1. Simple random sampling 
2. Systematic sampling 
3. Stratified sampling
4. Cluster sampling 
5. Multistage sampling 
Systematic and multistage sampling are also called 
Quasi random sampling.
Snowball sampling is a type of non random or non 
probability sampling which is done in a field that 
is less explored or the participants are not easily 
convinced to participate or hard to reach group 
topics. It is also called reference sampling in which 
a small sample is selected and the people in that

sample are asked to refer to other people or to 
collect data from other people. 
Initial subjects
recruit additional
subjects .....
Researchers recruit initial subjects
...who recruit
additional
subjects
15. 
Option (d) is correct.
Bell shaped curve in the case of symmetrical data. 
In this case, Mean, median and mode are equal or 
Mean = Median = Mode.
In case of asymmetrical data, the curve is bended or 
skewed. It can be positively or negatively skewed. 
This given curve is a positively skewed curve. In 
this case, Mean is highest and mode is lowest or 
Mean>Median>Mode. 
(Note: This can be learned by remembering 
\u201CPositive people are always right and mean.\u201D This 
shows that positively skewed curve is bend from 
right side and mean has highest value in it. )
This given curve is a negatively skewed curve. In 
this case, Mode is highest and mean is lowest or 
Mode>Median>Mean.
16. 
Option (b) is correct.
One of the cool media of communication 
is television among the given options as it 
includes various communication methods or 
Mass Communication methods with different 
attractions, formats and audio visual aids. 
17. 
Option (c) is correct.
Print in mass media is considered as a mechanical 
medium of communication. 
18. 
Option (d) is correct.
Interactive communication is a communication in 
which both parties are sender and receiver also 
or it is a two way communication. It is dialogue 
communication.
19. 
Option (b) is correct.
Following are the ways by which a teacher can 
make a classroom communication interesting and 
attractive: 
A. Using teaching learning aids
B. Pre planning of classroom teaching
C. Fruitful discussion
D. Inviting doubts and questions
E. Learning by doing or connecting the classroom 
content with real life
F. 
Finding out the correct context
G. Participation of students for active learning
H. Use of relevant real life examples
20. 
Option (a) is correct.
Both of the given statements are correct as with 
development of new technology's Market specific 
communication is being introduced to wider areas. 
Market specific communication refers to the 
mass communication which is mainly focused on 
advertisement and promotion in the target Market 
by the producers or the sellers.
The 
communication 
as 
mediascape 
refers 
to 
the 
communication 
as 
a 
whole. 
The 
interactive technology or modern technology 
of communication has changed the medium of 
communication To integrated, modern and whole 
developed communication.
21. 
Option (d) is correct.
1.  odo pado fao = order packed food
2.  Pado fao sa digo = packed food is good 
 
By comparing both code 1 and 2, 
 
Common code word - pado fao
 
Common word = packed food
 
Hence, = pado fao = packed food
3.  Digo yao mao = good young man
 
By comparing codes 2 and 3,
 
Digo = good
4.  Yao mao sa sito = young man is strong.
 
By comparing codes 3 and 4, 
 
Yao = young.

By comparing all the codes, 
 
Order = odo
 
As in the first code, pado fao = packed food.
 
Hence, order = odo
 
Strong = sito 
22. 
Option (a) is correct.
Total students = 6 lakhs
Students passed the examination = (40/100) \xD7 
600000 or 2,40,000
Total female students = (40/100) \xD7 600000 or 
2,40,000
Male students = 6,00,000 \u2013 2,40,000 = 3,60,000
Pass percent among the male students = 50%
Male Students passed = 50% of 3,60,000 or 1,80,000
Number of female students in passed students = 
total students passed - male students passed
= 2,40,000 \u2013 1,80,000
= 60,000
Pass percent of female students = females passed 
the examination \xD7 100/total female students 
= 60,000 \xD7 100/2,40,000
= 25% 
23. 
Option (a) is correct.
Multiples of 23 are added to form the given series 
450 + (23 \xD7 1) = 473
473 + (23 \xD7 2) = 473 + 46 = 519
519 + (23 \xD7 3) = 588
588 + (23 \xD7 4) = 680
680 + (23 \xD7 5) = 795
795 + (23 \xD7 6) = 933
24. 
Option (c) is correct.
Realization over investment = 10% 
Or 10% of 9 lakhs or 90,000 rs.
Annual tax = 2106 rs.
Annual rent = 90,000 + 2,106 + 15% of the rent
If annual rent is 100% 
Here, it can be like -
90,000 + 2106 = 85% of rent
Annual rent = 92,106 \xD7 100/85 
= 1,08,360
Or monthly rent = 1,08,360/12 = 9,030
25. 
Option (a) is correct.
Difference between smallest odd and smallest 
even number = 11
Let the smallest odd number = x
Then, the smallest even number = x + 11
Three odd numbers = x, x + 2, x + 4
Three even numbers will be = x + 11, x + 13, x + 15
Sum of all these 6 numbers = 231
6x + 45 = 231
6x = 231 \u2013 45 = 186
x = 186 \xF7 6 = 31
Smallest odd number = 31
Three odd digits = 31, 33, 35
Smallest even number = 31 + 11 = 42
Three even numbers = 42, 44, 46
Sum of largest odd and largest even number = 35 
+ 46 = 81
26. 
Option (b) is correct.
The fallacy when arguments are connected with a 
flow and series of irrelevant arguments is called a 
slippery slope. 
Straw Man fallacy: this is a miss presentation by 
someone to make it easier to attack if a mother 
says that you have to finish the veggies if you want 
dessert and the sun replies you love me only when 
I eat food.
Appeal to authority is a fallacy where an argument 
is considered valid as it is delivered by some 
authorized person or text. 
27. 
Option (d) is correct.
All the given statements are equivalent except 
statement 1 which can not be defined. 
28. 
Option (a) is correct.
I type statement
O type statement
E type statement
A type statement
Sub-Alter
Contary
Contradictory
Contradictory
Sub- Contary
Sub- Alter
\u2022 A type statement- Universal positive statements 
where all or almost or most of words are used. 
Example- All philosophers are industrialists.
\u2022 E 
type 
statements- 
Universal 
negative 
statements. For example- All philosophers are 
not industrialists. 
\u2022 I type statements. Particular positive statements. 
Where some or few are used. Example- Some 
philosophers are industrialists. 
\u2022 O 
type 
statements- 
Particular 
negative 
statements. For example- some philosophers 
are not industrialists. 
A and O type statements or E and I type of 
statements are logically contradictory to each 
other. 
29. 
Option (a) is correct.
I type statement
O type statement
E type statement
A type statement
Sub-Alter
Contary
Contradictory
Contradictory
Sub- Contary
Sub- Alter

\u2022 Contradictory statements are A and O, Eand I. 
If one statement is true the another will be false 
and the one statement is false the another will 
be true. 
\u2022 Contrary statements are A and E. These 
statements cannot be true at the same time 
but can be False at the same time. If one is 
false the another will be immediately true but 
the one is true then the other is doubtful or 
undetermined.
\u2022 Sub country statements are I and O. Both 
cannot be false together but can be true 
together. If one is false the another will be true 
immediately but if the one is true the other will 
be undetermined. 
\u2022 Sab alteration statements are A and I, E and O. 
If the universal statement is true the particular 
statement will be false. 
\u2022 If the universal statement is false the particular 
will be undetermined.
\u2022 If particular opposition is false Universal 
preposition will be false.
\u2022 If a particular statement is true the universal 
statement will be doubtful or undetermined.
30. 
Option (b) is correct.
The Nyaya school of logic has considered only four 
pramanas as valid sources of knowledge among 
the six pramanas. They are: 
1. Pratyaksh or perception: This is the direct 
means of knowledge by sense organs for 
example gaining knowledge by seeing, by 
smell, by hearing etc.
2. Comparison or upmana: This is the means 
of knowledge with the help of previous 
knowledge for example if a boy sees smoke on 
Hill and inferences that there must be a fire on 
the basis of knowledge that he had seen fire in 
the kitchen that has smoke. This way of gaining 
knowledge or getting known is comparison or 
upamana.
3. Shabd or verbal testimony: When a person gets 
knowledge or learning with the verbal means 
either written or spoken by some authority 
person is the way of getting knowledge by 
shabd Pramana. 
4. Anumana or inference: Another way of gaining 
knowledge or means of knowledge is anumana 
in which a conclusion is inferred on the basis of 
premises or prior knowledge.
Anupalabdhi and Arthapatti are two other Pramas 
but not considered as valid sources of knowledge 
according to Nyaya school of logic.
31. 
Option (c) is correct.
GPS stands for Global Positioning System. 
32. 
Option (b) is correct.
In the process of data transmission the web requests 
the web server to identify itself by providing its 
certificate. This is sent and a check is performed 
to see if it is authentic or not. If it is authentic, the 
browser sends a signal back to the web server and 
data transmission begins. 
33. 
Option (b) is correct.
AI aur artificial intelligence is the latest or 
modern technology in which the intelligence is 
demonstrated by machines like robots, Alexa, Siri 
etc. Artificially created environment that is used to 
give a feeling of being there whereas virtual reality 
Learns from changing circumstances is a use of 
artificial intelligence.
34. 
Option (d) is correct.
All the given statements are benefits of connecting 
computers and devices rather than using a number 
of stand alone computers except the statement 
number three as users can share files and data 
from this type of networking computers.
35. 
Option (b) is correct.
Whenever a new hardware is connected to 
the computer the driver has to be installed in 
the computer for smooth and non restricted 
functioning of that hardware. Hence, device 
drivers are the softwares that communicates with 
the operating system and translates data into a 
format understood by the device.
Solid state drive or SSD is a storage hardware with 
no moving parts. SSD is the modern technology 
which replaces the hard disc drive with new 
functioning, more storage and smooth operations.
Disc formatter is a utility that prepares the disc to 
allow files to be stored and retrieved.
36. 
Option (b) is correct.
Units 
1. CFCs
Picomoles
2. Stratospheric ozone
Dobson
3. Ultraviolet rays 
Milliwatts per square 
meter
4. Solar radiations
Watts per square 
meter
37. 
Option (d) is correct.
Photo Electro Chemical or PEC solar cells are based 
on hybrid structure of inorganic semiconductors 
and an electrolyte. 
This is a method from which hydrogen is produced 
from water.

38. 
Option (a) is correct.
International Convention 
Year 
Montreal Protocol
1987
Paris Agreement
2015
Kyoto Protocol 
1997
Rio Summit
1992
 
Montreal Protocol:
\u2022 Related to Ozone depletion substances.
\u2022 Held on 16th September, 1987.
\u2022 It was stated that all nations should not be 
treated equally.
\u2022 Target was to Eliminate 98% of controlled ODS. 
\u2022 Equal but different responsibilities were 
decided by countries. 
\u2022 MOP or meeting of parties is the governance 
body of this protocol.
\u2022 Chlorofluorocarbons were considered the most 
bounded ozone depletion substance.
\u2022 Multilateral fund was set up in 1991 to help 
developing countries. It was set up by 4 
organizations.
\u2022 This is the world's most successful international 
convention.
 
Kyoto Protocol: 
\u2022 The Kyoto Protocol of 1997 is one of the 
landmark agreements of Earth Summit 1992. 
 
Rio Summit: 
\u2022 It was held in Rio de Janeiro in Brazil in 1992. 
\u2022 It is famously called Earth Summit 1992. 
\u2022 Held by the United Nation conference on 
environment and development or UNCED. 
\u2022 It had three non binding documents named as 
declaration on environment and development, 
agenda 21 and forest principles. 
\u2022 Rio has 27 total principals.
\u2022 Agenda 21 was replaced by "Agenda 2030" in 
2015. 
\u2022 Some legally binding agreements delivered 
from the Rio summit. 
 
Paris Agreement: 
\u2022 The Paris agreement is the Cop (conference of 
parties) 21 of the United Nations Framework 
convention on climate change.
\u2022 It was held in 2015, enforced from 2016 And 
started in 2020.
\u2022 It has legally binding agreements
\u2022 It deals with greenhouse gasses emission, 
mitigation, adoption and Finance.
\u2022 20 20 20formula or mechanism would be held 
every 5 years.
\u2022 20% reduction of greenhouse gasses, 20% 
savings of energy and 20% increase of 
Renewable Energy share.
39. 
Option (d) is correct.
Thermal expansion of the ocean leads to an 
increase in the level of water or can cause sea level 
rise. 
40. 
Option (a) is correct.
Waste stabilization Ponds are natural treatment 
systems that are used to remove pathogens and 
organic contents from wastewater with the help of 
oxidation. 
41. 
Option (d) is correct.
\u2022 
The Governor of the state is the official 
chancellor of State Universities. 
\u2022 
The President is the chancellor of all Central 
Universities. 
\u2022 
Deemed universities can assign degrees, define 
and construct syllabus on their own. 
42. 
Option (a) is correct.
DIKSHA Stands for Digital Infrastructure for 
Knowledge Sharing. 
According to the official website of DIKSHA 
(diksha.gov.in): 
"DIKSHA (Digital Infrastructure for Knowledge 
Sharing) is a national platform for school education, 
an initiative of National Council for Educational 
Research and Training (NCERT), under the aegis of 
the Ministry of Education (MoE), GoI. Launched in 
2017 by Honourable Vice President of India \u2013 Shri 
M. Venkaiah Naidu, DIKSHA has been adopted 
by almost all the States, Union Territories, central 
autonomous bodies/boards including CBSE."
\u2022 
This is an initiative under the ministry of 
education with the motive of promoting 
e-learning and teaching. 
\u2022 
It helps to develop a strategy and helps 
in planning for the Teachers for better 
professional performance.
\u2022 
Digital education report is launched under this 
program every year to measure the growth of 
digital education in the country.
\u2022 
DIKSHA has been adopted by almost all the 
states and union territories.
\u2022 
Currently it is available in 36 languages.
43. 
Option (a) is correct.
University Education Commission was set up under 
the chairmanship of Sarvepalli Radhakrishnan 
hence, it is also called Radhakrishnan Commission. 
It was set up in 1948.
About the medical education in India this 
Commission recommended the following:

\u2022 
Medical College should admit a maximum 
number of 100 students who want to get 
admission and have skills.
\u2022 
History of medicine with special reference to 
the Indian system should be taught in the first 
degree course in medicine as India has a rich 
history of knowledge of medicines.
\u2022 
More important should be attached to public 
health, Engineering and Nursing.
\u2022 
Bed per Student ratio should be 1:10. 
44. 
Option (a) is correct.
According to the New Education Policy 2020 more 
higher educational institutions shall be established 
and developed in underserved regions to ensure 
full Access, Equity and inclusion in higher 
education.
45. 
Option (d) is correct.
Institutions or related organizations like NCERT, 
NCET etc arrange the in-service teacher training 
with adequate resources and in the proper gap of 
time.
All the given options are the key ingredients 
for quality in service training of teachers which 
includes preparation, execution, evaluation and 
assessment. 
46. 
Option (c) is correct.
As given in the passage, from all the expenses on 
education of poor people, two third should be 
borne by the state which is equivalent to 66.667% 
and one third should be borne by local bodies 
which is equal to 33.33%.
47. 
Option (c) is correct.
Gokhale believed that education was necessary 
for the Indian masses to be liberated from 
there miserable condition but he did not face 
any resistance in the introduction of his bill on 
elementary education as the bill was introduced 
in 1910 and he called it small humble attempt to 
suggest the first step of journey which is found 
to prove long and tedious but which must be 
performed.
48. 
Option (a) is correct.
All the given statements are true as per the given 
passage but not statements for as the Gokhle 
suggested that majority of Expenditure for 
education should be met by State and the lesser 
should be made by local bodies.
49. 
Option (a) is correct.
In the given passage Gokhale suggested that only 
those students whose family income was 25 rupees 
and above per month should pay fees for the rest, 
education was to be free.
50. 
Option (d) is correct.
Assertion is not correct as the Gokhale was in favor 
of free education for the poor and he suggested 
that those students whose family income was 
rupees 25 per month or more should pay fees and 
the other should not.

---

# Part 4 \u2013 Additional UGC NET study notes and concept clarifications

## Teaching aptitude
- **Levels of teaching:** Memory (recall/retention), Understanding (comprehension/relationships), Reflective (critical thinking/problem-solving). The reflective level is the highest thoughtful level in the traditional classification.
- **Vygotsky:** Sociocultural theory; cognitive development is shaped by social interaction, language and culture. The **Zone of Proximal Development (ZPD)** is the gap between independent performance and performance possible with guidance from a more knowledgeable other. Scaffolding is temporary support gradually withdrawn.
- **Cooperative learning:** Five core elements in Johnson & Johnson's framework are positive interdependence, individual/group accountability, promotive interaction, interpersonal/social skills and group processing.
- **Kohlberg:** Preconventional (Stages 1\u20132), conventional (Stages 3\u20134), postconventional (Stages 5\u20136). Conventional morality includes good interpersonal relationships and law-and-order orientation.
- **Digital tools:** Padlet is primarily a collaborative digital noticeboard; Seesaw supports student portfolios and classroom communication; Kahoot! is a game-based quiz platform; Mentimeter supports polls and word clouds; Moodle is an LMS.

## Research aptitude and statistics
- **Experimenter bias:** Researcher expectations or cues influence participants or measurement. **Hawthorne effect:** participants change behaviour because they know they are observed. **Placebo effect:** response associated with treatment expectations. **Evaluation apprehension:** concern about being judged changes behaviour.
- **IMRaD:** Introduction, Method, Results, Discussion. Tables and figures are presentation elements; placement depends on the APA edition and journal instructions.
- **Reliability** is consistency; **validity** concerns whether evidence supports the intended interpretation/use of scores. A reliable measure is not automatically valid.
- **Sampling:** Snowball, convenience, quota and purposive sampling are non-probability methods. Simple random, systematic, stratified, cluster and multistage sampling are probability methods.
- **Skewness:** Symmetrical: Mean = Median = Mode. Positive/right skew: Mode < Median < Mean. Negative/left skew: Mean < Median < Mode (usual unimodal case).
- **Percentage change:** (New \u2212 Old) \xF7 Old \xD7 100. For a percentage decrease, use the original value as denominator.

## Communication and logical reasoning
- **McLuhan's hot/cool media:** Television is classically treated as cool; radio and print are commonly treated as hot in the original framework. These are theoretical categories, not contemporary technical standards.
- Interactive communication is two-way and participatory. The \u201Csecond media age\u201D is associated with networked, decentralised and many-to-many communication.
- Categorical propositions: A = All S are P; E = No S are P; I = Some S are P; O = Some S are not P. Contradictories: A\u2013O and E\u2013I; contraries: A\u2013E; subcontraries: I\u2013O. Traditional subalternation assumes existential import; modern predicate logic does not infer existence from a universal statement alone.
- Nyaya's four accepted pramanas: **Pratyaksha** (perception), **Anumana** (inference), **Upamana** (comparison) and **Shabda** (verbal testimony).
- Informal fallacies: red herring (irrelevant distraction), slippery slope (unsupported chain of inevitable consequences), strawman (misrepresenting an argument), appeal to authority (treating authority as decisive without adequate grounds).

## ICT and environment
- GPS = Global Positioning System; GIS = Geographic Information System; SIM = Subscriber Identity Module.
- AI refers to machine systems performing tasks associated with intelligence; VR creates an immersive simulated environment. Laser printers use toner; inkjet printers use liquid ink; dot-matrix printers use impact pins and a ribbon.
- TLS supports confidentiality, integrity and authentication. A server certificate helps a client authenticate the server; a full TLS handshake involves certificate validation and cryptographic negotiation.
- Dobson Unit measures total-column atmospheric ozone. Solar irradiance is commonly measured in W/m\xB2.
- Montreal Protocol (1987), Rio Earth Summit (1992), Kyoto Protocol (1997), Paris Agreement (2015). Ocean thermal expansion contributes to sea-level rise. Waste stabilisation ponds use biological processes to treat wastewater and require retention time.

## Higher education
- DIKSHA = Digital Infrastructure for Knowledge Sharing; it is a national digital platform for school education.
- NEP 2020 emphasises access, equity and inclusion, multidisciplinary learning, flexible pathways, vocational education, research and technology integration.
- Radhakrishnan Commission = University Education Commission (1948\u201349); Mudaliar Commission = Secondary Education Commission (1952\u201353); Kothari Commission = Education Commission (1964\u201366).
- Deemed-to-be universities are declared under Section 3 of the UGC Act, 1956. Their academic autonomy is subject to applicable laws and regulatory requirements. Chancellor arrangements vary by institution/statute.

---

# Part 5 \u2013 Accuracy audit: apparent errors in the source key/explanations

1. **Q27:** The printed key gives (d), but the standard categorical-logic transformations make statements 1, 2 and 4 equivalent. The logically supported option is **(b)**. Statement 3 reverses the class relation.
2. **Q29:** The printed key gives (a), which cannot be inferred from \u201CNo philosophers are industrialists.\u201D Under the traditional square of opposition, the intended answer is likely **(d)** (\u201CSome philosophers are not industrialists\u201D), assuming philosophers exist. In modern predicate logic, existence is not implied by the universal negative alone.
3. **Q31:** The intended mismatch is (c), since GPS means Global Positioning System. The expansion of ATM in option (a) is also non-standard; the conventional form is **Automated Teller Machine**.
4. **Q33:** The printed key/explanation gives (b), but Statement I reverses AI and VR and is false, while Statement II is broadly true because laser printers use toner rather than liquid ink. The technically correct answer is **(d)**.
5. **Q43:** The printed key gives (a), but all four listed items are legitimate components of quality in-service teacher training. The best answer is **(d)**. The publisher's explanations appear to have shifted the explanations for Q43 and Q45.
6. **Q45:** The printed key gives (d). The explanation attributes the recommendations to the Radhakrishnan Commission but does not cite the original report; treat this as the source's intended answer and verify the historical detail from an authoritative commission report if needed.
7. **Q7 wording:** \u201CPadlet\u201D is described inaccurately as game-based in Statement I. The intended contrast is that Padlet is a collaborative board while Seesaw is a student learning/portfolio platform.

## Suggested way to study this paper
Attempt each question before reading its explanation. For numerical questions, write the formula and base value; for reasoning questions, identify the rule or proposition form; for passage questions, locate the exact supporting sentence. Revise the discrepancy list separately so that a publisher's typo does not become a memorised fact.
`;var Ue={ArrowLeft:Ie,ArrowRight:Se,BookOpen:Te,Brain:Pe,Check:De,CheckCheck:Be,ChevronLeft:Ee,ChevronRight:Re,Clock3:Me,Flag:Le,GraduationCap:qe,History:Fe,LockKeyhole:$e,Maximize:Oe,RotateCcw:Ne,X:Qe},He=document.querySelector("#app"),de=document.querySelector("#submit-dialog"),mt="ugc-net-march-2023-v1",w=[],G={paper1:{label:"Paper I",name:"General Aptitude (Teaching & Research)",shortName:"General Aptitude",count:50,questions:[]},paper2:{label:"Paper II",name:"Psychology (Subject Code: 04)",shortName:"Psychology",count:100,questions:[]}},S=t=>G[t?.paper||"paper2"],u={attempt:null,history:[]},_=!0,q="all",L=!1,h=t=>`<i data-lucide="${t}" aria-hidden="true"></i>`,M=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),K=t=>p.parse(M(t),{breaks:!0}),k=()=>u.attempt&&!u.attempt.finishedAt,fe=t=>{let e=Math.ceil(t/1e3);return[Math.floor(e/3600),Math.floor(e%3600/60),e%60].map(a=>String(a).padStart(2,"0")).join(":")},ht=t=>new Date(t).toLocaleString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"});function Z(){try{localStorage.setItem(mt,JSON.stringify(u))}catch{_=!1}}function sa(){try{let t=JSON.parse(localStorage.getItem(mt)||"null");if(!t||!Array.isArray(t.history))return;let e=a=>a&&(!a.paper||Object.hasOwn(G,a.paper))&&Number.isFinite(a.startedAt)&&Number.isFinite(a.deadline)&&a.deadline-a.startedAt===le&&a.answers&&typeof a.answers=="object"&&!Array.isArray(a.answers)&&Array.isArray(a.marked);u.history=t.history.filter(a=>e(a)&&Number.isFinite(a.finishedAt)).slice(0,20),e(t.attempt)&&(u.attempt=t.attempt,u.attempt.index=Math.max(0,Math.min(S(u.attempt).count-1,Number(u.attempt.index)||0)))}catch{_=!1}}function H(t){location.hash===t?gt():location.hash=t}function gt(){z(),window.scrollTo(0,0)}function J(t=!1){return`<header class="site-header"><div class="header-inner">
    <a class="brand" href="#library" aria-label="Ishita you u can do it home"><img class="brand-symbol" src="./logo.JPG" alt="Ishita" width="38" height="38"><span>Ishita you u can do it</span></a>
    ${t?`<span class="header-paper">March 2023 <span>/</span> ${S(u.attempt).label}</span><div class="timer" role="timer" aria-label="Time remaining">${h("clock-3")}<span id="timer-value">${fe(Q(u.attempt))}</span></div>`:'<span class="header-label">GENERAL APTITUDE <span class="dot"></span> PSYCHOLOGY</span>'}
  </div></header>`}function Ge(){return'<footer class="site-footer"><span>UGC NET Practice</span><span>March 2023 \xB7 AN Shift</span></footer>'}function na(){let t=u.attempt;return`${J()}<main class="page library-page">
    <div class="page-title"><div><p class="eyebrow">YOUR EXAM LIBRARY</p><h1>UGC NET Practice</h1><p class="subtitle">General Aptitude &amp; Psychology \xB7 Previous-year papers</p></div><div class="library-count"><strong>01</strong><span>of 30 papers available</span></div></div>
    ${k()?`<div class="resume-banner"><span>${h("clock-3")} March 2023 exam in progress</span><button class="button primary" data-action="resume">Resume exam ${h("arrow-right")}</button></div>`:""}
    <div class="tabs" role="tablist" aria-label="Library views"><button role="tab" aria-selected="${!L}" class="tab ${L?"":"selected"}" data-action="library-tab">${h("book-open")} Papers <span>30</span></button><button role="tab" aria-selected="${L}" class="tab ${L?"selected":""}" data-action="history-tab">${h("history")} My attempts <span>${u.history.length}</span></button></div>
    ${L?ia():`<div class="section-label"><h2>Exam sessions</h2><span>1 available \xB7 29 coming soon</span></div><section class="session-grid" aria-label="Exam sessions">
      <button class="session-card available" data-action="open-paper"><div class="card-top"><span class="session-number">01</span><span class="badge">AVAILABLE</span></div><h2>March 2023</h2><p>General Aptitude &amp; Psychology</p><div class="session-bottom"><span>150 questions \xB7 2 papers</span>${h("arrow-right")}</div><img class="session-photo" src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=640&q=80" alt="Open books on a study desk" loading="eager"></button>
      ${Array.from({length:29},(e,a)=>`<button class="session-card upcoming" disabled aria-label="Session ${a+2}, coming soon"><div class="card-top"><span class="session-number">${String(a+2).padStart(2,"0")}</span>${h("lock-keyhole")}</div><h2>Coming soon</h2><p>Next exam session</p><div class="session-bottom"><span>Not yet available</span></div></button>`).join("")}
    </section>`}
    ${t?.finishedAt&&!L?`<a class="text-link last-result" href="#results">${h("history")} Last score \xB7 ${S(t).label}: ${U(S(t).questions,t.answers).score}/${S(t).count*2} ${h("arrow-right")}</a>`:""}
    ${_?"":'<p class="notice" role="alert">Browser storage is unavailable. Keep this tab open; your progress cannot be saved across reloads.</p>'}
  </main>${Ge()}`}function ia(){return u.history.length?`<section class="attempt-list" aria-label="Completed attempts">${u.history.map((t,e)=>{let a=S(t),o=U(a.questions,t.answers);return`<div class="attempt-row"><span class="attempt-icon">${h("check-check")}</span><div><h2>March 2023 \xB7 ${a.label}: ${a.shortName}</h2><p>${ht(t.finishedAt)}</p></div><strong>${o.score}<small> / ${o.total}</small></strong><button class="button secondary" data-action="review-history" data-index="${e}" ${k()?"disabled":""}>Review ${h("arrow-right")}</button></div>`}).join("")}</section>`:'<section class="empty-state"><h2>No completed attempts yet</h2><p>March 2023 \xB7 General Aptitude &amp; Psychology</p><button class="button primary" data-action="open-paper">Open paper '+h("arrow-right")+"</button></section>"}function la(){return`${J()}<main class="page"><a class="back-link" href="#library">${h("arrow-left")} All sessions</a><div class="page-title"><div><p class="eyebrow">MARCH 2023 \xB7 AN SHIFT</p><h1>Choose your paper</h1><p class="subtitle">UGC NET \xB7 Psychology</p></div><span class="outline-badge">March 2023</span></div>
    <div class="exam-facts"><span>${h("clock-3")} <strong>3 hours</strong> total duration</span><span>${h("check-check")} <strong>+2 marks</strong> per correct answer</span><span>${h("check")} <strong>No negative marking</strong></span></div>
    <section class="papers-grid" aria-label="Exam papers">${Object.entries(G).map(([t,e])=>`<article class="paper-card ready-paper"><div class="paper-top"><span class="paper-icon">${h(t==="paper1"?"book-open":"brain")}</span><span class="badge">AVAILABLE</span></div><p class="eyebrow">${e.label.toUpperCase()}</p><h2>${e.label}: ${M(e.name)}</h2><div class="paper-details"><span><strong>${e.count}</strong> questions</span><span><strong>${e.count*2}</strong> marks</span></div><button class="button primary full" data-action="start" data-paper="${t}" ${k()&&S(u.attempt)!==e?"disabled":""}>${k()&&S(u.attempt)===e?"Resume exam":"Start exam"} ${h("arrow-right")}</button></article>`).join("")}</section>
    <div class="start-strip"><span>${h("clock-3")} <strong>${k()?fe(Q(u.attempt)):"03:00:00"}</strong></span><span>${k()?`${S(u.attempt).label} in progress`:"Timer starts when you start a paper"}</span></div>
    <p class="exam-note">Each paper is a separate practice attempt with a three-hour limit. Complete the current attempt before starting another.</p>
    ${_?"":'<p class="notice" role="alert">Browser storage is unavailable. Progress will not survive a reload.</p>'}
  </main>${Ge()}`}function pt(t){return u.attempt.marked.includes(t.id)?"marked":u.attempt.answers[t.id]?"answered":"unanswered"}function da(){let t=u.attempt,e=w[t.index],a=U(w,t.answers);return`${J(!0)}<main class="exam-layout"><section class="question-area" aria-label="Current question">
    <div class="exam-heading"><div><p class="eyebrow">${S(t).label.toUpperCase()} \xB7 ${S(t).shortName.toUpperCase()}</p><h1>Question ${e.id}<span> / ${w.length}</span></h1></div><div class="question-tools"><span class="marks-label">+2 marks</span><button class="icon-button" title="Toggle fullscreen" aria-label="Toggle fullscreen" data-action="fullscreen">${h("maximize")}</button></div></div>
    <div class="progress-track"><div style="width:${a.answered/w.length*100}%"></div></div>
    ${e.passage?`<section class="passage"><h2>${M(e.passageLabel||`Passage \xB7 Questions ${e.id<=95?"91\u201395":"96\u2013100"}`)}</h2><p>${M(e.passage)}</p>${e.passageTable?`<div class="data-table">${K(e.passageTable)}</div>`:""}</section>`:""}
    <div class="question-prompt">${K(e.prompt)}</div>
    <fieldset class="options"><legend class="sr-only">Choose one answer for question ${e.id}</legend>${e.options.map(o=>`<label class="option ${t.answers[e.id]===o.key?"chosen":""}"><input type="radio" name="answer" value="${o.key}" ${t.answers[e.id]===o.key?"checked":""}><span class="option-key">${o.key}</span><span class="option-text">${M(o.text)}</span><span class="option-check">${h("check")}</span></label>`).join("")}</fieldset>
    <div class="question-actions"><button class="button secondary ${t.marked.includes(e.id)?"flagged":""}" data-action="mark" aria-pressed="${t.marked.includes(e.id)}">${h("flag")} ${t.marked.includes(e.id)?"Marked for review":"Mark for review"}</button><button class="text-button" data-action="clear" ${t.answers[e.id]?"":"disabled"}>${h("rotate-ccw")} Clear answer</button></div>
    <div class="question-navigation"><button class="button secondary" data-action="previous" ${t.index===0?"disabled":""}>${h("chevron-left")} Previous</button><span>${e.id} of ${w.length}</span><button class="button primary" data-action="${t.index===w.length-1?"submit":"next"}">${t.index===w.length-1?"Finish exam":"Next question"} ${h("chevron-right")}</button></div>
    ${_?"":'<p class="notice" role="alert">Progress cannot be saved. Do not refresh or close this tab.</p>'}
  </section><aside class="question-sidebar"><div class="sidebar-title"><h2>Question navigator</h2><span>${w.length}</span></div><div class="answer-count"><strong>${a.answered}</strong><span>answered <span>/ ${w.length}</span></span></div><div class="legend"><span><i class="legend-dot answered"></i>Answered</span><span><i class="legend-dot marked"></i>For review</span><span><i class="legend-dot unanswered"></i>Unanswered</span></div><div class="question-grid">${w.map(o=>`<button class="question-number ${pt(o)} ${o.id===e.id?"current":""}" data-action="jump" data-index="${o.id-1}" aria-label="Question ${o.id}, ${pt(o)}${t.marked.includes(o.id)&&t.answers[o.id]?", answered":""}" ${o.id===e.id?'aria-current="step"':""}>${o.id}</button>`).join("")}</div><div class="sidebar-bottom"><div><span>Unanswered</span><strong>${a.unanswered}</strong></div><div><span>Marked for review</span><strong>${t.marked.length}</strong></div><button class="button finish full" data-action="submit">${h("check-check")} Finish exam</button></div></aside></main>`}function fa(){let t=u.attempt,e=U(w,t.answers),a=w.filter(o=>q==="all"||(q==="correct"?o.accepted.includes(t.answers[o.id]):q==="incorrect"?t.answers[o.id]&&!o.accepted.includes(t.answers[o.id]):!t.answers[o.id]));return`${J()}<main class="page results-page"><a class="back-link" href="#library">${h("arrow-left")} All sessions</a><div class="page-title"><div><p class="eyebrow">MARCH 2023 \xB7 ${S(t).label.toUpperCase()}</p><h1>Your exam results</h1><p class="subtitle">${t.reason==="timeout"?"Time expired \xB7 Automatically submitted":"Exam submitted"} \xB7 ${ht(t.finishedAt)}</p></div><button class="button secondary" data-action="open-paper">${h("rotate-ccw")} New attempt</button></div>
    <section class="score-band" aria-label="Exam score"><div class="main-score"><span>FINAL SCORE</span><strong>${e.score}<small> / ${e.total}</small></strong><span>${Math.round(e.score/e.total*100)}% \xB7 No negative marking</span></div><div class="score-metric correct"><span>Correct</span><strong>${e.correct}</strong></div><div class="score-metric incorrect"><span>Incorrect</span><strong>${e.incorrect}</strong></div><div class="score-metric"><span>Unanswered</span><strong>${e.unanswered}</strong></div><div class="score-metric"><span>Time taken</span><strong class="time-taken">${fe(Math.min(le,Math.max(0,t.finishedAt-t.startedAt)))}</strong></div></section>
    <div class="review-heading"><h2>Answers &amp; explanations</h2><span>${a.length} questions</span></div><div class="filter-tabs" role="tablist" aria-label="Review filter">${[["all","All",w.length],["correct","Correct",e.correct],["incorrect","Incorrect",e.incorrect],["unanswered","Unanswered",e.unanswered]].map(([o,r,s])=>`<button role="tab" aria-selected="${q===o}" class="filter-tab ${q===o?"selected":""}" data-action="filter" data-filter="${o}">${r} <span>${s}</span></button>`).join("")}</div>
    <section class="review-list" aria-label="Question solutions">${a.length?a.map(o=>{let r=t.answers[o.id],s=o.accepted.includes(r);return`<details class="review-question" ${o.id===a[0].id?"open":""}><summary><span class="review-id">${String(o.id).padStart(2,"0")}</span><span class="review-preview">${M(o.prompt.replace(/\n/g," "))}</span><span class="result-status ${s?"correct":r?"incorrect":""}">${s?"Correct":r?"Incorrect":"Unanswered"}</span></summary><div class="review-body">${o.passage?`<div class="passage"><p>${M(o.passage)}</p>${o.passageTable?`<div class="data-table">${K(o.passageTable)}</div>`:""}</div>`:""}<div class="question-prompt">${K(o.prompt)}</div><div class="review-options">${o.options.map(n=>`<div class="review-option ${o.accepted.includes(n.key)?"correct-option":r===n.key?"wrong-option":""}"><span class="option-key">${n.key}</span><span class="option-text">${M(n.text)}</span><span class="review-option-label">${o.accepted.includes(n.key)?"Correct answer":""}${r===n.key?" \xB7 Your answer":""}</span></div>`).join("")}</div><div class="solution"><h3>${h("book-open")} Solution &amp; study notes</h3><p class="accepted-answer">Accepted answer${o.accepted.length>1?"s":""}: <strong>${o.accepted.join(", ")}</strong> \xB7 Your answer: <strong>${r||"Not answered"}</strong></p>${K(o.explanation)}</div></div></details>`}).join(""):'<p class="empty-filter">No questions in this category.</p>'}</section>
  </main>${Ge()}`}function z(){if(w=S(u.attempt).questions,!w.length)return;if(k()&&!Q(u.attempt)){Y("timeout");return}let t=location.hash;He.innerHTML=t==="#exam"&&k()?da():t==="#results"&&u.attempt?.finishedAt?fa():t==="#march-2023"?la():na(),ie({icons:Ue})}function Y(t){k()&&(u.attempt.finishedAt=t==="timeout"?u.attempt.deadline:Date.now(),u.attempt.reason=t,u.history=[structuredClone(u.attempt),...u.history].slice(0,20),Z(),de.close(),q="all",document.querySelector("#announcement").textContent=t==="timeout"?"Time is up. Your exam has been submitted.":"Exam submitted. Your results are ready.",H("#results"))}function ua(){let t=U(w,u.attempt.answers);de.innerHTML=`<div class="dialog-top"><span class="paper-icon">${h("check-check")}</span><button class="icon-button" data-action="cancel-submit" aria-label="Cancel submission" title="Cancel submission">${h("x")}</button></div><h2 id="submit-title">Finish this exam?</h2><p>Your answers will be locked and your score and solutions will be revealed.</p><div class="submission-counts"><span><strong>${t.answered}</strong> answered</span><span><strong>${t.unanswered}</strong> unanswered</span><span><strong>${u.attempt.marked.length}</strong> for review</span></div><div class="dialog-actions"><button class="button secondary" data-action="cancel-submit" autofocus>Continue exam</button><button class="button primary" data-action="confirm-submit">Submit exam ${h("check")}</button></div>`,ie({icons:Ue}),de.showModal()}document.addEventListener("click",async t=>{let e=t.target.closest("[data-action]");if(!e||e.disabled)return;if(k()&&!Q(u.attempt)){Y("timeout");return}let a=e.dataset.action;if(a==="open-paper")L=!1,H("#march-2023");else if(a==="library-tab"||a==="history-tab")L=a==="history-tab",z();else if(a==="resume")H("#exam");else if(a==="start"){if(!k()){let o=Date.now();u.attempt={paper:e.dataset.paper,startedAt:o,deadline:o+le,answers:{},marked:[],index:0,finishedAt:null},w=S(u.attempt).questions,Z()}H("#exam")}else if(a==="review-history"&&!k())u.attempt=structuredClone(u.history[Number(e.dataset.index)]),Z(),q="all",H("#results");else if(a==="filter")q=e.dataset.filter,z();else if(a==="cancel-submit")de.close();else if(a==="confirm-submit")Y("manual");else if(k()){let o=u.attempt,r=w[o.index].id;if(a==="submit"){ua();return}if(a==="next")o.index=Math.min(w.length-1,o.index+1);else if(a==="previous")o.index=Math.max(0,o.index-1);else if(a==="jump")o.index=Number(e.dataset.index);else if(a==="mark")o.marked=o.marked.includes(r)?o.marked.filter(s=>s!==r):[...o.marked,r];else if(a==="clear")delete o.answers[r];else if(a==="fullscreen"){try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{document.querySelector("#announcement").textContent="Fullscreen is not available in this browser."}return}if(Z(),z(),["next","previous","jump"].includes(a)){document.querySelector(".exam-heading").scrollIntoView({block:"start"});let s=document.querySelector(".exam-heading h1");s.tabIndex=-1,s.focus({preventScroll:!0})}}});He.addEventListener("change",t=>{if(t.target.name!=="answer"||!k())return;if(!Q(u.attempt)){Y("timeout");return}u.attempt.answers[w[u.attempt.index].id]=t.target.value,Z();let e=t.target.value;z(),document.querySelector(`input[value="${e}"]`)?.focus({preventScroll:!0})});function ze(){if(!k())return;let t=Q(u.attempt);if(!t){Y("timeout");return}let e=document.querySelector("#timer-value");e&&(e.textContent=fe(t),e.closest(".timer").classList.toggle("urgent",t<=3e5))}window.addEventListener("hashchange",gt);document.addEventListener("visibilitychange",ze);window.addEventListener("pageshow",ze);window.addEventListener("beforeunload",t=>{k()&&!_&&(t.preventDefault(),t.returnValue="")});async function ca(){try{G.paper2.questions=ft(ut),G.paper1.questions=dt(ct),w=G.paper2.questions,sa(),k()&&H("#exam"),z(),setInterval(ze,1e3)}catch(t){He.innerHTML=`${J()}<main class="page empty-state"><h1>Unable to load this paper</h1><p>${M(t.message)}</p><button class="button secondary" onclick="location.reload()">Try again</button></main>`,ie({icons:Ue})}}ca();})();
/*! Bundled license information:

lucide/dist/esm/createElement.js:
lucide/dist/esm/replaceElement.js:
lucide/dist/esm/defaultAttributes.js:
lucide/dist/esm/icons/arrow-left.js:
lucide/dist/esm/icons/arrow-right.js:
lucide/dist/esm/icons/book-open.js:
lucide/dist/esm/icons/brain.js:
lucide/dist/esm/icons/check-check.js:
lucide/dist/esm/icons/check.js:
lucide/dist/esm/icons/chevron-left.js:
lucide/dist/esm/icons/chevron-right.js:
lucide/dist/esm/icons/clock-3.js:
lucide/dist/esm/icons/flag.js:
lucide/dist/esm/icons/graduation-cap.js:
lucide/dist/esm/icons/history.js:
lucide/dist/esm/icons/lock-keyhole.js:
lucide/dist/esm/icons/maximize.js:
lucide/dist/esm/icons/rotate-ccw.js:
lucide/dist/esm/icons/x.js:
lucide/dist/esm/lucide.js:
  (**
   * @license lucide v0.468.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
