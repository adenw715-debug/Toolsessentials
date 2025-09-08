import React, { useState } from 'react';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import beebotImage from '../beebot.png';
import eyerisImage from '../eyeris.png';
import cowImage from '../cow.png';
import chromebookimage from '../chromebook.png'
import speakerimage from '../speaker.png'
import mediaimage from '../media.png'
interface TechTool {
  name: string;
  icon: string;
  description: string;
  image: string;
}

interface GradeLevel {
  name: string;
  shortName: string;
  tools: { [key: string]: string };
}

const techTools: TechTool[] = [
  {
    name: "Bee-Bot",
    icon: "",
    description: "A small programmable floor robot designed for young learners.",
    image: beebotImage
  },
  {
    name: "Tablet",
    icon: "",
    description: "A portable touchscreen device used for interactive learning, apps, reading digital books, and accessing online resources.",
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Speakers",
    icon: "",
    description: "Audio devices that amplify sound for the entire class. They are used with multimedia lessons, videos, music, and announcements.",
    image: speakerimage
  },
  {
    name: "Chromebooks",
    icon: "",
    description: "Lightweight laptops designed for web-based learning, Google Workspace apps, and student assignments.",
    image: chromebookimage
  },
  {
    name: "MMPs",
    icon: "",
    description: "Devices that project multimedia (videos, slides, animations) from a computer onto a large screen or wall, making teaching more visual and interactive.",
    image: mediaimage
  },
  {
    name: "COW",
    icon: "",
    description: "A mobile cart carrying laptops or tablets, which can be moved from class to class.",
    image: cowImage
  },
  {
    name: "Owey/EyeRIS",
    icon: "",
    description: "EyeRIS/Owey is an interactive classroom solution that turns any flat surface (like a wall or whiteboard) into a touch-enabled interactive board. It uses infrared sensors and optical tracking to detect touch or pen movement, allowing teachers and students to write, draw, and highlight directly on projected lessons.",
    image: eyerisImage
  },
  {
    name: " Computer Headset",
    icon: "",
    description: "A combination of headphones and microphone that allows students and teachers to listen clearly and speak during online classes or recordings.",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const gradeLevels: GradeLevel[] = [
  {
    name: "Early Years (PreNursery, Nursery, KG)",
    shortName: "Early Years",
    tools: {
      "Bee-Bot": "5 per 20 sections",
      "Tablet": "6 per section",
      "Owey/EyeRIS": "1 per 4 sections",
      "Speakers": "1 per Class",
      " Computer Headset": "6 per section"
    }
  },
  {
    name: "Lower Primary (Grade 1, 2, 3)",
    shortName: "Lower Primary",
    tools: {
      "Chromebooks": "5 per section",
      "MMP package (MMP + Speakers +  Chromecast+ installation)": "1 per section",
    
      "COW": "25 chromebooks per COW"
    }
  },
  {
    name: "Upper Primary (Grade 4, 5)",
    shortName: "Upper Primary",
    tools: {
      "MMP package (MMP + Speakers +  Chromecast+ installation)": "1 per section",
      
      "Chromebooks": "For class 5 as per BYOAD plan"
    }
  },
  {
    name: "Middle School (Grade 6, 7, 8)",
    shortName: "Middle School",
    tools: {
      "MMP package (MMP + Speakers +  Chromecast+ installation)": "1 per section",
      
      "Chromebooks": "As per BYOAD plan"
    }
  },
  {
    name: "Secondary School (Grade 9, 10, O-Level)",
    shortName: "Secondary School",
    tools: {
      "MMP package (MMP + Speakers +  Chromecast+ installation)": "1 per section",
  
    }
  },
  {
    name: "BCP (A-Level)",
    shortName: "BCP",
    tools: {
      "MMP package (MMP + Speakers +  Chromecast+ installation)": "1 per section",
    
    }
  }
];

function App() {
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedTool, setSelectedTool] = useState<TechTool | null>(null);

  const hasToolForGrade = (toolName: string, gradeLevel: GradeLevel): boolean => {
    // For the matrix, only show a tick for Speakers in Early Years
    if (toolName === "Speakers" && gradeLevel.shortName !== "Early Years") {
      return false;
    }
    return toolName in gradeLevel.tools;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg border-b-4 border-indigo-600">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-indigo-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <span className="bg-indigo-100 text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
              📚
            </span>
            Overview
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The Beaconhouse EdTech Ecosystem (BEE) leverages innovative classroom technologies to foster an engaging and dynamic learning environment. Designed to support the BEE programme, these technologies enable seamless integration of digital tools, interactive content, and collaborative learning experiences. The following outlines the essential technology requirements that are key to delivering the objectives of the BEE programme and ensuring effective, student-centered education across classrooms.
          </p>
        </div>

        {/* Interactive Matrix Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6">
            <h2 className="text-2xl font-bold">Technology Requirements Matrix</h2>
            <p className="text-indigo-100 mt-2">Click on grade levels to view provisions, or click on tech tools to learn more</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">
                    Grade Levels
                  </th>
                  {techTools.map((tool) => (
                    <th 
                      key={tool.name}
                      className="px-4 py-4 text-center text-sm font-semibold text-gray-900 border-b cursor-pointer hover:bg-indigo-50 transition-colors duration-200"
                      onClick={() => setSelectedTool(tool)}
                    >
                      <div className="flex flex-col items-center space-y-1">
                        <span className="text-2xl">{tool.icon}</span>
                        <span className="text-xs leading-tight">{tool.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {gradeLevels.map((grade, index) => (
                  <React.Fragment key={grade.name}>
                    <tr 
                      className={`cursor-pointer hover:bg-blue-50 transition-colors duration-200 ${
                        selectedGrade === grade.name ? 'bg-blue-100' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                      onClick={() => setSelectedGrade(selectedGrade === grade.name ? null : grade.name)}
                    >
                      <td className="px-6 py-4 font-medium text-gray-900 border-b">
                        <div className="flex items-center">
                          {selectedGrade === grade.name ? (
                            <ChevronDown className="w-4 h-4 mr-2 text-indigo-600" />
                          ) : (
                            <ChevronRight className="w-4 h-4 mr-2 text-gray-400" />
                          )}
                          {grade.shortName}
                        </div>
                      </td>
                      {techTools.map((tool) => (
                        <td key={tool.name} className="px-4 py-4 text-center border-b">
                          {hasToolForGrade(tool.name, grade) ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-600 rounded-full">
                              ✓
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-400 rounded-full">
                              —
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                    {selectedGrade === grade.name && (
                      <tr className="bg-blue-50">
                        <td colSpan={techTools.length + 1} className="px-6 py-6 border-b">
                          <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                              Provisions for {grade.name}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {Object.entries(grade.tools).map(([toolName, provision]) => (
                                <div key={toolName} className="bg-gray-50 rounded-lg p-4">
                                  <div className="flex items-center mb-2">
                                    <span className="text-lg mr-2">
                                      {techTools.find(t => t.name === toolName)?.icon}
                                    </span>
                                    <span className="font-medium text-gray-900">{toolName}</span>
                                  </div>
                                  <p className="text-sm text-indigo-600 font-semibold">{provision}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Implementation Instructions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-amber-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
              📋
            </span>
            Implementation Instructions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                <p className="text-gray-700">Special attention should be given to allocating the budget for purchasing these devices to ensure consistent use across all classes.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                <p className="text-gray-700">Schools should implement a fair rotation system for shared devices.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                <p className="text-gray-700">The ITO team should be aligned to update apps/software monthly and check functionality.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                <p className="text-gray-700">Any repair or damage is the responsibility of the School, with support from ITO/Regional Office.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</div>
                <p className="text-gray-700">Heads must maintain an updated record of all tech devices, ensuring details of both functional equipment and those requiring repair are documented.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">6</div>
                <p className="text-gray-700">Students should not use Tablets/ without teacher supervision.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">7</div>
                <p className="text-gray-700">A quarterly/once in a term audit of all devices should be conducted by the School Head or designated staff, updating the central inventory record.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">8</div>
                <p className="text-gray-700">Schools must budget annually for device purchasing/repair costs to reduce disruption.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Note */}
        <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl shadow-lg p-8 text-white">
          <div className="flex items-center mb-4">
            <div className="bg-white bg-opacity-20 rounded-full p-3 mr-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h2 className="text-2xl font-bold">Special Note</h2>
          </div>
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <p className="text-lg leading-relaxed">
              In the academic year 2024-25, MMPs were provided by the Head Office through a special budget; however, MMPs are part of the school CAPEX items, and schools are required to order new or replacement as per section requirements.
            </p>
            <br />
            <p>Schools with BYOAD classes received Chromebook cabinets with 100% provision for all sections in classes 5-8. These are now CAPEX items, and schools are responsible for ordering replacements for damaged units using their own budget</p>
          </div>
        </div>
      </div>

      {/* Tool Detail Modal */}
      {selectedTool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedTool(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{selectedTool.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedTool.name}</h3>
                </div>
                
                <div className="mb-6">
                  <img 
                    src={selectedTool.image} 
                    alt={selectedTool.name}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 leading-relaxed">{selectedTool.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;