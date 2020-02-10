FROM node:8.11.4

WORKDIR /app/website

EXPOSE 3000 35729
COPY ./docs /app/docs
COPY ./website /app/website
RUN npm install

CMD ["npm", "start"] 

WORKDIR /app/portal

EXPOSE 3001 35730
COPY ./docs /app/docs
COPY ./portal /app/portal
RUN npm install

CMD ["npm", "start"] 
