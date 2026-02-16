export default function CalendarContent() {
  return (
    <>
      <header className="page-header">
        <h1 className="page-title">Calendar</h1>
        <p className="page-subtitle">Weekly schedule of lectures, labs, and assignments</p>
      </header>

      <main className="course-content">
        <div className="calendar-section active">
          <div className="calendar-grid">
            <div className="calendar-header">
              <div className="calendar-header-cell">Date</div>
              <div className="calendar-header-cell">Lecture</div>
              <div className="calendar-header-cell">Technical Work</div>
              <div className="calendar-header-cell">Materials</div>
              <div className="calendar-header-cell">Assignments Due</div>
            </div>

            {/* Week 1 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Jan</div>
                  <div className="date-day">26</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 1 · Fundamentals</div>
                <div className="cell-content">What We Owe Machines</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content"><a href="https://colab.research.google.com/drive/19WvcopPNIOLH4NKNH5ar1Y0M1d4yJ3mQ?usp=sharing" target="_blank" rel="noopener noreferrer" className="calendar-material-link">T1a: Inference Playground</a></div>
                <div className="cell-content"><a href="https://colab.research.google.com/drive/1deDpzYaMXkROCw2LWonMDsfcQJ34EFnD?usp=sharing" target="_blank" rel="noopener noreferrer" className="calendar-material-link">T1b: Scaling Laws</a></div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">
                  <a href="https://docs.google.com/presentation/d/1nxbNp8790FXulVz9qfzK9feuBdAMdWV7xJa_wEcatF4/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="calendar-material-link">Slides</a>
                  <a href="https://drive.google.com/file/d/10AQCsEnCpEPpblU4TgUNZJzCu-JtUoes/view?usp=share_link" target="_blank" rel="noopener noreferrer" className="calendar-material-link">Notes</a>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
            </div>

            {/* Week 2 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Feb</div>
                  <div className="date-day">2</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 2 · Fundamentals</div>
                <div className="cell-content">The Lifecycle of a Language Model</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">T2a: Build a Context-Aware Assistant</div>
                <div className="cell-subcontent">T2b: Inference Deep-Dive</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
            </div>

            {/* Week 3 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Feb</div>
                  <div className="date-day">9</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 3 · Post-Training</div>
                <div className="cell-content">Post-Training Foundations</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">T3a: Datagen Pipelines &amp; Quality</div>
                <div className="cell-subcontent">T3b: SFT from Scratch</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <span className="calendar-tag due">Final Project A Due</span>
              </div>
            </div>

            {/* Week 4 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Feb</div>
                  <div className="date-day">16</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 4 · Post-Training</div>
                <div className="cell-content">RLHF and Reward Learning</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">T4a: DPO in Practice</div>
                <div className="cell-subcontent">T4b: Toy Reward Modeling</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <span className="calendar-tag release">Project 1 Released</span>
              </div>
            </div>

            {/* Week 5 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Feb</div>
                  <div className="date-day">23</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 5 · Post-Training</div>
                <div className="cell-content">Alignment Methods &amp; Model Behavior</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">T5a: Refusal Classifier</div>
                <div className="cell-subcontent">T5b: Constitutional AI Loop</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <span className="calendar-tag due">Final Project B Due</span>
              </div>
            </div>

            {/* Week 6 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Mar</div>
                  <div className="date-day">2</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 6 · Post-Training</div>
                <div className="cell-content">Evals as Research</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">T6a: Evaluation Design</div>
                <div className="cell-subcontent">T6b: Benchmark Hacking</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
            </div>

            {/* Week 7 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Mar</div>
                  <div className="date-day">9</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 7 · Reasoning &amp; Agents</div>
                <div className="cell-content">Search, Planning, Memory</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">T7a: Planning Agent</div>
                <div className="cell-subcontent">T7b: AlphaEvolve</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <span className="calendar-tag due">Project 1 Due</span>
              </div>
            </div>

            {/* Week 8 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Mar</div>
                  <div className="date-day">16</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 8 · Reasoning &amp; Agents</div>
                <div className="cell-content">Tool Use and Verification</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">T8a: Coding Agent with Verification</div>
                <div className="cell-subcontent">T8b: Computer Use Lab</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <span className="calendar-tag release">Project 2 Released</span>
              </div>
            </div>

            {/* Spring Break */}
            <div className="calendar-row break">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Mar</div>
                  <div className="date-day">23</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Spring Break</div>
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
            </div>

            {/* Week 9 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Mar</div>
                  <div className="date-day">30</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 9 · Reasoning &amp; Agents</div>
                <div className="cell-content">Multi-Agent Systems</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">T9a: Agent Telemetry</div>
                <div className="cell-subcontent">T9b: Multi-Agent Collaboration</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <span className="calendar-tag due">Final Project C Due</span>
              </div>
            </div>

            {/* Week 10 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Apr</div>
                  <div className="date-day">6</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 10 · Product</div>
                <div className="cell-content">Product Design &amp; Development Workshop</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">T10: Self-Play Experiment</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <span className="calendar-tag due">Project 2 Due</span>
              </div>
            </div>

            {/* Week 11 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Apr</div>
                  <div className="date-day">13</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 11 · Product</div>
                <div className="cell-content">Product Design &amp; Development Workshop (Ct&apos;d)</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
            </div>

            {/* Week 12 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Apr</div>
                  <div className="date-day">20</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 12 · Guest Lecture</div>
                <div className="cell-content">TBA</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
            </div>

            {/* Week 13 */}
            <div className="calendar-row">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">Apr</div>
                  <div className="date-day">27</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">Week 13 · Guest Lecture</div>
                <div className="cell-content">TBA</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
            </div>

            {/* Demo Day */}
            <div className="calendar-row highlight">
              <div className="calendar-cell">
                <div className="date-display">
                  <div className="date-month">May</div>
                  <div className="date-day">4</div>
                </div>
              </div>
              <div className="calendar-cell">
                <div className="cell-label">RRR Week</div>
                <div className="cell-content" style={{ fontWeight: 600 }}>Demo Day</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <div className="cell-content">—</div>
              </div>
              <div className="calendar-cell">
                <span className="calendar-tag due">Final Project Due</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
