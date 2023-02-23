import { createTestEvent, createTestIntegration } from '@segment/actions-core'
import nock from 'nock'
import { baseUrl } from '../../constants'
import Destination from '../../index'

const testDestination = createTestIntegration(Destination)
const timestamp = '2023-02-22T15:21:15.449Z'

describe('Toplyne.sendEvents', () => {
  it('Sends a event succesfully', async () => {
    const event = createTestEvent({
      timestamp,
      type: 'track',
      event: 'test-event',
      userId: 'test-user-id',
      properties: { 'test-property': 'test-value', 'test-property-2': 'test-value-2' }
    })

    nock(baseUrl)
      .post('/upload/events')
      .reply(202, {
        status: 'SUCCESS',
        data: {
          message: 'Events uploaded.'
        }
      })

    const response = await testDestination.testAction('sendEvents', {
      event,
      useDefaultMappings: true,
      settings: {
        apiKey: 'test-api-key'
      }
    })

    expect(response[0].status).toBe(202)
    expect(response[0].data).toMatchObject({
      status: 'SUCCESS',
      data: {
        message: 'Events uploaded.'
      }
    })
    expect(response.length).toBe(1)
  })

  it('Send multiple events succesfully', async () => {
    const events = [
      createTestEvent({
        timestamp,
        type: 'track',
        event: 'test-event',
        userId: 'test-user-id',
        properties: { 'test-property': 'test-value', 'test-property-2': 'test-value-2' }
      }),
      createTestEvent({
        timestamp,
        type: 'track',
        event: 'test-event-2',
        userId: 'test-user-id-2',
        properties: { 'test-property': 'test-value', 'test-property-2': 'test-value-2' }
      })
    ]

    nock(baseUrl)
      .post('/upload/events')
      .reply(202, {
        status: 'SUCCESS',
        data: {
          message: 'Events uploaded.'
        }
      })

    const response = await testDestination.testBatchAction('sendEvents', {
      events,
      useDefaultMappings: true,
      settings: {
        apiKey: 'test-api-key'
      }
    })

    expect(response[0].status).toBe(202)
    expect(response[0].data).toMatchObject({
      status: 'SUCCESS',
      data: {
        message: 'Events uploaded.'
      }
    })
    expect(response.length).toBe(1)
  })
})
