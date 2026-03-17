# Pooh Deploy - Gerador de Esquema EasyPanel
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
COPY gerador-easypanel.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
