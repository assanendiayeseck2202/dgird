/*! VersionVI: 30F190056s x */
function WDBarreBouton(n,t,i,r){if(arguments.length){this.m_oObjetParent=n,this.m_oBouton=t,this.m_sCommande=i,this.m_oParamCommande=r;var u=this;this.m_oBouton.onmouseover=function(n){u.OnMouseOver(n||event)},this.m_oBouton.onmouseout=function(n){u.OnMouseOut(n||event)},this.m_oBouton.onclick=function(n){u.OnClick(n||event)}}}function WDBarreBoutonOnOff(){arguments.length&&WDBarreBouton.prototype.constructor.apply(this,arguments)}function WDBarreBoutonPopup(n,t,i,r,u){var f;if(arguments.length){WDBarreBouton.prototype.constructor.apply(this,[n,t,i,r]),this.m_oPopup=u,f=this,this.m_oBouton.getElementsByTagName("img")[0].onclick=function(n){f.OnClick(n||event)};for(var s=function(n){return f.OnClickP(n||event),clWDUtil.bStopPropagation(n)},o=this.m_oPopup.getElementsByTagName("td"),h=o.length,e=0;e<h;e++)o[e].onmousedown=s;this.m_bSurvol=!1,this.m_pfMouseOutSimule=function(){f.OnMouseOut(bIE?{toElement:null}:{relatedTarget:null})}}}function WDBarreBoutonPopupMenu(n,t,i,r,u){var f,o;if(arguments.length){WDBarreBoutonPopup.prototype.constructor.apply(this,[n,t,i,null,r]),this.m_tabOptions=u;for(var h=this,l=function(n){h.OnMouseOverMenu(n||event)},a=function(n){h.OnMouseOutMenu(n||event)},v=this.m_tabOptions.length,e=0;e<v;e++){var c=document.createElement("span"),s=this.m_tabOptions[e].sTexte,y=document.createTextNode(s);c.appendChild(y),f=this.m_tabOptions[e].oTD,f.appendChild(c),f.noWrap="true",f.onmouseover=l,f.onmouseout=a,o=f.getElementsByTagName("img")[0],o&&(o.alt=s,o.title=s)}}}function WDBarreBoutonPopupMenuS(){arguments.length&&WDBarreBoutonPopupMenu.prototype.constructor.apply(this,arguments)}function WDBarre(n,t,i,r,u,f){arguments.length&&(WDChampParametresHote.prototype.constructor.apply(this,[n,t,i]),this.m_eModeBarre=r!==undefined?r:this.ms_eModeBarreAutomatique,this.m_tabCouleurFond=[],this.m_tabCouleurFond[WDBarreBouton.prototype.ms_eEtatNormal]="",this.m_tabCouleurFond[WDBarreBouton.prototype.ms_eEtatSurvol]=u||this.ms_sCouleurFondSurvolDefaut,this.m_tabCouleurFond[WDBarreBouton.prototype.ms_eEtatActif]=f||this.ms_sCouleurFondActifDefaut)}WDBarreBouton.prototype.ms_eEtatNormal=0,WDBarreBouton.prototype.ms_eEtatSurvol=1,WDBarreBouton.prototype.ms_eEtatActif=2,WDBarreBouton.prototype.vPrePlaceBarre=clWDUtil.m_pfVide,WDBarreBouton.prototype.vPostPlaceBarre=clWDUtil.m_pfVide,WDBarreBouton.prototype.OnMouseOver=function(n){this.m_bSurvol=!0,this.RafEtatSimple(n)},WDBarreBouton.prototype.OnMouseOut=function(n){delete this.m_bSurvol,this.RafEtatSimple(n)},WDBarreBouton.prototype.OnClick=function(n){this.ExecuteCommande(n)},WDBarreBouton.prototype.ExecuteCommande=function(n){this.m_oObjetParent[this.m_sCommande](n,this.m_oParamCommande)},WDBarreBouton.prototype.RafEtatSimple=function(n){this.RafEtat(n,this.m_oObjetParent.oGetParamEtat(n,!1))},WDBarreBouton.prototype.RafEtat=function(n,t){var i=this.__eGetEtatSurvol(this.m_bSurvol);i=this._veGetEtatSpecifique(n,i,t),this.__DessineEtat(i,this,this.m_oBouton)},WDBarreBouton.prototype.__eGetEtatSurvol=function(n){return n?this.ms_eEtatSurvol:this.ms_eEtatNormal},WDBarreBouton.prototype.__DessineEtat=function(n,t,i){n!=t.m_eEtat&&(n!=this.ms_eEtatNormal?t.m_eEtat=n:delete t.m_eEtat,i.style.backgroundColor=this.m_oObjetParent.sGetCouleurFond(n))},WDBarreBouton.prototype._veGetEtatSpecifique=function(n,t){return t},WDBarreBoutonOnOff.prototype=new WDBarreBouton,WDBarreBoutonOnOff.prototype.constructor=WDBarreBoutonOnOff,WDBarreBoutonOnOff.prototype._veGetEtatSpecifique=function(n,t,i){return this.bActif(n,i)?this.ms_eEtatActif:WDBarreBouton.prototype._veGetEtatSpecifique.apply(this,arguments)},WDBarreBoutonOnOff.prototype.bEtatSurcharge=function(){return!1},WDBarreBoutonPopup.prototype=new WDBarreBouton,WDBarreBoutonPopup.prototype.constructor=WDBarreBoutonPopup,WDBarreBoutonPopup.prototype.OnMouseOver=function(){this.m_bSurvol||WDBarreBouton.prototype.OnMouseOver.apply(this,arguments)},WDBarreBoutonPopup.prototype.OnMouseOut=function(n){var t=bIE?n.toElement:n.relatedTarget;bEstFils(t,this.m_oBouton,document)||(this.__SetDisplayPopup(!1),WDBarreBouton.prototype.OnMouseOut.apply(this,arguments))},WDBarreBoutonPopup.prototype.ExecuteCommande=function(){this.__SetDisplayPopup(!0)},WDBarreBoutonPopup.prototype.OnClickP=function(n){this.__SetDisplayPopup(!1),WDBarreBouton.prototype.OnMouseOut.apply(this,[n]),clWDUtil.nSetTimeout(this.m_pfMouseOutSimule,clWDUtil.ms_nTimeoutNonImmediat100)},WDBarreBoutonPopup.prototype.__SetDisplayPopup=function(n){var r,t,u,i;if(clWDUtil.SetDisplay(this.m_oPopup,n),r=this.m_oObjetParent.m_oBarre,t=r,n){if(!this.m_tabZIndex)for(this.m_tabZIndex=[];t=t.parentNode;){if(t==document.body||clWDUtil.bBaliseEstTag(t,"form"))break;this.m_tabZIndex.push(t.style.zIndex),t.style.zIndex="991"}}else if(this.m_tabZIndex){for(u=0;t=t.parentNode;){if(i=this.m_tabZIndex[u++],t==document.body||clWDUtil.bBaliseEstTag(t,"form")||undefined==i)break;t.style.zIndex=i}delete this.m_tabZIndex}},WDBarreBoutonPopupMenu.prototype=new WDBarreBoutonPopup,WDBarreBoutonPopupMenu.prototype.constructor=WDBarreBoutonPopupMenu,WDBarreBoutonPopupMenu.prototype.m_nOptionSurvol=-1,WDBarreBoutonPopupMenu.prototype.OnMouseOverMenu=function(n){var t=this.__nGetOptionEvent(n);this.m_nOptionSurvol!=t&&(this.m_nOptionSurvol=t),this.__RafEtatOptions(n)},WDBarreBoutonPopupMenu.prototype.OnMouseOutMenu=function(n){var t=this.__nGetOptionEvent(n);this.m_nOptionSurvol==t&&delete this.m_nOptionSurvol,this.__RafEtatOptions(n)},WDBarreBoutonPopupMenu.prototype.__nGetOptionEvent=function(n){for(var i=clWDUtil.oGetTarget(n),r=this.m_tabOptions.length,t=0;t<r;t++)if(bEstFils(i,this.m_tabOptions[t].oTD,document))return t;return-1},WDBarreBoutonPopupMenu.prototype.ExecuteCommande=function(n){WDBarreBoutonPopup.prototype.ExecuteCommande.apply(this,arguments),this.__RafEtatOptions(n)},WDBarreBoutonPopupMenu.prototype.__RafEtatOptions=function(n){for(var i=this.m_tabOptions.length,t=0;t<i;t++)this.__RafEtatOption(n,t,this.m_nOptionSurvol)},WDBarreBoutonPopupMenu.prototype.__RafEtatOption=function(n,t,i){var r=this.m_tabOptions[t],u=this.__eGetEtatSurvol(t==i);u=this.__eGetEtatSpecifiqueOption(n,u,r),this.__DessineEtat(u,r,r.oTD)},WDBarreBoutonPopupMenu.prototype.__eGetEtatSpecifiqueOption=function(n,t,i){return this.m_oObjetParent.bActifOption(n,i.oParamCommande)?this.ms_eEtatActif:t},WDBarreBoutonPopupMenu.prototype.OnClickP=function(n){var t=this.__nGetOptionEvent(n);t!=-1&&(this.m_oParamCommande=this.m_tabOptions[t].oParamCommande),WDBarreBouton.prototype.ExecuteCommande.apply(this,[n]),WDBarreBoutonPopup.prototype.OnClickP.apply(this,arguments)},WDBarreBoutonPopupMenuS.prototype=new WDBarreBoutonPopupMenu,WDBarreBoutonPopupMenuS.prototype.constructor=WDBarreBoutonPopupMenuS,WDBarreBoutonPopupMenuS.prototype._veGetEtatSpecifique=function(n){for(var i=this.m_tabOptions.length,t=0;t<i;t++)if(this.m_oObjetParent.bActifOption(n,this.m_tabOptions[t].oParamCommande))return this.ms_eEtatActif;return WDBarreBoutonPopupMenu.prototype._veGetEtatSpecifique.apply(this,arguments)},WDBarre.prototype=new WDChampParametresHote,WDBarre.prototype.constructor=WDBarre,WDBarre.prototype.ms_sCouleurFondSurvolDefaut="#EAEFF2",WDBarre.prototype.ms_sCouleurFondActifDefaut="#C5E0EC",WDBarre.prototype.ms_eModeBarreAutomatique=0,WDBarre.prototype.ms_eModeBarreToujours=1,WDBarre.prototype.ms_eModeBarreJamais=2,WDBarre.prototype.ms_nBoutonOnOff=0,WDBarre.prototype.ms_nBoutonPopup=1,WDBarre.prototype.ms_nBoutonAction=2,WDBarre.prototype.ms_nCombo=3,WDBarre.prototype.ms_nBoutonPopupMenu=4,WDBarre.prototype.ms_nBoutonPopupMenuS=5,WDBarre.prototype.ms_sSuffixeCommande="_COM",WDBarre.prototype.ms_tabClassBordures=["","_TDG","_TDD","_TDGD"],WDBarre.prototype.ms_nMarqueBordureGauche=1,WDBarre.prototype.ms_nMarqueBordureDroite=2,WDBarre.prototype.Init=function(n){WDChampParametresHote.prototype.Init.apply(this,[]),this._InitBarre(n)},WDBarre.prototype._vLiaisonHTML=function(){WDChampParametresHote.prototype._vLiaisonHTML.apply(this,arguments),this.m_oBarre=this.oGetElementById(document,this.ms_sSuffixeCommande)},WDBarre.prototype._InitBarre=function(n){switch(this.m_eModeBarre){case this.ms_eModeBarreToujours:clWDUtil.SetDisplay(this.m_oBarre,!0),this._InitBarreAutomatique();break;case this.ms_eModeBarreJamais:break;case this.ms_eModeBarreAutomatique:default:this._InitBarreAutomatique()}this.m_tabBarreElements=[],this._InitBarreBoutons(n)},WDBarre.prototype._InitBarreBoutons=function(n){for(var f=this.m_tabDescBarre.length,t,r,i,u=0;u<f;u++)if(t=this.m_tabDescBarre[u],t){r=null,i=this.oGetElementByIdBarre(document,t.sSuf);switch(t.nType){case this.ms_nBoutonOnOff:r=this._voNewBoutonOnOff(i,t);break;case this.ms_nBoutonPopup:r=this._voNewBoutonPopup(i,t);break;case this.ms_nBoutonAction:r=this._voNewBoutonAction(i,t);break;case this.ms_nCombo:r=this._voNewBoutonCombo(i,t);break;case this.ms_nBoutonPopupMenu:r=this._voNewBoutonMenu(i,t);break;case this.ms_nBoutonPopupMenuS:r=this._voNewBoutonMenuS(i,t)}r&&(this.m_tabBarreElements.push(r),n&&n[t.sSuf]&&(n[t.sSuf].bVisible!==undefined&&(clWDUtil.bBaliseEstTag(i,"select")&&(i=i.parentNode),clWDUtil.SetDisplay(i,n[t.sSuf].bVisible)),n[t.sSuf].nSeparateurs!==undefined&&(i.className=this.sGetNomElement(this.ms_sSuffixeCommande+this.ms_tabClassBordures[n[t.sSuf].nSeparateurs]))))}},WDBarre.prototype._voNewBoutonOnOff=function(){return null},WDBarre.prototype._voNewBoutonPopup=function(){return null},WDBarre.prototype._voNewBoutonAction=function(){return null},WDBarre.prototype._voNewBoutonCombo=function(){return null},WDBarre.prototype._voNewBoutonMenu=function(){return null},WDBarre.prototype._voNewBoutonMenuS=function(){return null},WDBarre.prototype.oGetElementByIdBarre=function(n,t){var i=this.oGetElementById(n,this.ms_sSuffixeCommande+"_"+t);return i&&this.__sAppliqueBulle(i,t),i},WDBarre.prototype.RafBarre=function(n,t){this.eGetEtat()!=WDChamp.prototype.ms_eEtatActif&&(t=!1);switch(this.m_eModeBarre){case this.ms_eModeBarreJamais:break;case this.ms_eModeBarreAutomatique:default:if(t)clWDUtil.SetDisplay(this.m_oBarre,!0);else{clWDUtil.SetDisplay(this.m_oBarre,!1);break}case this.ms_eModeBarreToujours:for(var r=this.oGetParamEtat(n,!1),u=this.m_tabBarreElements.length,i=0;i<u;i++)this.m_tabBarreElements[i].RafEtat(n,r)}},WDBarre.prototype.oGetParamEtat=function(){return null},WDBarre.prototype.sGetCouleurFond=function(n){return this.m_tabCouleurFond[n]},WDBarre.prototype.__sAppliqueBulle=function(n,t){var r=this.sGetAltText(t),i;r&&(i=n.getElementsByTagName("img"),i.length&&(i[0].alt=r,i[0].title=r),i=n.getElementsByTagName("select"),i.length&&(i[0].title=r))},WDBarre.prototype.sGetAltText=function(){return null},WDBarre.prototype._vMasqueBarre=function(){WDChampParametresHote.prototype._vMasqueBarre.apply(this,arguments),this.m_eModeBarre==this.ms_eModeBarreAutomatique&&clWDUtil.SetDisplay(this.m_oBarre,!1)},WDBarre.prototype.DeplaceBarre=function(n){if(n){for(var i=this.m_tabBarreElements.length,t=0;t<i;t++)this.m_tabBarreElements[t].vPrePlaceBarre();for(this.m_oBarre=n.insertBefore(this.m_oBarre,null),t=0;t<i;t++)this.m_tabBarreElements[t].vPostPlaceBarre()}}