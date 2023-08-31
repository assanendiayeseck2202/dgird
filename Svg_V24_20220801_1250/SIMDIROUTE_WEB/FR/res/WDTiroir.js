/*! VersionVI: 30F190056s x */
function WDAnimTiroir(n,t,i,r){var f;if(arguments.length){this.m_oPartieBasse=n,this.m_bOuverture=i,this.m_sSavOverflowY=clWDUtil.oGetCurrentStyle(n).overflowY,n.style.overflowY="hidden";var u=bIEQuirks?1:0,e=this.m_bOuverture?u:r,o=this.m_bOuverture?r:u;this.m_bOuverture&&clWDUtil.SetDisplay(n,!0),f=function(t){n.style.height=t+"px"},WDAnim.prototype.constructor.apply(this,[f,e,o,0,this.ms_nCourbeLineaire,25,t])}}function WDTiroir(n,t,i,r,u){n&&(WDChamp.prototype.constructor.apply(this,[n,r,u]),this.m_tabStyle=t,this.m_nHauteurBasDefaut=i,this.m_tabAnimations=[],this.m_tabHauteurBas=[])}WDAnimTiroir.prototype=new WDAnim,WDAnimTiroir.prototype.constructor=WDAnimTiroir,WDAnimTiroir.prototype.vFin=function(){this.m_bOuverture||clWDUtil.SetDisplay(this.m_oPartieBasse,!1),this.m_oPartieBasse.style.height="auto",this.m_oPartieBasse.style.overflowY=this.m_sSavOverflowY,WDAnim.prototype.vFin.apply(this,arguments)},WDTiroir.prototype=new WDChamp,WDTiroir.prototype.constructor=WDTiroir,WDTiroir.prototype.ms_nStyleFerme=0,WDTiroir.prototype.ms_nStyleOuvert=1,WDTiroir.prototype.Init=function(){WDChamp.prototype.Init.apply(this,arguments),this.__InitInterne()},WDTiroir.prototype.__InitInterne=function(){this.bGestionZR()?this.oGetZRAjax()||this.PourToutesLignesZR(this.__InitOnClick):this.__InitOnClick()},WDTiroir.prototype.__InitOnClick=function(n){var i=this,t=this.__tabGetPartiesSelonIndice(n);t[0]&&(t[0].onclick=function(t){i.OnClick(t||event,n)})},WDTiroir.prototype._vOnZRAfficheAJAXInterne=function(){WDChamp.prototype._vOnZRAfficheAJAXInterne.apply(this,arguments),this.__InitInterne()},WDTiroir.prototype._vOnLigneZRAffiche=function(n){WDChamp.prototype._vOnLigneZRAffiche.apply(this,arguments),this.__InitOnClick(n)},WDTiroir.prototype._vOnLigneZRMasque=function(n){var t=this.__tabGetPartiesSelonIndice(n);t[0]&&(t[0].onclick=null),WDChamp.prototype._vOnLigneZRMasque.apply(this,arguments)},WDTiroir.prototype.__tabGetParties=function(n){var t;return this.bGestionZR()&&(t=parseInt(n.name.split("_")[1],10)),this.__tabGetPartiesSelonIndice(t)},WDTiroir.prototype.__tabGetPartiesSelonIndice=function(n){var t;return t=this.bGestionZR()?this.sGetNomElementZRIndice(n,""):this.m_sAliasChamp,[document.getElementById("H-"+t),document.getElementById("B-"+t)]},WDTiroir.prototype.__nGetHauteurBas=function(n){var t=this.__tabGetParties(n);return this.__nGetHauteurBasValeur(this.__bGetOuvert(),t)},WDTiroir.prototype.__nGetHauteurBasValeur=function(n,t){var i=t[1],r,u,f;return this.m_tabAnimations[i.id]||(n||(r=i.style.position,i.style.position="absolute",u=i.style.visibility,i.style.visibility="hidden",f=i.style.display,clWDUtil.SetDisplay(i,!0)),this.m_tabHauteurBas[i.id]=i.offsetHeight,n||(i.style.display=f,i.style.visibility=u,i.style.position=r)),this.__nGetHauteurBasFinal(t)},WDTiroir.prototype.__nGetHauteurBasFinal=function(n){var t=this.m_tabHauteurBas[n[1].id];return undefined!==t?t:this.m_nHauteurBasDefaut},WDTiroir.prototype.__bGetOuvert=function(){return this.bGestionZR()&&this._vLiaisonHTML(),this.bConversionValeur(this._vsGetValeurChampFormulaire())},WDTiroir.prototype.OnClick=function(n,t){this.bGestionZR()&&this.SetZRValeur(n,t,!1),this.eGetEtat()==this.ms_eEtatActif&&clWDUtil.bClickDansFond(n,this.__tabGetPartiesSelonIndice(t)[0])&&(this.SetValeur(n,!this.__bGetOuvert(),this.oGetElementByNameZR(document,"")),this.RecuperePCode(this.ms_nEventNavModifSimple)(n))},WDTiroir.prototype.SetValeur=function(n,t,i){var r=this.bConversionValeur(t);return WDChamp.prototype.SetValeur.apply(this,[n,r,i]),t=r?"1":"0",this._vSetValeurChampFormulaire(t),this.AfficheTiroir(r,i),t},WDTiroir.prototype.GetValeur=function(n,t,i){var r=this.bConversionValeur(t);return WDChamp.prototype.GetValeur.apply(this,[n,r,i])},WDTiroir.prototype.GetProp=function(n,t,i,r){var u=this.__tabGetParties(r);switch(n){case this.XML_CHAMP_PROP_NUM_HAUTEUR:return u[0].offsetHeight+this.__nGetHauteurBas();case this.XML_CHAMP_PROP_NUM_LARGEUR:return u[0].offsetWidth;case this.XML_CHAMP_PROP_NUM_ENROULE:return!this.GetValeur(t,i,r);default:return WDChamp.prototype.GetProp.apply(this,arguments)}},WDTiroir.prototype.SetProp=function(n,t,i,r){var u,f;i=WDChamp.prototype.SetProp.apply(this,arguments),u=this.__tabGetParties(r);switch(n){case this.XML_CHAMP_PROP_NUM_HAUTEUR:return this.m_tabHauteurBas[u[1].id]=i-u[0].offsetHeight,f=this.__nGetHauteurBasFinal(u),u[1].getElementsByTagName("td")[0].height=f,f;case this.XML_CHAMP_PROP_NUM_LARGEUR:return u[0].getElementsByTagName("td")[0].style.width=i+"px",u[1].getElementsByTagName("td")[0].style.width=i+"px",u[0].parentNode.style.width=i+"px",i;case this.XML_CHAMP_PROP_NUM_ENROULE:return this.SetValeur(t,!i,r);default:return i}},WDTiroir.prototype.AfficheTiroir=function(n,t){var i=this.__tabGetParties(t),u=i[1].id,r;this.m_tabAnimations[u]&&this.m_tabAnimations[u].vAnnule(),this.m_tabAnimations[u]=new WDAnimTiroir(i[1],this.m_sAliasChamp,n,this.__nGetHauteurBasValeur(!n,i)),r=this.m_tabStyle[n?this.ms_nStyleOuvert:this.ms_nStyleFerme],r===undefined&&(r=""),i[0].className=r},WDTiroir.prototype._vAnimationFin=function(n){WDChamp.prototype._vAnimationFin.apply(this,arguments);var t=n.m_oPartieBasse;delete this.m_tabAnimations[t.id],AppelMethode(WDChamp.prototype.ms_sOnDisplay,[t,this.__bGetOuvert()]),bIEQuirks&&parseInt(this._vsGetValeurChampFormulaire(),10)==1&&(t.className=t.className)}