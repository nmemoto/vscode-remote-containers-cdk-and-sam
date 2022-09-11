import { Stack, StackProps } from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import * as cdk from 'aws-cdk-lib';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AppQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const fn = new Function(this, `${this.stackName}-Function`, {
      functionName: `${this.stackName}-Function`,
      code: Code.fromAsset('./lambda/my_function'),
      runtime: Runtime.NODEJS_16_X,
      handler: "index.handler",
      timeout: cdk.Duration.seconds(3),
    })
  }
}
