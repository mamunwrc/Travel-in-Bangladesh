# ----- Stage 1: Build -----
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# ----- Stage 2: Run -----
FROM node:20-alpine

WORKDIR /app

# Only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Built output copy
COPY --from=build /app/.output ./.output

ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]