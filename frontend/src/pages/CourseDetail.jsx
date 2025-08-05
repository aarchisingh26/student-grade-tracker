// // // import { useParams } from 'react-router-dom'
// // // import { useEffect, useState } from 'react'
// // // import API from '../api'

// // // export default function CourseDetail() {
// // //   const { id } = useParams()
// // //   const [course, setCourse] = useState(null)
// // //   const [assignment, setAssignment] = useState({ name: '', grade: '', weight: '' })

// // //   const fetchCourse = async () => {
// // //     const res = await API.get('/courses')
// // //     const match = res.data.find(c => c._id === id)
// // //     setCourse(match)
// // //   }

// // //   useEffect(() => { fetchCourse() }, [id])

// // //   const addAssignment = async () => {
// // //     await API.post(`/courses/${id}/assignments`, assignment)
// // //     setAssignment({ name: '', grade: '', weight: '' })
// // //     fetchCourse()
// // //   }

// // //   const deleteAssignment = async (assignmentId) => {
// // //     const confirmDelete = window.confirm('Are you sure you want to delete this assignment?');
// // //     if (!confirmDelete) return;
  
// // //     await API.delete(`/courses/${id}/assignments/${assignmentId}`);
// // //     fetchCourse(); // Refresh course data
// // //   };
  

// // //   if (!course) return <p>Loading...</p>

// // //   return (
// // //     <div>
// // //       <h2>{course.name}</h2>
// // //       <p>Average: {course.average.toFixed(2)}%</p>

// // //       <input placeholder="Assignment name" value={assignment.name} onChange={e => setAssignment({ ...assignment, name: e.target.value })} />
// // //       <input type="number" placeholder="Grade (%)" value={assignment.grade} onChange={e => setAssignment({ ...assignment, grade: e.target.value })} />
// // //       <input type="number" placeholder="Weight (%)" value={assignment.weight} onChange={e => setAssignment({ ...assignment, weight: e.target.value })} />
// // //       <button onClick={addAssignment}>Add Assignment</button>

// // //       {/* <ul>
// // //         {course.assignments.map((a, i) => (
// // //           <li key={i}>{a.name} – {a.grade}% ({a.weight}%)</li>
// // //         ))}
// // //       </ul> */}

// // // <ul>
// // //   {course.assignments.map((a) => (
// // //     <li key={a._id}>
// // //       {a.name} – {a.grade}% ({a.weight}%)
// // //       <button
// // //         style={{ marginLeft: '1rem', color: 'red' }}
// // //         onClick={() => deleteAssignment(a._id)}
// // //       >
// // //         Delete
// // //       </button>
// // //     </li>
// // //   ))}
// // // </ul>

// // //     </div>
// // //   )
// // // }

// // // import { useParams } from 'react-router-dom'
// // // import { useEffect, useState } from 'react'
// // // import API from '../api'

// // // export default function CourseDetail() {
// // //   const { id } = useParams()
// // //   const [course, setCourse] = useState(null)
// // //   const [assignment, setAssignment] = useState({ name: '', grade: '', weight: '' })

// // //   const fetchCourse = async () => {
// // //     const res = await API.get('/courses')
// // //     const match = res.data.find(c => c._id === id)
// // //     setCourse(match)
// // //   }

// // //   useEffect(() => { fetchCourse() }, [id])

// // //   const addAssignment = async () => {
// // //     await API.post(`/courses/${id}/assignments`, assignment)
// // //     setAssignment({ name: '', grade: '', weight: '' })
// // //     fetchCourse()
// // //   }

// // //   const deleteAssignment = async (assignmentId) => {
// // //     const confirmDelete = window.confirm('Are you sure you want to delete this assignment?');
// // //     if (!confirmDelete) return;
// // //     await API.delete(`/courses/${id}/assignments/${assignmentId}`);
// // //     fetchCourse(); // Refresh course data
// // //   };

// // //   if (!course) return <p>Loading...</p>

// // //   return (
// // //     <div className="max-w-6xl mx-auto p-6 bg-white page-container">
// // //       <div className="mb-8">
// // //         <h2 className="text-3xl font-bold text-gray-900 mb-2">{course.name}</h2>
// // //         <p className="text-xl text-gray-600">Average: <span className="font-semibold text-blue-600">{course.average.toFixed(2)}%</span></p>

       

// // //       </div>

// // //       <div className="mb-8 p-6 bg-gray-50 rounded-lg border">
// // //         <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Assignment</h3>
// // //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// // //           <input 
// // //             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
// // //             placeholder="Assignment name" 
// // //             value={assignment.name} 
// // //             onChange={e => setAssignment({ ...assignment, name: e.target.value })} 
// // //           />
// // //           <input 
// // //             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
// // //             type="number" 
// // //             placeholder="Grade (%)" 
// // //             value={assignment.grade} 
// // //             onChange={e => setAssignment({ ...assignment, grade: e.target.value })} 
// // //           />
// // //           <input 
// // //             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
// // //             type="number" 
// // //             placeholder="Weight (%)" 
// // //             value={assignment.weight} 
// // //             onChange={e => setAssignment({ ...assignment, weight: e.target.value })} 
// // //           />
// // //           <button 
// // //             className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// // //             onClick={addAssignment}
// // //           >
// // //             Add Assignment
// // //           </button>
// // //         </div>
// // //       </div>

// // //       <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
// // //         <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
// // //           <h3 className="text-lg font-semibold text-gray-900">Assignments</h3>
// // //         </div>
        
// // //         {course.assignments.length === 0 ? (
// // //           <div className="px-6 py-8 text-center text-gray-500">
// // //             No assignments yet. Add your first assignment above.
// // //           </div>
// // //         ) : (
// // //           <div className="overflow-x-auto">
// // //             <table className="w-full">
// // //               <thead className="bg-gray-50">
// // //                 <tr>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment Name</th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>

// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight Achieved</th>

// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="bg-white divide-y divide-gray-200">
// // //                 {course.assignments.map((a) => (
// // //                   <tr key={a._id} className="hover:bg-gray-50 transition-colors duration-150">
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{a.name}</td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
// // //                         {a.grade}%
// // //                       </span>
// // //                     </td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
// // //                         {a.weight}%
// // //                       </span>
// // //                     </td>
// // //                     {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //                       <button
// // //                         className="inline-flex items-center px-3 py-1.5 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 hover:border-red-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
// // //                         onClick={() => deleteAssignment(a._id)}
// // //                       >
// // //                         Delete
// // //                       </button>
// // //                     </td> */}

// // // <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //   {(parseFloat(a.grade) * parseFloat(a.weight) / 100).toFixed(2)}
// // // </td>
// // // <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// // //   <button
// // //     className="inline-flex items-center px-3 py-1.5 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 hover:border-red-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
// // //     onClick={() => deleteAssignment(a._id)}
// // //   >
// // //     Delete
// // //   </button>
// // // </td>

// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </div>
// // //   )
// // // }


// // import { useParams } from 'react-router-dom'
// // import { useEffect, useState } from 'react'
// // import API from '../api'

// // export default function CourseDetail() {
// //   const { id } = useParams()
// //   const [course, setCourse] = useState(null)
// //   const [assignment, setAssignment] = useState({ name: '', grade: '', weight: '' })

// //   const fetchCourse = async () => {
// //     const res = await API.get('/courses')
// //     const match = res.data.find(c => c._id === id)

// //     if (match.assignments.length > 0) {
// //       let weightedSum = 0

// //       match.assignments.forEach(a => {
// //         const grade = parseFloat(a.grade)
// //         const weight = parseFloat(a.weight)

// //         if (!isNaN(grade) && !isNaN(weight)) {
// //           weightedSum += (grade * weight) / 100 // weight achieved
// //         }
// //       })

// //       match.average = weightedSum
// //     } else {
// //       match.average = 0
// //     }

// //     setCourse(match)
// //   }

// //   useEffect(() => { fetchCourse() }, [id])

// //   const addAssignment = async () => {
// //     await API.post(`/courses/${id}/assignments`, assignment)
// //     setAssignment({ name: '', grade: '', weight: '' })
// //     fetchCourse()
// //   }

// //   const deleteAssignment = async (assignmentId) => {
// //     const confirmDelete = window.confirm('Are you sure you want to delete this assignment?');
// //     if (!confirmDelete) return;
// //     await API.delete(`/courses/${id}/assignments/${assignmentId}`);
// //     fetchCourse(); // Refresh course data
// //   };

// //   if (!course) return <p>Loading...</p>

// //   return (
// //     <div className="max-w-6xl mx-auto p-6 bg-white page-container">
// //       <div className="mb-8">
// //         <h2 className="text-3xl font-bold text-gray-900 mb-2">{course.name}</h2>
// //         <p className="text-xl text-gray-600">
// //           Average: <span className="font-semibold text-blue-600">{course.average.toFixed(2)}%</span>
// //         </p>
// //       </div>

// //       <div className="mb-8 p-6 bg-gray-50 rounded-lg border">
// //         <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Assignment</h3>
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
// //           <input 
// //             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
// //             placeholder="Assignment name" 
// //             value={assignment.name} 
// //             onChange={e => setAssignment({ ...assignment, name: e.target.value })} 
// //           />
// //           <input 
// //             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
// //             type="number" 
// //             placeholder="Grade (%)" 
// //             value={assignment.grade} 
// //             onChange={e => setAssignment({ ...assignment, grade: e.target.value })} 
// //           />
// //           <input 
// //             className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
// //             type="number" 
// //             placeholder="Weight (%)" 
// //             value={assignment.weight} 
// //             onChange={e => setAssignment({ ...assignment, weight: e.target.value })} 
// //           />
// //           <button 
// //             className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// //             onClick={addAssignment}
// //           >
// //             Add Assignment
// //           </button>
// //         </div>
// //       </div>

// //       <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
// //         <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
// //           <h3 className="text-lg font-semibold text-gray-900">Assignments</h3>
// //         </div>
        
// //         {course.assignments.length === 0 ? (
// //           <div className="px-6 py-8 text-center text-gray-500">
// //             No assignments yet. Add your first assignment above.
// //           </div>
// //         ) : (
// //           <div className="overflow-x-auto">
// //             <table className="w-full">
// //               <thead className="bg-gray-50">
// //                 <tr>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Assignment Name</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight Achieved</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="bg-white divide-y divide-gray-200">
// //                 {course.assignments.map((a) => (
// //                   <tr key={a._id} className="hover:bg-gray-50 transition-colors duration-150">
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{a.name}</td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// //                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
// //                         {a.grade}%
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// //                       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
// //                         {a.weight}%
// //                       </span>
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// //                       {(parseFloat(a.grade) * parseFloat(a.weight) / 100).toFixed(2)}
// //                     </td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
// //                       <button
// //                         className="inline-flex items-center px-3 py-1.5 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 hover:border-red-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
// //                         onClick={() => deleteAssignment(a._id)}
// //                       >
// //                         Delete
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   )
// // }

// import { useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import API from '../api';

// export default function CourseDetail() {
//   const { id } = useParams();
//   const [course, setCourse] = useState(null);
//   const [assignment, setAssignment] = useState({ name: '', grade: '', weight: '' });

//   const fetchCourse = async () => {
//     const res = await API.get('/courses');
//     const match = res.data.find(c => c._id === id);

//     if (match.assignments.length > 0) {
//       let weightedSum = 0;
//       match.assignments.forEach(a => {
//         const grade = parseFloat(a.grade);
//         const weight = parseFloat(a.weight);
//         if (!isNaN(grade) && !isNaN(weight)) {
//           weightedSum += (grade * weight) / 100;
//         }
//       });
//       match.average = weightedSum;
//     } else {
//       match.average = 0;
//     }

//     setCourse(match);
//   };

//   useEffect(() => {
//     fetchCourse();
//   }, [id]);

//   const addAssignment = async () => {
//     await API.post(`/courses/${id}/assignments`, assignment);
//     setAssignment({ name: '', grade: '', weight: '' });
//     fetchCourse();
//   };

//   const deleteAssignment = async (assignmentId) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this assignment?');
//     if (!confirmDelete) return;
//     await API.delete(`/courses/${id}/assignments/${assignmentId}`);
//     fetchCourse();
//   };

//   if (!course) return <p>Loading...</p>;

//   return (
//     <div className="course-detail-container">
//       <div className="course-header">
//         <h2>{course.name}</h2>
//         <p>Average: <span className="average">{course.average.toFixed(2)}%</span></p>
//       </div>

//       <div className="assignment-form">
//         <h3>Add New Assignment</h3>
//         <div className="form-grid">
//           <input
//             placeholder="Assignment name"
//             value={assignment.name}
//             onChange={e => setAssignment({ ...assignment, name: e.target.value })}
//           />
//           <input
//             type="number"
//             placeholder="Grade (%)"
//             value={assignment.grade}
//             onChange={e => setAssignment({ ...assignment, grade: e.target.value })}
//           />
//           <input
//             type="number"
//             placeholder="Weight (%)"
//             value={assignment.weight}
//             onChange={e => setAssignment({ ...assignment, weight: e.target.value })}
//           />
//           <button onClick={addAssignment}>Add Assignment</button>
//         </div>
//       </div>

//       <div className="assignment-list">
//         <h3>Assignments</h3>
//         {course.assignments.length === 0 ? (
//           <p className="no-assignments">No assignments yet. Add your first assignment above.</p>
//         ) : (
//           <table>
//             <thead>
//               <tr>
//                 <th>Assignment Name</th>
//                 <th>Grade</th>
//                 <th>Weight</th>
//                 <th>Weight Achieved</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {course.assignments.map(a => (
//                 <tr key={a._id}>
//                   <td>{a.name}</td>
//                   <td><span className="badge green">{a.grade}%</span></td>
//                   <td><span className="badge blue">{a.weight}%</span></td>
//                   <td>{(parseFloat(a.grade) * parseFloat(a.weight) / 100).toFixed(2)}</td>
//                   <td>
//                     <button className="delete-btn" onClick={() => deleteAssignment(a._id)}>
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }


import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../api';

export default function CourseDetail() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [assignment, setAssignment] = useState({ name: '', grade: '', weight: '' });

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', grade: '', weight: '' });

  const fetchCourse = async () => {
    const res = await API.get('/courses');
    const match = res.data.find(c => c._id === id);

    if (match.assignments.length > 0) {
      let weightedSum = 0;
      match.assignments.forEach(a => {
        const grade = parseFloat(a.grade);
        const weight = parseFloat(a.weight);
        if (!isNaN(grade) && !isNaN(weight)) {
          weightedSum += (grade * weight) / 100;
        }
      });
      match.average = weightedSum;
    } else {
      match.average = 0;
    }

    setCourse(match);
  };

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const addAssignment = async () => {
    await API.post(`/courses/${id}/assignments`, assignment);
    setAssignment({ name: '', grade: '', weight: '' });
    fetchCourse();
  };

  const deleteAssignment = async (assignmentId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this assignment?');
    if (!confirmDelete) return;
    await API.delete(`/courses/${id}/assignments/${assignmentId}`);
    fetchCourse();
  };

  // Begin editing an assignment
  const startEdit = (a) => {
    setEditingId(a._id);
    setEditForm({ name: a.name, grade: a.grade, weight: a.weight });
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({ name: '', grade: '', weight: '' });
  };

  // Save edited assignment
  const saveEdit = async (assignmentId) => {
    try {
      await API.put(`/courses/${id}/assignments/${assignmentId}`, editForm);
      setEditingId(null);
      fetchCourse();
    } catch (err) {
      console.error('Failed to save assignment', err);
      alert('Failed to save assignment');
    }
  };

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-detail-container">
      <div className="course-header">
        <h2>{course.name}</h2>
        <p>
          Average: <span className="average">{course.average.toFixed(2)}%</span>
        </p>
      </div>

      <div className="assignment-form">
        <h3>Add New Assignment</h3>
        <div className="form-grid">
          <input
            placeholder="Assignment name"
            value={assignment.name}
            onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Grade (%)"
            value={assignment.grade}
            onChange={(e) => setAssignment({ ...assignment, grade: e.target.value })}
          />
          <input
            type="number"
            placeholder="Weight (%)"
            value={assignment.weight}
            onChange={(e) => setAssignment({ ...assignment, weight: e.target.value })}
          />
          <button onClick={addAssignment}>Add Assignment</button>
        </div>
      </div>

      <div className="assignment-list">
        <h3>Assignments</h3>
        {course.assignments.length === 0 ? (
          <p className="no-assignments">No assignments yet. Add your first assignment above.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Assignment Name</th>
                <th>Grade</th>
                <th>Weight</th>
                <th>Weight Achieved</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {course.assignments.map((a) => {
                const isEditing = editingId === a._id;
                return (
                  <tr key={a._id}>
                    <td>
                      {isEditing ? (
                        <input
                          value={editForm.name}
                          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                        />
                      ) : (
                        a.name
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <input
                          type="number"
                          value={editForm.grade}
                          onChange={(e) => setEditForm({ ...editForm, grade: e.target.value })}
                        />
                      ) : (
                        <span className="badge green">{a.grade}%</span>
                      )}
                    </td>
                    <td>
                      {isEditing ? (
                        <input
                          type="number"
                          value={editForm.weight}
                          onChange={(e) => setEditForm({ ...editForm, weight: e.target.value })}
                        />
                      ) : (
                        <span className="badge blue">{a.weight}%</span>
                      )}
                    </td>
                    <td>{(parseFloat(a.grade) * parseFloat(a.weight) / 100).toFixed(2)}</td>
                    <td>
                      {isEditing ? (
                        <>
                          <button className="save-btn" onClick={() => saveEdit(a._id)}>
                            Save
                          </button>
                          <button className="cancel-btn" onClick={cancelEdit}>
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="edit-btn" onClick={() => startEdit(a)}>
                            Edit
                          </button>
                          <button className="delete-btn" onClick={() => deleteAssignment(a._id)}>
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
