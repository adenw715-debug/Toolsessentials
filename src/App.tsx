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
    name: "Chromebooks",
    icon: "",
    description: "Lightweight devices designed for web-based learning, Google Workspace apps, and student assignments.",
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
    description: "A chargeable cart carrying Chromebooks, which can be moved from class to class.",
    image: cowImage
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
      "Bee-Bot": "1 per section",
      "Tablet": "6 per section",
      "MMP Package (MMP + speaker + Chromecast + Installation)": "1 per section",
      " Computer Headset": "6 per section"
    }
  },
  {
    name: "Lower Primary (Grade 1, 2)",
    shortName: "Lower Primary",
    tools: {
      "Student's Chromebooks": "1 device for 6 students / (5 per section)",
      "MMP package (MMP + Speakers +  Chromecast+ installation)": "1 per section",
      "COW": "1 cow per 5 sections"
    }
  },
  {
    name: "Upper Primary (Grade 3, 4, 5)",
    shortName: "Upper Primary",
    tools: {
      "Student's Chromebooks": "1 device for 6 students (5 per section)",
      "MMP package (MMP + Speakers +  Chromecast+ installation)": "1 per section",
      "Class 5 Students will have personal Chromebooks as per BYOAD programme": ""
    }
  },
  {
    name: "Middle School (Grade 6, 7, 8)",
    shortName: "Middle School",
    tools: {
      "MMP package (MMP + Speakers +  Chromecast+ installation)": "1 per section",
      "Chromebooks": "Students will have personal Chromebooks as per the BYOAD programme"
    }
  },
  {
    name: "Secondary School (Grade 9, 10, 11)",
    shortName: "Secondary School",
    tools: {
      "MMP package (MMP + Speakers +  Chromecast+ installation)": "1 per section",
      "Pearson Qualification": "Students will have personal Chromebooks as per the BYOAD programme"
    }
  },
  {
    name: "BCP",
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
    // For the matrix, always show a tick for MMPs except Early Years
    if (toolName === "MMPs") {
      return true;
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
            The Beaconhouse EdTech Ecosystem (BEE) leverages innovative classroom technologies to foster an engaging and dynamic learning environment. Designed to support this programme, these technologies enable seamless integration of digital tools, interactive content, and collaborative learning experiences. The following outlines the essential technology requirements that are key to delivering the objectives of BEE and ensuring effective, student-centred education across classrooms.
          </p>
        </div>

        {/* Interactive Matrix Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6">
            <h2 className="text-2xl font-bold">Technology Requirements Matrix</h2>
            <p className="text-indigo-100 mt-2">Click on Grade Levels and the tech tools to learn more</p>
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
                        <td colSpan={techTools.length + 1} className="px-0 py-6 border-b">
                          <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                              Provisions for {grade.name}
                            </h4>
                            {grade.name === "Early Years (PreNursery, Nursery, KG)" && (
                              <div className="overflow-x-auto px-6">
                                <table className="w-full border-collapse border-2 border-gray-300 rounded-lg overflow-hidden" style={{tableLayout: 'fixed'}}>
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '18%', wordBreak: 'normal', hyphens: 'auto'}}>Grade Level</th>
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '18%', wordBreak: 'normal', hyphens: 'auto'}}>Bee-Bot</th>
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '18%', wordBreak: 'normal', hyphens: 'auto'}}>Tablet</th>
                                      <th className="px-3 py-3 text-center text-sm font-semibold align-middle" style={{width: '28%', wordBreak: 'normal', hyphens: 'auto', lineHeight: '1.4', minHeight: '70px'}}>
                                        MMP package<br/><span className="text-xs italic">(MMP + speakers + Chromecast + installation)</span>
                                      </th>
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '18%', wordBreak: 'normal', hyphens: 'auto'}}>Computer<br/>Headset</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Pre Nursery</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">6 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">6 per section</div></td>
                                    </tr>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Nursery</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">6 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">6 per section</div></td>
                                    </tr>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">KG</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">6 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">6 per section</div></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            )}
                            
                            {grade.name === "Lower Primary (Grade 1, 2)" && (
                              <div className="overflow-x-auto px-6">
                                <table className="w-full border-collapse border-2 border-gray-300 rounded-lg overflow-hidden" style={{tableLayout: 'fixed'}}>
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '22%', wordBreak: 'normal', hyphens: 'auto'}}>Grade Level</th>
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '26%', wordBreak: 'normal', hyphens: 'auto'}}>Student's Chromebooks</th>
                                      <th className="px-3 py-3 text-center text-sm font-semibold align-middle" style={{width: '32%', wordBreak: 'normal', hyphens: 'auto', lineHeight: '1.4', minHeight: '70px'}}>
                                        MMP Package<br/><span className="text-xs italic">(MMP+Speakers+Chromecast+Installation)</span>
                                      </th>
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '20%', wordBreak: 'normal', hyphens: 'auto'}}>COW</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Grade 1</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 device for 6 students<br/>5 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 cow per 5 sections</div></td>
                                    </tr>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Grade 2</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 device for 6 students<br/>5 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 cow per 5 sections</div></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            )}
                            
                            {grade.name === "Upper Primary (Grade 3, 4, 5)" && (
                              <div className="overflow-x-auto px-6">
                                <table className="w-full border-collapse border-2 border-gray-300 rounded-lg overflow-hidden" style={{tableLayout: 'fixed'}}>
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '22%', wordBreak: 'normal', hyphens: 'auto'}}>Grade Level</th>
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '26%', wordBreak: 'normal', hyphens: 'auto'}}>Student's Chromebooks</th>
                                      <th className="px-3 py-3 text-center text-sm font-semibold align-middle" style={{width: '26%', wordBreak: 'normal', hyphens: 'auto', lineHeight: '1.4', minHeight: '70px'}}>
                                        MMP Package<br/><span className="text-xs italic">(MMP+Speakers+Chromecast+Installation)</span>
                                      </th>
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '26%', wordBreak: 'normal', hyphens: 'auto'}}>Teacher's Chromebook</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Grade 3</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 device for 6 students<br/>5 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">N/A</div></td>
                                    </tr>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Grade 4</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 device for 6 students<br/>5 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">N/A</div></td>
                                    </tr>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Grade 5</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">Class 5 Students will have personal Chromebooks as per BYOAD programme</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 Chromebook per teacher </div></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            )}
                            
                            {grade.name === "Middle School (Grade 6, 7, 8)" && (
                              <div className="overflow-x-auto px-6">
                                <table className="w-full border-collapse border-2 border-gray-300 rounded-lg overflow-hidden" style={{tableLayout: 'fixed'}}>
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '14%', wordBreak: 'normal', hyphens: 'auto'}}>Grade Level</th>
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '28%', wordBreak: 'normal', hyphens: 'auto'}}>Student's Chromebooks</th>
                                      <th className="px-3 py-3 text-center text-sm font-semibold align-middle" style={{width: '30%', wordBreak: 'normal', hyphens: 'auto', lineHeight: '1.4', minHeight: '70px'}}>
                                        MMP package<br/><span className="text-xs italic">(MMP + speakers + Chromecast + installation)</span>
                                      </th>
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '28%', wordBreak: 'normal', hyphens: 'auto'}}>Teacher's Chromebook</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Grade 6</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">Students will have personal Chromebooks as per the BYOAD programme</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 Chromebook per teacher </div></td>
                                    </tr>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Grade 7</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">Students will have personal Chromebooks as per the BYOAD programme</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 Chromebook per teacher </div></td>
                                    </tr>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Grade 8</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">Students will have personal Chromebooks as per the BYOAD programme</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 Chromebook per teacher </div></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            )}
                            
                            {grade.name === "Secondary School (Grade 9, 10, 11)" && (
                              <div className="overflow-x-auto px-6">
                                <table className="w-full border-collapse border-2 border-gray-300 rounded-lg overflow-hidden" style={{tableLayout: 'fixed'}}>
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '22%', wordBreak: 'normal', hyphens: 'auto'}}>Grade Level</th>
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '44%', wordBreak: 'normal', hyphens: 'auto'}}>Student's Chromebook</th>
                                      <th className="px-3 py-3 text-center text-sm font-semibold align-middle" style={{width: '34%', wordBreak: 'normal', hyphens: 'auto', lineHeight: '1.4', minHeight: '70px'}}>
                                        MMP package<br/><span className="text-xs italic">(MMP + speakers + Chromecast + installation)</span>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Grade 9</td>
                                      <td className="px-3 py-2 text-center">
                                        <div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">
                                          N/A for O-Levels / IGCSE / Matric<br/>
                                          Personal Chromebook -BYOAD for Pearson IGCSE<br/>
                                          Personal Laptops - BYOD for TNS, Newlands
                                        </div>
                                      </td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                    </tr>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Grade 10</td>
                                      <td className="px-3 py-2 text-center">
                                        <div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">
                                          N/A for O-Levels / IGCSE / Matric<br/>
                                          Personal Chromebook -BYOAD for Pearson IGCSE<br/>
                                          Personal Laptops - BYOD for TNS, Newlands
                                        </div>
                                      </td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                    </tr>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">Grade 11</td>
                                      <td className="px-3 py-2 text-center">
                                        <div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">
                                          N/A for O-Levels / IGCSE / Matric<br/>
                                          Personal Chromebook -BYOAD for Pearson IGCSE<br/>
                                          Personal Laptops - BYOD for TNS, Newlands
                                        </div>
                                      </td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            )}
                            
                            {grade.name === "BCP" && (
                              <div className="overflow-x-auto px-6">
                                <table className="w-full border-collapse border-2 border-gray-300 rounded-lg overflow-hidden" style={{tableLayout: 'fixed'}}>
                                  <thead>
                                    <tr className="bg-gray-100">
                                      <th className="px-3 py-2 text-center text-sm font-semibold align-top" style={{width: '32%', wordBreak: 'normal', hyphens: 'auto'}}>Grade Level</th>
                                      <th className="px-3 py-3 text-center text-sm font-semibold align-middle" style={{width: '68%', wordBreak: 'normal', hyphens: 'auto', lineHeight: '1.4', minHeight: '70px'}}>
                                        MMP package<br/><span className="text-xs italic">(MMP + speakers + Chromecast + installation)</span>
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">A-1</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                    </tr>
                                    <tr>
                                      <td className="px-3 py-2 font-medium text-sm text-center">A-2</td>
                                      <td className="px-3 py-2 text-center"><div className="bg-blue-50 rounded-lg px-2 py-1 text-sm">1 per section</div></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            )}
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

        {/* Implementation Guidelines */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-amber-500">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-amber-100 text-amber-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
              📋
            </span>
            Implementation Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                <p className="text-gray-700">Special attention should be given to allocating the budget in CAPEX for purchasing and repairing these devices to ensure consistent use of technology across Beaconhouse.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                <p className="text-gray-700">Any repair or damage is the responsibility of the School, with support from ITO/Regional Office.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                <p className="text-gray-700">Heads must maintain an updated record of all tech devices, ensuring details of both functional equipment and those requiring repair are documented.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                <p className="text-gray-700">At least once in a term, an audit of all devices should be conducted by the School Head or designated staff, updating the central inventory record.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</div>
                <p className="text-gray-700">Schools should implement a fair rotation system for shared devices.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">6</div>
                <p className="text-gray-700">The ITO team should be aligned to update apps/software monthly and check functionality.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 text-indigo-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">7</div>
                <p className="text-gray-700">Students should not use Tablets/Chromebooks without teacher supervision.</p>
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
            <p className="leading-relaxed">
              In the academic year 2024-25, MMPs were provided by the Head Office through a special budget. However, MMPs are part of the school CAPEX items, and schools are required to order new or replacement MMPs as per section requirements.
            </p>
            <br />
            <p className="leading-relaxed">Schools with BYOAD classes received Chromebook cabinets with 100% provision for all sections in classes 5-8. These are now CAPEX items, and schools are responsible for ordering replacements for damaged units using their own budget.</p>
            <br />
            <p className="leading-relaxed">As part of the BYOAD programme, Chromebooks have been provided by Beaconhouse to the teachers Grade 5 to 8,Pearson and Well-being Counselors (Middle school) excluding P.E, Music, and Sindhi.</p>
            <br />
            <p className="leading-relaxed">In the Early Years, schools will continue to use the IWB (Interactive Whiteboard) they already have. However, if any of these boards become non-functional or reach the end of their service life, they will be replaced with MMPs.(IB schools may receive special consideration or exemption in terms of replacing IWB, depending on the Regional Director’s decision)</p>
            <br />
            <p className="leading-relaxed">For Early Years, speakers are included in the MMP package, eliminating the need for a separate purchase of this item in future.</p>
            <br />
           <p className="leading-relaxed">The use of Bee-Bots in Early Years classes is not applicable to TNS/Newlands campuses.</p>
            <br />
            <p className="leading-relaxed">The installation of LEDs in classrooms is at the discretion of the campus and may be carried out based on a specific programme as a special provision and approval.</p>
          </div>
        </div>
      </div>

      {/* Tool Detail Modal */}
      {selectedTool && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999] p-4"
          onClick={() => setSelectedTool(null)}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedTool.name === "MMPs" ? "MMPs (Multimedia Projectors)" : 
                     selectedTool.name === "COW" ? "COW (Computer on wheels)" : 
                     selectedTool.name}
                  </h3>
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
