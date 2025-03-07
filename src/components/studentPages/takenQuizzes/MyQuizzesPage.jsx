import React from "react";
import "../../../styles/ProfileDashboard.css";
import "../../../styles/quizzes-style.css"
import StudentSideBar from "../../SideBar/StudentSideBar";
import TakenQuizzesList from "./TakenQuizzesList";

function MyQuizzesPage() {

    return (
        <div>

            {/* Adding spacing to push content below fixed header */}
            <div id="space"></div>

            {/* InstructorProfile Dashboard */}
            <div className="dashboard-container">
                <StudentSideBar/>

                {/* Main content */}
                <TakenQuizzesList/>
            </div>
        </div>
    );
}



export default MyQuizzesPage;
