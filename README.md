# Veyra — Sustainable E-Commerce Comparison Platform

> **Working Prototype** faithfully built from Figma Design node `505-7836`:
> [Figma Node Link](https://www.figma.com/design/NcAzsKFXZ7cgKdgyNIvbH4/hw?node-id=505-7836&m=dev)

---

## 🌿 Overview

**Veyra** is an independent shopping intelligence platform that compares real final costs (including delivery, packaging fees, and location-based logistics) across trusted e-commerce stores while empowering buyers with a verified **Sustainability Score (0-100)**.

---

## 🚀 Live Working Prototype Features

1. **Pixel-Perfect Visual Fidelity**:
   - Typography: **Manrope** (Headings, bold numbers) & **DM Sans** (Body, labels, UI) loaded via Google Fonts.
   - Exact color tokens: Warm off-white (`#F7F7F2`), Forest green (`#335938`), Sage container fills (`#E3EDE0`), and Vibrant Lime accents (`#D8F075`).
   - Authentic assets directly extracted from Figma:
     - `assets/hero-illustration.png` (Conscious shoppers & green logistics)
     - `assets/coffee-press.png` (French press product spotlight)
     - `assets/icons/` (Exported SVG icons for Leaf logo, Location PIN, Search, Trend Arrow, Sparkles, and Checks).

2. **Full Responsive Design (Mobile, Tablet, Laptop & Desktop)**:
   - **Laptops / Desktops (> 1024px)**: 2-column hero grid, side-by-side comparison cards, sticky glassmorphic navbar.
   - **Tablets (768px – 1024px)**: Fluid single-column collapse, responsive process ribbon, auto-adjusting font clamps.
   - **Mobile Devices (< 640px)**:
     - Collapsible hamburger navigation drawer.
     - Stacked search input + PIN + full-width comparison button.
     - Vertically stacked feature cards and sustainability banner.
     - Touch-friendly tap targets (minimum 44px) and smooth modals.

3. **Interactive Comparison Engine & Multi-Page Navigation**:
   - Click **"Compare now"** (`#compare-now-btn`) on the home page (`index.html`) to transition seamlessly to the dedicated results page:
     - [`results.html?q=iPhone+15&pin=208001`](file:///c:/Users/prakh/OneDrive/Desktop/CarePath/results.html)
   - Faithfully built from Figma Design node `510-9246`:
     - [Figma Results Page Link](https://www.figma.com/design/NcAzsKFXZ7cgKdgyNIvbH4/hw?node-id=510-9246&m=dev)
   - Features on `results.html`:
     - **Header & Search Bar**: Persistent search bar prefilled with active query, PIN selector chip, and navigation.
     - **Veyra's Clear Pick**: High-impact recommendation card for the top choice (Flipkart @ ₹60,098) with feature highlights and "See comparison" scroll trigger.
     - **A Greener Way To Buy**: 6-card responsive grid of sustainable alternatives (Bamboo Tumbler 91%, Fairphone 5 89%, Recycled Headphones 86%, Wooden Cups 84%, Refurbished iPhone 82%, Glass Tumblers 80%) with visual progress meters and delta badges.
     - **Compare The Actual Cost**: Detailed 6-store comparison table (Amazon, Flipkart, Croma, Reliance Digital, Vijay Sales, Cashify) with cost breakdowns, delivery ETAs, sustainability scores, and "View offer" CTAs.
     - **Sorting & Filtering**: Dynamic sort by Price, Delivery Speed, or Eco Score, plus quick filter pills (All stores, Free delivery, Tomorrow, Circular).
     - **Independence Banner**: Methodology guarantee and link to the interactive scoring simulator.

4. **Location PIN Code Switcher**:
   - Click the PIN chip in the navbar or search box to switch locations (e.g. Kanpur `208001`, Delhi `110001`, Mumbai `400001`, Bengaluru `560001`, Kolkata `700001`, Chennai `600001`).
   - Automatically recalculates delivery timelines, charges, and warehouse fulfillment distances across both pages.

5. **Interactive Sustainability Score Simulator**:
   - Click **"Our methodology"** or **"Sustainability"** to open the methodology modal.
   - Adjust the live interactive sliders (**Repairability Index** & **Recycled Packaging %**) to watch the mathematical score update dynamically in real time.

---

## 💻 How to Run Locally

You can open `index.html` directly in any web browser, or launch a local dev server:

### Option A: Using Python (Already running on port 8080)
```bash
python -m http.server 8080
```
Then visit: [http://localhost:8080](http://localhost:8080)

### Option B: Using Node / npx
```bash
npx serve .
```

---

## 📁 Project Structure

```
CarePath/
├── index.html                  # Landing page (Figma node 505-7836)
├── results.html                # Search & comparison results page (Figma node 510-9246)
├── styles.css                  # Modern CSS with design tokens & responsive breakpoints
├── app.js                      # Prototype interactive logic, state management, & mock datasets
├── assets/
│   ├── hero-illustration.png   # Figma conscious shopping illustration
│   ├── coffee-press.png        # Figma high-res product photo
│   └── icons/                  # Figma exported SVGs (logo, pins, search, arrows)
└── README.md                   # Documentation & setup instructions
```
