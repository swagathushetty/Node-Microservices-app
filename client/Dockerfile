FROM node:16-alpine
 
# Add the following lines to prevent issue with CRA
ENV CI=true
ENV WDS_SOCKET_PORT=0
 
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
 
CMD ["npm", "start"]