import React, { useState } from "react";

const Notes = () => {

  const [secondaryTab, setSecondaryTab] = useState("OLevel");
  const [primaryTab, setPrimaryTab] = useState("stdVII");
  const [examSeriesTab, setExamSeriesTab] = useState("formI");
  const [regionalExamTab, setRegionalExamTab] = useState("formIV");
  const [primarySeriesTab, setPrimarySeriesTab] = useState("stdVII");
  const [secondarySubjectNotesTab, setSecondarySubjectNotesTab] = useState("formIV");
  const [primarySubjectTab, setPrimarySubjectTab] = useState("stdVII");

  const [secondaryDropdownOpen, setSecondaryDropdownOpen] = useState({});
  const [primaryDropdownOpen, setPrimaryDropdownOpen] = useState({});
  const [examSeriesDropdownOpen, setExamSeriesDropdownOpen] = useState({});
  const [regionalExamDropdownOpen, setRegionalExamDropdownOpen] = useState({});
  const [primarySeriesDropdownOpen, setPrimarySeriesDropdownOpen] = useState({});
  const [primarySubjectDropdownOpen, setPrimarySubjectDropdownOpen] = useState({});

  const formData = {
    OLevel: [
      "HISTORY", "GEOGRAPHY", "PHYSICS", "BIOLOGY", "CHEMISTRY", 
      "MATHEMATICS",  "ENGLISH"
    ],
    ALevel: [
     "GEOGRAPHY", "PHYSICS", "BIOLOGY", "CHEMISTRY", "MATHEMATICS", "ENGLISH"
    ],
    formVI: ["SCIENCE", "SOCIAL STUDIES", "KINYARWANDA", "MATHEMATICS", "FRENCH", "ENGLISH"],
    formV: ["SCIENCE", "SOCIAL STUDIES", "KINYARWANDA", "MATHEMATICS", "FRENCH", "ENGLISH"],
    formIV: ["SCIENCE", "SOCIAL STUDIES", "KINYARWANDA", "MATHEMATICS", "FRENCH", "ENGLISH"],
    formIII: ["SCIENCE", "SOCIAL STUDIES", "KINYARWANDA", "MATHEMATICS", "FRENCH", "ENGLISH"],
    formII: ["SCIENCE", "SOCIAL STUDIES", "KINYARWANDA", "MATHEMATICS", "FRENCH", "ENGLISH"],
    formI: ["SCIENCE", "SOCIAL STUDIES", "KINYARWANDA", "MATHEMATICS", "FRENCH", "ENGLISH"],
    stdVII: [
      "SCIENCE", "SOCIAL STUDIES", "CIVIC & MORAL", "ENGLISH", "KISWAHILI", 
      "MATHEMATICS", "HISABATI", "SAYANSI", "MAARIFA JAMII", "URAI NA MAADILI"
    ],
    stdVI: ["MATHEMATICS", "SCIENCE", "ENGLISH", "KISWAHILI"],
    stdV: ["SCIENCE", "MATHEMATICS", "KISWAHILI", "SOCIAL STUDIES"],
    stdIV: ["SCIENCE", "ENGLISH", "MATHEMATICS", "KISWAHILI"],
    stdIII: ["MATHEMATICS", "SCIENCE", "ENGLISH", "KISWAHILI"],
  };

  const primarySubjectData = {
    stdVII: [
      "SCIENCE", "SOCIAL STUDIES", "CIVIC & MORAL", "ENGLISH", "KISWAHILI",
      "MATHEMATICS", "HISABATI", "SAYANSI", "MAARIFA JAMII", "URAI NA MAADILI"
    ],
    stdVI: ["MATHEMATICS", "SCIENCE", "ENGLISH", "KISWAHILI"],
    stdV: ["SCIENCE", "MATHEMATICS", "KISWAHILI", "SOCIAL STUDIES"],
    stdIV: ["SCIENCE", "ENGLISH", "MATHEMATICS", "KISWAHILI"],
    stdIII: ["MATHEMATICS", "SCIENCE", "ENGLISH", "KISWAHILI"],
  };

  const toggleDropdown = (setDropdownState, dropdownState, subject) => {
    setDropdownState((prev) => ({
      ...prev,
      [subject]: !dropdownState[subject],
    }));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Secondary NECTA Reviews */}
      <div className="bg-green-200 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4 text-center"> NOTES REVIEWS (OLEVEL & ALEVEL)</h2>
        <div className="flex space-x-2 border-b pb-2 justify-start overflow-x-auto">
          {[ "ALevel", "OLevel"].map((tab) => (
            <button
              key={tab}
              className={`py-1 px-3 text-sm font-semibold rounded-t-md ${secondaryTab === tab ? "bg-white text-blue-500 border-t border-l border-r" : "text-gray-600"}`}
              onClick={() => setSecondaryTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="bg-green-100 p-4 rounded-b-md shadow-md">
          <h3 className="text-md font-semibold mb-4 text-center">{secondaryTab.toUpperCase()} NOTES VIEW</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {formData[secondaryTab]?.map((subject) => (
              <div key={subject} className="relative">
                <button
                  className="w-full py-2 px-3 text-xs sm:text-sm bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 flex justify-between items-center"
                  onClick={() => toggleDropdown(setSecondaryDropdownOpen, secondaryDropdownOpen, subject)}
                >
                  {subject} <span>▼</span>
                </button>
                {secondaryDropdownOpen[subject] && (
                  <div className="absolute top-10 left-0 w-full bg-white border rounded-lg shadow-lg z-10">
                    {Array.from({ length: 23 }, (_, i) => 2003 + i).map((year) => (
                      <a
                        key={year}
                        href={`/content/${secondaryTab}/${subject.toLowerCase()}/${year}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {year}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Secondary Exam Series */}
      <div className="bg-green-200 mt-8 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-bold mb-4 text-center">Primary Notes View</h2>
        <div className="flex space-x-2 border-b pb-2 justify-start overflow-x-auto">
          {["formI", "formII", "formIII", "formIV", "formV", "formVI",].map((tab) => (
            <button
              key={tab}
              className={`py-1 px-3 text-sm font-semibold rounded-t-md ${examSeriesTab === tab ? "bg-white text-blue-500 border-t border-l border-r" : "text-gray-600"}`}
              onClick={() => setExamSeriesTab(tab)}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="bg-green-100 p-4 rounded-b-md shadow-md">
          <h3 className="text-md font-semibold mb-4 text-center">{examSeriesTab.toUpperCase()} PRIMARY NOTES</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {formData[examSeriesTab]?.map((subject) => (
              <div key={subject} className="relative">
                <button
                  className="w-full py-2 px-3 text-xs sm:text-sm bg-blue-500 text-white font-medium rounded-md shadow hover:bg-blue-600 flex justify-between items-center"
                  onClick={() => toggleDropdown(setExamSeriesDropdownOpen, examSeriesDropdownOpen, subject)}
                >
                  {subject} <span>▼</span>
                </button>
                {examSeriesDropdownOpen[subject] && (
                  <div className="absolute top-10 left-0 w-full bg-white border rounded-lg shadow-lg z-10">
                    {Array.from({ length: 23 }, (_, i) => 2003 + i).map((year) => (
                      <a
                        key={year}
                        href={`/content/${examSeriesTab}/${subject.toLowerCase()}/${year}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                      >
                        {year}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
