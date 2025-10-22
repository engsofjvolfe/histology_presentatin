# Prompts para Geração de Vídeos Curtos - Apresentação Histologia

## 🎨 ESTILO VISUAL DE REFERÊNCIA (Baseado em osso1.png, osso2.png, osso3.png, osso4.png)

### Características Visuais das Imagens de Referência:

**ESTILO GERAL:**

- Ilustração médica 3D semi-realista, estilo "cartoon científico educacional"
- Perspectiva isométrica suave (~25-30°) mostrando profundidade
- Renderização vetorial com acabamento macio e orgânico
- Iluminação difusa superior-frontal, sem sombras duras
- Contornos pretos finos (1-2px) definindo cada elemento
- **FUNDO TRANSPARENTE** (formato PNG com alpha channel)
- Textura semi-fosca, aspecto didático clean

**PALETA DE CORES EXATA:**

```
MATRIZ ÓSSEA: #F5E6D3 (bege creme claro), #E8D5BD (bege médio), #D4C0A8 (bege escuro)
OSTEOBLASTOS: #D8A0C8 (rosa-lilás), núcleo #6850A8 (roxo azulado)
OSTEÓCITOS: dentro de lacunas marrons, núcleo #4860B8 (azul médio-escuro)
OSTEOCLASTOS: #C89880 (marrom-rosado), múltiplos núcleos #486090 (azul profundo)
CÉLULAS PROGENITORAS: #E8C8A8 (bege-rosado claro), núcleo #7080B8 (azul-acinzentado)
FIBRAS COLÁGENO: #98C8A8 (verde-menta suave)
VASOS SANGUÍNEOS: #E88880 (vermelho-coral suave)
NERVOS: #F8E880 (amarelo-dourado suave)
CARTILAGEM: #B8D8C8 (verde-azulado pastel)
```

**ELEMENTOS TÉCNICOS:**

- Sombras: opacity 15-20%, cor #00000030, blur 3-4px
- Células: gradiente radial do centro (claro) para borda (escuro)
- Núcleos: sempre esféricos, 40-50% do tamanho celular, cor sólida
- Membranas: stroke 1.5px em tom 25% mais escuro que a célula
- Labels: fonte sans-serif preta #000000, tamanho 16-20px, linhas indicadoras finas

**FORMATO DE VÍDEO PARA SLIDES:**

- **Duração**: 3-5 segundos por ciclo (loops curtos)
- **FPS**: 30 frames por segundo
- **Loop**: seamless infinito (para reprodução contínua no slide)
- **Resolução**: 1920x1080px (Full HD) ou 1280x720px (HD)
- **Codec**: H.264/MP4 (compatibilidade máxima com navegadores)
- **Movimentos**: sutis e cinematográficos (câmera lenta, zoom suave, parallax, floating, pulsing)
- **Transições**: suaves e orgânicas (ease-in-out, cubic-bezier)
- **Compatibilidade**: Kaiber, RunwayML Gen-2, Pika Labs, Stable Video Diffusion

---

## 📋 PROMPTS ESPECÍFICOS POR SLIDE

### **SLIDE 3: Introdução ao Tecido Ósseo**

**Arquivo**: `slide3-bone-structure.mp4`

**Contexto do Slide (do HTML):**

- Características: tecido conjuntivo dinâmico, vascularizado, matriz mineralizada, colágeno tipo I, hidroxiapatita
- Funções: suporte estrutural, proteção, reservatório de cálcio/fósforo, hematopoiese, locomoção
- Layout: 2 colunas, texto à esquerda, vídeo à direita

**PROMPT PARA GERAÇÃO DE VÍDEO (Kaiber/RunwayML/Pika):**

```
Animated medical educational video showing bone tissue structure in cross-section, 3D isometric cinematic style matching reference images osso1-4.png. Main subject: cubic section of bone showing BOTH compact and spongy bone in gentle rotation. LEFT SIDE: compact bone (cortical) with concentric lamellae forming Haversian systems - circular patterns in beige (#F5E6D3), central Havers canals containing blood vessels (red #E88880) with subtle pulsing flow animation, osteocytes in lacunae (blue nuclei #4860B8) connected by thin canaliculi. RIGHT SIDE: spongy bone (trabecular) with interconnected trabeculae creating honeycomb pattern, red bone marrow spaces (light pink) between trabeculae. SURFACE LAYER: periosteum (thin beige membrane) with osteoblasts (#D8A0C8 pink cubes) lining the surface, cells subtly pulsing. ZOOM DETAIL CALLOUT animating in at 1.5 seconds showing: collagen fibers (green #98C8A8 wavy lines) gently undulating, hydroxyapatite crystals (small yellow geometric shapes) sparkling, mineralized matrix (beige with speckled texture). Blood vessels throughout in coral-red with flowing animation. Soft 3D rendering, pastel colors, black thin outlines (1.5px), clean educational style, cinematic lighting. Labels in Portuguese floating: "Osso Compacto", "Osso Esponjoso", "Sistema de Havers", "Osteócitos", "Matriz Mineralizada", "Colágeno Tipo I", "Hidroxiapatita".

VIDEO MOTION INSTRUCTIONS:
- Duration: 4 seconds seamless loop
- Camera: Slow circular orbit around bone section (10-15° arc, clockwise)
- Lighting: Gentle ambient light with subtle top-front key light
- Element animations:
  * Blood vessels: Pulsing glow effect (opacity 80%-100%, 1.5s cycle)
  * Osteoblasts: Subtle scale pulse (100%-103%, 2s cycle)
  * Collagen fibers: Gentle wave motion (floating effect)
  * Hydroxyapatite crystals: Sparkle/twinkle intermittently
  * Zoom callout: Scale-in animation from 0.8 to 1.0 at 1.5s mark with ease-out
- Transition: Smooth loop back to start position
- Style: Organic, educational, non-distracting motion
- Export: 1920x1080px, 30fps, H.264, seamless loop
```

**Português (resumido):**
"Vídeo médico 3D animado de seção de osso em rotação suave mostrando estrutura compacta e esponjosa. Lado esquerdo: osso compacto com sistemas de Havers (círculos concêntricos bege), canais centrais com vasos pulsando (vermelho), osteócitos em lacunas (azul). Lado direito: osso esponjoso com trabéculas interconectadas formando padrão favo de mel. Superfície: periósteo com osteoblastos rosa pulsando. Detalhe em zoom aparecendo aos 1.5s mostrando fibras de colágeno ondulando (verde), cristais de hidroxiapatita cintilando (amarelo), matriz mineralizada. Câmera em órbita circular lenta (10-15°), 4s loop, iluminação cinematográfica, labels em português flutuando."

---

### **SLIDE 7: Por que Organismos Modelo?**

**Arquivo**: `slide7-organismos.mp4`

**Contexto**: Axolote (capacidade regenerativa excepcional), Zebrafish (transparência e manipulação genética), Xenopus (modelo de perda de capacidade regenerativa)

**PROMPT PARA GERAÇÃO DE VÍDEO:**

```
Animated educational scientific video of three model organisms for bone regeneration research, 3D semi-realistic cinematic style matching osso1-4.png aesthetic. Arranged horizontally in THREE EQUAL PANELS with parallax depth:

LEFT PANEL - AXOLOTL (Ambystoma mexicanum): Pink-beige body (#F5D8C8), external feathery gills (coral-pink branching structures) gently swaying, shown in 3/4 lateral view. RIGHT FRONT LIMB with animated pulsing glow showing REGENERATION IN PROGRESS - transparent overlay revealing internal structures in motion: bone (beige #F5E6D3) ossifying with subtle growth, cartilage (blue-green #B8D8C8), muscle (pink #E8B8B8) fiber formation, nerves (yellow #F8E880) extending, blastema formation (pink cellular mass) with cells subtly dividing/moving. "★★★" stars above twinkling indicating "Very High" regenerative capacity. Particles floating around regeneration zone.

CENTER PANEL - ZEBRAFISH (Danio rerio): Adult zebrafish 3/4 lateral view gently swimming in place, signature blue horizontal stripes (#4880C8) on silver-white body with subtle shimmer. SEMI-TRANSPARENT showing internal skeleton in cyan-green fluorescence (#80E8C8) pulsing. Caudal fin partially regenerating with visible blastema (pink glow breathing effect). Small microscope icon with animated scanning beam. "★★" stars twinkling for "High" capacity. Fins undulating naturally.

RIGHT PANEL - XENOPUS (African clawed frog): Two-stage animated sequence - BOTTOM: tadpole stage (green #88B898) swimming, full regenerative capacity with limb bud glowing and pulsing), TOP: adult frog (olive-green #78A888) with breathing motion, same limb area shown as NON-regenerative with ✗ mark fading in/out. Animated arrow between stages showing metamorphosis transformation. "★" star pulsing for "Moderate" declining capacity.

VISUAL STYLE: Soft 3D rendering with cinematic depth, pastel medical colors, thin black outlines (1.5px), gentle drop shadows (20% opacity), atmospheric lighting. Clean sans-serif labels in black floating: "Axolote", "Zebrafish", "Xenopus". Animated icons: twinkling stars, scanning microscope, flowing arrow.

VIDEO MOTION INSTRUCTIONS:
- Duration: 5 seconds seamless loop
- Camera: Gentle parallax shift (subtle left-right pan 5-8°)
- Panel depth: Each panel at slightly different Z-depth for 3D effect
- Element animations:
  * Axolotl: Gills sway, regenerating limb glows (pulse 80%-100%), cells move, bone grows
  * Zebrafish: Body swims in place, fins undulate, skeleton pulses fluorescence, microscope scans
  * Xenopus: Tadpole swims, transformation arrow flows, adult breathes, stars twinkle sequentially
  * Stars: Twinkle in sequence (left to right) every 1.5s
  * Regeneration zones: Breathing glow effect (scale 100%-108%)
- Lighting: Soft ambient with subtle highlights on regenerating areas
- Transition: Smooth loop with fade continuity
- Export: 1920x1080px, 30fps, H.264, seamless loop
```

---

### **SLIDE 8: Axolote - Ambystoma mexicanum**

**Arquivo**: `slide8-axolote.mp4`

**PROMPT PARA GERAÇÃO DE VÍDEO:**

```
Animated time-lapse medical video of axolotl limb regeneration stages, 3D anatomical cinematic style matching osso1-4.png.

MAIN SUBJECT: Mexican axolotl in lateral view, pink-beige body (#F5D8C8), external feathery gills (coral-pink #E89888) gently swaying, body subtly breathing.

FOCUS: RIGHT FRONT LIMB shown in FIVE SEQUENTIAL STAGES with smooth morphing transitions arranged in curved timeline flowing from top to bottom:

STAGE 1 (0.0-1.0s): Intact limb - normal anatomy with visible bone (beige), muscle (pink), skin, slight ambient glow indicating healthy tissue

STAGE 2 (1.0-2.0s): Fresh amputation site - clean cut with gentle fade transition, wound epidermis forming (thin pink layer covering stump) growing from edges, subtle healing glow

STAGE 3 (2.0-3.0s): Blastema formation (3-5 days) - pink cellular mass (#D8A0C8) bulging and growing at amputation site with organic expansion animation, dedifferentiated mesenchymal cells visible as small purple dots moving/dividing in Brownian motion, pulsing pink glow indicating active proliferation

STAGE 4 (3.0-4.0s): Differentiation (7-14 days) - blastema elongating with smooth growth, internal structures appearing with animated formation: bone ossifying (beige #F5E6D3) growing from proximal to distal, cartilage (blue-green #B8D8C8) forming template, muscle fibers (pink-red #E8B8B8) threading through, nerves (yellow thin lines #F8E880) extending like growing vines, blood vessels sprouting (red #E88880) with visible flow animation

STAGE 5 (4.0-5.0s): Fully regenerated limb (4-6 weeks) - complete restoration morphing to identical original anatomy, NO SCAR tissue, final golden glow indicating completion, matches Stage 1 perfectly

DETAILED CROSS-SECTION CALLOUT (appearing at Stage 3, floating beside main view):
Animated zoom into blastema showing cellular activity in motion:
- Mesenchymal stem cells (purple #9880C8) dividing
- Dedifferentiated osteoblasts (pink cubes #D8A0C8) moving
- Chondrocyte precursors (light blue #A8D4C8) differentiating
- Blood capillaries forming (red networks growing)
- Nerve fibers infiltrating (yellow threads extending)

Soft pastel 3D style, organic cellular textures, cinematic lighting. Black labels with thin indicator lines appearing sequentially: "Amputação", "Epiderme de Ferida", "Blastema", "Diferenciação", "Regeneração Completa". Timeline indicator showing progression.

VIDEO MOTION INSTRUCTIONS:
- Duration: 5 seconds continuous time-lapse
- Camera: Slow push-in zoom (scale 1.0 → 1.15) focusing on limb
- Stage transitions: Smooth morphing (ease-in-out, 0.3s overlap between stages)
- Element animations:
  * Stage 1: Ambient glow, subtle movement
  * Stage 2: Wound epidermis grows from edges inward
  * Stage 3: Blastema expands (scale 0.5 → 1.2), cells move/divide, pulsing glow
  * Stage 4: Structures grow directionally (proximal → distal), vessels flow, nerves extend
  * Stage 5: Final glow effect, match Stage 1 anatomy
  * Callout: Zooms in at 2.0s, cellular motion visible, zooms out at 3.5s
  * Background axolotl: Gills sway throughout, body breathes
- Timeline marker: Progress bar or dot moving along curved path
- Lighting: Warm ambient with key light on regenerating limb
- Export: 1920x1080px, 30fps, H.264, seamless loop (Stage 5 fades back to Stage 1)
```

---

### **SLIDE 10: Genes e Vias Chave no Axolote**

**Arquivo**: `slide10-vias-blastema.mp4`

**PROMPT PARA GERAÇÃO DE VÍDEO:**

```
Animated molecular signaling network video for axolotl blastema regeneration, educational 3D medical illustration style matching osso1-4.png with dynamic pathway activation.

CENTRAL ELEMENT: Cross-section of blastema tissue (pink cellular mass #D8A0C8) with individual mesenchymal cells visible and moving, nuclei in purple-blue pulsing. Blastema labeled in center, rotating slowly.

FOUR MAJOR PATHWAYS arranged as nodes around blastema in circular layout, activating sequentially:

1. WNT/β-CATENIN PATHWAY (TOP-LEFT, GREEN #68C898) - activates at 0.0-1.0s:
   - Wnt ligand protein (green gradient sphere) floating toward receptor
   - Frizzled receptor on cell membrane receiving signal
   - β-catenin molecules (orange dots #E8A848) accumulating and moving toward nucleus
   - Arrow to nucleus showing gene activation with glow effect
   - Label appearing: "Wnt/β-catenina - Formação do Blastema"

2. BMP PATHWAY (TOP-RIGHT, BLUE #6898C8) - activates at 1.0-2.0s:
   - BMP ligand (blue gradient sphere) binding to receptors
   - BMP receptors (BMPR I/II) conformational change
   - SMAD proteins (blue triangles) translocating to nucleus in animated path
   - Target genes lighting up: osteogenic differentiation markers
   - Label: "BMPs - Diferenciação Osteogênica"

3. FGF PATHWAY (BOTTOM-LEFT, ORANGE #E8A868) - activates at 2.0-3.0s:
   - FGF ligand (orange gradient sphere) approaching
   - FGF receptors (FGFR) activating
   - MAPK cascade (orange dotted arrows flowing sequentially)
   - Cell proliferation indicators (cells dividing animation)
   - Label: "FGF - Proliferação Celular"

4. VEGF PATHWAY (BOTTOM-RIGHT, RED #E88878) - activates at 3.0-4.0s:
   - VEGF ligand (red gradient sphere) signaling
   - VEGFR on endothelial cells responding
   - Angiogenesis (blood vessel sprouting in red with growth animation)
   - Label: "VEGF - Vascularização"

CROSSTALK INTERACTIONS (appearing at 4.0-5.0s): Bidirectional curved arrows flowing between pathways:
- Wnt ↔ BMP (green-blue gradient arrow with particle flow)
- BMP ↔ FGF (blue-orange gradient arrow with signal waves)
- FGF ↔ VEGF (orange-red gradient arrow pulsing)
- VEGF ↔ Wnt (red-green gradient arrow completing circle)

VISUAL STYLE: 3D molecular structures (space-filling models with subtle rotation), gradient colored pathways glowing, animated dotted arrows for signaling cascades, flowing particles along arrows. Black sans-serif labels appearing with fade-in.

VIDEO MOTION INSTRUCTIONS:
- Duration: 5 seconds full activation cycle, seamless loop
- Camera: Gentle circular orbit around central blastema (360° over 5s)
- Pathway activation sequence:
  * 0-1s: Wnt pathway lights up, molecules move
  * 1-2s: BMP pathway activates, SMAD translocation
  * 2-3s: FGF pathway fires, MAPK cascade flows
  * 3-4s: VEGF pathway triggers, vessels grow
  * 4-5s: All pathways active, crosstalk arrows appear with flow animation
- Central blastema: Continuous slow rotation (360° over 10s), cells pulsing
- Molecular motion: Ligands floating/binding, particles flowing along arrows
- Glow effects: Pathways pulse when active (brightness 80%-100%)
- Labels: Fade in when pathway activates
- Transition: Smooth fade to loop start
- Export: 1920x1080px, 30fps, H.264, seamless loop
```

---

### **SLIDE 11: Aplicações Biomédicas do Axolote**

**Arquivo**: `slide11-aplicacoes.mp4`

**PROMPT PARA GERAÇÃO DE VÍDEO:**

```
Animated medical translational pipeline video from axolotl to human therapies, clean educational 3D illustration matching osso1-4.png style with sequential reveal.

HORIZONTAL FLOW (LEFT TO RIGHT) with 5 STAGES connected by animated gradient arrows:

STAGE 1 - AXOLOTL MODEL (appears 0.0-1.0s):
- Cute pink-beige axolotl illustration with regenerating limb (blastema glowing pink, pulsing)
- Gills gently swaying
- Regeneration zone with particle effects
- Label fading in: "Modelo Animal - Axolote"

STAGE 2 - GENE DISCOVERY (appears 1.0-2.0s):
- DNA double helix (blue-purple gradient #6870B8) rotating slowly
- Animated magnifying glass scanning and highlighting specific genes
- Gene labels floating in with glow: "Wnt3a", "BMP2", "FGF8", "MSX1", "PAX7"
- Data particles flowing from axolotl to DNA
- Label: "Identificação de Genes Regenerativos"

STAGE 3 - MOLECULAR TARGETS (appears 2.0-3.0s):
- Transcription factors zooming in (hexagonal badges appearing with pop animation):
  - RUNX2 (green #68C898) pulsing
  - Osterix (blue #6898C8) pulsing
  - β-catenin (orange #E8A848) pulsing
- Molecular bonds connecting (animated lines)
- Label: "Fatores de Transcrição Chave"

STAGE 4 - THERAPEUTIC DEVELOPMENT (appears 3.0-4.0s):
- 3D rendered laboratory elements appearing:
  - Glass Erlenmeyer flask with liquid (cyan #88D8E8) bubbling/swirling
  - Syringe with medication (gray-chrome) filling animation
  - Petri dish with cells (pink cellular culture) growing/multiplying
- Lab particles floating
- Label: "Desenvolvimento Terapêutico"

STAGE 5 - CLINICAL APPLICATION (appears 4.0-5.0s):
- Human long bone (femur) in beige (#F5E6D3) rotating into view
- Fracture line (red zigzag) appearing
- Healing tissue (pink callus #D8A0C8) bridging fracture with growth animation
- New bone forming (lighter beige gradient) mineralization wave
- Healing glow effect
- Label: "Aplicação Clínica - Cicatrização de Fraturas"

CONNECTING ARROWS: Animated arrows drawing from left to right between stages (gradient color transitioning), particles flowing along arrows, small plus "+" symbols appearing.

SMALL ICONS (3D rendered, pastel style, floating with gentle bob motion):
- Microscope (rotating subtly)
- DNA helix (spinning)
- Molecular structure (orbiting)
- Medical cross (glowing)

VISUAL STYLE: Soft 3D pastel rendering, clean professional medical infographic, cinematic depth, thin black labels fading in, gentle shadows, atmospheric lighting.

VIDEO MOTION INSTRUCTIONS:
- Duration: 5 seconds sequential reveal, seamless loop
- Camera: Slow push-in (scale 1.0 → 1.1) with slight right pan following flow
- Stage animations:
  * Each stage scales in (0.85 → 1.0) with elastic ease-out
  * Stages remain visible after appearing (cumulative reveal)
  * 0-1s: Stage 1 appears, axolotl limb glows
  * 1-2s: Arrow 1 draws, Stage 2 appears, DNA rotates
  * 2-3s: Arrow 2 draws, Stage 3 appears, factors pulse
  * 3-4s: Arrow 3 draws, Stage 4 appears, flask bubbles
  * 4-5s: Arrow 4 draws, Stage 5 appears, bone heals
- Continuous animations: Axolotl gills, DNA rotation, flask bubbling, bone healing glow
- Arrows: Particle flow animation along paths
- Icons: Gentle floating bob motion (3px amplitude, 2s cycle)
- Lighting: Left-to-right gradient light sweep following progression
- Export: 1920x1080px, 30fps, H.264, seamless loop
```

---

### **SLIDE 14: Vias de Sinalização no Zebrafish**

**Arquivo**: `slide14-zebrafish-fluorescente.mp4`

**PROMPT PARA GERAÇÃO DE VÍDEO:**

```
Animated scientific fluorescence microscopy video of transgenic zebrafish showing dynamic gene expression, matching educational 3D style of osso1-4.png but with BIOLUMINESCENCE cinematic aesthetic.

MAIN SUBJECT: Transparent zebrafish (Danio rerio) in lateral view, body outline in faint gray-white showing skeletal structure. Fish gently swaying/swimming in place with natural movement.

FLUORESCENT GENE EXPRESSION (glowing overlays with dynamic pulsing):

1. WNT SIGNALING (BRIGHT GREEN #00FF88) - pulsing at 2.0s cycle:
   - Concentrated in caudal fin fold (regenerating tail fin) with breathing glow
   - Blastema region glowing intensely with wave pulses radiating outward
   - Scattered cells along dorsal fin twinkling individually
   - Intensity oscillates 75%-100%-75%
   - Label appearing: "Expressão Wnt (verde) - Blastema"

2. FGF20a EXPRESSION (ORANGE #FF8844) - pulsing at 2.5s cycle:
   - Strong signal along growth zones with flowing gradient animation
   - Fin ray proliferation centers with cellular activity (particles moving)
   - Gradient from bright (distal) to dim (proximal) with wave propagation
   - Intensity oscillates 80%-100%-80%
   - Label: "FGF20a (laranja) - Proliferação"

3. BMP SIGNALING (CYAN-BLUE #00CCFF) - pulsing at 3.0s cycle:
   - Bone-forming regions (vertebrae, fin rays ossifying) with discrete pulses
   - Osteoblast differentiation zones lighting up sequentially
   - Discrete spots pattern twinkling asynchronously
   - Ossification wave moving along fin rays
   - Label: "BMP (azul) - Diferenciação Óssea"

BACKGROUND: Dark navy to black gradient (#0A1828 to #000000) to enhance fluorescence visibility, mimicking microscopy dark-field. Subtle particle field (dust/cells) floating slowly.

GLOWING EFFECTS (animated):
- Soft halos around fluorescent cells (outer glow pulsing, 4-8px blur)
- Bloom/lens flare effect on brightest areas (dynamic intensity)
- Multiple cells creating clustered glow regions with synchronized pulses
- Light rays/god rays emanating from bright zones

SKELETON: Faint gray-white (#C8D0D8 at 30% opacity) showing:
- Vertebral column
- Fin ray supports (lepidotrichia)
- Skull outline

CALLOUT BOX (top-right, appearing at 0.5s with fade-in): Animated color legend:
- Green square pulsing: "Wnt - Formação Blastema"
- Orange square pulsing: "FGF - Manutenção Proliferação"
- Blue square pulsing: "BMP - Ossificação"

VISUAL STYLE: Realistic bioluminescence cinematography, dark background, bright neon fluorescent colors with chromatic aberration, soft glows, lens flares, scientific precision with cinematic drama. White text labels (high contrast) with glow.

VIDEO MOTION INSTRUCTIONS:
- Duration: 5 seconds seamless loop
- Camera: Slow push-in zoom (scale 1.0 → 1.08) with very slight vertical drift
- Fish movement: Gentle swimming motion (body wave, tail fin undulation, pectoral fins rowing)
- Fluorescence dynamics:
  * Green (Wnt): Pulse 75%-100% over 2.0s, waves radiate from blastema
  * Orange (FGF): Pulse 80%-100% over 2.5s, gradient flows distally
  * Blue (BMP): Pulse 85%-100% over 3.0s, spots twinkle randomly
  * Polyrhythmic pulsing creates organic "living tissue" effect
- Glow effects: Halos breathe (blur 4-8px), bloom intensity varies
- Background particles: Slow Brownian motion drift
- Callout legend: Squares pulse in sync with corresponding signals
- Lighting: Subtle blue rim light on fish outline
- Transition: Smooth fade for seamless loop
- Export: 1920x1080px, 30fps, H.264, seamless loop, high contrast
```

---

### **SLIDE 15: Vantagens do Modelo Zebrafish**

**Arquivo**: `slide15-pipeline-zebrafish.mp4`

**PROMPT PARA GERAÇÃO DE VÍDEO:**

```
Animated research workflow video for zebrafish bone regeneration studies, clean scientific infographic matching osso1-4.png 3D style with sequential pipeline flow.

HORIZONTAL PIPELINE (6 STAGES, left to right) with animated progression:

STAGE 1 - BREEDING/CULTIVATION (appears 0.0-0.8s):
- 3D rendered glass aquarium tank (transparent cyan-tinted glass with refraction)
- 3-4 adult zebrafish actively swimming (blue stripes #4880C8, silver body with shimmer)
- Water surface with animated ripples and light caustics
- Bubbles rising
- Label fading in: "Cultivo de Zebrafish"

STAGE 2 - EMBRYO COLLECTION (appears 0.8-1.6s):
- Petri dish (transparent glass, slight pink tint) sliding into view
- 10-15 transparent embryos (tiny spheres with visible yolk sac in yellow-orange #F8C878)
- Magnified callout zooming in showing one embryo detail with cell division animation
- Embryos subtly pulsing (heartbeat effect)
- Label: "Coleta de Embriões Transparentes"

STAGE 3 - CRISPR GENE EDITING (appears 1.6-2.4s):
- DNA double helix (blue-purple gradient #6870B8) rotating and unzipping
- Animated scissors icon (gold #D8B848) cutting at specific locus with "snip" effect
- "Cut here" indicator with red dotted line appearing
- Guide RNA strand (green wavy line) aligning and binding
- CRISPR-Cas9 complex assembling
- DNA repairing animation
- Label: "Edição Genética CRISPR"

STAGE 4 - FLUORESCENCE MICROSCOPY (appears 2.4-3.2s):
- 3D microscope (gray-chrome body, black eyepiece) with stage light turning on
- Stage with zebrafish specimen in focus (auto-focus animation)
- Computer monitor showing fluorescent image appearing (green/red/blue signals on black background with scan lines)
- Microscope objective rotating, stage moving
- Label: "Microscopia de Fluorescência"

STAGE 5 - DATA ANALYSIS (appears 3.2-4.0s):
- Laptop/tablet screen with animated data visualization:
  - Line graph drawing (green ascending line plotting left to right)
  - Heat map filling (blue-red gradient grid cells appearing)
  - Bar chart growing (bars rising from bottom)
- Data particles flowing from microscope to screen
- Label: "Análise de Dados"

STAGE 6 - CLINICAL TRANSLATION (appears 4.0-5.0s):
- Syringe filling with medication (chrome needle, glass barrel with liquid rising)
- Human bone model (beige femur #F5E6D3) rotating into view
- Fracture healing animation (gap closing, callus forming)
- Medical cross icon pulsing
- Success glow effect
- Label: "Tradução Clínica"

CONNECTING ELEMENTS (animated sequentially):
- Smooth gradient arrows drawing between stages (color blending stage-to-stage)
- Particles flowing along arrow paths
- Small "→" directional indicators appearing
- Dotted flow lines with moving dashes

ICONS (small, 3D pastel rendered, floating):
- DNA helix spinning
- Microscope lens focusing
- Graph/chart with animated lines
- Medical symbol glowing

VISUAL STYLE: Clean professional 3D infographic with cinematic depth, soft pastel colors, thin black labels (16-18px sans-serif) fading in, gentle shadows, dynamic lighting following progression.

VIDEO MOTION INSTRUCTIONS:
- Duration: 5 seconds sequential pipeline, seamless loop
- Camera: Slow right pan (following pipeline flow) with subtle push-in
- Stage animations:
  * Each stage appears with scale-in (0.85 → 1.0) and fade (0 → 100%)
  * Stages remain visible after appearing (cumulative)
  * 0.0-0.8s: Stage 1, fish swim, water ripples
  * 0.8-1.6s: Arrow 1 draws, Stage 2, embryos pulse
  * 1.6-2.4s: Arrow 2 draws, Stage 3, CRISPR cuts DNA
  * 2.4-3.2s: Arrow 3 draws, Stage 4, microscope scans
  * 3.2-4.0s: Arrow 4 draws, Stage 5, data plots
  * 4.0-5.0s: Arrow 5 draws, Stage 6, bone heals
- Continuous element animations:
  * Fish swimming throughout
  * Embryos pulsing
  * DNA rotating
  * Screen data updating
  * Icons gentle bob motion
- Arrows: Draw animation (0.3s) then particle flow
- Lighting: Spotlight sweep left-to-right following stage reveals
- Export: 1920x1080px, 30fps, H.264, seamless loop
```

---

### **SLIDE 18: Hormônios na Regulação Óssea**

**Arquivo**: `slide18-homeostase-hormonal.mp4`

**PROMPT PARA GERAÇÃO DE VÍDEO:**

```
Animated bone mineral homeostasis hormonal regulation video, 3D medical illustration matching osso1-4.png style with dynamic hormone action visualization.

LAYOUT: THREE HORIZONTAL SECTIONS with animated hormone actions on bone:

LEFT SECTION - PTH (PARATHYROID HORMONE):
- Parathyroid glands (4 small pink-beige ovoid organs #E8C8B8) positioned behind thyroid, pulsing
- PTH hormone molecules (small red spheres #E86868) being released with emission animation
- Large RED ARROW animating downward to bone with flow particles
- Bone cross-section with dynamic activity:
  - Osteoclasts activated (large brown cells #C89880, multinucleated) pulsing and moving
  - Calcium ions (yellow Ca²⁺ symbols #F8D848) being RELEASED from matrix with upward floating animation
  - Matrix resorption animation (beige lightening in color, dissolving effect)
  - Ruffled border visible, acid secretion animation
- Label appearing: "PTH ↑ Cálcio Sérico" with red upward arrow pulsing
- Sub-label: "Glândulas Paratireoides"

CENTER SECTION - BALANCE/HOMEOSTASIS:
- Classic balance scale (gray-chrome 3D with metallic reflection) gently rocking
- Left plate: "Ca²⁺" with calcium ions floating and bouncing
- Right plate: "PO₄³⁻" with phosphate ions floating
- Scale oscillating around equilibrium position (subtle tipping motion)
- Label: "Homeostase Mineral"
- Animated circular arrows indicating dynamic equilibrium (rotating continuously)
- Particles exchanging between plates

RIGHT SECTION - CALCITONIN:
- Thyroid C-cells (follicular cells, purple-blue #7888B8) embedded in thyroid tissue, secreting
- Calcitonin molecules (blue spheres #6888C8) being released with pulse emission
- Large BLUE ARROW animating downward to bone with flow particles
- Bone cross-section with dynamic activity:
  - Osteoblasts active (pink cubes #D8A0C8) lining surface, pulsing and secreting
  - Calcium ions (yellow Ca²⁺ symbols) being DEPOSITED into matrix with downward settling animation
  - Matrix mineralization animation (beige darkening/densifying, crystallization effect)
  - Collagen fibers visible, calcification spreading
- Label: "Calcitonina ↓ Cálcio Sérico" with blue downward arrow pulsing
- Sub-label: "Células C da Tireoide"

BOTTOM SECTION - FGF23:
- Osteocytes embedded in bone matrix (blue nuclei #4860B8 in lacunae) with canalicular network visible
- FGF23 molecules (green spheres #68C888) being released and traveling
- Animated curved arrow with flowing particles pointing to kidney icon
- Kidney icon (red-pink bean shape #D87878) receiving signal, glowing
- Label: "FGF23 → Regulação de Fosfato (Rim)"

BONE TISSUE DETAILS (all sections, animated):
- Beige matrix (#F5E6D3) with subtle texture
- Osteocytes in lacunae with pulsing, canaliculi visible
- Blood vessels (red #E88880) with flowing blood animation
- Trabecular structure visible with depth

VISUAL STYLE: Clean 3D medical diagram with cinematic depth, pastel colors, thin black outlines (1.5px), black sans-serif labels (16-20px) appearing with fade, gentle shadows, dynamic lighting.

VIDEO MOTION INSTRUCTIONS:
- Duration: 5 seconds complete cycle, seamless loop
- Camera: Gentle left-to-right pan across three sections with slight push-in
- Hormone action animations (simultaneous):
  * PTH section (continuous):
    - Glands pulse (100%-110% scale, 1.5s cycle)
    - Red molecules emit and float down (0.5s per molecule, staggered)
    - Calcium ions float up from bone (continuous stream)
    - Osteoclasts pulse (100%-105%, 2s cycle)
    - Matrix resorption: lightening effect with particle emission
  * Calcitonin section (continuous):
    - C-cells pulse (100%-108%, 1.8s cycle)
    - Blue molecules emit and float down (0.6s per molecule, staggered)
    - Calcium ions settle down into bone (continuous stream)
    - Osteoblasts pulse (100%-106%, 2.2s cycle)
    - Matrix mineralization: darkening effect with crystal formation
  * FGF23 section (continuous):
    - Osteocytes pulse (100%-104%, 2.5s cycle)
    - Green molecules travel along curved path to kidney
    - Kidney glows when receiving signal
- Balance scale: Continuous gentle rocking (±3° tilt, 3s cycle)
- Calcium/phosphate particles: Floating Brownian motion
- Equilibrium arrows: Continuous slow rotation
- Blood flow: Particle flow animation in vessels
- Lighting: Subtle highlighting on active regions
- Export: 1920x1080px, 30fps, H.264, seamless loop
```

---

### **SLIDE 19: Paratormônio (PTH) - Estrutura**

**Arquivo**: `slide19-estrutura-pth.mp4`

**PROMPT PARA GERAÇÃO DE VÍDEO:**

```
Animated molecular structure and mechanism video of PTH (parathyroid hormone), detailed 3D biochemical cinematic illustration matching osso1-4.png educational style with dynamic signaling visualization.

LAYOUT: FOUR MAIN ELEMENTS with animated sequential activation:

ELEMENT 1 (TOP-LEFT) - PARATHYROID GLAND ANATOMY (0.0-1.5s):
- 3D cross-section of parathyroid gland (pink-beige ovoid #E8C8B8) pulsing with secretory activity
- Positioned behind thyroid (shown partially, pale pink #F8D8C8)
- Chief cells visible (purple nuclei #9880C8, pink cytoplasm) with active rough ER
- PTH molecules (red dots) being synthesized in rough ER with assembly animation
- Secretory vesicles moving and releasing PTH with exocytosis animation
- Label fading in: "Glândula Paratireoide - Células Principais"

ELEMENT 2 (TOP-CENTER) - PTH MOLECULE STRUCTURE (1.5-2.5s):
- 3D ribbon diagram of PTH (84 amino acids) slowly rotating
- Alpha-helix conformation (purple-pink gradient #C878B8) with subtle undulation
- N-terminal region (residues 1-34) highlighted with glowing effect in BRIGHTER pink (#E8A0D8)
- C-terminal region (35-84) in lighter purple
- Small amino acid spheres along backbone with shimmer
- Disulfide bonds (yellow lines) if applicable, flexing
- Label: "PTH (1-84)" with animated callout: "Região Ativa: 1-34"
- Molecule rotates and moves toward receptor

ELEMENT 3 (TOP-RIGHT) - PTH RECEPTOR (PTH1R) (2.5-3.5s):
- Transmembrane receptor on osteoblast membrane with conformational dynamics
- 7-transmembrane helices (blue-green cylinders #6898B8) embedded in membrane
- Extracellular domain binding PTH molecule (red PTH docking with induced fit animation)
- Intracellular domain coupling to G-protein (green-yellow trimer #88C888) activating
- Cell membrane (beige phospholipid bilayer) with fluid motion
- Receptor conformational change upon PTH binding (helices tilting)
- Label: "Receptor PTH1R (GPCR)"

ELEMENT 4 (BOTTOM) - SIGNALING CASCADE (3.5-5.0s):
Inside osteoblast cell showing sequential animated pathway:
- G-protein activated (yellow-green #88C888) separating into Gα-GTP subunit (GDP→GTP exchange animation)
- Gα subunit moving to adenylyl cyclase
- Adenylyl cyclase activated (purple enzyme rotating, active conformation)
- cAMP production (yellow small molecules #F8D848) bursting out and spreading with diffusion animation
- PKA activation (orange enzyme #E8A868) phosphorylating targets with "flash" phosphorylation effect
- CREB transcription factor (blue #6888C8) entering nucleus through nuclear pore
- Nucleus (purple gradient) with DNA helix visible
- Gene transcription: RNA polymerase moving, mRNA emerging
- Target genes lighting up with labels: "RANKL", "Osteoprotegerin"
- Label: "Via cAMP/PKA → Ativação Gênica"

CONNECTING ARROWS (animated sequentially):
- Red arrows: PTH secretion path (particles flowing)
- Blue arrows: Signal transduction cascade (signal wave propagating)
- Dotted arrows: Molecule diffusion (particles spreading)

VISUAL STYLE: Molecular biology cinematic quality, 3D ribbon/space-filling models for proteins with subtle rotation, soft gradients, cellular organelles visible with transparency, black labels with thin indicator lines appearing, dynamic lighting following signal.

VIDEO MOTION INSTRUCTIONS:
- Duration: 5 seconds complete signaling sequence, seamless loop
- Camera: Slow zoom journey following signal path (gland → receptor → nucleus)
- Sequential animation stages:
  * 0.0-1.5s: Gland synthesis and secretion
    - Chief cells pulse, rough ER active
    - PTH molecules assemble and package
    - Vesicles move to membrane and release
  * 1.5-2.5s: PTH molecule highlight and movement
    - Molecule rotates displaying structure
    - N-terminal glows (active region)
    - Floats toward receptor
  * 2.5-3.5s: Receptor binding
    - PTH approaches and docks (induced fit)
    - Receptor helices shift (conformational change)
    - G-protein couples to intracellular domain
  * 3.5-4.0s: G-protein activation
    - GDP→GTP exchange (molecular detail)
    - Gα subunit dissociates and moves
  * 4.0-4.5s: Second messenger production
    - Adenylyl cyclase activates (rotation)
    - cAMP molecules burst out (particle emission)
  * 4.5-5.0s: Nuclear signaling
    - PKA phosphorylates CREB (flash effects)
    - CREB enters nucleus
    - Gene activation (glow on DNA)
- Continuous subtle animations: Proteins breathing, membranes fluid, particles Brownian motion
- Lighting: Glow following active signaling (pathway illumination)
- Export: 1920x1080px, 30fps, H.264, seamless loop
```

---

### **SLIDE 23: PTH em Organismos Modelo**

**Arquivo**: `slide23-pth-modelos.mp4`

**PROMPT PARA GERAÇÃO DE VÍDEO:**

```
Animated comparative video of PTH effects across three model organisms, 3D educational cinematic style matching osso1-4.png with dynamic biological responses.

THREE EQUAL VERTICAL PANELS with parallax depth and sequential highlights:

PANEL 1 (LEFT) - AXOLOTL (highlighted 0.0-1.5s):
- Pink-beige axolotl (#F5D8C8) in lateral view, gently breathing, gills swaying
- Skeletal system highlighted (beige bones #F5E6D3 showing through semi-transparent skin) with pulsing
- Regenerating limb with blastema (pink cellular mass) growing and glowing intensely
- PTH molecules (purple spheres #9870B8) floating and surrounding regeneration site, orbiting
- Green upward arrows (↑↑↑) appearing sequentially with pulse, indicating enhanced bone formation
- Small animated graph below: bone formation rate line graph drawing left-to-right (steep upward trend, green line)
- Labels appearing: "Axolote", "PTH Acelera Regeneração"
- Blastema cells visibly dividing, bone ossifying with growth animation

PANEL 2 (CENTER) - ZEBRAFISH (highlighted 1.5-3.0s):
- Adult zebrafish (blue stripes #4880C8, transparent body) swimming in place
- Skeleton visible (cyan-green fluorescent #80E8C8) pulsing with PTH signaling
- Caudal fin regenerating (pink blastema at tip) with wave growth animation
- PTH molecules (purple spheres) floating around fin, binding to cells
- Yellow Ca²⁺ ions visible flowing in bloodstream and being deposited in regenerating fin rays with particle animation
- Moderate green arrows (↑↑) pulsing, indicating bone formation
- Small animated graph: bone formation rate drawing (moderate upward trend)
- Fins undulating naturally
- Labels: "Zebrafish", "PTH Regula Homeostase de Ca²⁺"

PANEL 3 (RIGHT) - MAMMAL (Mouse) (highlighted 3.0-4.5s):
- Gray-brown mouse (#988878) in lateral sitting position with breathing motion
- Neck region showing parathyroid glands (small pink-beige dots) pulsing and secreting
- Bone cross-section visible (long bone, e.g., femur) with cellular activity:
  - Osteoblasts (pink cubes #D8A0C8) lining surface, increased number, actively secreting
  - Osteoclasts (brown multinucleated #C89880) controlled activity, subtle resorption
  - Bone matrix (beige #F5E6D3) with visible remodeling animation (formation > resorption)
- PTH molecules circulating in bloodstream (purple) with flow animation
- Balanced arrows appearing (↑ formation pulsing, ↓ controlled resorption)
- Small animated graph: bone mineral density increase drawing (steady upward trend)
- Labels: "Mamífero", "PTH Anabólico (intermitente)"

SHARED ELEMENTS across all panels (animated continuously):
- PTH molecules in consistent purple color (#9870B8) floating with Brownian motion
- Calcium ions in yellow (#F8D848) flowing and depositing
- Bone tissue in beige (#F5E6D3) with growth animations
- Green arrows for positive effects, pulsing when highlighted

VISUAL STYLE: Comparative anatomy educational illustration with cinematic depth, soft 3D pastel rendering, gentle shadows, thin black labels (14-18px) fading in, clean scientific diagram aesthetic, atmospheric lighting.

VIDEO MOTION INSTRUCTIONS:
- Duration: 5 seconds complete comparison cycle, seamless loop
- Camera: Gentle left-to-right pan with slight push-in on each panel as it's highlighted
- Sequential panel highlights:
  * 0.0-1.5s: Panel 1 (Axolotl) highlighted with glow, zoom focus
    - Blastema grows, PTH molecules orbit
    - Graph line draws
    - Enhanced lighting on this panel, others dimmed 60%
  * 1.5-3.0s: Panel 2 (Zebrafish) highlighted
    - Fish swims, calcium flows
    - Graph draws
    - Lighting shifts to center
  * 3.0-4.5s: Panel 3 (Mouse) highlighted
    - Mouse breathes, bone remodels
    - Graph draws
    - Lighting shifts to right
  * 4.5-5.0s: All three panels equally lit, simultaneous activity
- Continuous animations (throughout):
  * Axolotl: Gills sway, limb glows, cells divide
  * Zebrafish: Swims, fins undulate, Ca²⁺ particles flow
  * Mouse: Breathes, bone cells pulse
  * PTH molecules: Float and circulate
  * Graphs: Lines draw, then pulse
- Panel transitions: Smooth spotlight sweep with 0.3s fade
- Depth: Each panel at slightly different Z-depth for 3D effect
- Export: 1920x1080px, 30fps, H.264, seamless loop
```

---

### **SLIDE 28: Via Wnt/β-catenina**

**Arquivo**: `slide28-via-wnt.mp4`

**PROMPT PARA GERAÇÃO DE VÍDEO:**

```
Animated Wnt/β-catenin signaling pathway video in bone cells, molecular biology cinematic illustration matching osso1-4.png educational style with dynamic cellular cross-section.

VERTICAL CELL CROSS-SECTION showing animated pathway from TOP (extracellular) to BOTTOM (nucleus):

LEVEL 1 - EXTRACELLULAR SPACE (TOP) - 0.0-1.0s:
- Wnt ligand protein (green gradient sphere #68C898, 3D space-filling model) floating and rotating
- Floating in light blue extracellular matrix background (#E8F0F8) with particle field
- Approaching cell membrane (beige phospholipid bilayer) with fluid motion
- Wnt binding animation with "lock and key" fit
- Label appearing: "Ligante Wnt"

LEVEL 2 - CELL MEMBRANE - 1.0-2.0s:
- Frizzled receptor (blue-purple serpentine transmembrane protein #6878B8, 7 helices) embedded in membrane
- LRP5/6 co-receptor (taller transmembrane protein, also blue-purple)
- Wnt binding creating RECEPTOR COMPLEX with conformational change animation (proteins moving together, helices tilting)
- Dishevelled protein (DVL, green #68C888) recruited to intracellular side with docking animation
- Membrane ripples showing signal initiation
- Label: "Receptores Frizzled + LRP5/6"

LEVEL 3 - CYTOPLASM (MIDDLE, light pink background #F8E8E8) - 2.0-4.0s:

SPLIT SCREEN COMPARISON:

STATE A (LEFT SIDE) - "VIA OFF" (sem Wnt) - continuous:
- Destruction complex visible and active: APC (gray), Axin (gray), GSK-3β (gray), CK1 (gray) proteins forming multi-protein complex, rotating slowly
- β-catenin molecules (orange #E8A848) being captured and phosphorylated (P labels appearing)
- Phosphorylated β-catenin being ubiquitinated (Ub tags, red dots attaching)
- Proteasome (barrel-shaped, purple) actively degrading β-catenin (chomping animation, particles breaking)
- Red ✗ mark pulsing, indicating "degradation"
- Label: "Estado OFF: β-catenina Degradada"

STATE B (RIGHT SIDE) - "VIA ON" (com Wnt) - activating 2.0-4.0s:
- Destruction complex INHIBITED (proteins graying out/fading, falling apart)
- GSK-3β inactivated (inhibition symbol ⊝ appearing with flash)
- β-catenin molecules (orange #E8A848, MANY of them) accumulating with burst animation
- NO phosphorylation or ubiquitination
- β-catenin molecules moving toward nucleus with flowing animation (motion trail)
- Green ✓ mark appearing with glow, indicating "accumulation"
- Label: "Estado ON: β-catenina Estabilizada"

LEVEL 4 - NUCLEUS (BOTTOM, purple gradient background #9880C8) - 4.0-5.0s:
- Nuclear pore (hexagonal gateway) with β-catenin molecules entering (stream animation)
- β-catenin binding to TCF/LEF transcription factors (blue proteins #6888C8) with docking animation
- DNA double helix (blue-purple) unzipping
- Target genes being activated sequentially:
  - RUNX2 gene (green glow appearing)
  - Osterix gene (green glow appearing)
  - Osteoprotegerin (OPG) gene (green glow)
- RNA polymerase (yellow-orange enzyme) moving along DNA, transcribing
- mRNA strands emerging and growing (red wavy lines extending)
- Label: "Núcleo: Ativação de Genes Osteogênicos"

CONNECTING ELEMENTS (animated):
- Large vertical arrows showing signal flow direction (TOP → BOTTOM) drawing sequentially
- Dotted lines showing molecule movement with flowing particles
- Numbered steps (1, 2, 3, 4, 5) appearing along pathway

VISUAL STYLE: Molecular cell biology cinematic quality, 3D protein structures (ribbon + space-filling models) with breathing motion, clear color-coding for different states, gradient backgrounds for cellular compartments with depth, black labels with thin indicator lines appearing, dynamic lighting following signal.

VIDEO MOTION INSTRUCTIONS:
- Duration: 5 seconds complete signaling sequence, seamless loop
- Camera: Slow vertical descent following signal (TOP → BOTTOM), slight zoom-in
- Sequential animation:
  * 0.0-1.0s: Wnt approaches and binds to Frizzled/LRP5/6
    - Wnt floats and docks (induced fit)
    - Receptors shift conformation
  * 1.0-2.0s: Membrane signaling
    - DVL recruited
    - Signal propagates into cytoplasm
  * 2.0-4.0s: Cytoplasmic response (split screen):
    - LEFT (OFF): Destruction complex active, β-catenin degraded continuously
    - RIGHT (ON): Destruction complex inhibited, β-catenin accumulates and moves
  * 4.0-5.0s: Nuclear response
    - β-catenin enters nucleus
    - Genes activate (sequential green glows)
    - Transcription begins
- Continuous animations:
  * OFF state: Proteasome chomping, β-catenin disappearing
  * ON state: β-catenin accumulating, flowing to nucleus
  * Proteins: Subtle breathing, rotation
  * Membrane: Fluid lipid motion
  * DNA: Gentle helical rotation
- Particle effects: Molecules have motion trails, glows pulse
- Lighting: Glow follows active pathway (green for Wnt signal, orange for β-catenin)
- Export: 1920x1080px, 30fps, H.264, seamless loop
```

---

### **SLIDE 35: Coordenação VEGF-BMP**

**Arquivo**: `slide35-sinergia-vegf-bmp.mp4`

**PROMPT PARA GERAÇÃO DE VÍDEO:**

```
Animated synergistic interaction video between VEGF and BMP in bone regeneration, 3-panel comparison with dynamic biological growth matching osso1-4.png style.

THREE VERTICAL PANELS showing experimental conditions with animated development:

PANEL 1 (LEFT) - "VEGF SOZINHO" (appears 0.0-1.5s):
- Bone tissue cross-section (thin beige layer #F5E6D3, ~20% of normal thickness) with limited growth
- EXTENSIVE blood vessel network (red tubular structures #E88880) growing and branching with angiogenesis animation
- Endothelial cells lining vessels (red-pink flat cells) migrating and proliferating
- FEW osteoblasts (only 2-3 pink cubes #D8A0C8) scattered, minimal activity
- MINIMAL bone matrix formation (sparse, not thickening)
- Blood flowing through vessels (particle animation)
- Label appearing: "VEGF" with red badge pulsing
- Sub-label: "Vascularização ✓, Osteogênese ✗"
- Regeneration meter animating: filling to 40% (yellow-orange bar)

PANEL 2 (CENTER) - "BMP SOZINHO" (appears 1.5-3.0s):
- Bone tissue cross-section (moderate thickness ~60% of normal) growing
- OSTEOBLAST DIFFERENTIATION (many pink cubic cells #D8A0C8 arranged in rows) cells appearing and secreting
- Bone matrix forming (beige tissue growing, visible collagen fibers in green wavy lines #98C8A8 being deposited)
- FEW blood vessels (only 1-2 small red capillaries) with limited flow
- INADEQUATE vascularization (dotted red vessels, incomplete, some areas ischemic/pale)
- Matrix deposition animation (osteoblasts pulsing, matrix thickening)
- Label: "BMP" with blue badge pulsing
- Sub-label: "Osteogênese ✓, Vascularização ✗"
- Regeneration meter filling to 50% (yellow bar)

PANEL 3 (RIGHT) - "VEGF + BMP SINERGIA" (appears 3.0-5.0s):
- Bone tissue cross-section (FULL THICKNESS, robust, 100%) with vigorous growth animation
- ROBUST vascular network (extensive red vessels #E88880) sprouting and integrating throughout
- MANY osteoblasts (abundant pink cubes #D8A0C8) highly active with synchronized pulsing
- THICK bone matrix (substantial beige tissue) rapidly depositing and organizing
- Osteocytes embedded (blue nuclei #4860B8 in lacunae) appearing as cells mature
- Collagen fibers prominent (green) weaving through matrix
- INTEGRATION animation: vessels growing into bone, bone forming around vessels (coordinated)
- Blood flow robust (particles flowing through vessels)
- Label: "VEGF + BMP" with red-blue combined badge glowing
- Sub-label: "SINERGIA ✓✓" pulsing
- Regeneration meter rapidly filling to 100% (bright green bar with overshoot bounce)
- GLOW/STAR effect (golden sparkles ★) bursting indicating superior outcome
- Success pulse animation (entire panel glows)

BETWEEN PANELS - VISUAL CONNECTORS (appearing 3.5-4.5s):
- Panel 1 to Panel 3: Red pathway arrow drawing (VEGF contribution) with particle flow
- Panel 2 to Panel 3: Blue pathway arrow drawing (BMP contribution) with particle flow
- Large PLUS SIGN (+) appearing between arrows with glow
- Mathematical visualization text appearing: "VEGF + BMP = SINERGIA > VEGF ou BMP"

CELLULAR DETAIL (animated consistently):
- Endothelial cells (red-pink flat shapes) migrating along vessel paths
- Osteoblasts (pink cubes) secreting matrix with pulse animations
- Osteocytes (blue nuclei in lacunae) embedded with differentiation sequence
- Bone matrix (beige with fibrous texture) growing directionally
- Blood vessels (red tubular networks) flowing with particle animation

VISUAL STYLE: Clean 3D medical comparison with cinematic depth, soft pastel rendering, thin black outlines, dynamic growth animations, scientific comparison diagram aesthetic with compelling visual storytelling.

VIDEO MOTION INSTRUCTIONS:
- Duration: 5 seconds sequential reveal with synergy emphasis, seamless loop
- Camera: Gentle left-to-right pan with slight push-in on Panel 3 for emphasis
- Sequential panel animations:
  * 0.0-1.5s: Panel 1 appears and develops
    - Vessels grow extensively with branching animation
    - Few osteoblasts appear but don't proliferate
    - Meter fills to 40%
  * 1.5-3.0s: Panel 2 appears and develops
    - Osteoblasts proliferate and secrete matrix
    - Matrix thickens visibly
    - Few vessels, inadequate
    - Meter fills to 50%
  * 3.0-5.0s: Panel 3 appears with vigorous growth
    - BOTH vessels AND osteoblasts active simultaneously
    - Coordinated integration (vessels sprouting, bone forming around them)
    - Rapid growth animation
    - Meter fills to 100% with overshoot
    - Golden sparkles burst
    - Success glow pulse
- Continuous animations:
  * Panel 1: Blood flows, vessels branch
  * Panel 2: Osteoblasts pulse, matrix deposits
  * Panel 3: BOTH active, coordinated, robust
- Connector arrows: Draw in with particle flow at 3.5s
- Plus sign: Appears with glow at 4.0s
- Lighting: Panel 3 receives enhanced lighting (key light) to emphasize superiority
- Export: 1920x1080px, 30fps, H.264, seamless loop
```

---

### **SLIDE 36: Crosstalk Entre Vias de Sinalização**

**Arquivo**: `slide36-crosstalk.mp4`

**PROMPT PARA GERAÇÃO DE VÍDEO:**

```
Animated complex molecular crosstalk network video in bone regeneration, systems biology cinematic diagram matching osso1-4.png educational 3D style with dynamic pathway activation.

CENTRAL HUB (continuously active throughout):
- Bone tissue cross-section (beige matrix #F5E6D3) in center, slowly rotating
- Active regeneration zone showing dynamic cellular activity:
  - Osteoblasts (pink) depositing matrix with pulsing
  - Osteocytes (blue) embedded, pulsing
  - Blood vessels (red) supplying with flow animation
  - Blastema-like cellular zone (pink cellular mass) with cells moving
- Label: "Tecido Ósseo em Regeneração"

FIVE MAJOR PATHWAY NODES arranged in CIRCULAR/PENTAGONAL pattern around central bone, activating sequentially:

NODE 1 (TOP) - PTH PATHWAY (RED #E86868) - activates 0.0-1.0s:
- PTH hormone molecule (red sphere) floating
- PTH1R receptor (red transmembrane protein) receiving signal
- cAMP second messenger (yellow dots #F8D848) bursting out
- PKA enzyme (orange) phosphorylating targets with flash
- Connecting line to bone pulsing showing: ↑ bone formation
- Label appearing: "PTH" with red badge glowing

NODE 2 (TOP-RIGHT) - WNT PATHWAY (GREEN #68C898) - activates 1.0-2.0s:
- Wnt ligand (green sphere) binding to receptors
- Frizzled + LRP5/6 receptors (green-blue) conformational change
- β-catenin molecules (orange dots #E8A848) accumulating and moving to nucleus
- TCF/LEF transcription activation (genes glowing)
- Label: "Wnt/β-catenina" with green badge glowing

NODE 3 (BOTTOM-RIGHT) - BMP PATHWAY (BLUE #6898C8) - activates 2.0-3.0s:
- BMP ligand (blue gradient sphere) signaling
- BMPR receptors (blue) activating
- SMAD proteins (blue triangles) translocating →nucleus with motion trail
- RUNX2 activation (green glow pulsing)
- Label: "BMP" with blue badge glowing

NODE 4 (BOTTOM-LEFT) - VEGF PATHWAY (PINK-RED #E888A8) - activates 3.0-4.0s:
- VEGF molecule (pink-red sphere) binding
- VEGFR receptor (pink) activating
- Blood vessel sprouting animation (red tubular growth extending)
- Angiogenesis indicators (endothelial cells migrating)
- Label: "VEGF" with pink badge glowing

NODE 5 (TOP-LEFT) - FGF23 PATHWAY (PURPLE #9870B8) - activates 4.0-5.0s:
- FGF23 molecule (purple sphere) being released from osteocytes
- FGFR receptor (purple) receiving signal
- Phosphate regulation (PO₄³⁻ ions) flowing
- Kidney icon (small) receiving signal with glow
- Label: "FGF23" with purple badge glowing

CROSSTALK INTERACTIONS (appearing 5.0-7.0s) - bidirectional curved arrows with animated gradient colors and particle flow:

1. PTH → Wnt (red-to-green arrow drawing, particles flowing) - 5.0s
   - Sub-label appearing: "PTH ativa Wnt, estabiliza β-catenina"

2. Wnt ↔ BMP (green-to-blue bidirectional arrow drawing, particles flowing both ways) - 5.3s
   - Sub-label: "Sinergia na diferenciação osteoblástica"

3. BMP → VEGF (blue-to-pink arrow drawing, particles flowing) - 5.6s
   - Sub-label: "BMP induz VEGF, acoplamento osteogênese-angiogênese"

4. VEGF ↔ BMP (pink-to-blue bidirectional drawing, particles flowing) - 5.9s
   - Sub-label: "Feedback positivo mútuo"

5. FGF23 ⊣ PTH (purple-to-red inhibitory arrow with ⊥ end, inhibition wave) - 6.2s
   - Sub-label: "FGF23 modula PTH, feedback negativo"

6. PTH → FGF23 (red-to-purple arrow drawing) - 6.5s
   - Sub-label: "PTH regula produção de FGF23"

MOLECULAR COMPONENTS (3D rendered with animations):
- Proteins as space-filling or ribbon models, breathing motion
- Signaling molecules as gradient spheres, floating
- Receptors as transmembrane structures, conformational changes
- Arrows showing signal flow direction with particle animation

VISUAL EFFECTS (animated):
- Gradient colors on arrows showing pathway interaction, particles flowing
- Dotted lines for diffusion with moving dashes
- Solid lines for direct binding, pulsing
- Curved arrows for indirect/transcriptional effects, drawing animation
- ⊥ symbol for inhibition with inhibitory wave
- → for activation with activation pulse

VISUAL STYLE: Systems biology network cinematic diagram, complex but clearly organized with sequential reveal, color-coded pathways glowing, 3D molecular structures with motion, clean layout, black labels (12-16px) appearing, thin lines (1-1.5px) drawing in, dynamic lighting following active pathways.

VIDEO MOTION INSTRUCTIONS:
- Duration: 7 seconds complete network activation, seamless loop
- Camera: Slow circular orbit around central bone (360° over 7s)
- Sequential pathway activation:
  * 0.0-1.0s: PTH node activates (glow, molecules move)
  * 1.0-2.0s: Wnt node activates
  * 2.0-3.0s: BMP node activates
  * 3.0-4.0s: VEGF node activates
  * 4.0-5.0s: FGF23 node activates
  * 5.0-7.0s: Crosstalk arrows appear sequentially (0.3s each)
- Continuous animations:
  * Central bone: Rotation, cells pulsing, vessels flowing
  * Active nodes: Molecules floating, receptors breathing, signals propagating
  * Activated pathways remain glowing after initial activation
- Crosstalk arrows: Draw-in animation (0.2s) then continuous particle flow
- Molecules: Flow along arrow paths with motion trails
- Lighting: Spotlight follows sequential activation, then illuminates all
- Final state (7.0s): All pathways active simultaneously, synchronized pulsing showing integrated response
- Export: 1920x1080px, 30fps, H.264, seamless loop
```

---

## 🎬 ESPECIFICAÇÕES DE VÍDEO PARA SLIDES

### Parâmetros Técnicos:

- **Formato**: MP4/H.264 (máxima compatibilidade com navegadores e apresentações HTML)
- **Resolução**: 1920x1080px (Full HD) ou 1280x720px (HD)
- **Frame Rate**: 30 FPS (padrão cinematográfico suave)
- **Duração**: 3-7 segundos por ciclo completo (dependendo da complexidade)
- **Loop**: Seamless infinito (para reprodução contínua no slide)
- **Bitrate**: 5-10 Mbps (qualidade visual excelente sem arquivos muito grandes)
- **Codec de áudio**: Nenhum (vídeos silenciosos para apresentações)
- **Tamanho alvo**: 2-8MB por vídeo
- **Ferramentas compatíveis**:
  - **Kaiber** (text-to-video, excelente para animações científicas)
  - **RunwayML Gen-2** (controle preciso, estilo consistente)
  - **Pika Labs** (loops perfeitos, animações orgânicas)
  - **Stable Video Diffusion** (código aberto, customizável)

### Tipos de Animação por Categoria:

**ORGANISMOS / ANATOMIA:**

- Rotação suave 3D (10-15° oscilação) com câmera orbital
- Órgãos pulsando sutilmente (escala 100%-105%-100%)
- Células em movimento Browniano realista
- Respiração/movimento natural (guelras, nadadeiras, respiração)
- Parallax depth (elementos em diferentes planos Z)

**VIAS DE SINALIZAÇÃO:**

- Moléculas flutuando/difundindo com motion trails
- Setas aparecendo sequencialmente (draw-in effect suave)
- Proteínas mudando conformação (induced fit, alosteric changes)
- Fosforilação "flash" effects com particle emission
- Translocação nuclear (movimento de moléculas com trajetória)
- Activation waves (ondas de ativação propagando)
- Particle flow (fluxo de partículas ao longo de vias)

**PROCESSOS TEMPORAIS:**

- Time-lapse progressivo (estágios morfando sequencialmente)
- Gráficos desenhando da esquerda para direita com ease-out
- Transições suaves entre estados (morphing, fading)
- Growth animations (tecidos crescendo, vasos brotando)
- Regeneration sequences (healing, tissue formation)

**FLUORESCÊNCIA/MICROSCOPIA:**

- Brilho pulsante polirrítmico (80%-100%-80% opacity, múltiplos ciclos)
- Efeito de bloom/glow animado com lens flares
- Chromatic aberration sutil
- Cor intensity cycling (simulando imaging real)
- Background particle drift (células/debris flutuando)

---

## 📐 ESPECIFICAÇÕES TÉCNICAS FINAIS

### Formato de Arquivo:

- **MP4/H.264 vídeo**: 1920x1080px (Full HD), 30 FPS, 3-7s seamless loop, 2-8MB

  - Codec de vídeo: H.264 (high profile)
  - Codec de áudio: Nenhum (vídeos silenciosos)
  - Bitrate: 5-10 Mbps
  - Keyframe interval: A cada 30 frames (1 segundo)
  - Color space: BT.709
  - Pixel format: yuv420p

- **Alternativa WebM** (para compatibilidade web):
  - Codec VP9
  - Mesmas especificações de resolução e duração

### Nomenclatura de Arquivos:

```
slide[número]-[descrição].mp4

Exemplos:
slide3-bone-structure.mp4
slide7-organismos.mp4
slide8-axolote.mp4
slide10-vias-blastema.mp4
slide14-zebrafish-fluorescente.mp4
slide28-via-wnt.mp4
slide36-crosstalk.mp4
```

### Paleta de Cores Consistente (HEX codes):

```css
/* TECIDOS */
--bone-matrix: #f5e6d3;
--bone-dark: #d4c0a8;
--cartilage: #b8d8c8;
--muscle: #e8b8b8;

/* CÉLULAS */
--osteoblast: #d8a0c8;
--osteoclast: #c89880;
--osteocyte-nucleus: #4860b8;
--stem-cell: #9880c8;

/* MOLÉCULAS/SINAIS */
--wnt-pathway: #68c898;
--bmp-pathway: #6898c8;
--fgf-pathway: #e8a868;
--vegf-pathway: #e88880;
--pth-molecule: #e86868;
--calcium-ion: #f8d848;

/* ESTRUTURAS */
--blood-vessel: #e88880;
--nerve: #f8e880;
--collagen: #98c8a8;
--nucleus: #6870b8;
```

### Ferramentas de IA para Geração de Vídeo Recomendadas:

1. **Kaiber** (kaiber.ai)

   - Excelente para: Text-to-video com estilo consistente
   - Melhor para: Animações científicas educacionais, movimento orgânico
   - Controle: Motion settings (zoom, pan, rotate), style consistency
   - Preço: Planos mensais a partir de $5/mês

2. **RunwayML Gen-2** (runwayml.com)

   - Excelente para: Controle preciso de movimento, qualidade cinematográfica
   - Melhor para: Vias de sinalização, processos moleculares detalhados
   - Controle: Camera motion, seed control, style reference
   - Preço: Pay-per-second, planos a partir de $12/mês

3. **Pika Labs** (pika.art)

   - Excelente para: Loops perfeitos seamless, animações sutis
   - Melhor para: Organismos modelo, microscopia fluorescente
   - Controle: Motion strength (0-4), negative prompts, camera controls
   - Preço: Gratuito (limitado) ou $8-28/mês

4. **Stable Video Diffusion** (stability.ai)

   - Excelente para: Código aberto, customização total
   - Melhor para: Workflow local, controle máximo
   - Controle: Programático via Python, motion vectors
   - Preço: Gratuito (requer GPU local) ou Stability AI API

5. **Moonvalley** (moonvalley.ai)
   - Excelente para: Estilo 3D médico, anatomia detalhada
   - Melhor para: Estruturas ósseas, processos regenerativos
   - Preço: Planos a partir de $15/mês

### Prompt Engineering Tips para Geração de Vídeo:

**Estrutura do Prompt:**

1. **Tipo de conteúdo**: "Animated medical educational video..."
2. **Estilo visual**: "3D cinematic style matching osso1-4.png"
3. **Assunto principal**: Descrição detalhada do que aparece
4. **Elementos em movimento**: O que se move e como
5. **Paleta de cores**: HEX codes específicos
6. **Motion instructions**: Câmera, animações, transições

**Boas Práticas:**

- Sempre mencionar: "animated", "cinematic", "educational 3D medical style"
- Referenciar: "matching style of osso1-4.png"
- Especificar: "soft pastel colors, thin black outlines, smooth animations"
- Detalhar movimento: "slow rotation", "pulsing glow", "particle flow", "morphing transition"
- Incluir timing: "0.0-1.5s: stage 1 appears", "3.0s: arrow draws in"
- Motion qualifiers: "subtle", "gentle", "smooth", "organic", "seamless loop"
- Camera motion: "slow push-in", "circular orbit", "parallax pan"
- Lighting: "cinematic lighting", "glow following pathway", "spotlight sweep"

**Palavras-chave que funcionam bem:**

- Movimento: flowing, pulsing, breathing, rotating, morphing, growing, sprouting
- Transição: fade-in, scale-in, draw-in, appearing, emerging
- Efeitos: glow, shimmer, sparkle, particle emission, motion trail
- Câmera: orbit, push-in, parallax, pan, tilt, zoom
- Loop: seamless, continuous, cyclic, infinite

---

**✅ CHECKLIST DE QUALIDADE:**

Antes de usar cada imagem gerada, verificar:

- [ ] Estilo visual consistente com osso1-4.png (3D suave, pastéis, contornos finos)
- [ ] Cores correspondem à paleta especificada (HEX codes corretos)
- [ ] Fundo transparente (PNG com alpha) ou branco puro
- [ ] Resolução correta (1200x800px, 300 DPI)
- [ ] Labels em PORTUGUÊS, legíveis, fonte sans-serif preta
- [ ] Anatomia/estruturas cientificamente precisas (verificar com PDF)
- [ ] Sombras suaves, não excessivas
- [ ] GIF animado: loop suave, <5MB, movimento orgânico

---

**Data de criação**: 22 de outubro de 2025
**Projeto**: Conectando Remodelação e Regeneração Óssea
**Referência**: Mehreen et al. (2025), Biology 14:274
**Slides com imagens**: 3, 7, 8, 10, 11, 14, 15, 18, 19, 23, 28, 35, 36
**Status**: ✅ COMPLETO - Pronto para geração de imagens por IA
