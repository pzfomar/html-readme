var T=Object.defineProperty;var E=(a,t,e)=>t in a?T(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var g=(a,t,e)=>E(a,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))x(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&x(r)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function x(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}})();const c=l;(function(a,t){const e=l,x=a();for(;;)try{if(-parseInt(e(298))/1*(-parseInt(e(270))/2)+-parseInt(e(285))/3*(parseInt(e(247))/4)+parseInt(e(322))/5+-parseInt(e(236))/6+-parseInt(e(310))/7+parseInt(e(231))/8+-parseInt(e(237))/9*(-parseInt(e(315))/10)===t)break;x.push(x.shift())}catch{x.push(x.shift())}})(m,548986);const M=function(){let a=!0;return function(t,e){const x=a?function(){const n=l;if(e){const o=e[n(258)](t,arguments);return e=null,o}}:function(){};return a=!1,x}}();(function(){M(this,function(){const a=l,t=new RegExp(a(286)),e=new RegExp(a(324),"i"),x=I(a(224));!t[a(306)](x+a(284))||!e[a(306)](x+a(281))?x("0"):I()})()})();function l(a,t){const e=m();return l=function(x,n){return x=x-216,e[x]},l(a,t)}var k;const i=class i extends HTMLElement{[(k=c(223),c(309))](){const t=c;return{header:{class:Header,inlineToolbar:[t(238),"link"],config:{placeholder:"Header"},shortcut:t(300)},image:{class:InlineImage,inlineToolbar:!0,config:{embed:{display:!0},unsplash:{appName:t(334),apiUrl:t(319),maxResults:30}}},list:{class:List,inlineToolbar:!0,shortcut:t(289)},marker:{class:Marker,shortcut:t(340)},code:{class:CodeTool,shortcut:t(330)},delimiter:Delimiter,inlineCode:{class:InlineCode,shortcut:"CMD+SHIFT+C"},linkTool:{class:LinkTool,config:{endpoint:""}},embed:Embed,table:{class:Table,inlineToolbar:!0,shortcut:"CMD+ALT+T"}}}[c(313)](){const t=c;return{blocks:[{type:t(275),data:{text:t(331),level:2}},{type:"paragraph",data:{text:t(271)}},{type:t(287),data:{items:[t(241),t(280),t(304)],style:t(272)}},{type:t(228),data:{}},{type:t(323),data:{url:t(219),caption:"",stretched:!1,withBorder:!0,withBackground:!1}}]}}static[c(227)](t){return t.map(e=>{const x=l;let n=null,o=null,r=null;switch(e[x(307)]){case x(275):return n="<h"+e[x(313)][x(305)]+">"+e.data[x(283)]+"</h"+e[x(313)][x(305)]+">",o=Array[x(290)]({length:e[x(313)].level},()=>"#").join("")+" "+e[x(313)][x(283)],r=n,{html:n,md:o,pdf:r};case x(264):return n=x(229)+e[x(313)][x(283)]+"</p>",o=""+e[x(313)][x(283)],r=n,{html:n,md:o,pdf:r};case x(287):return n=`<ul>
`+e.data[x(291)][x(221)](s=>x(260)+s+x(248))[x(282)](`
`)+x(259),o=e[x(313)].items[x(221)](s=>"+ "+s)[x(282)](`
`),r=n,{html:n,md:o,pdf:r};case x(228):return n=x(276),o=x(251),r=n,{html:n,md:o,pdf:r};case x(323):return n=x(314)+e[x(313)][x(273)]+x(256)+e.data.caption+'" />',o="!["+e[x(313)][x(255)]+"]("+e[x(313)].url+")",r=n,{html:n,md:o,pdf:r};case x(339):return n='<a href="'+e[x(313)].link+'">'+e[x(313)].link+x(246),o="["+e[x(313)].link+"]("+e[x(313)][x(225)]+")",r=n,{html:n,md:o,pdf:r};case"code":return n=`<code>
`+e[x(313)][x(240)]+x(338),o="```\n"+e[x(313)].code+x(245),r=n,{html:n,md:o,pdf:r};case x(267):return n=x(293)+e[x(313)].content[x(268)](0,1)[x(221)](s=>x(303)+s.map(d=>x(308)+d+x(294))[x(282)](`
`)+x(263))[x(282)](`
`)+`
`+e[x(313)][x(288)][x(268)](1)[x(221)](s=>x(303)+s[x(221)](d=>x(250)+d+x(233))[x(282)](`
`)+x(263)).join(`
`)+`
</table>`,o=e[x(313)].content[x(268)](0,1)[x(221)](s=>"| "+s[x(221)](d=>d)[x(282)](x(336))+" |")[x(282)](`
`)+`
`+e[x(313)][x(288)][x(268)](0,1)[x(221)](s=>"| "+s[x(221)](()=>x(327)).join(x(336))+" |")[x(282)](`
`)+`
`+e[x(313)].content.slice(1)[x(221)](s=>"| "+s[x(221)](d=>d)[x(282)](x(336))+" |")[x(282)](`
`),r=n,{html:n,md:o,pdf:r}}})}static[c(279)](t){const e=c;let x=i.htmlMd(t);switch(i[e(223)]){case e(312):document[e(234)]("#code-text")[e(337)]=x[e(221)](n=>n[e(312)])[e(282)](`
`);break;case"md":document.querySelector(e(249))[e(337)]=x[e(221)](n=>n.md)[e(282)](`
`);break;case"pdf":document[e(234)]("#code-text")[e(222)]=x[e(221)](n=>n.html)[e(282)](`
`);break}}[c(242)](t){const e=c;i[e(223)]=t[e(277)][e(216)],i[e(302)][e(226)]()[e(321)](({blocks:x})=>i[e(279)](x))[e(299)](x=>console[e(262)](e(254),x))}static[c(332)](t,e){const x=c;let n=null;switch(t){case x(312):n=document[x(278)]("a"),n.href="data:attachment/"+t+", "+encodeURI(x(335)+e+x(318)),n[x(328)]=x(239),n[x(253)]=x(317)+t,n.click();break;case"md":n=document[x(278)]("a"),n[x(232)]=x(243)+t+", "+encodeURI(e),n[x(328)]=x(239),n[x(253)]="README."+t,n[x(261)]();break;case x(230):n=document[x(278)]("div"),n[x(222)]=x(335)+e+`
</body>
</html>
`,html2pdf()[x(296)]({margin:.5,filename:"README.pdf",image:{type:x(217),quality:.1},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:"in",format:"a4",orientation:"p"}})[x(290)](n)[x(226)]();break}}[c(325)](){const t=c;i[t(302)]=new EditorJS({readOnly:!1,holder:"editor-js",tools:this[t(309)](),data:this[t(313)](),onReady:function(){const x=t;i[x(302)][x(226)]().then(({blocks:n})=>i[x(279)](n))[x(299)](n=>console.error(x(254),n))},onChange:async function(x,n){const o=t;x[o(301)].save()[o(321)](({blocks:r})=>i[o(279)](r))[o(299)](r=>console[o(262)]("Saving error",r))}}),this[t(222)]=t(320),this[t(234)](t(326))[t(220)]("ionChange",this.ioSegmentChanged);const e=document[t(234)](t(266));e[t(274)]=[{text:t(311),role:t(312)},{text:"Descargar md",role:"md"},{text:t(244),role:t(230)},{text:"Cancelar",role:t(257),handler:()=>{}}],e[t(220)](t(252),x=>i[t(302)].save()[t(321)](({blocks:n})=>i.downloadFile(x[t(277)][t(297)],i[t(227)](n).map(o=>o[x[t(277)][t(297)]])[t(282)](`
`)+`
`))[t(299)](n=>console[t(262)](t(254),n)))}};g(i,k,c(312)),g(i,"editorJs");let y=i;const _=c(265);function m(){const a=[`<!DOCTYPE html>
<html>
<body>
`," | ","innerText",`
</code>`,"linkTool","CMD+SHIFT+M","value","jpeg","action","https://www.imcrc.org/wp-content/uploads/2022/03/partner-logos@2x-codex.png","addEventListener","map","innerHTML","ioSegmentValue","init","link","save","htmlMd","delimiter","<p>","pdf","8255504YbMoVd","href","</td>","querySelector","debu","5044002WJnAyG","284526jBaXXe","marker","_blank","code","It is a block-styled editor","ioSegmentChanged","data:attachment/","Descargar pdf","\n```","</a>","1273012OgGQsZ","</li>","#code-text",'<td style="border:1px solid black;">',"-----","ionAlertDidDismiss","download","Saving error","caption",'" alt="',"cancel","apply",`
</ul>`,"<li>","click","error",`
</tr>`,"paragraph","page-editor","#ion-download-file-alert","table","slice","constructor","42pAPPXF","Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.","unordered","url","buttons","header",'<hr style="background-color: black;">',"detail","createElement","codeHtmlMd","It returns clean data output in JSON","input","join","text","chain","3HrXEfL","function *\\( *\\)","list","content","CMD+SHIFT+L","from","items","string",`<table style="width:100%;border-collapse:collapse;">
`,"</th>","define","set","role","39017uYQNYG","catch","CMD+SHIFT+H","saver","editorJs",`<tr>
`,"Designed to be extendable and pluggable with a simple API","level","test","type",'<th style="border:1px solid black;">',"tools","7656341HTiUXx","Descargar html","html","data",'<img src="',"230Twnmbj","stateObject","README.",`
</body>
</html>
`,"https://your-proxy-api-url.com",`
    <ion-header>
      <ion-toolbar>
        <ion-title>HTML - MD</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ios ion-padding">
      <ion-alert id="ion-download-file-alert" trigger="download-file-alert" header="ARCHIVO"></ion-alert>
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-sm="6">
            <div id="editor-js"></div>
          </ion-col>
          <ion-col size="12" size-sm="6">
            <div id="view-code">
              <ion-button id="download-file-alert" size="small" expand="block" color="secondary" class="ios">ARCHIVO</ion-button>
              <ion-segment value="html" class="ios" id="ioSegment">
                <ion-segment-button value="html" class="ios">
                  <ion-label>HTML</ion-label>
                </ion-segment-button>
                <ion-segment-button value="md" class="ios">
                  <ion-label>MD</ion-label>
                </ion-segment-button>
                <ion-segment-button value="pdf" class="ios">
                  <ion-label>PDF</ion-label>
                </ion-segment-button>
              </ion-segment>
              <br />
              <code id="code-text"></code>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    `,"then","1116260WXobqh","image","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","connectedCallback","#ioSegment","---","target","counter","CMD+SHIFT+C","Editor.js","downloadFile","gger","your_app_name"];return m=function(){return a},m()}customElements[c(295)](_,y);function I(a){function t(e){const x=l;if(typeof e===x(292))return(function(n){}).constructor("while (true) {}")[x(258)](x(329));(""+e/e).length!==1||e%20===0?(function(){return!0}).constructor(x(235)+"gger").call(x(218)):(function(){return!1})[x(269)](x(235)+x(333))[x(258)](x(316)),t(++e)}try{if(a)return t;t(0)}catch{}}const f=u;(function(a,t){const e=u,x=a();for(;;)try{if(parseInt(e(397))/1+parseInt(e(403))/2+-parseInt(e(411))/3+parseInt(e(410))/4*(-parseInt(e(386))/5)+-parseInt(e(402))/6*(-parseInt(e(412))/7)+parseInt(e(394))/8*(parseInt(e(396))/9)+-parseInt(e(401))/10*(parseInt(e(400))/11)===t)break;x.push(x.shift())}catch{x.push(x.shift())}})(h,681945);const D=function(){let a=!0;return function(t,e){const x=a?function(){const n=u;if(e){const o=e[n(408)](t,arguments);return e=null,o}}:function(){};return a=!1,x}}();(function(){D(this,function(){const a=u,t=new RegExp("function *\\( *\\)"),e=new RegExp(a(413),"i"),x=w("init");!t.test(x+a(389))||!e[a(404)](x+"input")?x("0"):w()})()})();function u(a,t){const e=h();return u=function(x,n){return x=x-385,e[x]},u(a,t)}const C=[{url:"/",component:_}];document[f(406)]("#app")[f(398)]=f(393)+C[f(391)](({url:a,component:t})=>'<ion-route url="'+a+f(388)+t+f(399))+`
</ion-router>
<ion-router-outlet></ion-router-outlet>
`;function h(){const a=["string","3608348dlLTXY","344469NhoEOu","7nfjaNs","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","length","5PvSTwl","counter",'" component="',"chain","while (true) {}","map","stateObject",`
<ion-router class="ios">
  `,"8GFeJnk","constructor","11932254FlcTGq","865363qnMenj","innerHTML",'"></ion-route>',"2783beSZlZ","49090tdeSRp","1264278RYrzzl","1077900FKwQHL","test","gger","querySelector","debu","apply"];return h=function(){return a},h()}function w(a){function t(e){const x=u;if(typeof e===x(409))return(function(n){})[x(395)](x(390)).apply(x(387));(""+e/e)[x(385)]!==1||e%20===0?(function(){return!0})[x(395)](x(407)+x(405)).call("action"):(function(){return!1})[x(395)](x(407)+x(405))[x(408)](x(392)),t(++e)}try{if(a)return t;t(0)}catch{}}(function(a,t){for(var e=p,x=a();;)try{var n=-parseInt(e(360))/1+parseInt(e(354))/2*(-parseInt(e(342))/3)+-parseInt(e(353))/4*(parseInt(e(346))/5)+-parseInt(e(343))/6*(parseInt(e(363))/7)+parseInt(e(361))/8*(parseInt(e(357))/9)+-parseInt(e(341))/10*(parseInt(e(340))/11)+parseInt(e(347))/12*(parseInt(e(350))/13);if(n===t)break;x.push(x.shift())}catch{x.push(x.shift())}})(b,125043);var S=function(){var a=!0;return function(t,e){var x=a?function(){var n=p;if(e){var o=e[n(364)](t,arguments);return e=null,o}}:function(){};return a=!1,x}}();(function(){S(this,function(){var a=p,t=new RegExp(a(362)),e=new RegExp(a(339),"i"),x=v(a(365));!t[a(349)](x+a(366))||!e[a(349)](x+a(356))?x("0"):v()})()})();function p(a,t){var e=b();return p=function(x,n){x=x-339;var o=e[x];return o},p(a,t)}function v(a){function t(e){var x=p;if(typeof e===x(355))return(function(n){}).constructor(x(345))[x(364)](x(351));(""+e/e)[x(352)]!==1||e%20===0?(function(){return!0}).constructor(x(359)+x(344)).call(x(348)):(function(){return!1}).constructor(x(359)+x(344))[x(364)](x(358)),t(++e)}try{if(a)return t;t(0)}catch{}}function b(){var a=["5kpKDwL","6670596rQWxex","action","test","13ksXVvr","counter","length","307076qvZDsJ","5068nTmTRc","string","input","17991IREMhI","stateObject","debu","192998OyCgZd","344msfGnW","function *\\( *\\)","67823CIOees","apply","init","chain","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","2827KETcdt","2710NJLbQw","15EPiiNY","102fIktlZ","gger","while (true) {}"];return b=function(){return a},b()}
//# sourceMappingURL=index.js.map
