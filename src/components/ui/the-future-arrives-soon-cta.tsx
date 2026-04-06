import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, CheckCircle2, Loader2 } from "lucide-react"

// Countdown target — 14 days from first load
const TARGET_DATE = new Date()
TARGET_DATE.setDate(TARGET_DATE.getDate() + 14)
TARGET_DATE.setHours(0, 0, 0, 0)

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  }
}

function AnimatedDigit({ value }: { value: number }) {
  return (
    <div style={{ position: "relative", height: "1em", width: "1.4em", overflow: "hidden", display: "inline-block" }}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          {String(value).padStart(2, "0")}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
      <div style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(139,92,246,.12)",
        border: "1px solid rgba(139,92,246,.3)",
        borderRadius: "16px",
        padding: "18px 20px",
        minWidth: "90px",
        backdropFilter: "blur(12px)",
        boxShadow: "0 0 24px rgba(139,92,246,.15), inset 0 1px 0 rgba(255,255,255,.06)",
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "clamp(2.2rem, 4vw, 3rem)",
          fontWeight: 600,
          color: "#f0f0f5",
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}>
          <AnimatedDigit value={value} />
        </span>
      </div>
      <span style={{
        fontSize: "0.6rem",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        color: "rgba(196,181,253,.5)",
      }}>
        {label}
      </span>
    </div>
  )
}

type Status = "idle" | "loading" | "success" | "error"

interface CountdownBannerProps {
  onAdminClick?: () => void
}

export function CountdownBanner({ onAdminClick }: CountdownBannerProps) {
  const [time, setTime] = useState(getTimeLeft())
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    setErrorMsg("")
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus("success")
        setEmail("")
      } else {
        const data = await res.json() as { error?: string }
        setErrorMsg(data.error ?? "Something went wrong. Try again.")
        setStatus("error")
      }
    } catch {
      setErrorMsg("Network error. Check your connection.")
      setStatus("error")
    }
  }

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      background: "linear-gradient(135deg, #0a0118 0%, #0d0221 40%, #070112 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Inter', sans-serif",
      overflow: "hidden",
      padding: "24px",
    }}>

      {/* Background glow orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(139,92,246,.22) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
        <div style={{
          position: "absolute",
          bottom: "-10%",
          left: "10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(99,102,241,.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }} />
        <div style={{
          position: "absolute",
          top: "30%",
          right: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(168,85,247,.1) 0%, transparent 70%)",
          filter: "blur(50px)",
        }} />
      </div>

      {/* Grid overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: `linear-gradient(rgba(139,92,246,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,.04) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "660px",
          borderRadius: "24px",
          border: "1px solid rgba(139,92,246,.2)",
          background: "rgba(255,255,255,.03)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          padding: "clamp(32px, 5vw, 60px) clamp(24px, 4vw, 52px)",
          boxShadow: "0 0 80px rgba(139,92,246,.12), 0 40px 80px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.06)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "36px",
          textAlign: "center",
        }}
      >
        {/* Top shimmer line */}
        <div style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,.6), transparent)",
          borderRadius: "1px",
        }} />

        {/* Logo + badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}
        >
          <img src="/favicon-vera.svg" alt="Vera" style={{ height: "52px", width: "52px" }} />
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            padding: "5px 14px",
            borderRadius: "100px",
            border: "1px solid rgba(139,92,246,.35)",
            background: "rgba(139,92,246,.08)",
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c4b5fd",
          }}>
            <Sparkles style={{ width: "11px", height: "11px" }} />
            Early Access Opening Soon
          </div>
        </motion.div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.08,
            color: "#f0f0f5",
            margin: 0,
          }}>
            Vera is launching soon.
          </h1>
          <p style={{
            fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
            color: "rgba(196,181,253,.55)",
            maxWidth: "480px",
            lineHeight: 1.7,
            margin: 0,
          }}>
            Your AI front desk for home service businesses. Be first in line when we open the doors.
          </p>
        </div>

        {/* Countdown */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(10px, 3vw, 24px)",
        }}>
          <TimeUnit value={time.days} label="Days" />
          <span style={{ fontSize: "2rem", fontWeight: 200, color: "rgba(139,92,246,.3)", lineHeight: 1, paddingBottom: "22px" }}>:</span>
          <TimeUnit value={time.hours} label="Hours" />
          <span style={{ fontSize: "2rem", fontWeight: 200, color: "rgba(139,92,246,.3)", lineHeight: 1, paddingBottom: "22px" }}>:</span>
          <TimeUnit value={time.minutes} label="Mins" />
          <span style={{ fontSize: "2rem", fontWeight: 200, color: "rgba(139,92,246,.3)", lineHeight: 1, paddingBottom: "22px" }}>:</span>
          <TimeUnit value={time.seconds} label="Secs" />
        </div>

        {/* Email form */}
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 24px",
                borderRadius: "12px",
                background: "rgba(139,92,246,.1)",
                border: "1px solid rgba(139,92,246,.3)",
                color: "#c4b5fd",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}
            >
              <CheckCircle2 style={{ width: "18px", height: "18px", flexShrink: 0 }} />
              You're on the list. We'll reach out before launch.
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                width: "100%",
                maxWidth: "420px",
              }}
            >
              <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                <input
                  ref={inputRef}
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    padding: "13px 18px",
                    borderRadius: "10px",
                    border: "1px solid rgba(139,92,246,.25)",
                    background: "rgba(139,92,246,.06)",
                    color: "#f0f0f5",
                    fontSize: "0.9rem",
                    outline: "none",
                    fontFamily: "inherit",
                    minWidth: 0,
                    transition: "border-color .2s",
                  }}
                  onFocus={e => (e.target.style.borderColor = "rgba(139,92,246,.6)")}
                  onBlur={e => (e.target.style.borderColor = "rgba(139,92,246,.25)")}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "7px",
                    padding: "13px 22px",
                    borderRadius: "10px",
                    background: status === "loading"
                      ? "rgba(139,92,246,.5)"
                      : "linear-gradient(135deg, #8b5cf6, #6366f1)",
                    color: "#fff",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    border: "none",
                    cursor: status === "loading" ? "default" : "pointer",
                    fontFamily: "inherit",
                    whiteSpace: "nowrap",
                    boxShadow: "0 0 24px rgba(139,92,246,.35)",
                    transition: "opacity .2s",
                  }}
                >
                  {status === "loading" ? (
                    <Loader2 style={{ width: "16px", height: "16px", animation: "spin 1s linear infinite" }} />
                  ) : (
                    <>Notify Me <ArrowRight style={{ width: "15px", height: "15px" }} /></>
                  )}
                </button>
              </div>

              {status === "error" && (
                <p style={{ fontSize: "0.78rem", color: "#f87171", margin: 0, textAlign: "left", paddingLeft: "4px" }}>
                  {errorMsg}
                </p>
              )}

              <p style={{ fontSize: "0.68rem", color: "rgba(196,181,253,.3)", margin: 0 }}>
                No spam. Just one email when Vera opens early access.
              </p>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          paddingTop: "4px",
          borderTop: "1px solid rgba(255,255,255,.05)",
          width: "100%",
          justifyContent: "center",
        }}>
          <a
            href="https://calendly.com/amanuel-localboostnetworking/marketing"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "0.75rem",
              color: "rgba(196,181,253,.4)",
              textDecoration: "none",
              transition: "color .2s",
            }}
            onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = "#c4b5fd")}
            onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = "rgba(196,181,253,.4)")}
          >
            Book a call instead
          </a>
          <span style={{ color: "rgba(255,255,255,.1)", fontSize: "0.7rem" }}>•</span>
          <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,.15)" }}>
            © 2026 Local Boost Networking
          </span>
          {onAdminClick && (
            <>
              <span style={{ color: "rgba(255,255,255,.1)", fontSize: "0.7rem" }}>•</span>
              <button
                onClick={onAdminClick}
                style={{
                  fontSize: "0.68rem",
                  color: "rgba(255,255,255,.12)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  padding: 0,
                  transition: "color .2s",
                }}
                onMouseEnter={e => ((e.target as HTMLButtonElement).style.color = "rgba(196,181,253,.4)")}
                onMouseLeave={e => ((e.target as HTMLButtonElement).style.color = "rgba(255,255,255,.12)")}
              >
                Preview
              </button>
            </>
          )}
        </div>
      </motion.div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: rgba(196,181,253,.3); }
      `}</style>
    </div>
  )
}
