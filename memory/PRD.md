# Product Requirements Document (PRD)
## MAA Digital Computer Education Website

---

## Original Problem Statement
Build a website for MAA DIGITAL COMPUTER EDUCATION focusing on:
- **Course Details**: Comprehensive information about various computer courses
- **Admission Process**: Clear step-by-step guide for enrollment

---

## User Personas
1. **Students/Job Seekers**: Looking to learn computer skills for career advancement
2. **Parents**: Seeking quality education for their children
3. **Working Professionals**: Want to upgrade skills with flexible batch timings
4. **Career Switchers**: Looking for placement assistance and practical training

---

## Core Requirements (Static)

### Frontend Pages
- Home Page (Hero, Features, Popular Courses, Testimonials, CTA)
- Courses Page (Detailed course information with accordion UI)
- Admission Process Page (5-step process, documents, batch timings)
- About Us Page (Story, Mission, Vision, Values, Facilities)
- Contact Page (Contact form, location map, contact details)

### Design Requirements
- Professional education-themed design
- Blue color scheme (avoiding prohibited gradients)
- Responsive across all devices
- Smooth animations and hover effects
- Shadcn UI components for consistency

### Technical Stack
- Frontend: React.js with React Router
- UI Components: Shadcn UI
- Styling: Tailwind CSS
- Mock Data: Stored in /app/frontend/src/data/mock.js

---

## What's Been Implemented (December 17, 2025)

### ✅ Phase 1: Frontend with Mock Data (COMPLETED)

**Pages Created:**
1. **Home Page** (`/`)
   - Hero section with CTA buttons
   - Statistics display (10+ years, 5000+ students, etc.)
   - 6 feature cards (Expert Faculty, Hands-on Training, Job Assistance, etc.)
   - Popular courses showcase (6 courses)
   - Testimonials section (3 testimonials)
   - CTA section

2. **Courses Page** (`/courses`)
   - 6 detailed course cards with accordion UI
   - Course details include: topics, duration, fees, eligibility
   - "Enroll in This Course" CTA buttons
   - Expandable course information

3. **Admission Page** (`/admission`)
   - 5-step admission process with visual timeline
   - Required documents section
   - Batch timings cards (4 batches)
   - CTA section

4. **About Page** (`/about`)
   - Institute story with image
   - Mission & Vision cards
   - Core values (3 cards)
   - Facilities showcase

5. **Contact Page** (`/contact`)
   - Working contact form (stores in browser localStorage)
   - Contact information cards
   - Google Maps integration
   - Toast notifications on form submission

**Components Created:**
- Header (sticky navigation with mobile menu)
- Footer (comprehensive with links and contact info)
- Toast notifications (using Sonner)

**Mock Data Structure:**
- 6 courses with full details
- 5 admission steps
- 6 features
- 3 testimonials
- Statistics, documents, batch timings
- All stored in `/app/frontend/src/data/mock.js`

**Current Status:**
- ✅ All pages functional
- ✅ Navigation working perfectly
- ✅ Responsive design implemented
- ✅ Accordion interactions working
- ✅ Contact form functional (frontend only)
- ✅ Professional design with proper spacing and colors

---

## Prioritized Backlog

### P0 Features (Next Phase - Backend Development)
1. **Backend API Development**
   - Course management endpoints (CRUD)
   - Enquiry submission API
   - Contact form data storage in MongoDB
   
2. **Database Schema**
   - Courses collection
   - Enquiries collection
   - Student applications collection

3. **Frontend-Backend Integration**
   - Replace mock.js with real API calls
   - Dynamic course loading
   - Real-time enquiry submission
   - Admin notification system

### P1 Features (Future Enhancements)
1. **Admin Panel**
   - Course management dashboard
   - View and manage enquiries
   - Student application tracking
   
2. **Course Enrollment System**
   - Online application form
   - Document upload functionality
   - Payment gateway integration

3. **Student Portal**
   - Login/Registration
   - Course progress tracking
   - Certificate download

### P2 Features (Nice to Have)
1. **Blog Section** for education tips and industry news
2. **Live Chat Support** for instant queries
3. **Email Notifications** for enquiries and confirmations
4. **Gallery Section** with photos of facilities and events
5. **Batch Schedule Calendar** with available seats
6. **Online Learning Portal** with video lectures

---

## Next Action Items

### Immediate Next Steps:
1. **Get user confirmation** to proceed with backend development
2. **Create API contracts** for courses and enquiry endpoints
3. **Set up MongoDB models** for data persistence
4. **Build REST APIs** for:
   - GET /api/courses - Fetch all courses
   - GET /api/courses/:id - Fetch single course
   - POST /api/enquiries - Submit enquiry form
   - GET /api/enquiries - Fetch all enquiries (admin)

5. **Integrate frontend with backend** - Remove mock.js and connect to real APIs

### Testing Required (After Backend):
- End-to-end testing with testing_agent_v3
- API endpoint validation
- Form submission flow
- Data persistence verification

---

## Technical Notes

### File Structure:
```
/app/frontend/src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ui/ (Shadcn components)
├── pages/
│   ├── Home.jsx
│   ├── Courses.jsx
│   ├── Admission.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── data/
│   └── mock.js (TO BE REPLACED with API calls)
└── App.js
```

### Environment Variables:
- `REACT_APP_BACKEND_URL`: https://maa-skill-learn.preview.emergentagent.com
- `MONGO_URL`: (configured in backend/.env)

---

## Success Metrics
- Professional, conversion-optimized design ✅
- All navigation working ✅
- Responsive across devices ✅
- Fast load times ✅
- Clear course information ✅
- Simple admission process ✅
- Working contact form ✅

---

*Document Version: 1.0*  
*Last Updated: December 17, 2025*  
*Status: Phase 1 Complete - Ready for Backend Development*
