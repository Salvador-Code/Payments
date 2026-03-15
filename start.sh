#!/bin/sh
set -e

echo "DATABASE_URL starts with: $(echo $DATABASE_URL | cut -c1-30)..."

# Wait for database to be reachable before running migrations
MAX_RETRIES=10
RETRY=0
until npx prisma db push; do
  RETRY=$((RETRY + 1))
  if [ "$RETRY" -ge "$MAX_RETRIES" ]; then
    echo "ERROR: Could not reach database after $MAX_RETRIES attempts. Starting app anyway."
    break
  fi
  echo "Waiting for database... (attempt $RETRY/$MAX_RETRIES)"
  sleep 3
done

exec npx next start -p ${PORT:-3000}
