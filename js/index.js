var M=Object.defineProperty;var S=(a,n,t)=>n in a?M(a,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[n]=t;var y=(a,n,t)=>S(a,typeof n!="symbol"?n+"":n,t);(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))x(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&x(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function x(e){if(e.ep)return;e.ep=!0;const c=t(e);fetch(e.href,c)}})();const r=f;(function(a,n){const t=f,x=a();for(;;)try{if(parseInt(t(465))/1*(parseInt(t(453))/2)+-parseInt(t(466))/3*(parseInt(t(411))/4)+parseInt(t(428))/5*(parseInt(t(376))/6)+parseInt(t(473))/7*(parseInt(t(369))/8)+parseInt(t(422))/9*(parseInt(t(359))/10)+-parseInt(t(435))/11+-parseInt(t(464))/12*(-parseInt(t(388))/13)===n)break;x.push(x.shift())}catch{x.push(x.shift())}})(m,810403);const T=function(){let a=!0;return function(n,t){const x=a?function(){if(t){const e=t.apply(n,arguments);return t=null,e}}:function(){};return a=!1,x}}();function m(){const a=["list",`
</body>
</html>
`,"join","CMD+SHIFT+C","set","CMD+ALT+T","codeHtmlMd","linkTool","href","call","define","test","function *\\( *\\)",'<hr style="background-color: black;">'," | ","div","gger","level","Designed to be extendable and pluggable with a simple API","stateObject","439436jbuhlZ","code","\n```","downloadFile","Descargar md",'<td style="border:1px solid black;">',"debu","your_app_name","init","page-editor","while (true) {}","36jKFgcA",'<img src="',"README.pdf","ioSegmentChanged","</p>","detail","270QjXyma",`
</tr>`,`
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
    `,"_blank","tools","addEventListener","Header","13264504YSIPlS","catch","htmlMd","items","caption","text","Descargar pdf","map","-----","error","---",`
</table>`,"Editor.js","editorJs","<li>","data:attachment/",'<a href="',"click","141970hVrvNN","#code-text","CMD+SHIFT+M","download","README.","table","save",`<!DOCTYPE html>
<html>
<body>
`,"then",'<th style="border:1px solid black;">',"constructor","96Eywvza","10eRsDsr","33vvfdRC","action","delimiter",`
</ul>`,"<p>","pdf","target","28EJtvLm","from","innerHTML","paragraph","jpeg","</th>","role","Descargar html","header","ionChange","link","slice","579230nJVNMG","#ion-download-file-alert","querySelector","saver",`<ul>
`,"unordered","CMD+SHIFT+H","counter","data",'" alt="',"1483432GptRde","html","```\n","Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.","marker","ioSegmentValue","content","166746ktAlcD","</li>","It is a block-styled editor","https://www.imcrc.org/wp-content/uploads/2022/03/partner-logos@2x-codex.png","apply","image",`<tr>
`,"string","createElement","Saving error","url","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","66209LJBdMC","ionAlertDidDismiss",`<code>
`];return m=function(){return a},m()}(function(){T(this,function(){const a=f,n=new RegExp(a(403)),t=new RegExp(a(387),"i"),x=v(a(419));!n[a(402)](x+"chain")||!t[a(402)](x+"input")?x("0"):v()})()})();function f(a,n){const t=m();return f=function(x,e){return x=x-358,t[x]},f(a,n)}var _,E;const s=class s extends HTMLElement{[(E=r(374),_=r(448),r(432))](){const n=r;return{header:{class:Header,inlineToolbar:[n(373),n(483)],config:{placeholder:n(434)},shortcut:n(365)},image:{class:InlineImage,inlineToolbar:!0,config:{embed:{display:!0},unsplash:{appName:n(418),apiUrl:"https://your-proxy-api-url.com",maxResults:30}}},list:{class:List,inlineToolbar:!0,shortcut:"CMD+SHIFT+L"},marker:{class:Marker,shortcut:n(455)},code:{class:CodeTool,shortcut:n(394)},delimiter:Delimiter,inlineCode:{class:InlineCode,shortcut:n(394)},linkTool:{class:LinkTool,config:{endpoint:""}},embed:Embed,table:{class:Table,inlineToolbar:!0,shortcut:n(396)}}}[r(367)](){const n=r;return{blocks:[{type:"header",data:{text:n(447),level:2}},{type:n(476),data:{text:n(372)}},{type:n(391),data:{items:[n(378),"It returns clean data output in JSON",n(409)],style:n(364)}},{type:n(468),data:{}},{type:n(381),data:{url:n(379),caption:"",stretched:!1,withBorder:!0,withBackground:!1}}]}}static[r(437)](n){const t=r;return n[t(442)](x=>{const e=t;let c=null,o=null,i=null;switch(x.type){case e(481):return c="<h"+x.data[e(408)]+">"+x[e(367)][e(440)]+"</h"+x[e(367)][e(408)]+">",o=Array[e(474)]({length:x[e(367)].level},()=>"#")[e(393)]("")+" "+x.data[e(440)],i=c,{html:c,md:o,pdf:i};case e(476):return c=e(470)+x[e(367)][e(440)]+e(426),o=""+x[e(367)][e(440)],i=c,{html:c,md:o,pdf:i};case e(391):return c=e(363)+x.data[e(438)][e(442)](l=>e(449)+l+e(377))[e(393)](`
`)+e(469),o=x.data[e(438)].map(l=>"+ "+l)[e(393)](`
`),i=c,{html:c,md:o,pdf:i};case e(468):return c=e(404),o=e(443),i=c,{html:c,md:o,pdf:i};case e(381):return c=e(423)+x[e(367)][e(386)]+e(368)+x[e(367)].caption+'" />',o="!["+x[e(367)][e(439)]+"]("+x.data[e(386)]+")",i=c,{html:c,md:o,pdf:i};case e(398):return c=e(451)+x[e(367)][e(483)]+'">'+x[e(367)][e(483)]+"</a>",o="["+x[e(367)][e(483)]+"]("+x[e(367)][e(483)]+")",i=c,{html:c,md:o,pdf:i};case e(412):return c=e(390)+x.data[e(412)]+`
</code>`,o=e(371)+x[e(367)][e(412)]+e(413),i=c,{html:c,md:o,pdf:i};case e(458):return c=`<table style="width:100%;border-collapse:collapse;">
`+x.data.content.slice(0,1).map(l=>e(382)+l[e(442)](u=>e(462)+u+e(478))[e(393)](`
`)+e(429)).join(`
`)+`
`+x[e(367)][e(375)][e(358)](1).map(l=>e(382)+l.map(u=>e(416)+u+"</td>")[e(393)](`
`)+`
</tr>`).join(`
`)+e(446),o=x[e(367)].content[e(358)](0,1)[e(442)](l=>"| "+l[e(442)](u=>u).join(e(405))+" |")[e(393)](`
`)+`
`+x.data[e(375)][e(358)](0,1).map(l=>"| "+l.map(()=>e(445))[e(393)](e(405))+" |")[e(393)](`
`)+`
`+x.data.content[e(358)](1)[e(442)](l=>"| "+l.map(u=>u)[e(393)](e(405))+" |").join(`
`),i=c,{html:c,md:o,pdf:i}}})}static[r(397)](n){const t=r;let x=s[t(437)](n);switch(s[t(374)]){case t(370):document.querySelector("#code-text").innerText=x[t(442)](e=>e.html).join(`
`);break;case"md":document[t(361)](t(454)).innerText=x[t(442)](e=>e.md)[t(393)](`
`);break;case t(471):document[t(361)]("#code-text")[t(475)]=x.map(e=>e[t(370)])[t(393)](`
`);break}}[r(425)](n){const t=r;s[t(374)]=n[t(427)].value,s.editorJs[t(459)]()[t(461)](({blocks:x})=>s[t(397)](x))[t(436)](x=>console.error(t(385),x))}static[r(414)](n,t){const x=r;let e=null;switch(n){case x(370):e=document[x(384)]("a"),e[x(399)]=x(450)+n+", "+encodeURI(x(460)+t+`
</body>
</html>
`),e[x(472)]=x(431),e[x(456)]=x(457)+n,e[x(452)]();break;case"md":e=document[x(384)]("a"),e[x(399)]=x(450)+n+", "+encodeURI(t),e[x(472)]=x(431),e[x(456)]=x(457)+n,e[x(452)]();break;case x(471):e=document.createElement(x(406)),e[x(475)]=x(460)+t+x(392),html2pdf()[x(395)]({margin:.5,filename:x(424),image:{type:x(477),quality:.1},html2canvas:{scale:2,useCORS:!0},jsPDF:{unit:"in",format:"a4",orientation:"p"}}).from(e).save();break}}connectedCallback(){const n=r;s[n(448)]=new EditorJS({readOnly:!1,holder:"editor-js",tools:this[n(432)](),data:this[n(367)](),onReady:function(){const x=n;s[x(448)][x(459)]()[x(461)](({blocks:e})=>s[x(397)](e)).catch(e=>console[x(444)](x(385),e))},onChange:async function(x,e){const c=n;x[c(362)][c(459)]()[c(461)](({blocks:o})=>s.codeHtmlMd(o))[c(436)](o=>console[c(444)](c(385),o))}}),this[n(475)]=n(430),this[n(361)]("#ioSegment").addEventListener(n(482),this.ioSegmentChanged);const t=document[n(361)](n(360));t.buttons=[{text:n(480),role:n(370)},{text:n(415),role:"md"},{text:n(441),role:n(471)},{text:"Cancelar",role:"cancel",handler:()=>{}}],t[n(433)](n(389),x=>s[n(448)].save()[n(461)](({blocks:e})=>s.downloadFile(x[n(427)][n(479)],s[n(437)](e).map(c=>c[x[n(427)][n(479)]])[n(393)](`
`)+`
`))[n(436)](e=>console[n(444)](n(385),e)))}};y(s,E,"html"),y(s,_);let I=s;const D=r(420);customElements[r(401)](D,I);function v(a){function n(t){const x=f;if(typeof t===x(383))return(function(e){}).constructor(x(421))[x(380)](x(366));(""+t/t).length!==1||t%20===0?(function(){return!0})[x(463)](x(417)+x(407))[x(400)](x(467)):(function(){return!1}).constructor(x(417)+x(407))[x(380)](x(410)),n(++t)}try{if(a)return n;n(0)}catch{}}function h(){const a=["6490YLdydS","apply",`
</ion-router>
<ion-router-outlet></ion-router-outlet>
`,`
<ion-router class="ios">
  `,"422395XqaPWJ","2QPAjff","506624CEDkbE","call","function *\\( *\\)","1302770kvFDjv","querySelector","chain","904950jYcPEK","while (true) {}","map","constructor","test","input",'" component="',"length","6GuKkEu","innerHTML","90BmJkUE","117235jlLGaS","debu","stateObject","string","gger","counter","195000WdhJNH","2849qXuNZG","init","#app",'"></ion-route>',"\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)"];return h=function(){return a},h()}const d=b;(function(a,n){const t=b,x=a();for(;;)try{if(-parseInt(t(430))/1*(parseInt(t(447))/2)+parseInt(t(427))/3*(-parseInt(t(448))/4)+parseInt(t(446))/5+-parseInt(t(454))/6+parseInt(t(451))/7+parseInt(t(436))/8*(parseInt(t(429))/9)+parseInt(t(442))/10*(parseInt(t(437))/11)===n)break;x.push(x.shift())}catch{x.push(x.shift())}})(h,161058);const C=function(){let a=!0;return function(n,t){const x=a?function(){const e=b;if(t){const c=t[e(443)](n,arguments);return t=null,c}}:function(){};return a=!1,x}}();(function(){C(this,function(){const a=b,n=new RegExp(a(450)),t=new RegExp(a(441),"i"),x=w(a(438));!n[a(458)](x+a(453))||!t[a(458)](x+a(424))?x("0"):w()})()})();const j=[{url:"/",component:D}];document[d(452)](d(439))[d(428)]=d(445)+j[d(456)](({url:a,component:n})=>'<ion-route url="'+a+d(425)+n+d(440))+d(444);function b(a,n){const t=h();return b=function(x,e){return x=x-424,t[x]},b(a,n)}function w(a){function n(t){const x=b;if(typeof t===x(433))return(function(e){})[x(457)](x(455))[x(443)](x(435));(""+t/t)[x(426)]!==1||t%20===0?(function(){return!0})[x(457)](x(431)+x(434))[x(449)]("action"):(function(){return!1})[x(457)](x(431)+x(434)).apply(x(432)),n(++t)}try{if(a)return n;n(0)}catch{}}(function(a,n){for(var t=p,x=a();;)try{var e=parseInt(t(188))/1+-parseInt(t(185))/2+-parseInt(t(204))/3+parseInt(t(194))/4*(parseInt(t(201))/5)+parseInt(t(195))/6*(parseInt(t(187))/7)+parseInt(t(199))/8*(parseInt(t(200))/9)+-parseInt(t(196))/10*(parseInt(t(189))/11);if(e===n)break;x.push(x.shift())}catch{x.push(x.shift())}})(g,109284);function g(){var a=["apply","\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)","8nIqXBU","84dWunFy","10dfluZv","stateObject","constructor","168WQScxI","84213AoMCSE","104770RiUlpc","test","length","557739oPJkOr","action","input","counter","328252kFhrhK","debu","103271iAaufs","68159khZWOy","591613oozRNa","function *\\( *\\)","chain"];return g=function(){return a},g()}var A=function(){var a=!0;return function(n,t){var x=a?function(){var e=p;if(t){var c=t[e(192)](n,arguments);return t=null,c}}:function(){};return a=!1,x}}();function p(a,n){var t=g();return p=function(x,e){x=x-183;var c=t[x];return c},p(a,n)}(function(){A(this,function(){var a=p,n=new RegExp(a(190)),t=new RegExp(a(193),"i"),x=k("init");!n[a(202)](x+a(191))||!t[a(202)](x+a(183))?x("0"):k()})()})();function k(a){function n(t){var x=p;if(typeof t=="string")return(function(e){}).constructor("while (true) {}").apply(x(184));(""+t/t)[x(203)]!==1||t%20===0?(function(){return!0})[x(198)](x(186)+"gger").call(x(205)):(function(){return!1})[x(198)](x(186)+"gger")[x(192)](x(197)),n(++t)}try{if(a)return n;n(0)}catch{}}
//# sourceMappingURL=index.js.map
