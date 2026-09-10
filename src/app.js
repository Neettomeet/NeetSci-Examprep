// src/app.js
const q = {
  "questionId": "BOT_PHY_CH08_014",
  "subject": "Botany",
  "chapter": "Cell: The Unit of Life",
  "questionText": "Identify the part labeled as 'Granum' in the given ultrastructure of a chloroplast, and select its primary function:",
  "options": {
    "A": "Site of dark reaction (Calvin cycle) and starch storage",
    "B": "Site of light-dependent reactions and trapping of light energy",
    "C": "Synthesis of fatty acids and lipid droplet accumulation",
    "D": "Packaging and transport of proteins to the cytoplasm"
  },
  "correctAnswer": "B",
  "explanation": "Grana are stacks of thylakoids where the light-dependent reactions of photosynthesis take place.",
  "ncertReference": "Class 11 Biology, Chapter 8, Section 8.5.5"
};

function renderApp() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  container.innerHTML = `
    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-top: 15px;">
      <span style="font-size: 12px; color: #666; font-weight: bold;">${q.subject} > ${q.chapter}</span>
      <h3 style="font-size: 15px; margin: 10px 0;">${q.questionId}: ${q.questionText}</h3>
      
      <div style="background: #eef2f5; padding: 15px; text-align: center; border-radius: 6px; margin: 15px 0;">
        <img src="assets/svgs/chloroplast.svg" alt="NCERT Chloroplast Diagram" style="width: 100%; max-height: 190px;">
      </div>

      <div style="display: flex; flex-direction: column;">
        <div class="option" onclick="checkAnswer('A')" style="padding: 12px; margin: 8px 0; border: 1px solid #ddd; border-radius: 6px; cursor: pointer; background: #fff;"><strong>A.</strong> ${q.options.A}</div>
        <div class="option" onclick="checkAnswer('B')" style="padding: 12px; margin: 8px 0; border: 1px solid #ddd; border-radius: 6px; cursor: pointer; background: #fff;"><strong>B.</strong> ${q.options.B}</div>
        <div class="option" onclick="checkAnswer('C')" style="padding: 12px; margin: 8px 0; border: 1px solid #ddd; border-radius: 6px; cursor: pointer; background: #fff;"><strong>C.</strong> ${q.options.C}</div>
        <div class="option" onclick="checkAnswer('D')" style="padding: 12px; margin: 8px 0; border: 1px solid #ddd; border-radius: 6px; cursor: pointer; background: #fff;"><strong>D.</strong> ${q.options.D}</div>
      </div>
      <div id="feedback" style="margin-top: 15px; font-weight: bold; font-size: 14px;"></div>
    </div>
  `;
}

window.checkAnswer = function(selected) {
  const feedback = document.getElementById('feedback');
  if (selected === q.correctAnswer) {
    feedback.style.color = "green";
    feedback.innerHTML = "Correct! " + q.explanation;
  } else {
    feedback.style.color = "red";
    feedback.innerHTML = "Incorrect. Correct option is " + q.correctAnswer + ". " + q.explanation;
  }
};

renderApp();
