FROM node:12.18.2 as build
WORKDIR /frontend
COPY package.json /frontend
COPY package-lock.json /frontend
COPY . /frontend
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /frontend/build /usr/share/nginx/html
COPY --from=build /frontend/nginx/frontend.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]