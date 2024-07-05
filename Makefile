.PHONY: build

build:
	sam build

deploy-infra:
	sam build && aws-vault exec my-user --no-session -- sam deploy --no-confirm-changeset

deploy-site:
	aws-vault exec my-user --no-session -- aws s3 sync ./resumewebsite s3://my-resume-website-7

delete-infra:
	aws s3 rm s3://my-resume-website-7--recursive
	sam delete --stack-name cloud-resume-challenge --region eu-north-1

integration-test:
	FIRST=$$(curl -s "https://2629zq9ael.execute-api.eu-north-1.amazonaws.com/Prod/visitorcount" | jq ".visitorCount | tonumber"); \
	SECOND=$$(curl -s "https://2629zq9ael.execute-api.eu-north-1.amazonaws.com/Prod/visitorcount" | jq ".visitorCount | tonumber"); \
	echo "Comparing if first count ($$FIRST) is less than (<) second count ($$SECOND)"; \
	if [ $$FIRST -lt $$SECOND ]; then \
		echo "PASS"; \
	else \
		echo "FAIL"; \
	fi

e2e-test:
	node e2etest.js