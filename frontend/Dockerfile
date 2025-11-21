# Dockerfile for frontend (Expo/Node)
FROM node:20
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8081
CMD ["npx", "expo", "start", "--web"]
