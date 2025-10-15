# Projet Web Simple

Un projet web basique pour apprendre les fondamentaux de Git.

## Concepts Git Essentiels

### 📦 Repository (Dépôt)
Un **repository** (ou "repo") est un espace de stockage pour votre projet. Il contient tous les fichiers de votre projet ainsi que l'historique complet de toutes les modifications effectuées. Il peut être local (sur votre machine) ou distant (sur GitHub, GitLab, etc.).

### 💾 Commit
Un **commit** est comme une photo instantanée de votre projet à un moment précis. Chaque commit enregistre :
- Les modifications apportées aux fichiers
- Un message décrivant les changements
- L'auteur et la date
- Un identifiant unique (hash)

Les commits permettent de :
- Garder un historique de toutes les modifications
- Revenir à une version précédente si nécessaire
- Comprendre l'évolution du projet

### 🌿 Branches
Une **branche** est une ligne de développement indépendante. Elle permet de :
- Travailler sur de nouvelles fonctionnalités sans affecter le code principal
- Tester des idées sans risque
- Collaborer avec plusieurs développeurs simultanément

La branche principale s'appelle généralement `main` ou `master`. Vous pouvez créer autant de branches que nécessaire pour organiser votre travail.

### 🔀 Merge (Fusion)
Le **merge** est l'action de fusionner deux branches ensemble. Cela permet de :
- Intégrer les modifications d'une branche dans une autre
- Combiner le travail de plusieurs développeurs
- Rassembler les fonctionnalités développées séparément

Exemple : Une fois une fonctionnalité terminée sur une branche de développement, on la merge dans la branche principale.

## Structure du Projet

```
supervisioning/
├── index.html    # Page web principale
├── style.css     # Styles CSS
├── script.js     # Code JavaScript
└── README.md     # Documentation
```

## Utilisation

Ouvrez simplement le fichier `index.html` dans votre navigateur pour voir le projet en action.