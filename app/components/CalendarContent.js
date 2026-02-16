'use client';

const monthIndex = { January: 0, February: 1, March: 2, April: 3, May: 4 };

function getClassDate(c) {
  return new Date(2026, monthIndex[c.month], c.day);
}

const classes = [
  { month: 'January', day: 26, lecture: 'What We Owe Machines', module: 'Fundamentals', week: 1 },
  { month: 'February', day: 2, lecture: 'Lifecycle of a Language Model', module: 'Fundamentals', week: 2 },
  { month: 'February', day: 9, lecture: 'Post-Training Foundations', module: 'Post-Training', week: 3, tag: { type: 'due', label: 'Final Project A Due' } },
  { month: 'February', day: 16, lecture: 'RLHF and Reward Learning', module: 'Post-Training', week: 4, tag: { type: 'release', label: 'Project 1 Released' } },
  { month: 'February', day: 23, lecture: 'Alignment & Model Behavior', module: 'Post-Training', week: 5, tag: { type: 'due', label: 'Final Project B Due' } },
  { month: 'March', day: 2, lecture: 'Evals as Research', module: 'Post-Training', week: 6 },
  { month: 'March', day: 9, lecture: 'Search, Planning, Memory', module: 'Reasoning & Agents', week: 7, tag: { type: 'due', label: 'Project 1 Due' } },
  { month: 'March', day: 16, lecture: 'Tool Use and Verification', module: 'Reasoning & Agents', week: 8, tag: { type: 'release', label: 'Project 2 Released' } },
  { month: 'March', day: 23, isBreak: true },
  { month: 'March', day: 30, lecture: 'Multi-Agent Systems', module: 'Reasoning & Agents', week: 9, tag: { type: 'due', label: 'Final Project C Due' } },
  { month: 'April', day: 6, lecture: 'Product Design Workshop', module: 'Product', week: 10, tag: { type: 'due', label: 'Project 2 Due' } },
  { month: 'April', day: 13, lecture: 'Product Workshop (Ct\'d)', module: 'Product', week: 11 },
  { month: 'April', day: 20, lecture: 'Guest Lecture', module: 'Guest', week: 12 },
  { month: 'April', day: 27, lecture: 'Guest Lecture', module: 'Guest', week: 13 },
  { month: 'May', day: 4, lecture: 'Demo Day', module: 'RRR Week', week: 14, isDemo: true, tag: { type: 'due', label: 'Final Project Due' } },
];

export default function CalendarContent() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  // Find the next upcoming class (first class whose date >= today)
  const nextIndex = classes.findIndex((c) => getClassDate(c) >= now);

  return (
    <div className="sq-calendar">
      <div className="sq-grid">
        {classes.map((c, i) => {
          const isPast = nextIndex === -1 || i < nextIndex;
          const isNext = i === nextIndex;

          return (
          <div
            key={i}
            className={`sq-day${c.isBreak ? ' is-break' : ''}${c.isDemo ? ' is-demo' : ''}${isPast ? ' is-past' : ''}${isNext ? ' is-next' : ''}`}
          >
            <div className="sq-day-top">
              <div className="sq-day-date">
                <span className="sq-day-num">{c.day}</span>
                <span className="sq-day-month">{c.month}</span>
              </div>
              {c.tag && (
                <span className={`sq-event-tag ${c.tag.type}`}>{c.tag.label}</span>
              )}
            </div>
            {c.isBreak ? (
              <span className="sq-event-break">Spring Break</span>
            ) : (
              <div className="sq-event">
                <span className="sq-event-module">Week {c.week} · {c.module}</span>
                <span className="sq-event-lecture">{c.lecture}</span>
              </div>
            )}
          </div>
          );
        })}
      </div>
    </div>
  );
}
