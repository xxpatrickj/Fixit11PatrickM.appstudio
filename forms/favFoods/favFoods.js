let goodFoods = ["pizza","apples","cookies","sushi","pasta","steak"]


favFoods.onshow=function(){
 lstFoods.clear()
 for (i = 0; i <= goodFoods.length - 1; i++)
   lstFoods.addItem(goodFoods[i])
}

btnNextPage2.onclick=function(){
  ChangeForm(dessertVoting)
}

btnSelect.onclick=function(){
  NSB.MsgBox(`You picked ${lstFoods.selection} - that is a great choice!`)
}
