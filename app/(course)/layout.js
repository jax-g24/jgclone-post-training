import Nav from '../../components/Nav';

export default function CourseLayout({ children }) {
  return (
    <div className="course-page">
      <Nav />
      <div className="course-container">
        {children}
      </div>
    </div>
  );
}
