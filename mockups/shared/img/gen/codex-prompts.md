# Codex image prompts (built-in image_gen, 2026-11-02)

Each job = common brief + job list. Originals saved here as PNG; the pages use WebP copies in ../web/.

## common

You are generating raster art for website mockups. Use the imagegen skill with the BUILT-IN `image_gen` tool (one call per asset). Do not use the CLI fallback.

BRAND CONTEXT: "Fresh Breath Direct" is a UK online shop selling PaperMints breath fresheners: CoolCaps (tiny double-pearl capsules), dissolving mint strips, and an alcohol-free mouth spray. Palette: deep indigo #342F80, bright cyan #00C0F1, ice blue #A8E9FB, white, with fresh mint-green leaves as a small accent. Mood: fresh, cool, clean, premium, modern, confident, friendly, British.

PRODUCT REALISM NOTES:
- A CoolCaps pearl is a tiny (about 5 mm) perfectly round, seamless, glossy, translucent BLUE capsule, like a small glass marble or caviar pearl, with a smaller deeper-blue inner capsule faintly visible inside it.
- A PaperMints strip is an ultra-thin, translucent pale-blue dissolvable film, about 2 x 3 cm, with rounded corners, often slightly curled, glossy.

HARD RULES FOR EVERY IMAGE (unless a line below says otherwise):
- NO text, letters, numbers, logos, brand names, labels or watermarks anywhere in the image.
- NO packaging of any kind (no boxes, tins, tubes, bottles, sachets, blister packs). Real packaging is composited separately.
- People must look natural and diverse, with realistic hands and teeth. Tasteful, editorial, advertising quality.

WORKFLOW:
1. Generate each asset below with its own image_gen call. Ask for a TRANSPARENT background whenever the asset says "transparent" and keep the alpha channel.
2. After each generation, view the result and check it against the rules and the asset description (no text/logos/packaging; colours; composition; transparency when requested). If it fails, regenerate ONCE with a targeted fix and keep the better one.
3. Copy each final image from $CODEX_HOME/generated_images/... into the OUTPUT FOLDER below with the EXACT file name given (PNG). Create the folder if needed. Do not create or edit any other files in the repository.
4. Finish by printing a list of saved paths, each with one short line on how well it matches the brief.

## job1_mascot

OUTPUT FOLDER: mockups/shared/img/gen/buddy

The attached image is the client's chosen logo. The character on the left is the brand mascot "Buddy": a round cyan mint pearl (body #22C8EC with a slightly darker cyan crescent shade on the lower right), thick dark-indigo outline (#1F1A66), two closed happy arc eyes, a small smile, short stubby arms, two short rounded legs, and a white sticker border around the whole figure. It is a flat vector illustration.

Create 10 new poses of the SAME character. Match its style exactly: same body shape and proportions, same outline weight, same colours, same simple face style, same flat vector look, same white sticker border around the whole figure including any props. Each image: square 1024x1024, TRANSPARENT background, character centred, full figure visible with generous padding, no scenery, no text, no ground shadow. Props use the same flat style and palette (indigo outline, cyan/ice-blue/white fills, small mint-green accents only where natural).

1. buddy-wave.png: waving hello with one arm raised high, big friendly open smile, eyes as happy arcs.
2. buddy-pearl.png: hugging a giant glossy blue pearl (a translucent blue sphere with a smaller inner sphere visible inside) that is about as big as Buddy, looking proud.
3. buddy-coffee.png: holding a plain takeaway coffee cup with a little steam, and puffing out a small cyan cloud of fresh breath to the side.
4. buddy-meeting.png: wearing a tiny indigo necktie, holding a small briefcase, confident wink, a little sparkle next to the smile.
5. buddy-love.png: heart-shaped eyes, rosy cheeks, puffing out a small cyan breath cloud shaped like a heart.
6. buddy-dinner.png: napkin tucked in, holding a fork and knife, a small garlic bulb beside it, happy satisfied face.
7. buddy-surf.png: surfing on a thin translucent pale-blue mint strip used like a surfboard, arms out for balance, joyful, a few motion lines.
8. buddy-zen.png: sitting cross-legged meditating, eyes closed, calm smile, two small sparkles and one mint leaf floating above.
9. buddy-thumbs.png: thumbs up and a wink, with two small sparkles.
10. buddy-gym.png: lifting a small dumbbell in one hand and holding a plain unlabelled shaker bottle in the other, energetic.

## job2_objects

OUTPUT FOLDER: mockups/shared/img/gen/obj

Photoreal 3D product-style renders of the consumables (no packaging). Studio lighting, crisp, premium.

1. obj-pearl.png: a single CoolCaps pearl, extreme macro, glossy translucent blue (#1EA8E8) outer sphere with a smaller deeper-blue inner sphere visible inside (slightly lower than centre), glass-like refraction, crisp specular highlight. TRANSPARENT background, no shadow, square 1024x1024, pearl fills about 70% of the frame.
2. obj-pearl-red.png: the same render but the pearl is translucent strawberry red-pink (strawberry flavour) with a deeper red inner sphere. TRANSPARENT background, square.
3. obj-pearls-scatter.png: about nine blue pearls of different sizes floating at different depths, the nearest ones sharp, the farthest slightly defocused, a couple with light motion blur. TRANSPARENT background, landscape 1536x1024.
4. obj-cross-section.png: a cut-away 3D render of the double pearl sliced in half, showing four concentric layers: a thin clear outer gelatin shell, a translucent cyan mint liquid layer, a thin inner shell, and a deep-blue core. Clean, scientific yet beautiful, soft studio light. TRANSPARENT background, no labels, square.
5. obj-mint-leaves.png: four vivid fresh mint leaves with tiny water droplets, floating at different angles and depths. TRANSPARENT background, landscape 1536x1024.
6. obj-ice-splash.png: a dynamic radial splash of icy cyan water with small ice crystals and droplets bursting outward from the centre, leaving the centre fairly open. TRANSPARENT background, landscape 1536x1024.
7. obj-strip.png: a single ultra-thin translucent pale-blue dissolvable breath strip with rounded corners, gently curled, glossy sheen, a few micro droplets. TRANSPARENT background, square.
8. obj-mist.png: a burst of fine cool mist spray travelling from left to right and expanding, white with a cyan tint. TRANSPARENT background, landscape 1536x1024.
9. obj-ice-cubes.png: three crystal-clear ice cubes with frost and droplets, slightly tumbling. TRANSPARENT background, landscape 1536x1024.
10. c-hero-pearl.png: minimalist product photograph (NOT transparent): one large glossy translucent blue pearl resting on a white glossy reflective surface, soft cyan caustic light patterns on the surface, very bright airy white background, lots of negative space on the LEFT half, pearl placed on the right third. Landscape 1536x1024.

## job3_life

OUTPUT FOLDER: mockups/shared/img/gen/life

Photoreal editorial lifestyle photographs for a UK breath-freshener shop. Natural light, real skin texture, candid moments, a subtle cool colour grade (hints of cyan/indigo in clothing or decor). No product packaging, no text, no logos, no readable screens.

1. life-meeting.png: a confident woman in her 30s presenting to two colleagues around a table in a bright modern London office meeting room, leaning in close as she speaks, natural daylight, shallow depth of field. Landscape 1536x1024.
2. life-coffee.png: a man in his late 20s at a cafe window counter who has just finished a flat white (latte-art cup in front of him), smiling as he turns to greet a friend, soft morning light. Landscape 1536x1024.
3. life-dinner.png: a group of friends laughing over an Italian dinner with garlic bread and pasta, warm candlelight mixed with cool blue dusk light from a window, two of them leaning in close to talk. Landscape 1536x1024.
4. life-keto.png: top-down flat lay of keto and protein foods (avocado halves, a salmon fillet, boiled eggs, almonds, a scoop of protein powder, a few mint leaves) on a pale blue-grey stone surface, bright and fresh, with generous empty space on the right third. Landscape 1536x1024.
5. life-strip-tongue.png: tasteful bright beauty close-up of a smiling young woman placing a single thin translucent pale-blue strip on the tip of her tongue, clean studio, pale ice-blue backdrop, healthy glossy look. Portrait 1024x1536.
6. life-fresh-smile.png: close-up portrait of a man in a navy knit jumper smiling confidently and exhaling a visible puff of cool breath like frosty winter air, crisp morning light, cool cyan tint. Landscape 1536x1024.
7. life-drinks.png: friends clinking glasses in a sunny British pub garden, laughing, two of them leaning in close to chat. Landscape 1536x1024.
8. life-pharmacy.png: a friendly pharmacist smiling behind the counter of a bright modern UK pharmacy, shelves softly blurred behind (no readable labels or brands). Landscape 1536x1024.

## job4_dark

OUTPUT FOLDER: mockups/shared/img/gen/dark

Cinematic night-time imagery for a dark, premium website direction. Colour grade: deep indigo/blue-black shadows with glowing cyan highlights and a little warm practical light. Moody, stylish, high-end advertising look. No product packaging, no text, no logos, no readable signs.

1. dark-hero-pearl.png: extreme close-up of elegant fingertips holding a single tiny glossy translucent blue pearl capsule (about 5 mm), dramatic cyan rim light, deep indigo-black background with soft blue haze, lots of negative space on the LEFT. Landscape 1536x1024.
2. dark-rooftop.png: friends at a rooftop party at night with city-skyline bokeh, cool cyan and indigo lighting, two of them leaning in close to talk and laugh. Landscape 1536x1024.
3. dark-date.png: a stylish couple at a dim cocktail bar, faces close as they whisper and smile, cyan neon glow mixed with warm candlelight, tasteful and romantic. Landscape 1536x1024.
4. dark-meeting.png: two professionals shaking hands in a glass-walled office at dusk, city lights behind, cool blue tones, confident. Landscape 1536x1024.
5. dark-taxi.png: a stylish woman stepping out of a black London taxi at night in light rain, smiling, wet street with cyan and indigo neon reflections. Portrait 1024x1536.
6. dark-smoke.png: abstract swirling cool cyan mist on a deep indigo-black background, airy wisps concentrated on the right, lots of empty dark space on the left. Landscape 1536x1024.
7. dark-ice.png: macro of frosted ice crystals backlit with cyan light on a dark indigo background, shallow depth of field. Landscape 1536x1024.

## job5_ill

OUTPUT FOLDER: mockups/shared/img/gen/ill

Illustrations and backgrounds.

1. ill-phase-mouth.png: elegant minimal monoline illustration (dark indigo #342F80 strokes, single consistent line weight) of a side-profile face with the mouth slightly open, a small glowing cyan pearl melting on the tongue, and soft cyan freshness waves radiating from the mouth. Clean, modern, friendly, medical-infographic quality. TRANSPARENT background, square 1024x1024, no text.
2. ill-phase-stomach.png: the same monoline style: a simple front-view torso outline with the oesophagus and stomach drawn inside, a small blue inner capsule glowing in the stomach and gentle cyan cooling waves and arrows rising upward. TRANSPARENT background, square, no text.
3. bg-ice-texture.png: very subtle frosted-glass / ice texture in pale ice blue and white, soft and light enough to sit behind dark text, evenly lit. Landscape 1536x1024.
4. bg-fresh-wave.png: abstract flowing silk-ribbon waves in cyan, ice blue and a touch of indigo sweeping across a bright white background, airy and premium, waves concentrated at the bottom-right, lots of clean white space top-left. Landscape 1536x1024.
5. bg-cyan-burst.png: bold graphic background: bright cyan (#00C0F1) to deep indigo (#342F80) diagonal gradient with dynamic speed streaks and a few soft white light flares, energetic retail-ad style, no objects. Landscape 1536x1024.
