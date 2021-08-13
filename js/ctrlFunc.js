
    function sendSMS() {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var message = document.getElementById("message").value;
        var timestemp = new Date();

        timestemp = timestemp.toLocaleString();
        $.ajax({
            type : "GET",
            url : "https://script.google.com/macros/s/AKfycbzLsgzsY-jG0hhEovdNMeUydt71CksRcaj_4WIPytZgivqCf2FvbhTGDNGu_xCXcnkVCw/exec",
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