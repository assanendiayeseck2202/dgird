//#17.0.1.0 WDTableau.js
//VersionVI: 30F170078n
// Le seul support technique disponible pour cette librairie est
// accessible a travers le service "Assistance Directe".

// Gestion des tableaux
var WDTableau = { m_tabIterateurs : [] };

// Indique si un element est un tableau associatif
WDTableau.__bEstAssociatif = function __bEstAssociatif(oTableau)
{
	return (oTableau instanceof WDTableauAssociatif);
};
// Indique si un element est un tableau (non associatif)
WDTableau.__bEstTableau = function __bEstTableau(oTableau)
{
	return ("object" == typeof oTableau);
};

// Gestion des indices speciaux
WDTableau.__oCalculIndiceEffectif = function __oCalculIndiceEffectif(oTableau, oCle)
{
	// Gestion des cas particulier
	switch (oCle)
	{
	case 0x00000001:
		// PremierElement
	default:
		return oCle - 1;
	case WDIterateur.prototype.ms_oElementCourant:
		// ElementCourant : pas encore de POUR TOUT sur les tableaux
		return 0;
	case 0x87654322:
	case -2023406814:
		// DernierElement
		return oTableau.length - 1;
	}
};

// Trouve le premier iterateur sur un element
WDTableau.oGetIterateur = function oGetIterateur(oTableau)
{
	var i;
	var nLimiteI = this.m_tabIterateurs.length;
	for (i = 0; i < nLimiteI; i++)
	{
		if (this.m_tabIterateurs[i].m_oTableau === oTableau)
		{
			return this.m_tabIterateurs[i].m_oIterateur;
		}
	}
	return null;
};

// Iterateurs
function WDIterateur(oCible, bAscendant)
{
	// Si on est pas dans l'init d'un protoype
	if (oCible)
	{
		this.m_oCible = oCible;
		this.m_bAscendant = bAscendant;
		// -1 : Permet de commencer par un appel a Suivant
		this.m_nCompteur = -1;
	}
};
WDIterateur.prototype.ms_oElementCourant = {};

// Deplacement
WDIterateur.prototype.Suivant = function Suivant()
{
	this.m_nCompteur++;
	// En cas d'echec de l'avance
	this.m_bFini = !this._vbSuivant();
};
WDIterateur.prototype.bEstFini = function bEstFini ()
{
	return this.m_bFini;
};
// Implementation par defaut
WDIterateur.prototype._vbSuivant = function _vbSuivant ()
{
	this.m_nCompteur++;
	return false;
};

//oGetValeur
//SetValeur
//oGetCle
WDIterateur.prototype.nGetCompteur = function nGetCompteur()
{
	// + 1 : Indice C vers WL
	return this.nGetCompteurDirect() + 1;
};
WDIterateur.prototype.nGetCompteurDirect = function nGetCompteurDirect()
{
	return this.m_nCompteur;
};

//OnInsere

function WDIterateurTableau (oTableau, bAscendant)
{
	// Si on est pas dans l'init d'un protoype
	if (oTableau)
	{
		// Appel le constructeur de la classe de base
		WDIterateur.prototype.constructor.apply(this, arguments);
	}
}

// Declare l'heritage
WDIterateurTableau.prototype = new WDIterateur();
WDIterateurTableau.prototype.constructor = WDIterateurTableau;

// _vbSuivant

//oGetValeur
//oGetCle
//SetValeur

function WDIterateurTableauAssociatif (oTableau, bAscendant, oCleFiltre)
{
	// Si on est pas dans l'init d'un protoype
	if (oTableau)
	{
		// Appel le constructeur de la classe de base
		WDIterateurTableau.prototype.constructor.apply(this, arguments);

		this.m_bFiltre = ((null !== oCleFiltre) && (undefined !== oCleFiltre));
		if (this.m_bFiltre)
		{
			this.m_oCleFiltre = oCleFiltre;
		}
	}
}

// Declare l'heritage
WDIterateurTableauAssociatif.prototype = new WDIterateurTableau();
WDIterateurTableauAssociatif.prototype.constructor = WDIterateurTableauAssociatif;

WDIterateurTableauAssociatif.prototype._vbSuivant = function _vbSuivant()
{
	if (this.m_bFiltre)
	{
		// Avec filtre : une seule cle
		// Ordre inverse ?
		this.m_oValeurComplet = this.m_oCible.oGetValeurIndiceComplet(this.m_oCleFiltre, this.m_nCompteur);
	}
	else
	{
		this.m_oValeurComplet = this.m_oCible.oGetValeurDirect(this.m_nCompteur, this.m_bAscendant);
	}

	return this.m_oValeurComplet !== undefined;
};

WDIterateurTableauAssociatif.prototype.oGetValeur = function oGetValeur ()
{
	return this.m_oValeurComplet.m_oValeur;
};
WDIterateurTableauAssociatif.prototype.oGetCle = function oGetCle ()
{
	return this.m_oValeurComplet.m_oCle;
};
WDIterateurTableauAssociatif.prototype.SetValeur = function SetValeur(oValeur)
{
	// On a un alias sur l'objet interne du tableau associatif
	this.m_oValeurComplet.m_oValeur = oValeur;
};

//////////////////////////////////////////////////////////////////////////
// Interface pour le WL

// Supprime tout les elements d'un tableau
WDTableau.TableauSupprimeTout = function TableauSupprimeTout(oTableau)
{
	if (this.__bEstAssociatif(oTableau))
	{
		oTableau.SupprimeTout();
	}
	else if (this.__bEstTableau(oTableau))
	{
		// Les tableaux sont passe par reference donc on manipule bien le tableau original
		oTableau.length = 0;
	}
};

// Supprime un elements d'un tableau
WDTableau.nTableauSupprime = function nTableauSupprime(oTableau, oCle)
{
	if (this.__bEstAssociatif(oTableau))
	{
		return oTableau.nSupprime(oCle);
	}
	else if (this.__bEstTableau(oTableau))
	{
		// Les tableaux sont passe par reference donc on manipule bien le tableau original
		oTableau.splice(this.__oCalculIndiceEffectif(oTableau, oCle), 1);
		return 1;
	}

	return 0;
};

// Occurrence d'un tableau
WDTableau.nTableauOccurrence = function nTableauOccurrence(oTableau)
{
	if (this.__bEstAssociatif(oTableau))
	{
		return oTableau.GetProp(23);
	}
	else if (this.__bEstTableau(oTableau))
	{
		// Les tableaux sont passe par reference donc on manipule bien le tableau original
		return oTableau.length;
	}
};

// Insere dans un tableau
WDTableau.TableauInsere = function TableauInsere(oTableau, oCle, oValeur)
{
	if (this.__bEstAssociatif(oTableau))
	{
		oTableau.SetValeur(oCle, oValeur);
	}
	else if (this.__bEstTableau(oTableau))
	{
		var nCle = oCle - 1;
		if (this.__bEstTableau(oValeur))
		{
			var i;
			var nLimiteI = oValeur.length;
			for (i = 0; i < nLimiteI; i++)
			{
				oTableau.splice(nCle + i, 0, oValeur[i]);
			}
		}
		else
		{
			oTableau.splice(nCle, 0, oValeur);
		}
	}
};

// Creation d'un iterateur
WDTableau.oDeclareIterateur = function oDeclareIterateur(oTableau, bAscendant, oCleFiltre)
{
	var oIterateur;
	if (this.__bEstAssociatif(oTableau))
	{
		oIterateur = new WDIterateurTableauAssociatif(oTableau, bAscendant, oCleFiltre);
	}
	else if (this.__bEstTableau(oTableau))
	{
		oIterateur = new WDIterateurTableau(oTableau, bAscendant);
	}
	else
	{
		// Utilise un iterateur qui ne fait rien
		oIterateur = new WDIterateur(oTableau);
	}

	// Cree l'association iterateur <-> tableau
	this.m_tabIterateurs.push({ m_oIterateur : oIterateur, m_oTableau : oTableau });

	// Commence l'iteration
	oIterateur.Suivant();

	return oIterateur;
};

// Libere un iterateur
WDTableau.LibereIterateur = function LibereIterateur(oIterateur)
{
	// Suprime l'association iterateur <-> tableau
	var i;
	var nLimiteI = this.m_tabIterateurs.length;
	for (i = 0; i < nLimiteI; i++)
	{
		if (this.m_tabIterateurs[i].m_oIterateur === oIterateur)
		{
			this.m_tabIterateurs[i].m_oIterateur = null;
			this.m_tabIterateurs[i].m_oTableau = null;
			this.m_tabIterateurs.splice(i, 1);
		}
	}
};

// Test pour decaler l'iteration dans :
//	TableauSupprimeTout
//	TableauSupprime
//	TableauInsere
//	Modification du tableau en direct (tableaux associatifs) ?
//	Modification du tableau en direct (tableaux normaux) => Comment faire ?

// Tableaux associatifs
function WDTableauAssociatif(nOptions, oValeurParDefaut, nTypeCle)
{
	if (nOptions !== undefined)
	{
		// Memorise les options
		this.m_bSansEspace = (0 != (nOptions & this.ms_nSansEspace))
//		this.m_bSansPonctuationNiEspace = (0 != (nOptions & this.ms_nSansSansPonctuationNiEspace))
//		this.m_bSansAccent = (0 != (nOptions & this.ms_nSansAccent))
		this.m_bSansCasse = (0 != (nOptions & this.ms_nSansCasse))
		this.m_bAvecDoublon = (0 != (nOptions & this.ms_nAvecDoublon));
		this.m_oValeurParDefaut = oValeurParDefaut;
		this.m_nTypeCle = nTypeCle;
		// Stocke les valeurs : tableau associatif de tableaux simples (limite a un element si le tableau est sans doublons)
		this.m_tabValeurs = [];
		this.m_tabElements = [];
	}
};

WDTableauAssociatif.prototype.ms_nSansEspace = 1;
//WDTableauAssociatif.prototype.ms_nSansSansPonctuationNiEspace = 2;
//WDTableauAssociatif.prototype.ms_nSansAccent = 4;
WDTableauAssociatif.prototype.ms_nSansCasse = 16;
WDTableauAssociatif.prototype.ms_nAvecDoublon = 1073741824;

// Calcule la cle d'un element
WDTableauAssociatif.prototype.__sGetCle = function __sGetCle(oCle)
{
	// Selon le type de la cle et les options
	switch (this.m_nTypeCle)
	{
	case 2:
		// Booleen
		return (false != oCle);
	case 3:
	case 4:
	case 5:
	case 6:
	case 7:
	case 8:
	case 9:
	case 14:
		// Entiers
		var nCle = parseInt(oCle, 10);
		return isNaN(nCle) ? 0 : nCle;
	case 11:
	case 12:
		// Reels
		return parseFloat(oCle);
	case 16:
	case 19:
		// Chaines
		var sCle = "" + oCle;
		if (this.m_bSansEspace)
		{
			sCle = clWDUtil.sSupprimeEspaces(sCle);
		}
		if (this.m_bSansCasse)
		{
			sCle = sCle.toLowerCase();
		}
		return sCle;
	default:
		return oCle;
	}
};

// Retourne les valeurs pour une cle (limite a un element si on est sans doublons)
WDTableauAssociatif.prototype.__tabGetValeurs = function __tabGetValeurs(oCle)
{
	return this.m_tabValeurs[this.__sGetCle(oCle)];
};

// Cree une valeur
WDTableauAssociatif.prototype.__tabCreeValeurs = function __tabCreeValeurs(oCle)
{
	// Cree un tableau simple
	var tabValeur = [];
	// L'ajoute avec la bonne cle dans le tableau principale
	this.m_tabValeurs[this.__sGetCle(oCle)] = tabValeur;
	// Et retourne le tableau (c'est un alias de l'objet ajoute)
	return tabValeur;
};

// Indique si la cle est numerique
WDTableauAssociatif.prototype.__oCalculIndiceEffectif = function __oCalculIndiceEffectif(oCle)
{
	var nElement;
	switch (oCle)
	{
	case 0x00000001:
		// PremierElement : Ignore si la cle est numerique
		if (this.m_nTypeCle >= 15)
		{
			nElement = 0;
		}
		else
		{
			return oCle;
		}
		break;
	case WDIterateur.prototype.ms_oElementCourant:
		// ElementCourant
		var oIterateur = WDTableau.oGetIterateur(this);
		if (oIterateur)
		{
			nElement = oIterateur.nGetCompteurDirect();
		}
		else
		{
			return undefined;
		}
		break;
	case 0x87654322:
	case -2023406814:
		// DernierElement
		nElement = this.m_tabElements.length - 1;
		break;
	default:
		// Si la cle est numerique et que les cles du tableau ne se le sont pas : considere que c'est un indice (indice WL qui commence a un)
		if ((this.m_nTypeCle >= 15) && ("number" == typeof oCle))
		{
			nElement = parseInt(oCle, 10) - 1;
		}
		else
		{
			return oCle;
		}
		break;
	}
	return ((0 <= nElement) && (nElement < this.m_tabElements.length)) ? this.m_tabElements[nElement].m_oCle : undefined;
};

//////////////////////////////////////////////////////////////////////////
// Interface pour le WL

// Lire une propriete : a definir dans chaque type
WDTableauAssociatif.prototype.GetProp = function GetProp(nPropriete, oCle)
{
	switch (nPropriete)
	{
	case 23:
		// ..Occurrence
		if (undefined !== oCle)
		{
			var tabValeurs = this.__tabGetValeurs(oCle);
			return (undefined === tabValeurs) ? 0 : tabValeurs.length;
		}
		else
		{
			// ..Occurrence sur le tableau retourne le nombre total d'element et pas le nombre de cles.
			return this.m_tabElements.length;
		}
	case 24:
		// ..Vide
		return (0 == this.GetProp(23, oCle));
	default:
		return null;
	}
};

// Donne le contenu du tableau
WDTableauAssociatif.prototype.SetContenu = function SetContenu(oContenu)
{
	// Vide le tableau
	this.SupprimeTout();

	var i;
	var nLimiteI;
	if (WDTableau.__bEstAssociatif(oContenu))
	{
		// Si le contenu est un autre tableau associatif : copie
		var tabElements = oContenu.m_tabElements;
		nLimiteI = tabElements.length;
		for (i = 0; i < nLimiteI; i++)
		{
			var oValeur = tabElements[i];
			this.SetValeur(oValeur.m_oCle, oValeur.m_oValeur);
		}
	}
	else if (WDTableau.__bEstTableau(oContenu))
	{
		// Si le contenu est un tableau (normalement a double entree)
		nLimiteI = oContenu.length;
		for (i = 0; i < nLimiteI; i++)
		{
			var oUnContenu = oContenu[i];
			if (WDTableau.__bEstTableau(oUnContenu) && (2 == oUnContenu.length))
			{
				this.SetValeur(oUnContenu[0], oUnContenu[1]);
			}
		}
	}
};

// Fixe la valeur d'un element : Tableau[Valeur] = Xxx
WDTableauAssociatif.prototype.SetValeur = function SetValeur(oCle, oValeur)
{
	// Recherche la cle existante
	var tabValeurs = this.__tabGetValeurs(oCle);
	// Si elle n'existe pas : la cree
	if (undefined === tabValeurs)
	{
		tabValeurs = this.__tabCreeValeurs(oCle);
	}
	if (this.m_bAvecDoublon || (undefined === tabValeurs[0]))
	{
		// Avec doublons ou ou viens de creer la valeur : ajoute
		var oValeurComplet = { m_oCle: oCle, m_oValeur: oValeur };
		tabValeurs.push(oValeurComplet);
		this.m_tabElements.push(oValeurComplet);
	}
	else
	{
		// Remplace la valeur existante
		// this.m_tabElements a un alias sur cet objet donc on modifie les deux
		tabValeurs[0].m_oCle = oCle;
		tabValeurs[0].m_oValeur = oValeur;
	}
};

// Fixe la valeur indice d'un element : Tableau[Valeur, Indice] = Xxx
WDTableauAssociatif.prototype.SetValeurIndice = function SetValeurIndice(oCle, nIndice, oValeur)
{
	// Recherche la cle existante
	var tabValeurs = this.__tabGetValeurs(oCle);
	// Erreur si :
	// - La valeur n'existe pas
	// - Si l'indice n'existe pas (sans doublon cela couvre le cas de l'indice > 1)
	if ((undefined === tabValeurs) || (nIndice < 0) || (tabValeurs.length <= nIndice))
	{
		// Erreur
		return;
	}
	// Sinon l'element est modifie (= remplace)
	tabValeurs[nIndice].m_oCle = oCle;
	tabValeurs[nIndice].m_oValeur = oValeur;
};

// Lit la valeur d'un element : Tableau[Valeur]
WDTableauAssociatif.prototype.oGetValeur = function oGetValeur(oCle)
{
	if (this.m_bAvecDoublon)
	{
		// Avec doublons : syntaxe interdite
		// Erreur
		return undefined;
	}
	else
	{
		// Recherche la cle existante
		var tabValeurs = this.__tabGetValeurs(oCle);
		if (undefined !== tabValeurs)
		{
			// Existe : retourne la valeur
			return tabValeurs[0].m_oValeur;
		}
		else
		{
			// N'existe pas : valeur par defaut
			return this.m_oValeurParDefaut;
		}
	}
};

// Lit la valeur d'un element avec indice : Tableau[Valeur, nIndice]
WDTableauAssociatif.prototype.oGetValeurIndice = function oGetValeurIndice(oCle, nIndice)
{
	var oCouple = this.oGetValeurIndiceComplet(oCle, nIndice);
	return (undefined !== oCouple) ? oCouple.m_oValeur : this.m_oValeurParDefaut;
};

// Lit la valeur d'un element avec indice : Tableau[Valeur, nIndice] et retourne l'objet interne (Cle + Valeur)
WDTableauAssociatif.prototype.oGetValeurIndiceComplet = function oGetValeurIndiceComplet(oCle, nIndice)
{
	// Recherche la cle existante
	var tabValeurs = this.__tabGetValeurs(oCle);
	// Erreur si :
	// - La valeur n'existe pas
	// - Si l'indice n'existe pas (sans doublon cela couvre le cas de l'indice > 1)
	if ((undefined === tabValeurs) || (tabValeurs.length <= nIndice))
	{
		// Erreur
		return undefined;
	}
	// Existe : retourne la valeur
	return tabValeurs[nIndice];
};

// Lit la valeur d'un element par indice de creation
WDTableauAssociatif.prototype.oGetValeurDirect = function oGetValeurDirect(nElement, bAscendant)
{
	return this.m_tabElements[bAscendant ? nElement : (this.m_tabElements.length - 1 - nElement)];
};

// Supprime tout les elements du tableau
WDTableauAssociatif.prototype.SupprimeTout = function SupprimeTout()
{
	// Recree le tableau global des valeurs
	this.m_tabValeurs = [];
	this.m_tabElements = [];
};

// Supprime un elements du tableau
WDTableauAssociatif.prototype.nSupprime = function nSupprime(oCle)
{
	// Gestion des indices speciaux
	var oCleEffective = this.__oCalculIndiceEffectif(oCle);

	var nNbCleOccurrence = 0;

	// Recherche la cle existante
	var tabValeurs = this.__tabGetValeurs(oCleEffective);
	if (undefined !== tabValeurs)
	{
		// Memorise sa taille
		nNbCleOccurrence = tabValeurs.length;
		// Et la supprime
		delete this.m_tabValeurs[this.__sGetCle(oCleEffective)];
		// Supprime aussi les entrees dans m_tabElements
		var i;
		var nLimiteI = tabValeurs.length;
		for (i = 0; i < nLimiteI; i++)
		{
			clWDUtil.SupprimeDansTableau(this.m_tabElements, tabValeurs[i]);
		}
	}

	return nNbCleOccurrence;
};
