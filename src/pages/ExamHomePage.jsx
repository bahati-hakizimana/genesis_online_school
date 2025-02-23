import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Use useParams to access URL params
import DOMPurify from "dompurify"; // Import DOMPurify for sanitizing HTML content

const ExamHomePage = () => {
  const { year } = useParams(); // Get the year from URL params
  const [exams, setExams] = useState([]);

  useEffect(() => {
    // Fetch exams based on the selected year
    fetch(`https://api.genesisonlineschool.rw/api/exams/year/${year}/`)
      .then((response) => response.json())
      .then((data) => {
        setExams(data); // Update state with exams of the selected year
      })
      .catch((error) => console.error("Error fetching exams by year:", error));
  }, [year]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-green-200 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4 text-center">EXAM DETAILS FOR {year}</h2>

        {exams.length === 0 ? (
          <p>No exams found for this year.</p>
        ) : (
          exams.map((exam) => (
            <div key={exam.id} className="bg-white p-4 rounded-md shadow-md mb-4">
              <h3 className="text-xl font-semibold">{exam.title}</h3>
              <p className="text-sm text-gray-700">Course: {exam.course_name}</p>
              <p className="text-sm text-gray-700">Level: {exam.level}</p>
              {/* <p className="text-sm text-gray-700">Price: {exam.price} RWF</p> */}
              {/* Display sanitized content */}
              <div
                className="exam-content mt-2"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(exam.content), // Sanitize content before rendering
                }}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ExamHomePage;
