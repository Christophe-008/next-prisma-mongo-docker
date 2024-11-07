FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
RUN npm install -g prisma

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]