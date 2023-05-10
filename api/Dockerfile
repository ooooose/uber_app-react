FROM ruby:3
ENV TZ Asia/Tokyo

RUN apt-get update && apt-get install -y \
    build-essential \
    default-mysql-client

WORKDIR /myapp

COPY Gemfile Gemfile.lock /myapp/
RUN bundle install
COPY . /myapp

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]