import { ComplianceType, ConfigMessage, ConfigNotification, NewEvaluationResult } from "./iconfig_event";
import { Severity, SlackMessage } from "./slack_message";

export class MessageRenderer {
    
    eventToMessage = (configMessage: ConfigMessage): SlackMessage => {
        const slackMessage = new SlackMessage();
        slackMessage.severity = this.getEvaluationCompliance(configMessage) === "COMPLIANT" ? Severity.INFO : Severity.WARN
        slackMessage.title = this.createTitle(configMessage)
        return slackMessage;
    }

    createTitle = (message: ConfigMessage) => {
        const complianceResult = this.getEvaluationCompliance(message);
        return `${complianceResult} ${message.configRuleName} ${message.resourceType} ${message.resourceId}`
    }

    getEvaluationCompliance = (message: ConfigMessage): ComplianceType => {
        return message.newEvaluationResult.complianceType
    }
}