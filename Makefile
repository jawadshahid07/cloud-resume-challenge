.PHONY: build

build:
	sam build

deploy-infra:
	sam build && aws-vault exec my-user --no-session -- sam deploy --no-confirm-changeset

deploy-site:
	aws-vault exec my-user --no-session -- aws s3 sync ./resumewebsite s3://my-resume-website-7

delete-infra:
	aws s3 rm s3://my-amazing-website-50000 --recursive
	sam delete --stack-name cloud-resume-challenge --region us-east-1