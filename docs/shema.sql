CREATE TABLE compte(
   Id_compte VARCHAR(255),
   e_mail VARCHAR(255),
   mot_de_passe VARCHAR(255),
   is_deleted BOOLEAN,
   PRIMARY KEY(Id_compte),
   UNIQUE(e_mail)
);

CREATE TABLE article(
   Id_article INT AUTO_INCREMENT,
   designation VARCHAR(255),
   description VARCHAR(255),
   prix DOUBLE,
   tx_tva DOUBLE,
   is_deleted BOOLEAN,
   PRIMARY KEY(Id_article)
);

CREATE TABLE image(
   Id_image INT AUTO_INCREMENT,
   src VARCHAR(255),
   alt VARCHAR(255),
   is_deleted BOOLEAN,
   Id_article INT,
   PRIMARY KEY(Id_image),
   FOREIGN KEY(Id_article) REFERENCES article(Id_article)
);

CREATE TABLE utilisateur(
   Id_utilisateur VARCHAR(255),
   prenom VARCHAR(255),
   nom VARCHAR(255),
   adresse VARCHAR(255),
   is_deleted BOOLEAN,
   pseudo VARCHAR(255),
   Id_compte VARCHAR(255),
   PRIMARY KEY(Id_utilisateur),
   UNIQUE(Id_compte),
   UNIQUE(pseudo),
   FOREIGN KEY(Id_compte) REFERENCES compte(Id_compte)
);

CREATE TABLE panier(
   Id_panier INT AUTO_INCREMENT,
   date_heure DATETIME,
   numero VARCHAR(255),
   status VARCHAR(255),
   is_deleted BOOLEAN,
   Id_utilisateur VARCHAR(255),
   PRIMARY KEY(Id_panier),
   FOREIGN KEY(Id_utilisateur) REFERENCES utilisateur(Id_utilisateur)
);

CREATE TABLE article_panier(
   Id_panier INT,
   Id_article INT,
   Id_article_panier INT AUTO_INCREMENT,
   quantité INT,
   tx_tva VARCHAR(255),
   prix DOUBLE,
   is_deleted BOOLEAN,
   PRIMARY KEY(Id_article_panier),
   FOREIGN KEY(Id_panier) REFERENCES panier(Id_panier),
   FOREIGN KEY(Id_article) REFERENCES article(Id_article)
);
