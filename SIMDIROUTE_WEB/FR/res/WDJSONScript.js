/*! VersionVI: 30F190056s x */
function WDJSONScriptRequete(n,t,i,r){var f,u;this.m_pCallback=r,this.m_sNomCallback="WDJSONScriptRequete_"+n,f=this,window[this.m_sNomCallback]=function(){f.AppelCallback(arguments[0])},u=document.createElement("script"),u.src=t+(t.indexOf("?")==-1?"?":"&")+i+"="+this.m_sNomCallback,u.charset="UTF-8",this.m_oScript=document.body.appendChild(u)}WDJSONScriptRequete.prototype.AppelCallback=function(n){this.m_pCallback(n),this.m_pCallback=null,delete this.m_pCallback,clWDUtil.bHTMLVideDepuisVariable(this,"m_oScript"),window[this.m_sNomCallback]=null};var clWDJSONScriptMain={m_nIdPos:0};clWDJSONScriptMain.JSONScriptExecute=function(n,t,i){new WDJSONScriptRequete(this.m_nIdPos++,n,t,i)}