import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element, index) => {
      element.style.setProperty(
        "--reveal-delay",
        `${Math.min((index % 4) * 70, 210)}ms`
      );

      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="site">

      {/* ================= NAVBAR ================= */}

      <header className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        <div className="nav-inner">

          <a href="#home" className="logo">
            NAVEEN <span>V</span><b></b>
          </a>

          <nav className="desktop-nav">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#achievements">Achievements</a>
          </nav>

          <a href="#contact" className="nav-contact">
            Let's Talk <span>↗</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </div>

        {menuOpen && (
          <nav className="mobile-nav">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#achievements" onClick={closeMenu}>Achievements</a>
            <a href="#contact" onClick={closeMenu}>Let's Talk</a>
          </nav>
        )}

      </header>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <div className="hero-inner">

          <div className="hero-content">

            <div className="availability hero-reveal delay-1">
              <span></span>
              Available for opportunities
            </div>

            <p className="hero-label hero-reveal delay-2">
              AI / ML · FULL STACK · CREATIVE TECHNOLOGY
            </p>

            <h1 className="hero-reveal delay-3">
              I turn ideas into{" "}
              <em>intelligent</em> experiences.
            </h1>

            <p className="hero-description hero-reveal delay-4">
              I'm Naveen V, an AI/ML student and Full Stack Developer
              focused on building practical digital products that combine
              artificial intelligence, modern development and thoughtful
              user experience.
            </p>

            <div className="hero-actions hero-reveal delay-5">

              <a href="#work" className="primary-button">
                Explore My Work
                <span>↗</span>
              </a>

              <a href="#contact" className="secondary-button">
                Let's Connect
              </a>

            </div>

            <div className="hero-socials hero-reveal delay-6">

              <a
                href="https://github.com/Naveen-Venkatesan1"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-symbol social-github">
                  GH
                </span>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/naveen-v-a2183b391/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-symbol social-linkedin">
                  in
                </span>
                LinkedIn
              </a>

              <a
                href="https://leetcode.com/u/Finderror/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="social-symbol social-leetcode">
                  LC
                </span>
                LeetCode
              </a>

            </div>

          </div>


          {/* ================= HERO IMAGE ================= */}

          <div className="hero-visual hero-image-reveal">

            <div className="photo-frame">

              <div className="photo-top">
                <span>01 / 04</span>
                <span>CHENNAI · INDIA</span>
              </div>

              <div className="photo-container">
                <img
                  src="/images/naveen-profile.png"
                  alt="Naveen V"
                  className="profile-image"
                />
              </div>

              <div className="photo-bottom">

                <div>
                  <strong>NAVEEN V</strong>
                  <small>AI / ML · FULL STACK</small>
                </div>

                <span className="photo-arrow">
                  ↗
                </span>

              </div>

            </div>

            <div className="floating-note">
              <span>BUILDING</span>
              <strong>WHAT'S NEXT</strong>
            </div>

          </div>

        </div>

        <div className="scroll-indicator">
          <span>SCROLL TO EXPLORE</span>
          <div></div>
        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="about-section">

        <div className="section-label reveal">
          <span>02</span>
          <p>ABOUT ME</p>
        </div>

        <div className="about-content reveal">

          <div className="about-heading">

            <p className="about-small-title">
              WHO I AM
            </p>

            <h2>
              Building with
              <em> curiosity.</em>
            </h2>

          </div>

          <div className="about-text">

            <p className="about-intro">
              I’m Naveen V, an AI/ML student and Full Stack Developer who enjoys
              turning ideas into practical and meaningful digital experiences. My
              interests include Machine Learning, Generative AI, Agentic AI and LLM
              applications, with a focus on connecting intelligent technology with
              real-world solutions.
            </p>

            <p className="about-second">
              I learn by building. From AI-powered applications to full stack
              platforms, I enjoy exploring new technologies, improving my
              problem-solving skills and creating products that are simple, useful
              and easy to experience. I’m always looking for opportunities to learn,
              contribute and build something impactful with a strong team.
            </p>

            <div className="about-tags">
              <span>AI / ML</span>
              <span>GENERATIVE AI</span>
              <span>AGENTIC AI</span>
              <span>LLM APPLICATIONS</span>
              <span>FULL STACK</span>
              <span>UI / UX</span>
            </div>

          </div>

        </div>

        <div className="about-bottom reveal">

          <div>
            <strong>01</strong>
            <span>AI & Intelligent Systems</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Web & App Development</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Creative Digital Experiences</span>
          </div>

        </div>

      </section>


      {/* ================= SELECTED WORK ================= */}

      <section id="work" className="work-section">

        <div className="section-label reveal">
          <span>03</span>
          <p>SELECTED WORK</p>
        </div>

        <div className="work-header reveal">

          <h2>
            Ideas into
            <em> products.</em>
          </h2>

          <p>
            Projects where artificial intelligence, development,
            design and problem-solving come together to create
            practical digital experiences.
          </p>

        </div>


        {/* ================= PROJECT 01 ================= */}

        <article className="project-card project-featured reveal">

          <div className="project-number">
            01
          </div>

          <div className="project-info">

            <p className="project-category">
              AI · AGRICULTURE · FULL STACK
            </p>

            <h3>Agrimitra-AI</h3>

            <p>
              An AI-powered agriculture platform designed to support
              farmers with crop intelligence, plant disease analysis,
              treatment recommendations, market information and
              practical decision support.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>FastAPI</span>
              <span>React</span>
              <span>AI / ML</span>
              <span>Gemini Vision</span>
            </div>

            <a
              href="https://agrimitra-ai-green.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project
              <span>↗</span>
            </a>

          </div>


          {/* ================= AGRIMITRA IMAGE ================= */}

          <div className="project-visual agriculture-visual">

            <img
              src="/images/agrimitra.png"
              alt="Agrimitra AI project preview"
            />

          </div>

        </article>


        {/* ================= PROJECT 02 ================= */}

        <article className="project-card reveal">

          <div className="project-number">
            02
          </div>

          <div className="project-info">

            <p className="project-category">
              TRAVEL · WEB APPLICATION
            </p>

            <h3>Yathrava</h3>

            <p>
              A modern travel-focused digital experience designed
              around discovering destinations, exploring places and
              making journey planning more visual, simple and engaging.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>Web Development</span>
              <span>UI / UX</span>
            </div>

            <a
              href="https://yathrava.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project
              <span>↗</span>
            </a>

          </div>


          {/* ================= YATHRAVA IMAGE ================= */}

          <div className="project-visual travel-visual">

            <img
              src="/images/yathrava.png"
              alt="Yathrava project preview"
            />

          </div>

        </article>


        <div className="work-footer reveal">

          <span>MORE PROJECTS</span>

          <p>
            Exploring AI, software development and new ways to
            transform real-world ideas into useful digital products.
          </p>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="skills-section">

        <div className="section-label reveal">
          <span>04</span>
          <p>SKILLS & TOOLKIT</p>
        </div>

        <div className="skills-header reveal">

          <h2>
            Tools I use to
            <em> build.</em>
          </h2>

          <p>
            A growing technical toolkit covering artificial
            intelligence, full-stack development, product design
            and modern development workflows.
          </p>

        </div>

        <div className="skills-grid">

          <div className="skill-group reveal">
            <span className="skill-index">01</span>

            <h3>Artificial Intelligence</h3>

            <div className="skill-list">
              <span>Machine Learning</span>
              <span>Generative AI</span>
              <span>Agentic AI</span>
              <span>LLM Applications</span>
              <span>Prompt Engineering</span>
              <span>AI Integration</span>
            </div>
          </div>


          <div className="skill-group reveal">
            <span className="skill-index">02</span>

            <h3>Development</h3>

            <div className="skill-list">
              <span>Python</span>
              <span>React</span>
              <span>Node.js</span>
              <span>FastAPI</span>
              <span>MongoDB</span>
              <span>MySQL</span>
              <span>Flutter</span>
            </div>
          </div>


          <div className="skill-group reveal">
            <span className="skill-index">03</span>

            <h3>Design & Product</h3>

            <div className="skill-list">
              <span>UI / UX</span>
              <span>Figma</span>
              <span>Creative Web Design</span>
              <span>Responsive Design</span>
              <span>App Development</span>
              <span>Product Thinking</span>
            </div>
          </div>


          <div className="skill-group reveal">
            <span className="skill-index">04</span>

            <h3>Workflow</h3>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>API Integration</span>
              <span>Problem Solving</span>
              <span>Rapid Prototyping</span>
            </div>
          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="experience-section">

        <div className="section-label reveal">
          <span>05</span>
          <p>EXPERIENCE & PARTICIPATION</p>
        </div>

        <div className="experience-header reveal">

          <h2>
            Learning by
            <em> building.</em>
          </h2>

          <p>
            Technical experiences that continue to shape my
            problem-solving approach, teamwork and ability to work
            on challenging ideas.
          </p>

        </div>


        <div className="timeline">

          <div className="timeline-item reveal">

            <div className="timeline-year">
              2025
            </div>

            <div className="timeline-line">
              <span></span>
            </div>

            <div className="timeline-content">

              <p>TECHNICAL PARTICIPATION</p>

              <h3>BAJA 2025</h3>

              <p>
                Participated in BAJA 2025 and gained exposure to
                technical collaboration, engineering challenges,
                teamwork, practical problem-solving and working
                towards a shared technical goal.
              </p>

            </div>

          </div>


          <div className="timeline-item reveal">

            <div className="timeline-year">
              2026
            </div>

            <div className="timeline-line">
              <span></span>
            </div>

            <div className="timeline-content">

              <p>ONGOING PARTICIPATION</p>

              <h3>NIDAAR</h3>

              <p>
                Currently participating in NIDAAR, continuing to
                improve technical thinking, collaboration and the
                ability to approach complex problems with practical
                solutions.
              </p>

            </div>

          </div>


          <div className="timeline-item reveal">

            <div className="timeline-year">
              NOW
            </div>

            <div className="timeline-line">
              <span></span>
            </div>

            <div className="timeline-content">

              <p>CURRENT FOCUS</p>

              <h3>AI + FULL STACK</h3>

              <p>
                Building intelligent applications by combining
                artificial intelligence, modern web technologies,
                APIs and thoughtful user experience design.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ACHIEVEMENT ================= */}

      <section id="achievements" className="achievement-section">

        <div className="section-label reveal">
          <span>06</span>
          <p>ACHIEVEMENT</p>
        </div>

        <div className="achievement-grid reveal">

          <div className="achievement-content">

            <p className="achievement-kicker">
              DECODE SIH 2026
            </p>

            <h2>
              Built to compete.
              <em> Proved on stage.</em>
            </h2>

            <p className="achievement-description">
              As the leader of <strong>Team Conquer</strong>, I secured
              <strong> 1st place</strong> in the
              <strong> Bharat sakthi Track</strong> at Decode SIH 2026.
              The experience strengthened my leadership, teamwork,
              presentation and problem-solving skills while working
              under a competitive environment.
            </p>

            <div className="achievement-stats">

              <div>
                <strong>01</strong>
                <span>1st Place</span>
              </div>

              <div>
                <strong>₹30K</strong>
                <span>Prize</span>
              </div>

              <div>
                <strong>LEAD</strong>
                <span>Team Conquer</span>
              </div>

            </div>

          </div>


          <div className="achievement-image">

            <img
              src="/images/decode-sih.jpg"
              alt="Decode SIH 2026 achievement"
              loading="lazy"
            />

            <div className="achievement-image-label">
              <span>DECODE SIH</span>
              <strong>WINNING MOMENT ↗</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact-section">

        <div className="section-label reveal">
          <span>07</span>
          <p>CONTACT</p>
        </div>

        <div className="contact-main reveal">

          <div>

            <p className="contact-kicker">
              HAVE AN IDEA?
            </p>

            <h2>
              Let's build
              <em> something.</em>
            </h2>

          </div>

          <div className="contact-info">

            <p>
              I'm open to internships, entry-level opportunities,
              collaborations, technical projects and conversations
              around AI, software development and innovative ideas.
            </p>

            <p className="contact-extra">
              If you have an interesting problem to solve or a product
              idea worth exploring, feel free to reach out. I'm always
              interested in learning, contributing and building with
              people who enjoy creating useful technology.
            </p>

            <a
              href="mailto:naveenmac24@gmail.com"
              className="email-link"
            >
              naveenmac24@gmail.com
              <span>↗</span>
            </a>

          </div>

        </div>


        {/* ================= CONTACT DETAILS ================= */}

        <div className="contact-details reveal">

          <div>
            <span>EMAIL</span>

            <a href="mailto:naveenmac24@gmail.com">
              naveenmac24@gmail.com
            </a>

            <small>
              Best way to reach me for opportunities and collaborations.
            </small>
          </div>


          <div>
            <span>PHONE</span>

            <a href="tel:8072210095">
              +91 80722 10095
            </a>

            <small>
              Available for professional communication.
            </small>
          </div>


          <div>
            <span>LOCATION</span>

            <p>
              Kundrathur, Chennai
            </p>

            <small>
              Tamil Nadu · India · 600069
            </small>
          </div>


          <div>
            <span>AVAILABILITY</span>

            <p className="available-text">
              Open to Opportunities
            </p>

            <small>
              Internships · Full-time · Collaboration
            </small>
          </div>

        </div>


        {/* ================= SOCIAL LINKS ================= */}

        <div className="contact-socials reveal">

          <a
            href="https://github.com/Naveen-Venkatesan1"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-social-icon">
              GH
            </span>

            <span>
              GitHub
              <small>@Naveen-Venkatesan1</small>
            </span>

            <strong>↗</strong>
          </a>


          <a
            href="https://www.linkedin.com/in/naveen-v-a2183b391/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-social-icon">
              in
            </span>

            <span>
              LinkedIn
              <small>Professional Profile</small>
            </span>

            <strong>↗</strong>
          </a>


          <a
            href="https://leetcode.com/u/Finderror/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-social-icon">
              LC
            </span>

            <span>
              LeetCode
              <small>@Finderror</small>
            </span>

            <strong>↗</strong>
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-brand">

          <strong>
            NAVEEN <span>V</span>
          </strong>

          <span>
            AI / ML · FULL STACK · CREATIVE TECHNOLOGY
          </span>

        </div>

        <p>
          © {new Date().getFullYear()} Naveen V. Built with curiosity.
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </main>
  );
}

export default App;