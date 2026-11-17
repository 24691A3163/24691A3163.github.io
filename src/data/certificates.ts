// Avula Divya Tej Reddy - Verified Certificates Metadata
export interface Certificate {
  id: string;
  title: string;
  category: 'NPTEL' | 'NASSCOM' | 'Internships' | 'Technical' | 'Events' | 'Offer Letters';
  issuer: string;
  year: string;
  duration?: string;
  score?: string;
  badge?: string;
  role?: string;
  status?: string;
  source_subpath: string;
  target_subpath: string;
  pdfPath: string;
  description: string;
  skills: string[];
  isOfferLetter: boolean;
}

export const certificatesData: Certificate[] = [
  {
    "id": "nptel-dist-sys",
    "title": "Distributed Systems",
    "category": "NPTEL",
    "issuer": "NPTEL (IIT Madras) · MoE",
    "year": "2026",
    "duration": "Jul - Sep 2026 (8 Weeks)",
    "score": "69% (Elite)",
    "badge": "Elite",
    "source_subpath": "NPTEL CERTIFICATES/DISTRIBUTED SYSTEM NPTEL CERTIFICATE.pdf",
    "target_subpath": "nptel/DISTRIBUTED SYSTEM NPTEL CERTIFICATE.pdf",
    "description": "Comprehensive course covering distributed systems architectures, synchronization, consensus, fault tolerance, and consistency models.",
    "skills": [
      "Distributed Systems",
      "Consensus Algorithms",
      "Fault Tolerance",
      "Cloud Computing"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nptel/DISTRIBUTED SYSTEM NPTEL CERTIFICATE.pdf"
  },
  {
    "id": "nptel-effective-writing",
    "title": "Effective Writing",
    "category": "NPTEL",
    "issuer": "NPTEL (IIT Roorkee) · MoE",
    "year": "2025",
    "duration": "Jan - Mar 2025 (8 Weeks)",
    "score": "76% (Elite)",
    "badge": "Elite",
    "source_subpath": "NPTEL CERTIFICATES/Effective Writing.pdf",
    "target_subpath": "nptel/Effective Writing.pdf",
    "description": "Professional written communication, structuring technical documentation, clarity, and academic writing standards.",
    "skills": [
      "Technical Writing",
      "Professional Communication",
      "Documentation"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nptel/Effective Writing.pdf"
  },
  {
    "id": "nptel-german-1",
    "title": "German - I",
    "category": "NPTEL",
    "issuer": "NPTEL (IIT Madras) · MoE",
    "year": "2025",
    "duration": "Jul - Oct 2025 (12 Weeks)",
    "score": "58% (Elite)",
    "badge": "Elite",
    "source_subpath": "NPTEL CERTIFICATES/GERMAN.pdf",
    "target_subpath": "nptel/GERMAN.pdf",
    "description": "Introductory German language proficiency, grammar foundations, vocabulary, and cross-cultural communication.",
    "skills": [
      "German Language",
      "Multilingual Communication",
      "Foreign Language"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nptel/GERMAN.pdf"
  },
  {
    "id": "nptel-iot",
    "title": "Introduction to Internet of Things",
    "category": "NPTEL",
    "issuer": "NPTEL (IIT Kharagpur) · MoE",
    "year": "2026",
    "duration": "Jul - Oct 2026 (12 Weeks)",
    "score": "85% (Elite + Silver)",
    "badge": "Elite + Silver",
    "source_subpath": "NPTEL CERTIFICATES/NPTEL IOT CERTIFICATE.pdf",
    "target_subpath": "nptel/NPTEL IOT CERTIFICATE.pdf",
    "description": "In-depth study of IoT architecture, sensor networks, communication protocols, cloud integration, and connected computing systems.",
    "skills": [
      "Internet of Things (IoT)",
      "Sensor Networks",
      "MQTT / HTTP",
      "Embedded Systems"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nptel/NPTEL IOT CERTIFICATE.pdf"
  },
  {
    "id": "nptel-rpc",
    "title": "Roadmap for Patent Creation (RPC)",
    "category": "NPTEL",
    "issuer": "NPTEL (IIT Kharagpur) · MoE",
    "year": "2026",
    "duration": "Jan - Mar 2026 (8 Weeks)",
    "score": "67% (Elite)",
    "badge": "Elite",
    "source_subpath": "NPTEL CERTIFICATES/RPC.pdf",
    "target_subpath": "nptel/RPC.pdf",
    "description": "Intellectual property rights (IPR), patent searching, patent drafting, filing strategies, and innovation commercialization.",
    "skills": [
      "Intellectual Property",
      "Patent Drafting",
      "Innovation Strategy",
      "IP Law"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nptel/RPC.pdf"
  },
  {
    "id": "nptel-uie",
    "title": "Understanding Incubation and Entrepreneurship (UIE)",
    "category": "NPTEL",
    "issuer": "NPTEL (IIT Kharagpur) · MoE",
    "year": "2026",
    "duration": "Jan - Apr 2026 (12 Weeks)",
    "score": "91% (Elite + Gold Top Performer)",
    "badge": "Elite + Gold",
    "source_subpath": "NPTEL CERTIFICATES/UIE.pdf",
    "target_subpath": "nptel/UIE.pdf",
    "description": "Startup incubation lifecycle, venture creation, business models, funding ecosystems, and entrepreneurial leadership with 91% score.",
    "skills": [
      "Entrepreneurship",
      "Business Modeling",
      "Incubation",
      "Venture Strategy"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nptel/UIE.pdf"
  },
  {
    "id": "nasscom-dl-nlp-gold",
    "title": "Deep Learning, NLP & AI — Gold Badge",
    "category": "NASSCOM",
    "issuer": "NASSCOM FutureSkills Prime · IT-ITeS SSC",
    "year": "2026",
    "duration": "Issued Nov 2026",
    "score": "Gold Category (Assessment Cleared)",
    "badge": "Gold Badge",
    "source_subpath": "NASSCOM CERTIFICATES/PAID COURSES/CERTIFICATION IN DL-NLP-AI GOLD BADGE NASSCOM.pdf",
    "target_subpath": "nasscom/paid/CERTIFICATION IN DL-NLP-AI GOLD BADGE NASSCOM.pdf",
    "description": "Government and industry-approved certification assessment covering neural networks, deep learning architectures, and Natural Language Processing.",
    "skills": [
      "Deep Learning",
      "NLP",
      "Neural Networks",
      "Artificial Intelligence"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nasscom/paid/CERTIFICATION IN DL-NLP-AI GOLD BADGE NASSCOM.pdf"
  },
  {
    "id": "nasscom-prompt-eng-assessment",
    "title": "Prompt Engineering & ChatGPT — Assessment Certification",
    "category": "NASSCOM",
    "issuer": "NASSCOM FutureSkills Prime · IT-ITeS SSC",
    "year": "2026",
    "duration": "Issued Nov 2026",
    "score": "Gold Category",
    "badge": "Gold Badge",
    "source_subpath": "NASSCOM CERTIFICATES/PAID COURSES/CERTIFICATION IN PROMPT ENGINEERING AND CHATGPT.pdf",
    "target_subpath": "nasscom/paid/CERTIFICATION IN PROMPT ENGINEERING AND CHATGPT.pdf",
    "description": "Industry certification verifying expertise in prompt design, LLM workflows, conversational AI optimization, and generative AI practices.",
    "skills": [
      "Prompt Engineering",
      "ChatGPT",
      "LLMs",
      "Generative AI"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nasscom/paid/CERTIFICATION IN PROMPT ENGINEERING AND CHATGPT.pdf"
  },
  {
    "id": "nasscom-eda-assessment",
    "title": "Exploratory Data Analysis — Assessment Certification",
    "category": "NASSCOM",
    "issuer": "NASSCOM FutureSkills Prime · IT-ITeS SSC",
    "year": "2026",
    "duration": "Issued Nov 2026",
    "score": "Gold Category (100% on Key Modules)",
    "badge": "Gold Badge",
    "source_subpath": "NASSCOM CERTIFICATES/PAID COURSES/EXPLORATORY DATA ANALYSIS NASSCOM.pdf",
    "target_subpath": "nasscom/paid/EXPLORATORY DATA ANALYSIS NASSCOM.pdf",
    "description": "Validated expertise in statistical data analysis, hypothesis testing, data visualization, and preprocessing for machine learning models.",
    "skills": [
      "Exploratory Data Analysis",
      "Data Cleaning",
      "Statistical Modeling",
      "Pandas"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nasscom/paid/EXPLORATORY DATA ANALYSIS NASSCOM.pdf"
  },
  {
    "id": "nasscom-gen-ai-gold",
    "title": "Gen AI 101 — Gold Badge",
    "category": "NASSCOM",
    "issuer": "NASSCOM FutureSkills Prime · IT-ITeS SSC",
    "year": "2026",
    "duration": "Issued Nov 2026",
    "score": "88% (Gold Category)",
    "badge": "Gold Badge",
    "source_subpath": "NASSCOM CERTIFICATES/PAID COURSES/GEN AI GOLD BADGE NASSCOM.pdf",
    "target_subpath": "nasscom/paid/GEN AI GOLD BADGE NASSCOM.pdf",
    "description": "Government-approved gold credential assessing foundational and applied principles of Generative AI, transformer models, and application pipelines.",
    "skills": [
      "Generative AI",
      "Transformers",
      "Foundation Models",
      "AI Applications"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nasscom/paid/GEN AI GOLD BADGE NASSCOM.pdf"
  },
  {
    "id": "nasscom-aws-cloud",
    "title": "AWS Cloud Practitioner Essentials",
    "category": "NASSCOM",
    "issuer": "NASSCOM FutureSkills Prime · AWS",
    "year": "2026",
    "duration": "Issued Mar 2026",
    "score": "Gold Category",
    "badge": "Gold Badge",
    "source_subpath": "NASSCOM CERTIFICATES/PAID COURSES/NASSCOM AWS CLOUD.pdf",
    "target_subpath": "nasscom/paid/NASSCOM AWS CLOUD.pdf",
    "description": "Validated certification in Amazon Web Services cloud infrastructure, compute, security, storage, architecture principles, and billing models.",
    "skills": [
      "AWS Cloud",
      "Cloud Architecture",
      "EC2 / S3",
      "Cloud Security"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nasscom/paid/NASSCOM AWS CLOUD.pdf"
  },
  {
    "id": "nasscom-eda-free",
    "title": "Exploratory Data Analysis — Course Completion",
    "category": "NASSCOM",
    "issuer": "IT-ITeS SSC NASSCOM",
    "year": "2026",
    "duration": "Completed 2026",
    "score": "Completed",
    "badge": "SSC Certified",
    "source_subpath": "NASSCOM CERTIFICATES/NORAM FREE COURSES/EXPLORATORY DATA ANALYSIS NASSCOM.pdf",
    "target_subpath": "nasscom/free/EXPLORATORY DATA ANALYSIS NASSCOM.pdf",
    "description": "Certificate of completion aligned to competency standards developed by IT-ITeS Sector Skills Council NASSCOM in exploratory data analysis.",
    "skills": [
      "Data Science",
      "EDA",
      "Data Visualization",
      "Python"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nasscom/free/EXPLORATORY DATA ANALYSIS NASSCOM.pdf"
  },
  {
    "id": "nasscom-prompt-free",
    "title": "Prompt Engineering and ChatGPT — Course Completion",
    "category": "NASSCOM",
    "issuer": "IT-ITeS SSC NASSCOM",
    "year": "2026",
    "duration": "Completed 2026",
    "score": "Completed",
    "badge": "SSC Certified",
    "source_subpath": "NASSCOM CERTIFICATES/NORAM FREE COURSES/NASSCOM CHATGPT AND PROMPT ENGINEERING.pdf",
    "target_subpath": "nasscom/free/NASSCOM CHATGPT AND PROMPT ENGINEERING.pdf",
    "description": "Certified completion of comprehensive curriculum on effective prompt engineering, zero-shot/few-shot prompting, and ChatGPT tooling.",
    "skills": [
      "Prompt Design",
      "ChatGPT",
      "Contextual Prompting",
      "LLM APIs"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nasscom/free/NASSCOM CHATGPT AND PROMPT ENGINEERING.pdf"
  },
  {
    "id": "nasscom-dl-nlp-free",
    "title": "Deep Learning, NLP and AI — Course Completion",
    "category": "NASSCOM",
    "issuer": "IT-ITeS SSC NASSCOM",
    "year": "2026",
    "duration": "Completed 2026",
    "score": "Completed",
    "badge": "SSC Certified",
    "source_subpath": "NASSCOM CERTIFICATES/NORAM FREE COURSES/NASSCOM DL,NLP CERTIFICATE.pdf",
    "target_subpath": "nasscom/free/NASSCOM DL,NLP CERTIFICATE.pdf",
    "description": "Sector skills council accredited course covering core architectures of deep neural networks, sequence modeling, and language processing.",
    "skills": [
      "Deep Learning",
      "NLP",
      "Neural Networks",
      "AI Standards"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nasscom/free/NASSCOM DL,NLP CERTIFICATE.pdf"
  },
  {
    "id": "nasscom-genai-free",
    "title": "Generative AI 101 — Course Completion",
    "category": "NASSCOM",
    "issuer": "IT-ITeS SSC NASSCOM",
    "year": "2026",
    "duration": "Completed 2026",
    "score": "Completed",
    "badge": "SSC Certified",
    "source_subpath": "NASSCOM CERTIFICATES/NORAM FREE COURSES/NASSCOM GEN AI 101.pdf",
    "target_subpath": "nasscom/free/NASSCOM GEN AI 101.pdf",
    "description": "Foundational curriculum completion covering diffusion models, generative adversarial networks, large language models, and ethical AI.",
    "skills": [
      "Generative AI",
      "LLMs",
      "Diffusion Models",
      "AI Ethics"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/nasscom/free/NASSCOM GEN AI 101.pdf"
  },
  {
    "id": "intern-aiml-eduskills",
    "title": "AI-ML Virtual Internship (10 Weeks)",
    "category": "Internships",
    "issuer": "EduSkills · AICTE · Google for Developers",
    "year": "2026",
    "duration": "Jan - Mar 2026 (10 Weeks)",
    "score": "Grade O (Outstanding)",
    "badge": "Grade O",
    "source_subpath": "INTERNSHIPS CERTIFICATES/AI-ML Virtual Internship.pdf",
    "target_subpath": "internships/AI-ML Virtual Internship.pdf",
    "description": "National Internship Portal recognized virtual internship supported by Google for Developers India Edu Program, achieving Grade O (Outstanding).",
    "skills": [
      "Machine Learning",
      "Deep Learning",
      "TensorFlow",
      "Google Developer Tools"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/internships/AI-ML Virtual Internship.pdf"
  },
  {
    "id": "intern-bigdata-eduskills",
    "title": "Big Data Fundamentals Virtual Internship (8 Weeks)",
    "category": "Internships",
    "issuer": "EduSkills · AICTE Ministry of Education",
    "year": "2026",
    "duration": "Aug - Oct 2026 (8 Weeks)",
    "score": "Grade O (Outstanding)",
    "badge": "Grade O",
    "source_subpath": "INTERNSHIPS CERTIFICATES/BIG DATA FUNDAMENTALS EDUSKILLS.pdf",
    "target_subpath": "internships/BIG DATA FUNDAMENTALS EDUSKILLS.pdf",
    "description": "Rigorous 8-week virtual internship in big data architectures, distributed data processing, and analytics pipelines, graded Outstanding.",
    "skills": [
      "Big Data",
      "Distributed Computing",
      "Hadoop / Spark",
      "Data Analytics"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/internships/BIG DATA FUNDAMENTALS EDUSKILLS.pdf"
  },
  {
    "id": "intern-java-fsd-eduskills",
    "title": "Java Full Stack Developer Virtual Internship (8 Weeks)",
    "category": "Internships",
    "issuer": "EduSkills · AICTE Ministry of Education",
    "year": "2026",
    "duration": "Jun - Aug 2026 (8 Weeks)",
    "score": "Grade O (Outstanding)",
    "badge": "Grade O",
    "source_subpath": "INTERNSHIPS CERTIFICATES/Java Full Stack Developer Virtual Internship.pdf",
    "target_subpath": "internships/Java Full Stack Developer Virtual Internship.pdf",
    "description": "8-week enterprise full stack program under AICTE National Internship Portal covering end-to-end web engineering, graded Outstanding.",
    "skills": [
      "Java",
      "Full Stack Development",
      "Spring Boot",
      "REST APIs"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/internships/Java Full Stack Developer Virtual Internship.pdf"
  },
  {
    "id": "intern-java-fsd-credential",
    "title": "Java Full Stack Internship Competency Credential",
    "category": "Internships",
    "issuer": "SmartInternz / EduSkills Partner Internship Program",
    "year": "2026",
    "duration": "Issued Aug 04, 2026",
    "score": "Verified Competency",
    "badge": "Verified",
    "source_subpath": "INTERNSHIPS CERTIFICATES/java fsd.pdf",
    "target_subpath": "internships/java fsd.pdf",
    "description": "Comprehensive competency certification validating hands-on proficiency in Core Java, Advanced Java, Spring Boot, Hibernate, MySQL, HTML/CSS, and Git.",
    "skills": [
      "Core Java",
      "Spring Boot",
      "Hibernate ORM",
      "MySQL",
      "Version Control"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/internships/java fsd.pdf"
  },
  {
    "id": "intern-python-fsd-eduskills",
    "title": "Python Fullstack Developer Virtual Internship (8 Weeks)",
    "category": "Internships",
    "issuer": "EduSkills · AICTE Ministry of Education",
    "year": "2026",
    "duration": "Apr - Jun 2026 (8 Weeks)",
    "score": "Grade A",
    "badge": "Grade A",
    "source_subpath": "INTERNSHIPS CERTIFICATES/Python Fullstack Developer Virtual Internship.pdf",
    "target_subpath": "internships/Python Fullstack Developer Virtual Internship.pdf",
    "description": "Virtual internship under AICTE National Internship Portal mastering modern Python full stack architecture, API services, and front-end integration.",
    "skills": [
      "Python",
      "Full Stack Development",
      "Django",
      "Web Technologies"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/internships/Python Fullstack Developer Virtual Internship.pdf"
  },
  {
    "id": "intern-python-fsd-credential",
    "title": "Python Full Stack Internship Competency Credential",
    "category": "Internships",
    "issuer": "SmartInternz / EduSkills Partner Internship Program",
    "year": "2026",
    "duration": "Issued Jun 07, 2026",
    "score": "Verified Competency",
    "badge": "Verified",
    "source_subpath": "INTERNSHIPS CERTIFICATES/Python fsd certificate.pdf",
    "target_subpath": "internships/Python fsd certificate.pdf",
    "description": "Domain competency certification validating hands-on skills in Python programming, Django framework, DOM manipulation, SQL database querying, and Git.",
    "skills": [
      "Python",
      "Django Framework",
      "SQL Databases",
      "JavaScript / DOM",
      "Git"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/internships/Python fsd certificate.pdf"
  },
  {
    "id": "intern-psnm-credential",
    "title": "Verified Experience Credential — Project Partner",
    "category": "Internships",
    "issuer": "PSNM Innovations (OPC) Pvt. Ltd. · MITS",
    "year": "2026",
    "duration": "Mar - Jul 2026 (4 Months)",
    "score": "SparkX Verified Proof of Work",
    "badge": "Verified Experience",
    "source_subpath": "INTERNSHIPS CERTIFICATES/PSNM-Experience-Credential-PSNM_EL_2026_72E4EC.pdf",
    "target_subpath": "internships/PSNM-Experience-Credential-PSNM_EL_2026_72E4EC.pdf",
    "description": "Verified proof-of-work project experience leading features, EDA, responsive UI, and prototyping for the 'SDG 4 Education Insights Hub' production system.",
    "skills": [
      "Project Leadership",
      "Product Prototyping",
      "EDA",
      "Supabase",
      "React"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/internships/PSNM-Experience-Credential-PSNM_EL_2026_72E4EC.pdf"
  },
  {
    "id": "intern-vault-of-codes",
    "title": "Python Programming Internship (2 Months)",
    "category": "Internships",
    "issuer": "VaultofCodes.in",
    "year": "2025",
    "duration": "Nov 2025 - Jan 2026 (2 Months)",
    "score": "Successfully Completed",
    "badge": "Verified",
    "source_subpath": "INTERNSHIPS CERTIFICATES/VALUT OF CODES.pdf",
    "target_subpath": "internships/VALUT OF CODES.pdf",
    "description": "Hands-on 2-month internship executing core Python automation, script development, algorithmic problem solving, and data structures.",
    "skills": [
      "Python",
      "Scripting",
      "Problem Solving",
      "Software Engineering"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/internships/VALUT OF CODES.pdf"
  },
  {
    "id": "tech-aws-practitioner",
    "title": "AWS Cloud Practitioner Essentials",
    "category": "Technical",
    "issuer": "Amazon Web Services (AWS)",
    "year": "2025",
    "duration": "Completed Oct 30, 2025",
    "score": "Certified",
    "badge": "AWS Official",
    "source_subpath": "AWS CERTIFICATE.pdf",
    "target_subpath": "technical/AWS CERTIFICATE.pdf",
    "description": "Official AWS Training & Certification validating foundational knowledge of AWS cloud architecture, global infrastructure, security, and pricing.",
    "skills": [
      "AWS Cloud",
      "Cloud Architecture",
      "AWS Services",
      "Cloud Security"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/technical/AWS CERTIFICATE.pdf"
  },
  {
    "id": "tech-board-infinity-ds",
    "title": "Data Science for Beginners",
    "category": "Technical",
    "issuer": "Board Infinity",
    "year": "2025",
    "duration": "Issued Dec 23, 2025",
    "score": "Certified",
    "badge": "Verified",
    "source_subpath": "DATA SCIENCE CERTIFICATE.pdf",
    "target_subpath": "technical/DATA SCIENCE CERTIFICATE.pdf",
    "description": "Foundations of data science, predictive analytics workflow, data processing techniques, and machine learning principles.",
    "skills": [
      "Data Science",
      "Analytics",
      "Machine Learning Foundations",
      "Python"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/technical/DATA SCIENCE CERTIFICATE.pdf"
  },
  {
    "id": "tech-mits-fsd-workshop",
    "title": "Full Stack Application Development Workshop",
    "category": "Technical",
    "issuer": "MITS Dept. of CSE (AI) & ISTE",
    "year": "2026",
    "duration": "Mar 12 - 13, 2026 (Two-Day Hands-on)",
    "score": "Participation",
    "badge": "Workshop",
    "source_subpath": "FSD WORKSHOP.pdf",
    "target_subpath": "technical/FSD WORKSHOP.pdf",
    "description": "Intensive two-day hands-on workshop focused on end-to-end full stack application development, client-server integration, and API engineering.",
    "skills": [
      "Full Stack Development",
      "Web Architecture",
      "Frontend & Backend",
      "APIs"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/technical/FSD WORKSHOP.pdf"
  },
  {
    "id": "tech-simplilearn-python",
    "title": "Python for Beginners",
    "category": "Technical",
    "issuer": "Simplilearn SkillUp",
    "year": "2025",
    "duration": "Issued Oct 30, 2025",
    "score": "Certified",
    "badge": "Verified",
    "source_subpath": "SIMPLI LEARN PYTHON CERTIFICATE.pdf",
    "target_subpath": "technical/SIMPLI LEARN PYTHON CERTIFICATE.pdf",
    "description": "Comprehensive program in Python syntax, OOP, modules, exception handling, data structures, and file I/O operations.",
    "skills": [
      "Python",
      "Object-Oriented Programming",
      "Algorithms",
      "Data Structures"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/technical/SIMPLI LEARN PYTHON CERTIFICATE.pdf"
  },
  {
    "id": "tech-simplilearn-webdev",
    "title": "Web Development for Beginners",
    "category": "Technical",
    "issuer": "Simplilearn SkillUp",
    "year": "2025",
    "duration": "Issued Nov 06, 2025",
    "score": "Certified",
    "badge": "Verified",
    "source_subpath": "SIMPLILEARN WEBDEVELOPMENT CERTIFICATE.pdf",
    "target_subpath": "technical/SIMPLILEARN WEBDEVELOPMENT CERTIFICATE.pdf",
    "description": "Foundational web development curriculum covering semantic HTML5, modern CSS3 styling, responsive layouts, and introductory client interactivity.",
    "skills": [
      "HTML5",
      "CSS3",
      "Responsive Design",
      "Web Development"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/technical/SIMPLILEARN WEBDEVELOPMENT CERTIFICATE.pdf"
  },
  {
    "id": "tech-uipath-associate",
    "title": "UiPath Automation Developer Associate Training",
    "category": "Technical",
    "issuer": "UiPath Academy",
    "year": "2026",
    "duration": "Issued Feb 26, 2026",
    "score": "Diploma of Completion",
    "badge": "UiPath Official",
    "source_subpath": "UI PATH CERTIFICATE.pdf",
    "target_subpath": "technical/UI PATH CERTIFICATE.pdf",
    "description": "Official UiPath diploma certifying mastery of Robotic Process Automation (RPA), workflow orchestrations, bot automation, and selectors.",
    "skills": [
      "RPA (Robotic Process Automation)",
      "UiPath Studio",
      "Process Automation",
      "Workflow Design"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/technical/UI PATH CERTIFICATE.pdf"
  },
  {
    "id": "event-ashv-2k25",
    "title": "Robotics & Modern Automation Workshop — ASHV-2K25",
    "category": "Events",
    "issuer": "MITS · IEEE SPAX · The Times of India",
    "year": "2025",
    "duration": "Feb 21 - 22, 2025",
    "score": "Certificate of Appreciation",
    "badge": "Appreciation",
    "source_subpath": "ASHV 2K25 CERTIFICATE.pdf",
    "target_subpath": "events/ASHV 2K25 CERTIFICATE.pdf",
    "description": "Certificate of appreciation for active participation in the Robotics and Modern Automation workshop during the National Level Techno-Cultural-Sports Fest.",
    "skills": [
      "Robotics",
      "Modern Automation",
      "Sensors & Actuators",
      "Technical Fest"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/events/ASHV 2K25 CERTIFICATE.pdf"
  },
  {
    "id": "event-aura-tech-quiz",
    "title": "Technical Quiz — AURA 2K26 2.0",
    "category": "Events",
    "issuer": "MITS Dept. of CSE (AI) · IEEE Student Branch",
    "year": "2026",
    "duration": "Oct 14, 2026",
    "score": "Certificate of Participation",
    "badge": "National Symposium",
    "source_subpath": "AURA 2K26 TECH QUIZ.pdf",
    "target_subpath": "events/AURA 2K26 TECH QUIZ.pdf",
    "description": "Active participation in the Technical Quiz during AURA 2K26 2.0 National Level Technical Symposium organized by Dept. of CSE (AI).",
    "skills": [
      "Technical Problem Solving",
      "Computer Science Foundations",
      "Competitive Tech Quiz"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/events/AURA 2K26 TECH QUIZ.pdf"
  },
  {
    "id": "event-code-crafting",
    "title": "Code Crafting Competition — AURA 2K26",
    "category": "Events",
    "issuer": "MITS Dept. of CSE (AI)",
    "year": "2026",
    "duration": "AURA 2K26 Symposium",
    "score": "Certificate of Participation",
    "badge": "Coding Contest",
    "source_subpath": "CODE CRAFTING.pdf",
    "target_subpath": "events/CODE CRAFTING.pdf",
    "description": "Competitive coding and algorithm optimization event testing programming efficiency, code quality, and problem-solving speed under symposium rules.",
    "skills": [
      "Competitive Programming",
      "Algorithms",
      "Code Crafting",
      "Speed Coding"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/events/CODE CRAFTING.pdf"
  },
  {
    "id": "event-drama-presentation",
    "title": "Drama Presentation — 'The Shift from Ancient to Modern'",
    "category": "Events",
    "issuer": "MITS Dept. of English & Foreign Languages",
    "year": "2024",
    "duration": "Dec 07, 2024",
    "score": "Certificate of Appreciation",
    "badge": "Appreciation",
    "source_subpath": "DRAMA CERTIFICATE.pdf",
    "target_subpath": "events/DRAMA CERTIFICATE.pdf",
    "description": "Acknowledged for dedication, public speaking, dramatic expression, and creative performance in a departmental stage presentation.",
    "skills": [
      "Public Speaking",
      "Creative Expression",
      "Team Collaboration",
      "Communication"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/events/DRAMA CERTIFICATE.pdf"
  },
  {
    "id": "event-google-top-prompt",
    "title": "Top Prompt Creator — Pitch Night Edition",
    "category": "Events",
    "issuer": "Google · Google Student Ambassador Program",
    "year": "2026",
    "duration": "May 28, 2026",
    "score": "Top Prompt Creator Award",
    "badge": "Google Honor",
    "source_subpath": "GOOGLE.pdf",
    "target_subpath": "events/GOOGLE.pdf",
    "description": "Awarded for crafting a standout personal pitch transformed into an engaging product concept using Nano Banana; recognized for creativity and command over prompting.",
    "skills": [
      "Google Student Ambassador",
      "Prompt Design",
      "Pitch Presentation",
      "Creative AI"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/events/GOOGLE.pdf"
  },
  {
    "id": "event-prompt-eng-mits",
    "title": "Prompt Engineering & Modern AI Tools Workshop",
    "category": "Events",
    "issuer": "MITS Tech Club · Student Activity Center",
    "year": "2025",
    "duration": "Nov 05, 2025",
    "score": "Certificate of Participation",
    "badge": "Tech Club",
    "source_subpath": "PROMPT ENGINEERING.pdf",
    "target_subpath": "events/PROMPT ENGINEERING.pdf",
    "description": "Hands-on participation in interactive workshop exploring prompt engineering strategies, LLMs, and modern generative AI tools.",
    "skills": [
      "Prompt Engineering",
      "Modern AI Tools",
      "Productivity AI",
      "Generative AI"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/events/PROMPT ENGINEERING.pdf"
  },
  {
    "id": "event-protothon",
    "title": "Protothon — AI & Innovation Sprint for Rapid Prototyping",
    "category": "Events",
    "issuer": "MITS Dept. of CSE (AI)",
    "year": "2026",
    "duration": "Feb 18, 2026",
    "score": "Certificate of Participation",
    "badge": "Hackathon Sprint",
    "source_subpath": "PROTOTHON EVENT.pdf",
    "target_subpath": "events/PROTOTHON EVENT.pdf",
    "description": "Fast-paced hackathon and rapid prototyping sprint building AI-driven functional prototypes and innovative product solutions under strict time limits.",
    "skills": [
      "Rapid Prototyping",
      "Hackathon",
      "AI Product Innovation",
      "Teamwork"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/events/PROTOTHON EVENT.pdf"
  },
  {
    "id": "event-iste-membership",
    "title": "Indian Society for Technical Education (ISTE) Membership",
    "category": "Events",
    "issuer": "The Indian Society for Technical Education (ISTE)",
    "year": "2025",
    "duration": "2025 - 2028 (3-Year Membership)",
    "score": "Student Member (SM No. 3261)",
    "badge": "Professional Society",
    "source_subpath": "ISTE.pdf",
    "target_subpath": "events/ISTE.pdf",
    "description": "National professional membership with the Indian Society for Technical Education fostering continuous learning, technical research, and academic excellence.",
    "skills": [
      "Professional Networking",
      "Technical Education",
      "Research & Innovation"
    ],
    "isOfferLetter": false,
    "pdfPath": "certificates/events/ISTE.pdf"
  },
  {
    "id": "offer-psnm",
    "title": "PSNM Innovations — Project Partner Offer of Engagement",
    "category": "Offer Letters",
    "issuer": "PSNM Innovations (OPC) Pvt. Ltd.",
    "year": "2026",
    "duration": "March - May 2026 (Extended through July 2026)",
    "role": "Project Partner (JobXperience™)",
    "status": "Successfully Completed (Verified Experience Issued)",
    "source_subpath": "INTERNSHIPS CERTIFICATES/PSNM-Offer-Letter.pdf",
    "target_subpath": "offer_letters/PSNM-Offer-Letter.pdf",
    "description": "Official offer of engagement to contribute to structured enterprise environments under the SPARKX™ framework on the 'SDG 4 Education Insights Hub' project.",
    "skills": [
      "Project Partner",
      "Agile Sprints",
      "Product Roadmap",
      "Full Stack AI"
    ],
    "isOfferLetter": true,
    "pdfPath": "certificates/offer_letters/PSNM-Offer-Letter.pdf"
  },
  {
    "id": "offer-aiml-eduskills",
    "title": "AI-ML Virtual Internship Offer Letter",
    "category": "Offer Letters",
    "issuer": "EduSkills Academy · AICTE (Google for Developers)",
    "year": "2026",
    "duration": "10-Week Virtual Cohort",
    "role": "AI-ML Virtual Intern",
    "status": "Successfully Completed (Grade O Awarded)",
    "source_subpath": "INTERNSHIPS CERTIFICATES/AI-ML offer letter.pdf",
    "target_subpath": "offer_letters/AI-ML offer letter.pdf",
    "description": "Internship appointment letter for the Google for Developers supported AI-ML program covering deep learning, TensorFlow, and vision/NLP pipelines.",
    "skills": [
      "AI/ML",
      "TensorFlow",
      "Deep Learning",
      "Google for Developers"
    ],
    "isOfferLetter": true,
    "pdfPath": "certificates/offer_letters/AI-ML offer letter.pdf"
  },
  {
    "id": "offer-bda-eduskills",
    "title": "Big Data Analytics / Fundamentals Offer Letter",
    "category": "Offer Letters",
    "issuer": "EduSkills Academy · AICTE",
    "year": "2026",
    "duration": "8-Week Virtual Cohort",
    "role": "Big Data Virtual Intern",
    "status": "Successfully Completed (Grade O Awarded)",
    "source_subpath": "INTERNSHIPS CERTIFICATES/BDA offfer letter.pdf",
    "target_subpath": "offer_letters/BDA offfer letter.pdf",
    "description": "Formal selection letter for the Big Data Fundamentals internship covering data warehouses, distributed computing with Hadoop and Spark, and Python analysis.",
    "skills": [
      "Big Data Analytics",
      "Hadoop",
      "PySpark",
      "Data Pipelines"
    ],
    "isOfferLetter": true,
    "pdfPath": "certificates/offer_letters/BDA offfer letter.pdf"
  },
  {
    "id": "offer-python-fsd-eduskills",
    "title": "Python Full Stack Developer Virtual Internship Offer Letter",
    "category": "Offer Letters",
    "issuer": "EduSkills Academy · AICTE",
    "year": "2026",
    "duration": "8-Week Virtual Cohort",
    "role": "Python Full Stack Developer Intern",
    "status": "Successfully Completed (Grade A Awarded)",
    "source_subpath": "INTERNSHIPS CERTIFICATES/Python fsd offer letter.pdf",
    "target_subpath": "offer_letters/Python fsd offer letter.pdf",
    "description": "Offer letter covering frontend fundamentals, backend development using Django, database management, and cloud deployment practices.",
    "skills": [
      "Python",
      "Django",
      "Full Stack Development",
      "SQL"
    ],
    "isOfferLetter": true,
    "pdfPath": "certificates/offer_letters/Python fsd offer letter.pdf"
  },
  {
    "id": "offer-sql-dbms-eduskills",
    "title": "SQL and Relational DBMS Virtual Internship Offer Letter",
    "category": "Offer Letters",
    "issuer": "EduSkills Academy · AICTE",
    "year": "2026",
    "duration": "8-Week Virtual Cohort (Oct Cohort)",
    "role": "SQL and DBMS Virtual Intern",
    "status": "Virtual Internship Offer (Confirmed Cohort)",
    "source_subpath": "INTERNSHIPS CERTIFICATES/SQL AND DBMS OFFER LETTER.pdf",
    "target_subpath": "offer_letters/SQL AND DBMS OFFER LETTER.pdf",
    "description": "Official virtual internship appointment focusing on relational database architecture, ER modeling, SQL optimization, and enterprise data storage.",
    "skills": [
      "Relational Database Design",
      "SQL Query Optimization",
      "Normalization",
      "DBMS"
    ],
    "isOfferLetter": true,
    "pdfPath": "certificates/offer_letters/SQL AND DBMS OFFER LETTER.pdf"
  },
  {
    "id": "offer-vault-of-codes",
    "title": "VaultofCodes — Python Programming Internship Offer Letter",
    "category": "Offer Letters",
    "issuer": "VaultofCodes.in",
    "year": "2025",
    "duration": "2 Months",
    "role": "Python Programming Intern",
    "status": "Successfully Completed (Completion Certificate Issued)",
    "source_subpath": "INTERNSHIPS CERTIFICATES/VALUT OF CODES OL.pdf",
    "target_subpath": "offer_letters/VALUT OF CODES OL.pdf",
    "description": "Offer of internship as Python Programming Intern working on real-world scripts, algorithmic implementations, and backend modules.",
    "skills": [
      "Python Programming",
      "Algorithms",
      "Backend Development"
    ],
    "isOfferLetter": true,
    "pdfPath": "certificates/offer_letters/VALUT OF CODES OL.pdf"
  }
];
