const roles = new Set(['teacher', 'school-management', 'it', 'administration', 'other'])
const emailPattern = /^[^\s@<>\r\n]+@[^\s@<>\r\n]+\.[^\s@<>\r\n]{2,}$/

// This endpoint always sends to our inbox, never to a visitor-supplied recipient.
export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }
  const allowedOrigins = new Set(['https://edugo-learn.ch', 'https://www.edugo-learn.ch'])
  if (process.env.VERCEL_URL) allowedOrigins.add(`https://${process.env.VERCEL_URL}`)
  if (!allowedOrigins.has(req.headers.origin)) {
    return res.status(403).json({ error: 'Origin not allowed' })
  }
  if (req.headers['content-type']?.split(';')[0].trim() !== 'application/json') {
    return res.status(415).json({ error: 'JSON required' })
  }
  let body
  try {
    const raw = typeof req.body === 'string' ? req.body : JSON.stringify(req.body)
    if (!raw || Buffer.byteLength(raw) > 12000) {
      return res.status(413).json({ error: 'Request too large' })
    }
    body = JSON.parse(raw)
  } catch {
    return res.status(400).json({ error: 'Invalid JSON' })
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return res.status(400).json({ error: 'Invalid request' })
  }
  // A hidden field catches basic form-filling bots. It is not a rate limiter.
  if (typeof body.website !== 'string') return res.status(400).json({ error: 'Invalid request' })
  if (body.website) return res.status(200).json({ ok: true })
  const limits = { name: 150, organization: 200, email: 254, role: 40, subjectOrLevel: 200, message: 1000 }
  const values = {}
  for (const [field, limit] of Object.entries(limits)) {
    if (typeof body[field] !== 'string' || body[field].length > limit || body[field].includes('\0')) {
      return res.status(400).json({ error: 'Invalid fields' })
    }
    values[field] = body[field].trim()
  }
  if (values.name.length < 2 || values.organization.length < 2 ||
      !emailPattern.test(values.email) || !roles.has(values.role) || body.privacyAccepted !== true) {
    return res.status(400).json({ error: 'Invalid fields' })
  }
  if (!process.env.RESEND_API_KEY) {
    console.error('Contact email: RESEND_API_KEY missing')
    return res.status(503).json({ error: 'Email unavailable' })
  }
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Edugo Learn Website <kontakt@edugo-learn.ch>',
        to: ['info@edugo-learn.ch'],
        reply_to: values.email,
        subject: 'Neue Demo-Anfrage über die Website',
        text: `Name: ${values.name}\nOrganisation: ${values.organization}\nE-Mail: ${values.email}\nFunktion: ${values.role}\nFachbereich: ${values.subjectOrLevel || 'Keine Angabe'}\n\nNachricht:\n${values.message || 'Keine Nachricht'}\n\nDatenschutzhinweis akzeptiert: Ja`,
      }),
      signal: AbortSignal.timeout(10000),
    })
    const result = await response.json()
    if (!response.ok || typeof result.id !== 'string') {
      console.error('Contact email rejected', { status: response.status })
      return res.status(502).json({ error: 'Email failed' })
    }
    return res.status(200).json({ ok: true })
  } catch {
    console.error('Contact email provider unavailable')
    return res.status(502).json({ error: 'Email failed' })
  }
}
