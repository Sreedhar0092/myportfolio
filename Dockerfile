# Stage 1: Build the application
FROM node:18-slim AS build
WORKDIR /freelance

# Copy package.json and .npmrc files for dependency installation
COPY package.json ./

# Copy the rest of the application source code
COPY . .

# Install dependencies
RUN npm install -f

# Build the application
RUN npm run build

# Stage 2: Create the production image
FROM node:18-slim
WORKDIR /freelance

# Copy necessary files from the previous build stage
COPY --from=build /freelance/package.json ./
COPY --from=build /freelance/.next ./.next
COPY --from=build /freelance/public ./public
COPY --from=build /freelance/node_modules ./node_modules

# Install only production dependencies
RUN npm install -f

EXPOSE 3010
CMD ["npx", "next", "start", "-p", "3010"]
