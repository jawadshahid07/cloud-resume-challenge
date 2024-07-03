import json
import boto3

dynamodb = boto3.resource('dynamodb', region_name='eu-north-1')
table_name = 'VisitorCountTable'
table = dynamodb.Table(table_name)

def lambda_handler(event, context):
    headers = {
        "Access-Control-Allow-Origin": "*",
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
        return {
            'statusCode': 500,
            'headers': headers,
            'body': json.dumps({'error': str(e)})
        }
