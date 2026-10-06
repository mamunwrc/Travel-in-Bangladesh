FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build for Node.js server (not Cloudflare)
RUN npm run build -- --preset=node-server

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start the Node.js server
CMD ["node", ".output/server/index.mjs"]
