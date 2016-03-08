FROM node:5-wheezy

ADD ./start.sh /start.sh
RUN chmod u+x /start.sh

RUN mkdir -p /usr/src
WORKDIR /usr/src

RUN git clone https://github.com/jordond/powerhour-site /usr/src

EXPOSE 8080

CMD [ "/start.sh" ]