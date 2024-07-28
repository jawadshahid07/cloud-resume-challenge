import json
import os
from unittest import mock

from visitorcount import app

TABLENAME = "VisitorCountTable"

@mock.patch.dict(os.environ, {"TABLENAME": TABLENAME})
def test_lambda_handler():
    assert "AWS_ACCESS_KEY_ID" in os.environ
    assert "AWS_SECRET_ACCESS_KEY" in os.environ

    mock_event = {
        "headers": {
            "origin": "https://www.jawadify.xyz"
        }
    }

    ret = app.lambda_handler(mock_event, "")

    assert "statusCode" in ret
    assert "headers" in ret
    assert "body" in ret
    assert "Access-Control-Allow-Origin" in ret["headers"]
    assert "Access-Control-Allow-Methods" in ret["headers"]
    assert "Access-Control-Allow-Headers" in ret["headers"]

    if ret["statusCode"] == 200:
        assert "visitorCount" in ret["body"]
        assert isinstance(json.loads(ret["body"])["visitorCount"], int)
    else:
        assert "error" in ret["body"]

    return
