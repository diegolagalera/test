(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{109:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return j}));var r=n(13),a=n(3),i=n(1),c=n.n(i),s=n(24),o=n(37),u=n(26),l=n(195),b=n(47),d=new s.e.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),p=new s.e.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var i,s,o,u,l=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>3&&void 0!==l[3]&&l[3],s=!1,o={slot:0,confirmations:0,err:null},u=0,e.next=6,new Promise(function(){var e=Object(a.a)(c.a.mark((function e(u,l){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(s||!i){e.next=7;break}return Object(a.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,o=n&&n.value[0],s||(o?o.err?(console.log("REST error for",t,o),s=!0,l(o.err)):o.confirmations?(console.log("REST confirmation for",t,o),s=!0,u(o)):console.log("REST no confirmations for",t,o):console.log("REST null result for",t,o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,y(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 6:return o=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),s=!0,console.log("Returning status",o),e.abrupt("return",o);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:s.e.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:o.b,isSigner:!1,isWritable:!1},{pubkey:s.e.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new s.e.TransactionInstruction({keys:i,programId:b.b,data:e.from([])})},m=function(){var e=Object(a.a)(c.a.mark((function e(t,n,r){var a,i,o,u,l,b,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new s.c(r,t,{preflightCommitment:"processed"}),e.next=3,s.b.fetchIdl(d,a);case 3:return i=e.sent,o=new s.b(i,d,a),e.next=7,o.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),b=u.itemsRedeemed.toNumber(),p=l-b,e.abrupt("return",{id:n,program:o,state:{itemsAvailable:l,itemsRedeemed:b,itemsRemaining:p,isSoldOut:0===p,isActive:!1,isPresale:!1,isWhitelistOnly:!1,goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),h=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("edition")],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.e.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],d);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var e=Object(a.a)(c.a.mark((function e(t,n){var a,i,d,f,m,j,y,O,k,w,S,T,P,M,A,E,K,R;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.e.Keypair.generate(),e.next=3,Object(b.d)(a.publicKey,n);case 3:if(i=e.sent[0],!t.state.tokenMint){e.next=10;break}return e.next=7,Object(b.d)(t.state.tokenMint,n);case 7:e.t0=e.sent[0],e.next=11;break;case 10:e.t0=n;case 11:return d=e.t0,f=t.id,m=[],j=[a],y=[],e.t1=s.e.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=o.a.span,e.next=22,t.program.provider.connection.getMinimumBalanceForRentExemption(o.a.span);case 22:if(e.t5=e.sent,e.t6=o.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=o.c.createInitMintInstruction(o.b,a.publicKey,0,n,n),e.t10=g(i,n,n,a.publicKey),e.t11=o.c.createMintToInstruction(o.b,a.publicKey,i,n,[],1),O=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=45;break}return e.t12=m,e.next=34,Object(b.f)(n,t.state.gatekeeper.gatekeeperNetwork);case 34:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=45;break}return m.push({pubkey:b.a,isWritable:!1,isSigner:!1}),e.t15=m,e.next=42,Object(b.e)(t.state.gatekeeper.gatekeeperNetwork);case 42:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 45:if(!t.state.whitelistMintSettings){e.next=60;break}return k=new s.e.PublicKey(t.state.whitelistMintSettings.mint),e.next=49,Object(b.d)(k,n);case 49:if(w=e.sent[0],m.push({pubkey:w,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=60;break}return S=s.e.Keypair.generate(),m.push({pubkey:k,isWritable:!0,isSigner:!1}),m.push({pubkey:S.publicKey,isWritable:!1,isSigner:!0}),j.push(S),e.next=58,t.program.provider.connection.getAccountInfo(w);case 58:e.sent&&(O.push(o.c.createApproveInstruction(o.b,w,S.publicKey,n,[],1)),y.push(o.c.createRevokeInstruction(o.b,w,n,[])));case 60:return t.state.tokenMint&&(T=s.e.Keypair.generate(),j.push(T),m.push({pubkey:d,isWritable:!0,isSigner:!1}),m.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),O.push(o.c.createApproveInstruction(o.b,d,T.publicKey,n,[],t.state.price.toNumber())),y.push(o.c.createRevokeInstruction(o.b,d,n,[]))),e.next=63,x(a.publicKey);case 63:return P=e.sent,e.next=66,h(a.publicKey);case 66:return M=e.sent,e.next=69,v(f);case 69:return A=e.sent,E=Object(r.a)(A,2),K=E[0],R=E[1],e.t18=O,e.next=76,t.program.instruction.mintNft(R,{accounts:{candyMachine:f,candyMachineCreator:K,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:P,masterEdition:M,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:p,tokenProgram:o.b,systemProgram:u.f.programId,rent:s.e.SYSVAR_RENT_PUBKEY,clock:s.e.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:u.e,instructionSysvarAccount:s.e.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:m.length>0?m:void 0});case 76:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=78,e.next=81,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[O,y],[j,[]]);case 81:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 84:e.prev=84,e.t20=e.catch(78),console.log(e.t20);case 87:return e.abrupt("return",[]);case 88:case"end":return e.stop()}}),e,null,[[78,84]])})));return function(t,n){return e.apply(this,arguments)}}(),y=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(5).Buffer)},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(10),i=n(3),c=n(1),s=n.n(c),o=n(26),u=n(98);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(i.a)(s.a.mark((function e(t,n,i,c){var l,b,d,f,g,m,h,x,v,j,y,O,k,w,S=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=S.length>4&&void 0!==S[4]?S[4]:r.Parallel,b=S.length>5&&void 0!==S[5]?S[5]:"singleGossip",d=S.length>6&&void 0!==S[6]?S[6]:function(e,t){},f=S.length>7&&void 0!==S[7]?S[7]:function(e,t){return!1},g=S.length>8?S[8]:void 0,n.publicKey){e.next=7;break}throw new u.e;case 7:if(m=[],g){e.next=12;break}return e.next=11,t.getRecentBlockhash(b);case 11:g=e.sent;case 12:h=function(e){var t=i[e],r=c[e];if(0===t.length)return"continue";var s=new o.g;t.forEach((function(e){return s.add(e)})),s.recentBlockhash=g.blockhash,s.setSigners.apply(s,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&s.partialSign.apply(s,Object(a.a)(r)),m.push(s)},x=0;case 14:if(!(x<i.length)){e.next=21;break}if("continue"!==h(x)){e.next=18;break}return e.abrupt("continue",18);case 18:x++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(m);case 23:v=e.sent,j=[],y={breakEarly:!1,i:0},console.log("Signed txns length",v.length,"vs handed in length",i.length),O=s.a.mark((function e(n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=p({connection:t,signedTransaction:v[n]})).then((function(e){var t=e.txid;e.slot;d(t,n)})).catch((function(e){f(v[n],n),l===r.StopOnFailure&&(y.breakEarly=!0,y.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!y.breakEarly){e.next=19;break}return console.log("Died on ",y.i),e.t1=y.i,e.next=16,Promise.all(j);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:j.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),k=0;case 29:if(!(k<v.length)){e.next=37;break}return e.delegateYield(O(k),"t0",31);case 31:if("object"!==typeof(w=e.t0)){e.next=34;break}return e.abrupt("return",w.v);case 34:k++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(j);case 40:return e.t1=v.length,e.next=43,Promise.all(j);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),b=function(){return(new Date).getTime()/1e3},d=15e3;function p(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(s.a.mark((function e(t){var n,r,a,c,o,u,l,p,f,m,x,j,y;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,c=void 0===a?d:a,o=n.serialize(),u=b(),l=0,e.next=6,r.sendRawTransaction(o,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),f=!1,Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(b()-u<c)){e.next=6;break}return r.sendRawTransaction(o,{skipPreflight:!0}),e.next=4,v(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,h(p,c,r,"recent",!0);case 13:if(m=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!m.err){e.next=19;break}throw console.error(m.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===m||void 0===m?void 0:m.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return x=null,e.prev=28,e.next=31,g(r,n,"single");case 31:x=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!x||!x.err){e.next=47;break}if(!x.logs){e.next=46;break}j=x.logs.length-1;case 39:if(!(j>=0)){e.next=46;break}if(!(y=x.logs[j]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+y.slice("Program log: ".length));case 43:--j,e.next=39;break;case 46:throw new Error(JSON.stringify(x.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",p,b()-u),e.abrupt("return",{txid:p,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function g(e,t,n){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(s.a.mark((function e(t,n,r){var a,i,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),c=i.toString("base64"),o=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",o);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,n){return x.apply(this,arguments)}function x(){return x=Object(i.a)(s.a.mark((function e(t,n,r){var a,c,o,u,l,b=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b.length>3&&void 0!==b[3]?b[3]:"recent",c=b.length>4&&void 0!==b[4]&&b[4],o=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(i.a)(s.a.mark((function e(b,d){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){o||(o=!0,console.log("Rejecting for timeout..."),d({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){o=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),d(u)):(console.log("Resolved via websocket",e),b(u))}),a)}catch(p){o=!0,console.error("WS error in setup",t,p)}case 2:if(o||!c){e.next=8;break}return Object(i.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],o||(u?u.err?(console.log("REST error for",t,u),o=!0,d(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),o=!0,b(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,v(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),o=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function v(e){return new Promise((function(t){return setTimeout(t,e)}))}},218:function(e,t,n){},219:function(e,t){},221:function(e,t){},242:function(e,t){},243:function(e,t){},308:function(e,t,n){},309:function(e,t,n){"use strict";n.r(t);var r,a,i,c=n(4),s=n.n(c),o=n(30),u=n.n(o),l=(n(218),n(24)),b=n(9),d=n(3),p=n(13),f=n(107),g=n(1),m=n.n(g),h=n(86),x=n(349),v=n(358),j=n(344),y=n(356),O=n(350),k=n(345),w=n(26),S=n(188),T=n(135),P=n(109),M=n(47),A=n(196),E=n(340),K=n(363),R=n(21),I=Object(E.a)((function(e){return Object(K.a)({root:{display:"flex",padding:e.spacing(0),"& > *":{margin:e.spacing(.4),width:e.spacing(6),height:e.spacing(6),display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontSize:10}},done:{display:"flex",margin:0,marginBottom:e.spacing(.5),height:e.spacing(3.5),padding:e.spacing(1),flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",background:"#384457",color:"white",borderRadius:5,fontWeight:"bold",fontSize:18},item:{fontWeight:"bold",fontSize:18}})})),C=function(e){var t=e.date,n=e.status,r=e.style,a=e.onComplete,i=I();return t?Object(R.jsx)(A.a,{date:t,onComplete:a,renderer:function(e){var t=e.days,a=e.hours,c=e.minutes,s=e.seconds;return a+=24*t,e.completed?n?Object(R.jsx)("span",{className:i.done,children:n}):null:Object(R.jsxs)("div",{className:i.root,style:r,children:[Object(R.jsxs)(j.a,{elevation:0,children:[Object(R.jsx)("span",{className:i.item,children:a<10?"0".concat(a):a}),Object(R.jsx)("span",{children:"hrs"})]}),Object(R.jsxs)(j.a,{elevation:0,children:[Object(R.jsx)("span",{className:i.item,children:c<10?"0".concat(c):c}),Object(R.jsx)("span",{children:"mins"})]}),Object(R.jsxs)(j.a,{elevation:0,children:[Object(R.jsx)("span",{className:i.item,children:s<10?"0".concat(s):s}),Object(R.jsx)("span",{children:"secs"})]})]})}}):null},D=n(342),N=n(348),W=n(97),B=Object(h.default)(D.a)(r||(r=Object(f.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),L=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,a=e.isActive,i=Object(W.useGateway)(),s=i.requestGatewayToken,o=i.gatewayStatus,u=Object(c.useState)(!1),l=Object(p.a)(u,2),b=l[0],f=l[1];Object(c.useEffect)((function(){o===W.GatewayStatus.ACTIVE&&b&&(t(),f(!1))}),[o,b,f,t]);return Object(R.jsx)(B,{disabled:b||r||!a,onClick:Object(d.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(!0),null===n||void 0===n||!n.state.isActive||null===n||void 0===n||!n.state.gatekeeper){e.next=10;break}if(o!==W.GatewayStatus.ACTIVE){e.next=6;break}f(!0),e.next=8;break;case 6:return e.next=8,s();case 8:e.next=13;break;case 10:return e.next=12,t();case 12:f(!1);case 13:case"end":return e.stop()}}),e)}))),variant:"contained",children:null!==n&&void 0!==n&&n.state.isSoldOut?"SOLD OUT":r?Object(R.jsx)(N.a,{}):null!==n&&void 0!==n&&n.state.isPresale||null!==n&&void 0!==n&&n.state.isWhitelistOnly?"WHITELIST MINT":b&&null!==n&&void 0!==n&&n.state.gatekeeper?Object(R.jsx)(N.a,{}):"MINT"})},F=Object(h.default)(T.a)(a||(a=Object(f.a)(["\n  width: 100%;\n  height: 60px;\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);\n  color: white;\n  font-size: 16px;\n  font-weight: bold;\n"]))),U=h.default.div(i||(i=Object(f.a)([""]))),_=function(e){var t;return e.state.isActive&&null!==(t=e.state.endSettings)&&void 0!==t&&t.endSettingType.date?Object(M.g)(e.state.endSettings.number):Object(M.g)(e.state.goLiveDate?e.state.goLiveDate:e.state.isPresale?new l.a((new Date).getTime()/1e3):void 0)},z=function(e){var t,n,r,a=Object(c.useState)(!1),i=Object(p.a)(a,2),s=i[0],o=i[1],u=Object(c.useState)(),f=Object(p.a)(u,2),g=f[0],h=f[1],T=Object(c.useState)({open:!1,message:"",severity:void 0}),A=Object(p.a)(T,2),E=A[0],K=A[1],I=Object(c.useState)(!1),D=Object(p.a)(I,2),N=D[0],B=D[1],z=Object(c.useState)(),Y=Object(p.a)(z,2),q=Y[0],G=Y[1],V=Object(c.useState)(),H=Object(p.a)(V,2),J=H[0],Z=H[1],X=Object(c.useState)(!1),Q=Object(p.a)(X,2),$=Q[0],ee=Q[1],te=Object(c.useState)(!1),ne=Object(p.a)(te,2),re=ne[0],ae=ne[1],ie=Object(c.useState)(),ce=Object(p.a)(ie,2),se=ce[0],oe=ce[1],ue=e.rpcHost,le=Object(S.b)(),be=Object(c.useMemo)((function(){if(le&&le.publicKey&&le.signAllTransactions&&le.signTransaction)return{publicKey:le.publicKey,signAllTransactions:le.signAllTransactions,signTransaction:le.signTransaction}}),[le]),de=Object(c.useCallback)(Object(d.a)(m.a.mark((function t(){var n,r,a,i,c,s,o,u,b,d,p;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(be){t.next=2;break}return t.abrupt("return");case 2:if(!e.candyMachineId){t.next=43;break}return t.prev=3,t.next=6,Object(P.c)(be,e.candyMachineId,e.connection);case 6:if(i=t.sent,c=(null===i||void 0===i||null===(n=i.state.goLiveDate)||void 0===n?void 0:n.toNumber())<(new Date).getTime()/1e3,s=!1,null===i||void 0===i||!i.state.whitelistMintSettings){t.next=31;break}return i.state.whitelistMintSettings.presale&&(!i.state.goLiveDate||i.state.goLiveDate.toNumber()>(new Date).getTime()/1e3)&&(s=!0),i.state.whitelistMintSettings.discountPrice?oe(i.state.whitelistMintSettings.discountPrice):(oe(void 0),i.state.whitelistMintSettings.presale||(i.state.isWhitelistOnly=!0)),o=new l.e.PublicKey(i.state.whitelistMintSettings.mint),t.next=15,Object(M.d)(o,be.publicKey);case 15:return u=t.sent[0],t.prev=16,t.next=19,e.connection.getTokenAccountBalance(u);case 19:b=t.sent,d=parseInt(b.value.amount)>0,ee(d),c=s&&d||c,t.next=31;break;case 25:t.prev=25,t.t0=t.catch(16),ee(!1),i.state.isWhitelistOnly&&(c=!1),console.log("There was a problem fetching whitelist token balance"),console.log(t.t0);case 31:null!==i&&void 0!==i&&null!==(r=i.state.endSettings)&&void 0!==r&&r.endSettingType.date&&(G(Object(M.g)(i.state.endSettings.number)),i.state.endSettings.number.toNumber()<(new Date).getTime()/1e3&&(c=!1)),null!==i&&void 0!==i&&null!==(a=i.state.endSettings)&&void 0!==a&&a.endSettingType.amount?(p=Math.min(i.state.endSettings.number.toNumber(),i.state.itemsAvailable),i.state.itemsRedeemed<p?Z(p-i.state.itemsRedeemed):(Z(0),i.state.isSoldOut=!0)):Z(i.state.itemsRemaining),i.state.isSoldOut&&(c=!1),B(i.state.isActive=c),ae(i.state.isPresale=s),h(i),t.next=43;break;case 39:t.prev=39,t.t1=t.catch(3),console.log("There was a problem fetching Candy Machine state"),console.log(t.t1);case 43:case"end":return t.stop()}}),t,null,[[3,39],[16,25]])}))),[be,e.candyMachineId,e.connection]),pe=function(){var t=Object(d.a)(m.a.mark((function t(){var n,r,a,i,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,o(!0),null===(n=document.getElementById("#identity"))||void 0===n||n.click(),!(le.connected&&null!==g&&void 0!==g&&g.program&&le.publicKey)){t.next=13;break}return t.next=6,Object(P.d)(g,le.publicKey);case 6:if(r=t.sent[0],a={err:!0},!r){t.next=12;break}return t.next=11,Object(P.b)(r,e.txTimeout,e.connection,!0);case 11:a=t.sent;case 12:a&&!a.err?(Z(i=J-1),B(g.state.isActive=i>0),g.state.isSoldOut=0===i,K({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"})):K({open:!0,message:"Mint failed! Please try again!",severity:"error"});case 13:t.next=21;break;case 15:t.prev=15,t.t0=t.catch(0),c=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?(c="SOLD OUT!",window.location.reload()):312===t.t0.code&&(c="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x137")?c="SOLD OUT!":t.t0.message.indexOf("0x135")&&(c="Insufficient funds to mint. Please fund your wallet."):c="Transaction Timeout! Please try again.",K({open:!0,message:c,severity:"error"}),de();case 21:return t.prev=21,o(!1),t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[0,15,21,24]])})));return function(){return t.apply(this,arguments)}}(),fe=function(){var e=!N||re;e&&(g.state.isWhitelistOnly&&!$&&(e=!1),q&&Date.now()>=q.getTime()&&(e=!1)),re&&g.state.goLiveDate&&g.state.goLiveDate.toNumber()<=(new Date).getTime()/1e3&&ae(g.state.isPresale=!1),B(g.state.isActive=e)};return Object(c.useEffect)((function(){de()}),[be,e.candyMachineId,e.connection,de]),Object(R.jsxs)(x.a,{style:{marginTop:100},children:[Object(R.jsx)(x.a,{maxWidth:"xs",style:{position:"relative"},children:Object(R.jsxs)(j.a,{style:{padding:24,paddingBottom:10,backgroundColor:"#151A1F",borderRadius:6},children:[le.connected?Object(R.jsxs)(R.Fragment,{children:[g&&Object(R.jsxs)(O.a,{container:!0,direction:"row",justifyContent:"center",wrap:"nowrap",children:[Object(R.jsxs)(O.a,{item:!0,xs:3,children:[Object(R.jsx)(k.a,{variant:"body2",color:"textSecondary",children:"Remaining"}),Object(R.jsx)(k.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:"".concat(J)})]}),Object(R.jsxs)(O.a,{item:!0,xs:4,children:[Object(R.jsx)(k.a,{variant:"body2",color:"textSecondary",children:$&&se?"Discount Price":"Price"}),Object(R.jsx)(k.a,{variant:"h6",color:"textPrimary",style:{fontWeight:"bold"},children:"\u25ce ".concat($&&se?M.c.asNumber(se):M.c.asNumber(g.state.price))})]}),Object(R.jsx)(O.a,{item:!0,xs:5,children:N&&q&&Date.now()<q.getTime()?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(C,{date:_(g),style:{justifyContent:"flex-end"},status:"COMPLETED",onComplete:fe},"endSettings"),Object(R.jsx)(k.a,{variant:"caption",align:"center",display:"block",style:{fontWeight:"bold"},children:"TO END OF MINT"})]}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(C,{date:_(g),style:{justifyContent:"flex-end"},status:null!==g&&void 0!==g&&null!==(t=g.state)&&void 0!==t&&t.isSoldOut||q&&Date.now()>q.getTime()?"COMPLETED":re?"PRESALE":"LIVE",onComplete:fe},"goLive"),re&&g.state.goLiveDate&&g.state.goLiveDate.toNumber()>(new Date).getTime()/1e3&&Object(R.jsx)(k.a,{variant:"caption",align:"center",display:"block",style:{fontWeight:"bold"},children:"UNTIL PUBLIC MINT"})]})})]}),Object(R.jsx)(U,{children:null!==g&&void 0!==g&&g.state.isActive&&null!==g&&void 0!==g&&g.state.gatekeeper&&le.publicKey&&le.signTransaction?Object(R.jsx)(W.GatewayProvider,{wallet:{publicKey:le.publicKey||new w.c(P.a),signTransaction:le.signTransaction},gatekeeperNetwork:null===g||void 0===g||null===(n=g.state)||void 0===n||null===(r=n.gatekeeper)||void 0===r?void 0:r.gatekeeperNetwork,clusterUrl:ue,options:{autoShowModal:!1},children:Object(R.jsx)(L,{candyMachine:g,isMinting:s,onMint:pe,isActive:N||re&&$})}):Object(R.jsx)(L,{candyMachine:g,isMinting:s,onMint:pe,isActive:N||re&&$})})]}):Object(R.jsx)(F,{children:"Connect Wallet"}),Object(R.jsx)(k.a,{variant:"caption",align:"center",display:"block",style:{marginTop:7,color:"grey"},children:"Powered by METAPLEX"})]})}),Object(R.jsx)(v.a,{open:E.open,autoHideDuration:6e3,onClose:function(){return K(Object(b.a)(Object(b.a)({},E),{},{open:!1}))},children:Object(R.jsx)(y.a,{onClose:function(){return K(Object(b.a)(Object(b.a)({},E),{},{open:!1}))},severity:E.severity,children:E.message})})]})},Y=n(359),q=n(360),G=n(361),V=n(353),H=n(354),J=n(362),Z=n(357),X=n(201),Q=n(355),$=Object(X.a)({palette:{type:"dark"}}),ee=function(){try{return new l.e.PublicKey("Ht2DrhQUS3ZkiAjzBXszMdYxexPFpmHSyraJHykqYq4")}catch(e){return void console.log("Failed to construct CandyMachineId",e)}}(),te="mainnet-beta",ne="https://summer-restless-shape.solana-mainnet.quiknode.pro/8f9e0a9bda02cb9e1dbd607cf005cb9880e218ee/",re=new l.e.Connection(ne),ae=function(){var e=Object(c.useMemo)((function(){return Object(w.i)(te)}),[]),t=Object(c.useMemo)((function(){return[Object(Y.a)(),Object(q.a)(),Object(G.a)(),Object(V.a)({network:te}),Object(H.a)({network:te})]}),[]);return Object(R.jsx)(Q.a,{theme:$,children:Object(R.jsx)(J.a,{endpoint:e,children:Object(R.jsx)(Z.a,{wallets:t,autoConnect:!0,children:Object(R.jsx)(T.b,{children:Object(R.jsx)(z,{candyMachineId:ee,connection:re,txTimeout:3e4,rpcHost:ne})})})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,364)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};n(308);u.a.render(Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(ae,{})}),document.getElementById("root")),ie()},47:function(e,t,n){"use strict";(function(e){n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return g})),n.d(t,"f",(function(){return m}));var r=n(3),a=n(1),i=n.n(a),c=n(24),s=n(37),o=n(26),u=function(e){if(e)return new Date(1e3*e.toNumber())},l=new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),b={format:function(e){return e?l.format(e):"--"},asNumber:function(e){if(e)return e.toNumber()/o.b}},d=new c.e.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL"),p=new c.e.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),f=function(){var e=Object(r.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),s.b.toBuffer(),t.toBuffer()],d);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var t=Object(r.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],p);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.a)(i.a.mark((function t(n,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.e.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],p);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(5).Buffer)}},[[309,1,2]]]);
//# sourceMappingURL=main.b78f66f1.chunk.js.map