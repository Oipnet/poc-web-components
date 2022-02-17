# POC Web components

## Lancement du projet
Pour lancer le projet le plus simple est d'utiliser parcel (bundler identique a Webpack sans configuration)

**Prerequis :** Installer npm

`npx parcel src/index.html`

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
- Séparer le html du js dans les composants