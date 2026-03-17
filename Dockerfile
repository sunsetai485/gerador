FROM node:18-alpine

WORKDIR /app

COPY server.js .
COPY gerador-easypanel.html .
COPY env-tokens-exemplo.txt .

EXPOSE 80

CMD ["node", "server.js"]
