'use client';

const classes = [
  { month: 'Jan', day: 26, lecture: 'What We Owe Machines', module: 'Fundamentals', week: 1 },
  { month: 'Feb', day: 2, lecture: 'Lifecycle of a Language Model', module: 'Fundamentals', week: 2 },
  { month: 'Feb', day: 9, lecture: 'Post-Training Foundations', module: 'Post-Training', week: 3, tag: { type: 'due', label: 'Final Project A Due' } },
  { month: 'Feb', day: 16, lecture: 'RLHF and Reward Learning', module: 'Post-Training', week: 4, tag: { type: 'release', label: 'Project 1 Released' } },
  { month: 'Feb', day: 23, lecture: 'Alignment & Model Behavior', module: 'Post-Training', week: 5, tag: { type: 'due', label: 'Final Project B Due' } },
  { month: 'Mar', day: 2, lecture: 'Evals as Research', module: 'Post-Training', week: 6 },
  { month: 'Mar', day: 9, lecture: 'Search, Planning, Memory', module: 'Reasoning & Agents', week: 7, tag: { type: 'due', label: 'Project 1 Due' } },
  { month: 'Mar', day: 16, lecture: 'Tool Use and Verification', module: 'Reasoning & Agents', week: 8, tag: { type: 'release', label: 'Project 2 Released' } },
  { month: 'Mar', day: 23, isBreak: true },
  { month: 'Mar', day: 30, lecture: 'Multi-Agent Systems', module: 'Reasoning & Agents', week: 9, tag: { type: 'due', label: 'Final Project C Due' } },
  { month: 'Apr', day: 6, lecture: 'Product Design Workshop', module: 'Product', week: 10, tag: { type: 'due', label: 'Project 2 Due' } },
  { month: 'Apr', day: 13, lecture: 'Product Workshop (Ct\'d)', module: 'Product', week: 11 },
  { month: 'Apr', day: 20, lecture: 'Guest Lecture', module: 'Guest', week: 12 },
  { month: 'Apr', day: 27, lecture: 'Guest Lecture', module: 'Guest', week: 13 },
  { month: 'May', day: 4, lecture: 'Demo Day', module: 'RRR Week', week: 14, isDemo: true, tag: { type: 'due', label: 'Final Project Due' } },
];

export default function CalendarContent() {
  return (
    <div className="sq-calendar">
      <div className="sq-grid">
        {classes.map((c, i) => (
          <div
            key={i}
            className={`sq-day${c.isBreak ? ' is-break' : ''}${c.isDemo ? ' is-demo' : ''}`}
          >
            <div className="sq-day-date">
              <span className="sq-day-month">{c.month}</span>
              <span className="sq-day-num">{c.day}</span>
            </div>
            {c.isBreak ? (
              <span className="sq-event-break">Spring Break</span>
            ) : (
              <div className="sq-event">
                <span className="sq-event-module">Week {c.week} · {c.module}</span>
                <span className="sq-event-lecture">{c.lecture}</span>
                {c.tag && (
                  <span className={`sq-event-tag ${c.tag.type}`}>{c.tag.label}</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
