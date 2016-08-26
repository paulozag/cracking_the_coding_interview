var linkedListAdder = function(list1, list2){
  arrabic1 = llToArabic(list1.head)
  arrabic2 = llToArabic(list2.head)
  return arabicToLl(arrabic1 + arrabic2)
}

var llToArabic = function(head){

  if (!head.next){
    return {value: head.value,
            powerOfTen: 0}
  }
  var runningTotal = llToArabic(head.next)
  var updatedValue = runningTotal.value + (10**runningTotal.powerOfTen) * head.value
  return {  value: updatedValue,
            powerOfTen: runningTotal.powerOfTen + 1}


}

var arabicToLl = function(num){

}