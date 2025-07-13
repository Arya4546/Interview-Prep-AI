const Question = require("../models/Question");
const Session = require("../models/Session");


// @desc Add questions to session
// @route POST /api/questions/add
// @access Private
exports.addQuestionsToSession = async (req, res) => {
    try {
        const { sessionId, questions } = req.body;

        if(!sessionId || !questions || !Array.isArray(questions)) {
            return res.status(400).json({ message: "Invalid input data" });
    }

    const session = await Session.findById(sessionId);

    if(!session) {
        return res.status(404).json({ message: "Session not found" });
    }

//create new questions

const createdQuestions = await Question.insertMany(questions.map((q) => ({
    session: sessionId,
    question: q.question,
    answer: q.answer,
}))
);

//update session to include new question ids
session.questions.push(...createdQuestions.map((q) => q._id));
await session.save();

res.status(201).json(createdQuestions);

} catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
  
}

// @desc Toggle pin question
// @route POST /api/questions/:id/pin
// @access Private

exports.togglePinQuestion = async (req, res) => {
    try {
        const question = await Question.findById(req.params.id);

        if(!question) {
            return res.status(404).json({ success: false, message: "Question not found" });
        }

        question.isPinned = !question.isPinned;
        await question.save();

        res.status(200).json({ success: true, question});
    } catch (error) {
       res.status(500).json({ message: "Server Error" });
    }
}

//@desc update question note
//@route POST /api/questions/:id/note
//@access Private

exports.updateQuestionNote = async (req, res) => {
    try {
        const { note } = req.body;
        const question = await Question.findById(req.params.id);

        if(!question) {
            return res.status(404).json({ success: false, message: "Question not found"
        });
    }
        question.note = note || "";
        await question.save();

        res.status(200).json({ success: true, question });

    
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
}