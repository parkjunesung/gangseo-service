
    function sendSMS() {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;
        var timestemp = new Date();

        timestemp = timestemp.toLocaleString();
        $.ajax({
            type : "GET",
            url : "https://script.google.com/macros/s/AKfycbwo3Tp80KoFMVCXbOo_sgzEr64AcTOYAcB8Ekhy6MefhLqNfn2ZLt3UHhN3ROcdrTTN/exec",
            data : {
                접수시간 : timestemp,
                성함 : name,
                연락처 : phone,
                내용 : message,
                처리상태 : '접수'
            },
            success : function(res){
                $("#submitSuccessMessage").show();
            },
            error : function(XMLHttpRequest, textStatus, errorThrown){
                $("#submitErrorMessage").show();
            }
        })
    }