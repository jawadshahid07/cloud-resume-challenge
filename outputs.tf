output "website_url" {
  description = "URL for website"
  value       = "http://${aws_s3_bucket.resume_website.bucket}.s3-website-${var.aws_region}.amazonaws.com"
}