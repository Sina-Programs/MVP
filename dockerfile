FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

RUN npm run build-dev

CMD [ "npm", "start" ]


#docker tag local-image:tagname new-repo:tagname
#docker push new-repo:tagname