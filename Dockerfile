FROM httpd

COPY ./dist/app/* /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND