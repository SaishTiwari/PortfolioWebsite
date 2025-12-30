# Use Node.js LTS Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all frontend code
COPY . .

# Expose frontend port
EXPOSE 5173 

# Start the Vite frontend
CMD ["npm", "run", "dev", "--", "--host"]