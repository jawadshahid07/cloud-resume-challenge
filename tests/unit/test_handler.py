import json
import os
import boto3
import pytest
from moto import mock_dynamodb2
from visitorcount import lambda_handler

@pytest.fixture()
def apigw_event():
    """ Generates API GW Event"""
    return {
        "resource": "/{proxy+}",
        "path": "/visitor-count",
        "httpMethod": "GET",
        "headers": {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
            "User-Agent": "Custom User Agent String",
        },
        "queryStringParameters": {},
        "pathParameters": {"proxy": "/visitor-count"},
        "stageVariables": {},
        "requestContext": {
            "resourceId": "123456",
            "apiId": "1234567890",
            "resourcePath": "/{proxy+}",
            "httpMethod": "GET",
            "requestId": "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
            "accountId": "123456789012",
            "identity": {
                "sourceIp": "127.0.0.1",
            },
            "stage": "prod",
        },
        "body": None,
        "isBase64Encoded": False,
    }

@mock_dynamodb2
def test_lambda_handler(apigw_event):
    os.environ['VisitorCountTable'] = 'VisitorCount'
    dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
    table = dynamodb.create_table(
        TableName='VisitorCount',
        KeySchema=[{'AttributeName': 'id', 'KeyType': 'HASH'}],
        AttributeDefinitions=[{'AttributeName': 'id', 'AttributeType': 'S'}],
        ProvisionedThroughput={'ReadCapacityUnits': 1, 'WriteCapacityUnits': 1}
    )
    table.put_item(Item={'id': 'visitorCount', 'visitorCount': 0})

    ret = lambda_handler(apigw_event, "")
    data = json.loads(ret["body"])

    assert ret["statusCode"] == 200
    assert "visitorCount" in data
    assert data["visitorCount"] == 1
