**Source Visual Truth**
- Path: `/Users/ariga/Documents/Test revamp ASYV/asyv-revamp/public/reference/codex-calm-selected.png`
- Selected direction: Codex Calm

**Implementation Evidence**
- Local URL: `http://127.0.0.1:5173/`
- Primary screenshot: `/Users/ariga/Documents/Test revamp ASYV/asyv-revamp/qa-screenshots/home-desktop-static-v2.png`
- Full homepage screenshot: `/Users/ariga/Documents/Test revamp ASYV/asyv-revamp/qa-screenshots/home-desktop-full-v3.png`
- Mobile screenshot: `/Users/ariga/Documents/Test revamp ASYV/asyv-revamp/qa-screenshots/home-mobile-static-v2.png`
- Viewport: desktop `1440 x 900`, mobile `390 x 844`
- State: homepage first viewport; `?qa-static=1` replaces the moving video layer with the same poster image only so screenshot capture can complete. Normal route uses the local video.

**Full-View Comparison Evidence**
- Side-by-side comparison: `/Users/ariga/Documents/Test revamp ASYV/asyv-revamp/qa-screenshots/home-comparison.png`
- The implementation follows the selected direction's quiet navigation, large serif hero, video-control treatment, restrained CTAs, ivory mission section, model section, impact band, story block, split CTA, newsletter, and footer.
- Intentional deviation: the implementation uses ASYV-owned imagery and a full-screen first viewport per user feedback, instead of the generated mock's classroom image and shorter hero crop.

**Focused Region Evidence**
- Impact band: `/Users/ariga/Documents/Test revamp ASYV/asyv-revamp/qa-screenshots/impact-band-v2.png`
- Donate modal: `/Users/ariga/Documents/Test revamp ASYV/asyv-revamp/qa-screenshots/donate-modal.png`
- Mobile menu: `/Users/ariga/Documents/Test revamp ASYV/asyv-revamp/qa-screenshots/mobile-menu.png`
- Inner page example: `/Users/ariga/Documents/Test revamp ASYV/asyv-revamp/qa-screenshots/visit-desktop-v2.png`

**Findings**
- No actionable P0/P1/P2 findings remain.

**Required Fidelity Surfaces**
- Fonts and typography: Cormorant Garamond plus Inter recreate the mock's refined serif/sans pairing with strong hierarchy, comfortable body sizing, and no cramped text blocks.
- Spacing and layout rhythm: first viewport is video-led and spacious; sections use large vertical padding and full-width bands rather than dense brochure-style cards.
- Colors and visual tokens: ivory, forest green, clay, and brass match the selected direction while preserving ASYV warmth.
- Image quality and asset fidelity: hero video is local; main imagery uses ASYV assets. The visit page was patched from an icon-like asset to a real campus/student image.
- Copy and content: main ASYV pages, stories, events, donation, newsletter, visit, contact, FAQ, and involvement pages use mission-appropriate content and working route states.

**Interaction Checks**
- Local video exists and plays on the normal route: `readyState: 4`, muted autoplay, not paused.
- Donation modal opens, accepts an email, and reaches the thank-you state.
- Mobile menu opens at `390 x 844`.
- 24 routes checked; no route fell into the not-found view.

**Patches Made Since First QA Pass**
- Removed the inverted logo filter that made the ASYV logo appear as a white blob.
- Replaced the visit hero image with a real ASYV campus/student photo.
- Scoped impact-label CSS so stat numbers render at the intended large scale.
- Removed prototype-facing UI copy from forms and donation success states.
- Added accessible spacing in the hero headline text.

**Follow-up Polish**
- P3: Replace the current Wikimedia classroom video with ASYV-owned video footage when available for a stronger brand match.
- P3: Create a purpose-built white ASYV wordmark asset for the transparent hero header if brand guidelines allow it.

final result: passed
