import { useState } from 'react'

export default function Certificate({ onBack }) {
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (name.trim().length > 1) setSubmitted(true)
  }

  const handlePrint = () => window.print()

  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  const certId = 'bu-' + Math.random().toString(36).substring(2, 8)

  if (!submitted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px', background: '#F6F5F0' }}>
        <div style={{ background: 'white', borderRadius: '16px', padding: '48px', maxWidth: '440px', width: '100%', textAlign: 'center', border: '1px solid #D0DAF0' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏆</div>
          <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#214C91', marginBottom: '8px', fontFamily: 'sans-serif' }}>You passed!</h2>
          <p style={{ fontSize: '14px', color: '#596CA6', marginBottom: '32px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
            Enter your full name exactly as you'd like it to appear on your certificate.
          </p>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
            placeholder="Your Full Name"
            autoFocus
            style={{ width: '100%', padding: '12px 16px', borderRadius: '12px', border: '1px solid #D0DAF0', fontSize: '16px', color: '#214C91', background: '#F6F5F0', outline: 'none', marginBottom: '16px', fontFamily: 'sans-serif' }}
          />
          <button
            onClick={handleSubmit}
            disabled={name.trim().length < 2}
            style={{
              width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
              fontSize: '15px', fontWeight: '600', cursor: name.trim().length >= 2 ? 'pointer' : 'not-allowed',
              background: name.trim().length >= 2 ? '#214C91' : '#D0DAF0',
              color: name.trim().length >= 2 ? 'white' : '#596CA6',
              fontFamily: 'sans-serif', transition: 'all 0.2s',
            }}>
            Generate my certificate →
          </button>
          <button onClick={onBack} style={{ marginTop: '16px', fontSize: '13px', color: '#596CA6', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'sans-serif' }}>
            ← Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px', background: '#F6F5F0' }}>

      {/* Action buttons — hidden on print */}
      <div className="no-print" style={{ display: 'flex', gap: '12px', marginBottom: '28px' }}>
        <button onClick={handlePrint}
          style={{ padding: '10px 24px', borderRadius: '12px', border: 'none', background: '#214C91', color: 'white', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif' }}
          onMouseEnter={e => e.currentTarget.style.background = '#1A4D8C'}
          onMouseLeave={e => e.currentTarget.style.background = '#214C91'}>
          🖨️ Print / Save as PDF
        </button>
        <button onClick={onBack}
          style={{ padding: '10px 24px', borderRadius: '12px', border: '1px solid #D0DAF0', background: 'white', color: '#214C91', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'sans-serif' }}
          onMouseEnter={e => e.currentTarget.style.background = '#EEF2FA'}
          onMouseLeave={e => e.currentTarget.style.background = 'white'}>
          ← Back to course
        </button>
      </div>

      {/* Certificate */}
      <div style={{
        width: '860px',
        background: 'white',
        padding: '52px 64px',
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 8px 40px rgba(33,76,145,0.12)',
      }}>

        {/* Top gradient border */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '5px', background: 'linear-gradient(to right, #214C91, #596CA6, #BFDB8A, #E4745E)' }} />

        {/* NPLB Logo — top right */}
        <div style={{ position: 'absolute', top: '24px', right: '28px' }}>
          <img src="/NPLB_logo.png" alt="NPLB" style={{ height: '36px', objectFit: 'contain', opacity: 0.9 }} />
        </div>

        {/* Corner ornaments */}
        {[
          { top: 14, left: 14, borderTop: true, borderLeft: true, borderRadius: '4px 0 0 0' },
          { top: 14, right: 14, borderTop: true, borderRight: true, borderRadius: '0 4px 0 0' },
          { bottom: 14, left: 14, borderBottom: true, borderLeft: true, borderRadius: '0 0 0 4px' },
          { bottom: 14, right: 14, borderBottom: true, borderRight: true, borderRadius: '0 0 4px 0' },
        ].map((corner, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: '44px', height: '44px',
            top: corner.top, bottom: corner.bottom,
            left: corner.left, right: corner.right,
            borderTop: corner.borderTop ? '2px solid #BFDB8A' : 'none',
            borderBottom: corner.borderBottom ? '2px solid #BFDB8A' : 'none',
            borderLeft: corner.borderLeft ? '2px solid #BFDB8A' : 'none',
            borderRight: corner.borderRight ? '2px solid #BFDB8A' : 'none',
            borderRadius: corner.borderRadius,
            opacity: 0.7,
          }} />
        ))}

        {/* Content — centered */}
        <div style={{ textAlign: 'center', position: 'relative' }}>

          {/* Org name */}
          <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#596CA6', fontFamily: 'sans-serif', marginBottom: '16px' }}>
            No Patient Left Behind · RA Capital Management
          </div>

          {/* CERTIFICATE heading */}
          <div style={{ fontSize: '48px', fontWeight: '700', letterSpacing: '0.1em', color: '#214C91', textTransform: 'uppercase', fontFamily: 'sans-serif', marginBottom: '4px' }}>
            Certificate
          </div>

          {/* — OF COURSE COMPLETION — */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '24px' }}>
            <div style={{ height: '1px', width: '64px', background: '#BFDB8A' }} />
            <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#BFDB8A', fontFamily: 'sans-serif', fontWeight: '600' }}>of course completion</div>
            <div style={{ height: '1px', width: '64px', background: '#BFDB8A' }} />
          </div>

          {/* This is to certify that */}
          <div style={{ fontSize: '15px', color: '#6B7280', fontFamily: 'sans-serif', marginBottom: '10px' }}>
            This is to certify that
          </div>

          {/* Name */}
          <div style={{ fontSize: '46px', fontStyle: 'italic', color: '#1A4D8C', marginBottom: '6px', fontWeight: '600', fontFamily: 'Georgia, serif', lineHeight: '1.2' }}>
            {name}
          </div>

          {/* Name underline with dot */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
            <div style={{ height: '1px', flex: 1, maxWidth: '160px', background: '#D0DAF0' }} />
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#BFDB8A' }} />
            <div style={{ height: '1px', flex: 1, maxWidth: '160px', background: '#D0DAF0' }} />
          </div>

          {/* Body */}
          <div style={{ fontSize: '14px', color: '#6B7280', fontFamily: 'sans-serif', marginBottom: '10px' }}>
            has successfully pursued studies and completed the full course requirements for
          </div>

          {/* Course title */}
          <div style={{ fontSize: '18px', fontWeight: '700', color: '#214C91', fontFamily: 'sans-serif', lineHeight: '1.4', marginBottom: '32px', maxWidth: '580px', margin: '0 auto 32px' }}>
            Biotech Unveiled: Understanding the U.S. Biomedical Innovation Marketplace and its Global Role
          </div>

          {/* Bottom row: date · seal · cert ID */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '64px', marginTop: '8px' }}>

            {/* Date */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '14px', color: '#214C91', fontFamily: 'sans-serif', fontWeight: '500', marginBottom: '6px' }}>{today}</div>
              <div style={{ width: '120px', height: '1px', background: '#D0DAF0', margin: '0 auto' }} />
              <div style={{ fontSize: '9px', color: '#9CA3AF', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'sans-serif', marginTop: '5px' }}>Date</div>
            </div>

            {/* Seal */}
            <div style={{
              width: '72px', height: '72px', borderRadius: '50%',
              border: '2.5px solid #214C91',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg, #EEF2FA, white)',
            }}>
              <div style={{ fontSize: '26px' }}>🏆</div>
              <div style={{ fontSize: '6px', color: '#214C91', fontWeight: '700', letterSpacing: '0.12em', fontFamily: 'sans-serif', marginTop: '1px' }}>CERTIFIED</div>
            </div>

            {/* Cert ID */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '14px', color: '#214C91', fontFamily: 'sans-serif', fontWeight: '500', marginBottom: '6px' }}>{certId}</div>
              <div style={{ width: '120px', height: '1px', background: '#D0DAF0', margin: '0 auto' }} />
              <div style={{ fontSize: '9px', color: '#9CA3AF', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'sans-serif', marginTop: '5px' }}>Certificate ID</div>
            </div>

          </div>

          {/* Disclaimer */}
          <div style={{ fontSize: '10px', color: '#9CA3AF', fontFamily: 'sans-serif', marginTop: '28px', lineHeight: '1.5' }}>
            RA Capital Management, L.P. is a registered investment adviser. This certificate is not intended to endorse or provide a testimonial regarding any individual.
          </div>
        </div>

        {/* Bottom gradient border */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '5px', background: 'linear-gradient(to right, #E4745E, #596CA6, #214C91)' }} />
      </div>

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; margin: 0; }
          @page { size: landscape; margin: 0.4in; }
        }
      `}</style>
    </div>
  )
}
