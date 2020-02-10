FROM node:8.11.4

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
COPY ./portal-documentation /app/portal
RUN yarn install

CMD ["yarn", "start"]
