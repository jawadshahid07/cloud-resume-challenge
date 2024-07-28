import json
import boto3

dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table_name = 'VisitorCountTable'
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    origin = event.get('headers', {}).get('origin')
    allowed_origins = ['https://www.jawadify.xyz', 'https://jawadify.xyz']

    headers = {
        "Access-Control-Allow-Origin": origin if origin in allowed_origins else "",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*"
    }

    try:
        response = table.update_item(
            Key={'id': 'visitorCount'},
            UpdateExpression='SET visitorCount = if_not_exists(visitorCount, :start) + :inc',
            ExpressionAttributeValues={
                ':inc': 1,
                ':start': 0
            },
            ReturnValues='UPDATED_NEW'
        )
        visitor_count = response['Attributes']['visitorCount']
        visitor_count = int(visitor_count)

        return {
            'statusCode': 200,
            'headers': headers,
            'body': json.dumps({'visitorCount': visitor_count})
        }
    except Exception as e:
        if "ResourceNotFoundException" in str(e):
            # Create the item if it doesn't exist
            table.put_item(Item={'id': 'visitorCount', 'visitorCount': 0})
            return {
                'statusCode': 200,
                'headers': headers,
                'body': json.dumps({'visitorCount': 0})
            }
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': str(e)})
        }