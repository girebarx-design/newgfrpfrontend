"use client";
import { useState } from "react";

const PURPOSE = [
  ["info", "Gathering information"],
  ["comparing", "Comparing machines now"],
  ["decided", "Decided, need a quotation"],
] as const;

export default function EnquiryForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [purpose, setPurpose] = useState<string>("info");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");
    const f = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: f.get("name"), phone: f.get("phone"), email: f.get("email"),
          business: f.get("business"), purpose, message: f.get("message"),
        }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || "Could not send");
      setState("sent");
    } catch (err) {
      setState("error");
      setError(err instanceof Error ? err.message : "Could not send");
    }
  }

  if (state === "sent") {
    return (
      <div className="form-done">
        <strong>Thank you — that reached us.</strong>
        <span>We reply on WhatsApp first because it is faster. If you would rather we called, say so in your message.</span>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label><span>Your name</span><input name="name" required autoComplete="name" /></label>
      <label><span>Mobile</span><input name="phone" required inputMode="tel" autoComplete="tel" /></label>
      <label><span>Email</span><input name="email" type="email" required autoComplete="email" /></label>
      <label><span>What is your business today</span>
        <input name="business" required placeholder="Construction, trading, manufacturing, starting fresh" />
      </label>

      <fieldset>
        <legend>Where are you in the decision</legend>
        <div className="pills">
          {PURPOSE.map(([v, l]) => (
            <button type="button" key={v} onClick={() => setPurpose(v)}
              aria-pressed={purpose === v} className={purpose === v ? "on" : ""}>{l}</button>
          ))}
        </div>
      </fieldset>

      <label><span>Anything else (optional)</span><textarea name="message" rows={3} /></label>

      <button className="submit" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : "Send enquiry"}
      </button>
      {state === "error" ? (
        <p className="form-err">{error}. You can also reach us on WhatsApp — that always works.</p>
      ) : null}
    </form>
  );
}
