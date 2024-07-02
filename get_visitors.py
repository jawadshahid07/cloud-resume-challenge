import boto3
import json

def check_visitor_count():
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('cloud-resume-challenge')  # Replace with your DynamoDB table name
    
    try:
        # Query DynamoDB for visitor_count
        response = table.get_item(
            Key={
                'ID': 'visitor_count'  # Assuming 'visitor_count' is your partition key
            }
        )
        
        if 'Item' in response:
            visitor_count = response['Item'].get('visitors', 0)
            print(f"Current visitor count: {visitor_count}")
        else:
            print("Visitor count not found in DynamoDB")
    
    except Exception as e:
        print(f"Error querying DynamoDB: {e}")

# Execute the function to check visitor_count
check_visitor_count()
