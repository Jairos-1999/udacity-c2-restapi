require('dotenv').config()

export const config = {
  "dev": {
    "username": process.env.POSTGRES_USERNAME_DEV,
    "password": process.env.POSTGRES_PASSWORD_DEV,
    "database": process.env.POSTGRES_DATABASE_DEV,
    "host": process.env.POSTGRES_HOST_DEV,
    "dialect": process.env.DIALECT_DEV,
    "aws_region": process.env.AWS_REGION_DEV,
    "aws_profile": process.env.AWS_PROFILE_DEV,
    "aws_media_bucket": process.env.AWS_S3_BUCKET_DEV
  },
  "jwt": {
    "secret": ""
  },
  "prod": {
    "username": process.env.POSTGRES_USERNAME,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DATABASE,
    "host": process.env.POSTGRES_HOST,
    "dialect": process.env.DIALECT,
  }
}
