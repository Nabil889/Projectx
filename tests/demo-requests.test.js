import { test } from 'node:test'
import assert from 'node:assert/strict'
import handler from '../api/demo-requests.js'

const valid = { name: 'Test Person', organization: 'Testschule', email: 'test@example.com', role: 'teacher', subjectOrLevel: '', message: 'Hallo', privacyAccepted: true, website: '' }
async function request(body = valid, overrides = {}) {
  const res = { statusCode: 200, headers: {}, setHeader(k, v) { this.headers[k] = v }, status(n) { this.statusCode = n; return this }, json(data) { this.data = data; return this } }
  await handler({ method: 'POST', headers: { origin: 'https://edugo-learn.ch', 'content-type': 'application/json' }, body, ...overrides }, res)
  return res
}
test('valid request uses fixed addresses and visitor Reply-To', async () => {
  const originalFetch = globalThis.fetch
  const originalKey = process.env.RESEND_API_KEY
  process.env.RESEND_API_KEY = 'test-only'
  let calls = 0
  globalThis.fetch = async (url, options) => {
    calls++
    assert.equal(url, 'https://api.resend.com/emails')
    const mail = JSON.parse(options.body)
    assert.deepEqual(mail.to, ['info@edugo-learn.ch'])
    assert.equal(mail.from, 'Edugo Learn Website <kontakt@edugo-learn.ch>')
    assert.equal(mail.reply_to, valid.email)
    return Response.json({ id: 'test-message' })
  }
  try {
    assert.equal((await request()).statusCode, 200)
    assert.equal(calls, 1)
    for (const body of [{ ...valid, privacyAccepted: false }, { ...valid, email: 'a@b.ch\r\nBcc: x@y.ch' }, { ...valid, role: 'invalid' }, { ...valid, message: 'a'.repeat(1001) }, null]) {
      assert.equal((await request(body)).statusCode, 400)
    }
    assert.equal((await request({ ...valid, website: 'bot.example' })).statusCode, 200)
    assert.equal((await request(valid, { method: 'GET' })).statusCode, 405)
    assert.equal((await request(valid, { headers: { origin: 'https://evil.example', 'content-type': 'application/json' } })).statusCode, 403)
    assert.equal(calls, 1)
    globalThis.fetch = async () => Response.json({ message: 'rejected' }, { status: 403 })
    assert.equal((await request()).statusCode, 502)
    globalThis.fetch = async () => { throw new Error('timeout') }
    assert.equal((await request()).statusCode, 502)
    delete process.env.RESEND_API_KEY
    assert.equal((await request()).statusCode, 503)
  } finally {
    globalThis.fetch = originalFetch
    if (originalKey === undefined) delete process.env.RESEND_API_KEY
    else process.env.RESEND_API_KEY = originalKey
  }
})
