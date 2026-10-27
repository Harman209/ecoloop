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
add_header(s2, "The Packaging Trap: Multi-Layer Plastics", "Why standard municipal recyclers throw clean packaging straight into landfills.")

tx_c1 = s2.shapes.add_textbox(Inches(0.9), Inches(2.3), Inches(5.5), Inches(4.5))
tf_c1 = tx_c1.text_frame
tf_c1.word_wrap = True
p_h1 = tf_c1.paragraphs[0]
p_h1.text = "The Material Reality"
p_h1.font.name = FONT_SANS
p_h1.font.size = Pt(20)
p_h1.font.bold = True
p_h1.font.color.rgb = COLOR_RED

add_bullet_point(tf_c1, "Bonded Metal & Plastic:", "Chips and snack packets laminate aluminum foil between plastic film. Separating those layers is chemically difficult and commercially unprofitable.", COLOR_RED)
add_bullet_point(tf_c1, "100% Landfill Destination:", "Because municipal plants cannot process multi-layer packaging, almost all snack wrappers are burned or dumped into local landfills.", COLOR_RED)
add_bullet_point(tf_c1, "Clean Waste in Schools:", "Canteens and classrooms generate sacks of clean snack wrappers daily with zero realistic collection logistics.", COLOR_RED)

tx_c2 = s2.shapes.add_textbox(Inches(6.9), Inches(2.3), Inches(5.5), Inches(4.5))
tf_c2 = tx_c2.text_frame
tf_c2.word_wrap = True
p_h2 = tf_c2.paragraphs[0]
p_h2.text = "The EcoLoop Approach"
p_h2.font.name = FONT_SANS
p_h2.font.size = Pt(20)
p_h2.font.bold = True
p_h2.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_c2, "Skip Separation, Heat-Compress:", "Instead of separating the foil, we partner to heat-press whole wrappers into dense boards that replace plywood.", COLOR_GREEN)
add_bullet_point(tf_c2, "Unified Circular Model:", "Unifying scattered school green crafts and outsourced heavy materials into one clean system.", COLOR_GREEN)
add_bullet_point(tf_c2, "Digital Transparency:", "Building an online catalog so buyers can see exact specifications and request real samples.", COLOR_GREEN)

# ==========================================================
# SLIDE 3: The Physical Loop
# ==========================================================
s3 = prs.slides.add_slide(blank_layout)
add_header(s3, "The Physical Loop", "Six circular products systematically diverted from waste streams.")

tx_s3 = s3.shapes.add_textbox(Inches(0.9), Inches(2.2), Inches(5.6), Inches(4.8))
tf_s3 = tx_s3.text_frame
tf_s3.word_wrap = True
tf_s3.margin_left = tf_s3.margin_top = 0

products = [
    ("Student-Made: Seed Paper", "Handmade plantable paper embedded with native seeds, crafted in school."),
    ("Student-Made: Bioenzymes", "Citrus fruit peels fermented into natural multi-purpose cleaning liquids."),
    ("Student-Made: Uniform Bags", "Durable tote bags stitched from discarded school uniform fabrics."),
    ("Student-Made: Eco-Bricks", "PET bottles tightly packed with clean plastic wrappers for simple construction."),
    ("Student-Made: Bottle Planters", "Upcycled beverage containers for school corridor nursery gardening."),
    ("NGO Partnership: MLP Sheets", "Heavy-duty boards heat-pressed from snack wrappers using hydraulic machinery.")
]

for i, (p_name, p_desc) in enumerate(products):
    p = tf_s3.paragraphs[0] if i == 0 else tf_s3.add_paragraph()
    if i > 0:
        p.space_before = Pt(11)
    
    is_ngo = "NGO" in p_name
    dot_color = COLOR_GREEN_LT if is_ngo else COLOR_GREEN
    
    r1 = p.add_run()
    r1.text = "■  " + p_name + "\n"
    r1.font.name = FONT_SANS
    r1.font.size = Pt(14.5)
    r1.font.bold = True
    r1.font.color.rgb = dot_color
    
    r2 = p.add_run()
    r2.text = "   " + p_desc
    r2.font.name = FONT_SANS
    r2.font.size = Pt(13)
    r2.font.color.rgb = COLOR_MUTED

# Right Placeholder for Meme ("bro think he recyclable")
box_s3 = s3.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(6.9), Inches(2.2), Inches(5.5), Inches(4.5))
box_s3.fill.solid()
box_s3.fill.fore_color.rgb = RGBColor(240, 246, 242)
box_s3.line.color.rgb = COLOR_GREEN
box_s3.line.width = Pt(1.5)

tf_s3_r = box_s3.text_frame
tf_s3_r.word_wrap = True
p_m1 = tf_s3_r.paragraphs[0]
p_m1.alignment = PP_ALIGN.CENTER
p_m1.text = '[MEME: "bro think he recyclable"]'
p_m1.font.name = FONT_SANS
p_m1.font.size = Pt(18)
p_m1.font.bold = True
p_m1.font.color.rgb = COLOR_GREEN

p_m2 = tf_s3_r.add_paragraph()
p_m2.alignment = PP_ALIGN.CENTER
p_m2.text = "(Snack packaging trying to enter the recycling bin)\n\nDrop your meme image here or delete this box"
p_m2.font.name = FONT_SANS
p_m2.font.size = Pt(13)
p_m2.font.color.rgb = COLOR_MUTED
p_m2.space_before = Pt(12)

# ==========================================================
# SLIDE 4: Reality Check 01 (Meme Placeholder)
# ==========================================================
s4 = prs.slides.add_slide(blank_layout)
add_meme_placeholder_slide(s4, "Reality Check: How It Started vs How It Is Going", 
                           "[MEME 01: Teachers thinking we'd just pick up litter vs Building a brand & platform]", 
                           "Started as scattered classroom craft projects. Turned into a unified circular brand with external partnerships and custom software.")

# ==========================================================
# SLIDE 5: Why Build a Digital Platform?
# ==========================================================
s5 = prs.slides.add_slide(blank_layout)
add_header(s5, "Why Build a Digital Platform?", "Transforming school crafts into verifiable, specification-backed utility products.")

tx_s5 = s5.shapes.add_textbox(Inches(0.9), Inches(2.2), Inches(5.6), Inches(4.5))
tf_s5 = tx_s5.text_frame
tf_s5.word_wrap = True
p_h5 = tf_s5.paragraphs[0]
p_h5.text = "Platform Objectives"
p_h5.font.name = FONT_SANS
p_h5.font.size = Pt(20)
p_h5.font.bold = True
p_h5.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_s5, "Engineering Credibility:", "Publishing actual dimensions, material density, thermal ratings, and production lead times so buyers take recycled goods seriously.", COLOR_GREEN)
add_bullet_point(tf_s5, "Direct Inquiry Routing:", "Giving institutions and partners a friction-free way to query available stock and request physical samples.", COLOR_GREEN)
add_bullet_point(tf_s5, "Connecting School to Outside World:", "Taking activities happening inside classrooms and presenting them professionally to external organizations.", COLOR_GREEN)

img_path_s5 = os.path.join(IMAGES_DIR, "screen-home-url.png")
if not os.path.exists(img_path_s5):
    img_path_s5 = os.path.join(IMAGES_DIR, "screen-home.png")
if os.path.exists(img_path_s5):
    s5.shapes.add_picture(img_path_s5, Inches(6.8), Inches(2.8), width=Inches(5.6))

# ==========================================================
# SLIDE 6: Zero-Cost Serverless Backend
# ==========================================================
s6 = prs.slides.add_slide(blank_layout)
add_header(s6, "The Zero-Cost Backend: Built on Google Sheets", "Handling live incoming inquiries without paid servers or corporate credit cards.")

steps = [
    ("STEP 01", "React Form", "User fills in their name, product choice, and notes. The browser validates all inputs locally."),
    ("STEP 02", "Apps Script Webhook", "A free Google Apps Script webhook receives the data payload securely in the cloud."),
    ("STEP 03", "Sheets Database", "Appends the inquiry row into a live Google Sheet and immediately triggers an email alert.")
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

banner = s6.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.9), Inches(5.3), Inches(11.5), Inches(1.3))
banner.fill.solid()
banner.fill.fore_color.rgb = RGBColor(232, 239, 233)
banner.line.color.rgb = COLOR_GREEN
banner.line.width = Pt(1)

tf_ban = banner.text_frame
tf_ban.word_wrap = True
p_ban = tf_ban.paragraphs[0]
r_b1 = p_ban.add_run()
r_b1.text = "Monthly Infrastructure Bill:   "
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
r_b3.text = "No credit cards, zero server maintenance, and reliable for real order leads."
r_b3.font.name = FONT_SANS
r_b3.font.size = Pt(13)
r_b3.font.color.rgb = COLOR_MUTED

# ==========================================================
# SLIDE 7: Reality Check 02 (Meme Placeholder)
# ==========================================================
s7 = prs.slides.add_slide(blank_layout)
add_meme_placeholder_slide(s7, "Reality Check: The Cloud Bill Dilemma",
                           "[MEME 02: Paying $50/month for cloud databases vs High schoolers using a free Google Sheet]",
                           "Why spend monthly money on complex database servers when a free Google Sheet captures all your orders?")

# ==========================================================
# SLIDE 8: The Inquiry Engine: An Honest Review
# ==========================================================
s8 = prs.slides.add_slide(blank_layout)
add_header(s8, "The Inquiry Engine: An Honest Review", "Built in a single night sprint: functional, basic, and with plenty of room to improve.")

tx_s8 = s8.shapes.add_textbox(Inches(0.9), Inches(2.2), Inches(5.6), Inches(4.5))
tf_s8 = tx_s8.text_frame
tf_s8.word_wrap = True
p_h8 = tf_s8.paragraphs[0]
p_h8.text = "The Reality of Our MVP"
p_h8.font.name = FONT_SANS
p_h8.font.size = Pt(20)
p_h8.font.bold = True
p_h8.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_s8, "Built in One Night:", "Put together in a single late-night sprint to give the CBSE exhibition judges a working demo to test.", COLOR_GREEN)
add_bullet_point(tf_s8, "Basic but Working:", "Automatically pre-populates product details and logs records straight into our backend without paying for services.", COLOR_GREEN)
add_bullet_point(tf_s8, "Room for Improvement:", "Needs automated inventory deduction, better error states, and order tracking. It's an MVP, not final software.", COLOR_GREEN)

img_path_s8 = os.path.join(IMAGES_DIR, "screen-enquire.png")
if os.path.exists(img_path_s8):
    s8.shapes.add_picture(img_path_s8, Inches(6.9), Inches(2.2), width=Inches(5.5), height=Inches(4.5))

# ==========================================================
# SLIDE 9: Developer as Architect
# ==========================================================
s9 = prs.slides.add_slide(blank_layout)
add_header(s9, "How I Built It Without Knowing React", "Moving from typing boilerplate code to designing systems with AI agents.")

tx_s9_l = s9.shapes.add_textbox(Inches(0.9), Inches(2.3), Inches(5.5), Inches(4.5))
tf_s9_l = tx_s9_l.text_frame
tf_s9_l.word_wrap = True
p_h9_l = tf_s9_l.paragraphs[0]
p_h9_l.text = "The Traditional Hurdle"
p_h9_l.font.name = FONT_SANS
p_h9_l.font.size = Pt(20)
p_h9_l.font.bold = True
p_h9_l.font.color.rgb = COLOR_MUTED

add_bullet_point(tf_s9_l, "Syntax Friction:", "Getting stuck on missing brackets, package version mismatches, and unfamiliar framework setup.", COLOR_MUTED)
add_bullet_point(tf_s9_l, "Hours on Forums:", "Spending entire evenings digging through Stack Overflow threads instead of building real features.", COLOR_MUTED)
add_bullet_point(tf_s9_l, "Idea Blocked:", "Giving up on software ideas simply because you haven't spent 6 months memorizing syntax.", COLOR_MUTED)

tx_s9_r = s9.shapes.add_textbox(Inches(6.9), Inches(2.3), Inches(5.5), Inches(4.5))
tf_s9_r = tx_s9_r.text_frame
tf_s9_r.word_wrap = True
p_h9_r = tf_s9_r.paragraphs[0]
p_h9_r.text = "Developer as Architect"
p_h9_r.font.name = FONT_SANS
p_h9_r.font.size = Pt(20)
p_h9_r.font.bold = True
p_h9_r.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_s9_r, "Define the System Rules:", "You specify the data models, visual style, and constraints in plain language.", COLOR_GREEN)
add_bullet_point(tf_s9_r, "Agents Write the Code:", "An autonomous agent creates components, connects routes, and modifies multiple files.", COLOR_GREEN)
add_bullet_point(tf_s9_r, "Focus on Testing:", "Your primary job becomes quality control, testing user flows, and refining the architecture.", COLOR_GREEN)

# ==========================================================
# SLIDE 10: ChatGPT vs Agent Harness (Placeholders for Harman's Screenshots)
# ==========================================================
s10 = prs.slides.add_slide(blank_layout)
add_header(s10, "Chatbot vs Agent Workspace", "The difference between copy-pasting snippets and letting an agent build inside your files.")

# Left Box: ChatGPT Screenshot Placeholder
b_chat = s10.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(0.9), Inches(2.3), Inches(5.5), Inches(4.2))
b_chat.fill.solid()
b_chat.fill.fore_color.rgb = COLOR_LIGHT_BG
b_chat.line.color.rgb = COLOR_BORDER
b_chat.line.width = Pt(1.5)

tf_bc = b_chat.text_frame
tf_bc.word_wrap = True
p_c1 = tf_bc.paragraphs[0]
p_c1.alignment = PP_ALIGN.CENTER
p_c1.text = "ChatGPT Web Window"
p_c1.font.name = FONT_SANS
p_c1.font.size = Pt(18)
p_c1.font.bold = True
p_c1.font.color.rgb = COLOR_MUTED

p_c2 = tf_bc.add_paragraph()
p_c2.alignment = PP_ALIGN.CENTER
p_c2.text = "[DROP CHATGPT SCREENSHOT HERE]\n\n• Copy-pasting snippets back and forth\n• Forgets project context easily\n• Cannot see or edit your local project files"
p_c2.font.name = FONT_SANS
p_c2.font.size = Pt(13)
p_c2.font.color.rgb = COLOR_MUTED
p_c2.space_before = Pt(14)

# Right Box: Agent Workspace Placeholder (AGY / OpenCode)
b_agy = s10.shapes.add_shape(MSO_SHAPE.RECTANGLE, Inches(6.9), Inches(2.3), Inches(5.5), Inches(4.2))
b_agy.fill.solid()
b_agy.fill.fore_color.rgb = RGBColor(240, 246, 242)
b_agy.line.color.rgb = COLOR_GREEN
b_agy.line.width = Pt(1.5)

tf_ba = b_agy.text_frame
tf_ba.word_wrap = True
p_a1 = tf_ba.paragraphs[0]
p_a1.alignment = PP_ALIGN.CENTER
p_a1.text = "Agent Workspace (Antigravity / OpenCode)"
p_a1.font.name = FONT_SANS
p_a1.font.size = Pt(18)
p_a1.font.bold = True
p_a1.font.color.rgb = COLOR_GREEN

p_a2 = tf_ba.add_paragraph()
p_a2.alignment = PP_ALIGN.CENTER
p_a2.text = "[DROP ANTIGRAVITY SCREENSHOT HERE]\n\n• Reads and edits real repository files\n• Understands full folder structure and context\n• Runs terminal builds and tests autonomously"
p_a2.font.name = FONT_SANS
p_a2.font.size = Pt(13)
p_a2.font.color.rgb = COLOR_DARK
p_a2.space_before = Pt(14)

# ==========================================================
# SLIDE 11: How the Agent Loop Works
# ==========================================================
s11 = prs.slides.add_slide(blank_layout)
add_header(s11, "How Working with an Agent Actually Looks", "A practical 4-step loop of specifying, editing, testing, and self-repairing.")

loop_steps = [
    ("STAGE 01", "Write the Spec", "Describe what you want in plain language: colors, component layout, and behavior rules."),
    ("STAGE 02", "Agent Edits Files", "The agent inspects your repository, writes components, and updates project files directly."),
    ("STAGE 03", "You Test Locally", "You run the app in your browser, click the buttons, and see what works or what broke."),
    ("STAGE 04", "Agent Fixes Bugs", "You paste the error or unexpected behavior back to the agent; it reads the log and repairs it.")
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
# SLIDE 12: Tools You Can Use: OpenCode
# ==========================================================
s12 = prs.slides.add_slide(blank_layout)
add_header(s12, "Replicating This Workflow: OpenCode", "An open-source terminal agent that gives you the same autonomous capabilities.")

tx_s12 = s12.shapes.add_textbox(Inches(0.9), Inches(2.3), Inches(5.6), Inches(4.5))
tf_s12 = tx_s12.text_frame
tf_s12.word_wrap = True
p_h12 = tf_s12.paragraphs[0]
p_h12.text = "Why OpenCode for Students?"
p_h12.font.name = FONT_SANS
p_h12.font.size = Pt(20)
p_h12.font.bold = True
p_h12.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_s12, "100% Free & Open Source:", "Created by Anomaly (GitHub: anomalyco/opencode). Zero subscriptions or vendor lock-in.", COLOR_GREEN)
add_bullet_point(tf_s12, "Lives in Your Terminal:", "Reads your project files, edits code, and runs local commands just like specialized agent harnesses.", COLOR_GREEN)
add_bullet_point(tf_s12, "Dual Execution Modes:", "Plan Mode reviews architecture safely; Build Mode executes real code changes.", COLOR_GREEN)

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

add_bullet_point(tf_s13_l, "Google Gemini API:", "Sign in to aistudio.google.com for a free key. Generous free limits for fast coding models.", COLOR_GREEN)
add_bullet_point(tf_s13_l, "Groq Cloud:", "Ultra-fast free inference on open models like Llama 3.3 via console.groq.com.", COLOR_GREEN)
add_bullet_point(tf_s13_l, "GitHub Models:", "Free student access to preview models inside VS Code and GitHub Codespaces.", COLOR_GREEN)

tx_s13_r = s13.shapes.add_textbox(Inches(6.9), Inches(2.3), Inches(5.5), Inches(4.5))
tf_s13_r = tx_s13_r.text_frame
tf_s13_r.word_wrap = True
p_h13_r = tf_s13_r.paragraphs[0]
p_h13_r.text = "100% Offline with Ollama"
p_h13_r.font.name = FONT_SANS
p_h13_r.font.size = Pt(20)
p_h13_r.font.bold = True
p_h13_r.font.color.rgb = COLOR_GREEN

add_bullet_point(tf_s13_r, "Private & Local:", "Download ollama.com. Runs entirely on your laptop hardware without needing internet.", COLOR_GREEN)
add_bullet_point(tf_s13_r, "Recommended Model:", "qwen2.5-coder:7b delivers strong coding reasoning on standard student laptops.", COLOR_GREEN)
add_bullet_point(tf_s13_r, "Zero Latency:", "Fast responses directly on your machine with complete data privacy.", COLOR_GREEN)

# ==========================================================
# SLIDE 14: Reality Check 04 (Meme Placeholder: AI Confidence vs Reality)
# ==========================================================
s14 = prs.slides.add_slide(blank_layout)
add_meme_placeholder_slide(s14, "Reality Check: AI Confidence vs Reality",
                           "[MEME 04: AI confidently saying 'all bugs fixed' vs Clicking the button and the console explodes]",
                           "Prompting is only 20% of the work. Testing whether the buttons actually work is the other 80%.")

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

img_path_qr = os.path.join(IMAGES_DIR, "qr-ecoloop.png")
if os.path.exists(img_path_qr):
    s15.shapes.add_picture(img_path_qr, Inches(5.4), Inches(2.8), width=Inches(2.5), height=Inches(2.5))

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

output_path = "/home/h4rman/Projects/ecoloop/docs/presentation/ecoloop-presentation.pptx"
prs.save(output_path)
print(f"SUCCESS: Generated updated {output_path}")
