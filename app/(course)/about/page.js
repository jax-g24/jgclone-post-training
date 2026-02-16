export const metadata = {
  title: 'About · Post Training',
};

export default function AboutPage() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-title">About</h1>
        <p className="page-subtitle">Course policies, structure, and information</p>
      </header>

      <main className="course-content">
        <div className="policies-section active">
          <div className="policy-card">
            <h3 className="section-header">About the Course</h3>
            <div className="policies-content">
              <p>This project-based course teaches you to design, build, post-train, and evaluate agentic AI systems. We connect core technical foundations (model architecture, retrieval-augmented generation, tool use, multi-agent coordination) with hands-on labs and a team capstone project.</p>
              <p>You&apos;ll gain practical experience with model deployment frameworks, post-training pipelines (SFT, RL, context engineering), evaluation systems, and model-context protocols. The course culminates in building an end-to-end minimum viable AI product.</p>
              <p>Emphasis is placed on engineering rigor, creative problem-solving, and deployment at scale.</p>

              <h4 className="policies-heading">Learning Outcomes</h4>
              <p>By the end of this course, you will be able to:</p>
              <ul>
                <li>Design AI systems that are reliable, maintainable, and cost-effective</li>
                <li>Debug and align models in production using modern evaluation and feedback frameworks</li>
                <li>Post-train open-source LLMs using SFT, RL, and context engineering via TinkerAPI</li>
                <li>Translate research into practice, whether founding an AI venture or shipping at scale</li>
                <li>Navigate ethical considerations in deploying autonomous systems</li>
                <li>Prototype and iterate on applications using modern LLM and agentic architectures</li>
              </ul>

              <h4 className="policies-heading">Who This Course Is For</h4>
              <p>Upper-division undergraduates and early graduate students who want to found or join early-stage AI startups, or work on applied ML engineering at major technology companies.</p>
              <p><strong>Expected background:</strong> Solid Python programming experience (CS 61A/88 + CS 61B or equivalent). Prior ML exposure recommended (CS 182, CS 189, CS 185, or Data 100) but not required. Strong motivation to apply AI research to real-world systems.</p>

              <h4 className="policies-heading">Course Structure</h4>
              <ul>
                <li><strong>Module 1: Fundamentals</strong> Foundations of LLMs, architectures, inference</li>
                <li><strong>Module 2: Post-Training</strong> SFT, RLHF, alignment techniques, TinkerAPI</li>
                <li><strong>Module 3: Reasoning and Agents</strong> Chain-of-thought, tool use, multi-agent systems</li>
                <li><strong>Module 4: Product and Research</strong> Deployment, evaluation, scaling, ethics</li>
              </ul>

              <h4 className="policies-heading">Navigating the Course</h4>
              <p>We keep things simple: one channel for communication, one for submissions, and one site for all course content. Everything you need lives in one of these four places:</p>
              <ul className="policies-nav-list">
                <li><strong>Communication:</strong> Slack (see welcome email for invite link)</li>
                <li><strong>Course website:</strong> posttraining.ai</li>
                <li><strong>Assignments:</strong> Gradescope (enroll with code <strong>6X7K5K</strong>)</li>
                <li><strong>Lectures:</strong> In-person, recordings available on course site</li>
              </ul>
            </div>
          </div>

          <div className="policy-card">
            <h3 className="section-header">Grade Breakdown</h3>
            <div className="policies-content">
              <div className="grade-breakdown">
                <div className="grade-item">
                  <span className="grade-percent">50%</span>
                  <span className="grade-label">Final Project <span className="grade-detail">(semester-long, 2 checkpoints, Demo Day May 4th)</span></span>
                </div>
                <div className="grade-item">
                  <span className="grade-percent">20%</span>
                  <span className="grade-label">Project 1 &amp; Project 2 <span className="grade-detail">(10% each)</span></span>
                </div>
                <div className="grade-item">
                  <span className="grade-percent">20%</span>
                  <span className="grade-label">Attendance <span className="grade-detail">(in-person required, 2 excused absences allowed)</span></span>
                </div>
                <div className="grade-item">
                  <span className="grade-percent">10%</span>
                  <span className="grade-label">Documentation <span className="grade-detail">(weekly progress sharing, starting week 2)</span></span>
                </div>
              </div>
            </div>
          </div>

          <div className="policy-card">
            <h3 className="section-header">Assignments</h3>
            <div className="policies-content">
              <h4 className="policies-heading">Attendance (20%)</h4>
              <p>We believe you learn best by being in class and discussing with your peers. In-person attendance is required with 2 excused absences allowed.</p>

              <h4 className="policies-heading">Documentation (10%)</h4>
              <p>Each week you&apos;ll share something you learned: a blog post, tweet, TikTok, LinkedIn post, YouTube video. The format is yours; the goal is building in public.</p>

              <h4 className="policies-heading">Labs (ungraded)</h4>
              <p>Weekly technical work (T1–T10) released alongside lectures. These are hands-on labs that reinforce lecture topics and prepare you for the graded projects. Ungraded but strongly recommended.</p>

              <h4 className="policies-heading">Projects (graded)</h4>
              <p><strong>Project 1</strong> focuses on post-training pipelines. <strong>Project 2</strong> focuses on agentic systems. Both are graded on completion and quality.</p>
              <p>The <strong>Final Project</strong> is a semester-long endeavor where you ideate, design, prototype, and productionize an AI system. Two checkpoints throughout the semester, culminating in Demo Day on May 4th.</p>
            </div>
          </div>

          <div className="policy-card">
            <h3 className="section-header">Acknowledgements</h3>
            <div className="policies-content">
              <ul>
                <li><strong>Cognition</strong> for providing compute credits</li>
                <li><strong>Thinking Machines</strong> for TinkerAPI access</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
