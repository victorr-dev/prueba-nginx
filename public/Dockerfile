FROM nginx:latest

COPY ./pruebas.html /usr/share/nginx/html
COPY ./pruebas.conf /etc/nginx/conf.d

EXPOSE 80

RUN rm /etc/nginx/conf.d/default.conf && rm /usr/share/nginx/html/index.html
