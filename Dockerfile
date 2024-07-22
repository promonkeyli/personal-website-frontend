FROM node:19-alpine AS builder
RUN npm install -g pnpm
WORKDIR /app
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
