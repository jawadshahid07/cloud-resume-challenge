.PHONY: build

deploy-infra:
	terraform apply --auto-approve

deploy-site:
	cd resume_website && npm run build && aws s3 sync ./build s3://my-resume-website-8

delete-infra:
	terraform destroy

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