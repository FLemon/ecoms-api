FROM node:14.15

ENV NODE_ENV=development

WORKDIR /srv/app

COPY . .

RUN yarn install && yarn build --clean

EXPOSE 1337

CMD yarn develop
