var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
    selExercises.clear()
  for (i = 0; i <= exercises.length - 1; i++) 
    selExercises.addItem(exercises[i])
  for (i = 0; i <= coreExercises.length -1; i++)
    selExercises.addItem(coreExercises[i])
}

selExercises.onfocusout=function(){
let messageChoice = "You picked: " 
    for (i = 0; i <= selExercises.text.length - 1; i++)
        messageChoice = messageChoice + "  " + selExercises.text[i]
        lblExercise.value = (messageChoice)
}

btnNextPage5.onclick=function(){
  ChangeForm(mobileNav)
}
