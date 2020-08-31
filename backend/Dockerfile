FROM node:12.18.2
WORKDIR /backend
COPY package.json ./
COPY package-lock.json ./
COPY . ./
RUN npm install
CMD ["npm", "run", "prod"]