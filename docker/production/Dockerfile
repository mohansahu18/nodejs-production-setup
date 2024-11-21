# Using specific Node.js version 21.7.1 on Alpine
FROM node:21.7.1-alpine AS base

# Setting Up Working Directory
WORKDIR /usr/src/backend-app

# Copying Package Files
COPY package*.json ./

# Install dependencies, including dev dependencies needed for build
RUN npm ci

# Copying Files
COPY . .

# Build TypeScript Project
RUN npm run dist

# Prune dev dependencies
RUN npm prune --omit=dev

# Exposing Port
EXPOSE 3000

# Start Application
CMD ["npm", "start"]