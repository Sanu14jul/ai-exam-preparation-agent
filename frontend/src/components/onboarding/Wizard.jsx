import { useState } from "react";

import StepLearningTrack from "./StepLearningTrack";
import StepEducation from "./StepEducation";
import StepStudyPlan from "./StepStudyPlan";
import StepGoals from "./StepGoals";
import StepReview from "./StepReview";

export default function Wizard() {

    const [step, setStep] = useState(1);

    const [profile, setProfile] = useState({

        learning_track: "",

        board: "",

        university: "",

        course: "",

        semester: "",

        exam_name: "",

        exam_date: "",

        target_score: "",

        daily_study_hours: "",

        weak_subjects: "",

        strong_subjects: "",

        preferred_language: "English",

    });

    const updateProfile = (field, value) => {

        setProfile((prev) => ({
            ...prev,
            [field]: value,
        }));

    };

    const nextStep = () => setStep(step + 1);

    const previousStep = () => setStep(step - 1);

    switch (step) {

        case 1:

            return (
                <StepLearningTrack
                    profile={profile}
                    updateProfile={updateProfile}
                    nextStep={nextStep}
                />
            );

        case 2:

            return (
                <StepEducation
                    profile={profile}
                    updateProfile={updateProfile}
                    nextStep={nextStep}
                    previousStep={previousStep}
                />
            );

        case 3:

            return (
                <StepStudyPlan
                    profile={profile}
                    updateProfile={updateProfile}
                    nextStep={nextStep}
                    previousStep={previousStep}
                />
            );

        case 4:

            return (
                <StepGoals
                    profile={profile}
                    updateProfile={updateProfile}
                    nextStep={nextStep}
                    previousStep={previousStep}
                />
            );

        default:

            return (
                <StepReview
                    profile={profile}
                    previousStep={previousStep}
                />
            );

    }

}