FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build with Node.js preset using environment variable
ENV NITRO_PRESET=node-server
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start the Node.js server
CMD ["node", ".output/server/index.mjs"]
