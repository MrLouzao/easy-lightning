### Build lnd image with neutrino
FROM node:8

MAINTAINER lmlouzao

WORKDIR /home/easy-lnd

COPY ./index.js ./package.json /home/easy-lnd/
COPY ./config /home/easy-lnd/

RUN npm install && \
    node index.js