
import React, { useState, useEffect, useMemo } from 'react';
import { PASSAGES } from './data';
import { Passage, AnswerValue, Question } from './types';
import { getDetailedExplanation } from './geminiService';

const App: React.FC = () => {
  const [currentPassageIdx, setCurrentPassageIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, AnswerValue>>({});
  const [showResults, setShowResults] = useState(false);
  const [aiExplanations, setAiExplanations] = useState<Record<string, string>>({});
  const [loadingAi, setLoadingAi] = useState<Record<string, boolean>>({});

  const currentPassage = PASSAGES[currentPassageIdx];
  
  const score = useMemo(() => {
    let count = 0;
    currentPassage.questions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) count++;
    });
    return count;
  }, [currentPassage, userAnswers]);

  const handleAnswer = (questionId: string, value: AnswerValue) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentPassageIdx < PASSAGES.length - 1) {
      setCurrentPassageIdx(prev => prev + 1);
      setShowResults(false);
      setAiExplanations({});
    }
  };

  const handlePrev = () => {
    if (currentPassageIdx > 0) {
      setCurrentPassageIdx(prev => prev - 1);
      setShowResults(false);
      setAiExplanations({});
    }
  };

  const fetchAiExplanation = async (q: Question) => {
    setLoadingAi(prev => ({ ...prev, [q.id]: true }));
    const explanation = await getDetailedExplanation(
      currentPassage.content,
      q.text,
      userAnswers[q.id] || 'None',
      q.correctAnswer,
      currentPassage.type
    );
    setAiExplanations(prev => ({ ...prev, [q.id]: explanation || '' }));
    setLoadingAi(prev => ({ ...prev, [q.id]: false }));
  };

  const resetPassage = () => {
    const newAnswers = { ...userAnswers };
    currentPassage.questions.forEach(q => delete newAnswers[q.id]);
    setUserAnswers(newAnswers);
    setShowResults(false);
    setAiExplanations({});
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-10 py-4 px-6 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-800">IELTS Master Reading</h1>
            <p className="text-sm text-slate-500">True/False/Not Given & Yes/No/Not Given Mastery</p>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
              Passage {currentPassageIdx + 1} of {PASSAGES.length}
            </span>
            <div className="text-right">
              <p className="text-xs uppercase font-bold text-slate-400">Total Progress</p>
              <div className="w-32 h-2 bg-slate-200 rounded-full mt-1 overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-500" 
                  style={{ width: `${((currentPassageIdx + (showResults ? 1 : 0)) / PASSAGES.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 p-6 mb-24">
        {/* Left: Reading Passage */}
        <section className="lg:w-1/2 flex flex-col gap-4">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 h-fit lg:sticky lg:top-24">
            <h2 className="text-xl font-bold mb-4 text-slate-800">{currentPassage.title}</h2>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
              {currentPassage.content.split('\n').map((para, i) => (
                <p key={i} className="mb-4">{para}</p>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Question Type</span>
              <p className="text-blue-600 font-semibold mt-1">
                {currentPassage.type === 'TFNG' ? 'TRUE / FALSE / NOT GIVEN' : 'YES / NO / NOT GIVEN'}
              </p>
              <p className="text-xs text-slate-500 mt-2">
                {currentPassage.type === 'TFNG' 
                  ? 'If the statement agrees with the information, choose TRUE. If it contradicts, choose FALSE. If there is no information, choose NOT GIVEN.' 
                  : 'If the statement agrees with the claims of the writer, choose YES. If it contradicts, choose NO. If it is impossible to say what the writer thinks, choose NOT GIVEN.'}
              </p>
            </div>
          </div>
        </section>

        {/* Right: Questions */}
        <section className="lg:w-1/2 flex flex-col gap-6">
          {currentPassage.questions.map((q, idx) => (
            <div key={q.id} className={`bg-white p-6 rounded-2xl shadow-sm border transition-all ${
              showResults 
                ? (userAnswers[q.id] === q.correctAnswer ? 'border-green-200 bg-green-50/20' : 'border-red-200 bg-red-50/20') 
                : 'border-slate-200'
            }`}>
              <div className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500">
                  {idx + 1}
                </span>
                <div className="flex-grow">
                  <p className="text-lg text-slate-800 mb-4 font-medium">{q.text}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {currentPassage.type === 'TFNG' ? (
                      <>
                        <AnswerButton 
                          label="TRUE" 
                          active={userAnswers[q.id] === 'TRUE'} 
                          disabled={showResults} 
                          onClick={() => handleAnswer(q.id, 'TRUE')} 
                        />
                        <AnswerButton 
                          label="FALSE" 
                          active={userAnswers[q.id] === 'FALSE'} 
                          disabled={showResults} 
                          onClick={() => handleAnswer(q.id, 'FALSE')} 
                        />
                        <AnswerButton 
                          label="NOT GIVEN" 
                          active={userAnswers[q.id] === 'NOT_GIVEN'} 
                          disabled={showResults} 
                          onClick={() => handleAnswer(q.id, 'NOT_GIVEN')} 
                        />
                      </>
                    ) : (
                      <>
                        <AnswerButton 
                          label="YES" 
                          active={userAnswers[q.id] === 'YES'} 
                          disabled={showResults} 
                          onClick={() => handleAnswer(q.id, 'YES')} 
                        />
                        <AnswerButton 
                          label="NO" 
                          active={userAnswers[q.id] === 'NO'} 
                          disabled={showResults} 
                          onClick={() => handleAnswer(q.id, 'NO')} 
                        />
                        <AnswerButton 
                          label="NOT GIVEN" 
                          active={userAnswers[q.id] === 'NOT_GIVEN_YN'} 
                          disabled={showResults} 
                          onClick={() => handleAnswer(q.id, 'NOT_GIVEN_YN')} 
                        />
                      </>
                    )}
                  </div>

                  {showResults && (
                    <div className="mt-4 p-4 rounded-xl bg-white border border-slate-100 shadow-inner animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex items-center gap-2 mb-2">
                        {userAnswers[q.id] === q.correctAnswer ? (
                          <span className="text-green-600 font-bold flex items-center gap-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Correct
                          </span>
                        ) : (
                          <span className="text-red-600 font-bold flex items-center gap-1">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            Incorrect
                          </span>
                        )}
                        <span className="text-slate-400 text-sm">•</span>
                        <span className="text-slate-600 font-medium">Correct: {q.correctAnswer.replace('_YN', '')}</span>
                      </div>
                      <p className="text-sm text-slate-500 italic mb-4">{q.explanation}</p>
                      
                      {aiExplanations[q.id] ? (
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <p className="text-xs font-bold text-blue-500 uppercase mb-1">AI Explanation ✨</p>
                          <p className="text-sm text-blue-800 leading-relaxed">{aiExplanations[q.id]}</p>
                        </div>
                      ) : (
                        <button 
                          onClick={() => fetchAiExplanation(q)}
                          disabled={loadingAi[q.id]}
                          className="text-sm text-blue-600 font-semibold flex items-center gap-1 hover:text-blue-800 transition-colors disabled:opacity-50"
                        >
                          {loadingAi[q.id] ? (
                            <span className="animate-pulse">Thinking...</span>
                          ) : (
                            <>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                              Ask Gemini for deeper reasoning
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <button 
              onClick={resetPassage}
              className="px-6 py-2 text-slate-500 font-medium hover:text-slate-800 transition-colors"
            >
              Reset Current
            </button>
            <button 
              onClick={() => setShowResults(true)}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:scale-105"
            >
              Check Answers
            </button>
          </div>
        </section>
      </main>

      {/* Persistent Controls / Summary Overlay */}
      {showResults && (
        <div className="fixed bottom-0 left-0 w-full bg-blue-900 text-white p-4 shadow-2xl z-20 animate-in slide-in-from-bottom-full duration-500">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <p className="text-xs text-blue-300 font-bold uppercase">Your Score</p>
                <p className="text-2xl font-black">{score} / {currentPassage.questions.length}</p>
              </div>
              <div className="h-10 w-px bg-blue-700"></div>
              <p className="hidden md:block text-blue-100 text-sm">
                {score === currentPassage.questions.length ? "Perfect! You're an IELTS master! 🎉" : "Great job practicing! Keep analyzing the explanations."}
              </p>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={handlePrev} 
                disabled={currentPassageIdx === 0}
                className="px-4 py-2 border border-blue-700 rounded-lg font-bold hover:bg-blue-800 transition-colors disabled:opacity-30"
              >
                Previous
              </button>
              <button 
                onClick={handleNext} 
                disabled={currentPassageIdx === PASSAGES.length - 1}
                className="px-6 py-2 bg-white text-blue-900 rounded-lg font-bold hover:bg-blue-50 transition-colors disabled:opacity-30"
              >
                Next Passage
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface AnswerButtonProps {
  label: string;
  active: boolean;
  disabled: boolean;
  onClick: () => void;
}

const AnswerButton: React.FC<AnswerButtonProps> = ({ label, active, disabled, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded-lg text-sm font-bold border-2 transition-all ${
        active 
          ? 'bg-blue-600 border-blue-600 text-white scale-105 z-[1]' 
          : 'bg-white border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-500'
      } ${disabled ? 'cursor-default opacity-90' : 'cursor-pointer'}`}
    >
      {label}
    </button>
  );
};

export default App;
