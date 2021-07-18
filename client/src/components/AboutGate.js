import React from 'react'
import './AboutGate.css'

function AboutGate() {
    return (
        <div className="gate-container">
            <h1 className="gate-heading">Graduate Aptitude Test in Engineering (Gate) </h1>
            <div className="gate-wrapper">
                <div>
                    <h2 className="gate-h2">Description</h2>
                        <p className="gate-desc">
                            Graduate Aptitude Test in Engineering (GATE) is a national examination 
                            conducted jointly by Indian Institute of Science (IISc) Bangalore and 
                            seven Indian Institutes of Technology (IITs) at Bombay, Delhi, Guwahati,
                            Kanpur, Kharagpur, Madras and Roorkee on behalf of National Coordination 
                            Board (NCB)-GATE, Department of Higher Education, Ministry of Education (MoE), 
                            Government of India. GATE examination is a Computer Based Test (CBT).
                        </p>
                </div>
                    <div>
                        <h2 className="gate-h2">Why GATE ?</h2>
                            <p className="gate-desc"> Qualifying in GATE is a mandatory requirement for seeking admission 
                            and/or financial assistance to Postgraduate Programs (Master's and Doctoral) 
                            with Ministry of Education (MoE) and other Government Scholarships / Assistantships,
                            subject to the admission criteria of the admitting institute.
                            The GATE score is also used by some Public Sector Undertakings
                            (PSUs) for their recruitment and by several other universities in India 
                            and abroad for admissions.
                            </p>
                           
                    </div>
                </div>

            
        </div>
    )
}

export default AboutGate
