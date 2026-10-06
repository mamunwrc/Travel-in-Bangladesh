# ----- Stage 1: Build -----
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
# Use npm ci against npm install
RUN npm install

COPY . .

RUN npm run build

# ----- Stage 2: Run -----
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

# Built output copy 
COPY --from=build /app/.output ./.output

ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
