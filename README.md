# POC Web components

## Lancement du projet
Pour lancer le projet le plus simple est d'utiliser parcel (bundler identique a Webpack sans configuration)

**Prerequis :** Installer npm

`npx parcel src/index.html`

## Besoin initial
Pouvoir utiliser le même outil sur plusieurs applications.

- Chaque application doit pouvoir personnaliser le design de l'outil
- On doit pouvoir surcharger l'outil pour une application

Ne pas dupliquer le code sur chaque application.

Les composants doivent pouvoir fonctionner de manière autonome et effectuer des appel à une API.

## Presentation
- Le dossier component : Contient les composant de notre application
- Le dossier js : contient le javascript de notre application

Dans le fichier __app.js__ nous importons nos différents composant nécessaire au fonctionnement de l'application.

Grace à l'utiolisation de slot dans les composant nous pouvons inserer les composant que nous voulons à l'interieur. De cette facon l'affichage peut-etre simplement personalisé.

Le composant __calculateur-steper.js__ contient la logique necessaire au passage d'une étape à l'autre.

Il est possible maintenant d'imaginer que chaque composant d'étape fait son travail, accède à la bdd via une api...

La personnalisation du design se fait grâce a l'utilisation de variable CSS car les webcomposants sont isolés.

## Reste a étudier
- La communication entre les composants
- Les appels API
- Améliorer la personalisation du design
- ~~Séparer le html du js dans les composants~~
- Afficher un attribut dans le template et dynamiser le render
- Comment réutiliser les compsant au sein des différentes application en ayant besoin (package npm, clone du repo...)