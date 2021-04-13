import { IResource, Resource } from '@aws-cdk/core';
import { Construct } from 'constructs';
import { CfnDeliveryStream } from './kinesisfirehose.generated';
import * as kms from '@aws-cdk/aws-kms';
import * as kinesis from '@aws-cdk/aws-kinesis';

export interface IDeliveryStream extends IResource {
  readonly deliveryStreamArn: string;
  readonly deliveryStreamName: string;
}

abstract class DeliveryStreamBase extends Resource implements IDeliveryStream {
  abstract readonly deliveryStreamArn: string;
  abstract readonly deliveryStreamName: string;
  constructor(scope: Construct, id: string) {
    super(scope, id);
  }
}


export class DeliveryStream extends DeliveryStreamBase {
  readonly deliveryStreamArn: string;
  readonly deliveryStreamName: string;
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const resource = new CfnDeliveryStream(this, id, {

    })
    this.deliveryStreamArn = '';
    this.deliveryStreamName = resource.ref;
  }
}

export interface S3DeliveryStreamProps {
  readonly encryptionKey?: kms.IKey;
  readonly deliveryStreamName?: string;
}

export class S3DeliveryStream extends DeliveryStream {
  constructor(scope: Construct, id: string, props: S3DeliveryStreamProps?) {
    super(scope, id);
  }
}