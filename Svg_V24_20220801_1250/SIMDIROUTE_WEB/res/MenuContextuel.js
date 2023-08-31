//#17.0.1.0 MenuContextuel.js
//VersionVI: 30F170078n
// Le seul support technique disponible pour cette librairie est
// accessible a travers le service "Assistance Directe".

var clWDMenuContextuel = {
	// Membres
	m_bEnDehors: false,
//	m_sChampEnCours: undefined,
	m_oMenu: null,
	m_tabOptions: [],

	// Constantes
	// Image de bordure
	ms_sImageBordure: "MenuBordure.gif",
	// Couleur de cadre
	ms_sCouleurCadre: "#000000",
	// Couleur de fond
	ms_sCouleurFond: "#ffffff",
	// Couleur de fond
	ms_sCouleurFondSelection: "#a1abc6",
	// Marge (depend de l'image de bordure)
	ms_nMarge: 21,
	// Hauteur d'une option
	ms_nHauteurOption: 22,
	// Options
	ms_tabOptions: [
		{
			m_sExtension: "xls",
			m_sCommande: "EXPORTXLS",
			m_oTitre : { m_sVariable : "TABLE_EXPORT_EXCEL_TITRE", m_sDefaut : "Exporter le contenu vers Excel..." },
			m_oLibelle : { m_sVariable : "TABLE_EXPORT_EXCEL", m_sDefaut : "Exporter vers Excel..." }
		},
		{
			m_sExtension: "rtf",
			m_sCommande: "EXPORTRTF",
			m_oTitre : { m_sVariable : "TABLE_EXPORT_WORD_TITRE", m_sDefaut : "Exporter le contenu vers Word..." },
			m_oLibelle : { m_sVariable : "TABLE_EXPORT_WORD", m_sDefaut : "Exporter vers Word..." }
		},
		{
			m_sExtension: "xml",
			m_sCommande: "EXPORTXML",
			m_oTitre : { m_sVariable : "TABLE_EXPORT_XML_TITRE", m_sDefaut : "Exporter le contenu vers XML..." },
			m_oLibelle : { m_sVariable : "TABLE_EXPORT_XML", m_sDefaut : "Exporter vers XML..." }
		},
		{
			m_sExtension: "pdf",
			m_sCommande: "EXPORTPDF",
			m_oTitre : { m_sVariable : "TABLE_EXPORT_PDF_TITRE", m_sDefaut : "Imprimer vers un fichier PDF..." },
			m_oLibelle : { m_sVariable : "TABLE_EXPORT_PDF", m_sDefaut : "Imprimer en PDF..." }
		}
	]
};

clWDMenuContextuel.Cree = function Cree(sRepertoireImages)
{
	var nOption;
	// Creation du div
	var oDiv = document.createElement("div");
	oDiv.style.zIndex = 999;
	oDiv.style.position = "absolute";
	oDiv.style.top = "0px";
	oDiv.style.left = "0px";
	oDiv.style.visibility = "hidden";
	this.m_oMenu = document.body.appendChild(oDiv);

	var nHauteurTotale = this.ms_tabOptions.length * this.ms_nHauteurOption;
	var tabHTML = [];
	tabHTML.push("<table cellspacing=\"0\" cellpadding=\"0\" style=\"background-color:");
	tabHTML.push(this.ms_sCouleurFond);
	tabHTML.push(";background-image:url(");
	tabHTML.push(sRepertoireImages);
	tabHTML.push("/");
	tabHTML.push(this.ms_sImageBordure);
	tabHTML.push(");background-repeat:repeat-y;border:1px solid ");
	tabHTML.push(this.ms_sCouleurCadre);
	tabHTML.push(";width:150px;height:");
	tabHTML.push(nHauteurTotale);
	tabHTML.push("px;\"><tr style=\"width:100%;height:");
	tabHTML.push(nHauteurTotale);
	tabHTML.push("px;\"><td style=\"border-width:0;width:100%;height:");
	tabHTML.push(nHauteurTotale);
	tabHTML.push("px;\" valign=\"middle\"><table style=\"border-width:0;width:100%;height:");
	tabHTML.push(nHauteurTotale);
	tabHTML.push("px;\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">");
	for (nOption = 0; nOption < this.ms_tabOptions.length; nOption++)
	{
		var oOption = this.ms_tabOptions[nOption];
		tabHTML.push("<tr style=\"width:100%;height:");
		tabHTML.push(this.ms_nHauteurOption);
		tabHTML.push("px;\"><td title=\"");
		tabHTML.push(this.__sGetVariableOuDefaut(oOption.m_oTitre));
		tabHTML.push("\" style=\"border:0px solid ");
		tabHTML.push(this.ms_sCouleurCadre);
		tabHTML.push(";width:100%;height:");
		tabHTML.push(this.ms_nHauteurOption);
		tabHTML.push("px;cursor:hand;\"><span style=\"margin-left:15px;font-size:8.000pt;font-face:Tahoma;\">");
		tabHTML.push(this.__sGetVariableOuDefaut(oOption.m_oLibelle));
		tabHTML.push("</span></td></tr>");
	}
	tabHTML.push("</table></td></tr></table>");
	this.m_oMenu.innerHTML = tabHTML.join("");
	this.m_tabOptions = this.m_oMenu.getElementsByTagName("span");

	// Hooks divers
	var oThis = this;
	for (nOption = 0; nOption < this.m_tabOptions.length; nOption++)
	{
		this.__HookOption(nOption);
	}
};

clWDMenuContextuel.__sGetVariableOuDefaut = function __sGetVariableOuDefaut(oObjet)
{
	return window[oObjet.m_sVariable] ? window[oObjet.m_sVariable] : oObjet.m_sDefaut;
};

// Hook de une option
clWDMenuContextuel.__HookOption = function __HookOption (nOption)
{
	var oOption = this.m_tabOptions[nOption];
	var oThis = this;
	var nOptionLocal = nOption;
	if (bIE)
	{
		HookOnXXX(oOption.parentNode, "onselectstart", "selectstart", clWDUtil.bStopPropagation);
	}
	HookOnXXX(oOption, "onmouseover", "mouseover", function(oEvent) { oThis.__Selection(oEvent || event, nOptionLocal) });
	HookOnXXX(oOption, "onmouseout", "mouseout", function(oEvent) { oThis.__Ferme(oEvent || event, nOptionLocal) });
	HookOnXXX(oOption, "onmouseup", "mouseup", function(oEvent) { oThis.__Active(oEvent || event, nOptionLocal) });
};

clWDMenuContextuel.__Selection = function __Selection(oEvent, nOptionSelection)
{
	this.m_bEnDehors = false;
	for (var nOption = 0; nOption < this.m_tabOptions.length; nOption++)
	{
		var oOption = this.m_tabOptions[nOption];
		var nBordure = (nOption == nOptionSelection) ? 1 : 0;
		oOption.parentNode.style.borderWidth = nBordure;
		oOption.parentNode.style.backgroundColor = (nOption == nOptionSelection) ? this.ms_sCouleurFondSelection : "";
		oOption.style.marginLeft = this.ms_nMarge - nBordure;
	}
};

clWDMenuContextuel.__Ferme = function __Ferme(oEvent, nOptionSelection)
{
	this.m_bEnDehors = true;
	var oThis = this;
	setTimeout(function () { oThis.__Masque(); }, 500);
};

clWDMenuContextuel.__Active = function __Selection (oEvent, nOptionSelection)
{
	_JEC(this.ms_tabOptions[nOptionSelection].m_sExtension, this.ms_tabOptions[nOptionSelection].m_sCommande, this.m_sChampEnCours);
};

clWDMenuContextuel.__Masque = function __Masque ()
{
	if (this.m_bEnDehors)
	{
		this.m_oMenu.style.visibility = "hidden";
	}
};

clWDMenuContextuel.Ouvre = function Ouvre(sChamp, oEvent)
{
	oEvent = oEvent || event;
	this.m_bEnDehors = false;
	this.m_sChampEnCours = sChamp;

	// Rend visible et modifie la position du menu contextuel en fonction du curseur de la souris
	this.m_oMenu.style.top = _SPY(oEvent, 0);
	this.m_oMenu.style.left = _SPX(oEvent, 0);
	this.m_oMenu.style.visibility = "visible";

	this.__Selection(0);
};
