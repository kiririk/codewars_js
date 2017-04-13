function DNAStrand(dna){
  var result = "";
  for(var i = 0; i < dna.length; i++){
    if(dna[i] == "A") result += "T";
    else if(dna[i] == "T") result += "A";
    else if(dna[i] == "G") result += "C";
    else if(dna[i] == "C") result += "G";
  }
  return result;
}

// var pairs = {'A':'T','T':'A','C':'G','G':'C'};

// function DNAStrand(dna){
//   return dna.split('').map(function(v){ return pairs[v] }).join('');
// }