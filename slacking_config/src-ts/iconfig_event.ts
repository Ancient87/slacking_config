
    //From https://docs.aws.amazon.com/config/latest/developerguide/example-config-rule-compliance-notification.html via http://json2ts.com/
    export interface EvaluationResultQualifier {
        configRuleName: string;
        resourceType: string;
        resourceId: string;
    }

    export interface EvaluationResultIdentifier {
        evaluationResultQualifier: EvaluationResultQualifier;
        orderingTimestamp: Date;
    }

    export type ComplianceType =
    "COMPLIANT"
    | "NON_COMPLIANT"

    export interface NewEvaluationResult {
        evaluationResultIdentifier: EvaluationResultIdentifier;
        complianceType: ComplianceType;
        resultRecordedTime: Date;
        configRuleInvokedTime: Date;
        annotation?: any;
        resultToken?: any;
    }

    export interface EvaluationResultQualifier2 {
        configRuleName: string;
        resourceType: string;
        resourceId: string;
    }

    export interface EvaluationResultIdentifier2 {
        evaluationResultQualifier: EvaluationResultQualifier2;
        orderingTimestamp: Date;
    }

    export interface OldEvaluationResult {
        evaluationResultIdentifier: EvaluationResultIdentifier2;
        complianceType: ComplianceType;
        resultRecordedTime: Date;
        configRuleInvokedTime: Date;
        annotation?: any;
        resultToken?: any;
    }

    export interface ConfigMessage {
        awsAccountId: string;
        configRuleName: string;
        configRuleARN: string;
        resourceType: string;
        resourceId: string;
        awsRegion: string;
        newEvaluationResult: NewEvaluationResult;
        oldEvaluationResult: OldEvaluationResult;
        notificationCreationTime: Date;
        messageType: string;
        recordVersion: string;
    }

    export interface ConfigNotification {
        Type: string;
        MessageId: string;
        TopicArn: string;
        Subject: string;
        Message: ConfigMessage;
        Timestamp: Date;
        SignatureVersion: string;
        Signature: string;
        SigningCertURL: string;
        UnsubscribeURL: string;
    }
}