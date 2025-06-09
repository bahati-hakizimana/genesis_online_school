import React from 'react'
import Tabs from './Tabs'
import english from '../../../assets/courseImage/english.webp'
import mathematics from '../../../assets/courseImage/mathematics.webp'
import biology from '../../../assets/courseImage/biology.webp'
import chemistry from '../../../assets/courseImage/chemistry.webp'
import { Link } from 'react-router-dom'

const tabs = [

  // Form Three
  {
    label:"FormThree",
    content:{
      image: english,
      title:"English",
      form: "Form Three",
      type: "O'Level program",
      language:"English",
      description: "This course emphasizes the consolidation of the literacy, communication, and critical and creative thinking skills necessary for success in academic and daily life. Students will analyse a range of challenging literary texts from various periods, countries, and cultures; interpret and evaluate informational and graphic texts; and create oral, written, and media texts in a variety of forms. An important focus will be on using academic language coherently and confidently, selecting the reading strategies best suited to particular texts and particular purposes for reading, and developing greater control in writing. The course is intended to prepare students for university, college, or the workplace"
    }
  },
  {
    label:"FormThree",
    content:{
      image: mathematics,
      title: "Mathematics",
      form: "FormThree",
      type: "O'Level program",
      language:"English",
      description: "Investigate the properties of functions, combine functions, understand rates of change, and apply these skills. This course is for students taking Calculus and Vectors and/or a variety of O'Level programs."
    }
  },
  {
    label:"FormThree",
    content:{
      image: biology,
      title: "Biology",
      form: "FormThree",
      type: "O'Level program",
      language:"English",
      description: "Discover biological systems and biochemistry, metabolic processes, molecular genetics, homeostasis, and population dynamics. This course supports further study in life sciences and related fields."
    }
  },
  {
    label:"FormThree",
    content:{
      image: chemistry,
      title: "Chemistry",
      form: "FormThree",
      type: "O'Level program",
      language:"English",
      description: "Learn more about organic chemistry, matter, energy and rates of reactions, equilibrium, and electrochemistry. Problem solve and investigate chemical processes seen in everyday life."
    }
  },

  // FormFour


   {
    label:"FormFour",
    content:{
      image: english,
      title:"English",
      form: "FormFour",
      type: "A'Level program",
      language:"English",
      description: "This course emphasizes the consolidation of the literacy, communication, and critical and creative thinking skills necessary for success in academic and daily life. Students will analyse a range of challenging literary texts from various periods, countries, and cultures; interpret and evaluate informational and graphic texts; and create oral, written, and media texts in a variety of forms. An important focus will be on using academic language coherently and confidently, selecting the reading strategies best suited to particular texts and particular purposes for reading, and developing greater control in writing. The course is intended to prepare students for university, college, or the workplace"
    }
  },
  {
    label:"FormFour",
    content:{
      image: mathematics,
      title:"Mathematics",
      form: "FormFour",
      type: "A'Level program",
      language:"English",
      description: "Investigate the properties of functions, combine functions, understand rates of change, and apply these skills. This course is for students taking Calculus and Vectors and/or a variety of O'Level programs."
    }
  },
  {
    label:"FormFour",
    content:{
      image: biology,
      title:"Biology",
      form: "FormFour",
      type: "A'Level program",
      language:"English",
      description: "Discover biological systems and biochemistry, metabolic processes, molecular genetics, homeostasis, and population dynamics. This course supports further study in life sciences and related fields."
    }
  },
  {
    label:"FormFour",
    content:{
      image: chemistry,
      title:"Chemistry",
      form: "FormFour",
      type: "O'Level program",
      language:"English",
      description: "Learn more about organic chemistry, matter, energy and rates of reactions, equilibrium, and electrochemistry. Problem solve and investigate chemical processes seen in everyday life."
    }
  },

  // Form Five

   {
    label:"FormFive",
    content:{
      image: english,
      title:"English",
      form: "FormFive",
      type: "A'Level program",
      language:"English",
      description: "This course emphasizes the consolidation of the literacy, communication, and critical and creative thinking skills necessary for success in academic and daily life. Students will analyse a range of challenging literary texts from various periods, countries, and cultures; interpret and evaluate informational and graphic texts; and create oral, written, and media texts in a variety of forms. An important focus will be on using academic language coherently and confidently, selecting the reading strategies best suited to particular texts and particular purposes for reading, and developing greater control in writing. The course is intended to prepare students for university, college, or the workplace"
    }
  },
  {
    label:"FormFive",
    content:{
      image: mathematics,
      title:"Mathematics",
      form: "FormFive",
      type: "A'Level program",
      language:"English",
      description: "Investigate the properties of functions, combine functions, understand rates of change, and apply these skills. This course is for students taking Calculus and Vectors and/or a variety of O'Level programs."
    }
  },
  {
    label:"FormFive",
    content:{
      image: biology,
      title:"Biology",
      form: "FormFive",
      type: "A'Level program",
      language:"English",
      description: "Discover biological systems and biochemistry, metabolic processes, molecular genetics, homeostasis, and population dynamics. This course supports further study in life sciences and related fields."
    }
  },
  {
    label:"FormFive",
    content:{
      image: chemistry,
      title:"Chemistry",
      form: "FormFive",
      type: "O'Level program",
      language:"English",
      description: "Learn more about organic chemistry, matter, energy and rates of reactions, equilibrium, and electrochemistry. Problem solve and investigate chemical processes seen in everyday life."
    }
  },

  // Form Six

   {
    label:"FormSix",
    content:{
      image: english,
      title:"English",
      form: "FormSix",
      type: "A'Level program",
      language:"English",
      description: "This course emphasizes the consolidation of the literacy, communication, and critical and creative thinking skills necessary for success in academic and daily life. Students will analyse a range of challenging literary texts from various periods, countries, and cultures; interpret and evaluate informational and graphic texts; and create oral, written, and media texts in a variety of forms. An important focus will be on using academic language coherently and confidently, selecting the reading strategies best suited to particular texts and particular purposes for reading, and developing greater control in writing. The course is intended to prepare students for university, college, or the workplace"
    }
  },
  {
    label:"FormSix",
    content:{
      image: mathematics,
      title:"Mathematics",
      form: "FormSix",
      type: "A'Level program",
      language:"English",
      description: "Investigate the properties of functions, combine functions, understand rates of change, and apply these skills. This course is for students taking Calculus and Vectors and/or a variety of O'Level programs."
    }
  },
  {
    label:"FormSix",
    content:{
      image: biology,
      title:"Biology",
      form: "FormSix",
      type: "A'Level program",
      language:"English",
      description: "Discover biological systems and biochemistry, metabolic processes, molecular genetics, homeostasis, and population dynamics. This course supports further study in life sciences and related fields."
    }
  },
  {
    label:"FormSix",
    content:{
      image: chemistry,
      title:"Chemistry",
      form: "FormSix",
      type: "A'Level program",
      language:"English",
      description: "Learn more about organic chemistry, matter, energy and rates of reactions, equilibrium, and electrochemistry. Problem solve and investigate chemical processes seen in everyday life."
    }
  },
]

function Feature() {
  return (
    <div className=' w-full bg-white py-12'>

      <div className=' max-w-7xl items-center px-6'>
        <h1 className=' text-black font-semibold text-center uppercase text-[40px] '>FEATURED COURSES</h1>
      </div>
      <div>
        <Tabs tabs={tabs} />
      </div>

      <div className=' mt-8 flex items-center justify-center'>
        <Link className=' bg-green-700 text-white text-center font-bold px-8 py-2 rounded-full'>Exprol Courses</Link>
      </div>
    </div>
  )
}

export default Feature
