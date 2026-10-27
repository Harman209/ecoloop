import os
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.enum.text import PP_ALIGN
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE

# 16:9 Widescreen dimensions
prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

# Blank slide layout
blank_layout = prs.slide_layouts[6]

# Brand Colors
COLOR_DARK = RGBColor(23, 26, 24)       # #171a18
COLOR_GREEN = RGBColor(31, 107, 79)     # #1f6b4f
COLOR_GREEN_LT = RGBColor(40, 133, 99)  # #288563
COLOR_MUTED = RGBColor(82, 96, 88)      # #526058
COLOR_LIGHT_BG = RGBColor(248, 250, 248)
COLOR_BORDER = RGBColor(226, 232, 224)
COLOR_RED = RGBColor(220, 38, 38)
COLOR_WHITE = RGBColor(255, 255, 255)

FONT_SANS = "Plus Jakarta Sans"
FONT_MONO = "JetBrains Mono"

IMAGES_DIR = "/home/h4rman/Projects/ecoloop/docs/presentation/images"

def add_header(slide, title, subtitle=None):
    tx_box = slide.shapes.add_textbox(Inches(0.9), Inches(0.7), Inches(11.5), Inches(1.3))
    tf = tx_box.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    
    p = tf.paragraphs[0]
    p.text = title
    p.font.name = FONT_SANS
    p.font.size = Pt(36)
    p.font.bold = True
    p.font.color.rgb = COLOR_DARK
    
    if subtitle:
        p2 = tf.add_paragraph()
        p2.text = subtitle
        p2.font.name = FONT_SANS
        p2.font.size = Pt(17)
        p2.font.color.rgb = COLOR_MUTED
        p2.space_before = Pt(6)

def add_bullet_point(tf, title, desc, dot_color=COLOR_GREEN):
    p = tf.add_paragraph()
    p.space_before = Pt(14)
    p.level = 0
    
    run_bullet = p.add_run()
    run_bullet.text = "■  "
    run_bullet.font.name = FONT_SANS
    run_bullet.font.size = Pt(10)
    run_bullet.font.color.rgb = dot_color
    
    run_title = p.add_run()
    run_title.text = title + "\n"
    run_title.font.name = FONT_SANS
    run_title.font.size = Pt(15)
    run_title.font.bold = True
    run_title.font.color.rgb = COLOR_DARK
    
    run_desc = p.add_run()
    run_desc.text = "   " + desc
    run_desc.font.name = FONT_SANS
    run_desc.font.size = Pt(14)
    run_desc.font.color.rgb = COLOR_MUTED

# ==========================================================
# SLIDE 1: Title
# ==========================================================
s1 = prs.slides.add_slide(blank_layout)
tx_s1 = s1.shapes.add_textbox(Inches(1.2), Inches(2.2), Inches(11), Inches(3.5))
tf_s1 = tx_s1.text_frame
tf_s1.word_wrap = True

p_title = tf_s1.paragraphs[0]
r_eco = p_title.add_run()
r_eco.text = "Eco"
r_eco.font.name = FONT_SANS
r_eco.font.size = Pt(64)
r_eco.font.bold = True
r_eco.font.color.rgb = COLOR_DARK

r_loop = p_title.add_run()
r_loop.text = "Loop"
r_loop.font.name = FONT_SANS
r_loop.font.size = Pt(64)
r_loop.font.bold = True
r_loop.font.color.rgb = COLOR_GREEN

p_sub = tf_s1.add_paragraph()
p_sub.text = "Circular material systems and zero-cost digital architecture."
p_sub.font.name = FONT_SANS
p_sub.font.size = Pt(22)
p_sub.font.color.rgb = COLOR_MUTED
p_sub.space_before = Pt(16)

p_sch = tf_s1.add_paragraph()
p_sch.text = "Swami Sant Dass Public School, Jalandhar"
p_sch.font.name = FONT_SANS
p_sch.font.size = Pt(16)
p_sch.font.bold = True
p_sch.font.color.rgb = COLOR_GREEN
p_sch.space_before = Pt(36)

# ==========================================================
# SLIDE 2: Linear Packaging Problem
# ==========================================================
s2 = prs.slides.add_slide(blank_layout)
add_header(s2, "The Linear Packaging Problem", "Why conventional municipal recycling fails on modern multi-layer packaging.")

# Col 1
tx_c1 = s2.shapes.add_textbox(Inches(0.9), Inches(2.3), Inches(5.5), Inches(4.5))
tf_c1 = tx_c1.text_frame
tf_c1.word_wrap = True
p_h1 = tf_c1.paragraphs[0]
p_h1.text = "The Material Reality"
p_h1.font.name = FONT_SANS
p_h1.font.size = Pt(20)
p_h1.font.bold = True
p_h1.font.color.rgb = COLOR_RED

add_bullet_point(tf_c1, "Multi-Layer Packaging (MLP):", "Chips and snack packaging fuse plastic films with aluminum foil. Standard recyclers cannot separate these layers cost-effectively, diverting millions of tons directly to landfills.", COLOR_RED)
add_bullet_point(tf_c1, "Fragmented Logistics:", "Communities and schools generate clean packaging waste, but lack direct channels connecting them to verified upcycling alternatives.", COLOR_RED)
add_bullet_point(tf_c1, "Information Asymmetry:", "Consumers and institutions cannot verify whether their sorted recyclables are actually reprocessed or simply dumped.", COLOR_RED)

# Col 2
tx_c2 = s2.shapes.add_textbox(Inches(6.9), Inches(2.3), Inches(5.5), Inches(4.5))
tf_c2 = tx_c2.text_frame
tf_c2.word_wrap = True
p_h2 = tf_c2.paragraphs[0]
p_h2.text = "The EcoLoop Approach"
p_h2.font.name = FONT_SANS
p_h2.font.size = Pt(20)
p_h2.font.bold = True
p_h2.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_c2, "Mechanical Upcycling:", "Heat-compressing clean multi-layer plastics into structural sheets that replace traditional plywood and particle boards.", COLOR_GREEN)
add_bullet_point(tf_c2, "Digital Transparency:", "Publishing exact material specifications, density metrics, and inventory through an open platform.", COLOR_GREEN)
add_bullet_point(tf_c2, "Closed Institutional Loops:", "Partnering directly with campuses to collect, process, and return finished utility goods back to the source.", COLOR_GREEN)

# ==========================================================
# SLIDE 3: The Physical Loop
# ==========================================================
s3 = prs.slides.add_slide(blank_layout)
add_header(s3, "The Physical Loop: Verified Materials", "Six circular products systematically diverted from waste streams.")

# Left stack
tx_s3 = s3.shapes.add_textbox(Inches(0.9), Inches(2.2), Inches(5.6), Inches(4.8))
tf_s3 = tx_s3.text_frame
tf_s3.word_wrap = True
tf_s3.margin_left = tf_s3.margin_top = 0

products = [
    ("Eco-Bricks", "High-density PET containers packed with clean flexible plastics."),
    ("MLP Sheets", "Heat-pressed multi-layer packaging replacing standard plywood."),
    ("Bottle Planters", "Upcycled PET containers for nursery and hydroponic gardening."),
    ("Uniform Bags", "Heavyweight tote bags repurposed from discarded school uniforms."),
    ("Seed Paper", "Zero-bleach handmade paper embedded with native plant seeds."),
    ("Bioenzymes", "Citrus-fermented organic cleaning concentrates.")
]

for i, (p_name, p_desc) in enumerate(products):
    p = tf_s3.paragraphs[0] if i == 0 else tf_s3.add_paragraph()
    if i > 0:
        p.space_before = Pt(12)
    r1 = p.add_run()
    r1.text = "■  " + p_name + "\n"
    r1.font.name = FONT_SANS
    r1.font.size = Pt(15)
    r1.font.bold = True
    r1.font.color.rgb = COLOR_GREEN
    
    r2 = p.add_run()
    r2.text = "   " + p_desc
    r2.font.name = FONT_SANS
    r2.font.size = Pt(13)
    r2.font.color.rgb = COLOR_MUTED

# Right image
img_path_s3 = os.path.join(IMAGES_DIR, "sample-mlp.jpg")
if os.path.exists(img_path_s3):
    s3.shapes.add_picture(img_path_s3, Inches(6.9), Inches(2.2), width=Inches(5.5), height=Inches(4.5))

# ==========================================================
# SLIDE 4: Reality Check 01 (Editable Meme Placeholder)
# ==========================================================
def add_meme_placeholder_slide(slide, title_text, placeholder_text, caption_text):
    tx_title = slide.shapes.add_textbox(Inches(1.5), Inches(0.8), Inches(10.3), Inches(0.9))
    tf_t = tx_title.text_frame
    tf_t.word_wrap = True
    p = tf_t.paragraphs[0]
    p.alignment = PP_ALIGN.CENTER
    p.text = title_text
    p.font.name = FONT_SANS
    p.font.size = Pt(32)
    p.font.bold = True
    p.font.color.rgb = COLOR_DARK
    
    # Placeholder box
    shape = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(2.8), Inches(1.8), Inches(7.7), Inches(4.3))
    shape.fill.solid()
    shape.fill.fore_color.rgb = COLOR_LIGHT_BG
    shape.line.color.rgb = COLOR_GREEN
    shape.line.width = Pt(1.5)
    
    tf_shape = shape.text_frame
    tf_shape.word_wrap = True
    p_box = tf_shape.paragraphs[0]
    p_box.alignment = PP_ALIGN.CENTER
    p_box.text = placeholder_text
    p_box.font.name = FONT_SANS
    p_box.font.size = Pt(18)
    p_box.font.bold = True
    p_box.font.color.rgb = COLOR_GREEN
    
    p_sub = tf_shape.add_paragraph()
    p_sub.alignment = PP_ALIGN.CENTER
    p_sub.text = "(Drop your meme image here or delete this box)"
    p_sub.font.name = FONT_SANS
    p_sub.font.size = Pt(13)
    p_sub.font.color.rgb = COLOR_MUTED
    p_sub.space_before = Pt(8)
    
    # Caption
    tx_cap = slide.shapes.add_textbox(Inches(2.5), Inches(6.3), Inches(8.3), Inches(0.8))
    tf_c = tx_cap.text_frame
    tf_c.word_wrap = True
    p_c = tf_c.paragraphs[0]
    p_c.alignment = PP_ALIGN.CENTER
    p_c.text = caption_text
    p_c.font.name = FONT_SANS
    p_c.font.size = Pt(15)
    p_c.font.color.rgb = COLOR_MUTED

s4 = prs.slides.add_slide(blank_layout)
add_meme_placeholder_slide(s4, "Reality Check: How It Started vs How It Is Going", 
                           "[MEME 01 PLACEHOLDER: How It Started vs How It Is Going]", 
                           "Started by collecting empty snack wrappers in school. Ended up building an automated cloud software platform.")

# ==========================================================
# SLIDE 5: Why Physical Projects Need Software
# ==========================================================
s5 = prs.slides.add_slide(blank_layout)
add_header(s5, "Why Physical Projects Need Software", "Moving from static school displays to an open, operational platform.")

tx_s5 = s5.shapes.add_textbox(Inches(0.9), Inches(2.2), Inches(5.6), Inches(4.5))
tf_s5 = tx_s5.text_frame
tf_s5.word_wrap = True
p_h5 = tf_s5.paragraphs[0]
p_h5.text = "Platform Capabilities"
p_h5.font.name = FONT_SANS
p_h5.font.size = Pt(20)
p_h5.font.bold = True
p_h5.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_s5, "Engineering Specifications:", "Every product includes physical dimensions, density metrics, thermal characteristics, and production lead times.", COLOR_GREEN)
add_bullet_point(tf_s5, "Direct Transaction Routing:", "Schools and community partners can query stock, request material samples, and submit institutional orders.", COLOR_GREEN)
add_bullet_point(tf_s5, "Modern Frontend Stack:", "React 18 with TypeScript and Vite for fast client-side navigation and strict type safety.", COLOR_GREEN)

img_path_s5 = os.path.join(IMAGES_DIR, "screen-products.png")
if os.path.exists(img_path_s5):
    s5.shapes.add_picture(img_path_s5, Inches(6.9), Inches(2.2), width=Inches(5.5), height=Inches(4.5))

# ==========================================================
# SLIDE 6: Zero-Cost Backend
# ==========================================================
s6 = prs.slides.add_slide(blank_layout)
add_header(s6, "The Zero-Cost Serverless Backend", "Delivering full transactional workflows without servers or ongoing bills.")

steps = [
    ("STEP 01", "React Client", "User submits an inquiry; client-side validation ensures clean data before transmission."),
    ("STEP 02", "Apps Script Webhook", "A stateless Google Apps Script endpoint receives and parses JSON payload securely."),
    ("STEP 03", "Sheets Datastore", "Appends records, updates inventory tracking, and triggers automated email alerts.")
]

for i, (num, title, desc) in enumerate(steps):
    left = Inches(0.9 + i * 3.9)
    box = s6.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, Inches(2.4), Inches(3.6), Inches(2.5))
    box.fill.solid()
    box.fill.fore_color.rgb = COLOR_LIGHT_BG
    box.line.color.rgb = COLOR_BORDER
    box.line.width = Pt(1)
    
    tf_b = box.text_frame
    tf_b.word_wrap = True
    p1 = tf_b.paragraphs[0]
    p1.text = num
    p1.font.name = FONT_MONO
    p1.font.size = Pt(12)
    p1.font.bold = True
    p1.font.color.rgb = COLOR_GREEN
    
    p2 = tf_b.add_paragraph()
    p2.text = title
    p2.font.name = FONT_SANS
    p2.font.size = Pt(17)
    p2.font.bold = True
    p2.font.color.rgb = COLOR_DARK
    p2.space_before = Pt(4)
    
    p3 = tf_b.add_paragraph()
    p3.text = desc
    p3.font.name = FONT_SANS
    p3.font.size = Pt(13)
    p3.font.color.rgb = COLOR_MUTED
    p3.space_before = Pt(8)

# Cost Banner
banner = s6.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.9), Inches(5.3), Inches(11.5), Inches(1.3))
banner.fill.solid()
banner.fill.fore_color.rgb = RGBColor(232, 239, 233)
banner.line.color.rgb = COLOR_GREEN
banner.line.width = Pt(1)

tf_ban = banner.text_frame
tf_ban.word_wrap = True
p_ban = tf_ban.paragraphs[0]
r_b1 = p_ban.add_run()
r_b1.text = "Total Infrastructure Operating Cost:   "
r_b1.font.name = FONT_SANS
r_b1.font.size = Pt(18)
r_b1.font.bold = True
r_b1.font.color.rgb = COLOR_DARK

r_b2 = p_ban.add_run()
r_b2.text = "$0.00 / month\n"
r_b2.font.name = FONT_MONO
r_b2.font.size = Pt(24)
r_b2.font.bold = True
r_b2.font.color.rgb = COLOR_GREEN

r_b3 = p_ban.add_run()
r_b3.text = "No credit card required. Zero servers to maintain. 99.9% uptime."
r_b3.font.name = FONT_SANS
r_b3.font.size = Pt(13)
r_b3.font.color.rgb = COLOR_MUTED

# ==========================================================
# SLIDE 7: Reality Check 02 (Editable Meme Placeholder)
# ==========================================================
s7 = prs.slides.add_slide(blank_layout)
add_meme_placeholder_slide(s7, "Reality Check: The Cloud Bill Dilemma",
                           "[MEME 02 PLACEHOLDER: $450/mo AWS vs $0 Google Sheets]",
                           "Enterprise developers arguing about Kubernetes microservices while two high schoolers run production on Google Sheets.")

# ==========================================================
# SLIDE 8: Interactive Inquiry Engine
# ==========================================================
s8 = prs.slides.add_slide(blank_layout)
add_header(s8, "Interactive Inquiry Engine", "Handling institutional orders and sample requests with context preservation.")

tx_s8 = s8.shapes.add_textbox(Inches(0.9), Inches(2.2), Inches(5.6), Inches(4.5))
tf_s8 = tx_s8.text_frame
tf_s8.word_wrap = True
p_h8 = tf_s8.paragraphs[0]
p_h8.text = "Order & Sample Workflow"
p_h8.font.name = FONT_SANS
p_h8.font.size = Pt(20)
p_h8.font.bold = True
p_h8.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_s8, "Contextual Pre-Filling:", "Selecting an item automatically binds its product ID, specifications, and suggested order minimums into form state.", COLOR_GREEN)
add_bullet_point(tf_s8, "Client-Side Validation:", "Immediate feedback flags incomplete or invalid entries before triggering network dispatches.", COLOR_GREEN)
add_bullet_point(tf_s8, "Confirmation & Logging:", "A clean confirmation modal displays expected turnaround times while logging data directly to the spreadsheet.", COLOR_GREEN)

img_path_s8 = os.path.join(IMAGES_DIR, "screen-enquire.png")
if os.path.exists(img_path_s8):
    s8.shapes.add_picture(img_path_s8, Inches(6.9), Inches(2.2), width=Inches(5.5), height=Inches(4.5))

# ==========================================================
# SLIDE 9: Paradigm Shift: Developer as Architect
# ==========================================================
s9 = prs.slides.add_slide(blank_layout)
add_header(s9, "The Paradigm Shift: Developer as Architect", "How autonomous workflows shift focus from repetitive syntax to system design.")

tx_s9_l = s9.shapes.add_textbox(Inches(0.9), Inches(2.3), Inches(5.5), Inches(4.5))
tf_s9_l = tx_s9_l.text_frame
tf_s9_l.word_wrap = True
p_h9_l = tf_s9_l.paragraphs[0]
p_h9_l.text = "Traditional Coding"
p_h9_l.font.name = FONT_SANS
p_h9_l.font.size = Pt(20)
p_h9_l.font.bold = True
p_h9_l.font.color.rgb = COLOR_MUTED

add_bullet_point(tf_s9_l, "Manual Syntax Typing:", "Manually typing repetitive component boilerplate and state handlers line by line.", COLOR_MUTED)
add_bullet_point(tf_s9_l, "Dependency Friction:", "Spending hours searching forum threads to diagnose broken npm packages and imports.", COLOR_MUTED)
add_bullet_point(tf_s9_l, "Low-Level Bugs:", "Getting stuck on typos and syntax bugs instead of building real user features.", COLOR_MUTED)

tx_s9_r = s9.shapes.add_textbox(Inches(6.9), Inches(2.3), Inches(5.5), Inches(4.5))
tf_s9_r = tx_s9_r.text_frame
tf_s9_r.word_wrap = True
p_h9_r = tf_s9_r.paragraphs[0]
p_h9_r.text = "Autonomous AI Coding"
p_h9_r.font.name = FONT_SANS
p_h9_r.font.size = Pt(20)
p_h9_r.font.bold = True
p_h9_r.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_s9_r, "Define System Constraints:", "You define the core goals, system constraints, component contracts, and visual design rules.", COLOR_GREEN)
add_bullet_point(tf_s9_r, "Autonomous Agent Edits:", "The AI agent explores your files, writes components, and links routes across the codebase.", COLOR_GREEN)
add_bullet_point(tf_s9_r, "Automated Verification:", "Automated tools test the code, surface errors, and repair bugs instantly.", COLOR_GREEN)

# ==========================================================
# SLIDE 10: Reality Check 03 (Editable Meme Placeholder)
# ==========================================================
s10 = prs.slides.add_slide(blank_layout)
add_meme_placeholder_slide(s10, "Reality Check: Learning to Code in 2026",
                           "[MEME 03 PLACEHOLDER: 400 Pages of Docs vs Writing Clean Specs]",
                           "Reading 200 pages of manual documentation at 3:00 AM is officially a thing of the past. Define the requirements and let the tools execute.")

# ==========================================================
# SLIDE 11: Autonomous Coding Loop
# ==========================================================
s11 = prs.slides.add_slide(blank_layout)
add_header(s11, "How the Autonomous Coding Loop Works", "Not a chatbot copying snippets, but an automated cycle that creates and tests code.")

loop_steps = [
    ("STAGE 01", "Define the Goal", "Write clear requirements, design rules, and data structures in a simple specification document."),
    ("STAGE 02", "Autonomous Edit", "The agent reads existing files, writes modular components, and links application routes."),
    ("STAGE 03", "Automated Check", "Automated tools build the code. If an error appears, the agent reads terminal output and fixes it."),
    ("STAGE 04", "Safe History", "Every successful step is saved into version control, allowing you to experiment freely with zero risk.")
]

for i, (stage, st_title, st_desc) in enumerate(loop_steps):
    left = Inches(0.9 + i * 2.95)
    box = s11.shapes.add_shape(MSO_SHAPE.RECTANGLE, left, Inches(2.5), Inches(2.75), Inches(3.8))
    box.fill.solid()
    box.fill.fore_color.rgb = COLOR_LIGHT_BG
    box.line.color.rgb = COLOR_BORDER
    box.line.width = Pt(1)
    
    tf_b = box.text_frame
    tf_b.word_wrap = True
    p1 = tf_b.paragraphs[0]
    p1.text = stage
    p1.font.name = FONT_MONO
    p1.font.size = Pt(11)
    p1.font.bold = True
    p1.font.color.rgb = COLOR_GREEN
    
    p2 = tf_b.add_paragraph()
    p2.text = st_title
    p2.font.name = FONT_SANS
    p2.font.size = Pt(17)
    p2.font.bold = True
    p2.font.color.rgb = COLOR_DARK
    p2.space_before = Pt(6)
    
    p3 = tf_b.add_paragraph()
    p3.text = st_desc
    p3.font.name = FONT_SANS
    p3.font.size = Pt(13)
    p3.font.color.rgb = COLOR_MUTED
    p3.space_before = Pt(12)

# ==========================================================
# SLIDE 12: Introducing OpenCode
# ==========================================================
s12 = prs.slides.add_slide(blank_layout)
add_header(s12, "Introducing OpenCode", "An open-source autonomous coding agent that runs directly in your terminal.")

tx_s12 = s12.shapes.add_textbox(Inches(0.9), Inches(2.3), Inches(5.6), Inches(4.5))
tf_s12 = tx_s12.text_frame
tf_s12.word_wrap = True
p_h12 = tf_s12.paragraphs[0]
p_h12.text = "Why OpenCode?"
p_h12.font.name = FONT_SANS
p_h12.font.size = Pt(20)
p_h12.font.bold = True
p_h12.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_s12, "100% Open Source:", "Maintained by Anomaly (GitHub: anomalyco/opencode). Free to use with zero vendor lock-in.", COLOR_GREEN)
add_bullet_point(tf_s12, "Dual Execution Modes:", "Plan Mode surveys your architecture without editing; Build Mode autonomously edits files and runs tests.", COLOR_GREEN)
add_bullet_point(tf_s12, "Connects to Any Model:", "Works with free cloud endpoints or completely private offline models on your personal computer.", COLOR_GREEN)

# Terminal box
term_box = s12.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(6.9), Inches(2.3), Inches(5.5), Inches(3.6))
term_box.fill.solid()
term_box.fill.fore_color.rgb = COLOR_LIGHT_BG
term_box.line.color.rgb = COLOR_GREEN
term_box.line.width = Pt(1.5)

tf_term = term_box.text_frame
tf_term.word_wrap = True
p_t1 = tf_term.paragraphs[0]
p_t1.text = "// Quick Installation in 60 Seconds"
p_t1.font.name = FONT_MONO
p_t1.font.size = Pt(13)
p_t1.font.color.rgb = COLOR_MUTED

commands = [
    ("$ npm install -g @opencode/cli", COLOR_GREEN),
    ("$ cd ./my-project", COLOR_GREEN),
    ("$ opencode", COLOR_GREEN),
    ("", COLOR_MUTED),
    ("// Runs on macOS, Linux, and Windows WSL", COLOR_MUTED)
]

for cmd, color in commands:
    p_cmd = tf_term.add_paragraph()
    p_cmd.text = cmd
    p_cmd.font.name = FONT_MONO
    p_cmd.font.size = Pt(14)
    p_cmd.font.bold = True
    p_cmd.font.color.rgb = color
    p_cmd.space_before = Pt(8)

# ==========================================================
# SLIDE 13: Free AI Models for Students
# ==========================================================
s13 = prs.slides.add_slide(blank_layout)
add_header(s13, "Free AI Models: Zero Cost for Students", "Practical options you can use tonight without paying for subscriptions.")

tx_s13_l = s13.shapes.add_textbox(Inches(0.9), Inches(2.3), Inches(5.5), Inches(4.5))
tf_s13_l = tx_s13_l.text_frame
tf_s13_l.word_wrap = True
p_h13_l = tf_s13_l.paragraphs[0]
p_h13_l.text = "Free Cloud APIs"
p_h13_l.font.name = FONT_SANS
p_h13_l.font.size = Pt(20)
p_h13_l.font.bold = True
p_h13_l.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_s13_l, "Google Gemini API:", "Sign in to aistudio.google.com for a free key. Generous free tiers with Gemini 1.5 Flash and Gemini 2.0.", COLOR_GREEN)
add_bullet_point(tf_s13_l, "Groq Cloud:", "Ultra-fast token generation on open-weight models like Llama 3.3 via console.groq.com.", COLOR_GREEN)
add_bullet_point(tf_s13_l, "GitHub Models:", "Free student access to models like GPT-4o and Claude inside VS Code and GitHub Codespaces.", COLOR_GREEN)

tx_s13_r = s13.shapes.add_textbox(Inches(6.9), Inches(2.3), Inches(5.5), Inches(4.5))
tf_s13_r = tx_s13_r.text_frame
tf_s13_r.word_wrap = True
p_h13_r = tf_s13_r.paragraphs[0]
p_h13_r.text = "100% Offline with Ollama"
p_h13_r.font.name = FONT_SANS
p_h13_r.font.size = Pt(20)
p_h13_r.font.bold = True
p_h13_r.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_s13_r, "Completely Private & Local:", "Install from ollama.com. Runs entirely on your laptop hardware without needing an internet connection.", COLOR_GREEN)
add_bullet_point(tf_s13_r, "Recommended Model:", "qwen2.5-coder:7b delivers outstanding coding logic on standard laptops with 8GB to 16GB of RAM.", COLOR_GREEN)
add_bullet_point(tf_s13_r, "Zero Latency:", "Instant responses directly on device with zero dependence on external network connectivity.", COLOR_GREEN)

# ==========================================================
# SLIDE 14: Reality Check 04 (Editable Meme Placeholder)
# ==========================================================
s14 = prs.slides.add_slide(blank_layout)
add_meme_placeholder_slide(s14, "Reality Check: The Compiler Never Lies",
                           "[MEME 04 PLACEHOLDER: AI claims bugs are fixed vs Compiler errors]",
                           "\"I fixed all the bugs,\" says the AI model. The compiler: 47 errors found in 3 files.")

# ==========================================================
# SLIDE 15: Thank You & QR
# ==========================================================
s15 = prs.slides.add_slide(blank_layout)

tx_s15 = s15.shapes.add_textbox(Inches(2.5), Inches(1.0), Inches(8.3), Inches(1.5))
tf_s15 = tx_s15.text_frame
tf_s15.word_wrap = True
p_ty = tf_s15.paragraphs[0]
p_ty.alignment = PP_ALIGN.CENTER

r_ty1 = p_ty.add_run()
r_ty1.text = "Thank "
r_ty1.font.name = FONT_SANS
r_ty1.font.size = Pt(54)
r_ty1.font.bold = True
r_ty1.font.color.rgb = COLOR_DARK

r_ty2 = p_ty.add_run()
r_ty2.text = "You."
r_ty2.font.name = FONT_SANS
r_ty2.font.size = Pt(54)
r_ty2.font.bold = True
r_ty2.font.color.rgb = COLOR_GREEN

p_ty_sub = tf_s15.add_paragraph()
p_ty_sub.alignment = PP_ALIGN.CENTER
p_ty_sub.text = "Scan the code to access the complete open-source repository, live demo, and student setup guide."
p_ty_sub.font.name = FONT_SANS
p_ty_sub.font.size = Pt(17)
p_ty_sub.font.color.rgb = COLOR_MUTED
p_ty_sub.space_before = Pt(8)

# QR Code
img_path_qr = os.path.join(IMAGES_DIR, "qr-ecoloop.png")
if os.path.exists(img_path_qr):
    s15.shapes.add_picture(img_path_qr, Inches(5.4), Inches(2.8), width=Inches(2.5), height=Inches(2.5))

# GitHub link & School
tx_foot = s15.shapes.add_textbox(Inches(2.5), Inches(5.6), Inches(8.3), Inches(1.2))
tf_foot = tx_foot.text_frame
tf_foot.word_wrap = True
p_f1 = tf_foot.paragraphs[0]
p_f1.alignment = PP_ALIGN.CENTER
p_f1.text = "github.com/Harman209/ecoloop"
p_f1.font.name = FONT_MONO
p_f1.font.size = Pt(15)
p_f1.font.bold = True
p_f1.font.color.rgb = COLOR_GREEN

p_f2 = tf_foot.add_paragraph()
p_f2.alignment = PP_ALIGN.CENTER
p_f2.text = "Swami Sant Dass Public School, Jalandhar"
p_f2.font.name = FONT_SANS
p_f2.font.size = Pt(14)
p_f2.font.bold = True
p_f2.font.color.rgb = COLOR_DARK
p_f2.space_before = Pt(6)

# Save
output_path = "/home/h4rman/Projects/ecoloop/docs/presentation/ecoloop-presentation.pptx"
prs.save(output_path)
print(f"SUCCESS: Generated {output_path}")
