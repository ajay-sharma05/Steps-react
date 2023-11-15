import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return (
    <>
      <Steps />
      {/* <Steps /> */}
    </>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  return (
    <>
      {isOpen && (
        <div>
          <button className="close" onClick={() => setIsOpen((is) => !is)}>
            &times;
          </button>

          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>

            {/* <div className="message">
            <h3>Step {step}</h3>   : {messages[step - 1]}
            </div> */}

            <StepMessages step={step}>
              {messages[step - 1]}

              <div className="buttons">
                <Button
                  bgColor="#5970f2"
                  textColor="#5ff"
                  onClick={() => alert(`Learn how to ${messages[step - 1]}`)}
                >
                  Learn How
                </Button>
              </div>
            </StepMessages>

            <div className="buttons">
              {/* <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handlePrevious}
              >
                Previous
              </button> */}

              <Button
                bgColor="#7950f2"
                textColor="#fff"
                onClick={handlePrevious}
              >
                <span> 👈</span> Previous
              </Button>
              <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                Next <span> 👉</span>
              </Button>

              {/* <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handleNext}
              >
                Next
              </button> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessages({ step, children }) {
  return (
    <div className="message">
      <h3>Step: {step}</h3>
      {children}
    </div>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
