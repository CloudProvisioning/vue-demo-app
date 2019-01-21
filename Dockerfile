FROM danday74/nginx-lua

COPY nginx.conf /nginx/conf/nginx.conf

WORKDIR /nginx/html

COPY dist/ .

COPY init-backend-entry.sh /

EXPOSE 80