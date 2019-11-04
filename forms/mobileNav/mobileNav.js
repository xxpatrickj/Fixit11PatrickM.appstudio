mobileNav.onshow=function(){
    hmbMenu.clear()
  hmbMenu.addItem("Login")
  hmbMenu.addItem("Favorite Foods")
  hmbMenu.addItem("Dessert Voting")
  hmbMenu.addItem("Describe Me")
  hmbMenu.addItem("Favorite Exercises")
  }
  
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") 
    return
switch(s) {
case "Login":
    ChangeForm(loginCU)
    break
case "Favorite Foods":
    ChangeForm(favFoods)
    break
case "Dessert Voting":
    ChangeForm(dessertVoting)
    break
case "Describe Me":
    ChangeForm(describeYou)
    break
case "Favorite Exercises":
    ChangeForm(favExercises)
    break
}
}