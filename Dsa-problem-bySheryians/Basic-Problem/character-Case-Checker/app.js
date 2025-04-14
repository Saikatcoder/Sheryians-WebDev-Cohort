function characterCaseCheck(chr){
      if(chr.length !== 1) return `please enter only single character`;

      let charCode =chr.charCodeAt(0);

      if(charCode >= 65 && charCode <=90) return `Uppercase Letter`;

      else if(charCode >= 97 && charCode <=122) return "LowerCase Letter"
      else return "Not a letter"
}
