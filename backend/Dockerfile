# Utilisation de l'image officielle Node.js version 14 comme base
FROM node:20

# Définition du répertoire de travail dans le conteneur
WORKDIR /app

# Copie du package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers du projet
COPY . .

# Exposer le port 5000 pour que l'application Express soit accessible
EXPOSE 5000

# Commande pour démarrer l'application Express
CMD ["node", "server.js"]
