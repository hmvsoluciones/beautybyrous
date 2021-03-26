
function switchLanguage(language){    
    $.ajax({
        url:"https://hmvsoluciones.github.io/beautybyrous/i18n/"+language+".json",
        dataType: "json",
        type:"get"
    }).done(function(data){  
        $.each(data, function(id,value ){
            console.log(id);
            console.log(value);
            $("#"+id).html(value);
        });    
    });

}
function processLangDocument(){
    var tags = document.querySelectorAll('span,img,a,label,li,option,h1,h2,h3,h4,h5,h6');
    Array.from(tags).forEach(function(value, index){
        var key = value.dataset.langkey;
        if(langDocument[key]) value.innerText = langDocument[key];
    });
}

switchLanguage("es");