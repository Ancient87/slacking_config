import { expect } from 'chai'
import { ConfigMessage } from '../src-ts/iconfig_event';
import { MessageRenderer } from '../src-ts/message_renderer'
import { Severity, SlackMessage } from '../src-ts/slack_message';

import { sampleEvent } from './fixtures/sample_event'
var chai = require("chai");
var assert = require("assert");
const messageTemplate: ConfigMessage = sampleEvent.Message

describe("Parse a configuration event into a slack message", () => {
    const messageRenderer = new MessageRenderer();
    it("Should parse the test event correctly for compliance", () => {
        const expectedTitle = `COMPLIANT cloudtrail-enabled AWS::::Account 123456789012`
        const result = messageRenderer.eventToMessage(messageTemplate)
        expect(result).to.be.an.instanceOf(SlackMessage)
        expect(result.title).to.equal(expectedTitle)
        expect(result.severity).to.equal(Severity.INFO)
    })

    it("Should parse the test event correctly for non-compliance", () => {
        const expectedTitle = `NON_COMPLIANT cloudtrail-enabled AWS::::Account 123456789012`
        const testMessage = { ...messageTemplate}
        testMessage.newEvaluationResult.complianceType = "NON_COMPLIANT"
        const result = messageRenderer.eventToMessage(testMessage)
        expect(result).to.be.an.instanceOf(SlackMessage)
        expect(result.title).to.equal(expectedTitle)
        expect(result.severity).to.equal(Severity.WARN)
    })
}) 