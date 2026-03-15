#!/bin/sh
set -e

# Wait for database to be reachable before running migrations
MAX_RETRIES=10
RETRY=0
until npx prisma db push 2>/dev/null; do
  RETRY=$((RETRY + 1))
  if [ "$RETRY" -ge "$MAX_RETRIES" ]; then
    echo "ERROR: Could not reach database after $MAX_RETRIES attempts. Starting app anyway."
    break
  fi
  echo "Waiting for database... (attempt $RETRY/$MAX_RETRIES)"
  sleep 3
done

exec npx next start -p ${PORT:-3000}
