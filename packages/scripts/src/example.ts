import { Resource } from "sst";
import { Example } from "@base-aws-no-fee-notes-app/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
