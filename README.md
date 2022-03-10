# vscode-remote-containers-cdk-and-sam

VSCode Remote Containers でAWS CDK と AWS SAM を使いコンテナ内部でLambdaを実行する

```bash
cd app
cdk synth --no-staging
sam local invoke AppStack-Function --no-event -t ./cdk.out/AppStack.template.json --container-host host.docker.internal
```