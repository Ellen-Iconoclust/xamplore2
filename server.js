const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser('xamplore-super-secret-key-2024')); // Signed cookies
app.use(express.static(path.join(__dirname, 'public')));

// --- DATA (Moved from Frontend) ---

const PASSWORDS = {
    A: "alpha123",
    B: "beta123",
    C: "gamma123"
};

const SECOND_PASS = "choice2ellen";

const QUESTION_BANK = {
    A: [
        { q: "Which JavaScript declaration keyword binds an immutable identifier?", options: ["var", "let", "const", "static"], answer: "const" },
        { q: "Which semantic HTML element represents a site-level link grouping?", options: ["section", "menu", "nav", "header"], answer: "nav" },
        { q: "Which CSS property affects internal spacing of a box model?", options: ["margin", "gap", "padding", "outline"], answer: "padding" },
        { q: "Which Canvas API function renders bitmap data onto the surface?", options: ["paintImage()", "renderImg()", "drawImage()", "putImage()"], answer: "drawImage()" },
        { q: "Which JavaScript built-in function invokes a modal dialog?", options: ["console.log()", "prompt()", "alert()", "confirm()"], answer: "alert()" },
        { q: "Which HTML attribute enforces user input before submission?", options: ["validate", "compulsory", "required", "checked"], answer: "required" },
        { q: "Which CSS unit scales relative to viewport horizontal size?", options: ["vh", "em", "vw", "%"], answer: "vw" },
        { q: "Which Canvas method resets pixels within a defined region?", options: ["resetRect()", "eraseRect()", "clearRect()", "wipeRect()"], answer: "clearRect()" },
        { q: "Which semantic HTML element encapsulates primary document content?", options: ["body", "article", "main", "section"], answer: "main" },
        { q: "Which HTML element inserts a thematic break?", options: ["br", "hr", "line", "rule"], answer: "hr" },
        { q: "Which CSS property determines vertical layering priority?", options: ["depth", "overlay", "z-index", "stack"], answer: "z-index" },
        { q: "Which HTML element embeds raster graphics?", options: ["picture", "media", "image", "img"], answer: "img" },
        { q: "Which Canvas rendering property controls fill pigment?", options: ["fillColor", "fillStyle", "colorFill", "background"], answer: "fillStyle" },
        { q: "Which JavaScript control keyword terminates iteration execution?", options: ["exit", "stop", "break", "halt"], answer: "break" },
        { q: "Which CSS property modifies corner curvature?", options: ["curve", "border-edge", "border-radius", "outline-radius"], answer: "border-radius" },
        { q: "Which HTML element constructs a bullet-based list?", options: ["li", "ul", "ol", "dl"], answer: "ul" },
        { q: "Which JavaScript keyword initializes a scoped identifier?", options: ["define", "var", "let", "set"], answer: "let" },
        { q: "Which Canvas method preserves the current context snapshot?", options: ["hold()", "cache()", "save()", "store()"], answer: "save()" },
        { q: "Which CSS layout model aligns items horizontally by default?", options: ["grid", "inline", "flex", "block"], answer: "flex" },
        { q: "Which character encoding declaration avoids symbol distortion?", options: ["ASCII", "UTF-18", "UTF-8", "UTF-16"], answer: "UTF-8" },
        { q: "Which JavaScript structure maintains indexed collections?", options: ["object", "array", "map", "set"], answer: "array" },
        { q: "Which CSS concept adapts layout across device sizes?", options: ["scaling", "responsiveness", "transitions", "alignment"], answer: "responsiveness" },
        { q: "Which JavaScript method retrieves an element via unique identifier?", options: ["getelementById()", "getelementsByClassName()", "getElementById()", "getElementbyId()"], answer: "getElementById()" },
        { q: "Which Canvas API function renders text glyphs?", options: ["drawText()", "fillText()", "writeText()", "textDraw()"], answer: "fillText()" },
        { q: "Which JavaScript primitive represents intentional absence?", options: ["null", "undefined", "NaN", "false"], answer: "null" },
        { q: "Which CSS property clips excess visual content?", options: ["hidden", "clip", "overflow", "mask"], answer: "overflow" },
        { q: "Which document declaration activates compliance rendering?", options: ["‹html›", "‹meta›", "‹!DOCTYPE html›", "‹head›"], answer: "‹!DOCTYPE html›" },
        { q: "Which HTML element triggers user interaction events?", options: ["input", "button", "submit", "click"], answer: "button" },
        { q: "Which Canvas function restores the last stored context?", options: ["load()", "undo()", "restore()", "recall()"], answer: "restore()" },
        { q: "Which CSS selector references a unique element?", options: [".class", "elementId", "#id", "*"], answer: "#id" }
    ],
    B: [
        { q: "Which HTML element defines a clickable control?", options: ["action", "submit", "button", "input"], answer: "button" },
        { q: "Which JavaScript operator inverses logical evaluation?", options: ["!=", "!", "!==", "not"], answer: "!" },
        { q: "Which Canvas interface exposes rendering methods?", options: ["CanvasObject", "CanvasAPI", "CanvasRenderingContext2D", "GraphicsContext"], answer: "CanvasRenderingContext2D" },
        { q: "Which CSS property horizontally aligns inline text?", options: ["align", "justify", "text-align", "text-position"], answer: "text-align" },
        { q: "Which semantic HTML tag contains supplementary content?", options: ["aside", "section", "article", "nav"], answer: "aside" },
        { q: "Which HTML element defines last page content?", options: ["end", "footer", "bottom", "end-content"], answer: "footer" },
        { q: "Which CSS property repositions elements visually?", options: ["float", "transform", "margin", "display"], answer: "transform" },
        { q: "Which CSS property modifies font texture intensity?", options: ["font-style", "text-weight", "font-weight", "letter-spacing"], answer: "font-weight" },
        { q: "Which HTML attribute opens hyperlinks externally?", options: ["new", "target", "href", "rel"], answer: "target" },
        { q: "Which JavaScript keyword declares executable blocks?", options: ["method", "function", "def", "exec"], answer: "function" },
        { q: "Which CSS property controls outer spacing?", options: ["padding", "border", "margin", "gap"], answer: "margin" },
        { q: "Which JavaScript method locates elements by ID?", options: ["getelementsByClassName()", "getElementById()", "getElementbyId()", "getelementbyId()"], answer: "getElementById()" },
        { q: "Which Canvas property determines the line's stroke pigment?", options: ["strokeColor", "lineColor", "strokeStyle", "borderColor"], answer: "strokeStyle" },
        { q: "Which Canvas method initializes a drawing path?", options: ["begin()", "startPath()", "beginPath()", "openPath()"], answer: "beginPath()" },
        { q: "Which CSS unit inherits relative font sizing?", options: ["px", "rem", "em", "vh"], answer: "em" },
        { q: "Which CSS property controls opacity levels?", options: ["visibility", "transparency", "opacity", "filter"], answer: "opacity" },
        { q: "Which JavaScript keyword terminates function execution?", options: ["end", "stop", "return", "break"], answer: "return" },
        { q: "Which Canvas method creates line segments?", options: ["line()", "drawLine()", "lineTo()", "strokeLine()"], answer: "lineTo()" },
        { q: "Which CSS display value removes elements entirely?", options: ["hidden", "none", "invisible", "collapse"], answer: "none" },
        { q: "Which HTML utility validates syntax correctness?", options: ["Browser", "Inspector", "Validator", "Compiler"], answer: "Validator" },
        { q: "Which JavaScript data type stores characters?", options: ["char", "text", "string", "varchar"], answer: "string" },
        { q: "Which CSS property aligns items along cross-axis?", options: ["justify-content", "align-content", "align-items", "place-items"], answer: "align-items" },
        { q: "Which HTML attribute displays hint text in inputs?", options: ["label", "hint", "placeholder", "value"], answer: "placeholder" },
        { q: "Which HTML element produces numbered lists?", options: ["ul", "dl", "li", "ol"], answer: "ol" },
        { q: "Which Canvas property defines stroke thickness?", options: ["borderWidth", "strokeSize", "lineWidth", "penWidth"], answer: "lineWidth" },
        { q: "Which CSS property defines layout reference model?", options: ["position", "display", "float", "align"], answer: "position" },
        { q: "Which Canvas method reverts saved drawing state?", options: ["undo()", "restore()", "reload()", "reverse()"], answer: "restore()" },
        { q: "Which HTML element groups form controls?", options: ["group", "fieldset", "formset", "legend"], answer: "fieldset" },
        { q: "Which CSS rule enables animated transitions?", options: ["animation", "transition", "transform", "interpolate"], answer: "transition" },
        { q: "Which CSS property alters cursor appearance?", options: ["pointer", "arrow", "cursor", "mouse"], answer: "cursor" }
    ],
    C: [
        { q: "Which HTML element provides a drawable region?", options: ["draw", "paint", "canvas", "surface"], answer: "canvas" },
        { q: "Which HTML element encapsulates metadata?", options: ["body", "meta", "head", "title"], answer: "head" },
        { q: "Which Canvas method seals the current path?", options: ["endPath()", "closePath()", "finishPath()", "stopPath()"], answer: "closePath()" },
        { q: "Which CSS property assigns background pigment?", options: ["background-style", "background-color", "color", "fill"], answer: "background-color" },
        { q: "Which CSS property defines typeface grouping?", options: ["font", "font-style", "font-family", "typeface"], answer: "font-family" },
        { q: "Which Canvas method erases a defined pixel region?", options: ["deleteRect()", "wipeRect()", "clearRect()", "removeRect()"], answer: "clearRect()" },
        { q: "Which Canvas method draws semi-circles and circles?", options: ["curve()", "arc()", "circle()", "round()"], answer: "arc()" },
        { q: "Which CSS property controls animation timing length?", options: ["animation-speed", "animation-duration", "transition-time", "animation-delay"], answer: "animation-duration" },
        { q: "Which HTML element represents the highest heading?", options: ["h6", "heading", "h1", "header"], answer: "h1" },
        { q: "Which JavaScript operator checks strict inequality?", options: ["!=", "!!=", "!==", "!==="], answer: "!==" },
        { q: "Which Canvas method stores rendering state?", options: ["save()", "cache()", "hold()", "keep()"], answer: "save()" },
        { q: "Which HTML element generates selection menus?", options: ["option", "dropdown", "select", "menu"], answer: "select" },
        { q: "Which HTML element embeds external pages?", options: ["embed", "iframe", "frame", "object"], answer: "iframe" },
        { q: "Which Canvas method draws a line to coordinates?", options: ["drawTo()", "moveTo()", "lineTo()", "pathTo()"], answer: "lineTo()" },
        { q: "Which Canvas method renders textual output?", options: ["text()", "fillText()", "printText()", "drawFont()"], answer: "fillText()" },
        { q: "Which CSS property hides content but preserves layout space?", options: ["display", "opacity", "visibility", "hidden"], answer: "visibility" },
        { q: "Which HTML attribute disables input controls?", options: ["readonly", "inactive", "disabled", "locked"], answer: "disabled" },
        { q: "Which JavaScript keyword defines immutable variables?", options: ["let", "var", "const", "static"], answer: "const" },
        { q: "Which Canvas property controls alpha transparency?", options: ["opacity", "alpha", "globalAlpha", "transparency"], answer: "globalAlpha" },
        { q: "Which CSS property spaces flex children evenly?", options: ["align-items", "gap-content", "justify-content", "place-content"], answer: "justify-content" },
        { q: "Which HTML element directly creates user data entry controls?", options: ["form", "textarea", "input", "field"], answer: "input" },
        { q: "Which JavaScript function converts strings to numbers?", options: ["Number()", "parseInt()", "toNum()", "convert(num)"], answer: "parseInt()" },
        { q: "Which CSS property alters text casing?", options: ["font-style", "text-transform", "letter-spacing", "word-break"], answer: "text-transform" },
        { q: "Which HTML attribute controls image loading behavior?", options: ["async", "lazy", "loading", "defer"], answer: "loading" },
        { q: "Which HTML attribute assign initial cursor focus with scripting for an input?", options: ["focus", "selected", "autofocus", "active"], answer: "autofocus" },
        { q: "Which CSS property positions background imagery?", options: ["background-align", "background-origin", "background-position", "background-place"], answer: "background-position" },
        { q: "Which JavaScript operator checks loose equality?", options: ["===", "=", "==", "!=="], answer: "==" },
        { q: "Which DOM method retrieves an element by ID?", options: ["getelementbyId()", "getElementById()", "getElementbyId()", "getelementById()"], answer: "getElementById()" },
        { q: "Which HTML element represents keyboard input?", options: ["kbdIn", "keyboard-input", "kbd", "input-key"], answer: "kbd" },
        { q: "Which CSS property fits images within containers?", options: ["object-position", "image-fit", "object-fit", "background-size"], answer: "object-fit" }
    ],
};

// --- HELPERS ---
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// --- API ROUTES ---

// 1. LOGIN
app.post('/api/login', (req, res) => {
    const { name, pattern, password } = req.body;

    if (!name || !pattern || !password) {
        return res.status(400).json({ error: "Missing fields" });
    }

    if (PASSWORDS[pattern] !== password) {
        return res.status(401).json({ error: "Invalid password for selected pattern" });
    }

    // Set signed cookie with session data
    // Max Age: 2 hours
    const sessionData = {
        name,
        pattern,
        status: 'ready', // ready, started, completed, failed
        score: null,
        startTime: null
    };

    res.cookie('session', sessionData, {
        httpOnly: true,
        signed: true,
        maxAge: 7200000
    });

    res.json({ success: true, message: "Logged in" });
});

// 2. CHECK STATUS (For page reloads)
app.get('/api/me', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) {
        return res.json({ loggedIn: false });
    }
    return res.json({
        loggedIn: true,
        name: session.name,
        pattern: session.pattern,
        status: session.status,
        score: session.score,
        totalQuestions: QUESTION_BANK[session.pattern].length
    });
});

// 3. START EXAM
app.post('/api/start', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) return res.status(401).json({ error: "Not logged in" });

    if (session.status === 'completed') {
        return res.status(403).json({ error: "Test already completed. You cannot retake it." });
    }

    // If failed, block unless they used retry (logic handled in /api/retry)
    if (session.status === 'failed') {
        return res.status(403).json({ error: "Test failed. Please use second chance." });
    }

    // Update status to 'started' if not already
    verifyAndSetStatus(res, session, 'started');

    // Get questions for the pattern
    const patternQuestions = QUESTION_BANK[session.pattern];

    // Send questions WITHOUT answers
    // Randomize order for the client
    const questionsToSend = shuffle(patternQuestions).map(q => ({
        q: q.q,
        options: shuffle(q.options),
        // We don't send the answer!
    }));

    res.json({ questions: questionsToSend });
});

// 4. SUBMIT EXAM
app.post('/api/submit', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) return res.status(401).json({ error: "Not logged in" });

    if (session.status === 'completed') {
        return res.status(400).json({ error: "Already submitted." });
    }

    const { answers } = req.body; // Array of selected answers strings
    const patternQuestions = QUESTION_BANK[session.pattern];

    if (!answers || !Array.isArray(answers)) {
        return res.status(400).json({ error: "Invalid answers format" });
    }

    // Calculate Score
    // Note: Since client shuffled questions, we need to match them. 
    // However, the client just sends an array of answers. 
    // Wait, if the client shuffled them, the indices won't match the server's QUESTION_BANK order.
    // OPTION 1: Send IDs with questions.
    // OPTION 2: Trust the client sent the question text? No.
    // FIX: The Server shuffle logic above was per-request. If I shuffle in /api/start, I lose the order unless I store the order in the session.
    // For this simple example without DB, storing the specific question order in the cookie is the best "stateless" way.

    // BUT: The cookie size is limited. Storing whole questions is bad.
    // STRATEGY: Store the indices of the questions in the cookie when starting.

    // Let's Refactor /api/start slightly inside.

    // Actually, looking at the provided Frontend code, it expects:
    // questions = shuffle([...QUESTION_BANK[pattern]]).
    // implementation:
    // It's stateless. If I send shuffled questions, I MUST know the order to grade them.
    // I will store the `questionIndices` in the session cookie.
});

// REDO /api/start to handle indices
app.post('/api/start-v2', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) return res.status(401).json({ error: "Not logged in" });

    if (session.status === 'completed') return res.status(403).json({ error: "Test completed." });
    if (session.status === 'failed') return res.status(403).json({ error: "Test failed." });

    const fullBank = QUESTION_BANK[session.pattern];

    // Create an array of indices [0, 1, 2, ... length-1]
    const indices = Array.from({ length: fullBank.length }, (_, i) => i);
    const shuffledIndices = shuffle(indices);

    // Store this order in the session
    session.questionOrder = shuffledIndices;
    session.status = 'started';

    res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });

    const questionsToSend = shuffledIndices.map(i => {
        const q = fullBank[i];
        return {
            q: q.q,
            options: shuffle(q.options), // Options answer checking verification is tricky if we don't know option order, but usually we just check if answer_string == correct_string. Since the user code sends the value string, options order doesn't matter for checking.
            id: i // Send ID if useful, or just rely on order
        };
    });

    res.json({ questions: questionsToSend });
});

// REDO /api/submit
app.post('/api/submit-v2', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) return res.status(401).json({ error: "Not logged in" });

    // Allow submission even if 'completed' to be idempotent? No, secure.
    // But if they refresh result page, they call /api/me.
    if (session.status === 'completed') {
        // If they assume they just finished, maybe return the score again from cookie?
        return res.json({ score: session.score, total: QUESTION_BANK[session.pattern].length, alreadyCompleted: true });
    }

    const { answers } = req.body; // Array of objects { qIndex: 0, answer: 'const' } OR just array in order?
    // The frontend sends array of strings. 
    // We expect the frontend to send them IN THE SAME ORDER as received.

    if (!session.questionOrder) {
        return res.status(400).json({ error: "Exam not started appropriately." });
    }

    let score = 0;
    const fullBank = QUESTION_BANK[session.pattern];
    const results = []; // To return correct answers for PDF

    // Iterate through the preserved order
    session.questionOrder.forEach((originalIndex, i) => {
        const userAns = answers[i];
        const correctAns = fullBank[originalIndex].answer;
        const isCorrect = userAns === correctAns;

        if (isCorrect) score++;

        results.push({
            q: fullBank[originalIndex].q,
            userAns: userAns || "Skipped",
            correctAns: correctAns,
            isCorrect
        });
    });

    // Update Session
    session.status = 'completed';
    session.score = score;
    // We don't store `results` in cookie (too big). We return it now. 
    // If they reload, they can only see the score via /api/me, NOT the full breakdown (for security/size). 
    // Or we allow local PDF generation here and now.

    res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });

    res.json({
        score,
        total: fullBank.length,
        results, // Client needs this for PDF
        name: session.name,
        pattern: session.pattern
    });
});


// 5. RETRY
app.post('/api/retry', (req, res) => {
    const session = req.signedCookies.session;
    if (!session) return res.status(401).json({ error: "Not logged in" });

    const { code } = req.body;
    if (code !== SECOND_PASS) {
        return res.status(400).json({ error: "Invalid Second Chance Code" });
    }

    // Reset status
    session.status = 'ready'; // Or 'started'
    session.score = null;
    session.questionOrder = null; // Will reshuffle on next start

    res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });
    res.json({ success: true, message: "Use the chance wisely." });
});


// 6. FAIL (Malpractice Trigger)
app.post('/api/fail', (req, res) => {
    const session = req.signedCookies.session;
    if (session) {
        session.status = 'failed';
        res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });
    }
    res.json({ success: true });
});

// 7. LOGOUT (Reset Session)
app.post('/api/logout', (req, res) => {
    res.clearCookie('session');
    res.json({ success: true, message: "Logged out" });
});

// Helper
function verifyAndSetStatus(res, session, newStatus) {
    session.status = newStatus;
    res.cookie('session', session, { httpOnly: true, signed: true, maxAge: 7200000 });
}

// Routes Mapping
app.post('/api/start', (req, res) => app._router.handle({ ...req, url: '/api/start-v2' }, res)); // Redirect logic internal
// Just replace the above definition with the v2 one in final code.

// Export for local
if (require.main === module) {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
