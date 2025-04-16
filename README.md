
# 🔊 Echo Vision: Voice Navigation for Accessible Web

Echo Vision is a lightweight, browser-based voice navigation system designed to enhance web accessibility for visually impaired users. By using spoken commands such as “Navigate Web Page” or “submit form,” users can interact with websites hands-free.

Developed as a final-year B.Tech project at **Maulana Azad National Urdu University (MANUU), Hyderabad)** under the guidance of **Ms. Tunga Arundhathi (Assistant Professor, CS & IT)**.

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Folder Structure](#-folder-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Supported Voice Commands](#-supported-voice-commands)
- [Testing & Performance](#-testing--performance)
- [Screenshots](#-screenshots)
- [Future Scope](#-future-scope)
- [Team](#-team)
- [License](#-license)

---

## 📖 Overview

Many individuals with visual or motor disabilities face difficulties navigating modern websites. Echo Vision bridges this gap by integrating voice recognition for site-specific navigation using the **Web Speech API**, DOM manipulation, and audio feedback powered by **Python**. It enables hands-free control over web interfaces, making the internet more inclusive.

---

## ✨ Features

- 🎙️ **Voice-Controlled Navigation** – Issue commands like “scroll down,” “open feedback,” etc.
- ⚙️ **Speech-to-Action Mapping** – DOM interactions triggered through JavaScript
- 🔊 **Audio Feedback** – Verbal confirmations via MP3s (played using Python)
- ♿ **Accessibility-Oriented Design** – Aligned with WCAG 2.1 standards
- 🧩 **Modular Architecture** – Designed for integration with screen readers, AI, etc.
- 🌍 **Browser Compatibility** – Works with Chrome and Chromium-based browsers

---

## 🛠️ Tech Stack

| Layer       | Technology                        |
|------------|------------------------------------|
| Frontend   | HTML, CSS, JavaScript, EJS         |
| Backend    | Node.js + Express                  |
| Voice API  | Web Speech API                     |
| Audio      | Python + gTTS + pydub              |
| Rendering  | EJS Templating                     |
| Testing    | Mocha, Jasmine, Lighthouse         |

---

## 📁 Folder Structure

```
EchoVision/
├── public/
│   ├── css/               # Styles (index.css)
│   ├── js/                # JavaScript (speechToText.js, typed.js)
│   └── audio/             # MP3 feedback files
├── views/                 # EJS templates (home, about, how-to-use, feedback)
├── scripts/               # Python: visibility-project-python.py
├── app.js                 # Express server
├── package.json
└── README.md              # You're reading it 🙂
```

---

## 🧰 Installation

### Prerequisites

- Node.js v14 or later
- Python 3.x
- Browser: Chrome / Edge (Chromium-based)

### Clone the Repository

```bash
[git clone https://github.com/Sahil-Ali-01/Echo-Vision-Voice-Navigation-Accessible-Web.git
cd Echo-Vision-Voice-Navigation-Accessible-Web
```

### Install Node Dependencies

```bash
npm install
```

### Install Python Packages

```bash
pip install pydub gTTS beautifulsoup4
```

---

## ▶️ Usage

### Run the Project

```bash
node app.js
```

Then, open your browser and go to:

```
http://localhost:3000
```

- Double-click on the page to re-trigger the voice system.
- Speak predefined commands into your mic (e.g., “scroll down”).

---

## 🎙️ Supported Voice Commands

| Command              | Action                                 |
|----------------------|----------------------------------------|
| "scroll down"        | Scrolls the webpage down               |
| "scroll up"          | Scrolls the webpage up                 |
| "go to about"        | Navigates to About page                |
| "open feedback"      | Opens the Feedback page                |
| "submit form"        | Submits the active form                |
| "focus input"        | Focuses on the first input field       |
| "stop"               | Stops voice navigation temporarily     |

---

## ✅ Testing & Performance

### ✅ Unit Testing
- Tested voice command handlers using **Jasmine** and **Mocha**

### 🔍 Manual Testing
- Used in real-world scenarios with visually impaired test users

### 📊 Accessibility Audit
- Tools: **Google Lighthouse**, **WAVE**
- Score: Passed WCAG 2.1 AA tests

### ⚡ Performance Metrics

| Metric              | Result           |
|---------------------|------------------|
| Average Response    | 300–500 ms       |
| Accuracy (Quiet)    | 92%              |
| Accuracy (Noisy)    | 75%              |

---


## 🚀 Future Scope

- 🔗 Integration with JAWS, NVDA, and TalkBack screen readers
- 🧠 AI-based Natural Language Command Interpretation
- 🌍 Multilingual voice support
- 🎛️ Customizable command profiles per user
- 🔇 Noise-canceling microphone compatibility

---

## 👨‍💻 Team

| Name              | Role         |
|-------------------|--------------|
| Sahil Ali         | Developer    |
| Saba Kausher      | Developer    |
| Fariha            | Developer    |

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and adapt.

---

> 💡 “Making the web accessible is not just about compliance — it's about inclusion.”
