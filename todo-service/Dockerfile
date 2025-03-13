FROM node:20
WORKDIR /app
COPY package*.json ./
RUN npm install -g npm@11.2.0
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5001
CMD ["npm", "run", "start"]