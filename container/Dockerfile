FROM openjdk:9

RUN mkdir /waves /conf /data

RUN groupadd -g 999 waves && \
    useradd -r -u 999 -g waves waves
USER waves
LABEL maintainer="sven.seemann@scienceroot.com"

EXPOSE 6863 6869

VOLUME ["/data"]

VOLUME ["/conf"]

WORKDIR /waves

ADD docker-entrypoint.sh /waves/docker-entrypoint.sh
ADD waves.jar /waves/waves.jar

ENTRYPOINT ["/waves/docker-entrypoint.sh"]
