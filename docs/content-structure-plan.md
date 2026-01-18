# Content Structure Plan - Pornpanwalee Mayour Portfolio

## 1. Material Inventory

**Content Files:**
- `extract/Super Resume _ Reflect your talent and get a better job (1)_7691591c.json` (Resume data: 1,200+ words)
  - Personal information (name, contact, location)
  - Education (Bachelor's CS, RMUTT, graduating 2027)
  - Skills & strengths (5 Topgun strengths)
  - Interests & hobbies (gaming, music, baking, art)
  - Job preferences (IT/Programming intern/programmer)

**Visual Assets:**
- Profile photo: Referenced but needs sourcing
- Portfolio artwork: To be provided (gallery images)
- 3D Earth animation: Custom Three.js implementation (design specification only)

**Data Files:**
- Resume JSON provides structured data for extraction

## 2. Website Structure

**Type:** SPA (Single Page Application)

**Reasoning:** 
- Content volume: ~1,500 words total (fits SPA criteria <2000 words)
- Cohesive narrative: Single story flow from introduction → credentials → work → contact
- Single user goal: Recruiters/employers viewing complete profile in one session
- Visual continuity: 3D Earth animation creates immersive journey through sections
- Section count: 6 sections (Hero, About, Resume, Portfolio, Social, Contact) - meets SPA threshold

## 3. Page/Section Breakdown

### Single Page: Portfolio Home (`/`)

**Purpose**: Complete professional profile for recruiters, hiring managers, and potential collaborators

**Content Mapping:**

| Section | Component Pattern | Data File Path | Content to Extract | Visual Asset (Content ONLY) |
|---------|------------------|----------------|-------------------|---------------------------|
| Hero | Hero Pattern (3D Background) | `extract/...json` | Name: "Pornpanwalee Mayour"<br>Tagline: Custom (e.g., "Computer Science Student & Aspiring IT Professional") | - |
| About Me | 2-column layout (Photo + Bio) | `extract/...json` L1-30 | Name, Age (21), Education summary, Location | Profile photo (headshot) |
| Resume Preview | Card Grid (3 cards) | `extract/...json` | Card 1: Education section<br>Card 2: Skills section (งานพาร์ทไทม์, งานฟรีแลนซ์, ฝึกงาน)<br>Card 3: Strengths (5 Topgun Strengths) | - |
| Skills & Interests | Icon Grid + Tags | `extract/...json` | Technical: "ไอที / คอมพิวเตอร์: นักศึกษา ฝึกงาน, โปรแกรมเมอร์"<br>Hobbies: "เล่นเกม, ป๊อป, K-Pop, ทำขนม, แร็ป/ฮิปฮอป" | - |
| Art Portfolio | Gallery Grid (Masonry or Fixed Grid) | External portfolio images | To be provided by user | Portfolio artwork images |
| Social & Contact | CTA Section + Social Icons | `extract/...json` | Phone: 0637588539<br>Email: pornphunwaree@gmail.com<br>Username: ohsugar15 | - |
| Footer | Simple Footer | Static content | Copyright, quick links | - |

**Navigation Pattern:**
- Fixed header with smooth-scroll anchor links
- Sections: Home | About | Resume | Portfolio | Contact
- Mobile: Hamburger menu

**Transitions:**
- Smooth scroll behavior between sections
- Fade-in animations on scroll
- 3D Earth parallax effect (subtle, ≤16px offset)

## 4. Content Analysis

**Information Density:** Medium
- Clear professional focus (CS student seeking IT/programming roles)
- Balance of credentials (education, skills) and personality (hobbies, strengths)
- Sufficient content for engaging single-page experience without overwhelming

**Content Balance:**
- Text: ~1,500 words (65%)
- Images: Profile photo + portfolio gallery ~5-10 images (25%)
- Interactive: 3D Earth animation (10%)
- **Content Type:** Mixed (text-heavy resume data + visual portfolio showcase + interactive 3D element)

**Key Messages:**
1. **Professional Identity**: CS student with clear IT/programming career goals
2. **Qualifications**: RMUTT education, technical skills, goal-oriented mindset
3. **Personality**: Creative interests (gaming, music, art, baking) show well-rounded individual
4. **Availability**: Open to part-time, freelance, internship opportunities

**Design Implications:**
- 3D Earth creates "wow factor" differentiator for competitive student market
- Clean layout emphasizes professionalism and technical capability
- Portfolio gallery demonstrates creative skills alongside technical credentials
- Multiple CTAs (Download CV, Contact buttons) support conversion goal
