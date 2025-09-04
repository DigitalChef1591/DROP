FROM node:20-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml* ./
COPY packages/admin/package.json ./packages/admin/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/admin ./packages/admin
COPY tsconfig.json .eslintrc.js .prettierrc ./

# Build the application
RUN pnpm -F admin build

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Start the admin panel
CMD ["pnpm", "-F", "admin", "start"]
