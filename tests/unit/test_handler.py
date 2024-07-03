import json
import os
import os
import re
import json
from unittest import mock

from visitorcount import app

with open('template.yaml', 'r') as f:
    TABLENAME = re.search(r'TableName: (.*)?', f.read()).group(1)

@mock.patch.dict(os.environ, {"TABLENAME": TABLENAME})
def test_lambda_handler():
    assert "AWS_ACCESS_KEY_ID" in os.environ
    assert "AWS_SECRET_ACCESS_KEY" in os.environ

    ret = app.lambda_handler("", "")

    assert "statusCode" in ret
    assert "headers" in ret
    assert "body" in ret
    assert "Access-Control-Allow-Origin"  in ret["headers"]
    assert "Access-Control-Allow-Methods" in ret["headers"]
    assert "Access-Control-Allow-Headers" in ret["headers"]

    if ret["statusCode"] == 200:
        assert "visitorCount" in ret["body"]
        assert json.loads(ret["body"])["visitorCount"].isnumeric()
    else:
        assert json.loads(ret["body"])["visitorCount"] == -1


    return