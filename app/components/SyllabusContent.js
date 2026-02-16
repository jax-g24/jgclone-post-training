export default function SyllabusContent() {
  return (
    <>
      <header className="course-header">
        <h1 className="course-title">Building Thoughtful AI Systems</h1>
        <p className="course-meta">CDSS 94 · Spring 2026 · Mondays, 5–7:30 PM</p>
        <p className="course-description">
          A rigorous, hands-on exploration of post-training — how we shape model behavior
          through reinforcement learning, align objectives, design reward functions, build
          evaluations, and turn foundation models into reliable, useful AI systems.
        </p>
        <div className="teaching-staff-inline">
          <a href="https://x.com/karinanguyen_" target="_blank" rel="noopener noreferrer" className="staff-member-inline">
            <img src="/assets/images/karina.jpeg" alt="Karina Nguyen" />
            <span>Karina Nguyen</span>
          </a>
          <a href="https://x.com/KJHMiao" target="_blank" rel="noopener noreferrer" className="staff-member-inline">
            <img src="/assets/images/kevin.png" alt="Kevin Miao" />
            <span>Kevin Miao</span>
          </a>
        </div>
      </header>

      <main className="course-content">
        <div id="syllabus" className="schedule-section">
          <div className="modules-grid">

            {/* Module 1: Fundamentals */}
            <div className="module-card">
              <div className="module-hero" style={{ backgroundImage: "url('/assets/images/What we owe machines.jpeg')" }}>
                <div className="module-overlay">
                  <span className="module-number">Module 1</span>
                  <h2 className="module-title">Fundamentals</h2>
                </div>
              </div>
              <div className="module-lectures">
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">What We Owe Machines</span>
                    <span className="lecture-date">January 26, 2026</span>
                  </div>
                  <p className="lecture-description">The hard problem in AI isn&apos;t making machines smarter, it&apos;s teaching them to handle problems without right answers.</p>
                  <div className="lecture-links">
                    <a href="/assets/slides/WhatWeOweMachines.pdf" target="_blank" rel="noopener noreferrer" className="lecture-link">Slides</a>
                    <a href="https://drive.google.com/file/d/10AQCsEnCpEPpblU4TgUNZJzCu-JtUoes/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="lecture-link">Notes</a>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                </div>
                <div className="lecture-item upcoming">
                  <div className="lecture-header">
                    <span className="lecture-name">The Lifecycle of a Language Model</span>
                    <span className="lecture-date">February 2, 2026</span>
                  </div>
                  <p className="lecture-description">Understanding the full training pipeline from pretraining to deployment.</p>
                  <div className="lecture-links">
                    <span className="lecture-link disabled">Slides</span>
                    <span className="lecture-link disabled">Notes</span>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 2: Post-Training */}
            <div className="module-card upcoming">
              <div className="module-hero" style={{ backgroundImage: "url('/assets/images/posttraining-foundations.jpg')" }}>
                <div className="module-overlay">
                  <span className="module-number">Module 2</span>
                  <h2 className="module-title">Post-Training</h2>
                </div>
              </div>
              <div className="module-lectures">
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">Post-Training Foundations</span>
                    <span className="lecture-date">February 9, 2026</span>
                  </div>
                  <div className="lecture-links">
                    <span className="lecture-link disabled">Slides</span>
                    <span className="lecture-link disabled">Notes</span>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                  <span className="lecture-tag tag-due">Final Project A Due</span>
                </div>
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">RLHF and Reward Learning</span>
                    <span className="lecture-date">February 16, 2026</span>
                  </div>
                  <div className="lecture-links">
                    <span className="lecture-link disabled">Slides</span>
                    <span className="lecture-link disabled">Notes</span>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                  <span className="lecture-tag tag-release">Project 1 Released</span>
                </div>
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">Alignment Methods &amp; Model Behavior</span>
                    <span className="lecture-date">February 23, 2026</span>
                  </div>
                  <div className="lecture-links">
                    <span className="lecture-link disabled">Slides</span>
                    <span className="lecture-link disabled">Notes</span>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                  <span className="lecture-tag tag-due">Final Project B Due</span>
                </div>
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">Evals as Research</span>
                    <span className="lecture-date">March 2, 2026</span>
                  </div>
                  <div className="lecture-links">
                    <span className="lecture-link disabled">Slides</span>
                    <span className="lecture-link disabled">Notes</span>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3: Reasoning & Agents */}
            <div className="module-card upcoming">
              <div className="module-hero" style={{ backgroundImage: "url('/assets/images/Alignment Methods & Model Behavior.jpg')" }}>
                <div className="module-overlay">
                  <span className="module-number">Module 3</span>
                  <h2 className="module-title">Reasoning &amp; Agents</h2>
                </div>
              </div>
              <div className="module-lectures">
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">Search, Planning, Memory</span>
                    <span className="lecture-date">March 9, 2026</span>
                  </div>
                  <div className="lecture-links">
                    <span className="lecture-link disabled">Slides</span>
                    <span className="lecture-link disabled">Notes</span>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                  <span className="lecture-tag tag-due">Project 1 Due</span>
                </div>
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">Tool Use and Verification</span>
                    <span className="lecture-date">March 16, 2026</span>
                  </div>
                  <div className="lecture-links">
                    <span className="lecture-link disabled">Slides</span>
                    <span className="lecture-link disabled">Notes</span>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                  <span className="lecture-tag tag-release">Project 2 Released</span>
                </div>
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">Spring Break</span>
                    <span className="lecture-date">March 23, 2026</span>
                  </div>
                  <p className="lecture-description">No class this week. Enjoy your break!</p>
                </div>
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">Multi-Agent Systems</span>
                    <span className="lecture-date">March 30, 2026</span>
                  </div>
                  <div className="lecture-links">
                    <span className="lecture-link disabled">Slides</span>
                    <span className="lecture-link disabled">Notes</span>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                  <span className="lecture-tag tag-due">Final Project C Due</span>
                </div>
              </div>
            </div>

            {/* Module 4: Product & Research */}
            <div className="module-card upcoming">
              <div className="module-hero" style={{ backgroundImage: "url('/assets/images/Evals as Research.jpg')" }}>
                <div className="module-overlay">
                  <span className="module-number">Module 4</span>
                  <h2 className="module-title">Product &amp; Research</h2>
                </div>
              </div>
              <div className="module-lectures">
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">Product Design Workshop</span>
                    <span className="lecture-date">April 6, 2026</span>
                  </div>
                  <div className="lecture-links">
                    <span className="lecture-link disabled">Slides</span>
                    <span className="lecture-link disabled">Notes</span>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                  <span className="lecture-tag tag-due">Project 2 Due</span>
                </div>
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">Product Workshop (Continued)</span>
                    <span className="lecture-date">April 13, 2026</span>
                  </div>
                  <div className="lecture-links">
                    <span className="lecture-link disabled">Slides</span>
                    <span className="lecture-link disabled">Notes</span>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                </div>
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">Guest Lecture</span>
                    <span className="lecture-date">April 20, 2026</span>
                  </div>
                  <div className="lecture-links">
                    <span className="lecture-link disabled">Slides</span>
                    <span className="lecture-link disabled">Notes</span>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                </div>
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">Guest Lecture</span>
                    <span className="lecture-date">April 27, 2026</span>
                  </div>
                  <div className="lecture-links">
                    <span className="lecture-link disabled">Slides</span>
                    <span className="lecture-link disabled">Notes</span>
                    <span className="lecture-link disabled">Recording</span>
                  </div>
                </div>
                <div className="lecture-item">
                  <div className="lecture-header">
                    <span className="lecture-name">Demo Day 🎉</span>
                    <span className="lecture-date">May 4, 2026 · RRR Week</span>
                  </div>
                  <p className="lecture-description">Present your final projects to the class.</p>
                  <span className="lecture-tag tag-due">Final Project Due</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
