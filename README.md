
# 1. Command Line User Interface Flowchart Diagram
```mermaid
flowchart TD
    
    BEGIN((BEGIN))
    
    %% main menu
    login_menu["Enter username"]

    BEGIN ==> login_menu
    
    main_menu["`
    1\. Take a quiz
    2\. Update questions database
    3\. Statistics
    0\. Exit`"]
    
    END((END))
    
    main_menu == "Option 0" ==> END
    login_menu == "Username entered" ==> main_menu

    %% quiz menu
    question_menu["`
        _Question formulation_
        Please enter your answer below:
        `"]

    main_menu == "Option 1" ==> question_menu
 
    is_last_question{"Is last question?"}

    question_menu == "Answer entered" ==> is_last_question
    is_last_question -- "No" --> question_menu

    result_menu["`
        _Your results displayed_
        Press ENTER to return to main menu
        `"]

    is_last_question -- "Yes" --> result_menu
    result_menu -. "ENTER pressed" .-> main_menu


    %% statistics menu
    statistics_menu["`
    1\. History of quiz taking
    2\. Display average mark
    0\. Back
    `"]

    main_menu == "Option 3" ==> statistics_menu
    
    history_display["`
    _Attempt 1 | MARK | PASS/FAIL
    ...
    Attempt N | MARK | PASS/FAIL_
    Press ENTER to go back
    `"]
    
    average_mark_display["`
    _Number of attempts: N
    Average mark: AVG_
    Press ENTER to go back
    `"]
    
    statistics_menu == "Option 1" ==> history_display
    history_display -. "ENTER pressed" .-> statistics_menu
    statistics_menu == "Option 2" ==> average_mark_display
    average_mark_display -. "ENTER pressed" .-> statistics_menu
    statistics_menu -. "Option 0" .-> main_menu

    %% database update menu
    database_update_menu["`
    1\. Add a question
    2\. Remove a question
    3\. List all questions
    0\. Back
    `"]

    main_menu == "Option 2" ==> database_update_menu

    add_question_flow["Enter question type (MULTI or FREE)"]
    database_update_menu == "Option 1" ==> add_question_flow

    free_question_add_formulation["Enter the question formulation"]
    add_question_flow -- "FREE entered" --> free_question_add_formulation
    free_question_add_correct_answer["Enter the correct answer"]
    free_question_add_formulation -- "Formulation entered" --> free_question_add_correct_answer

    multi_question_add_formulation["Enter the question formulation"]
    add_question_flow -- "MULTI entered" --> multi_question_add_formulation
    multi_question_add_options["Enter the answer options separated by comma (,)"]
    multi_question_add_formulation -- "Formulation entered" --> multi_question_add_options
    multi_question_add_correct_answer["Enter the correct answer"]
    multi_question_add_options -- "Options entered" --> multi_question_add_correct_answer

    question_exists("`_Question already exists / 
    Question successfully added_`")
    free_question_add_correct_answer -- "Correct answer entered" --> question_exists
    multi_question_add_correct_answer -- "Correct answer entered" --> question_exists
    question_exists .-> database_update_menu

    remove_question_flow["Enter the question number"]
    database_update_menu == "Option 2" ==> remove_question_flow
    question_doesnot_exist["`_Question does not exist / 
    Question successfully removed_`"]
    remove_question_flow == "Question index entered" ==> question_doesnot_exist
    question_doesnot_exist .-> database_update_menu

    list_questions_display("`
    _Question 1
    ...
    Question N_
    Press ENTER to go back
    `")

    database_update_menu == "Option 3" ==> list_questions_display
    list_questions_display -. "ENTER pressed" .-> database_update_menu

    database_update_menu -. "Option 0" .-> main_menu
```

# 2. Functional Requirements Demonstration
| Description                                                                                                       | Demo     | Application behaviour                                                                                                                                              |
|-------------------------------------------------------------------------------------------------------------------|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Taking a quiz with 5 questions giving 4 correct answers and 1 incorrect answer | ![img_3.png](img/img_3.png) | Displays the results of the quiz and offers to return to the main menu                                                                                             |
| Adding a free-response question to the database | ![img_6.png](img/img_6.png) | Adds the question to "questions.txt" and returns to the "questions database" menu                                                                                  |
| Show all questions in the databse | ![img_7.png](img/img_7.png) | Displays all questions in the database and offers to return to the "questions database" menu                                                                       |
| Remove a question with index 1 from the databse | ![img_8.png](img/img_8.png) | Displays all available questions, asks for the index of the question to be deleted, deletes the question from the database and returns back to the "questions database" menu | 
| ... | ... | ...                                                                                                                                                                |



# 3. Invalid Inputs and Error Handling
| Description                                                                                                       | Demo     | Application behaviour                                                     |
|-------------------------------------------------------------------------------------------------------------------|-------------------------|---------------------------------------------------------------------------|
| The database files are not found                                                                                  | ![img_2.png](img/img_2.png) | Application starts as normal |
| Taking a quiz when the database is empty                                                                          | ![img_5.png](img/img_5.png) | The quiz is not taken, the results is displayed as _NaN_, application offers to return to the main menu |
| Checking statistics when the user has not taken any tests yet                                                     | ![img_4.png](img/img_4.png) | Empty statistics is displayed, application offers to return to the main menu |
| Removing question that does not exist. Total number of questions is 8. Trying to remove a question with index = 8 | ![img_1.png](img/img_1.png) | Question is not deleted, application returns to the database operations menu |
| ... | ... | ... |
