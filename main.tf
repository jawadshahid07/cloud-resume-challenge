resource "aws_s3_bucket" "resume_website" {
  bucket = "my-resume-website-8"
}


resource "aws_s3_bucket_website_configuration" "example" {
  bucket = aws_s3_bucket.resume_website.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_acl" "example" {
  depends_on = [
    aws_s3_bucket_ownership_controls.resume_website,
    aws_s3_bucket_public_access_block.resume_website,
  ]

  bucket = aws_s3_bucket.resume_website.id
  acl    = "public-read"
}

resource "aws_s3_bucket_public_access_block" "resume_website" {
  bucket = aws_s3_bucket.resume_website.bucket

  block_public_acls   = false
  ignore_public_acls  = false
  block_public_policy = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_ownership_controls" "resume_website" {
  bucket = aws_s3_bucket.resume_website.bucket

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

resource "aws_s3_bucket_policy" "resume_website_policy" {
  bucket = aws_s3_bucket.resume_website.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadForGetBucketObjects"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.resume_website.arn}/*"
      }
    ]
  })
}

resource "aws_dynamodb_table" "visitor_count_table" {
  name         = "VisitorCountTable"
  billing_mode = "PAY_PER_REQUEST"

  attribute {
    name = "id"
    type = "S"
  }

  hash_key = "id"
}

data "archive_file" "visitor_count_zip" {
  type        = "zip"
  source_dir  = "${path.module}/visitorcount"
  output_path = "${path.module}/visitorcount.zip"
}

resource "aws_lambda_function" "visitor_count_function" {
  function_name = "VisitorCountFunction"
  handler       = "app.lambda_handler"
  runtime       = "python3.10"
  role          = aws_iam_role.lambda_exec.arn

  filename = "visitorcount.zip"  # Zip your visitorcount folder and use the path to the zip file here

  environment {
    variables = {
      TABLE_NAME = aws_dynamodb_table.visitor_count_table.name
    }
  }
}

resource "aws_iam_role" "lambda_exec" {
  name = "lambda_exec_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_dynamodb" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess"
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_api_gateway_rest_api" "visitor_count_api" {
  name        = "VisitorCountApi"
  description = "API for Visitor Count"
}

resource "aws_api_gateway_resource" "visitor_count_resource" {
  rest_api_id = aws_api_gateway_rest_api.visitor_count_api.id
  parent_id   = aws_api_gateway_rest_api.visitor_count_api.root_resource_id
  path_part   = "visitorcount"
}

resource "aws_api_gateway_method" "visitor_count_method" {
  rest_api_id   = aws_api_gateway_rest_api.visitor_count_api.id
  resource_id   = aws_api_gateway_resource.visitor_count_resource.id
  http_method   = "GET"
  authorization = "NONE"
}

resource "aws_api_gateway_integration" "visitor_count_integration" {
  rest_api_id = aws_api_gateway_rest_api.visitor_count_api.id
  resource_id = aws_api_gateway_resource.visitor_count_resource.id
  http_method = aws_api_gateway_method.visitor_count_method.http_method
  type        = "AWS_PROXY"
  integration_http_method = "POST"
  uri         = aws_lambda_function.visitor_count_function.invoke_arn
}

resource "aws_lambda_permission" "api_gateway" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.visitor_count_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.visitor_count_api.execution_arn}/*/*"
}

resource "aws_route53_record" "jawadify_xyz" {
  zone_id = "Z03948671ALZ4U35A32CB"  
  name    = "jawadify.xyz"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.my_distribution.domain_name
    zone_id                = "Z2FDTNDATAQYW2"  
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_jawadify_xyz" {
  zone_id = "Z03948671ALZ4U35A32CB" 
  name    = "www.jawadify.xyz"
  type    = "CNAME"
  ttl     = "300"
  records = [aws_cloudfront_distribution.my_distribution.domain_name]
}

resource "aws_cloudfront_distribution" "my_distribution" {
  origin {
    domain_name = "my-resume-website-8.s3.us-east-1.amazonaws.com" 
    origin_id   = "S3Origin"
  }

  enabled             = true
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3Origin"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
  }

  viewer_certificate {
    acm_certificate_arn      = "arn:aws:acm:us-east-1:637423471197:certificate/f50af5c4-9f60-4630-b498-55ddf46477f9"  
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  aliases = ["jawadify.xyz", "www.jawadify.xyz"]
}
