// Self-contained fallback to guarantee immediate rendering on mobile
const q = {
  "questionId": "BOT_PHY_CH08_014",
  "subject": "Botany",
  "chapter": "Cell: The Unit of Life",
  "difficulty": "Medium",
  "isDiagramBased": true,
  "diagramPath": "assets/svgs/chloroplast_ultrastructure.svg",
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

function renderQuestionPreview() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  container.innerHTML = `
    <div style="background: white; padding: 20px; border-radius: 8px; max-width: 600px; margin: 20px auto; box-shadow: 0 2px 4px rgba(0,0,0,0.1); font-family: sans-serif;">
      <span style="font-size: 12px; color: #666; font-weight: bold;">${q.subject} > ${q.chapter}</span>
      <h3 style="font-size: 16px; margin: 10px 0;">${q.questionId}: ${q.questionText}</h3>
      
      <div style="background: #eef2f5; padding: 15px; text-align: center; border-radius: 6px; margin: 15px 0;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 120" width="100%" style="max-height: 140px;">
          <ellipse cx="100" cy="60" rx="90" ry="50" fill="none" stroke="#2E7D32" stroke-width="3" />
          <rect x="50" y="40" width="12" height="25" rx="2" fill="#1B5E20" />
          <rect x="70" y="35" width="12" height="35" rx="2" fill="#1B5E20" />
          <rect x="90" y="40" width="12" height="25" rx="2" fill="#1B5E20" />
          <text x="65" y="105" font-size="10" fill="#333">Granum Structure (Vector SVG)</text>
        </svg>
      </div>

      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div class="option" onclick="checkAnswer('A')" style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"><strong>A.</strong> ${q.options.A}</div>
        <div class="option" onclick="checkAnswer('B')" style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"><strong>B.</strong> ${q.options.B}</div>
        <div class="option" onclick="checkAnswer('C')" style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"><strong>C.</strong> ${q.options.C}</div>
        <div class="option" onclick="checkAnswer('D')" style="padding: 10px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;"><strong>D.</strong> ${q.options.D}</div>
      </div>
      <div id="feedback" style="margin-top: 15px; font-weight: bold;"></div>
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

renderQuestionPreview();
