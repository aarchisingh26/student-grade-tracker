import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

function Dashboard() {
  const { token, onLogout } = useAuth();
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/courses`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(res.data);
      } catch (err) {
        console.error('Error fetching courses', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, [token]);

  const addCourse = async () => {
    if (!courseName.trim()) return;

    const newCourse = {
      name: courseName,
      average: 0,
      _id: `temp-${Date.now()}`,
    };

    setCourses([...courses, newCourse]);
    setCourseName('');

    try {
      // const res = await axios.post(
      //   'http://localhost:4001/api/courses',
      //   { name: courseName },
      //   { headers: { Authorization: `Bearer ${token}` } }
      // );
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/courses`,
        { name: courseName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setCourses((prev) =>
        prev.map((c) => (c._id === newCourse._id ? res.data : c))
      );
    } catch (err) {
      console.error('Error adding course', err);
      setCourses((prev) => prev.filter((c) => c._id !== newCourse._id));
    }
  };

  const deleteCourse = async (courseId) => {
    const confirmed = window.confirm('Are you sure you want to delete this course?');
    if (!confirmed) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/courses/${courseId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses((prev) => prev.filter((c) => c._id !== courseId));
    } catch (err) {
      console.error('Error deleting course', err);
      alert('Failed to delete course.');
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Your Courses</h1>

      <div className="course-form">
        <input
          placeholder="Add new course"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
        <button onClick={addCourse}>Add Course</button>
      </div>

      {loading ? (
        <p>Loading courses...</p>
      ) : courses.length === 0 ? (
        <p>No courses yet.</p>
      ) : (
        <div className="course-grid">
          {courses.map((course) => (
            <div key={course._id} className="card course-card">
              <div className="card-body card-content">
                <div className="course-header">
                  <Link to={`/courses/${course._id}`} className="course-title">
                    <h2>{course.name}</h2>
                  </Link>
                  <div className="course-average">
                    {typeof course.average === 'number'
                      ? `${course.average.toFixed(1)}%`
                      : 'N/A'}
                  </div>
                </div>

                <div className="course-labels">
                  <span>Course</span>
                  <span>Average</span>
                </div>

                <div className="course-progress-bar">
                  <div
                    className="course-progress-fill"
                    style={{
                      backgroundColor:
                        typeof course.average === 'number'
                          ? course.average >= 90
                            ? '#22c55e'
                            : course.average >= 80
                            ? '#3b82f6'
                            : course.average >= 70
                            ? '#eab308'
                            : course.average >= 60
                            ? '#f97316'
                            : '#ef4444'
                          : '#d1d5db',
                      width:
                        typeof course.average === 'number'
                          ? `${Math.min(course.average, 100)}%`
                          : '0%',
                    }}
                  ></div>
                </div>

                <div className="card-actions">
                  <Link to={`/courses/${course._id}`}>
                    <button className="btn btn-outline">View</button>
                  </Link>
                  <button
                    onClick={() => deleteCourse(course._id)}
                    className="btn btn-outline btn-error"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}



      <button onClick={handleLogout} className="btn btn-logout">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
