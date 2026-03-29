# Technotsav 2025 - Project Documentation

## ?? Technology Stack

| Category | Technology |
|----------|------------|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Libraries** | jQuery (minified) |
| **Fonts** | Custom fonts (Jura, Prakrta, Montserrat) |
| **Icons** | Font Awesome 4.7 |
| **Analytics** | Google Analytics (gtag.js) |
| **PWA** | Service Worker, Web App Manifest |

> **Note**: This project runs **without any modern frontend frameworks** - using custom implementations called **JSPA** (JavaScript Page Architecture) and **JOS** (JavaScript Object System).

---

## ?? Project Structure

```
Technotsav-Website/
¦
+-- ?? HTML Pages
¦   +-- index.html           # Main landing page
¦   +-- home.html            # Alternative home page
¦   +-- events.html          # Events listing page
¦   +-- login.html           # User login page
¦   +-- create_account.html  # User registration page
¦   +-- profile.html         # User profile page
¦   +-- user_details.html    # User details management
¦   +-- edit.html            # Event editing interface
¦   +-- credits.html         # Credits page
¦   +-- 404.html             # Error page
¦   +-- message.html         # Message/notification page
¦   +-- reg.html             # Registration page
¦   +-- verify_link.html     # Email verification page
¦   +-- oauth_redirect.html  # OAuth redirect handler
¦   +-- oauth_redirect_home.html  # OAuth home redirect
¦   +-- og_redirect.html     # Open Graph redirect
¦   +-- opening_soon.html    # Coming soon page
¦   +-- index_construction.html  # Under construction page
¦
+-- ?? JavaScript Files
¦   +-- script.js            # Main application logic
¦   +-- butter.js            # Smooth scrolling library
¦   +-- cursor.js            # Custom cursor effects
¦   +-- js/
¦       +-- jquery.min.js    # jQuery library
¦
+-- ?? Styling
¦   +-- style.css            # Main stylesheet (3362+ lines)
¦   +-- css/
¦       +-- font-awesome.min.css  # Font Awesome icons
¦
+-- ?? Data Files
¦   +-- events.json          # Event data (2700+ lines)
¦   +-- manifest.json        # PWA manifest
¦   +-- sitemap.xml          # SEO sitemap
¦   +-- cookie_policy.md     # Cookie policy document
¦   +-- CNAME                # Custom domain config
¦
+-- ?? Assets
¦   +-- bgs/                 # Event background images (75 files)
¦   +-- sponsors/            # Sponsor logos (13 files)
¦   +-- image/               # General images (3 files)
¦   +-- [Various images & SVGs at root level]
¦
+-- ?? Fonts
¦   +-- Jura-VariableFont_wght.woff2
¦   +-- Montserrat-Medium.woff2
¦   +-- prakrta_.woff2
¦
+-- ?? Configuration
    +-- service-worker.js    # PWA service worker
    +-- manifest.json        # Web app manifest
    +-- favicon.ico          # Favicon
    +-- favicon.png          # PNG favicon
```

---

## ?? Core Files

### `index.html` (Main Landing Page)
- **Lines**: 729
- **Size**: ~131 KB
- **Purpose**: Primary entry point to the website
- **Features**:
  - Animated loading screen with logo animation
  - Custom cursor implementation
  - Navigation header with logo and links
  - Background video support
  - SEO meta tags (Open Graph, Twitter Cards)
  - Google Analytics integration
  - Responsive design with mobile support

### `home.html`
- **Size**: ~131 KB
- **Purpose**: Alternative homepage with similar functionality to index.html

### `README.md`
- **Lines**: 66
- **Purpose**: Project documentation with:
  - Live deployment links
  - Credits information
  - Design philosophy
  - Backend recommendations
  - Development notes

---

## ?? HTML Pages

### Authentication Pages

| File | Purpose |
|------|---------|
| `login.html` | User sign-in with email/password and Google OAuth |
| `create_account.html` | New user registration form |
| `profile.html` | User profile overview and editing (8600+ lines) |
| `user_details.html` | Detailed user information management |
| `verify_link.html` | Email verification handler |
| `oauth_redirect.html` | Google OAuth callback handler |
| `oauth_redirect_home.html` | Post-OAuth home redirect |

### Content Pages

| File | Purpose |
|------|---------|
| `events.html` | Complete event listings with filtering (1319 lines) |
| `edit.html` | Admin interface for editing events |
| `credits.html` | Website credits and acknowledgments |
| `message.html` | Notification/message display page |

### Utility Pages

| File | Purpose |
|------|---------|
| `404.html` | Custom 404 error page with return home link |
| `opening_soon.html` | Coming soon placeholder (2.3 MB - contains embedded assets) |
| `index_construction.html` | Under construction page |
| `og_redirect.html` | Open Graph social media redirect |
| `reg.html` | Registration redirect page |

---

## ?? JavaScript Files

### `script.js` (Main Application Logic)
- **Lines**: 254
- **Size**: ~7.8 KB
- **Key Functions**:

| Function | Description |
|----------|-------------|
| `accept_cookie()` / `deccept_cookie()` | Cookie consent management |
| `notify(message, duration)` | Toast notification system |
| `login_error(code)` | Login error handling with predefined messages |
| `popstasticopener()` | OAuth popup window handler |
| `password_eye()` | Password visibility toggle |
| `validatePassword()` | Password validation for registration |
| `set_deafult_graduation_date()` | Auto-set graduation year |
| `getCookie(name)` | Cookie retrieval utility |
| `load_hash()` / `load_details()` | Load user session data |
| `sign_in_check(type)` | Session validation and redirects |
| `profile_edit(field)` | Enable profile field editing |
| `single_page_login(action)` | Toggle between login/signup views |
| `showSlides()` / `plusSlides()` / `currentSlide()` | Image slideshow controls |
| `nav_hide(scrollPos)` | Hide/show navigation based on scroll |
| `fly_in()`, `l_in()`, `r_in()`, `opa_rev()` | Animation helpers |
| `callbackRouter(entries, observer)` | Intersection observer callback |
| `graphic()` | Toggle between acrylic/solid theme |

### `butter.js` (Smooth Scrolling)
- **Lines**: 96
- **Size**: ~3.4 KB
- **Purpose**: Custom smooth scrolling library
- **Key Features**:
  - Fixed position wrapper
  - Damper-based smooth scrolling
  - Touch device support with cancel option
  - Automatic resize handling

### `cursor.js` (Custom Cursor Effects)
- **Lines**: 55
- **Size**: ~2.2 KB
- **Purpose**: Custom animated cursor with interactive effects
- **Features**:
  - Mouse tracking with transform animations
  - Parallax effect on background images
  - Hover detection for interactive elements
  - Click animations
  - Auto-hide when cursor leaves viewport

### `service-worker.js` (PWA Caching)
- **Lines**: 19
- **Purpose**: Progressive Web App service worker
- **Cached Resources**:
  - `manifest.json`
  - `style.css`
  - `script.js`
  - `cursor.js`
  - Homepage (`./`)

### `js/jquery.min.js`
- **Size**: ~90 KB
- **Purpose**: jQuery library for DOM manipulation

---

## ?? Styling & Assets

### `style.css` (Main Stylesheet)
- **Lines**: 3362
- **Size**: ~61.5 KB
- **Key Sections**:
  - Reset and base styles
  - Custom font definitions (Prakrta, Jura, Montserrat)
  - Header and navigation styles
  - Custom cursor styles
  - Card and event styles
  - Footer layout
  - About section
  - Profile page styles
  - Login/signup form styles
  - Responsive breakpoints
  - Animation keyframes
  - Noise/texture overlay effects

### `css/font-awesome.min.css`
- **Size**: ~31 KB
- **Purpose**: Font Awesome icon library

### Custom Fonts

| Font | File | Purpose |
|------|------|---------|
| **Prakrta** | `prakrta_.woff2` (~20 KB) | Custom decorative font |
| **Jura** | `Jura-VariableFont_wght.woff2` (~78 KB) | Variable weight sans-serif |
| **Montserrat** | `Montserrat-Medium.woff2` (~62 KB) | Body text font |

### Image Assets

#### Root Level Images
| File | Description |
|------|-------------|
| `CIT Logo_blue_butterfly.webp` | College logo |
| `logo h 2.webp` | Horizontal logo |
| `TK icon logo.svg` | Technotsav icon |
| `tk logo outline.svg` | Outline version of logo |
| `Group 11.webp`, `Group 12.svg`, `Group 304.png` | Design elements |
| `noise.webp` | Texture overlay for visual effect |
| `non-tech.webp` | Non-technical events banner |
| `web_b.webm` | Background video (~2.7 MB) |
| `Layer 1.svg` | Vector design element |
| `Vector.svg` | SVG vector graphic |

#### `bgs/` Directory (75 Event Images)
Contains WebP images for all events including:
- Technical events (Drone Racing, CAD Design, etc.)
- Non-technical events (Dance, Music, Quiz, etc.)
- Workshops (Blockchain, Cinematography, etc.)
- Sports (Chess, Futsal, Cricket, etc.)
- Pro Shows (DJ Night, Musical Night, etc.)

#### `sponsors/` Directory (13 Sponsor Logos)
Contains sponsor logos in WebP format.

#### `image/` Directory
Contains Open Graph images and favicons.

---

## ?? Data Files

### `events.json` (Event Database)
- **Lines**: 2702
- **Size**: ~130 KB
- **Structure**: Array of event objects

**Event Object Schema**:
```json
{
  "name": "Event Name",
  "type": "Technical | Non-Technical | Workshops | Sports | Pro Shows | Online",
  "tags": ["Tag1", "Tag2"],
  "image": "./bgs/EVENT_NAME.webp",
  "fee": "150 | 200 | FREE",
  "team_size": "0 | 2 | 5 | NIL | Event_Team_Size",
  "description": "Event description...",
  "tag_line": "Catchy tagline",
  "rules": [["Rule 1", "Rule 2", ...]],
  "prize": {
    "first": "1000 | NIL | -",
    "second": "750 | NIL | -",
    "third": "500 | NIL | -"
  },
  "date": "30 March 2023 | 31 March 2023 | 1 April 2023",
  "batch": [{"time": "8:00 AM", "venue": "Chennai Institute Of Technology"}],
  "incharge": [{
    "name": "Coordinator Name",
    "email": "email@citchennai.net",
    "phone": "9876543210"
  }],
  "instagram": "https://instagram.com/citTechnotsav...",
  "youtube": "https://www.youtube.com/@CITTechnotsav",
  "register": "https://forms.gle/..."
}
```

**Event Categories**:
| Category | Count |
|----------|-------|
| Technical | ~15 events |
| Non-Technical | ~25 events |
| Workshops | ~8 events |
| Sports | ~6 events |
| Pro Shows | ~5 events |
| Online | ~3 events |

### `manifest.json` (PWA Manifest)
```json
{
  "name": "CIT - Takshahila 2023",
  "short_name": "Technotsav 23",
  "start_url": "./",
  "theme_color": "#282828",
  "background_color": "#282828",
  "display": "standalone",
  "icons": [192x192, 512x512]
}
```

### `sitemap.xml` (SEO Sitemap)
Lists main pages with priorities:
- Homepage (1.00)
- Events (0.80)
- Credits (0.80)
- Login (0.64)

### `cookie_policy.md`
- **Size**: ~6.8 KB
- **Purpose**: Cookie usage policy documentation

### `CNAME`
- **Content**: Custom domain configuration
- **Domain**: Technotsav

---

## ?? PWA Support

The website supports **Progressive Web App** functionality:

1. **Service Worker** (`service-worker.js`)
   - Caches essential assets for offline access
   - Implements fetch-first-then-cache strategy

2. **Web App Manifest** (`manifest.json`)
   - Defines app name and icons
   - Enables "Add to Home Screen"
   - Standalone display mode
   - Custom theme colors (#282828)

3. **Features**:
   - Installable on mobile/desktop
   - Offline capability for cached pages
   - App-like experience

---

## ?? Design Philosophy

### Key Principles

1. **No Framework Dependency**: Built entirely with vanilla HTML, CSS, and JavaScript
2. **Custom Architecture**: Uses JSPA (JavaScript Page Architecture) for dynamic routing
3. **Zero Page Reloads**: SPA-like navigation with dynamic URLs
4. **Custom Animations**: Handcrafted CSS animations and JavaScript effects

### Visual Elements

- **Dark Theme**: Primary background color #131313
- **Acrylic Effect**: Blur and transparency effects
- **Noise Texture**: Subtle grain overlay for depth
- **Custom Cursor**: Interactive cursor with hover effects
- **Smooth Scrolling**: Butter.js implementation

### Interactive Features

- **Theme Toggle**: Switch between acrylic and solid themes
- **Parallax Effects**: Mouse-based parallax on hero section
- **Scroll-Based Animations**: Elements animate on scroll
- **Responsive Design**: Mobile-first approach

---

## ? Features

### User Features
- ? Event browsing with category filtering
- ? Event details with registration links
- ? User registration and login
- ? Google OAuth integration
- ? Profile management
- ? Responsive design for all devices

### Technical Features
- ? SEO optimization (meta tags, sitemap, Open Graph)
- ? Google Analytics integration
- ? Progressive Web App support
- ? Custom smooth scrolling
- ? Animated loading screen
- ? Dynamic content from JSON

### Visual Features
- ? Custom animated cursor
- ? Background video support
- ? Noise texture overlay
- ? CSS animations
- ? Parallax effects
- ? Acrylic/glassmorphism design

---

## ?? Developer Notes

### Website Last Updated
- **Date**: April 4th, 2023

### Credits
- **Developer**: Sushant Gajbhiye
- **Portfolio**: [github.com/sushant23-git](https://github.com/sushant23-git)
- **GitHub**: [sushant23-git](https://github.com/sushant23-git)

### Important Files for Customization

| To Modify | Edit File |
|-----------|-----------|
| Events | `events.json` |
| Styling | `style.css` |
| Main Logic | `script.js` |
| SEO/Meta | `index.html` head section |
| PWA Config | `manifest.json` |

---

## ?? Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/sushant23-git/Technotsav-Website.git
   ```

2. **Open in browser**
   - Simply open `index.html` in a web browser
   - Or serve with a local server for full functionality

3. **Edit events**
   - Modify `events.json` for event data
   - Add event images to `bgs/` directory
   - Use the edit interface at `/edit.html`

---

> *"This isn't just code  it's craftsmanship."* - Sushant Gajbhiye

---

**Document Generated**: February 2026  
**Project Version**: Technotsav 2025

