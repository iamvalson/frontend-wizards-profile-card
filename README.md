# 🧩 Stage 0 — Testable Profile Card

A responsive, testable profile card built with **HTML**, **CSS**, and **JavaScript**, following all required guidelines.

---

## 🚀 Features

- Displays accurate time in **milliseconds (`Date.now()`)**, updating every 100ms.
- Avatar supports **image URL** or **uploaded image**.
- Uses **semantic HTML** (`article`, `section`, `header`, `figure`, etc.).
- Social links open in new tabs with `target="_blank"` and `rel="noopener noreferrer"`.
- Fully **keyboard-accessible** with visible focus outlines.
- **Responsive layout** built with Flexbox.
- Modern UI with smooth hover effects and shadow transitions.

---

## 🧠 Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6)**

---

# 🎯 Stage 1 — Contact & About Pages

Stage 1 extends the Stage 0 project into a **multi-page application** with form validation and semantic structure.

---

## 📄 Pages to Implement

### 1️⃣ Contact Us Page

A form that includes:

**Fields** (all required, with `data-testid` attributes):
- Full name — `test-contact-name`
- Email — `test-contact-email`
- Subject — `test-contact-subject`
- Message — `test-contact-message`
- Submit button — `test-contact-submit`

**Validation Rules:**
- All fields must be filled.
- Email must be valid.
- Message must be at least 10 characters.
- Error messages tied to inputs via `aria-describedby`.
- Success message (`test-contact-success`) shown after valid submission.
- Fully accessible and keyboard navigable.

---

### 2️⃣ About Me Page

A reflective page sharing personal insights.

**Required sections** (each with `data-testid`):
- Bio — `test-about-bio`
- Goals in this program — `test-about-goals`
- Areas of low confidence — `test-about-confidence`
- Note to future self — `test-about-future-note`
- Extra thoughts — `test-about-extra`

**Uses semantic structure:**
```html
<main data-testid="test-about-page">
  <section> ... </section>
</main>
Headings (`<h2>`, `<h3>`) for clarity.

Fully responsive and accessible.

---

## 🧩 Accessibility & Semantics

Both stages follow accessibility standards:

- Proper use of `<label>` with `for` attributes.  
- Error messages connected with `aria-describedby`.  
- Logical heading structure and semantic tags.  
- Keyboard navigation with visible focus indicators.



---

## 🛠️ How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/iamvalson/frontend-wizards-profile-card.git
   ```

2. Navigate into the project folder:
    ```bash
   cd frontend-wizards-profile-card
   ```

3. Open the project
    - Simply open `index.html` in your browser, or
    - Use the **Live Server** extension in VS Code for a better experience.


## Notes

This project fully complies with the Frontend Wizards Stage 0 Test Requirements:

✅ All required `data-testid` attributes exist and are discoverable.  
✅ HTML uses semantic tags: `article`, `figure`, `header`, `section`, `ul`, and `h1–h2`.  
✅ The time in milliseconds accurately reflects `Date.now()` at render/update.  
✅ Avatar renders with an `alt` attribute and `data-testid="test-user-avatar"`.  
✅ Social links open in a new tab and are individually testable.  
✅ Hobbies and Dislikes are distinct lists with unique `data-testids`.  
✅ Keyboard navigation works; focus styles are visible.  
✅ Layout is responsive at typical breakpoints (mobile/tablet/desktop).

