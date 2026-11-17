# Avula Divya Tej Reddy — Personal Portfolio & Verified Credentials

A responsive, high-performance personal portfolio website for **Avula Divya Tej Reddy**, showcasing academic achievements, technical skills, machine learning & deep learning projects, virtual internships, and 37 verified credentials across NPTEL, NASSCOM, AICTE EduSkills, AWS, Google, and competitive technical symposia.

---

## 🌟 What's Included

### 1. Featured Projects
- **Intelligent Crop Recommendation System using AI & DL Models**: Production-grade precision agriculture platform powered by 12 trained Machine Learning and Deep Neural Network architectures, featuring a novel **Hybrid XGBoost + ANN probability fusion model with 99.55% test accuracy**, FastAPI serving backend, Supabase PostgreSQL with Row-Level Security (RLS), and a React dashboard.
- **Mango Leaf Disease Prediction using VGG-16 Neural Networks**: Deep transfer learning system utilizing fine-tuned **VGG-16 Convolutional Neural Networks** converted to ONNX format for zero-latency, private, client-side edge AI inference directly in the browser via **ONNX Runtime Web** with React + TypeScript.
- **SDG 4 Education Insights Hub**: Web platform aligning with UN Sustainable Development Goal 4 (Quality Education) developed under the PSNM JobXperience™ program.
- **Landslide & Flash-Flood Early Warning System**: Multi-sensor terrain and weather risk assessment system for hilly regions.
- **Resource Allocation & CPU Usage Analysis**: Workload pattern modeling using the Bitbrain dataset.

### 2. Verified Certifications Gallery (37 Authenticated Certificates)
- **NPTEL (6 Certifications)**: Distributed Systems, Introduction to Internet of Things (Elite + Silver - 85%), Understanding Incubation and Entrepreneurship (Elite + Gold - 91%), Effective Writing, German - I, and Roadmap for Patent Creation.
- **NASSCOM FutureSkills Prime (9 Certifications)**: Deep Learning / NLP / AI Gold Badge, Gen AI 101 Gold Badge, Prompt Engineering & ChatGPT Assessment, Exploratory Data Analysis Assessment, AWS Cloud Practitioner Essentials, and 4 SSC Accredited Course Completion certificates.
- **Internships (8 Completed Credentials)**: AI-ML Virtual Internship (Google for Developers & EduSkills, Grade O), Big Data Fundamentals (EduSkills, Grade O), Java Full Stack Developer (EduSkills, Grade O), Python Fullstack Developer (EduSkills, Grade A), PSNM Verified Experience Credential (SDG 4 Project Partner), VaultofCodes Python Programming Internship, and domain competency credentials.
- **Technical Certifications (6 Certifications)**: AWS Cloud Practitioner Essentials (Amazon Web Services), UiPath Automation Developer Associate Diploma, Board Infinity Data Science, Simplilearn Python, Simplilearn Web Development, and MITS Full Stack Workshop.
- **Events & Extracurricular (8 Certifications)**: Google Student Ambassador Top Prompt Creator Award, AURA 2K26 Technical Quiz, AURA 2K26 Code Crafting Competition, Protothon AI Innovation Sprint, ASHV-2K25 Robotics Workshop, MITS Drama Presentation, MITS Prompt Engineering Workshop, and ISTE 3-Year Professional Membership.

### 3. Internship Experience & Letters of Engagement (6 Documents)
Dedicated subsection highlighting official letters of engagement and virtual internship selection records (EduSkills / AICTE / Google for Developers, PSNM Innovations, VaultofCodes) with sensitive personal identifiers redacted for privacy.

### 4. Interactive Features
- **Live Search**: Instant keyword filtering across titles, skills, descriptions, and tags.
- **Category Filter Pills**: One-click switching between All, NPTEL, NASSCOM, Internships, Technical, and Events.
- **Multi-parameter Dropdown Filters**: Filter by Issuing Organization and Completion Year (2026, 2025, 2024).
- **Embedded PDF Viewer Modal**: Clean, distraction-free modal supporting full multi-page PDF reading, scrolling, zoom in/out/reset, new-tab opening, and instant direct downloads.

---

## 📁 Project Structure

```text
MY PORTFOLIO/
├── index.html                 # Main responsive portfolio web application
├── certificates.js            # Client-side certificates dataset & metadata
├── certificates.json          # Structured JSON catalog of all credentials
├── README.md                  # Project documentation
├── certificates/              # Original certificate PDFs organized by category
│   ├── nptel/                 # 6 NPTEL certificates (IIT Madras, Kharagpur, Roorkee)
│   ├── nasscom/
│   │   ├── free/              # 4 NASSCOM SSC course completion certificates
│   │   └── paid/              # 5 NASSCOM FutureSkills Prime Gold Badge certifications
│   ├── internships/           # 8 Completed virtual internship certificates & credentials
│   ├── technical/             # 6 Technical & workshop certificates (AWS, UiPath, etc.)
│   ├── events/                # 8 Technical symposia, Google honors, & event certificates
│   └── offer_letters/         # 6 Internship offer and engagement letters
├── public/certificates/       # Mirror public asset directory for bundler compatibility
└── src/
    └── data/
        └── certificates.ts    # Strongly-typed TypeScript interfaces and dataset
```

---

## 🚀 How to Run & Preview Locally

1. Double-click `index.html` to open it directly in any modern browser (Chrome, Edge, Firefox, Safari).
2. Alternatively, run a lightweight static web server:
   ```bash
   # Using Python
   python -m http.server 8000
   # or using Node.js npx serve
   npx serve .
   ```
3. Open `http://localhost:8000` in your web browser.

---

## 🌐 Deploying to GitHub Pages

1. Initialize or push to your GitHub repository (e.g. `24691A3163.github.io`):
   ```bash
   git init
   git add index.html certificates.js certificates.json README.md certificates/ public/ src/
   git commit -m "Add verified certifications gallery, internship experience, and AI/DL projects"
   git branch -M main
   git remote add origin https://github.com/24691A3163/24691A3163.github.io.git
   git push -u origin main
   ```
2. Open your repository on GitHub and navigate to **Settings → Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. GitHub Pages will build and deploy your site automatically at `https://24691A3163.github.io`.
