 var t = "Um Teste Para Index";
   
    // console.log(t.indexOf(" "));
    var res = t.split("");
	  var texto = "";
	  for(this.contArray = 0; this.contArray <= res.length; this.contArray++){
    this.arraySimple[this.contArray] = texto;
    var texto = texto.concat(res[this.contArray]);
    texto = texto.toLowerCase();
  }
  this.product.index = this.arraySimple;
  var r =  t.indexOf(" ")
    if( r != -1){
    // console.log(r);
    var res = t.split(" ");
    var texto = "";
    // console.log(res);
    // console.log(this.contArray);
    for( let i =  0; i <= res.length - 1; i++){
    //  console.log(i);
     var res2 = res[i].toString();
      // console.log(res2);
     
      var res3 = res2.split("");
      // console.log(res3);
      var texto = "";
      for(let i = 0; i <=res3.length; i++){
        this.contArray = this.contArray + 1;
       
          this.arraySimple[this.contArray] = texto;
          var texto = texto.concat(res3[i]);
          texto = texto.toLowerCase();
        
      }
     
      // this.reparti(res2);
      
    }