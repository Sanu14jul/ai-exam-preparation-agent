import { useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import ProgressBar from "../../components/onboarding/ProgressBar";
import QuestionCard from "../../components/onboarding/QuestionCard";

export default function Onboarding() {

  const totalSteps = 6;

  const [step, setStep] = useState(1);

  const [profile, setProfile] = useState({

    learning_track: "",

    university: "",

    course: "",

    semester: "",

    daily_study_hours: "",

    preferred_language: "English",

  });

  const updateField = (field, value) => {

    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));

  };

  return (

    <DashboardLayout>

      <div className="max-w-4xl mx-auto py-12">

        <ProgressBar
          currentStep={step}
          totalSteps={totalSteps}
        />

        {/* STEP 1 */}

        {step === 1 && (

          <QuestionCard
            title="👋 Welcome to PrepMind AI"
            subtitle="Let's build your personal AI Learning Profile."
          >

            <button
              onClick={() => setStep(2)}
              className="bg-indigo-600 hover:bg-indigo-700 rounded-xl px-8 py-4"
            >
              Start
            </button>

          </QuestionCard>

        )}

        {/* STEP 2 */}

        {step === 2 && (

          <QuestionCard
            title="What are you preparing for?"
            subtitle="Choose your learning track."
          >

            <div className="grid grid-cols-2 gap-4">

              {[
                "School",
                "College",
                "Competitive",
                "Professional Skills",
              ].map((item) => (

                <button

                  key={item}

                  onClick={() => {

                    updateField(
                      "learning_track",
                      item
                    );

                    setStep(3);

                  }}

                  className="bg-slate-800 hover:bg-indigo-600 rounded-xl p-5"

                >

                  {item}

                </button>

              ))}

            </div>

          </QuestionCard>

        )}

        {/* STEP 3 */}

        {step === 3 && profile.learning_track === "College" && (

          <QuestionCard
            title="Tell us about your course"
            subtitle="This helps the AI personalize your learning."
          >

            <div className="space-y-5">

              <input
                placeholder="University"
                className="w-full rounded-xl bg-slate-800 p-4"
                onChange={(e) =>
                  updateField(
                    "university",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Course"
                className="w-full rounded-xl bg-slate-800 p-4"
                onChange={(e) =>
                  updateField(
                    "course",
                    e.target.value
                  )
                }
              />

              <input
                placeholder="Semester"
                className="w-full rounded-xl bg-slate-800 p-4"
                onChange={(e) =>
                  updateField(
                    "semester",
                    e.target.value
                  )
                }
              />

              <button
                onClick={() => setStep(4)}
                className="bg-indigo-600 hover:bg-indigo-700 rounded-xl px-8 py-4"
              >
                Continue
              </button>

            </div>

          </QuestionCard>

        )}

        {/* Temporary */}

        {step >= 4 && (

          <QuestionCard
            title="🚀 Awesome!"
            subtitle="Next we will collect study hours, exam date, weak subjects and save everything to the database."
          >

            <pre className="text-green-400 text-sm overflow-auto">

              {JSON.stringify(profile, null, 2)}

            </pre>

          </QuestionCard>

        )}

      </div>

    </DashboardLayout>

  );

}