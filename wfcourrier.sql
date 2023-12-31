-- Script généré par WebDev le 30/01/2016 11:38:06
-- Tables de l'analyse wfcourrier.wda
-- pour PostgreSQL

-- Création de la table acteurs_principaux
CREATE TABLE "acteurs_principaux" (
    "macle_repli_acteurs_principaux" VARCHAR(20)  NOT NULL  UNIQUE ,
    "Code_entite" VARCHAR(50) ,
    "macle_repli_utilisat" VARCHAR(20) ,
    "num_ordre" VARCHAR(4) ,
    "imputer_a" BOOL DEFAULT FALSE,
    "Macle_repli_imputation" VARCHAR(20) ,
    "fonctio_utilisateur" VARCHAR(75) ,
    "prenomnom" VARCHAR(75) ,
    "copie_a" BOOL DEFAULT FALSE,
    "au_plustard_le" DATE ,
    "code_destinater_imput" VARCHAR(20) ,
    "profil_utilisat" VARCHAR(75) );
CREATE INDEX "WDIDX_acteurs_principaux_Code_entite" ON "acteurs_principaux" ("Code_entite");
CREATE INDEX "WDIDX_acteurs_principaux_macle_repli_utilisat" ON "acteurs_principaux" ("macle_repli_utilisat");
CREATE INDEX "WDIDX_acteurs_principaux_num_ordre" ON "acteurs_principaux" ("num_ordre");
CREATE INDEX "WDIDX_acteurs_principaux_Macle_repli_imputation" ON "acteurs_principaux" ("Macle_repli_imputation");
CREATE INDEX "WDIDX_acteurs_principaux_prenomnom" ON "acteurs_principaux" ("prenomnom");

-- Création de la table Actio_demandees
CREATE TABLE "Actio_demandees" (
    "lib_action" VARCHAR(50) ,
    "etat_action" BOOL DEFAULT FALSE,
    "num_ordre" VARCHAR(2) ,
    "Macle_repli_imputation" VARCHAR(20) ,
    "macle_repli_actio_demandees" VARCHAR(23)  UNIQUE );
CREATE INDEX "WDIDX_Actio_demandees_Macle_repli_imputation" ON "Actio_demandees" ("Macle_repli_imputation");

-- Création de la table Actio_demandees_acteurs
CREATE TABLE "Actio_demandees_acteurs" (
    "lib_action" VARCHAR(50) ,
    "etat_action" BOOL DEFAULT FALSE,
    "num_ordre" VARCHAR(2) ,
    "Macle_repli_imputation" VARCHAR(20) ,
    "macle_repli_actio_demandees" VARCHAR(23)  UNIQUE ,
    "Macle_repli_acteurs_principaux" VARCHAR(20) );
CREATE INDEX "WDIDX_Actio_demandees_acteurs_Macle_repli_acteurs_principaux" ON "Actio_demandees_acteurs" ("Macle_repli_acteurs_principaux");

-- Création de la table Actions_predefinies
CREATE TABLE "Actions_predefinies" (
    "lib_action" VARCHAR(51) ,
    "num_ordre" VARCHAR(3) ,
    "est_actif" BOOL DEFAULT FALSE,
    "macle_repli_actions_predefinie" VARCHAR(20)  UNIQUE ,
    "Macle_repli" VARCHAR(20) ,
    "code_entite_niveau_1" VARCHAR(20) );
CREATE INDEX "WDIDX_Actions_predefinies_lib_action" ON "Actions_predefinies" ("lib_action");
CREATE INDEX "WDIDX_Actions_predefinies_num_ordre" ON "Actions_predefinies" ("num_ordre");
CREATE INDEX "WDIDX_Actions_predefinies_Macle_repli" ON "Actions_predefinies" ("Macle_repli");

-- Création de la table aefacer
CREATE TABLE "aefacer" (
    "IDaefacer" SERIAL8  PRIMARY KEY ,
    "Des_directio" VARCHAR(100) );

-- Création de la table AgendaEvénement
CREATE TABLE "AgendaEvénement" (
    "IDAgendaEvénement" SERIAL4  PRIMARY KEY ,
    "Auteur" VARCHAR(256) ,
    "Titre" VARCHAR(256) ,
    "Contenu" TEXT ,
    "DateDébut" TIMESTAMP ,
    "DateFin" TIMESTAMP ,
    "Invités" TEXT ,
    "Lieu" TEXT ,
    "RépétitionType" INTEGER ,
    "RépétitionOccurrence" INTEGER ,
    "RépétitionDateFin" TIMESTAMP ,
    "RépétitionTypeFin" INTEGER ,
    "Catégorie" VARCHAR(256) ,
    "Importance" INTEGER ,
    "Image" BYTEA ,
    "Note" TEXT ,
    "AvecRépétition" BOOL ,
    "Ressource" VARCHAR(50) ,
    "Macle_repli_utilisat" VARCHAR(20) );
CREATE INDEX "WDIDX_AgendaEvénement_Auteur" ON "AgendaEvénement" ("Auteur");
CREATE INDEX "WDIDX_AgendaEvénement_Titre" ON "AgendaEvénement" ("Titre");
CREATE INDEX "WDIDX_AgendaEvénement_Catégorie" ON "AgendaEvénement" ("Catégorie");
CREATE INDEX "WDIDX_AgendaEvénement_Macle_repli_utilisat" ON "AgendaEvénement" ("Macle_repli_utilisat");

-- Création de la table Arrivees
CREATE TABLE "Arrivees" (
    "code_ar" VARCHAR(50)  UNIQUE ,
    "Ref_exp" VARCHAR(50) ,
    "Des_exp" VARCHAR(200) ,
    "Doc_status" VARCHAR(200) ,
    "Date_recep" DATE ,
    "Délai_trait_prev" INTEGER DEFAULT 0,
    "déb_prev_trait" DATE ,
    "déb_reel_trait" DATE ,
    "fin_prev" DATE ,
    "fin_reel" DATE ,
    "Délai_trait_reel" INTEGER DEFAULT 0,
    "comp_doc" VARCHAR(200) ,
    "doc_fin_proc" BOOL DEFAULT FALSE,
    "Ref_archi" VARCHAR(50) ,
    "taux_cons_delai" REAL DEFAULT 0,
    "objet_doc" VARCHAR(500) ,
    "derniere_imputation" VARCHAR(20) DEFAULT '0',
    "phase_courante" VARCHAR(50) ,
    "urgent" SMALLINT DEFAULT 1,
    "type_origine" SMALLINT DEFAULT 1,
    "fic_doc" VARCHAR(255) ,
    "Lib_type_cou" VARCHAR(50) ,
    "etat_transmission" SMALLINT DEFAULT 0,
    "confidentiel" SMALLINT DEFAULT 0,
    "délai_trait_theorique" INTEGER DEFAULT 0,
    "heure_recep" TIME ,
    "code_contact" VARCHAR(50) ,
    "Code_directio" VARCHAR(50) ,
    "Des_directio" VARCHAR(100) ,
    "num_depart" VARCHAR(50) ,
    "macle_repli_arrivee" VARCHAR(20)  NOT NULL  UNIQUE ,
    "Macle_repli" VARCHAR(20) ,
    "date_enregistrement" DATE ,
    "heure_enregistrement" TIME ,
    "numero_enregistrement_courrier" VARCHAR(50)  UNIQUE ,
    "est_actif" BOOL DEFAULT FALSE,
    "date_transmission_bc" DATE ,
    "heure_transmission_bc" TIME ,
    "Macle_repli_e_parapheur_arrivees" VARCHAR(20) ,
    "qui_voit" VARCHAR(500) ,
    "Imputation_multiple" BOOL DEFAULT FALSE,
    "Imputation_multiple_a" VARCHAR(500) ,
    "enregistre_par" VARCHAR(75) ,
    "fic_doc_serveur" VARCHAR(255) ,
    "etat_avance" VARCHAR(75) ,
    "macle_repli_depart" VARCHAR(20) ,
    "date_archive" DATE ,
    "stat_etat_avance" VARCHAR(50) ,
    "ref_archi1" VARCHAR(50) ,
    "date_fin_archivage1" DATE ,
    "date_fin_archivage2" DATE ,
    "a_classer" BOOL DEFAULT FALSE,
    "ampliataires" VARCHAR(500) ,
    "fic_fond_dossier" VARCHAR(255) ,
    "fic_fond_dossier_serveur" VARCHAR(255) ,
    "contenu_lettre_accompagnement" TEXT ,
    "contenu_fond_dossier" TEXT ,
    "date_inscrite_sur_courrier" DATE ,
    "transmis_par" VARCHAR(50) );
CREATE INDEX "WDIDX_Arrivees_derniere_imputation" ON "Arrivees" ("derniere_imputation");
CREATE INDEX "WDIDX_Arrivees_Lib_type_cou" ON "Arrivees" ("Lib_type_cou");
CREATE INDEX "WDIDX_Arrivees_Macle_repli" ON "Arrivees" ("Macle_repli");
CREATE INDEX "WDIDX_Arrivees_Macle_repli_e_parapheur_arrivees" ON "Arrivees" ("Macle_repli_e_parapheur_arrivees");

-- Création de la table carriere
CREATE TABLE "carriere" (
    "Macle_repli_utilisat" VARCHAR(20)  NOT NULL ,
    "Macle_repli" VARCHAR(20)  NOT NULL ,
    "fonctio_utilisateur" VARCHAR(75)  NOT NULL ,
    "sup_hierarchie" VARCHAR(20)  NOT NULL ,
    "situation_active" BOOL  NOT NULL  DEFAULT FALSE,
    "macle_repli_carriere" VARCHAR(20)  NOT NULL  UNIQUE ,
    "type_mouvement" SMALLINT  NOT NULL  DEFAULT 0,
    "date_mouvement" DATE  NOT NULL ,
    "reference_mvt" VARCHAR(50)  NOT NULL );
CREATE INDEX "WDIDX_carriere_Macle_repli_utilisat" ON "carriere" ("Macle_repli_utilisat");
CREATE INDEX "WDIDX_carriere_Macle_repli" ON "carriere" ("Macle_repli");

-- Création de la table chrono_arrivees
CREATE TABLE "chrono_arrivees" (
    "IDchrono_arrivees" SERIAL8  PRIMARY KEY ,
    "dernier_num_chrono" INTEGER DEFAULT 0);

-- Création de la table classer_archiver
CREATE TABLE "classer_archiver" (
    "qui_classe" VARCHAR(50) ,
    "qui_archive" VARCHAR(50) ,
    "code_entite_niveau_1" VARCHAR(20) ,
    "macle_repli" VARCHAR(20) ,
    "idclasser_archiver" SERIAL4  PRIMARY KEY );
CREATE INDEX "WDIDX_classer_archiver_qui_classe" ON "classer_archiver" ("qui_classe");
CREATE INDEX "WDIDX_classer_archiver_qui_archive" ON "classer_archiver" ("qui_archive");
CREATE INDEX "WDIDX_classer_archiver_macle_repli" ON "classer_archiver" ("macle_repli");
CREATE INDEX "WDIDX_classer_archiver_qui_classemacle_repli" ON "classer_archiver" ("qui_classe","macle_repli");
CREATE INDEX "WDIDX_classer_archiver_qui_archivemacle_repli" ON "classer_archiver" ("qui_archive","macle_repli");

-- Création de la table Copie_a
CREATE TABLE "Copie_a" (
    "macle_repli_copie_a" VARCHAR(20)  UNIQUE  DEFAULT '0',
    "Macle_repli_imputation" VARCHAR(20) ,
    "macle_repli_utilisat" VARCHAR(20) );
CREATE INDEX "WDIDX_Copie_a_Macle_repli_imputation" ON "Copie_a" ("Macle_repli_imputation");
CREATE INDEX "WDIDX_Copie_a_macle_repli_utilisat" ON "Copie_a" ("macle_repli_utilisat");

-- Création de la table courrier_public
CREATE TABLE "courrier_public" (
    "macle_repli_courrier_public" VARCHAR(50)  UNIQUE ,
    "date_mouvement" DATE ,
    "des_mouvement" VARCHAR(150) ,
    "Macle_repli_arrivee" VARCHAR(20) );
CREATE INDEX "WDIDX_courrier_public_Macle_repli_arrivee" ON "courrier_public" ("Macle_repli_arrivee");

-- Création de la table departs
CREATE TABLE "departs" (
    "macle_repli_departs" VARCHAR(20)  NOT NULL  UNIQUE ,
    "numero_enregistrement" VARCHAR(20)  UNIQUE ,
    "date_envoi" DATE ,
    "objet_doc" VARCHAR(500) ,
    "destinat" VARCHAR(200) ,
    "ref_destinataire" VARCHAR(50) ,
    "rep_cour_arrivee" VARCHAR(20) ,
    "type_origine" SMALLINT DEFAULT 0,
    "temps_reponse" INTEGER DEFAULT 0,
    "repondu" BOOL DEFAULT FALSE,
    "date_signature" DATE ,
    "date_remise_courrier" DATE ,
    "fic_doc" VARCHAR(255) ,
    "ampliataires" VARCHAR(500) ,
    "Macle_repli_arrivee" VARCHAR(20) ,
    "etat_avance" VARCHAR(75) ,
    "confidentiel" SMALLINT DEFAULT 0,
    "urgent" SMALLINT DEFAULT 0,
    "date_enregistrement" DATE ,
    "adress_inconnu" BOOL DEFAULT FALSE,
    "Macle_repli" VARCHAR(20) ,
    "heure_enregistrement" TIME ,
    "enregistre_par" VARCHAR(75) ,
    "date_fin_prev_arrivee" DATE ,
    "ecart_num" INTEGER DEFAULT 0,
    "ecart_text" VARCHAR(50) ,
    "fic_doc_serveur" VARCHAR(255) ,
    "a_transferer" BOOL DEFAULT FALSE,
    "il_la_transfere" BOOL DEFAULT FALSE);
CREATE INDEX "WDIDX_departs_Macle_repli_arrivee" ON "departs" ("Macle_repli_arrivee");
CREATE INDEX "WDIDX_departs_Macle_repli" ON "departs" ("Macle_repli");

-- Création de la table destinater
CREATE TABLE "destinater" (
    "macle_repli_destinater" VARCHAR(50)  UNIQUE ,
    "macle_repli_partenaire" VARCHAR(20) ,
    "Macle_repli_departs" VARCHAR(20) ,
    "sigle_patenaire" VARCHAR(50) ,
    "fait_partie_ministere" BOOL DEFAULT FALSE,
    "structure_intern" BOOL DEFAULT FALSE);
CREATE INDEX "WDIDX_destinater_macle_repli_partenaire" ON "destinater" ("macle_repli_partenaire");
CREATE INDEX "WDIDX_destinater_Macle_repli_departs" ON "destinater" ("Macle_repli_departs");
CREATE INDEX "WDIDX_destinater_sigle_patenaire" ON "destinater" ("sigle_patenaire");
CREATE INDEX "WDIDX_destinater_Macle_repli_departsmacle_repli_partenaire" ON "destinater" ("Macle_repli_departs","macle_repli_partenaire");

-- Création de la table e_parapheur_arrivees
CREATE TABLE "e_parapheur_arrivees" (
    "macle_repli_e_parapheur_arrivees" VARCHAR(20)  NOT NULL  UNIQUE ,
    "date_e_parapheur" DATE ,
    "numero_e_parapheur" VARCHAR(2) ,
    "a_ete_transmis" BOOL DEFAULT FALSE,
    "Macle_repli" VARCHAR(20) );
CREATE INDEX "WDIDX_e_parapheur_arrivees_date_e_parapheur" ON "e_parapheur_arrivees" ("date_e_parapheur");
CREATE INDEX "WDIDX_e_parapheur_arrivees_Macle_repli" ON "e_parapheur_arrivees" ("Macle_repli");

-- Création de la table fic_reponses
CREATE TABLE "fic_reponses" (
    "fic_doc" VARCHAR(255) ,
    "date_envoi" DATE ,
    "Macle_repli_imputation" VARCHAR(20) ,
    "macle_repli_macle_repli_fic_reponses" VARCHAR(50)  UNIQUE ,
    "titre_doc" VARCHAR(100) ,
    "fic_doc_serveur" VARCHAR(255) );
CREATE INDEX "WDIDX_fic_reponses_Macle_repli_imputation" ON "fic_reponses" ("Macle_repli_imputation");

-- Création de la table fic_temp_imputation
CREATE TABLE "fic_temp_imputation" (
    "macle_repli_imputation" VARCHAR(20)  UNIQUE ,
    "Date_recep" DATE ,
    "fin_prev" DATE ,
    "fin_reel" DATE ,
    "otr_instruction" VARCHAR(200) ,
    "anotation_cpl" VARCHAR(400) ,
    "Instruct_a_executer" VARCHAR(300) ,
    "obs_impuation" VARCHAR(300) ,
    "valid_imput" BOOL DEFAULT FALSE,
    "date_imputation" DATE ,
    "acteur" VARCHAR(200) ,
    "acteur_pas_principe" VARCHAR(200) ,
    "exec_avant_imputation" VARCHAR(300) ,
    "nat_imputation" VARCHAR(15) ,
    "fic_doc" VARCHAR(255) ,
    "Fontio" VARCHAR(75) ,
    "Macle_repli_arrivee" VARCHAR(20) ,
    "confidentiel" SMALLINT DEFAULT 0,
    "urgent" SMALLINT DEFAULT 0,
    "date_fin_theorique" DATE ,
    "heure_imputation" TIME ,
    "Destinater" VARCHAR(50) ,
    "Reponse_lue" BOOL DEFAULT FALSE,
    "Reponse_transmise" BOOL DEFAULT FALSE,
    "valid_reponse" BOOL DEFAULT FALSE,
    "valid_cloture" BOOL DEFAULT FALSE,
    "valid_rejet" BOOL DEFAULT FALSE,
    "provenance" VARCHAR(100) ,
    "etat_avance" VARCHAR(75) ,
    "taux_cons_delai" REAL DEFAULT 0,
    "imputation_premier_niveau" BOOL DEFAULT FALSE,
    "Code_acteur_imput" VARCHAR(20) ,
    "code_destinater_imput" VARCHAR(20) ,
    "Code_entite_acteur" VARCHAR(50) ,
    "Code_entite_destinater" VARCHAR(50) ,
    "imputation_decompose" BOOL DEFAULT FALSE,
    "niveau" INTEGER DEFAULT 0,
    "stat_etat_avance" VARCHAR(50) );
CREATE INDEX "WDIDX_fic_temp_imputation_Macle_repli_arrivee" ON "fic_temp_imputation" ("Macle_repli_arrivee");

-- Création de la table Imputation
CREATE TABLE "Imputation" (
    "macle_repli_imputation" VARCHAR(20)  NOT NULL  UNIQUE ,
    "Date_recep" DATE ,
    "fin_prev" DATE ,
    "fin_reel" DATE ,
    "otr_instruction" VARCHAR(200) ,
    "anotation_cpl" VARCHAR(400) ,
    "Instruct_a_executer" VARCHAR(300) ,
    "obs_impuation" VARCHAR(300) ,
    "valid_imput" BOOL DEFAULT FALSE,
    "date_imputation" DATE ,
    "acteur" VARCHAR(200) ,
    "acteur_pas_principe" VARCHAR(200) ,
    "exec_avant_imputation" VARCHAR(300) ,
    "nat_imputation" VARCHAR(15) ,
    "fic_doc" VARCHAR(255) ,
    "Fontio" VARCHAR(75) ,
    "Macle_repli_arrivee" VARCHAR(20) ,
    "confidentiel" SMALLINT DEFAULT 0,
    "urgent" SMALLINT DEFAULT 0,
    "date_fin_theorique" DATE ,
    "heure_imputation" TIME ,
    "Destinater" VARCHAR(50) ,
    "Reponse_lue" BOOL DEFAULT FALSE,
    "Reponse_transmise" BOOL DEFAULT FALSE,
    "valid_reponse" BOOL DEFAULT FALSE,
    "valid_cloture" BOOL DEFAULT FALSE,
    "valid_rejet" BOOL DEFAULT FALSE,
    "provenance" VARCHAR(100) ,
    "etat_avance" VARCHAR(75) ,
    "taux_cons_delai" REAL DEFAULT 0,
    "imputation_premier_niveau" BOOL DEFAULT FALSE,
    "Code_acteur_imput" VARCHAR(20) ,
    "code_destinater_imput" VARCHAR(20) ,
    "Code_entite_acteur" VARCHAR(50) ,
    "Code_entite_destinater" VARCHAR(50) ,
    "imputation_decompose" BOOL DEFAULT FALSE,
    "niveau" INTEGER DEFAULT 0,
    "stat_etat_avance" VARCHAR(50) ,
    "Code_imputation_non_decomp" VARCHAR(50) ,
    "imputation_enregistre_ou_valide" BOOL DEFAULT FALSE,
    "qui_a_saisi_imputation" VARCHAR(50) ,
    "numero_ariv" VARCHAR(50) ,
    "objet_cou" VARCHAR(500) ,
    "date_recep_cou" DATE ,
    "Ref_exp" VARCHAR(50) ,
    "Des_exp" VARCHAR(200) ,
    "Coordinateur" VARCHAR(20) );
CREATE INDEX "WDIDX_Imputation_Macle_repli_arrivee" ON "Imputation" ("Macle_repli_arrivee");

-- Création de la table jours_feries
CREATE TABLE "jours_feries" (
    "date_ferie" DATE  UNIQUE ,
    "des_ferie" VARCHAR(50) );

-- Création de la table organisations_admin
CREATE TABLE "organisations_admin" (
    "Code_entite" VARCHAR(50) ,
    "des_entite" VARCHAR(200) ,
    "Code_parent_entite" VARCHAR(20) DEFAULT '0',
    "num_ordre" VARCHAR(4) ,
    "macle_repli" VARCHAR(20)  NOT NULL  UNIQUE ,
    "niveau" INTEGER DEFAULT 0,
    "fic_doc" VARCHAR(255) ,
    "der_num_arrivee" INTEGER DEFAULT 0,
    "der_num_depart" INTEGER DEFAULT 0,
    "der_num_internet" INTEGER DEFAULT 0,
    "der_num_arrivee_interne" INTEGER DEFAULT 0,
    "der_num_arrivee_confi" INTEGER DEFAULT 0,
    "Macle_repli_utilisat" VARCHAR(20) ,
    "macle_assistante" VARCHAR(50) ,
    "racine_code_courrier" VARCHAR(50) ,
    "imprime_formulaire_avec_acteurs" BOOL DEFAULT FALSE,
    "est_actif" BOOL DEFAULT FALSE,
    "fait_plus_partie_wfcourrier" BOOL DEFAULT FALSE,
    "der_num_depart_confi" INTEGER DEFAULT 0,
    "code_entite_niveau_1" VARCHAR(20) ,
    "der_num_depart_interne" INTEGER DEFAULT 0);
CREATE INDEX "WDIDX_organisations_admin_Code_entite" ON "organisations_admin" ("Code_entite");
CREATE INDEX "WDIDX_organisations_admin_des_entite" ON "organisations_admin" ("des_entite");
CREATE INDEX "WDIDX_organisations_admin_Code_parent_entite" ON "organisations_admin" ("Code_parent_entite");
CREATE INDEX "WDIDX_organisations_admin_num_ordre" ON "organisations_admin" ("num_ordre");
CREATE INDEX "WDIDX_organisations_admin_Macle_repli_utilisat" ON "organisations_admin" ("Macle_repli_utilisat");
CREATE INDEX "WDIDX_organisations_admin_Code_parent_entiteCode_entite" ON "organisations_admin" ("Code_parent_entite","Code_entite","est_actif");

-- Création de la table param_archivage
CREATE TABLE "param_archivage" (
    "IDparam_archivage" SERIAL8  PRIMARY KEY ,
    "duree_premier_age" INTEGER DEFAULT 0,
    "duree_second_age" INTEGER DEFAULT 0);

-- Création de la table param_fonctio
CREATE TABLE "param_fonctio" (
    "IDparam_fonctio" SERIAL8  PRIMARY KEY ,
    "Des_fonc" VARCHAR(100) );

-- Création de la table param_jours_feries
CREATE TABLE "param_jours_feries" (
    "date_ferie" DATE  UNIQUE ,
    "des_ferie" VARCHAR(50) );

-- Création de la table partenaires
CREATE TABLE "partenaires" (
    "sigle_patenaire" VARCHAR(50) ,
    "des_partenaire" VARCHAR(200) ,
    "tel_partenaire" VARCHAR(50) ,
    "fax_partenaire" VARCHAR(50) ,
    "adress_partenaire" VARCHAR(100) ,
    "email_partenaire" VARCHAR(50) ,
    "poser_alerte" BOOL DEFAULT FALSE,
    "macle_repli_partenaire" VARCHAR(20)  UNIQUE ,
    "Macle_repli_type_partenaire" VARCHAR(20) ,
    "macle_repli" VARCHAR(20) ,
    "structure_intern" BOOL DEFAULT FALSE,
    "code_entite_niveau_1" VARCHAR(20) );
CREATE INDEX "WDIDX_partenaires_sigle_patenaire" ON "partenaires" ("sigle_patenaire");
CREATE INDEX "WDIDX_partenaires_des_partenaire" ON "partenaires" ("des_partenaire");
CREATE INDEX "WDIDX_partenaires_Macle_repli_type_partenaire" ON "partenaires" ("Macle_repli_type_partenaire");
CREATE INDEX "WDIDX_partenaires_macle_repli" ON "partenaires" ("macle_repli");
CREATE INDEX "WDIDX_partenaires_code_entite_niveau_1" ON "partenaires" ("code_entite_niveau_1");

-- Création de la table profil_utilisat
CREATE TABLE "profil_utilisat" (
    "IDprofil_utilisat" SERIAL4  PRIMARY KEY ,
    "des_profil" VARCHAR(75)  UNIQUE );

-- Création de la table type_courrier
CREATE TABLE "type_courrier" (
    "code_type_courrier" VARCHAR(20)  UNIQUE ,
    "des_type_courrier" VARCHAR(50) ,
    "delai_traitement" INTEGER DEFAULT 0,
    "Macle_repli" VARCHAR(20) ,
    "unite_de_mesure" VARCHAR(10) ,
    "obs_type" VARCHAR(150) ,
    "descripti" VARCHAR(150) ,
    "code_entite_niveau_1" VARCHAR(20) );
CREATE INDEX "WDIDX_type_courrier_des_type_courrier" ON "type_courrier" ("des_type_courrier");
CREATE INDEX "WDIDX_type_courrier_Macle_repli" ON "type_courrier" ("Macle_repli");
CREATE INDEX "WDIDX_type_courrier_Macle_replides_type_courrier" ON "type_courrier" ("Macle_repli","des_type_courrier");

-- Création de la table type_partenaire
CREATE TABLE "type_partenaire" (
    "des_type_partenaire" VARCHAR(75) ,
    "macle_repli_type_partenaire" VARCHAR(20)  NOT NULL  UNIQUE ,
    "Macle_repli" VARCHAR(20) ,
    "code_entite_niveau_1" VARCHAR(20) );
CREATE INDEX "WDIDX_type_partenaire_des_type_partenaire" ON "type_partenaire" ("des_type_partenaire");
CREATE INDEX "WDIDX_type_partenaire_Macle_repli" ON "type_partenaire" ("Macle_repli");

-- Création de la table utiilisat
CREATE TABLE "utiilisat" (
    "prenomnom" VARCHAR(75) ,
    "macle_repli_utilisat" VARCHAR(20)  NOT NULL  UNIQUE ,
    "email_utilisat" VARCHAR(50) ,
    "tel_utilisat" VARCHAR(20) ,
    "code_entite_niveau_1" VARCHAR(20) ,
    "fonctio_utilisateur" VARCHAR(75) ,
    "sup_hierarchie" VARCHAR(20) ,
    "profil_utilisat" VARCHAR(75) ,
    "Macle_repli" VARCHAR(20) ,
    "num_ordre" VARCHAR(4) ,
    "est_actif" BOOL DEFAULT FALSE,
    "se_connecte" BOOL DEFAULT FALSE,
    "Code_utilisat" VARCHAR(20) ,
    "direction_pourquel_il_gere_courrier" VARCHAR(50) ,
    "bureau_courrier_principal" BOOL DEFAULT FALSE,
    "bureau_courrier_secondaire" BOOL DEFAULT FALSE,
    "autorite_comp_principal" BOOL DEFAULT FALSE,
    "autorite_comp_secondaire" BOOL DEFAULT FALSE,
    "assistante_principale" BOOL DEFAULT FALSE,
    "assistante_secondaire" BOOL DEFAULT FALSE,
    "matricule" VARCHAR(50) ,
    "prenom" VARCHAR(75) ,
    "direction_pour_le_quel_il_administre" VARCHAR(50) ,
    "nom_famille" VARCHAR(50) );
CREATE INDEX "WDIDX_utiilisat_prenomnom" ON "utiilisat" ("prenomnom");
CREATE INDEX "WDIDX_utiilisat_Macle_repli" ON "utiilisat" ("Macle_repli");
CREATE INDEX "WDIDX_utiilisat_num_ordre" ON "utiilisat" ("num_ordre");
CREATE INDEX "WDIDX_utiilisat_Code_utilisat" ON "utiilisat" ("Code_utilisat");
-- Contraintes d'intégrité
ALTER TABLE "type_courrier" ADD FOREIGN KEY ("Macle_repli") REFERENCES "organisations_admin" ("macle_repli");
ALTER TABLE "Actions_predefinies" ADD FOREIGN KEY ("Macle_repli") REFERENCES "organisations_admin" ("macle_repli");
ALTER TABLE "partenaires" ADD FOREIGN KEY ("Macle_repli_type_partenaire") REFERENCES "type_partenaire" ("macle_repli_type_partenaire");
ALTER TABLE "utiilisat" ADD FOREIGN KEY ("Macle_repli") REFERENCES "organisations_admin" ("macle_repli");
ALTER TABLE "carriere" ADD FOREIGN KEY ("Macle_repli_utilisat") REFERENCES "utiilisat" ("macle_repli_utilisat");
ALTER TABLE "Arrivees" ADD FOREIGN KEY ("Macle_repli") REFERENCES "organisations_admin" ("macle_repli");
ALTER TABLE "Arrivees" ADD FOREIGN KEY ("Macle_repli_e_parapheur_arrivees") REFERENCES "e_parapheur_arrivees" ("macle_repli_e_parapheur_arrivees");
ALTER TABLE "Imputation" ADD FOREIGN KEY ("Macle_repli_arrivee") REFERENCES "Arrivees" ("macle_repli_arrivee");
ALTER TABLE "Actio_demandees" ADD FOREIGN KEY ("Macle_repli_imputation") REFERENCES "Imputation" ("macle_repli_imputation");
ALTER TABLE "Copie_a" ADD FOREIGN KEY ("Macle_repli_imputation") REFERENCES "Imputation" ("macle_repli_imputation");
ALTER TABLE "acteurs_principaux" ADD FOREIGN KEY ("Macle_repli_imputation") REFERENCES "Imputation" ("macle_repli_imputation");
ALTER TABLE "fic_reponses" ADD FOREIGN KEY ("Macle_repli_imputation") REFERENCES "Imputation" ("macle_repli_imputation");
ALTER TABLE "departs" ADD FOREIGN KEY ("Macle_repli_arrivee") REFERENCES "Arrivees" ("macle_repli_arrivee");
ALTER TABLE "departs" ADD FOREIGN KEY ("Macle_repli") REFERENCES "organisations_admin" ("macle_repli");
ALTER TABLE "organisations_admin" ADD FOREIGN KEY ("Macle_repli_utilisat") REFERENCES "utiilisat" ("macle_repli_utilisat");
ALTER TABLE "courrier_public" ADD FOREIGN KEY ("Macle_repli_arrivee") REFERENCES "Arrivees" ("macle_repli_arrivee");
ALTER TABLE "e_parapheur_arrivees" ADD FOREIGN KEY ("Macle_repli") REFERENCES "organisations_admin" ("macle_repli");
ALTER TABLE "Actio_demandees_acteurs" ADD FOREIGN KEY ("Macle_repli_acteurs_principaux") REFERENCES "acteurs_principaux" ("macle_repli_acteurs_principaux");
ALTER TABLE "destinater" ADD FOREIGN KEY ("Macle_repli_departs") REFERENCES "departs" ("macle_repli_departs");
ALTER TABLE "partenaires" ADD FOREIGN KEY ("macle_repli") REFERENCES "organisations_admin" ("macle_repli");
