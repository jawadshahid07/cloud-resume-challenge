import json

def lambda_handler(event, context):
    # Sample Lambda function
    
    # CORS headers
    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }

    if event['httpMethod'] == 'OPTIONS':
        # Return CORS headers for preflight OPTIONS request
        return {
            "statusCode": 200,
            "headers": headers,
            "body": json.dumps({})
        }

    # For GET request, return your response
    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({
            "message": "hello world"
        })
    }
