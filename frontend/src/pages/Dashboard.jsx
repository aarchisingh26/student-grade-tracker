// // // // import { useEffect, useState } from 'react';
// // // // import API from '../api';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import { useAuth } from '../AuthContext';

// // // // export default function Home() {
// // // //   const [todos, setTodos] = useState([]);
// // // //   const [text, setText] = useState('');
// // // //   const navigate = useNavigate();
// // // //   const { token, onLogout } = useAuth();

// // // //   const [courses, setCourses] = useState([])
// // // //   const [name, setName] = useState('')

// // // //   useEffect(() => {
// // // //     if (!token) return navigate('/login');
// // // //     fetchTodos();
// // // //   }, [token]);

// // // //   const fetchTodos = async () => {
// // // //     const res = await API.get('/todos');
// // // //     setTodos(res.data);
// // // //   };

// // // //   const addTodo = async () => {
// // // //     const res = await API.post('/todos', { text });
// // // //     setTodos([...todos, res.data]);
// // // //     setText('');
// // // //   };

// // // //   const deleteTodo = async (id) => {
// // // //     await API.delete(`/todos/${id}`);
// // // //     setTodos(todos.filter((t) => t._id !== id));
// // // //   };

// // // //   const fetchCourses = async () => {
// // // //     const res = await API.get('/courses')
// // // //     setCourses(res.data)
// // // //   }

// // // //   useEffect(() => { fetchCourses() }, [])

// // // //   const addCourse = async () => {
// // // //     await API.post('/courses', { name })
// // // //     setName('')
// // // //     fetchCourses()
// // // //   }

// // // //   return (
// // // //     <div>
// // // //       <h2>My To-Do List</h2>
// // // //       <button onClick={onLogout}>Logout</button>
// // // //       <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New task" />
// // // //       <button onClick={addTodo}>Add</button>
// // // //       <ul>
// // // //         {todos.map((t) => (
// // // //           <li key={t._id}>
// // // //             {t.text}
// // // //             <button onClick={() => deleteTodo(t._id)}>❌</button>
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       <h2>Your Courses</h2>
// // // //       <input placeholder="New course name" value={name} onChange={e => setName(e.target.value)} />
// // // //       <button onClick={addCourse}>Add Course</button>
// // // //       <button onClick={onLogout}>Logout</button>

// // // //       <ul>
// // // //         {courses.map(course => (
// // // //           <li key={course._id}>
// // // //             {course.name}
// // // //           </li>
// // // //         ))}
// // // //       </ul>
// // // //     </div>
// // // //   );
// // // // }


// // // // /pages/Dashboard.jsx
// // // import { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { Link } from 'react-router-dom';
// // // import { useAuth } from '../AuthContext';

// // // function Dashboard() {
// // //   const { token, onLogout } = useAuth();
// // //   const [courses, setCourses] = useState([]);
// // //   const [courseName, setCourseName] = useState('');



// // //   useEffect(() => {
// // //     const fetchCourses = async () => {
// // //       const res = await axios.get('http://localhost:4001/api/courses', {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       setCourses(res.data);
// // //     };
// // //     fetchCourses();
// // //   }, [token]);

// // //   const addCourse = async () => {
// // //     if (!courseName.trim()) return;
// // //     const res = await axios.post(
// // //       'http://localhost:4001/api/courses',
// // //       { name: courseName },
// // //       { headers: { Authorization: `Bearer ${token}` } }
// // //     );
// // //     setCourses([...courses, res.data]);
// // //     setCourseName('');
// // //   };

// // //   return (
// // //     <div style={{ padding: '2rem' }}>
// // //       <h1>Your Courses</h1>

// // //       <ul>
// // //         {courses.map((course) => (
// // //           <li key={course._id}>
// // //             <Link to={`/courses/${course._id}`} style={{ textDecoration: 'none' }}>
// // //               <strong>{course.name}</strong> – Average:{" "}
// // //               {typeof course.average === 'number'
// // //                 ? `${course.average.toFixed(2)}%`
// // //                 : 'N/A'}
// // //             </Link>
// // //           </li>
// // //         ))}
// // //       </ul>


// // //       <div style={{ marginTop: '2rem' }}>
// // //         <input
// // //           placeholder="Add new course"
// // //           value={courseName}
// // //           onChange={(e) => setCourseName(e.target.value)}
// // //         />
// // //         <button onClick={addCourse}>Add Course</button>
// // //       </div>

// // //       <button onClick={onLogout}>Logout</button>
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;


// // // import { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { Link } from 'react-router-dom';
// // // import { useAuth } from '../AuthContext';

// // // function Dashboard() {
// // //   const { token, onLogout } = useAuth();
// // //   const [courses, setCourses] = useState([]);
// // //   const [courseName, setCourseName] = useState('');

// // //   useEffect(() => {
// // //     const fetchCourses = async () => {
// // //       const res = await axios.get('http://localhost:4001/api/courses', {
// // //         headers: { Authorization: `Bearer ${token}` },
// // //       });
// // //       setCourses(res.data);
// // //     };
// // //     fetchCourses();
// // //   }, [token]);

// // //   const addCourse = async () => {
// // //     if (!courseName.trim()) return;
// // //     const res = await axios.post(
// // //       'http://localhost:4001/api/courses',
// // //       { name: courseName },
// // //       { headers: { Authorization: `Bearer ${token}` } }
// // //     );
// // //     setCourses([...courses, res.data]);
// // //     setCourseName('');
// // //   };

// // //   const deleteCourse = async (courseId) => {
// // //     const confirmDelete = window.confirm('Are you sure you want to delete this course?');
// // //     if (!confirmDelete) return;

// // //     await axios.delete(`http://localhost:4001/api/courses/${courseId}`, {
// // //       headers: { Authorization: `Bearer ${token}` },
// // //     });

// // //     setCourses(courses.filter((course) => course._id !== courseId));
// // //   };

// // //   return (
// // //     <div style={{ padding: '2rem' }}>
// // //       <h1>Your Courses</h1>

// // //       <ul>
// // //         {courses.map((course) => (
// // //           <li key={course._id} style={{ marginBottom: '0.5rem' }}>
// // //             <Link to={`/courses/${course._id}`} style={{ textDecoration: 'none', marginRight: '1rem' }}>
// // //               <strong>{course.name}</strong> – Average:{' '}
// // //               {typeof course.average === 'number'
// // //                 ? `${course.average.toFixed(2)}%`
// // //                 : 'N/A'}
// // //             </Link>
// // //             <button onClick={() => deleteCourse(course._id)} style={{ color: 'red' }}>
// // //               Delete
// // //             </button>
// // //           </li>
// // //         ))}
// // //       </ul>

// // //       <div style={{ marginTop: '2rem' }}>
// // //         <input
// // //           placeholder="Add new course"
// // //           value={courseName}
// // //           onChange={(e) => setCourseName(e.target.value)}
// // //         />
// // //         <button onClick={addCourse}>Add Course</button>
// // //       </div>

// // //       <button onClick={onLogout} style={{ marginTop: '2rem' }}>
// // //         Logout
// // //       </button>
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;

// // import { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { Link } from 'react-router-dom';
// // import { useAuth } from '../AuthContext';

// // function Dashboard() {
// //   const { token, onLogout } = useAuth();
// //   const [courses, setCourses] = useState([]);
// //   const [courseName, setCourseName] = useState('');
// //   const [loading, setLoading] = useState(true); // 👈 Loading state

// //   // Fetch courses immediately when component mounts
// //   useEffect(() => {
// //     const fetchCourses = async () => {
// //       try {
// //         const res = await axios.get('http://localhost:4001/api/courses', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         setCourses(res.data);
// //       } catch (err) {
// //         console.error('Error fetching courses', err);
// //       } finally {
// //         setLoading(false); // ✅ Done loading
// //       }
// //     };
// //     fetchCourses();
// //   }, [token]);

// //   // Optimistically add course to UI
// //   const addCourse = async () => {
// //     if (!courseName.trim()) return;

// //     const newCourse = {
// //       name: courseName,
// //       average: 0,
// //       _id: `temp-${Date.now()}`, // temporary ID for frontend only
// //     };

// //     setCourses([...courses, newCourse]); // ⏩ Optimistic add
// //     setCourseName('');

// //     try {
// //       const res = await axios.post(
// //         'http://localhost:4001/api/courses',
// //         { name: courseName },
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );
// //       // Replace temp course with actual course from DB
// //       setCourses((prev) =>
// //         prev.map((c) => (c._id === newCourse._id ? res.data : c))
// //       );
// //     } catch (err) {
// //       console.error('Error adding course', err);
// //       // Revert optimistic update if it failed
// //       setCourses((prev) => prev.filter((c) => c._id !== newCourse._id));
// //     }
// //   };

// // //   return (
// // //     <div style={{ padding: '2rem' }}>
// // //       <h1>Your Courses</h1>

// // //       {loading ? (
// // //         <p>Loading courses...</p>
// // //       ) : courses.length === 0 ? (
// // //         <p>No courses yet.</p>
// // //       ) : (
// // //         <ul>
// // //           {courses.map((course) => (
// // //             <li key={course._id}>
// // //               <Link to={`/courses/${course._id}`} style={{ textDecoration: 'none' }}>
// // //                 <strong>{course.name}</strong> – Average:{' '}
// // //                 {typeof course.average === 'number'
// // //                   ? `${course.average.toFixed(2)}%`
// // //                   : 'N/A'}
// // //               </Link>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}

// // //       <div style={{ marginTop: '2rem' }}>
// // //         <input
// // //           placeholder="Add new course"
// // //           value={courseName}
// // //           onChange={(e) => setCourseName(e.target.value)}
// // //         />
// // //         <button onClick={addCourse}>Add Course</button>
// // //       </div>

// // //       <button onClick={onLogout}>Logout</button>
// // //     </div>
// // //   );
// // // }

// // // export default Dashboard;

// // return (
// //   <div className="p-8 page-container">
// //     <h1 className="text-3xl font-bold mb-6">Your Courses</h1>

// //     {loading ? (
// //       <p>Loading courses...</p>
// //     ) : courses.length === 0 ? (
// //       <p>No courses yet.</p>
// //     ) : (
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-sky-500">
// //         {courses.map((course) => (
// //           <Link 
// //           key={course._id}
// //           to={`/courses/${course._id}`} 
// //           className="group block"
// //         >
// //           <div className="card course-card w-full">
// //           <div className="card-body">
// //   <div className="flex items-center justify-between mb-2">
// //     <h2 className="course-title text-left m-0">{course.name}</h2>
// //     <div className="course-average text-right m-0">
// //       {typeof course.average === 'number' ? `${course.average.toFixed(1)}%` : 'N/A'}
// //     </div>
// //   </div>
// //   <div className="text-sm text-gray-500 mb-2 flex justify-between">
// //     <span>Course</span>
// //     <span>Average</span>
// //   </div>
// //   <div className="course-progress-bar">
// //     <div
// //       className={`course-progress-fill ${
// //         typeof course.average === 'number'
// //           ? course.average >= 90
// //             ? 'bg-green-500'
// //             : course.average >= 80
// //             ? 'bg-blue-500'
// //             : course.average >= 70
// //             ? 'bg-yellow-500'
// //             : course.average >= 60
// //             ? 'bg-orange-500'
// //             : 'bg-red-500'
// //           : 'bg-gray-400'
// //       }`}
// //       style={{
// //         width:
// //           typeof course.average === 'number'
// //             ? `${Math.min(course.average, 100)}%`
// //             : '0%',
// //       }}
// //     ></div>
// //   </div>
// //   <div className="card-actions justify-end">
// //     <button className="btn btn-sm btn-outline">View</button>
// //   </div>
// // </div>

// //           </div>
// //         </Link>
        
// //         ))}
// //       </div>
// //     )}

// //     <div className="mt-10 flex gap-4 items-center">
// //       <input
// //         className="border p-2 rounded-md w-64"
// //         placeholder="Add new course"
// //         value={courseName}
// //         onChange={(e) => setCourseName(e.target.value)}
// //       />
// //       <button
// //         onClick={addCourse}
// //         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
// //       >
// //         Add Course
// //       </button>
// //     </div>

// //     <button
// //       onClick={onLogout}
// //       className="mt-8 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
// //     >
// //       Logout
// //     </button>
// //   </div>
// // );
// // }
// // export default Dashboard;






// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../AuthContext';
// import { useNavigate } from 'react-router-dom';


// function Dashboard() {
//   const { token, onLogout } = useAuth();
//   const [courses, setCourses] = useState([]);
//   const [courseName, setCourseName] = useState('');
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     onLogout();         // clears auth (from your AuthContext)
//     navigate('/');      // redirect to home
//   };
  


//   // Fetch courses
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await axios.get('http://localhost:4001/api/courses', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setCourses(res.data);
//       } catch (err) {
//         console.error('Error fetching courses', err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchCourses();
//   }, [token]);

//   // Add course
//   const addCourse = async () => {
//     if (!courseName.trim()) return;

//     const newCourse = {
//       name: courseName,
//       average: 0,
//       _id: `temp-${Date.now()}`,
//     };

//     setCourses([...courses, newCourse]);
//     setCourseName('');

//     try {
//       const res = await axios.post(
//         'http://localhost:4001/api/courses',
//         { name: courseName },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
//       setCourses((prev) =>
//         prev.map((c) => (c._id === newCourse._id ? res.data : c))
//       );
//     } catch (err) {
//       console.error('Error adding course', err);
//       setCourses((prev) => prev.filter((c) => c._id !== newCourse._id));
//     }
//   };

//   // Delete course
//   const deleteCourse = async (courseId) => {
//     const confirmed = window.confirm('Are you sure you want to delete this course?');
//     if (!confirmed) return;

//     try {
//       await axios.delete(`http://localhost:4001/api/courses/${courseId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setCourses((prev) => prev.filter((c) => c._id !== courseId));
//     } catch (err) {
//       console.error('Error deleting course', err);
//       alert('Failed to delete course.');
//     }
//   };

//   return (
//     <div className="p-8 page-container">
//       <h1 className="text-3xl font-bold mb-6">Your Courses</h1>

//       {loading ? (
//         <p>Loading courses...</p>
//       ) : courses.length === 0 ? (
//         <p>No courses yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course) => (
//             <div key={course._id} className="card course-card w-full">
//               <div className="card-body">
//                 <div className="flex items-center justify-between mb-2">
//                   <Link to={`/courses/${course._id}`} className="course-title text-left m-0 hover:underline">
//                     <h2>{course.name}</h2>
//                   </Link>
//                   <div className="course-average text-right m-0">
//                     {typeof course.average === 'number' ? `${course.average.toFixed(1)}%` : 'N/A'}
//                   </div>
//                 </div>

//                 <div className="text-sm text-gray-500 mb-2 flex justify-between">
//                   <span>Course</span>
//                   <span>Average</span>
//                 </div>

//                 <div className="course-progress-bar h-2 bg-gray-200 rounded overflow-hidden mb-4">
//                   <div
//                     className={`course-progress-fill h-full ${
//                       typeof course.average === 'number'
//                         ? course.average >= 90
//                           ? 'bg-green-500'
//                           : course.average >= 80
//                           ? 'bg-blue-500'
//                           : course.average >= 70
//                           ? 'bg-yellow-500'
//                           : course.average >= 60
//                           ? 'bg-orange-500'
//                           : 'bg-red-500'
//                         : 'bg-gray-400'
//                     }`}
//                     style={{
//                       width:
//                         typeof course.average === 'number'
//                           ? `${Math.min(course.average, 100)}%`
//                           : '0%',
//                     }}
//                   ></div>
//                 </div>

//                 <div className="card-actions justify-end space-x-2">
//                   <Link to={`/courses/${course._id}`}>
//                     <button className="btn btn-sm btn-outline">View</button>
//                   </Link>
//                   <button
//                     onClick={() => deleteCourse(course._id)}
//                     className="btn btn-sm btn-outline btn-error"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       <div className="mt-10 flex gap-4 items-center">
//         <input
//           className="border p-2 rounded-md w-64"
//           placeholder="Add new course"
//           value={courseName}
//           onChange={(e) => setCourseName(e.target.value)}
//         />
//         <button
//           onClick={addCourse}
//           className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//         >
//           Add Course
//         </button>
//       </div>

//       {/* <button
//         onClick={onLogout}
//         className="mt-8 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//       >
//         Logout
//       </button> */}

//       <button
//         onClick={handleLogout}
//         className="mt-8 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
//       >
//         Logout
//       </button>

//     </div>
//   );
// }

// export default Dashboard;


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
        const res = await axios.get('http://localhost:4001/api/courses', {
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
