FROM node:22-alpine3.19 AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . . 

RUN npx tsc

FROM node:22-alpine3.19 AS runtime

WORKDIR /app

COPY --from=build /app/package*.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules


# RUN npm install --only=production


EXPOSE 3000

CMD ["node", "./dist/index.js"]