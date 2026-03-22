FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Vite only embeds env vars at build time (import.meta.env.VITE_*).
# This must be the URL the *browser* calls — e.g. http://localhost:5000/api for local Docker,
# or https://your-backend.example.com/api in production (not http://backend:5000).
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}

RUN npm run build

EXPOSE 5173

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "5173"]

