function addData()
{
  var nm=document.querySelector("#name").value;
  var carr=document.querySelector("#carrer").value;
  var em=document.querySelector("#email").value;
  var num=document.querySelector("#number").value;
  var clg=document.querySelector("#clg1").value;
  var marks1=document.querySelector("#percent").value;
  var clg1=document.querySelector("#clg2").value;
  var marks2=document.querySelector("#marks").value;
  var ssc=document.querySelector("#clg3").value;
  var marks3=document.querySelector("#marks1").value;
  var techi=document.querySelector("#tech").value;
  var grp1=document.querySelector("#group1").value;
  var bran1=document.querySelector("#Branch1").value;
  var grp2=document.querySelector("#group2").value;
  var bran2=document.querySelector("#Branch2").value;
  var grp3=document.querySelector("#group3").value;
  var idb=window.indexedDB || window.msIndexdDB || window.mozIndexdDB || window.webkIndexdDB;


  var open = idb.open("Resume Builder",1);

  open.onupgradeneeded=function(e){

    var request= e.target.result;

    request.createObjectStore("form_data",{keyPath:"id",autoIncrement:true});
  }
  open.onsuccess=function(e){
      var request= e.target.result;
      var transaction=request.transaction("form_data","readwrite");
      var storeDB=transaction.objectStore("form_data");
      storeDB.add({
        name:nm,
        Carrer:carr,
        email:em,
        phonenumber:num,
        education:[
          {
            degree:grp1,
            branch:bran1,
        Collegename:clg,
        Collegemarks:marks1
      },
      {
        degree:grp2,
        branch:bran2,
        Collegename:clg1,
        Collegemarks:marks2
      },
      {
        degree:grp3,
        Collegename:ssc,
        Collegemarks:marks3
      }
      ],
        Techinal:techi
      })
      window.open("index.html");
  }
  open.onerror=function(e){
      var request= e.target.result;
      console.log("indexedDB error");
  }


}
