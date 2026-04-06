

# AI Assistent Upgrade Plan

## Wat gaan we doen
De huidige AI Assistent heeft slechts 5 hardcoded antwoorden. We upgraden deze naar een echte AI-chatbot die via Lovable AI (backend) antwoorden genereert over de Algarve.

## Stappen

### 1. LOVABLE_API_KEY activeren
De API key voor Lovable AI is nog niet beschikbaar. We gebruiken de `ai_gateway--enable` tool (of `add_secret`) om deze te activeren zodat de edge function ermee kan authenticeren.

### 2. Edge Function aanmaken: `supabase/functions/algarve-chat/index.ts`
- Ontvangt berichten van de frontend
- Stuurt ze naar de Lovable AI Gateway met een Algarve-specifiek system prompt
- Streamt het antwoord terug via SSE
- System prompt bevat: "Je bent een deskundige Algarve reisassistent. Je helpt Nederlandse reizigers met betrouwbare, eerlijke informatie over de Algarve. Antwoord altijd in het Nederlands. Geef geen informatie waar je niet zeker van bent."
- Gebruikt model `google/gemini-3-flash-preview`
- Handles 429/402 errors

### 3. AIAssistant.tsx herschrijven
- Verwijder alle hardcoded responses
- Voeg streaming toe: token-by-token rendering via SSE parsing
- Behoud de quick questions als suggesties (maar antwoorden komen nu van AI)
- Voeg markdown rendering toe met `react-markdown`
- Voeg error handling toe (rate limits, netwerk fouten)
- Toon foutmeldingen als toast bij 429/402

### 4. AIAssistant weer toevoegen aan Index.tsx
De component was eerder verwijderd. We voegen hem opnieuw toe als floating chat widget.

## Technische details

**Edge function system prompt:**
```
Je bent de Algarve Reisassistent van 'Algarve voor Bijna Niks'. Je helpt Nederlandse reizigers met eerlijke, betrouwbare informatie over de Algarve, Portugal. Antwoord altijd in het Nederlands. Focus op budget-vriendelijk reizen. Als je iets niet zeker weet, zeg dat eerlijk. Houd antwoorden beknopt en praktisch.
```

**Bestanden:**
- Nieuw: `supabase/functions/algarve-chat/index.ts`
- Herschrijven: `src/components/AIAssistant.tsx`
- Aanpassen: `src/pages/Index.tsx` (AIAssistant toevoegen)
- Installeren: `react-markdown` package

