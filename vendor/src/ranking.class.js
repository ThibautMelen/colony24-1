export default class Ranking{
    constructor (){

    $('#button-classement').on('click',function(){
            //  Affiche la popup
            document.getElementById('popupClassement').style.display = "flex";
            document.getElementById('popUp').style.display = "grid";

            window.onclick = function(event) {
                if (event.target === document.getElementById('background'))
                {
                  document.getElementById('popupClassement').style.display = 'none';
                  document.getElementById('popUp').style.display = 'none';
                }
            }
        });

        $('.closeButton').on('click',function(){
          $(this).closest('.modal').css('display','none');
          $(this).closest('.popUp').css('display','none');
        });
    }
}
