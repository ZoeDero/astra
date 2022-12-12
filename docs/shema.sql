CREATE TABLE article(
   Id_article VARCHAR(150),
   designation VARCHAR(150),
   description VARCHAR(150),
   prix DOUBLE,
   tx_tva DOUBLE,
   is_deleted BOOLEAN,
   PRIMARY KEY(Id_article)
);

CREATE TABLE image(
   Id_image VARCHAR(150),
   src VARCHAR(50),
   alt VARCHAR(50),
   is_deleted BOOLEAN,
   Id_article VARCHAR(150),
   PRIMARY KEY(Id_image),
   FOREIGN KEY(Id_article) REFERENCES article(Id_article)
);

CREATE TABLE categorie(
   Id_categorie VARCHAR(150),
   nom VARCHAR(50),
   is_deleted BOOLEAN,
   PRIMARY KEY(Id_categorie)
);

CREATE TABLE Role(
   Id_Role VARCHAR(150),
   title VARCHAR(50),
   weight INT,
   is_deleted INT,
   PRIMARY KEY(Id_Role)
);

CREATE TABLE compte(
   Id_compte VARCHAR(50),
   e_mail VARCHAR(150),
   mot_de_passe VARCHAR(50),
   is_deleted BOOLEAN,
   Id_Role  VARCHAR(150),
   PRIMARY KEY(Id_compte),
   UNIQUE(e_mail),
   FOREIGN KEY(Id_Role) REFERENCES Role(Id_Role)
);

CREATE TABLE utilisateur(
   Id_utilisateur VARCHAR(50),
   prenom VARCHAR(150),
   nom VARCHAR(50),
   adresse VARCHAR(50),
   is_deleted BOOLEAN,
   pseudo VARCHAR(50),
   Id_compte VARCHAR(50),
   PRIMARY KEY(Id_utilisateur),
   UNIQUE(Id_compte),
   UNIQUE(pseudo),
   FOREIGN KEY(Id_compte) REFERENCES compte(Id_compte)
);

CREATE TABLE panier(
   Id_panier VARCHAR(150),
   date_heure DATETIME,
   numero VARCHAR(50),
   status VARCHAR(50),
   is_deleted BOOLEAN,
   Id_utilisateur VARCHAR(50),
   PRIMARY KEY(Id_panier),
   FOREIGN KEY(Id_utilisateur) REFERENCES utilisateur(Id_utilisateur)
);

CREATE TABLE article_panier(
   Id_panier  VARCHAR(150),
   Id_article  VARCHAR(150),
   Id_article_panier VARCHAR(150),
   quantité INT,
   tx_tva VARCHAR(50),
   prix DOUBLE,
   is_deleted BOOLEAN,
   PRIMARY KEY(Id_panier, Id_article, Id_article_panier),
   FOREIGN KEY(Id_panier) REFERENCES panier(Id_panier),
   FOREIGN KEY(Id_article) REFERENCES article(Id_article)
);

CREATE TABLE categorise(
   Id_article  VARCHAR(150),
   Id_categorie  VARCHAR(150),
   PRIMARY KEY(Id_article, Id_categorie),
   FOREIGN KEY(Id_article) REFERENCES article(Id_article),
   FOREIGN KEY(Id_categorie) REFERENCES categorie(Id_categorie)
);
