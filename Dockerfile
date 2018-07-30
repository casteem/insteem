FROM node:8-alpine

# yarn > npm
#RUN npm install --global yarn
RUN apk add --no-cache git
#RUN npm install -g yarn

WORKDIR /app

ADD package.json yarn.lock /app/
#RUN yarn install --non-interactive --frozen-lockfile
RUN yarn
COPY . /app

# FIXME TODO: fix eslint warnings

#RUN mkdir tmp && \
#  npm test && \
#  ./node_modules/.bin/eslint . && \
RUN npm run build

#RUN mkdir tmp && \
#    yarn test && yarn build

#ENV PORT 8080
#ENV NODE_ENV production

EXPOSE 8080

CMD [ "npm", "run", "start" ]
