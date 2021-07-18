import React from 'react'
import AboutGate from '../../AboutGate';
import CourseBranding from '../../CourseBranding';
import { SpecificationTable } from '../../CourseSpecificationTable/SpecificationTable'
import FeeTable from '../../FeeTable/FeeTable'
import GatePrepSection from '../../GatePrepSection'
import Services from '../../Services';
import {service2} from '../HomePage/Data'

 function Course() {
    return (
        <div>
            <CourseBranding/>
            <AboutGate/>
            <GatePrepSection/>
            <Services {...service2}/>
            <SpecificationTable/>
           <FeeTable/>
        </div>
    )
}

export default Course