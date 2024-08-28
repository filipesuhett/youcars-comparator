FROM node:18-alpine

# Installing libvips-dev for sharp Compatibility (if needed for frontend)
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/frontend

# Copy frontend-specific package.json and package-lock.json
COPY package.json package-lock.json ./

# Install npm dependencies
RUN npm install -g npm@10.2.5 && npm config set fetch-retry-maxtimeout 600000 -g && npm install

# Rebuild sharp if needed (depends on your frontend requirements)
RUN npm rebuild sharp

# Copy the rest of the frontend application
COPY ./ ./

# Set the PATH for frontend node_modules
ENV PATH /opt/frontend/node_modules/.bin:$PATH

RUN chown -R node:node /opt/frontend
USER node

EXPOSE 8080
CMD ["npm", "run", "dev"]
