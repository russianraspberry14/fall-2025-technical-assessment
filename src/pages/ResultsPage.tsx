import {useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import StarRating from './StarRating';
export default function ResultsPage() {
    interface Course {
        name: string;
        averageGrade: string;
      }
    interface Professor {
        name: string;
        average_rating: number;
        courses: string[];
        image?: string;
      }
    const location = useLocation();
    const navigate = useNavigate();
    const query = new URLSearchParams(location.search);
    const professorName = query.get('name');


    const [professorData, setProfessorData] = useState<Professor | null>(null);
    const [selectedCourse, setSelectedCourse] = useState<string>("");
    const [coursesData, setCoursesData] = useState<Course[]>([]);
    const [selectedCourseAvg, setSelectedCourseAvg] = useState<number | null>(null);

    useEffect(() => {
        if (!professorName) return;

        async function fetchData() {
            try {
                const profRes = await axios.get('https://planetterp.com/api/v1/professor', {
                params: { name: professorName },
                });
                setProfessorData(profRes.data);

                const courses = profRes.data.courses || [];
                const coursePromises = courses.map((courseName: any) =>
                axios.get('https://planetterp.com/api/v1/course', { params: { name: courseName } })
                );
                const courseResults = await Promise.all(coursePromises);
                setCoursesData(courseResults.map(res => res.data));
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, [professorName]);
    useEffect(() => {
        if (!selectedCourse || !professorName) return;
    
        async function fetchCourseGrades() {
          try {
            const gradesRes = await axios.get('https://planetterp.com/api/v1/grades', {
              params: { course: selectedCourse, professor: professorName },
            });
    
            const grades = gradesRes.data;
            if (!Array.isArray(grades) || grades.length === 0) {
              setSelectedCourseAvg(null);
              return;
            }
            let totalPoints = 0;
            let totalCount = 0;
            const gpaScale: Record<string, number> = {
              "A+": 4.0, "A": 4.0, "A-": 3.7,
              "B+": 3.3, "B": 3.0, "B-": 2.7,
              "C+": 2.3, "C": 2.0, "C-": 1.7,
              "D+": 1.3, "D": 1.0, "D-": 0.7,
              "F": 0.0,
            };
    
            grades.forEach((section: any) => {
              for (const grade in gpaScale) {
                const count = section[grade] || 0;
                totalPoints += gpaScale[grade] * count;
                totalCount += count;
              }
            });
    
            setSelectedCourseAvg(totalCount > 0 ? totalPoints / totalCount : null);
          } catch (err) {
            console.error(err);
            setSelectedCourseAvg(null);
          }
        }
    
        fetchCourseGrades();
      }, [selectedCourse, professorName]);
    
    return (
        <div className="bg-white w-screen h-screen flex flex-col items-center px-4 sm:px-6 md:px-8">
            <div className="flex flex-col sm:flex-row items-center w-full max-w-[1200px] mt-[30px] sm:mt-[50px] gap-4 sm:gap-0">
                <div className="w-full sm:w-auto">
                    <button onClick= {()=> navigate(-1)} className="text-[#6E6E6E] text-center bg-white border-none text-[18px] sm:text-[20px] sm:mr-[40px] md:mr-[60px]"> <img src="/arrow2.svg" className="inline-block mr-[10px] sm:mr-[20px]"/>  Return</button>
                </div>
                <div className="flex w-full sm:w-auto">
                    <input type="text" placeholder="Enter Professor Name..." className="h-[52px] border text-black bg-white border-black-1000 rounded-l-lg w-full sm:w-[350px] md:w-[500px] lg:w-[750px] p-[12px] pl-[20px] sm:pl-[40px]" />
                    <button className="bg-[#39302B] text-white rounded-l-none rounded-r-lg w-[72px] h-[52px]">
                        <img src="/search.png" alt="Search" className="w-[30px] h-[30px] inline-block" />
                    </button>
                </div>
                
            </div>
            <h1 className="font-inter self-start text-[20px] sm:text-[22.5px] font-bold text-[#39302B] mt-[30px] sm:mt-[40px] ml-[20px] sm:ml-[100px] md:ml-[200px] lg:ml-[400px] mb-[30px] sm:mb-[40px]"> Search Results</h1>
            <div className="w-full px-4 sm:px-0 max-w-[1000px]">
                {professorData && (
                    <div className="w-full border p-4 sm:p-6 rounded-lg bg-gray-50 text-black font-inter">
                        <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
                            <img src='/landscape-placeholder.svg' alt={professorData.name} className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[205px] md:h-[205px] rounded-[5px]"/>
                            <div className="text-center sm:text-center md:text-left">
                                <h2 className="font-bold text-[28px] sm:text-[34px] md:text-[40px]">{professorData.name}</h2>
                                    <StarRating rating={professorData.average_rating ?? 0} />
                                <p className='font-bold text-[18px] sm:text-[20px]'>out of 5</p>
                            </div>
                            <div className="w-full sm:w-[300px]">
                            <div className="relative">
                                <select className="appearance-none border rounded-t-[40px] px-[20px] sm:px-[30px] py-[15px] sm:py-[20px] bg-black font-inter font-bold text-[16px] sm:text-[18px] w-full text-white transition duration-200 ease-in-out hover:bg-gray-900" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                                    <option value="" hidden> Select a course </option>
                                    {professorData.courses.map((course) => ( <option key={course} value={course}> {course} </option>))}
                                </select>
                                <span className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-white text-[15px]"></span>
                            </div>
                            {selectedCourse && (
                            <div className="p-[20px] sm:p-[30px] animate-[slideDown_1s_ease-out] text-white font-inter font-bold text-[18px] sm:text-[20px] rounded-b-[40px] border bg-[#585D62] transition duration-300 ease-in-out hover:shadow-xl">
                                <p> The average GPA is{" "} {selectedCourseAvg !== null ? selectedCourseAvg.toFixed(2) : "N/A"}</p>
                            </div>
                            )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <p className="font-inter text-[#AAAAAA] text-[14px] sm:text-[16px] md:text-[18px] fixed bottom-4 text-center left-0 right-0 px-4" >All data is gathered from the <span className="text-[#B95F5F] underline">PlanetTerp</span> API</p>

        </div>
    )
}