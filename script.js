document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const moneyDisplayHeader = document.getElementById('current-money-header');
    const currentLevelSidebar = document.getElementById('current-level-sidebar');
    const currentXPSidebar = document.getElementById('current-xp-sidebar');
    const xpToNextLevelSidebar = document.getElementById('xp-to-next-level-sidebar');
    const xpBarFill = document.getElementById('xp-bar-fill');
    const currentMoneySidebar = document.getElementById('current-money-sidebar');

    const shopFilterButtons = document.getElementById('shop-filter-buttons');
    const shopViewDefaultBtn = document.getElementById('shop-view-default-btn');
    const shopViewAllBtn = document.getElementById('shop-view-all-btn');
    const shopItemsContainer = document.getElementById('shop-items-container');

    const questFilterButtons = document.getElementById('quest-filter-buttons');
    const questViewDefaultBtn = document.getElementById('quest-view-default-btn');
    const questViewAllIncompleteBtn = document.getElementById('quest-view-all-incomplete-btn');
    const questViewCompletedBtn = document.getElementById('quest-view-completed-btn');
    const sideQuestsContainer = document.getElementById('side-quests-container');

    const welcomeScreen = document.getElementById('welcome-screen');
    const startGameBtn = document.getElementById('start-game-btn');
    const levelDisplay = document.getElementById('level-display');
    const gameCompleteScreen = document.getElementById('game-complete-screen');
    const restartGameBtn = document.getElementById('restart-game-btn');

    const levelTitle = document.getElementById('level-title');
    const levelProblem = document.getElementById('level-problem');
    const answerInput = document.getElementById('answer-input');
    const codeAnswerInput = document.getElementById('code-answer-input');
    const submitAnswerBtn = document.getElementById('submit-answer-btn');
    const feedbackArea = document.getElementById('feedback-area');
    const buyHintBtn = document.getElementById('buy-hint-btn');
    const hintCostDisplay = document.getElementById('hint-cost');
    const hintDisplay = document.getElementById('hint-display');
    const hintText = document.getElementById('hint-text');
    const searchLink = document.getElementById('search-link');
    const nextLevelBtn = document.getElementById('next-level-btn');

    const notificationModal = document.getElementById('notification-modal');
    const notificationMessage = document.getElementById('notification-message');
    const closeNotificationModalBtn = notificationModal.querySelector('.close-button');

    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();

    const HINT_COST = 20;
    hintCostDisplay.textContent = HINT_COST;
    const DEFAULT_SHOP_ITEMS_TO_SHOW = 5;
    const DEFAULT_QUESTS_TO_SHOW = 3;

    const levels = [
        { id: 1, title: "Variables in TypeScript", problem: "How do you declare a variable named 'message' of type strld' ring and assign it the value 'Hello Woin TypeScript?", answer: "let message: string = 'Hello World';", answerType: "code", xpAward: 50, moneyAward: 10, hint: "Use 'let', variable name, colon, type, equals sign, and value.", searchSuggestion: "typescript variable declaration string" },
        { id: 2, title: "Basic Number Type", problem: "What keyword is used to define a variable that holds a whole number or a floating-point number in TypeScript?", answer: "number", xpAward: 50, moneyAward: 10, hint: "It's a primitive type name.", searchSuggestion: "typescript number type" },
        { id: 3, title: "Boolean Values", problem: "Write a TypeScript statement that declares a variable 'isActive' and initializes it to true.", answer: "let isActive: boolean = true;", answerType: "code", xpAward: 60, moneyAward: 12, hint: "Booleans can be 'true' or 'false'.", searchSuggestion: "typescript boolean variable" },
        { id: 4, title: "Arrays of Strings", problem: "How do you define an array named 'fruits' that can only hold strings, and initialize it with 'apple' and 'banana'?", answer: "let fruits: string[] = ['apple', 'banana'];", answerType: "code", xpAward: 70, moneyAward: 15, hint: "Use square brackets for the type and for the array values.", searchSuggestion: "typescript string array" },
        { id: 5, title: "The 'any' Type", problem: "Which TypeScript type can hold any kind of value, effectively bypassing type checking?", answer: "any", xpAward: 60, moneyAward: 10, hint: "It's often discouraged for robust code.", searchSuggestion: "typescript any type" },
        { id: 6, title: "Simple Function Definition", problem: "Define a function called 'greet' that takes a 'name' of type string as an argument and returns a string 'Hello, ' followed by the name. (Provide only the function definition)", answer: "function greet(name: string): string { return 'Hello, ' + name; }", answerType: "code", xpAward: 80, moneyAward: 20, hint: "function funcName(param: type): returnType { ... }", searchSuggestion: "typescript function definition string return" },
        { id: 7, title: "Optional Parameters", problem: "In a function `logMessage(message: string, sender?: string)`, what does the '?' after 'sender' signify?", answer: "Optional parameter", xpAward: 70, moneyAward: 15, hint: "It means the parameter doesn't have to be provided when calling the function.", searchSuggestion: "typescript optional function parameters" },
        { id: 8, title: "Default Parameter Value", problem: "Write a function 'multiply' that takes two numbers, 'a' and 'b', where 'b' defaults to 2 if not provided, and returns their product.", answer: "function multiply(a: number, b: number = 2): number { return a * b; }", answerType: "code", xpAward: 90, moneyAward: 25, hint: "Assign the default value in the parameter list.", searchSuggestion: "typescript default parameter value" },
        { id: 9, title: "Void Return Type", problem: "What return type is used for a function that doesn't return any value?", answer: "void", xpAward: 60, moneyAward: 12, hint: "Think 'empty'.", searchSuggestion: "typescript void return type" },
        { id: 10, title: "Arrow Functions", problem: "Convert this function to an arrow function: `function add(x: number, y: number): number { return x + y; }`", answer: "const add = (x: number, y: number): number => x + y;", answerType: "code", xpAward: 80, moneyAward: 20, hint: "Use `=>` syntax. For a single return statement, curly braces can be omitted.", searchSuggestion: "typescript arrow function syntax" },
        { id: 11, title: "Defining an Interface", problem: "Define an interface 'User' with two properties: 'id' of type number and 'username' of type string.", answer: "interface User { id: number; username: string; }", answerType: "code", xpAward: 100, moneyAward: 30, hint: "Use the 'interface' keyword.", searchSuggestion: "typescript define interface" },
        { id: 12, title: "Implementing an Interface", problem: "If you have an interface `Person { name: string; age: number; }`, declare an object 'user1' that conforms to this interface.", answer: "let user1: Person = { name: 'Alice', age: 30 };", answerType: "code", xpAward: 100, moneyAward: 30, hint: "The object must have all properties defined in the interface with matching types.", searchSuggestion: "typescript implement interface object" },
        { id: 13, title: "Optional Interface Properties", problem: "How do you make a property 'email' optional within an interface 'Contact'?", answer: "interface Contact { email?: string; }", answerType: "code", xpAward: 90, moneyAward: 25, hint: "Use the '?' character after the property name.", searchSuggestion: "typescript optional interface property" },
        { id: 14, title: "Type Alias for Primitives", problem: "Create a type alias named 'UserID' for the type 'string'.", answer: "type UserID = string;", answerType: "code", xpAward: 70, moneyAward: 15, hint: "Use the 'type' keyword.", searchSuggestion: "typescript type alias for string" },
        { id: 15, title: "Type Alias for Union Types", problem: "Create a type alias 'StringOrNumber' that can be either a string or a number.", answer: "type StringOrNumber = string | number;", answerType: "code", xpAward: 100, moneyAward: 30, hint: "Use the '|' (pipe) character for union types.", searchSuggestion: "typescript type alias union type" },
        { id: 16, title: "Numeric Enum", problem: "Define a numeric enum 'Direction' with values North, East, South, West. What is the default numeric value of 'North'?", answer: "0", xpAward: 80, moneyAward: 20, hint: "Numeric enums start at 0 by default.", searchSuggestion: "typescript numeric enum default value" },
        { id: 17, title: "String Enum", problem: "Define a string enum 'LogLevel' with values 'INFO', 'WARN', 'ERROR', where each member is initialized with its string representation (e.g., INFO = 'INFO').", answer: "enum LogLevel { INFO = 'INFO', WARN = 'WARN', ERROR = 'ERROR' }", answerType: "code", xpAward: 100, moneyAward: 30, hint: "Initialize each enum member with a string value.", searchSuggestion: "typescript string enum" },
        { id: 18, title: "Basic Generic Function", problem: "A function `identity<T>(arg: T): T { return arg; }` is a generic function. What does 'T' represent?", answer: "Type parameter", xpAward: 90, moneyAward: 25, hint: "It's a placeholder for a specific type that will be provided when the function is called.", searchSuggestion: "typescript generic function type parameter" },
        { id: 19, title: "Using a Generic Function", problem: "Given `function getFirstElement<T>(arr: T[]): T { return arr[0]; }`, how would you call it with an array of numbers `[1, 2, 3]` ensuring type safety?", answer: "getFirstElement<number>([1, 2, 3])", answerType: "code", xpAward: 100, moneyAward: 30, hint: "Specify the type argument in angle brackets.", searchSuggestion: "typescript calling generic function" },
        { id: 20, title: "Type Assertion", problem: "If 'value' is of type 'any' but you know it's a string, how can you assert its type to 'string' using the 'as' keyword?", answer: "value as string", answerType: "code", xpAward: 80, moneyAward: 20, hint: "variable as Type", searchSuggestion: "typescript type assertion as keyword" },
        { id: 21, title: "Union Types", problem: "A variable `id` can be a `number` or a `string`. How do you write its type annotation?", answer: "number | string", answerType: "code", xpAward: 90, moneyAward: 25, hint: "Use the pipe character `|`.", searchSuggestion: "typescript union types" },
        { id: 22, title: "Literal Types", problem: "Define a type `PrimaryColor` that can only be one of the strings: 'red', 'green', or 'blue'.", answer: "type PrimaryColor = 'red' | 'green' | 'blue';", answerType: "code", xpAward: 100, moneyAward: 30, hint: "Use string literals combined with union types.", searchSuggestion: "typescript literal types" },
        { id: 23, title: "Readonly Properties", problem: "In an interface `Config { readonly apiKey: string; }`, what does `readonly` mean for `apiKey`?", answer: "Cannot be changed after initialization", xpAward: 80, moneyAward: 20, hint: "It makes the property immutable once the object is created.", searchSuggestion: "typescript readonly properties" },
        { id: 24, title: "Null and Undefined", problem: "What are the two primitive types in TypeScript that represent the absence of a meaningful value?", answer: "null and undefined", xpAward: 70, moneyAward: 15, hint: "One typically means 'intentionally no value', the other 'uninitialized'.", searchSuggestion: "typescript null undefined" },
        { id: 25, title: "tsconfig.json Purpose", problem: "What is the primary purpose of the `tsconfig.json` file in a TypeScript project?", answer: "Configure compiler options", xpAward: 100, moneyAward: 30, hint: "It specifies root files and compiler settings.", searchSuggestion: "purpose of tsconfig.json" },
    ];

    const shopItemsData = [
        { id: "hint_basic", name: "Basic Hint", description: "Reveals a general hint for the current level.", cost: HINT_COST, type: "hint", action: (gs) => {
            if (gs.money >= HINT_COST && levels[gs.level -1]) {
                if (hintDisplay.classList.contains('hidden') || buyHintBtn.classList.contains('hidden') === false) {
                    gs.money -= HINT_COST;
                    hintDisplay.classList.remove('hidden');
                    buyHintBtn.classList.add('hidden');
                    showNotification("Basic Hint purchased & revealed!");
                    gs.hintsPurchasedThisSession++;
                    gs.totalHintsPurchased++;
                    return true;
                } else {
                    showNotification("Hint already visible for this attempt."); return false;
                }
            } showNotification("Not enough money."); return false;
        }},
        { id: "hint_advanced", name: "Advanced Hint", description: "A more specific hint. (Costs more)", cost: 50, type: "hint", action: (gs) => {
            if (gs.money >= 50) { gs.money -= 50; showNotification("Advanced Hint activated! (Conceptual - check level hint area)"); gs.totalHintsPurchased++; return true;}
            showNotification("Not enough money."); return false;
        }},
        { id: "hint_concept", name: "Concept Refresher", description: "Unlocks a brief explanation of the core concept. (Conceptual)", cost: 70, type: "hint", action: (gs) => {
             if (gs.money >= 70) { gs.money -= 70; showNotification("Concept Refresher unlocked! (Imagine a modal here)"); return true;}
             showNotification("Not enough money."); return false;
        }},
        { id: "xp_boost_small", name: "XP Boost (S)", description: "Instantly gain 50 XP.", cost: 75, type: "boost", action: (gs) => {
            if (gs.money >= 75) { gs.money -= 75; gs.xp += 50; gs.totalXPEarned += 50; showNotification("+50 XP!"); return true;}
            showNotification("Not enough money."); return false;
        }},
        { id: "xp_boost_medium", name: "XP Boost (M)", description: "Instantly gain 150 XP.", cost: 200, type: "boost", action: (gs) => {
            if (gs.money >= 200) { gs.money -= 200; gs.xp += 150; gs.totalXPEarned += 150; showNotification("+150 XP!"); return true;}
            showNotification("Not enough money."); return false;
        }},
        { id: "xp_boost_large", name: "XP Boost (L)", description: "Instantly gain 300 XP.", cost: 350, type: "boost", action: (gs) => {
            if (gs.money >= 350) { gs.money -= 350; gs.xp += 300; gs.totalXPEarned += 300; showNotification("+300 XP!"); return true;}
            showNotification("Not enough money."); return false;
        }},
        { id: "money_boost_small", name: "Money Printer (S)", description: "Instantly gain $25.", cost: 50, type: "boost", action: (gs) => {
            if (gs.money >= 50) { gs.money -= 50; gs.money += 25; gs.totalMoneyEarned += 25; showNotification("+$25 Profit!"); return true;}
            showNotification("Not enough money (need $50)."); return false;
        }},
         { id: "money_boost_medium", name: "Money Printer (M)", description: "Instantly gain $75.", cost: 120, type: "boost", action: (gs) => {
            if (gs.money >= 120) { gs.money -= 120; gs.money += 75; gs.totalMoneyEarned += 75; showNotification("+$75 Profit!"); return true;}
            showNotification("Not enough money (need $120)."); return false;
        }},
        { id: "double_rewards_next", name: "Double Rewards", description: "Doubles XP & Money from the next successfully completed level.", cost: 150, type: "boost", oneTime: true, action: (gs) => {
            if (gs.money >= 150) {
                if(gs.activeBoosts.includes("double_rewards_next")) { showNotification("Double Rewards already active!"); return false; }
                gs.money -= 150; gs.activeBoosts.push("double_rewards_next"); showNotification("Double Rewards active for next level!"); return true;
            } showNotification("Not enough money."); return false;
        }},
        { id: "skip_level_token", name: "Skip Level Token", description: "Skips the current level (no rewards).", cost: 250, type: "utility", action: (gs) => {
            if (gs.money >= 250) {
                if (gs.level >= levels.length) { showNotification("At last level, cannot skip."); return false; }
                gs.money -= 250; gs.currentLevelSkipped = true;
                showNotification("Level skipped!");
                if (gs.level < levels.length) { loadLevel(gs.level + 1); } else { gameCompleteScreen.classList.remove('hidden'); levelDisplay.classList.add('hidden');}
                return true;
            } showNotification("Not enough money."); return false;
        }},
        { id: "second_chance", name: "Second Chance", description: "Retry a wrong answer once without penalty this level.", cost: 80, type: "utility", oneTimePerLevel: true, action: (gs) => {
            if (gs.money >= 80) {
                if(gs.activeBoosts.includes("second_chance_current_level")) { showNotification("Second Chance already active for this level!"); return false; }
                gs.money -= 80; gs.activeBoosts.push("second_chance_current_level"); showNotification("Second Chance active!"); return true;
            } showNotification("Not enough money."); return false;
        }},
        { id: "unlock_cheatsheet", name: "TS Cheatsheet", description: "Unlocks a link to a handy TS Cheatsheet.", cost: 100, type: "unlock", action: (gs) => {
            if (gs.money >= 100) { gs.money -= 100; showNotification("Cheatsheet unlocked! (Imagine a link appearing in a new 'Resources' tab)"); gs.unlockedFeatures.push("cheatsheet"); return true;}
            showNotification("Not enough money."); return false;
        }},
        { id: "theme_retro", name: "Theme: Retro Vibes", description: "Unlock a cool retro terminal theme for the game.", cost: 300, type: "cosmetic", action: (gs) => {
            if (gs.money >= 300) {
                if(gs.unlockedThemes.includes("retro")) { showNotification("Retro theme already unlocked!"); return false; }
                gs.money -= 300; gs.unlockedThemes.push("retro"); showNotification("Retro Vibes theme unlocked! (Theme switching UI needed)"); return true;
            } showNotification("Not enough money."); return false;
        }},
        { id: "font_comicsans", name: "Font: Comic Sans", description: "For the memes. Unlock Comic Sans font.", cost: 50, type: "cosmetic", action: (gs) => {
             if (gs.money >= 50) {
                if(gs.unlockedFonts.includes("comicsans")) { showNotification("Comic Sans already unlocked!"); return false; }
                gs.money -= 50; gs.unlockedFonts.push("comicsans"); showNotification("Comic Sans unlocked... why? (Font switching UI needed)"); return true;
            } showNotification("Not enough money."); return false;
        }},
        { id: "badge_pro", name: "Badge: TS Pro", description: "A shiny badge for your (non-existent) profile.", cost: 500, type: "cosmetic", action: (gs) => {
             if (gs.money >= 500) { gs.money -= 500; showNotification("TS Pro Badge acquired! Wear it with pride (conceptually)."); gs.unlockedBadges.push("pro"); return true;}
             showNotification("Not enough money."); return false;
        }},
        { id: "fun_fact_unlock", name: "Fun TypeScript Fact", description: "Learn a fun fact about TypeScript.", cost: 25, type: "unlock", action: (gs) => {
            if (gs.money >= 25) { gs.money -= 25; showNotification("Fact: TypeScript was created by Microsoft! (More facts could be cycled)"); return true;}
            showNotification("Not enough money."); return false;
        }},
        { id: "streak_saver", name: "Streak Saver", description: "Saves your (conceptual) correct answer streak if you get one wrong.", cost: 120, type: "utility", action: (gs) => {
            if (gs.money >= 120) { gs.money -= 120; showNotification("Streak Saver purchased! (Conceptual)"); return true; }
            showNotification("Not enough money."); return false;
        }},
        { id: "auto_formatter_pass", name: "Auto-Format Pass", description: "Conceptual: 'Formats' your code answer attempt once.", cost: 60, type: "utility", action: (gs) => {
            if (gs.money >= 60) { gs.money -= 60; showNotification("Auto-Format Pass used! (Your code looks prettier now - conceptually)"); return true; }
            showNotification("Not enough money."); return false;
        }},
        { id: "error_insight", name: "Error Insight", description: "Get a (slightly) more detailed error message. (Conceptual)", cost: 90, type: "hint", action: (gs) => {
            if (gs.money >= 90) { gs.money -= 90; showNotification("Error Insight: 'Maybe check your types?' (More specific hints TBD)"); return true; }
            showNotification("Not enough money."); return false;
        }},
        { id: "mystery_box", name: "Mystery Box", description: "Contains a random small reward (XP or Money).", cost: 100, type: "random", action: (gs) => {
            if (gs.money >= 100) {
                gs.money -= 100;
                const rand = Math.random();
                if (rand < 0.5) { const M = Math.floor(Math.random() * 50) + 25; gs.money += M; gs.totalMoneyEarned += M; showNotification(`Mystery Box: +$${M}!`);}
                else { const X = Math.floor(Math.random() * 75) + 50; gs.xp += X; gs.totalXPEarned += X; showNotification(`Mystery Box: +${X} XP!`);}
                return true;
            } showNotification("Not enough money."); return false;
        }},
        { id: "theme_blueprint", name: "Theme: Blueprint", description: "A schematic-style theme.", cost: 320, type: "cosmetic", action: (gs) => {
            if (gs.money >= 320) {
                if(gs.unlockedThemes.includes("blueprint")) { showNotification("Blueprint theme already unlocked!"); return false; }
                gs.money -= 320; gs.unlockedThemes.push("blueprint"); showNotification("Blueprint theme unlocked! (Theme switching UI needed)"); return true;
            } showNotification("Not enough money."); return false;
        }},
        { id: "coffee_break", name: "Virtual Coffee", description: "Take a break! +10 Max Energy (Conceptual).", cost: 30, type: "fun", action: (gs) => {
            if (gs.money >= 30) { gs.money -= 30; showNotification("Ah, refreshing virtual coffee! You feel slightly more energetic (conceptually)."); return true; }
            showNotification("Not enough money."); return false;
        }},
        { id: "rubber_duck_debugging", name: "Rubber Duck", description: "A friendly duck to talk to. Helps with debugging!", cost: 70, type: "fun", action: (gs) => {
            if (gs.money >= 70) { gs.money -= 70; showNotification("Quack! The duck listens patiently. You suddenly understand the problem! (Probably)"); return true; }
            showNotification("Not enough money."); return false;
        }},
        { id: "ask_the_dev_token", name: "Ask The Dev Token", description: "Get one *really* good hint from the 'developer'. (Conceptual)", cost: 400, type: "hint", action: (gs) => {
            if (gs.money >= 400) { gs.money -= 400; showNotification("Dev Hint: 'Have you tried turning it off and on again?' Just kidding! (Specific hint TBD)"); return true; }
            showNotification("Not enough money."); return false;
        }},
        { id: "instant_xp_level", name: "Instant XP Level", description: "Gain enough XP for one XP level-up bonus.", cost: 220, type: "boost", action: (gs) => {
            if (gs.money >= 220) {
                gs.money -= 220;
                const xpNeeded = xpToNextLevel(gs.level) - gs.xp;
                gs.xp += (xpNeeded > 0 ? xpNeeded : xpToNextLevel(gs.level));
                gs.totalXPEarned += (xpNeeded > 0 ? xpNeeded : xpToNextLevel(gs.level));
                showNotification("Instant XP Level achieved!");
                checkLevelUp();
                return true;
            } showNotification("Not enough money."); return false;
        }},
    ];


    const sideQuestsData = [
        { id: "sq1", title: "Getting Started", description: "Complete Level 1.", requirement: (gs) => gs.level > 1 || (gs.level === 1 && gs.completedLevels.includes(1)), rewardMoney: 20, rewardXP: 50 },
        { id: "sq2", title: "First Steps", description: "Reach Level 3.", requirement: (gs) => gs.level > 3 || (gs.level === 3 && gs.completedLevels.includes(3)), rewardMoney: 30, rewardXP: 75 },
        { id: "sq3", title: "Novice Coder", description: "Complete 5 main levels.", requirement: (gs) => gs.completedLevels.length >= 5, rewardMoney: 50, rewardXP: 100 },
        { id: "sq4", title: "Money Maker", description: "Earn a total of 100 money.", requirement: (gs) => gs.totalMoneyEarned >= 100, rewardMoney: 25, rewardXP: 50 },
        { id: "sq5", title: "Function Fanatic", description: "Complete Level 6 (Simple Function Definition).", requirement: (gs) => gs.completedLevels.includes(6), rewardMoney: 40, rewardXP: 80 },
        { id: "sq6", title: "Interface Explorer", description: "Complete Level 11 (Defining an Interface).", requirement: (gs) => gs.completedLevels.includes(11), rewardMoney: 60, rewardXP: 120 },
        { id: "sq7", title: "TypeScript Basics Master", description: "Complete the first 10 levels.", requirement: (gs) => gs.completedLevels.length >= 10 && Array.from({length: 10}, (_, i) => i + 1).every(l => gs.completedLevels.includes(l)), rewardMoney: 100, rewardXP: 200 },
        { id: "sq8", title: "Smart Shopper", description: "Buy any item from the shop.", requirement: (gs) => gs.itemsPurchasedCount > 0, rewardMoney: 20, rewardXP: 30 },
        { id: "sq9", title: "Hint User", description: "Purchase 3 hints (can be across multiple levels/sessions).", requirement: (gs) => gs.totalHintsPurchased >= 3, rewardMoney: 30, rewardXP: 60 },
        { id: "sq10", title: "Persistent Learner", description: "Log in (load game) 3 times.", requirement: (gs) => gs.loginCount >= 3, rewardMoney: 50, rewardXP: 100 },
        { id: "sq11", title: "Midway Point", description: "Reach Level 13.", requirement: (gs) => gs.level > 13 || (gs.level === 13 && gs.completedLevels.includes(13)), rewardMoney: 70, rewardXP: 150 },
        { id: "sq12", title: "Code Connoisseur", description: "Answer 5 'code' type questions correctly.", requirement: (gs) => gs.codeQuestionsAnsweredCorrectly >= 5, rewardMoney: 80, rewardXP: 160 },
        { id: "sq13", title: "XP Hoarder", description: "Accumulate 1000 total XP.", requirement: (gs) => gs.totalXPEarned >= 1000, rewardMoney: 75, rewardXP: 0 },
        { id: "sq14", title: "Dedicated Student", description: "Complete 15 main levels.", requirement: (gs) => gs.completedLevels.length >= 15, rewardMoney: 150, rewardXP: 300 },
        { id: "sq15", title: "Enum Expert", description: "Complete Level 16 (Numeric Enum).", requirement: (gs) => gs.completedLevels.includes(16), rewardMoney: 50, rewardXP: 100 },
        { id: "sq16", title: "Generic Genius (Intro)", description: "Complete Level 18 (Basic Generic Function).", requirement: (gs) => gs.completedLevels.includes(18), rewardMoney: 60, rewardXP: 120 },
        { id: "sq17", title: "Almost There!", description: "Reach Level 20.", requirement: (gs) => gs.level > 20 || (gs.level === 20 && gs.completedLevels.includes(20)), rewardMoney: 100, rewardXP: 200 },
        { id: "sq18", title: "Full Arsenal", description: "Buy 3 *different types* of items from the shop (e.g., hint, boost, utility).", requirement: (gs) => { const types = new Set(gs.purchasedItemTypes.map(id => shopItemsData.find(i=>i.id===id)?.type)); return types.size >=3; }, rewardMoney: 120, rewardXP: 150 },
        { id: "sq19", title: "The Assertor", description: "Complete Level 20 (Type Assertion).", requirement: (gs) => gs.completedLevels.includes(20), rewardMoney: 70, rewardXP: 100 },
        { id: "sq20", title: "Completionist in Training", description: "Complete 20 main levels.", requirement: (gs) => gs.completedLevels.length >= 20, rewardMoney: 200, rewardXP: 400 },
        { id: "sq21", title: "Literal Thinker", description: "Complete Level 22 (Literal Types).", requirement: (gs) => gs.completedLevels.includes(22), rewardMoney: 80, rewardXP: 150 },
        { id: "sq22", title: "Readonly Ruler", description: "Complete Level 23 (Readonly Properties).", requirement: (gs) => gs.completedLevels.includes(23), rewardMoney: 70, rewardXP: 130 },
        { id: "sq23", title: "True TypeScript Pro", description: "Complete Level 25 (tsconfig.json Purpose).", requirement: (gs) => gs.completedLevels.includes(25), rewardMoney: 150, rewardXP: 250 },
        { id: "sq24", title: "Side Quest Champion", description: "Complete 10 side quests.", requirement: (gs) => gs.completedSideQuests.length >= 10, rewardMoney: 100, rewardXP: 200 },
        { id: "sq25", title: "Ultimate Achiever", description: "Complete all 25 main levels.", requirement: (gs) => gs.completedLevels.length === levels.length && levels.length > 0, rewardMoney: 500, rewardXP: 1000 }
    ];

    let gameState = {
        level: 1,
        xp: 0,
        money: 0,
        theme: 'dark',
        questDisplayMode: 'default',
        shopDisplayMode: 'default',
        completedLevels: [],
        completedSideQuests: [],
        totalMoneyEarned: 0,
        totalXPEarned: 0,
        itemsPurchasedCount: 0,
        totalHintsPurchased: 0,
        hintsPurchasedThisSession: 0,
        loginCount: 0,
        codeQuestionsAnsweredCorrectly: 0,
        purchasedItemTypes: [],
        activeBoosts: [],
        unlockedFeatures: [],
        unlockedThemes: [],
        unlockedFonts: [],
        unlockedBadges: [],
        currentLevelSkipped: false,
    };

    function xpToNextLevel(level) {
        if (level <= 0) return 100;
        return 100 + (level - 1) * 50;
    }

    function loadGame() {
        const savedState = localStorage.getItem('tsQuestGameState');
        if (savedState) {
            const loadedGs = JSON.parse(savedState);
            gameState = {...gameState, ...loadedGs};
            gameState.completedLevels = gameState.completedLevels || [];
            gameState.completedSideQuests = gameState.completedSideQuests || [];
            gameState.purchasedItemTypes = gameState.purchasedItemTypes || [];
            gameState.activeBoosts = gameState.activeBoosts || [];
            gameState.unlockedFeatures = gameState.unlockedFeatures || [];
            gameState.unlockedThemes = gameState.unlockedThemes || [];
            gameState.unlockedFonts = gameState.unlockedFonts || [];
            gameState.unlockedBadges = gameState.unlockedBadges || [];
            gameState.questDisplayMode = gameState.questDisplayMode || 'default';
            gameState.shopDisplayMode = gameState.shopDisplayMode || 'default';
        }
        gameState.loginCount = (gameState.loginCount || 0) + 1;
        applyTheme(gameState.theme);
        saveGame();
    }

    function saveGame() {
        localStorage.setItem('tsQuestGameState', JSON.stringify(gameState));
    }

    function applyTheme(themeName) {
        body.classList.remove('dark-mode', 'light-mode');
        body.classList.add(themeName + '-mode');
        gameState.theme = themeName;
    }

    function toggleTheme() {
        const newTheme = gameState.theme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
        saveGame();
    }

    function showNotification(message, duration = 3000) {
        notificationMessage.textContent = message;
        notificationModal.classList.remove('hidden');
        if (gameState.notificationTimeout) clearTimeout(gameState.notificationTimeout);
        gameState.notificationTimeout = setTimeout(() => {
            if(notificationModal.classList.contains('hidden') === false) {
                 notificationModal.classList.add('hidden');
            }
        }, duration);
    }
    closeNotificationModalBtn.addEventListener('click', () => {
        notificationModal.classList.add('hidden');
        if (gameState.notificationTimeout) clearTimeout(gameState.notificationTimeout);
    });

    function updateUI() {
        moneyDisplayHeader.textContent = gameState.money;
        currentMoneySidebar.textContent = gameState.money;
        currentLevelSidebar.textContent = gameState.level;
        currentXPSidebar.textContent = gameState.xp;

        const nextLevelXP = xpToNextLevel(gameState.level);
        xpToNextLevelSidebar.textContent = nextLevelXP;
        xpBarFill.style.width = `${Math.min(100, (gameState.xp / nextLevelXP) * 100)}%`;

        renderShopItems();
        renderSideQuests();
        updateFilterButtonStates();
        saveGame();
    }

    function updateFilterButtonStates() {
        shopFilterButtons.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        if (gameState.shopDisplayMode === 'default') shopViewDefaultBtn.classList.add('active');
        else if (gameState.shopDisplayMode === 'all') shopViewAllBtn.classList.add('active');

        questFilterButtons.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        if (gameState.questDisplayMode === 'default') questViewDefaultBtn.classList.add('active');
        else if (gameState.questDisplayMode === 'all_incomplete') questViewAllIncompleteBtn.classList.add('active');
        else if (gameState.questDisplayMode === 'completed') questViewCompletedBtn.classList.add('active');
    }


    function renderShopItems() {
        shopItemsContainer.innerHTML = '';
        let itemsToShow = shopItemsData;

        if (gameState.shopDisplayMode === 'default') {
            itemsToShow = shopItemsData.slice(0, DEFAULT_SHOP_ITEMS_TO_SHOW);
        }

        if (itemsToShow.length === 0 && shopItemsData.length > 0 && gameState.shopDisplayMode === 'default') {
             shopItemsContainer.innerHTML = `<p class="placeholder-text">Showing first ${DEFAULT_SHOP_ITEMS_TO_SHOW}. Click "View All" for more.</p>`;
        } else if (itemsToShow.length === 0) {
             shopItemsContainer.innerHTML = '<p class="placeholder-text">No items match current filter or shop is empty.</p>';
             return;
        }


        itemsToShow.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('shop-item');
            let ownedIndicator = "";
            if (item.type === 'cosmetic' || item.type === 'unlock') {
                const isUnlocked = (item.id.includes("theme_") && gameState.unlockedThemes.includes(item.id.split("theme_")[1])) ||
                                 (item.id.includes("font_") && gameState.unlockedFonts.includes(item.id.split("font_")[1])) ||
                                 (item.id.includes("badge_") && gameState.unlockedBadges.includes(item.id.split("badge_")[1])) ||
                                 (gameState.unlockedFeatures.includes(item.id));
                if (isUnlocked) ownedIndicator = " <span class='owned-indicator'>(Owned)</span>";
            }


            itemDiv.innerHTML = `
                <h4>${item.name}${ownedIndicator}</h4>
                <p>${item.description}</p>
                <p>Cost: $${item.cost}</p>
                <button class="buy-item-btn action-button" data-item-id="${item.id}" ${gameState.money < item.cost || ownedIndicator ? 'disabled' : ''}>Buy</button>
            `;
            shopItemsContainer.appendChild(itemDiv);
        });

        shopItemsContainer.querySelectorAll('.buy-item-btn').forEach(button => {
            button.addEventListener('click', () => buyItem(button.dataset.itemId));
        });
    }

    function buyItem(itemId) {
        const item = shopItemsData.find(i => i.id === itemId);
        if (item) {
            if (item.type === 'cosmetic' || item.type === 'unlock') {
                const isUnlocked = (item.id.includes("theme_") && gameState.unlockedThemes.includes(item.id.split("theme_")[1])) ||
                                 (item.id.includes("font_") && gameState.unlockedFonts.includes(item.id.split("font_")[1])) ||
                                 (item.id.includes("badge_") && gameState.unlockedBadges.includes(item.id.split("badge_")[1])) ||
                                 (gameState.unlockedFeatures.includes(item.id));
                if (isUnlocked) {
                    showNotification("You already own this item!");
                    return;
                }
            }

            const purchaseSuccessful = item.action(gameState);
            if (purchaseSuccessful) {
                gameState.itemsPurchasedCount = (gameState.itemsPurchasedCount || 0) + 1;
                if (!gameState.purchasedItemTypes.includes(item.id)) {
                    gameState.purchasedItemTypes.push(item.id);
                }
                checkSideQuests();
                updateUI();
            }
        }
    }


    function renderSideQuests() {
        sideQuestsContainer.innerHTML = '';
        let questsToDisplay = [];
        let placeholderMsg = "No quests match current filter.";

        if (gameState.questDisplayMode === 'default') {
            questsToDisplay = sideQuestsData
                .filter(q => !gameState.completedSideQuests.includes(q.id))
                .slice(0, DEFAULT_QUESTS_TO_SHOW);
            if (questsToDisplay.length === 0 && sideQuestsData.some(q => !gameState.completedSideQuests.includes(q.id))) {
                placeholderMsg = `All ${DEFAULT_QUESTS_TO_SHOW} initial quests shown or completed. View others via filters.`;
            } else if (questsToDisplay.length === 0) {
                 placeholderMsg = "All quests completed or no incomplete quests available!";
            }
        } else if (gameState.questDisplayMode === 'all_incomplete') {
            questsToDisplay = sideQuestsData.filter(q => !gameState.completedSideQuests.includes(q.id));
             if (questsToDisplay.length === 0) placeholderMsg = "No incomplete quests remaining!";
        } else if (gameState.questDisplayMode === 'completed') {
            questsToDisplay = sideQuestsData.filter(q => gameState.completedSideQuests.includes(q.id));
            if (questsToDisplay.length === 0) placeholderMsg = "No quests completed yet.";
        }

        if (questsToDisplay.length === 0) {
            sideQuestsContainer.innerHTML = `<p class="placeholder-text">${placeholderMsg}</p>`;
            return;
        }

        questsToDisplay.forEach(quest => {
            const questDiv = document.createElement('div');
            questDiv.classList.add('side-quest');
            if (gameState.completedSideQuests.includes(quest.id)) {
                questDiv.classList.add('completed');
            }
            questDiv.innerHTML = `
                <h4>${quest.title}</h4>
                <p>${quest.description}</p>
                <p class="quest-reward">Reward: $${quest.rewardMoney}, ${quest.rewardXP} XP</p>
            `;
            sideQuestsContainer.appendChild(questDiv);
        });
    }


    function checkSideQuests() {
        let questCompletedThisCheck = false;
        sideQuestsData.forEach(quest => {
            if (!gameState.completedSideQuests.includes(quest.id)) {
                if (quest.requirement(gameState)) {
                    gameState.completedSideQuests.push(quest.id);
                    let rewardMoney = quest.rewardMoney;
                    let rewardXP = quest.rewardXP;

                    gameState.money += rewardMoney;
                    gameState.xp += rewardXP;
                    gameState.totalMoneyEarned += rewardMoney;
                    gameState.totalXPEarned += rewardXP;
                    showNotification(`Side Quest Completed: ${quest.title}! Reward: $${rewardMoney}, ${rewardXP} XP`);
                    questCompletedThisCheck = true;
                }
            }
        });
        if (questCompletedThisCheck) {
            checkLevelUp();
        }
    }

    function loadLevel(levelNumber) {
        welcomeScreen.classList.add('hidden');
        gameCompleteScreen.classList.add('hidden');
        levelDisplay.classList.remove('hidden');

        if (levelNumber > levels.length) {
            levelDisplay.classList.add('hidden');
            gameCompleteScreen.classList.remove('hidden');
            return;
        }

        const currentLevelData = levels[levelNumber - 1];
        gameState.level = levelNumber;
        gameState.hintsPurchasedThisSession = 0;
        gameState.currentLevelSkipped = false;
        gameState.activeBoosts = gameState.activeBoosts.filter(b => b !== "second_chance_current_level");

        levelTitle.textContent = `Level ${currentLevelData.id}: ${currentLevelData.title}`;
        levelProblem.textContent = currentLevelData.problem;
        answerInput.value = '';
        codeAnswerInput.value = '';
        feedbackArea.textContent = '';
        feedbackArea.className = 'feedback';
        nextLevelBtn.classList.add('hidden');
        submitAnswerBtn.disabled = false;

        if (currentLevelData.answerType === 'code') {
            answerInput.classList.add('hidden');
            codeAnswerInput.classList.remove('hidden');
            codeAnswerInput.focus();
        } else {
            answerInput.classList.remove('hidden');
            codeAnswerInput.classList.add('hidden');
            answerInput.focus();
        }

        hintDisplay.classList.add('hidden');
        buyHintBtn.classList.remove('hidden'); 
        if (currentLevelData.hint) {
            hintText.textContent = currentLevelData.hint;
            searchLink.href = `https://www.google.com/search?q=typescript+${encodeURIComponent(currentLevelData.searchSuggestion || currentLevelData.title)}`;
            searchLink.textContent = `Search for "${currentLevelData.searchSuggestion || currentLevelData.title}"`;
        } else {
            buyHintBtn.classList.add('hidden');
        }
        updateUI();
    }

    function handleSubmitAnswer() {
        const currentLevelData = levels[gameState.level - 1];
        if (!currentLevelData) return;

        const userAnswer = (currentLevelData.answerType === 'code' ? codeAnswerInput.value.trim() : answerInput.value.trim());
        const correctAnswer = currentLevelData.answer;

        let isCorrect = false;
        if (currentLevelData.answerType === 'code') {
            isCorrect = userAnswer.replace(/\s+/g, ' ') === correctAnswer.replace(/\s+/g, ' ');
        } else {
            isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
        }

        if (isCorrect) {
            let moneyAward = currentLevelData.moneyAward;
            let xpAward = currentLevelData.xpAward;

            if (gameState.activeBoosts.includes("double_rewards_next")) {
                moneyAward *= 2;
                xpAward *= 2;
                showNotification("Double Rewards applied!");
                gameState.activeBoosts = gameState.activeBoosts.filter(b => b !== "double_rewards_next");
            }

            feedbackArea.textContent = `Correct! +$${moneyAward} Money, +${xpAward} XP.`;
            feedbackArea.className = 'feedback success';
            gameState.money += moneyAward;
            gameState.xp += xpAward;
            gameState.totalMoneyEarned += moneyAward;
            gameState.totalXPEarned += xpAward;

            if (!gameState.completedLevels.includes(currentLevelData.id)) {
                gameState.completedLevels.push(currentLevelData.id);
            }
            if (currentLevelData.answerType === 'code') {
                gameState.codeQuestionsAnsweredCorrectly = (gameState.codeQuestionsAnsweredCorrectly || 0) + 1;
            }

            nextLevelBtn.classList.remove('hidden');
            submitAnswerBtn.disabled = true;
            buyHintBtn.classList.add('hidden');
            checkLevelUp();
            checkSideQuests();
        } else {
            if (gameState.activeBoosts.includes("second_chance_current_level")) {
                feedbackArea.textContent = "Incorrect, but you have a Second Chance! Try again.";
                feedbackArea.className = 'feedback error';
                gameState.activeBoosts = gameState.activeBoosts.filter(b => b !== "second_chance_current_level");
            } else {
                feedbackArea.textContent = "Incorrect. Try again or buy a hint if available.";
                feedbackArea.className = 'feedback error';
            }
        }
        updateUI();
    }


    function checkLevelUp() {
        let currentLevelXPRequired = xpToNextLevel(gameState.level);
        let leveledUpThisCheck = false;
        while (gameState.xp >= currentLevelXPRequired && currentLevelXPRequired > 0) {
            gameState.xp -= currentLevelXPRequired;
            const bonusMoney = Math.floor(xpToNextLevel(gameState.level) / 5);
            gameState.money += bonusMoney;
            gameState.totalMoneyEarned += bonusMoney;
            showNotification(`XP Level Up! Bonus: $${bonusMoney}`);
            leveledUpThisCheck = true;
            currentLevelXPRequired = xpToNextLevel(gameState.level);
        }
        if(leveledUpThisCheck) {
            updateUI();
        }
    }


    themeToggleBtn.addEventListener('click', toggleTheme);
    startGameBtn.addEventListener('click', () => loadLevel(gameState.level > levels.length ? 1 : gameState.level));
    submitAnswerBtn.addEventListener('click', handleSubmitAnswer);
    answerInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSubmitAnswer(); });
    codeAnswerInput.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            e.target.value = e.target.value.substring(0, start) + "\t" + e.target.value.substring(end);
            e.target.selectionStart = e.target.selectionEnd = start + 1;
        }
        if (e.key === 'Enter' && e.ctrlKey) {
            handleSubmitAnswer();
        }
    });

    nextLevelBtn.addEventListener('click', () => {
        if (gameState.level < levels.length) {
            loadLevel(gameState.level + 1);
        } else {
            levelDisplay.classList.add('hidden');
            gameCompleteScreen.classList.remove('hidden');
        }
    });

    buyHintBtn.addEventListener('click', () => {
        const basicHintItem = shopItemsData.find(i => i.id === "hint_basic");
        if (basicHintItem) {
            if (gameState.money >= basicHintItem.cost) {
                 if (hintDisplay.classList.contains('hidden')) {
                    gameState.money -= basicHintItem.cost;
                    hintDisplay.classList.remove('hidden');
                    buyHintBtn.classList.add('hidden');
                    showNotification("Hint revealed!");
                    gameState.hintsPurchasedThisSession++;
                    gameState.totalHintsPurchased++;
                    updateUI();
                    checkSideQuests();
                 } else {
                    showNotification("Hint already shown for this attempt.");
                 }
            } else {
                showNotification(`Not enough money for a hint (Need $${basicHintItem.cost}).`);
            }
        } else {
            showNotification("Basic hint item not found in shop data.");
        }
    });

    restartGameBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to restart the game? All progress will be lost.")) {
            localStorage.removeItem('tsQuestGameState');
            const currentTheme = gameState.theme;
            gameState = {
                level: 1, xp: 0, money: 0, theme: currentTheme,
                questDisplayMode: 'default', shopDisplayMode: 'default',
                completedLevels: [], completedSideQuests: [], totalMoneyEarned: 0, totalXPEarned: 0,
                itemsPurchasedCount: 0, totalHintsPurchased: 0, hintsPurchasedThisSession: 0,
                loginCount: 1, codeQuestionsAnsweredCorrectly: 0, purchasedItemTypes: [],
                activeBoosts: [], unlockedFeatures: [], unlockedThemes: [], unlockedFonts: [], unlockedBadges: [],
                currentLevelSkipped: false,
            };
            gameCompleteScreen.classList.add('hidden');
            welcomeScreen.classList.remove('hidden');
            loadLevel(1);
            updateUI();
        }
    });

    shopViewDefaultBtn.addEventListener('click', () => { gameState.shopDisplayMode = 'default'; updateUI(); });
    shopViewAllBtn.addEventListener('click', () => { gameState.shopDisplayMode = 'all'; updateUI(); });

    questViewDefaultBtn.addEventListener('click', () => { gameState.questDisplayMode = 'default'; updateUI(); });
    questViewAllIncompleteBtn.addEventListener('click', () => { gameState.questDisplayMode = 'all_incomplete'; updateUI(); });
    questViewCompletedBtn.addEventListener('click', () => { gameState.questDisplayMode = 'completed'; updateUI(); });


    loadGame();
    if (gameState.level > levels.length && levels.length > 0) {
        welcomeScreen.classList.add('hidden');
        levelDisplay.classList.add('hidden');
        gameCompleteScreen.classList.remove('hidden');
    } else if (levels.length === 0) {
        welcomeScreen.classList.remove('hidden');
        levelDisplay.classList.add('hidden');
        welcomeScreen.innerHTML = `<h2>Game Data Missing</h2><p>No levels found. Please define levels in script.js.</p>`;
    }
    else if (gameState.level === 1 && gameState.xp === 0 && gameState.money === 0 && gameState.completedLevels.length === 0 && gameState.completedSideQuests.length === 0) {
        welcomeScreen.classList.remove('hidden');
        levelDisplay.classList.add('hidden');
    } else {
        loadLevel(gameState.level);
    }
    updateUI();
    checkSideQuests();

});
