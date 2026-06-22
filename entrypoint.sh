#!/bin/sh
set -e

if [ ! -f "$DB_PASSWORD_FILE" ]; then
    echo "ERROR: Secret file $DB_PASSWORD_FILE not found" >&2
    exit 1
fi

export DB_PASSWORD="$(cat "$DB_PASSWORD_FILE")"
export DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}"

exec "$@"