module.exports = function multiply(first, second) {
    let firstArray=first.split('').reverse()
    let secondArray=second.split('').reverse()
    let sumArray=[]
      for (let i=0; i<firstArray.length; i++){
        for (let j=0; j<secondArray.length; j++){
          let ab=firstArray[i]*secondArray[j]
          if(!sumArray[j+i]){
            sumArray[j+i]=ab
          }
          else{
            sumArray[j+i]=sumArray[j+i]+ab
          }
        }
      }
      for (let i=0; i<sumArray.length; i++){
        let tenth=Math.floor(sumArray[i]/10)
        if(tenth>0&&i<sumArray.length-1){
          sumArray[i]=sumArray[i]%10
          sumArray[i+1]=sumArray[i+1]+tenth
        }
       else if(tenth>0){
         debugger
         sumArray[i]=sumArray[i]%10
         sumArray.push(tenth)
         break
       }
      }
      return sumArray.reverse().join('')
    }
