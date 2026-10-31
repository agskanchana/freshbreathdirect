"""Generate logo concepts with Gemini image model. Usage: python gen_gemini.py [model]"""
import base64, json, os, sys, urllib.request, concurrent.futures as cf

MODEL = sys.argv[1] if len(sys.argv) > 1 else "gemini-3-pro-image"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "gemini")
os.makedirs(OUT, exist_ok=True)

BASE = (
    "Professional vector-style logo design for a UK company called \"Fresh Breath Direct\" "
    "(tagline: \"Experts in PaperMints\"), a distributor of PaperMints sugar-free breath fresheners "
    "(dissolving mint strips, cool capsules, mouth spray). Brand colours: deep indigo #342F80, "
    "bright cyan / ice blue #00C0F1, and white. Clean, sleek, modern, premium, fresh and cool. "
    "Flat design, crisp edges, no gradients unless subtle, no mockup, no 3D render, no photo, "
    "plain pure white background, logo centred with generous margin. Spell all text exactly and correctly. "
)

CONCEPTS = {
    "g1-breath-swoosh": "Concept: horizontal logo. Bold italic condensed uppercase wordmark \"FRESH BREATH DIRECT\" in indigo "
        "(similar to Barlow Condensed ExtraBold Italic), with a dynamic cyan breath/air swoosh that streams out to the right "
        "like a fast cool breeze, suggesting speed and delivery. Small tagline underneath in cyan: \"EXPERTS IN PAPERMINTS\".",
    "g2-mint-strip-icon": "Concept: icon + wordmark. The icon is a thin rectangular mint strip (like a paper breath strip) drawn as "
        "a rounded rectangle tilted slightly, in cyan, with a small white sparkle and a little fold at one corner. To its right, "
        "the wordmark \"Fresh Breath\" in heavy rounded indigo sans-serif, with \"DIRECT\" below in spaced cyan capitals.",
    "g3-fbd-monogram": "Concept: monogram. A bold, geometric \"FBD\" monogram inside a rounded-square app-icon shape in indigo, "
        "letters in white, with a cyan breath wave cutting through the letters. Below the icon the full name "
        "\"Fresh Breath Direct\" in indigo and small \"EXPERTS IN PAPERMINTS\" in cyan.",
    "g4-cool-pearl": "Concept: wordmark where the letter 'o' is not present, so instead place a 'double pearl' capsule icon "
        "(a cyan circle with a smaller white-highlighted inner circle, like a glossy mint pearl, but drawn flat) before the text. "
        "Text: \"fresh breath\" in lowercase heavy rounded indigo sans, and \"DIRECT\" in cyan bold italic condensed caps. "
        "Tagline \"Experts in PaperMints\" small in indigo.",
    "g5-breath-arrow": "Concept: icon made from three curved cyan and indigo breath/wind lines that merge into a forward-pointing "
        "arrow (direct delivery), forming a minimal circular emblem. Next to it the stacked wordmark: \"FRESH BREATH\" on top in "
        "indigo bold condensed italic caps and \"DIRECT\" below in cyan, plus tiny tagline \"EXPERTS IN PAPERMINTS\".",
    "g6-badge": "Concept: circular badge / seal logo. Indigo circle with a thin cyan inner ring. Curved text around the ring: "
        "\"FRESH BREATH DIRECT\" on top and \"EXPERTS IN PAPERMINTS\" along the bottom, in white condensed caps. In the centre a "
        "simple white mint leaf combined with a breath swirl. Minimal, modern, not vintage.",
}


def generate(name, concept):
    body = {
        "contents": [{"parts": [{"text": BASE + concept}]}],
        "generationConfig": {"responseModalities": ["IMAGE"], "imageConfig": {"aspectRatio": "4:3"}},
    }
    req = urllib.request.Request(
        f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent",
        data=json.dumps(body).encode(),
        headers={"Content-Type": "application/json", "x-goog-api-key": os.environ["GEMINI_API_KEY"]},
    )
    try:
        with urllib.request.urlopen(req, timeout=300) as r:
            data = json.load(r)
    except urllib.error.HTTPError as e:
        return f"{name}: HTTP {e.code} {e.read()[:300]!r}"
    for cand in data.get("candidates", []):
        for part in cand.get("content", {}).get("parts", []):
            inline = part.get("inlineData") or part.get("inline_data")
            if inline:
                ext = "png" if "png" in inline.get("mimeType", "png") else "jpg"
                path = os.path.join(OUT, f"{name}.{ext}")
                with open(path, "wb") as f:
                    f.write(base64.b64decode(inline["data"]))
                return f"{name}: saved {path}"
    return f"{name}: no image returned: {json.dumps(data)[:300]}"


if __name__ == "__main__":
    with cf.ThreadPoolExecutor(max_workers=6) as ex:
        for msg in ex.map(lambda kv: generate(*kv), CONCEPTS.items()):
            print(msg, flush=True)
