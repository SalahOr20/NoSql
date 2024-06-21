# Étape 1 : Construction de l'application
FROM node:18 AS builder

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Étape 2 : Servir l'application construite avec un serveur Node.js simple
FROM node:18

WORKDIR /app

# Copier les fichiers de l'application construite depuis l'étape de build
COPY --from=builder /app/build ./build

# Installer un serveur HTTP simple
RUN npm install -g serve

# Exposer le port 3000
EXPOSE 3000

# Démarrer le serveur pour servir les fichiers de l'application
CMD ["serve", "-s", "build", "-l", "3000"]
