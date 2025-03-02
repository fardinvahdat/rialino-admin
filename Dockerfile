FROM node:18-alpine AS development

ENV NODE_ENV=development
ENV HOST=0.0.0.0
ENV PORT=3000

WORKDIR /app

COPY app/package.json ./

RUN if [ -f app/package-lock.json ]; then \
      echo "Using package-lock.json"; \
      cp app/package-lock.json ./ && npm ci; \
    else \
      echo "package-lock.json not found, running npm install"; \
      npm install --legacy-peer-deps; \
    fi

COPY app ./
EXPOSE 3000

CMD ["npm", "run", "dev"]
